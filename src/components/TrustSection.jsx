import { Headphones, LockKeyhole, Rocket, ShieldCheck, Activity, Shield, Zap, CheckCircle2 } from 'lucide-react'
import { trustPillars } from '../data/homeContent'
import { motion } from 'framer-motion'
import SectionHeading from './ui/SectionHeading'

const icons = [LockKeyhole, ShieldCheck, Rocket, Headphones]

export default function TrustSection() {
  return (
    <section className="bg-sand px-5 py-24 lg:px-8 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <SectionHeading align="center" eyebrow="BUILT ON TRUST" title="What you can count on" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
          className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4"
        >
          {trustPillars.map((pillar, i) => {
            const Icon = icons[i] || ShieldCheck
            return (
              <motion.article
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                key={pillar.label}
                className="group interactive-card rounded-2xl border border-transparent bg-white p-7 shadow-soft flex flex-col justify-between"
              >
                <div>
                  <span className="icon-lift grid h-12 w-12 place-items-center rounded-xl bg-dolphin-50 text-dolphin-700 group-hover:bg-dolphin-600 group-hover:text-white transition">
                    <Icon size={24} />
                  </span>
                  <h3 className="mt-6 text-xl font-bold text-slate-900">{pillar.label}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{pillar.body}</p>
                </div>
              </motion.article>
            )
          })}
        </motion.div>

        {/* High-Impact Enterprise Trust & Reliability Stats */}
        <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-soft">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
            <div className="text-center pt-3 sm:pt-0 sm:px-4">
              <span className="block text-2xl sm:text-3xl font-extrabold text-dolphin-700">99.9%</span>
              <span className="mt-1 block text-xs font-semibold text-slate-500 uppercase tracking-wider">Uptime SLA</span>
            </div>
            <div className="text-center pt-3 sm:pt-0 sm:px-4">
              <span className="block text-2xl sm:text-3xl font-extrabold text-dolphin-700">AES-256</span>
              <span className="mt-1 block text-xs font-semibold text-slate-500 uppercase tracking-wider">Data Encryption</span>
            </div>
            <div className="text-center pt-3 sm:pt-0 sm:px-4">
              <span className="block text-2xl sm:text-3xl font-extrabold text-dolphin-700">&lt;50ms</span>
              <span className="mt-1 block text-xs font-semibold text-slate-500 uppercase tracking-wider">Sync Latency</span>
            </div>
            <div className="text-center pt-3 sm:pt-0 sm:px-4">
              <span className="block text-2xl sm:text-3xl font-extrabold text-dolphin-700">Multi-Tenant</span>
              <span className="mt-1 block text-xs font-semibold text-slate-500 uppercase tracking-wider">Isolated Architecture</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
