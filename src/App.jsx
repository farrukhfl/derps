import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import ModulePage from './pages/ModulePage'
import StandardPage from './pages/StandardPage'
import Contact from './pages/Contact'
import Faqs from './pages/Faqs'
import NotFound from './pages/NotFound'
import AboutUs from './pages/AboutUs'
import { operationsContent } from './data/operationsContent'
import { salesContent } from './data/salesContent'
import { accountingContent } from './data/accountingContent'
import { crmContent } from './data/crmContent'

export default function App() {
  return <Routes><Route element={<Layout />}><Route index element={<Home />} /><Route path="operations" element={<ModulePage content={operationsContent} />} /><Route path="sales" element={<ModulePage content={salesContent} />} /><Route path="accounting" element={<ModulePage content={accountingContent} />} /><Route path="crm" element={<ModulePage content={crmContent} />} /><Route path="about-us" element={<AboutUs />} />{['pricing', 'terms-and-conditions', 'privacy-policy'].map(page => <Route key={page} path={page} element={<StandardPage pageKey={page} />} />)}<Route path="contact-us" element={<Contact />} /><Route path="faqs" element={<Faqs />} /><Route path="*" element={<NotFound />} /></Route></Routes>
}
