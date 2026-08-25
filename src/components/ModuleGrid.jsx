import {
  Boxes, Calculator, ChartNoAxesCombined,
  ClipboardCheck, LifeBuoy, MessagesSquare,
  UserRoundCog, UsersRound, ArrowRight
} from 'lucide-react'
import { modules } from '../data/homeContent'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Reveal from './Reveal'
import SectionHeading from './ui/SectionHeading'

const iconMap = {
  Boxes,
  ChartNoAxesCombined,
  Calculator,
  UsersRound,
  ClipboardCheck,
  UserRoundCog,
  MessagesSquare,
  LifeBuoy,
}

export default function ModuleGrid() {
  return (
    <section className="px-5 py-24 lg:px-8 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="ONE CONNECTED SUITE"
            title="Every Core Business Function, Unified"
            body="Give every department specialized, high-performance tools connected to one single source of truth."
          />
        </Reveal>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.05 } } }}
          className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {modules.map((item) => {
            const Icon = iconMap[item.icon] || Boxes
            return (
              <motion.div
                variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.4 }}
                key={item.name}
              >
                <Link
                  to={item.path}
                  className="group interactive-card flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 transition duration-200 hover:border-dolphin-300 hover:shadow-lg"
                >
                  <div>
                    <span className="icon-lift grid h-12 w-12 place-items-center rounded-xl bg-dolphin-50 text-dolphin-700 transition group-hover:bg-dolphin-600 group-hover:text-white">
                      <Icon size={24} />
                    </span>
                    <h3 className="mt-5 text-lg font-bold text-slate-900">{item.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.desc}</p>
                  </div>
                  <div className="mt-6 flex items-center gap-1.5 text-xs font-bold text-dolphin-700 transition group-hover:translate-x-1">
                    <span>Explore module</span>
                    <ArrowRight size={14} />
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
