import { motion } from 'framer-motion'
import { Sparkles, Check, ShieldCheck, Zap } from 'lucide-react'
import Seo from '../components/Seo'
import Button from '../components/ui/Button'
import { skipInitialAnimation } from '../utils/hydrationFlag'

const content = {
  solutions: {
    title: 'Modular Enterprise Solutions Built Around Your Business',
    seoTitle: 'Modular ERP Deployment Options',
    seoDescription: 'Deploy DERPS module-by-module or as a complete suite, with multi-tenant architecture, RBAC governance, and zero third-party integration overhead.',
    eyebrow: 'TAILORED DEPLOYMENT',
    intro: 'Every enterprise operates differently. DERPS offers a flexible, modular deployment model so you can implement the exact capabilities your company needs today and scale effortlessly as your operations grow.',
    cta: 'Request a Custom Consultation',
    bannerImage: '/DERPS Website images/solutions/banner.gif',
    sections: [
      {
        title: 'Modular Deployment by Department',
        body: 'Whether your priority is modernizing Merchant CRM and onboarding, streamlining serialized inventory and FedEx shipping labels, implementing double-entry accounting with multi-state tax reports, or adopting the complete unified ERP suite, DERPS can be configured to fit your exact operational scope.',
      },
      {
        title: 'Multi-Tenant Architecture & Governance',
        body: 'Manage child tenant entities, independent ISO brands, or regional business units under one umbrella. Enjoy isolated data partitions, custom white-label logos, and granular Role-Based Access Control (RBAC) down to route and feature codes.',
      },
      {
        title: 'Zero Integration Overhead',
        body: 'Eliminate the cost, maintenance, and synchronization errors of bridging disconnected third-party apps. All DERPS modules share a unified data layer, WebSockets for real-time chat/alerts, WebRTC video calling, and cloud document storage right out of the box.',
      },
    ],
  },
  pricing: {
    title: 'Modular Enterprise Solutions Built Around Your Business',
    eyebrow: 'TAILORED DEPLOYMENT',
    intro: 'Every enterprise operates differently. DERPS offers a flexible, modular deployment model so you can implement the exact capabilities your company needs today and scale effortlessly as your operations grow.',
    cta: 'Request a Custom Consultation',
    bannerImage: '/DERPS Website images/solutions/banner.gif',
    sections: [
      {
        title: 'Modular Deployment by Department',
        body: 'Whether your priority is modernizing Merchant CRM and onboarding, streamlining serialized inventory and FedEx shipping labels, implementing double-entry accounting with multi-state tax reports, or adopting the complete unified ERP suite, DERPS can be configured to fit your exact operational scope.',
      },
      {
        title: 'Multi-Tenant Architecture & Governance',
        body: 'Manage child tenant entities, independent ISO brands, or regional business units under one umbrella. Enjoy isolated data partitions, custom white-label logos, and granular Role-Based Access Control (RBAC) down to route and feature codes.',
      },
      {
        title: 'Zero Integration Overhead',
        body: 'Eliminate the cost, maintenance, and synchronization errors of bridging disconnected third-party apps. All DERPS modules share a unified data layer, WebSockets for real-time chat/alerts, WebRTC video calling, and cloud document storage right out of the box.',
      },
    ],
  },
  'terms-and-conditions': {
    title: 'Terms and Conditions',
    seoDescription: 'Read the terms and conditions governing access to and use of the DERPS enterprise resource planning platform and its connected cloud services.',
    eyebrow: 'LEGAL & COMPLIANCE',
    intro: 'These Terms and Conditions govern access to and use of the Dolphin Enterprise Resources Planning System (DERPS) platform, software modules, and associated cloud services.',
    sections: [
      {
        title: 'Platform Access & Authorized Use',
        body: 'Customers and authorized end-users are granted access to DERPS subject to active commercial agreements. Access is restricted to lawful business operations in accordance with configured user licenses and security credentials.',
      },
      {
        title: 'User Credentials & Security Administration',
        body: 'Customer organizations are responsible for safeguarding user login credentials and properly assigning Role-Based Access Control (RBAC) permissions among their employees, contractors, and agents.',
      },
      {
        title: 'Customer Data Ownership & Privacy',
        body: 'All business data, merchant applications, transaction ledgers, inventory records, and files uploaded to or generated within DERPS remain the exclusive intellectual and proprietary property of the customer organization.',
      },
      {
        title: 'Service Availability & Maintenance',
        body: 'DERPS is engineered for high availability and dependable performance. Routine maintenance and platform improvements are scheduled during off-peak hours with advance notice to minimize operational impact.',
      },
      {
        title: 'Limitation of Liability & Governing Law',
        body: 'These terms are governed by and construed under applicable corporate laws. Neither party shall be liable for indirect, incidental, or consequential damages arising from standard business operations.',
      },
    ],
  },
  'privacy-policy': {
    title: 'Privacy Policy',
    seoDescription: 'Learn how DERPS collects, encrypts, and protects your business and personal data across our enterprise resource planning platform.',
    eyebrow: 'DATA PROTECTION & SECURITY',
    intro: 'At DERPS, we maintain the highest standards of data privacy, confidentiality, and technical protection for all organizations and individuals utilizing our platform.',
    sections: [
      {
        title: 'Information Collection & Scope',
        body: 'We collect and process only the business and user information necessary to provide ERP functionality, user authentication, transaction processing, communication services, and system security logging.',
      },
      {
        title: 'Data Encryption & Enterprise Security',
        body: 'All customer data is protected using enterprise-grade encryption both in transit (TLS/HTTPS) and at rest. Access to production systems is strictly gated by multi-factor authentication and role-based policies.',
      },
      {
        title: 'No Data Monetization or Unauthorized Sharing',
        body: 'We never sell, lease, or monetize customer data. Information is only processed to fulfill platform operations or transmitted to authorized third-party infrastructure providers (such as cloud hosting) under strict confidentiality agreements.',
      },
      {
        title: 'Data Retention & Export Rights',
        body: 'Customers maintain full rights to export their operational data, financial reports, customer records, and files at any time during their service agreement. Data is securely retained or purged in compliance with applicable regulatory standards.',
      },
      {
        title: 'Privacy Inquiries & Support',
        body: 'If you have questions regarding data security, compliance standards, or our privacy practices, please contact our dedicated security team at support@goderps.com or by calling 888-696-1049.',
      },
    ],
  },
}

export default function StandardPage({ pageKey }) {
  const page = content[pageKey] || content.solutions
  const legal = ['terms-and-conditions', 'privacy-policy'].includes(pageKey)
  const isSolutions = ['solutions', 'pricing'].includes(pageKey)

  return (
    <>
      <Seo
        title={page.seoTitle || page.title}
        description={page.seoDescription || `${page.title} for DERPS.`}
        image={page.bannerImage}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-dolphin-50 via-white to-dolphin-50/40 px-5 py-20 lg:px-8 lg:py-28">
        <div className="dot-grid absolute inset-0 opacity-30 [mask-image:linear-gradient(to_bottom,black,transparent_80%)]" aria-hidden="true" />

        <div className="relative mx-auto max-w-7xl">
          {isSolutions && page.bannerImage ? (
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-dolphin-200/80 bg-white px-3.5 py-1 text-xs font-bold tracking-[0.2em] text-dolphin-700 shadow-xs uppercase">
                  <Sparkles size={14} className="text-dolphin-600" />
                  <span>{page.eyebrow}</span>
                </div>

                <h1 className="mt-5 text-balance text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:text-5xl text-slate-900">
                  {page.title}
                </h1>

                <p className="mt-6 text-lg leading-8 text-slate-600">
                  {page.intro}
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Button to="/contact-us" className="shadow-md shadow-dolphin-600/20">
                    {page.cta || 'Talk to Our Team'}
                  </Button>
                  <Button to="/contact-us" variant="secondary">
                    Request Pricing Proposal
                  </Button>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-6 text-sm font-semibold text-slate-700 pt-6 border-t border-slate-200/70">
                  <span className="flex items-center gap-2">
                    <Check className="text-emerald-600" size={16} /> Modular Activation
                  </span>
                  <span className="flex items-center gap-2">
                    <Check className="text-emerald-600" size={16} /> Zero Lock-In Overhead
                  </span>
                </div>
              </div>

              {/* Solutions Banner GIF Showcase */}
              <motion.div
                initial={skipInitialAnimation ? false : { opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="relative mx-auto w-full max-w-xl"
              >
                <div className="blue-glow overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-3.5 shadow-2xl">
                  <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-900 group">
                    <div className="flex h-9 items-center justify-between border-b border-white/10 bg-slate-800/90 px-4">
                      <div className="flex items-center gap-1.5">
                        <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                        <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                      </div>
                      <span className="text-[11px] font-semibold text-slate-300">
                        DERPS Enterprise Solution Map
                      </span>
                      <span className="flex items-center gap-1 text-[10px] text-emerald-400 font-bold">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" /> Live
                      </span>
                    </div>

                    <div className="overflow-hidden bg-slate-950 flex items-center justify-center p-2 sm:p-3">
                      <img
                        src={page.bannerImage}
                        alt="DERPS Solutions Overview"
                        className="w-full h-auto max-h-[520px] object-contain transition duration-500 group-hover:scale-[1.02]"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          ) : (
            <div className={`${legal ? 'max-w-4xl' : 'max-w-5xl text-center'} mx-auto`}>
              <div className="inline-flex items-center gap-2 rounded-full border border-dolphin-200/80 bg-white px-3.5 py-1 text-xs font-bold tracking-[0.2em] text-dolphin-700 shadow-xs uppercase">
                {page.eyebrow}
              </div>
              <h1 className="mt-5 text-balance text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl text-slate-900">
                {page.title}
              </h1>
              <p className={`${legal ? '' : 'mx-auto'} mt-6 max-w-3xl text-lg leading-8 text-slate-600`}>
                {page.intro}
              </p>
              {!legal && (
                <Button to="/contact-us" className="mt-9">
                  {page.cta || 'Talk to Our Team'}
                </Button>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Sections Grid */}
      <section className="px-5 py-20 lg:px-8 lg:py-28">
        <div className={`${legal ? 'max-w-4xl' : 'max-w-6xl'} mx-auto ${legal ? 'space-y-10' : 'grid gap-6 md:grid-cols-3'}`}>
          {page.sections.map((section, i) => (
            <article
              key={section.title}
              className={`${legal ? 'border-b border-slate-200 pb-10 last:border-b-0' : 'rounded-2xl border border-slate-200 bg-white p-8 shadow-soft transition hover:border-dolphin-300 hover:shadow-lg'}`}
            >
              <h2 className={`${legal ? 'text-2xl' : 'text-xl'} font-bold text-slate-900`}>
                {legal ? `${i + 1}. ${section.title}` : section.title}
              </h2>
              <p className="mt-4 leading-7 text-slate-600 text-sm sm:text-base">{section.body}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
