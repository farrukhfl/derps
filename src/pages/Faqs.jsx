import FaqAccordion from '../components/FaqAccordion'
import Seo from '../components/Seo'

export default function Faqs() {
  return <><Seo title="FAQs" description="Answers to common questions about DERPS implementation, migration, capabilities, and growth." /><div className="bg-dolphin-50 px-5 py-16 text-center lg:py-20"><p className="text-xs font-bold tracking-[0.2em] text-dolphin-700">HELP CENTER</p><h1 className="mt-4 text-4xl font-extrabold sm:text-5xl">Frequently asked questions</h1></div><FaqAccordion /></>
}
