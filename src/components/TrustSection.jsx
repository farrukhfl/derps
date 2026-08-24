import { Headphones, Image, LockKeyhole, Rocket, ShieldCheck } from 'lucide-react'
import { trustPillars } from '../data/homeContent'
import { motion } from 'framer-motion'
import SectionHeading from './ui/SectionHeading'

const icons = [LockKeyhole, ShieldCheck, Rocket, Headphones]

export default function TrustSection() {
  return <section className="bg-sand px-5 py-24 lg:px-8 lg:py-36"><div className="mx-auto max-w-7xl"><SectionHeading align="center" eyebrow="BUILT ON TRUST" title="What you can count on" /><motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }} className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">{trustPillars.map((pillar, i) => { const Icon = icons[i]; return <motion.article variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} key={pillar.label} className="group interactive-card rounded-2xl border border-transparent bg-white p-7 shadow-soft"><Icon className="icon-lift text-dolphin-700" /><h3 className="mt-6 text-xl font-bold">{pillar.label}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{pillar.body}</p></motion.article> })}</motion.div><div className="mt-16 grid grid-cols-2 gap-3 md:grid-cols-4">{[1, 2, 3, 4].map((item, i) => <motion.div whileHover={{ y: -5, rotate: i % 2 ? 0.6 : -0.6 }} key={item} className={`${i % 2 ? 'mt-6' : ''} grid aspect-[4/3] place-items-center rounded-2xl border border-slate-200 bg-slate-100 text-center text-slate-400`} role="img" aria-label={`DERPS product screenshot placeholder ${item}`}><div><Image className="mx-auto" /><span className="mt-2 block text-xs font-semibold">Product screen {item}</span></div></motion.div>)}</div></div></section>
}
