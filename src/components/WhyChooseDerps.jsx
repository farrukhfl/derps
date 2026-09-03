import { CheckCircle2, Sparkles, Zap, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { whyChoose } from '../data/homeContent'
import Reveal from './Reveal'
import Button from './ui/Button'

export default function WhyChooseDerps() {
  const steps = [
    'Sales creates the quote & order',
    'Inventory & serial numbers reserve instantly',
    'FedEx shipping & thermal labels print in 1-click',
    'Finance generates double-entry invoice & tax logs',
    'Leadership monitors live enterprise metrics',
  ]

  return (
    <section className="relative overflow-hidden bg-sand px-5 py-24 lg:px-8 lg:py-36">
      {/* Background radial accent */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[600px] rounded-full bg-dolphin-100/40 blur-3xl -z-10 pointer-events-none" />

      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
        {/* Left Column: Image Showcase & Connected Steps */}
        <Reveal>
          <div className="relative mx-auto w-full max-w-xl">
            {/* Visual Glassmorphism Showcase Card */}
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-3 shadow-xl sm:p-4"
            >
              {/* Top Accent Tag */}
              <div className="mb-3 flex items-center justify-between px-2 pt-1">
                <div className="flex items-center gap-2">
                  <span className="grid h-7 w-7 place-items-center rounded-lg bg-dolphin-600 text-white font-bold">
                    <Sparkles size={15} />
                  </span>
                  <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                    The Connected Advantage
                  </span>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-bold text-emerald-700 border border-emerald-200/60">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
                  Single Source of Truth
                </span>
              </div>

              {/* Main Why Choose DERPS Image */}
              <div className="overflow-hidden rounded-2xl border border-slate-100 bg-slate-50 group">
                <img
                  src="/DERPS Website images/Homepage images/Why choose derps (3).png"
                  alt="Why Choose DERPS - Unified Connected System Architecture"
                  className="w-full h-auto object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Connected Workflow Stream */}
              <div className="mt-4 rounded-2xl bg-ink p-5 text-white">
                <p className="text-xs font-bold uppercase tracking-wider text-dolphin-300 mb-3.5 flex items-center gap-1.5">
                  <Zap size={14} className="text-dolphin-400" /> Continuous Operational Flow
                </p>
                <div className="space-y-2.5">
                  {steps.map((item, i) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08, duration: 0.3 }}
                      className="flex items-center gap-3 rounded-xl bg-white/10 px-3.5 py-2.5 text-xs sm:text-sm font-semibold transition hover:bg-white/15"
                    >
                      <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-dolphin-500 text-[11px] font-extrabold text-white">
                        {i + 1}
                      </span>
                      <span className="text-slate-100">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </Reveal>

        {/* Right Column: Copy & Value Bullets */}
        <Reveal>
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-dolphin-100/80 px-3.5 py-1 text-xs font-bold tracking-[0.18em] text-dolphin-800 uppercase">
              {whyChoose.eyebrow}
            </div>

            <h2 className="mt-5 text-balance text-3xl font-extrabold leading-tight text-ink sm:text-4xl lg:text-5xl">
              {whyChoose.title}
            </h2>

            <h3 className="mt-5 text-xl sm:text-2xl font-bold text-dolphin-900">
              {whyChoose.subtitle}
            </h3>

            <p className="mt-4 max-w-xl text-base sm:text-lg leading-relaxed text-slate-600">
              {whyChoose.body}
            </p>

            <ul className="mt-7 space-y-3.5">
              {whyChoose.bullets.map((item) => (
                <li key={item} className="flex items-start gap-3 font-semibold text-slate-700 text-sm sm:text-base">
                  <CheckCircle2 className="mt-1 shrink-0 text-dolphin-600" size={19} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Button to="/contact-us">
                <span>{whyChoose.cta}</span>
                <ArrowRight size={17} className="ml-1.5" />
              </Button>
              <Button to="/about-us" variant="secondary">
                Learn About DERPS
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
