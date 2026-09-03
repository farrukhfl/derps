import { useState } from 'react'
import {
  Check, X, Zap, Sparkles, ArrowRight, DollarSign,
  TrendingDown, ShieldCheck, RefreshCcw, Layers
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Reveal from './Reveal'
import Button from './ui/Button'

const standaloneTools = [
  { name: 'QuickBooks Online', category: 'Accounting & Invoicing', avgCost: '$60/user/mo', pain: 'Manual invoice re-entry, disconnected from CRM' },
  { name: 'HubSpot / Salesforce', category: 'CRM & Pipeline', avgCost: '$50/user/mo', pain: 'Quotes do not reserve warehouse stock' },
  { name: 'Slack / Teams', category: 'Team Messaging', avgCost: '$12/user/mo', pain: 'Separate chat history unlinked from accounts' },
  { name: 'Zoom / Meet', category: 'Video Calling', avgCost: '$15/user/mo', pain: 'External guests require software downloads' },
  { name: 'Jira / Asana', category: 'Project Tracking', avgCost: '$10/user/mo', pain: 'No native QA gating or deployment pipelines' },
  { name: 'Zendesk / Freshdesk', category: 'Helpdesk Ticketing', avgCost: '$49/user/mo', pain: 'Agents lack real-time hardware serial numbers' },
  { name: 'Google Drive / Box', category: 'Cloud File Storage', avgCost: '$14/user/mo', pain: 'Scattered customer contracts and receipts' },
]

export default function SaaSStackComparison() {
  const [activeTab, setActiveTab] = useState('unified')

  return (
    <section className="relative overflow-hidden bg-ink py-24 text-white lg:py-36">
      {/* Ambient background glows */}
      <div className="absolute left-1/4 top-1/3 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-dolphin-600/20 blur-3xl pointer-events-none" />
      <div className="absolute right-1/4 bottom-1/4 h-[500px] w-[500px] rounded-full bg-emerald-500/15 blur-3xl pointer-events-none" />
      <div className="dot-grid absolute inset-0 opacity-20 [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1 text-xs font-bold tracking-[0.2em] text-dolphin-300 backdrop-blur uppercase">
              <Sparkles size={14} className="text-dolphin-400" />
              <span>THE ARCHITECTURAL DIFFERENCE</span>
            </div>
            <h2 className="mt-5 text-balance text-3xl font-extrabold sm:text-4xl lg:text-5xl text-white">
              Stop Paying For 8+ Disconnected SaaS Subscriptions
            </h2>
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-300">
              When your sales, warehouse stock, underwriting, accounting ledgers, and team communications live in separate apps, your company pays a heavy toll in monthly licensing fees, duplicate data entry, and sync errors.
            </p>
          </div>
        </Reveal>

        {/* Tab Toggle */}
        <div className="mt-12 flex justify-center">
          <div className="inline-flex rounded-2xl border border-white/15 bg-white/5 p-1.5 backdrop-blur">
            <button
              onClick={() => setActiveTab('unified')}
              className={`flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs sm:text-sm font-bold transition-all duration-200 ${
                activeTab === 'unified'
                  ? 'bg-dolphin-600 text-white shadow-lg shadow-dolphin-600/30'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <Zap size={16} className={activeTab === 'unified' ? 'text-amber-300' : ''} />
              <span>The DERPS Unified Way</span>
            </button>
            <button
              onClick={() => setActiveTab('fragmented')}
              className={`flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs sm:text-sm font-bold transition-all duration-200 ${
                activeTab === 'fragmented'
                  ? 'bg-rose-500/80 text-white shadow-lg shadow-rose-500/20'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <X size={16} />
              <span>The Fragmented SaaS Way</span>
            </button>
          </div>
        </div>

        {/* Comparison Showcase Grid */}
        <div className="mt-12">
          <AnimatePresence mode="wait">
            {activeTab === 'unified' ? (
              <motion.div
                key="unified"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-center"
              >
                {/* Unified Card */}
                <div className="rounded-3xl border border-dolphin-500/40 bg-gradient-to-br from-white/10 via-white/5 to-dolphin-900/20 p-8 sm:p-10 backdrop-blur shadow-2xl">
                  <div className="flex items-center justify-between border-b border-white/10 pb-5">
                    <div className="flex items-center gap-3">
                      <span className="grid h-10 w-10 place-items-center rounded-xl bg-dolphin-600 font-extrabold text-white text-sm shadow-md">
                        DERPS
                      </span>
                      <div>
                        <h3 className="text-xl font-bold text-white">One Connected ERP Suite</h3>
                        <p className="text-xs text-dolphin-300 font-semibold">Single source of truth for all departments</p>
                      </div>
                    </div>
                    <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-bold text-emerald-300 border border-emerald-500/30 flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                      100% Native Sync
                    </span>
                  </div>

                  <div className="mt-7 space-y-4">
                    {[
                      { title: 'Zero Data Duplication', desc: 'When sales closes an opportunity, warehouse inventory reserves stock, FedEx prints labels, and accounting generates invoices instantly.' },
                      { title: 'Granular Route-Level Security (RBAC)', desc: 'Control precise employee permissions per button, menu item, and route code with multi-tenant governance.' },
                      { title: 'Massive Software Cost Savings', desc: 'Eliminate 8+ standalone monthly SaaS software invoices into one comprehensive enterprise operating system.' },
                      { title: 'Zero Integration Failures', desc: 'No fragile Zapier zaps, API connector downtime, or webhook data mismatches.' },
                    ].map((item, i) => (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.08 }}
                        className="flex items-start gap-3.5 rounded-2xl bg-white/5 p-4 border border-white/5 transition hover:bg-white/10 hover:border-dolphin-400/30"
                      >
                        <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-emerald-500/20 text-emerald-400 mt-0.5">
                          <Check size={14} />
                        </span>
                        <div>
                          <h4 className="text-sm font-bold text-white">{item.title}</h4>
                          <p className="mt-1 text-xs text-slate-300 leading-relaxed">{item.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <p className="text-xs text-slate-400">Implementation</p>
                      <p className="text-sm font-bold text-white">White-Glove Historical Migration Included</p>
                    </div>
                    <Button to="/contact-us" variant="light" className="text-xs px-5 py-2.5">
                      <span>Request a Demo</span>
                      <ArrowRight size={14} className="ml-1.5" />
                    </Button>
                  </div>
                </div>

                {/* Right Highlights Column */}
                <div className="space-y-4">
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                    <div className="flex items-center gap-3">
                      <span className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-500/20 text-emerald-400">
                        <TrendingDown size={20} />
                      </span>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Annual Overhead Reduction</p>
                        <p className="text-2xl font-extrabold text-white">Save Up To 70%</p>
                      </div>
                    </div>
                    <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      Replaces redundant per-user SaaS licenses across video conferencing, ticketing, project tracking, accounting, and CRM.
                    </p>
                  </div>

                  <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                    <div className="flex items-center gap-3">
                      <span className="grid h-10 w-10 place-items-center rounded-xl bg-dolphin-500/20 text-dolphin-300">
                        <RefreshCcw size={20} />
                      </span>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Operational Speed</p>
                        <p className="text-2xl font-extrabold text-white">4x Faster Handoffs</p>
                      </div>
                    </div>
                    <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      Sales quotes advance directly to terminal programming and warehouse staging without cross-department delays.
                    </p>
                  </div>

                  <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                    <div className="flex items-center gap-3">
                      <span className="grid h-10 w-10 place-items-center rounded-xl bg-purple-500/20 text-purple-300">
                        <ShieldCheck size={20} />
                      </span>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Security & Governance</p>
                        <p className="text-2xl font-extrabold text-white">1 Master Login & RBAC</p>
                      </div>
                    </div>
                    <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      Zero credential sprawl. Onboard or de-provision employees from one centralized HR and user directory.
                    </p>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="fragmented"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
              >
                {standaloneTools.map((tool, i) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="rounded-2xl border border-rose-500/30 bg-rose-950/20 p-5 backdrop-blur"
                  >
                    <div className="flex items-center justify-between border-b border-white/10 pb-3">
                      <div>
                        <h4 className="text-sm font-bold text-white">{tool.name}</h4>
                        <span className="text-[11px] text-slate-400">{tool.category}</span>
                      </div>
                      <span className="text-xs font-bold text-rose-300 bg-rose-500/20 px-2 py-0.5 rounded">
                        {tool.avgCost}
                      </span>
                    </div>
                    <div className="mt-3 flex items-start gap-2 text-xs text-rose-200/90 leading-relaxed">
                      <X size={14} className="shrink-0 text-rose-400 mt-0.5" />
                      <span>{tool.pain}</span>
                    </div>
                  </motion.div>
                ))}

                <div className="rounded-2xl border border-rose-500/40 bg-gradient-to-br from-rose-950/40 to-slate-900 p-6 flex flex-col justify-between sm:col-span-2 lg:col-span-2">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-rose-300">Total Stack Burden</span>
                    <h4 className="mt-1 text-xl font-extrabold text-white">Estimated $210+ / User / Month</h4>
                    <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                      Plus hundreds of hours lost each month manually reconciling mismatched client records, unlinked inventory serials, and spreadsheet ledgers.
                    </p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs text-dolphin-300 font-bold">Ready to simplify?</span>
                    <button
                      onClick={() => setActiveTab('unified')}
                      className="text-xs font-bold text-white underline hover:text-dolphin-300 transition"
                    >
                      See the DERPS solution →
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
