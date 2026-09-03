import { useState, useEffect } from 'react'
import {
  FileText, CheckCircle2, Boxes, Calculator,
  BadgeDollarSign, ArrowRight, Play, Pause,
  Sparkles, Zap, ShieldCheck, Truck, RefreshCw
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Reveal from './Reveal'

const workflowSteps = [
  {
    id: 1,
    badge: 'Step 1 · Sales Flow',
    title: 'Digital Quote Acceptance',
    department: 'Sales & Client Intake',
    icon: FileText,
    action: 'Client reviews & approves digital quotation online',
    trigger: 'Client opens /crmQuotation/view and clicks "Accept Quote"',
    telemetry: [
      { label: 'Quote Status', value: 'Accepted', color: 'text-emerald-400' },
      { label: 'Client Signature', value: 'Verified', color: 'text-dolphin-300' },
      { label: 'Deal Value', value: '$12,450.00', color: 'text-white' },
    ],
    details: 'The interactive web review link records client approval with an audit timestamp and immediately notifies operations and sales leadership.',
  },
  {
    id: 2,
    badge: 'Step 2 · CRM & Opportunity',
    title: 'Instant Order & Account Sync',
    department: 'Merchant CRM & Pipeline',
    icon: CheckCircle2,
    action: 'Opportunity advances to Closed Won and triggers Sales Order',
    trigger: 'Automated stage progression gate validation passes',
    telemetry: [
      { label: 'Opportunity Stage', value: 'Closed Won', color: 'text-emerald-400' },
      { label: 'Sales Order ID', value: 'SO-84920', color: 'text-dolphin-300' },
      { label: 'Merchant Profile', value: 'Provisioned', color: 'text-white' },
    ],
    details: 'Zero manual handoff. The sales record converts directly into a structured fulfillment order with exact SKU, hardware models, and billing terms.',
  },
  {
    id: 3,
    badge: 'Step 3 · Operations & Logistics',
    title: 'SN Serial Tracking & FedEx Dispatch',
    department: 'Warehouse & Shipping',
    icon: Boxes,
    action: 'Specific hardware serial numbers reserved & carrier label printed',
    trigger: 'Warehouse staging queue receives fulfillment order',
    telemetry: [
      { label: 'SN Tracked', value: 'SN-94827103', color: 'text-dolphin-300' },
      { label: 'FedEx Tracking', value: '7829-4019-2018', color: 'text-emerald-400' },
      { label: 'Label Print', value: 'Brother b-PAC OK', color: 'text-white' },
    ],
    details: 'The built-in Serial Number Report logs the device lifecycle, prints certified thermal shipping labels in 1-click, and links tracking to the customer order.',
  },
  {
    id: 4,
    badge: 'Step 4 · Accounting & Tax',
    title: 'General Ledger & Invoicing',
    department: 'Double-Entry Finance',
    icon: Calculator,
    action: 'Double-entry journal entries posted & tax liability logged',
    trigger: 'Order fulfillment status changes to Shipped',
    telemetry: [
      { label: 'General Ledger', value: 'Balanced Debit/Credit', color: 'text-emerald-400' },
      { label: 'Multi-State Tax', value: 'City/State Calc OK', color: 'text-dolphin-300' },
      { label: 'Invoice Status', value: 'Ready for Payment', color: 'text-white' },
    ],
    details: 'The accounting module automatically records debits and credits, aggregates multi-state sales tax liabilities, and prepares the itemized invoice.',
  },
  {
    id: 5,
    badge: 'Step 5 · Partner Payouts',
    title: 'Automated Commission Approval',
    department: 'Agent & Partner Network',
    icon: BadgeDollarSign,
    action: 'Sales agent commission calculated & scheduled for payout',
    trigger: 'Live customer activation verified in system',
    telemetry: [
      { label: 'Commission Due', value: '$622.50', color: 'text-emerald-400' },
      { label: 'Approval Status', value: 'Manager Approved', color: 'text-dolphin-300' },
      { label: 'Payroll Export', value: 'Ready', color: 'text-white' },
    ],
    details: 'The submitting sales agent or referral partner is credited automatically, maintaining complete transparency from initial quote to final payout.',
  },
]

export default function InteractiveWorkflowEngine() {
  const [activeStep, setActiveStep] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    if (!isPlaying) return
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % workflowSteps.length)
    }, 4500)
    return () => clearInterval(timer)
  }, [isPlaying])

  const step = workflowSteps[activeStep]
  const Icon = step.icon

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-dolphin-50/50 to-white py-24 lg:py-36">
      {/* Background glow mesh */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[900px] rounded-full bg-dolphin-200/30 blur-3xl pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-dolphin-200/80 bg-white px-3.5 py-1 text-xs font-bold tracking-[0.2em] text-dolphin-700 shadow-xs uppercase">
              <Zap size={14} className="text-dolphin-600" />
              <span>LIVE DATA TELEMETRY</span>
            </div>
            <h2 className="mt-5 text-balance text-3xl font-extrabold sm:text-4xl lg:text-5xl text-slate-900">
              Watch Real-Time Data Flow Across Every Department
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600">
              No manual re-entry. No delayed emails. Click through the operational lifecycle to see how DERPS connects sales, warehouse logistics, carrier shipping, accounting ledgers, and partner payouts.
            </p>
          </div>
        </Reveal>

        {/* Pipeline Step Navigator */}
        <div className="mt-14">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
            {workflowSteps.map((item, idx) => {
              const ItemIcon = item.icon
              const isCurrent = activeStep === idx
              const isPast = activeStep > idx

              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveStep(idx)
                    setIsPlaying(false)
                  }}
                  className={`group relative flex flex-col items-start justify-between rounded-2xl p-4 text-left transition-all duration-300 border ${
                    isCurrent
                      ? 'bg-ink text-white border-dolphin-500 shadow-xl scale-[1.02]'
                      : isPast
                      ? 'bg-white text-slate-800 border-dolphin-200 shadow-xs hover:border-dolphin-400'
                      : 'bg-white/80 text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-white'
                  }`}
                >
                  {/* Top Bar Indicator */}
                  <div className="flex w-full items-center justify-between">
                    <span
                      className={`grid h-8 w-8 place-items-center rounded-xl text-xs font-bold ${
                        isCurrent
                          ? 'bg-dolphin-600 text-white shadow-md'
                          : isPast
                          ? 'bg-emerald-100 text-emerald-700'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      <ItemIcon size={16} />
                    </span>
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider ${
                        isCurrent
                          ? 'text-dolphin-300'
                          : isPast
                          ? 'text-emerald-600'
                          : 'text-slate-400'
                      }`}
                    >
                      {idx + 1}/5
                    </span>
                  </div>

                  <div className="mt-4">
                    <p
                      className={`text-[11px] font-bold uppercase tracking-wider ${
                        isCurrent ? 'text-dolphin-300' : 'text-slate-400'
                      }`}
                    >
                      {item.badge}
                    </p>
                    <h3
                      className={`text-xs sm:text-sm font-bold mt-1 line-clamp-1 ${
                        isCurrent ? 'text-white' : 'text-slate-900'
                      }`}
                    >
                      {item.title}
                    </h3>
                  </div>

                  {/* Progress Line for Current Step */}
                  {isCurrent && (
                    <motion.div
                      layoutId="workflow-active-indicator"
                      className="absolute inset-x-0 bottom-0 h-1 bg-dolphin-500 rounded-b-2xl"
                    />
                  )}
                </button>
              )
            })}
          </div>
        </div>

        {/* Live Simulation Display Box */}
        <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200/90 bg-slate-900 text-white shadow-2xl">
          {/* Top Terminal Bar */}
          <div className="flex h-11 items-center justify-between border-b border-white/10 bg-slate-950/80 px-5">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-rose-400/90" />
              <span className="h-3 w-3 rounded-full bg-amber-400/90" />
              <span className="h-3 w-3 rounded-full bg-emerald-400/90" />
            </div>

            <div className="flex items-center gap-2 rounded-lg bg-white/10 px-3.5 py-1 text-xs font-semibold text-slate-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>DERPS Enterprise WebSocket Stream · Event Node {activeStep + 1}</span>
            </div>

            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center gap-1.5 rounded-lg bg-white/10 px-3 py-1 text-xs font-bold text-slate-300 hover:text-white hover:bg-white/20 transition"
              title={isPlaying ? 'Pause Auto-Play' : 'Resume Auto-Play'}
            >
              {isPlaying ? <Pause size={12} /> : <Play size={12} />}
              <span>{isPlaying ? 'Pause' : 'Play Flow'}</span>
            </button>
          </div>

          {/* Interactive Step Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="p-6 sm:p-10 lg:p-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center"
            >
              {/* Left Column: Event Context & Trigger */}
              <div>
                <div className="flex items-center gap-3">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-dolphin-600 text-white shadow-lg">
                    <Icon size={24} />
                  </span>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-dolphin-400">
                      {step.department}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                      {step.title}
                    </h3>
                  </div>
                </div>

                <div className="mt-6 rounded-2xl bg-white/5 p-5 border border-white/10">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    Automated Event Action
                  </span>
                  <p className="text-base font-semibold text-slate-100">{step.action}</p>

                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center gap-2 text-xs text-dolphin-300">
                    <Zap size={14} className="shrink-0 text-amber-400" />
                    <span>Trigger: {step.trigger}</span>
                  </div>
                </div>

                <p className="mt-5 text-sm sm:text-base leading-relaxed text-slate-300">
                  {step.details}
                </p>
              </div>

              {/* Right Column: Live Telemetry Output */}
              <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-6 sm:p-7 backdrop-blur">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                    <Sparkles size={14} className="text-dolphin-400" /> Live Telemetry Output
                  </span>
                  <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full">
                    Synchronized
                  </span>
                </div>

                <div className="mt-5 space-y-3">
                  {step.telemetry.map((t, idx) => (
                    <motion.div
                      key={t.label}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.08 }}
                      className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3 border border-white/5"
                    >
                      <span className="text-xs font-medium text-slate-300">{t.label}</span>
                      <span className={`text-xs sm:text-sm font-extrabold ${t.color}`}>{t.value}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-between pt-4 border-t border-white/10 text-xs text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck size={14} className="text-dolphin-400" />
                    Audit Log Recorded
                  </span>
                  <button
                    onClick={() => {
                      setActiveStep((prev) => (prev + 1) % workflowSteps.length)
                      setIsPlaying(false)
                    }}
                    className="text-dolphin-400 font-bold hover:text-dolphin-300 transition flex items-center gap-1"
                  >
                    <span>Next step</span>
                    <ArrowRight size={12} />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
