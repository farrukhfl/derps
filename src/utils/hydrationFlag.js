// Every route is prerendered (see scripts/prerender.js), so the very first
// client render is always a hydration against real, already-visible markup.
// Framer Motion's mount animations (initial -> animate) assume a fresh,
// invisible starting point, which mismatches that prerendered markup and
// makes React discard-and-rerender on first paint -- reintroducing the exact
// flash prerendering exists to prevent. Skipping `initial` for that one first
// render (via `initial={false}`) avoids the mismatch; any later mount (e.g.
// a client-side route change with no prerendered markup) animates normally.
import { useEffect, useState } from 'react'

export let skipInitialAnimation =
  typeof document !== 'undefined' && !!document.getElementById('root')?.hasChildNodes()

export function clearHydrationFlag() {
  skipInitialAnimation = false
}

// Decorative elements with an infinite-repeat `animate` loop (background blur
// circles, floating badges, etc.) bake an arbitrary mid-cycle transform into
// the prerendered HTML (see scripts/prerender.js, which freezes them back to
// their rest state before capture so the static markup has no transform).
// A fresh client mount must render that same rest state on its FIRST pass
// (animate={} below) so hydration has something to match -- only starting the
// actual loop in an effect, after hydration has already committed.
export function useStartLoopAfterMount() {
  const [started, setStarted] = useState(false)
  useEffect(() => setStarted(true), [])
  return started
}
