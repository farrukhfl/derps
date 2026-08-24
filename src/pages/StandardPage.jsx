import Seo from '../components/Seo'
import Button from '../components/ui/Button'

const content = {
  pricing: { title: 'Pricing built around your business', eyebrow: 'DERPS PRICING', intro: '[PLACEHOLDER: Pricing overview copy. Confirm packages and pricing before publishing.]', sections: ['[PLACEHOLDER: Pricing tiers or approach]', '[PLACEHOLDER: Included modules and services]', '[PLACEHOLDER: Pricing FAQ content]'] },
  'about-us': { title: 'Business software should make work simpler', eyebrow: 'ABOUT DERPS', intro: '[PLACEHOLDER: DERPS company story and mission introduction.]', sections: ['[PLACEHOLDER: Company story]', '[PLACEHOLDER: Mission and values]', '[PLACEHOLDER: Leadership or team information]'] },
  'terms-and-conditions': { title: 'Terms and Conditions', eyebrow: 'LEGAL', intro: '[PLACEHOLDER: Effective date and introductory legal copy. Content requires legal review.]', sections: ['[PLACEHOLDER: Use of services]', '[PLACEHOLDER: Accounts and acceptable use]', '[PLACEHOLDER: Limitations, termination, and governing law]'] },
  'privacy-policy': { title: 'Privacy Policy', eyebrow: 'PRIVACY', intro: '[PLACEHOLDER: Effective date and privacy policy introduction. Content requires legal review.]', sections: ['[PLACEHOLDER: Information collected and its use]', '[PLACEHOLDER: Data sharing, storage, and security]', '[PLACEHOLDER: Privacy choices and contact details]'] },
}

export default function StandardPage({ pageKey }) {
  const page = content[pageKey]
  const legal = ['terms-and-conditions', 'privacy-policy'].includes(pageKey)
  return <><Seo title={page.title} description={`${page.title} for DERPS.`} /><section className="bg-dolphin-50 px-5 py-20 lg:px-8 lg:py-28"><div className={`${legal ? 'max-w-4xl' : 'max-w-5xl text-center'} mx-auto`}><p className="text-xs font-bold tracking-[0.2em] text-dolphin-700">{page.eyebrow}</p><h1 className="mt-5 text-balance text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">{page.title}</h1><p className={`${legal ? '' : 'mx-auto'} mt-6 max-w-2xl text-lg leading-8 text-slate-600`}>{page.intro}</p>{!legal && <Button to="/contact-us" className="mt-9">Talk to our team</Button>}</div></section><section className="px-5 py-20 lg:px-8 lg:py-28"><div className={`${legal ? 'max-w-4xl' : 'max-w-6xl'} mx-auto ${legal ? 'space-y-12' : 'grid gap-5 md:grid-cols-3'}`}>{page.sections.map((section, i) => <article key={section} className={`${legal ? 'border-b border-slate-200 pb-12' : 'rounded-2xl border border-slate-200 p-7 shadow-soft'}`}><h2 className={`${legal ? 'text-2xl' : 'text-xl'} font-bold`}>{legal ? `${i + 1}. [PLACEHOLDER: Section title]` : '[PLACEHOLDER: Section heading]'}</h2><p className="mt-4 leading-7 text-slate-600">{section}</p></article>)}</div></section></>
}
