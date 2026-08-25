import { Mail, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import derpsLogo from '../derps logo.png'

const groups = [
  {
    title: 'Our Company',
    links: [
      ['Industries', '/#industries'],
      ['About Us', '/about-us'],
      ['Solutions', '/pricing'],
      ['Contact Us', '/contact-us'],
    ],
  },
  {
    title: 'Core Modules',
    links: [
      ['Operations', '/operations'],
      ['Sales Flow', '/sales'],
      ['Accounting', '/accounting'],
      ['Merchant CRM', '/crm'],
    ],
  },
  {
    title: 'Productivity & Support',
    links: [
      ['Projects & QA', '/projects'],
      ['HR & Staff', '/hr'],
      ['Communication', '/communication'],
      ['Helpdesk & Support', '/support'],
    ],
  },
  {
    title: 'Resources & Terms',
    links: [
      ['FAQs', '/faqs'],
      ['Terms and Conditions', '/terms-and-conditions'],
      ['Privacy Policy', '/privacy-policy'],
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 border-b border-white/15 pb-14 lg:grid-cols-[1.3fr_2fr]">
          <div>
            <div className="mb-6">
              <img
                src={derpsLogo}
                alt="DERPS Logo"
                className="h-12 md:h-14 w-auto max-w-[210px] object-contain rounded-lg bg-white/10 p-1.5 backdrop-blur"
              />
            </div>
            <p className="max-w-md text-balance text-xl font-semibold leading-8 text-slate-200">
              On a Mission To Modernize Business Management And Help Real Companies Scale Efficiently.
            </p>
            <div className="mt-7 space-y-3 text-sm text-slate-300">
              <a className="flex items-center gap-2 hover:text-white" href="mailto:support@derps.com">
                <Mail size={16} />support@derps.com
              </a>
              <a className="flex items-center gap-2 hover:text-white" href="tel:8886961049">
                <Phone size={16} />888-696-1049
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {groups.map(group => (
              <div key={group.title}>
                <h3 className="mb-5 text-sm font-bold tracking-wide text-white">{group.title}</h3>
                <ul className="space-y-3">
                  {group.links.map(([label, path]) => (
                    <li key={label}>
                      <Link className="text-sm text-slate-400 hover:text-white transition" to={path}>
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4 pt-8 text-xs text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Dolphin Enterprise Resources Planning System. All Rights Reserved.</p>
          <div className="flex gap-5">
            <Link to="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link>
            <Link to="/terms-and-conditions" className="hover:text-white transition">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
