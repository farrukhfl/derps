// prerender.js uses @sparticuz/chromium's serverless-compiled binary on
// Vercel (see launchBrowser() there) -- downloading Playwright's own full
// desktop Chromium build there too would just be wasted build time, since
// nothing ends up using it.
if (!process.env.VERCEL) {
  const { execSync } = await import('node:child_process')
  execSync('npx playwright install chromium', { stdio: 'inherit' })
}
