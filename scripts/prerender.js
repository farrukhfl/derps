// Build-time prerendering: crawls the built SPA with a headless browser and
// writes the fully-rendered HTML for each route to dist/<route>/index.html.
// main.jsx hydrates this markup on the client instead of re-rendering from
// scratch, so a fresh visitor landing directly on any page gets real content
// in the initial HTML response -- no loading-fallback flash, no layout shift,
// and search engines see fully-rendered pages.
import http from 'node:http'
import { createReadStream, existsSync, mkdirSync, readFileSync, statSync, writeFileSync } from 'node:fs'
import { extname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { chromium } from 'playwright'

// Locally-downloaded Playwright browsers are full desktop Chrome builds that
// assume a full desktop Linux/Windows/macOS -- on Vercel's minimal build
// container they download fine (no sandboxing on that step) but fail to
// LAUNCH, missing shared libraries like libnspr4.so that a full desktop
// install would normally provide. @sparticuz/chromium ships a build
// specifically compiled for serverless/minimal-container environments (no
// missing-.so-file problem), so use that binary whenever this is plainly a
// hosted CI build rather than a developer's own machine.
async function launchBrowser() {
  if (process.env.VERCEL || process.env.CI) {
    const chromiumBinary = (await import('@sparticuz/chromium')).default
    return chromium.launch({
      executablePath: await chromiumBinary.executablePath(),
      args: chromiumBinary.args,
      headless: true,
    })
  }
  return chromium.launch()
}

const DIST = fileURLToPath(new URL('../dist', import.meta.url))
const PORT = 4321

const ROUTES = [
  '/',
  '/operations',
  '/sales',
  '/accounting',
  '/crm',
  '/projects',
  '/hr',
  '/communication',
  '/support',
  '/about-us',
  '/industries',
  '/solutions',
  '/terms-and-conditions',
  '/privacy-policy',
  '/contact-us',
  '/faqs',
  // Not a real app route -- doesn't match any <Route path="...">, so React
  // Router falls through to the catch-all NotFound page. Prerendering it
  // gives Apache (see public/.htaccess) real, hydration-safe markup to serve
  // as a genuine 404 response for any URL that isn't one of the routes
  // above, instead of silently falling back to serving Home's markup with a
  // 200 status for typos and dead links.
  '/404',
]

const MIME = {
  '.html': 'text/html', '.js': 'application/javascript', '.css': 'text/css',
  '.png': 'image/png', '.webp': 'image/webp', '.gif': 'image/gif', '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml', '.json': 'application/json', '.woff2': 'font/woff2', '.txt': 'text/plain',
}

// The pristine, un-prerendered shell -- captured once, before the loop starts
// overwriting dist/index.html with route-specific prerendered output. Every
// route except the ones already finished must be served THIS, not whatever
// route happened to run first (routes run sequentially and each write their
// own dist/<route>/index.html, so a naive "fall back to dist/index.html"
// would serve route 1's rendered page at every other route's URL until its
// own file exists -- causing a client-side route mismatch and a full
// discard-and-rerender on "hydration", which is exactly what this script
// exists to avoid).
const pristineShell = readFileSync(join(DIST, 'index.html'), 'utf8')

function startStaticServer() {
  const server = http.createServer((req, res) => {
    const urlPath = decodeURIComponent(req.url.split('?')[0])
    const filePath = join(DIST, urlPath)
    if (existsSync(filePath) && statSync(filePath).isFile()) {
      res.setHeader('Content-Type', MIME[extname(filePath)] || 'application/octet-stream')
      createReadStream(filePath).pipe(res)
      return
    }
    const indexPath = join(filePath, 'index.html')
    if (existsSync(indexPath)) {
      res.setHeader('Content-Type', 'text/html')
      createReadStream(indexPath).pipe(res)
      return
    }
    res.setHeader('Content-Type', 'text/html') // SPA fallback, mirrors .htaccess -- always the pristine shell
    res.end(pristineShell)
  })
  return new Promise((resolve) => server.listen(PORT, () => resolve(server)))
}

async function revealFullPage(page) {
  const height = await page.evaluate(() => document.body.scrollHeight)
  for (let y = 0; y < height; y += 500) {
    await page.evaluate((y) => window.scrollTo(0, y), y)
    await page.waitForTimeout(60)
  }
  // Reveals triggered near the bottom of a long page (staggered whileInView
  // items, each with their own delay) have barely had any time to transition
  // by the time the scroll loop above reaches them -- wait here, at the
  // bottom, before moving on, so the last-triggered ones finish settling
  // instead of getting captured mid-transition.
  await page.waitForTimeout(1200)
  await page.evaluate(() => window.scrollTo(0, 0)) // land back at the top for the captured snapshot
  await page.evaluate(() => document.fonts.ready)
  await page.waitForTimeout(300)
}

// Three fixups applied atomically, in the SAME evaluate() call that captures
// the final HTML -- all need to be the literal last thing that touches the
// DOM before serialization, or a stray animation frame can undo them first:
//
// 1. ScrollProgress's bar is spring-animated (useSpring with restDelta: 0.001),
//    so it settles NEAR zero (e.g. 0.0012) but never exactly "0" -- and forcing
//    it via a separate, earlier evaluate() call is unreliable, because the
//    spring's own rAF loop can still tick again afterward and overwrite it
//    before capture (confirmed: some routes came out fixed, others didn't,
//    with no code difference between them -- a race, not a logic bug).
// 2. React serializes inline styles as "prop:value;prop2:value2" (no space
//    after the colon, no trailing semicolon). The browser's own outerHTML
//    serialization writes "prop: value; prop2: value2;" instead -- same
//    value, different text. React's hydration check is a literal string
//    compare, so that formatting difference alone mismatches every
//    inline-styled element (most of the page, with framer-motion driving
//    most animations here) even when nothing is visually different.
// 3. JSX like `DERPS {feature.name}` renders as TWO adjacent text nodes
//    ("DERPS " and "Operations"), which is exactly what React expects to
//    find when it hydrates. But this page was never rendered by
//    renderToString -- it was rendered client-side (createRoot, in THIS
//    browser) and then serialized back to an HTML string via outerHTML.
//    outerHTML has no concept of node boundaries within a text run, so two
//    adjacent Text nodes serialize as one continuous run of characters.
//    A real renderToString avoids this by emitting a literal `<!-- -->`
//    between adjacent text expressions specifically so the parser that
//    later re-reads the HTML preserves the boundary; we have to insert
//    that same marker ourselves before serializing, or the browser that
//    loads this static file coalesces "DERPS " + "Operations" into one
//    "DERPS Operations" text node and hydration mismatches against React's
//    two-child expectation.
function captureSettledHtml(page) {
  return page.evaluate(() => {
    const bar = document.querySelector('.fixed.inset-x-0.top-0.z-\\[70\\]')
    if (bar) bar.style.transform = 'scaleX(0)'

    // Decorative elements with an infinite-repeat `animate` loop (see the
    // `data-loop-anim` attribute) are mid-cycle by the time we get here, same
    // problem as the scroll bar above. The client only starts these loops
    // after mount (src/utils/hydrationFlag.js's useStartLoopAfterMount), so
    // its first hydration paint renders each one at its `initial` rest
    // value -- freeze the captured snapshot back to that same rest value or
    // the two won't match. `data-rest-opacity` covers the couple of loops
    // that animate opacity too (ClosingCta's pulsing rings).
    document.querySelectorAll('[data-loop-anim]').forEach((el) => {
      if (el.dataset.restOpacity) {
        // Has an explicit `initial` on the client (e.g. ClosingCta's rings),
        // so its first hydration paint DOES carry an explicit inline style --
        // match it exactly (data-rest-transform carries that initial scale)
        // rather than assuming identity.
        el.style.transform = el.dataset.restTransform || 'none'
        el.style.opacity = el.dataset.restOpacity
      } else {
        // No `initial` prop client-side means its first hydration paint has
        // no motion-managed style at all -- match that absence exactly,
        // rather than leaving an explicit (if visually equivalent) value.
        el.style.removeProperty('transform')
        if (!el.getAttribute('style')) el.removeAttribute('style')
      }
    })

    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_ELEMENT)
    let el = walker.currentNode
    do {
      const children = Array.from(el.childNodes)
      for (let i = 0; i < children.length - 1; i++) {
        if (children[i].nodeType === 3 && children[i + 1].nodeType === 3) {
          el.insertBefore(document.createComment(''), children[i + 1])
        }
      }
    } while ((el = walker.nextNode()))

    document.querySelectorAll('[style]').forEach((el) => {
      const normalized = el
        .getAttribute('style')
        .split(';')
        .map((decl) => decl.trim())
        .filter(Boolean)
        .map((decl) => {
          const i = decl.indexOf(':')
          return i === -1 ? decl : `${decl.slice(0, i).trim()}:${decl.slice(i + 1).trim()}`
        })
        .join(';')
      el.setAttribute('style', normalized)
    })

    return '<!doctype html>\n' + document.documentElement.outerHTML
  })
}

async function main() {
  const server = await startStaticServer()
  const browser = await launchBrowser()
  // Forces whileInView reveals to resolve immediately during the scroll pass
  // above instead of waiting out their CSS transition -- purely a speed/
  // determinism win for this script, the captured end state is the same either way.
  const ctx = await browser.newContext({ reducedMotion: 'reduce' })
  const page = await ctx.newPage()

  for (const route of ROUTES) {
    await page.goto(`http://localhost:${PORT}${route}`, { waitUntil: 'networkidle' })
    await revealFullPage(page)
    const html = await captureSettledHtml(page)

    if (route === '/404') {
      // Written as a plain file at the dist root, not a directory with its
      // own index.html -- that's the exact path public/.htaccess's
      // `ErrorDocument 404 /404.html` expects Apache to serve.
      writeFileSync(join(DIST, '404.html'), html)
    } else {
      const outDir = route === '/' ? DIST : join(DIST, route)
      mkdirSync(outDir, { recursive: true })
      writeFileSync(join(outDir, 'index.html'), html)
    }
    console.log(`prerendered ${route}`)
  }

  await browser.close()
  server.close()
}

main().catch((err) => {
  console.error('Prerender failed:', err)
  process.exit(1)
})
