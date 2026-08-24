import { Helmet } from 'react-helmet-async'

export default function Seo({ title, description }) {
  const fullTitle = title === 'Home' ? 'DERPS | One Powerful ERP' : `${title} | DERPS`
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
    </Helmet>
  )
}
