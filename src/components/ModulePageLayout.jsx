import {
  BadgeCheck, BadgeDollarSign, BookOpenCheck, Boxes, ChartColumnBig,
  ChartNoAxesCombined, ChartSpline, Check, CircleCheckBig, CircleDollarSign,
  ClipboardPenLine, Columns3, ContactRound, FileCheck2, FileInput, FileText,
  Goal, HandCoins, Handshake, Headset, Inbox, KanbanSquare, Landmark, MessagesSquare,
  ListPlus, NotebookTabs, PackageCheck, PackageSearch, PanelsTopLeft,
  Receipt, ReceiptText, RefreshCcw, Route, ScanBarcode, ScanLine, Settings2,
  Tags, Truck, Undo2, WalletCards, Warehouse, Wrench,
} from 'lucide-react'
import { motion } from 'framer-motion'
import Button from './ui/Button'
import FaqAccordion from './FaqAccordion'
import Reveal from './Reveal'
import Seo from './Seo'

const iconMap = {
  BadgeCheck, BadgeDollarSign, BookOpenCheck, Boxes, ChartColumnBig,
  ChartNoAxesCombined, ChartSpline, CircleCheckBig, CircleDollarSign,
  ClipboardPenLine, Columns3, ContactRound, FileCheck2, FileInput, FileText,
  Goal, HandCoins, Handshake, Headset, Inbox, KanbanSquare, Landmark, MessagesSquare,
  ListPlus, NotebookTabs, PackageCheck, PackageSearch, PanelsTopLeft,
  Receipt, ReceiptText, RefreshCcw, Route, ScanBarcode, ScanLine, Settings2,
  Tags, Truck, Undo2, WalletCards, Warehouse, Wrench,
}

export default function ModulePageLayout({ content }) {
  return <>
    <Seo title={content.name} description={content.subhead} />
    <ModuleHero content={content} />
    <ModuleAreas content={content} />
    <section className="overflow-hidden px-5 py-24 lg:px-8 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-20 max-w-3xl text-center"><p className="text-xs font-bold tracking-[0.2em] text-dolphin-700">BUILT AROUND THE WORK</p><h2 className="mt-4 text-balance text-3xl font-extrabold sm:text-4xl lg:text-5xl">Everything your {content.name.toLowerCase()} team needs</h2></div>
        <div className="space-y-24 lg:space-y-32">{content.features.map((feature, index) => <FeatureSection key={feature.title} feature={feature} index={index} moduleName={content.name} />)}</div>
      </div>
    </section>
    <Benefits content={content} />
    <FaqAccordion items={content.faqs} title={`${content.name} questions, answered`} body={`Helpful context for teams considering DERPS ${content.name}.`} />
    <section className="px-5 pb-24 lg:px-8 lg:pb-32"><div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-7 rounded-[2rem] bg-dolphin-600 p-8 text-white sm:p-12 md:flex-row md:items-center"><div><h2 className="text-3xl font-extrabold">Ready to connect your {content.name.toLowerCase()} work?</h2><p className="mt-3 text-dolphin-100">See how DERPS fits the way your team works today.</p></div><div className="flex shrink-0 flex-wrap gap-3"><Button to="/contact-us" variant="light">Book a Demo</Button><Button to="/contact-us" variant="outlineLight">{content.secondaryCta}</Button></div></div></section>
  </>
}

function ModuleHero({ content }) {
  return <section className="relative overflow-hidden bg-dolphin-50 px-5 py-20 lg:px-8 lg:py-28"><motion.div animate={{ rotate: [0, 5, 0] }} transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }} className="absolute right-0 top-0 h-72 w-72 translate-x-1/3 -translate-y-1/3 rounded-full border-[50px] border-dolphin-100" /><Reveal><div className="relative mx-auto max-w-5xl text-center"><p className="text-xs font-bold tracking-[0.2em] text-dolphin-700">{content.eyebrow}</p><h1 className="mx-auto mt-5 max-w-4xl text-balance text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:text-6xl">{content.title}</h1><p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">{content.subhead}</p><div className="mt-9 flex flex-wrap justify-center gap-3"><Button to="/contact-us">Book a Demo</Button><Button to="/contact-us" variant="secondary">{content.secondaryCta}</Button></div><ul className="mt-10 flex flex-col justify-center gap-3 text-sm font-semibold text-slate-600 sm:flex-row sm:gap-7">{content.trustBullets.map(item => <li key={item} className="flex items-center justify-center gap-2"><span className="grid h-5 w-5 place-items-center rounded-full bg-dolphin-600 text-white"><Check size={12} /></span>{item}</li>)}</ul></div></Reveal></section>
}

function ModuleAreas({ content }) {
  return <section className="border-y border-slate-200 bg-white px-5 py-12 lg:px-8"><div className="mx-auto max-w-7xl"><h2 className="text-center text-xl font-bold">{content.stripTitle}</h2><motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.35 }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07 } } }} className={`mt-8 grid gap-3 sm:grid-cols-2 ${content.areas.length === 5 ? 'lg:grid-cols-5' : 'lg:grid-cols-6'}`}>{content.areas.map(area => { const Icon = iconMap[area.icon]; return <motion.article variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0 } }} key={area.label} className="group interactive-card rounded-xl border border-slate-200 p-4 text-center"><Icon className="icon-lift mx-auto text-dolphin-700" size={23} /><h3 className="mt-3 text-sm font-bold tracking-normal">{area.label}</h3>{area.description && <p className="mt-2 text-xs leading-5 text-slate-500">{area.description}</p>}</motion.article> })}</motion.div></div></section>
}

function FeatureSection({ feature, index, moduleName }) {
  const Icon = iconMap[feature.icon]
  const imageFirst = index % 2 === 1
  return <Reveal><article className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20"><div className={imageFirst ? 'lg:order-2' : ''}><span className="grid h-12 w-12 place-items-center rounded-xl bg-dolphin-50 text-dolphin-700"><Icon /></span><h3 className="mt-6 text-balance text-3xl font-extrabold sm:text-4xl">{feature.title}</h3><p className="mt-5 text-lg leading-8 text-slate-600">{feature.description}</p><ul className="mt-7 space-y-3">{feature.bullets.map(item => <li key={item} className="flex items-start gap-3 font-semibold"><Check className="mt-0.5 shrink-0 text-dolphin-600" size={20} />{item}</li>)}</ul></div><ProductPlaceholder title={feature.title} moduleName={moduleName} className={imageFirst ? 'lg:order-1' : ''} /></article></Reveal>
}

function ProductPlaceholder({ title, moduleName, className }) {
  return <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.25 }} className={`${className} rounded-[1.75rem] border border-slate-200 bg-sand p-4 shadow-soft`} role="img" aria-label={`${moduleName} screenshot placeholder for ${title}`}><div className="overflow-hidden rounded-2xl border border-slate-200 bg-white"><div className="flex h-11 items-center gap-2 border-b border-slate-200 px-4"><span className="h-2.5 w-2.5 rounded-full bg-red-300" /><span className="h-2.5 w-2.5 rounded-full bg-amber-300" /><span className="h-2.5 w-2.5 rounded-full bg-emerald-300" /><span className="ml-3 h-2 w-28 rounded bg-slate-100" /></div><div className="grid min-h-72 grid-cols-[72px_1fr]"><div className="space-y-4 bg-ink p-4">{[1, 2, 3, 4, 5].map(item => <span key={item} className={`mx-auto block h-7 w-7 rounded-lg ${item === 2 ? 'bg-dolphin-600' : 'bg-white/10'}`} />)}</div><div className="p-5"><div className="h-3 w-1/3 rounded bg-slate-200" /><div className="mt-6 grid grid-cols-3 gap-3">{[1, 2, 3].map(item => <span key={item} className="h-16 rounded-lg bg-dolphin-50" />)}</div><div className="mt-5 space-y-3">{[85, 100, 70, 92].map((width, item) => <div key={item} className="flex items-center gap-3"><span className="h-8 w-8 rounded-lg bg-slate-100" /><span className="h-2 rounded bg-slate-100" style={{ width: `${width}%` }} /></div>)}</div></div></div></div><p className="mt-3 text-center text-xs font-semibold text-slate-400">Product screenshot placeholder</p></motion.div>
}

function Benefits({ content }) {
  const split = Math.ceil(content.benefits.length / 2)
  return <section className="bg-ink px-5 py-20 text-white lg:px-8 lg:py-28"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.8fr_1.2fr]"><div><p className="text-xs font-bold tracking-[0.2em] text-dolphin-300">THE BUSINESS IMPACT</p><h2 className="mt-4 text-balance text-3xl font-extrabold sm:text-4xl">{content.benefitsTitle}</h2></div><div className="grid gap-x-8 sm:grid-cols-2">{[content.benefits.slice(0, split), content.benefits.slice(split)].map((column, index) => <ul key={index} className="divide-y divide-white/10">{column.map(item => <li key={item} className="flex items-start gap-3 py-4 font-semibold leading-6 text-slate-200"><Check className="mt-0.5 shrink-0 text-dolphin-300" size={20} />{item}</li>)}</ul>)}</div></div></section>
}
