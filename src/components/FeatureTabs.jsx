import { useState } from 'react'
import { Check, LayoutDashboard } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { features } from '../data/homeContent'
import SectionHeading from './ui/SectionHeading'

export default function FeatureTabs() {
  const [active, setActive] = useState(0)
  const feature = features[active]
  const move = (event) => {
    if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return
    const next = event.key === 'ArrowRight' ? (active + 1) % features.length : (active - 1 + features.length) % features.length
    setActive(next)
    document.getElementById(`tab-${next}`)?.focus()
  }
  return <section className="px-5 py-24 lg:px-8 lg:py-36"><div className="mx-auto max-w-7xl"><SectionHeading eyebrow="BUILT FOR BUSY TEAMS" title="Focused tools. One shared system." body="Move from everyday tasks to the bigger picture without leaving your business platform." /><div className="mt-12 overflow-x-auto border-b border-slate-200" role="tablist" aria-label="DERPS features">{features.map((item, i) => <button id={`tab-${i}`} key={item.name} role="tab" aria-selected={active === i} aria-controls="feature-panel" tabIndex={active === i ? 0 : -1} onClick={() => setActive(i)} onKeyDown={move} className={`relative mr-7 whitespace-nowrap pb-4 text-sm font-bold transition ${active === i ? 'text-dolphin-700' : 'text-slate-500 hover:text-ink'}`}>{item.name}{active === i && <motion.span layoutId="active-feature-tab" className="absolute inset-x-0 bottom-0 h-0.5 bg-dolphin-600" />}</button>)}</div><AnimatePresence mode="wait"><motion.div key={feature.name} id="feature-panel" role="tabpanel" aria-labelledby={`tab-${active}`} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.25 }} className="mt-10 grid overflow-hidden rounded-[2rem] border border-slate-200 bg-dolphin-50 lg:grid-cols-[1.1fr_.9fr]"><div className="p-8 sm:p-12 lg:p-16"><span className="grid h-12 w-12 place-items-center rounded-xl bg-dolphin-600 text-white"><LayoutDashboard /></span><h3 className="mt-8 text-3xl font-extrabold lg:text-4xl">{feature.title}</h3><p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">{feature.body}</p></div><div className="bg-ink p-8 text-white sm:p-12 lg:p-16"><p className="text-xs font-bold tracking-[0.18em] text-dolphin-300">KEY CAPABILITIES</p><ul className="mt-8 space-y-6">{feature.capabilities.map((item, index) => <motion.li initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.07 }} className="flex items-center gap-4 border-b border-white/10 pb-6 font-semibold" key={item}><span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-dolphin-600"><Check size={15} /></span>{item}</motion.li>)}</ul></div></motion.div></AnimatePresence></div></section>
}
