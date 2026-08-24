import { Mail, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'

const groups = [
  { title: 'Our Company', links: [['Industries', '/#industries'], ['About Us', '/about-us'], ['Pricing', '/pricing'], ['Contact Us', '/contact-us']] },
  { title: 'Modules', links: [['Operations', '/operations'], ['Sales', '/sales'], ['Accounting', '/accounting'], ['CRM', '/crm']] },
  { title: 'Terms', links: [['Terms and Conditions', '/terms-and-conditions'], ['FAQs', '/faqs']] },
]

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 border-b border-white/15 pb-14 lg:grid-cols-[1.5fr_2fr]">
          <div><div className="mb-6 flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-xl bg-dolphin-500 font-display text-xl font-extrabold">D</span><span className="font-display text-2xl font-bold">DERPS</span></div><p className="max-w-md text-balance text-xl font-semibold leading-8 text-slate-200">On a Mission To Modernize Merchant Services And Help Real Businesses Win In A Fast-Moving World.</p><div className="mt-7 space-y-3 text-sm text-slate-300"><a className="flex items-center gap-2 hover:text-white" href="mailto:support@derps.com"><Mail size={16} />support@derps.com</a><a className="flex items-center gap-2 hover:text-white" href="tel:8886961049"><Phone size={16} />888-696-1049</a></div></div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {groups.map(group => <div key={group.title}><h3 className="mb-5 text-sm font-bold tracking-wide">{group.title}</h3><ul className="space-y-3">{group.links.map(([label, path]) => <li key={label}><Link className="text-sm text-slate-400 hover:text-white" to={path}>{label}</Link></li>)}</ul></div>)}
            <div><h3 className="mb-5 text-sm font-bold tracking-wide">Resources</h3><div className="flex gap-3"><a href="#linkedin" aria-label="LinkedIn" className="grid h-9 w-9 place-items-center rounded-full border border-white/20 text-xs font-bold hover:bg-white/10">in</a><a href="#instagram" aria-label="Instagram" className="grid h-9 w-9 place-items-center rounded-full border border-white/20 text-xs font-bold hover:bg-white/10">ig</a><a href="#facebook" aria-label="Facebook" className="grid h-9 w-9 place-items-center rounded-full border border-white/20 text-xs font-bold hover:bg-white/10">f</a></div></div>
          </div>
        </div>
        <div className="flex flex-col gap-4 pt-8 text-xs text-slate-400 md:flex-row md:items-center md:justify-between"><p>© 2026 Dolphin Enterprise Resources Planning System. All Rights Reserved.</p><div className="flex gap-5"><Link to="/privacy-policy">Privacy Policy</Link><Link to="/terms-and-conditions">Terms of Use</Link></div></div>
      </div>
    </footer>
  )
}
