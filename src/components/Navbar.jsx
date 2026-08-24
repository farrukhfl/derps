import { useEffect, useRef, useState } from 'react'
import { ChevronDown, Menu, X, Boxes, ChartNoAxesCombined, Calculator, UsersRound } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Button from './ui/Button'

const modules = [
  { name: 'Operations', path: '/operations', icon: Boxes, text: 'Inventory, purchasing, and daily workflows' },
  { name: 'Sales', path: '/sales', icon: ChartNoAxesCombined, text: 'Leads, quotes, orders, and performance' },
  { name: 'Accounting', path: '/accounting', icon: Calculator, text: 'Invoices, expenses, and reporting' },
  { name: 'CRM', path: '/crm', icon: UsersRound, text: 'Customer context and relationships' },
]

export default function Navbar() {
  const [modulesOpen, setModulesOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const menuRef = useRef(null)

  useEffect(() => { setMobileOpen(false); setModulesOpen(false) }, [location.pathname])
  useEffect(() => {
    const close = (event) => { if (!menuRef.current?.contains(event.target)) setModulesOpen(false) }
    document.addEventListener('mousedown', close)
    return () => document.removeEventListener('mousedown', close)
  }, [])

  const linkClass = ({ isActive }) => `text-sm font-semibold transition hover:text-dolphin-700 ${isActive ? 'text-dolphin-700' : 'text-slate-700'}`

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8" aria-label="Main navigation">
        <Link to="/" className="group flex items-center gap-3" aria-label="DERPS home">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-dolphin-600 font-display text-lg font-extrabold text-white shadow-lg shadow-dolphin-600/20 transition duration-300 group-hover:-rotate-3 group-hover:scale-105">D</span>
          <span><strong className="block font-display text-xl leading-5">DERPS</strong><small className="hidden text-[10px] font-bold uppercase tracking-wider text-slate-500 sm:block">Business, connected</small></span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          <div className="relative -my-5 py-5" ref={menuRef} onMouseEnter={() => setModulesOpen(true)} onMouseLeave={() => setModulesOpen(false)} onFocus={() => setModulesOpen(true)} onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setModulesOpen(false) }}>
            <button className="flex items-center gap-1 text-sm font-semibold text-slate-700 hover:text-dolphin-700" onClick={() => setModulesOpen(true)} onKeyDown={(event) => event.key === 'Escape' && setModulesOpen(false)} aria-expanded={modulesOpen} aria-haspopup="true">
              Modules <ChevronDown size={15} className={`transition ${modulesOpen ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>{modulesOpen && (
              <motion.div initial={{ opacity: 0, y: -8, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -6, scale: 0.98 }} transition={{ duration: 0.18 }} className="absolute left-1/2 top-full w-[610px] -translate-x-1/2 rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl" role="menu">
                <div className="grid grid-cols-2 gap-2">
                  {modules.map(({ name, path, icon: Icon, text }) => <Link key={name} to={path} role="menuitem" className="flex gap-3 rounded-xl p-4 hover:bg-dolphin-50"><Icon className="mt-0.5 text-dolphin-700" size={22} /><span><strong className="block text-sm">{name}</strong><small className="mt-1 block text-xs leading-5 text-slate-500">{text}</small></span></Link>)}
                </div>
              </motion.div>
            )}</AnimatePresence>
          </div>
          <a href="/#industries" className="text-sm font-semibold text-slate-700 hover:text-dolphin-700">Industries</a>
          <NavLink className={linkClass} to="/pricing">Pricing</NavLink>
          <NavLink className={linkClass} to="/contact-us">Contact Us</NavLink>
          <NavLink className={linkClass} to="/about-us">About Us</NavLink>
        </div>

        <div className="hidden items-center gap-4 lg:flex">
          <a className="text-sm font-bold text-slate-700 hover:text-dolphin-700" href="https://derps.gotmsolutions.com" target="_blank" rel="noreferrer">Sign In</a>
          <Button href="https://uat-retail.gotmsolutions.com" target="_blank" rel="noreferrer" className="min-h-11 px-5">Get Started</Button>
        </div>
        <button className="rounded-lg p-2 lg:hidden" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle navigation" aria-expanded={mobileOpen}>{mobileOpen ? <X /> : <Menu />}</button>
      </nav>
      <AnimatePresence>{mobileOpen && (
        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden border-t border-slate-200 bg-white px-5 py-6 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            <p className="px-3 py-2 text-xs font-bold uppercase tracking-wider text-slate-400">Modules</p>
            {modules.map(({ name, path }) => <NavLink key={name} to={path} className="rounded-lg px-3 py-2 font-semibold hover:bg-dolphin-50">{name}</NavLink>)}
            <NavLink to="/pricing" className="rounded-lg px-3 py-2 font-semibold hover:bg-dolphin-50">Pricing</NavLink>
            <NavLink to="/contact-us" className="rounded-lg px-3 py-2 font-semibold hover:bg-dolphin-50">Contact Us</NavLink>
            <NavLink to="/about-us" className="rounded-lg px-3 py-2 font-semibold hover:bg-dolphin-50">About Us</NavLink>
            <div className="mt-4 flex gap-3 border-t border-slate-200 pt-5"><Button href="https://uat-retail.gotmsolutions.com" target="_blank" rel="noreferrer">Get Started</Button><Button href="https://derps.gotmsolutions.com" target="_blank" rel="noreferrer" variant="secondary">Sign In</Button></div>
          </div>
        </motion.div>
      )}</AnimatePresence>
    </header>
  )
}
