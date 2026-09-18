// Single source of truth for the canonical production domain -- used by
// Seo.jsx (canonical/og:url tags) and scripts/prerender.js (sitemap.xml), so
// the two can never drift out of sync with each other.
export const SITE_URL = 'https://goderps.com'

export function absoluteUrl(path) {
  return `${SITE_URL}${encodeURI(path)}`
}

export const DEFAULT_OG_IMAGE = absoluteUrl('/DERPS Website images/Homepage images/homepage hero banner top.webp')
