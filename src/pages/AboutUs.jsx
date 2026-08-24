import {
  Boxes, ClipboardCheck, ContactRound, Landmark, Layers2, LifeBuoy,
  MessagesSquare, PanelsTopLeft, Play, Share2, TrendingUp, UsersRound,
} from 'lucide-react'
import { motion } from 'framer-motion'
import Seo from '../components/Seo'
import Reveal from '../components/Reveal'
import Button from '../components/ui/Button'
import SectionHeading from '../components/ui/SectionHeading'
import { aboutContent } from '../data/aboutContent'

const icons = { Boxes, ClipboardCheck, ContactRound, Landmark, Layers2, LifeBuoy, MessagesSquare, PanelsTopLeft, Share2, TrendingUp, UsersRound }

export default function AboutUs() {
  return <>
    <Seo title={aboutContent.title} description={aboutContent.subhead} />
    <section className="overflow-hidden bg-dolphin-50 px-5 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[.9fr_1.1fr]">
        <div><p className="text-xs font-bold tracking-[0.2em] text-dolphin-700">{aboutContent.eyebrow}</p><h1 className="mt-5 text-balance text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:text-6xl">{aboutContent.title}</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">{aboutContent.subhead}</p><Button to="/contact-us" className="mt-9">{aboutContent.cta}</Button></div>
        <ProductPreview label="DERPS animated product demo placeholder" />
      </div>
    </section>

    <section className="px-5 py-24 lg:px-8 lg:py-36">
      <div className="mx-auto max-w-7xl"><Reveal><SectionHeading align="center" eyebrow="ONE CONNECTED SYSTEM" title={aboutContent.capabilitiesTitle} /></Reveal><motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }} className="mt-14 grid grid-cols-2 gap-3 lg:grid-cols-4">{aboutContent.capabilities.map(item => { const Icon = icons[item.icon]; return <motion.article variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }} key={item.name} className="group interactive-card rounded-2xl border border-slate-200 bg-white p-5 sm:p-7"><span className="icon-lift grid h-11 w-11 place-items-center rounded-xl bg-dolphin-50 text-dolphin-700 group-hover:bg-dolphin-600 group-hover:text-white"><Icon size={21} /></span><h2 className="mt-5 text-lg font-bold sm:text-xl">{item.name}</h2><p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p></motion.article> })}</motion.div></div>
    </section>

    <section className="bg-sand px-5 py-24 lg:px-8 lg:py-36">
      <div className="mx-auto max-w-7xl"><div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20"><Reveal><div><SectionHeading eyebrow={aboutContent.mission.eyebrow} title={aboutContent.mission.title} body={aboutContent.mission.body} /><ProductPreview label="DERPS connected workflow product preview placeholder" compact /></div></Reveal><div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">{aboutContent.mission.features.map(item => { const Icon = icons[item.icon]; return <article key={item.title} className="flex gap-5 rounded-2xl bg-white p-6 shadow-soft"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-dolphin-600 text-white"><Icon size={21} /></span><div><h3 className="text-lg font-bold">{item.title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p></div></article> })}</div></div></div>
    </section>

    <section className="px-5 py-24 lg:px-8 lg:py-32"><div className="mx-auto max-w-5xl rounded-[2rem] bg-ink px-6 py-16 text-center text-white sm:px-12"><h2 className="text-balance text-4xl font-extrabold lg:text-5xl">{aboutContent.closingTitle}</h2><Button to="/contact-us" className="mt-8">Get Started</Button></div></section>
  </>
}

function ProductPreview({ label, compact = false }) {
  return <div className={`${compact ? 'mt-10' : ''} rounded-[1.75rem] border border-slate-200 bg-white p-3 shadow-soft`} role="img" aria-label={label}><div className={`relative overflow-hidden rounded-2xl bg-ink ${compact ? 'min-h-64' : 'min-h-80'}`}><div className="flex h-11 items-center gap-2 border-b border-white/10 px-4"><span className="h-2.5 w-2.5 rounded-full bg-red-300" /><span className="h-2.5 w-2.5 rounded-full bg-amber-300" /><span className="h-2.5 w-2.5 rounded-full bg-emerald-300" /><span className="ml-3 h-2 w-28 rounded bg-white/10" /></div><div className="grid grid-cols-[64px_1fr]"><div className="space-y-4 border-r border-white/10 p-4">{[1, 2, 3, 4].map(item => <span key={item} className={`block h-7 w-7 rounded-lg ${item === 1 ? 'bg-dolphin-600' : 'bg-white/10'}`} />)}</div><div className="p-6"><div className="grid grid-cols-3 gap-3">{[1, 2, 3].map(item => <div key={item} className="h-16 rounded-lg bg-white/10" />)}</div><div className="mt-5 h-24 rounded-xl bg-white/5" /></div></div><span className="absolute inset-0 grid place-items-center"><span className="grid h-14 w-14 place-items-center rounded-full bg-white text-dolphin-700 shadow-xl"><Play className="ml-1" size={22} fill="currentColor" /></span></span></div><p className="mt-3 text-center text-xs font-semibold text-slate-400">Product demo placeholder</p></div>
}
