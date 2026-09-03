import { useState } from 'react'
import { Check, ArrowRight, Sparkles, ExternalLink } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { features } from '../data/homeContent'
import SectionHeading from './ui/SectionHeading'

const moduleRouteMap = {
  'Operations': '/operations',
  'Sales Flow': '/sales',
  'Accounting': '/accounting',
  'Merchant CRM': '/crm',
  'Projects & QA': '/projects',
  'HR & Staff': '/hr',
  'Communication': '/communication',
  'Support': '/support',
}

export default function FeatureTabs() {
  const [active, setActive] = useState(0)
  const feature = features[active]
  const moduleRoute = moduleRouteMap[feature.name] || '/operations'

  const move = (event) => {
    if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return
    const next =
      event.key === 'ArrowRight'
        ? (active + 1) % features.length
        : (active - 1 + features.length) % features.length
    setActive(next)
    document.getElementById(`tab-${next}`)?.focus()
  }

  return (
    <section className="px-5 py-24 lg:px-8 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="BUILT FOR BUSY TEAMS"
          title="Focused tools. One shared system."
          body="Move from everyday tasks to the bigger picture without leaving your business platform."
        />

        {/* Tab Navigation */}
        <div
          className="mt-12 flex overflow-x-auto border-b border-slate-200 pb-px scrollbar-none"
          role="tablist"
          aria-label="DERPS features"
        >
          {features.map((item, i) => (
            <button
              id={`tab-${i}`}
              key={item.name}
              role="tab"
              aria-selected={active === i}
              aria-controls="feature-panel"
              tabIndex={active === i ? 0 : -1}
              onClick={() => setActive(i)}
              onKeyDown={move}
              className={`relative mr-6 sm:mr-8 whitespace-nowrap pb-4 text-sm font-bold transition focus:outline-none ${
                active === i
                  ? 'text-dolphin-700'
                  : 'text-slate-500 hover:text-ink'
              }`}
            >
              {item.name}
              {active === i && (
                <motion.span
                  layoutId="active-feature-tab"
                  className="absolute inset-x-0 bottom-0 h-0.5 bg-dolphin-600 rounded-full"
                />
              )}
            </button>
          ))}
        </div>

        {/* Feature Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={feature.name}
            id="feature-panel"
            role="tabpanel"
            aria-labelledby={`tab-${active}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="mt-10 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl"
          >
            <div className="grid items-center gap-8 p-6 sm:p-10 lg:grid-cols-[1.1fr_.9fr] lg:p-12">
              {/* Left Column: Details & Capabilities */}
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-dolphin-50 px-3 py-1 text-xs font-bold text-dolphin-700 border border-dolphin-200/60">
                  <Sparkles size={14} />
                  <span>DERPS {feature.name}</span>
                </div>

                <h3 className="mt-4 text-balance text-2xl font-extrabold sm:text-3xl lg:text-4xl text-slate-900 leading-snug">
                  {feature.title}
                </h3>

                <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600">
                  {feature.body}
                </p>

                <div className="mt-8">
                  <p className="text-xs font-bold tracking-[0.18em] text-dolphin-700 uppercase">
                    CORE WORKFLOW HIGHLIGHTS
                  </p>
                  <ul className="mt-4 space-y-3">
                    {feature.capabilities.map((item, index) => (
                      <motion.li
                        key={item}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.06 }}
                        className="flex items-start gap-3 text-sm font-semibold text-slate-700"
                      >
                        <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-dolphin-100 text-dolphin-700 mt-0.5">
                          <Check size={13} />
                        </span>
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="mt-9">
                  <Link
                    to={moduleRoute}
                    className="inline-flex items-center gap-2 rounded-xl bg-ink px-5 py-3 text-sm font-bold text-white shadow-md transition duration-200 hover:bg-dolphin-700 hover:shadow-lg"
                  >
                    <span>Deep dive into {feature.name}</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>

              {/* Right Column: High-Res Module Screenshot Showcase */}
              <div className="relative group">
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-soft">
                  {/* Window Bar */}
                  <div className="flex h-9 items-center justify-between border-b border-slate-200 bg-slate-100/90 px-4">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                      <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                      <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                    </div>
                    <span className="rounded bg-white/80 px-2.5 py-0.5 text-[11px] font-semibold text-slate-600 border border-slate-200/60">
                      {feature.name} Workspace
                    </span>
                    <Link
                      to={moduleRoute}
                      className="text-slate-400 hover:text-dolphin-600 transition"
                      title="Open full module"
                    >
                      <ExternalLink size={13} />
                    </Link>
                  </div>

                  {/* High-Res Image with smooth hover scale */}
                  <div className="overflow-hidden bg-white">
                    <img
                      src={feature.image}
                      alt={`DERPS ${feature.name} interface view`}
                      className="w-full h-auto object-cover max-h-[400px] transition duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Floating pill badge */}
                <div className="absolute -bottom-3 right-4 flex items-center gap-1.5 rounded-full bg-dolphin-600 px-3 py-1 text-xs font-bold text-white shadow-lg">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 animate-pulse" />
                  <span>Active ERP Module</span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
