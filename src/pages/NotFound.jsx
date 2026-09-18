import Seo from '../components/Seo'
import Button from '../components/ui/Button'

export default function NotFound() {
  return <section className="grid min-h-[65vh] place-items-center px-5 text-center"><Seo title="Page Not Found" description="The requested DERPS page could not be found." noindex /><div><p className="text-sm font-bold text-dolphin-700">404</p><h1 className="mt-3 text-4xl font-extrabold">That page isn’t here</h1><p className="mt-4 text-slate-600">Return to the DERPS homepage to keep exploring.</p><Button to="/" className="mt-8">Back home</Button></div></section>
}
