import { Check, FileText, PackageCheck, TrendingUp, Users } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { hero } from '../data/homeContent'
import Button from './ui/Button'

export default function Hero() {
  const reduceMotion = useReducedMotion()
  const enter = (delay) => ({ initial: reduceMotion ? false : { opacity: 0, y: 18 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay } })
  return (
    <section className="overflow-hidden bg-dolphin-50/60">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 lg:grid-cols-[1.05fr_.95fr] lg:px-8 lg:py-28">
        <div><motion.p {...enter(0)} className="mb-5 text-xs font-bold tracking-[0.2em] text-dolphin-700">{hero.eyebrow}</motion.p><motion.h1 {...enter(0.08)} className="text-balance text-4xl font-extrabold leading-[1.08] text-ink sm:text-5xl lg:text-[4rem]">{hero.title}</motion.h1><motion.p {...enter(0.16)} className="mt-6 max-w-xl text-xl font-semibold leading-8 text-dolphin-800">{hero.subhead}</motion.p><motion.p {...enter(0.22)} className="mt-5 max-w-xl text-base leading-7 text-slate-600">{hero.body}</motion.p><motion.div {...enter(0.28)} className="mt-9 flex flex-wrap items-center gap-5"><Button to="/contact-us">{hero.cta}</Button><span className="flex items-center gap-2 text-sm font-semibold text-slate-600"><span className="grid h-6 w-6 place-items-center rounded-full bg-emerald-100 text-emerald-700"><Check size={14} /></span>Guided onboarding included</span></motion.div></div>
        <motion.div initial={reduceMotion ? false : { opacity: 0, x: 30, rotate: 1 }} animate={{ opacity: 1, x: 0, rotate: 0 }} transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }} className="relative mx-auto w-full max-w-xl" aria-label="DERPS product interface placeholder">
          <div className="absolute -left-14 -top-14 h-44 w-44 rounded-full border-[28px] border-dolphin-200/60" />
          <div className="relative rounded-[28px] border border-slate-200 bg-white p-3 shadow-2xl shadow-dolphin-900/15">
            <div className="rounded-2xl bg-slate-50 p-4 sm:p-6"><div className="mb-7 flex items-center justify-between"><div><span className="text-xs font-bold text-slate-400">WORKSPACE</span><p className="mt-1 font-display text-lg font-bold">Good morning, Morgan</p></div><span className="h-9 w-9 rounded-full bg-dolphin-200" /></div><div className="grid grid-cols-2 gap-3 sm:grid-cols-4">{[[TrendingUp, 'Revenue'], [Users, 'Customers'], [PackageCheck, 'Orders'], [FileText, 'Invoices']].map(([Icon, label], i) => <div key={label} className="rounded-xl bg-white p-3 shadow-sm"><Icon size={18} className="text-dolphin-700" /><p className="mt-3 text-[10px] font-bold uppercase text-slate-400">{label}</p><div className={`mt-2 h-2 rounded ${i % 2 ? 'bg-dolphin-200' : 'bg-dolphin-500'}`} /></div>)}</div><div className="mt-4 grid gap-4 sm:grid-cols-[1.5fr_1fr]"><div className="rounded-xl bg-white p-4"><p className="text-xs font-bold">Business overview</p><div className="mt-5 flex h-32 items-end gap-2">{[35, 58, 45, 75, 62, 88, 80, 100].map((h, i) => <span key={i} className="flex-1 rounded-t bg-dolphin-200" style={{ height: `${h}%` }} />)}</div></div><div className="rounded-xl bg-ink p-4 text-white"><p className="text-xs font-bold">Work in motion</p><div className="mt-5 space-y-3">{[1, 2, 3, 4].map(i => <div key={i} className="flex items-center gap-2"><span className="h-6 w-6 rounded-md bg-white/10" /><span className="h-2 flex-1 rounded bg-white/20" /></div>)}</div></div></div></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
