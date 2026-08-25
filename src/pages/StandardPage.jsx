import Seo from '../components/Seo'
import Button from '../components/ui/Button'

const content = {
  pricing: {
    title: 'Modular Enterprise Solutions Built Around Your Business',
    eyebrow: 'TAILORED DEPLOYMENT',
    intro: 'Every enterprise operates differently. DERPS offers a flexible, modular deployment model so you can implement the exact capabilities your company needs today and scale effortlessly as your operations grow.',
    cta: 'Request a Custom Consultation',
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
        body: 'If you have questions regarding data security, compliance standards, or our privacy practices, please contact our dedicated security team at support@derps.com or by calling 888-696-1049.',
      },
    ],
  },
}

export default function StandardPage({ pageKey }) {
  const page = content[pageKey] || content.pricing
  const legal = ['terms-and-conditions', 'privacy-policy'].includes(pageKey)

  return (
    <>
      <Seo title={page.title} description={`${page.title} for DERPS.`} />
      <section className="bg-dolphin-50 px-5 py-20 lg:px-8 lg:py-28">
        <div className={`${legal ? 'max-w-4xl' : 'max-w-5xl text-center'} mx-auto`}>
          <p className="text-xs font-bold tracking-[0.2em] text-dolphin-700">{page.eyebrow}</p>
          <h1 className="mt-5 text-balance text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
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
      </section>

      <section className="px-5 py-20 lg:px-8 lg:py-28">
        <div className={`${legal ? 'max-w-4xl' : 'max-w-6xl'} mx-auto ${legal ? 'space-y-10' : 'grid gap-6 md:grid-cols-3'}`}>
          {page.sections.map((section, i) => (
            <article
              key={section.title}
              className={`${legal ? 'border-b border-slate-200 pb-10 last:border-b-0' : 'rounded-2xl border border-slate-200 bg-white p-8 shadow-soft'}`}
            >
              <h2 className={`${legal ? 'text-2xl' : 'text-xl'} font-bold text-slate-900`}>
                {legal ? `${i + 1}. ${section.title}` : section.title}
              </h2>
              <p className="mt-4 leading-7 text-slate-600">{section.body}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
