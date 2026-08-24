import { BadgeDollarSign, Boxes, Calculator, CalendarDays, ChartNoAxesCombined, ClipboardCheck, ContactRound, Files, Gauge, LifeBuoy, MessagesSquare, Package, UserRoundCog, UsersRound, Video } from 'lucide-react'
import { modules } from '../data/homeContent'
import { motion } from 'framer-motion'
import Reveal from './Reveal'
import SectionHeading from './ui/SectionHeading'

const icons = [Boxes, Package, Calculator, UsersRound, ChartNoAxesCombined, ClipboardCheck, Gauge, LifeBuoy, ContactRound, Files, MessagesSquare, Video, UserRoundCog, BadgeDollarSign, CalendarDays]

export default function ModuleGrid() {
  return <section className="px-5 py-24 lg:px-8 lg:py-36"><div className="mx-auto max-w-7xl"><Reveal><SectionHeading align="center" eyebrow="ONE CONNECTED SUITE" title="Every business need, covered" body="Give every team the tools they need, with one shared source of truth underneath it all." /></Reveal><motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.045 } } }} className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">{modules.map((module, i) => { const Icon = icons[i]; return <motion.div variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 0.4 }} key={module} className="group interactive-card rounded-2xl border border-slate-200 bg-white p-5"><span className="icon-lift grid h-11 w-11 place-items-center rounded-xl bg-dolphin-50 text-dolphin-700 group-hover:bg-dolphin-600 group-hover:text-white"><Icon size={21} /></span><h3 className="mt-5 text-sm font-bold tracking-normal">{module}</h3></motion.div> })}</motion.div></div></section>
}
