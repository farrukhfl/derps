import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'
import { SITE_URL, DEFAULT_OG_IMAGE, absoluteUrl } from '../utils/seo'

export default function Seo({ title, description, image, noindex = false }) {
  const { pathname } = useLocation()
  const fullTitle = title === 'Home' ? 'DERPS | One Powerful ERP' : `${title} | DERPS`
  const canonicalUrl = pathname === '/' ? SITE_URL : `${SITE_URL}${pathname.replace(/\/$/, '')}`
  const ogImage = image ? absoluteUrl(image) : DEFAULT_OG_IMAGE

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      <meta property="og:site_name" content="DERPS" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  )
}
