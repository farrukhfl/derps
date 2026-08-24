import Seo from '../components/Seo'
import Hero from '../components/Hero'
import IndustriesMarquee from '../components/IndustriesMarquee'
import ModuleGrid from '../components/ModuleGrid'
import WhyChooseDerps from '../components/WhyChooseDerps'
import FeatureTabs from '../components/FeatureTabs'
import TrustSection from '../components/TrustSection'
import ImpactSection from '../components/ImpactSection'
import LeadForm from '../components/LeadForm'
import ClosingCta from '../components/ClosingCta'
import FaqAccordion from '../components/FaqAccordion'

export default function Home() {
  return <><Seo title="Home" description="Run finance, operations, sales, CRM, projects, HR, and more on one connected cloud platform with DERPS." /><Hero /><IndustriesMarquee /><ModuleGrid /><WhyChooseDerps /><FeatureTabs /><TrustSection /><ImpactSection /><LeadForm /><ClosingCta /><FaqAccordion limit={5} /></>
}
