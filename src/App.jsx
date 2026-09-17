import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import OperationsPage from './pages/OperationsPage'
import SalesPage from './pages/SalesPage'
import AccountingPage from './pages/AccountingPage'
import CrmPage from './pages/CrmPage'
import ProjectsPage from './pages/ProjectsPage'
import HrPage from './pages/HrPage'
import CommunicationPage from './pages/CommunicationPage'
import SupportPage from './pages/SupportPage'
import AboutUs from './pages/AboutUs'
import Industries from './pages/Industries'
import StandardPage from './pages/StandardPage'
import Contact from './pages/Contact'
import Faqs from './pages/Faqs'
import NotFound from './pages/NotFound'

// Every route below is prerendered at build time (see scripts/prerender.js),
// so a fresh visit to any page gets fully-formed HTML immediately -- no
// loading-fallback flash, no layout shift, and search engines see real
// content. That makes route-level code-splitting (React.lazy) counterproductive
// here: React can't safely hydrate a lazy/Suspense boundary against prerendered
// markup (it can't yet know the chunk is "already resolved"), so it falls back
// to discarding and re-rendering client-side -- reintroducing the exact flash
// prerendering exists to prevent. Plain static imports hydrate cleanly.
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="operations" element={<OperationsPage />} />
        <Route path="sales" element={<SalesPage />} />
        <Route path="accounting" element={<AccountingPage />} />
        <Route path="crm" element={<CrmPage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="hr" element={<HrPage />} />
        <Route path="communication" element={<CommunicationPage />} />
        <Route path="support" element={<SupportPage />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="industries" element={<Industries />} />
        <Route path="solutions" element={<StandardPage pageKey="solutions" />} />
        <Route path="pricing" element={<Navigate to="/contact-us" replace />} />
        {['terms-and-conditions', 'privacy-policy'].map(page => (
          <Route key={page} path={page} element={<StandardPage pageKey={page} />} />
        ))}
        <Route path="contact-us" element={<Contact />} />
        <Route path="faqs" element={<Faqs />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
