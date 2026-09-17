import {
  Boxes, Calculator, ChartNoAxesCombined,
  ClipboardCheck, LifeBuoy, MessagesSquare,
  UserRoundCog, UsersRound, ArrowRight, Sparkles
} from 'lucide-react'
import { modules } from '../data/homeContent'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Reveal from './Reveal'
import SectionHeading from './ui/SectionHeading'
import { skipInitialAnimation } from '../utils/hydrationFlag'

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
    <section className="relative overflow-hidden px-5 py-24 lg:px-8 lg:py-36 bg-gradient-to-b from-white via-dolphin-50/40 to-white">
      {/* Subtle background glow */}
      <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[800px] rounded-full bg-dolphin-100/40 blur-3xl pointer-events-none -z-10" />

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
          initial={skipInitialAnimation ? "visible" : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }}
          className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {modules.map((item) => {
            const Icon = iconMap[item.icon] || Boxes
            return (
              <motion.div
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.45 }}
                key={item.name}
              >
                <Link
                  to={item.path}
                  className="group flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-4 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-dolphin-400 hover:shadow-2xl"
                >
                  <div>
                    {/* Full Interface Image Container - Fully Visible & Uncropped */}
                    {item.image ? (
                      <div className="overflow-hidden rounded-xl border border-slate-200/80 bg-slate-50 shadow-xs group-hover:border-dolphin-200 transition">
                        {/* Mini Browser Bar */}
                        <div className="flex h-7 items-center justify-between border-b border-slate-200/70 bg-slate-100/90 px-3">
                          <div className="flex items-center gap-1">
                            <span className="h-1.5 w-1.5 rounded-full bg-slate-400/80" />
                            <span className="h-1.5 w-1.5 rounded-full bg-slate-400/80" />
                            <span className="h-1.5 w-1.5 rounded-full bg-slate-400/80" />
                          </div>
                          <span className="text-[10px] font-semibold text-slate-600 truncate max-w-[150px]">
                            {item.name}
                          </span>
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        </div>

                        {/* Full-view uncropped image container */}
                        <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900/5 p-1 flex items-center justify-center">
                          <img
                            src={item.image}
                            alt={`DERPS ${item.name} workspace overview`}
                            className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    ) : (
                      <span className="grid h-12 w-12 place-items-center rounded-xl bg-dolphin-50 text-dolphin-700 transition group-hover:bg-dolphin-600 group-hover:text-white">
                        <Icon size={24} />
                      </span>
                    )}

                    {/* Content Section */}
                    <div className="mt-4 px-1">
                      <div className="flex items-center gap-2">
                        <span className="grid h-7 w-7 place-items-center rounded-lg bg-dolphin-50 text-dolphin-700 shadow-2xs group-hover:bg-dolphin-600 group-hover:text-white transition">
                          <Icon size={16} />
                        </span>
                        <h3 className="text-base font-bold text-slate-900 group-hover:text-dolphin-700 transition">
                          {item.name}
                        </h3>
                      </div>

                      <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-slate-600">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {/* Footer Action */}
                  <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-3.5 px-1">
                    <span className="text-[11px] font-semibold text-slate-500 group-hover:text-dolphin-600 transition">
                      Live Workspace
                    </span>
                    <div className="flex items-center gap-1.5 text-xs font-bold text-dolphin-700 transition group-hover:translate-x-1">
                      <span>Explore module</span>
                      <ArrowRight size={13} />
                    </div>
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
