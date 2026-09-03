import Seo from '../components/Seo'
import Hero from '../components/Hero'
import IndustriesMarquee from '../components/IndustriesMarquee'
import ModuleGrid from '../components/ModuleGrid'
import SaaSStackComparison from '../components/SaaSStackComparison'
import InteractiveWorkflowEngine from '../components/InteractiveWorkflowEngine'
import WhyChooseDerps from '../components/WhyChooseDerps'
import FeatureTabs from '../components/FeatureTabs'
import TrustSection from '../components/TrustSection'
import ImpactSection from '../components/ImpactSection'
import LeadForm from '../components/LeadForm'
import ClosingCta from '../components/ClosingCta'
import FaqAccordion from '../components/FaqAccordion'

export default function Home() {
  return (
    <>
      <Seo
        title="Connected Cloud ERP for Growing Enterprises"
        description="Run operations, serialized inventory, sales quotes, merchant CRM, double-entry accounting, QA tasks, and team chat on one connected cloud platform."
      />
      <Hero />
      <IndustriesMarquee />
      <ModuleGrid />
      <SaaSStackComparison />
      <InteractiveWorkflowEngine />
      <WhyChooseDerps />
      <FeatureTabs />
      <TrustSection />
      <ImpactSection />
      <LeadForm />
      <ClosingCta />
      <FaqAccordion limit={5} />
    </>
  )
}
