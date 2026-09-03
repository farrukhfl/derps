import { useState } from 'react'
import {
  CreditCard, Truck, Wrench, Laptop, ShoppingBag,
  Building2, HeartPulse, Briefcase, CheckCircle2,
  XCircle, ArrowRight, Sparkles, ShieldCheck, Zap,
  Layers, Check
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import Reveal from '../components/Reveal'
import Button from '../components/ui/Button'
import { industriesContent } from '../data/industriesContent'

const iconMap = {
  CreditCard,
  Truck,
  Wrench,
  Laptop,
  ShoppingBag,
  Building2,
  HeartPulse,
  Briefcase,
}

const modulePathMap = {
  'Merchant CRM': '/crm',
  'Operations': '/operations',
  'Sales Flow': '/sales',
  'Accounting': '/accounting',
  'Projects & QA': '/projects',
  'HR & Staff': '/hr',
  'Unified Communication': '/communication',
  'Helpdesk Support': '/support',
}

export default function Industries() {
  const [activeSector, setActiveSector] = useState('all')

  const filteredSectors =
    activeSector === 'all'
      ? industriesContent.sectors
      : industriesContent.sectors.filter((s) => s.id === activeSector)

  return (
    <>
      <Seo
        title="Industry Solutions"
        description="Purpose-built ERP capabilities tailored for merchant services, field logistics, wholesale, IT engineering, and multi-entity enterprises."
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-dolphin-50 via-white to-dolphin-50/40 px-5 py-20 lg:px-8 lg:py-28">
        <div className="dot-grid absolute inset-0 opacity-35 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" aria-hidden="true" />
        <div className="absolute -left-24 top-16 h-96 w-96 rounded-full bg-dolphin-200/40 blur-3xl pointer-events-none -z-10" />
        <div className="absolute -right-24 bottom-10 h-96 w-96 rounded-full bg-dolphin-300/30 blur-3xl pointer-events-none -z-10" />

        <div className="relative mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-dolphin-200/80 bg-white px-3.5 py-1 text-xs font-bold tracking-[0.2em] text-dolphin-700 shadow-xs uppercase">
            <Sparkles size={14} className="text-dolphin-600" />
            <span>{industriesContent.eyebrow}</span>
          </div>

          <h1 className="mx-auto mt-5 max-w-4xl text-balance text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:text-6xl text-slate-900">
            {industriesContent.title}
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            {industriesContent.subhead}
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Button to="/contact-us" className="shadow-lg shadow-dolphin-600/20">
              <span>Book an Industry Walkthrough</span>
              <ArrowRight size={16} className="ml-1.5" />
            </Button>
            <Button to="/solutions" variant="secondary">
              View Deployment Options
            </Button>
          </div>

          {/* Trust Stats Bar */}
          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4 rounded-2xl border border-slate-200/90 bg-white/90 p-6 shadow-soft backdrop-blur">
            {industriesContent.trustStats.map((stat) => (
              <div key={stat.label} className="text-center px-2">
                <p className="text-2xl sm:text-3xl font-extrabold text-dolphin-700">{stat.value}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Sector Filter - Clean Responsive Wrap (No Scrollbars) */}
      <section className="border-y border-slate-200 bg-white/95 px-5 py-5 sticky top-20 z-30 shadow-xs backdrop-blur">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
            <button
              onClick={() => setActiveSector('all')}
              className={`relative rounded-full px-4 py-2 text-xs sm:text-sm font-bold transition-all duration-200 ${
                activeSector === 'all'
                  ? 'bg-dolphin-600 text-white shadow-md shadow-dolphin-600/25'
                  : 'bg-slate-50 text-slate-600 border border-slate-200/80 hover:bg-white hover:border-dolphin-300 hover:text-dolphin-700'
              }`}
            >
              All Industries
            </button>
            {industriesContent.sectors.map((sector) => {
              const Icon = iconMap[sector.icon] || Layers
              const isSelected = activeSector === sector.id
              return (
                <button
                  key={sector.id}
                  onClick={() => setActiveSector(sector.id)}
                  className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-xs sm:text-sm font-bold transition-all duration-200 ${
                    isSelected
                      ? 'bg-dolphin-600 text-white shadow-md shadow-dolphin-600/25'
                      : 'bg-slate-50 text-slate-600 border border-slate-200/80 hover:bg-white hover:border-dolphin-300 hover:text-dolphin-700'
                  }`}
                >
                  <Icon size={14} className={isSelected ? 'text-white' : 'text-dolphin-600'} />
                  <span>{sector.badge}</span>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Industry Sector Breakdown Cards */}
      <section className="px-5 py-20 lg:px-8 lg:py-28 bg-sand">
        <div className="mx-auto max-w-7xl space-y-12">
          <AnimatePresence mode="popLayout">
            {filteredSectors.map((sector, index) => {
              const Icon = iconMap[sector.icon] || Layers
              return (
                <motion.article
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  key={sector.id}
                  id={sector.id}
                  className="overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-10 shadow-xl"
                >
                  <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
                    {/* Left Column: Overview & Solutions */}
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="grid h-11 w-11 place-items-center rounded-xl bg-dolphin-50 text-dolphin-700 shadow-2xs">
                          <Icon size={22} />
                        </span>
                        <div>
                          <span className="text-xs font-bold uppercase tracking-wider text-dolphin-700">
                            {sector.badge}
                          </span>
                          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                            {sector.name}
                          </h2>
                        </div>
                      </div>

                      <h3 className="mt-5 text-lg sm:text-xl font-bold text-dolphin-900 leading-snug">
                        {sector.headline}
                      </h3>

                      <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600">
                        {sector.description}
                      </p>

                      {/* Solutions Delivered */}
                      <div className="mt-6 rounded-2xl bg-dolphin-50/70 p-5 border border-dolphin-100">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-dolphin-800 flex items-center gap-1.5">
                          <Sparkles size={14} className="text-dolphin-600" />
                          The DERPS Connected Solution
                        </h4>
                        <ul className="mt-3.5 space-y-2.5">
                          {sector.solutions.map((sol) => (
                            <li key={sol} className="flex items-start gap-2.5 text-xs sm:text-sm font-semibold text-slate-800">
                              <CheckCircle2 className="mt-0.5 shrink-0 text-dolphin-600" size={17} />
                              <span>{sol}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Connected Modules */}
                      <div className="mt-6 flex flex-wrap items-center gap-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mr-1">
                          Core Modules:
                        </span>
                        {sector.modules.map((mod) => (
                          <Link
                            key={mod}
                            to={modulePathMap[mod] || '/operations'}
                            className="inline-flex items-center gap-1 rounded-lg bg-slate-100 hover:bg-dolphin-100 hover:text-dolphin-700 px-3 py-1 text-xs font-bold text-slate-700 transition"
                          >
                            <span>{mod}</span>
                            <ArrowRight size={11} />
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Right Column: Pain Points Replaced & Value Card */}
                    <div className="flex flex-col justify-between rounded-2xl bg-ink p-6 sm:p-8 text-white shadow-lg">
                      <div>
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-rose-300">
                          <XCircle size={14} /> Traditional Disjointed Pain Points
                        </span>
                        <h4 className="mt-2 text-base font-bold text-slate-200">
                          What your business leaves behind with DERPS:
                        </h4>
                        <ul className="mt-4 space-y-3">
                          {sector.challenges.map((chal) => (
                            <li key={chal} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                              <span className="h-1.5 w-1.5 rounded-full bg-rose-400 mt-2 shrink-0" />
                              <span>{chal}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                        <div>
                          <p className="text-xs text-dolphin-300 font-semibold">Custom Deployment</p>
                          <p className="text-sm font-bold text-white">Configured to your team</p>
                        </div>
                        <Button to="/contact-us" variant="light" className="text-xs px-4 py-2">
                          Request Walkthrough
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.article>
              )
            })}
          </AnimatePresence>
        </div>
      </section>

      {/* Why Vertical Teams Choose DERPS */}
      <section className="px-5 py-24 lg:px-8 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-xs font-bold tracking-[0.2em] text-dolphin-700 uppercase">
                WHY IT MATTERS
              </span>
              <h2 className="mt-4 text-balance text-3xl font-extrabold sm:text-4xl lg:text-5xl text-slate-900">
                Stop forcing generic tools to fit specialized operations
              </h2>
              <p className="mt-4 text-base sm:text-lg text-slate-600">
                Generic CRM, project, and accounting software forces your team to write messy workarounds and pay for endless plugins. DERPS provides deep, native functionality for real enterprise workflows.
              </p>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7 shadow-xs">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-dolphin-600 text-white font-bold">
                <Zap size={20} />
              </span>
              <h3 className="mt-5 text-lg font-bold text-slate-900">Zero Custom Integration Code</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Sales orders, serialized warehouse items, digital quote sign-offs, and general ledger journal entries connect natively without costly Zapier or custom webhook maintenance.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7 shadow-xs">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-dolphin-600 text-white font-bold">
                <ShieldCheck size={20} />
              </span>
              <h3 className="mt-5 text-lg font-bold text-slate-900">Granular Route-Level RBAC</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Whether you manage field technicians, underwriting analysts, or sales agents, define precise role access rights down to individual route and feature codes.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7 shadow-xs sm:col-span-2 lg:col-span-1">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-dolphin-600 text-white font-bold">
                <Building2 size={20} />
              </span>
              <h3 className="mt-5 text-lg font-bold text-slate-900">Multi-Tenant Brand Ready</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Easily manage child ISO brands, separate enterprise departments, or regional entities under one unified platform with isolated data partitions and custom logos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="px-5 pb-24 lg:px-8 lg:pb-32">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 rounded-[2.5rem] bg-gradient-to-r from-ink via-slate-900 to-dolphin-900 p-8 text-white sm:p-14 md:flex-row md:items-center shadow-2xl">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold">Ready to modernize your industry workflow?</h2>
            <p className="mt-3 text-slate-300 text-base sm:text-lg max-w-xl">
              Connect with our industry solutions specialists for a live walkthrough tailored to your vertical.
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-3">
            <Button to="/contact-us" variant="light">Book Live Demo</Button>
            <Button to="/solutions" variant="outlineLight">View Solutions</Button>
          </div>
        </div>
      </section>
    </>
  )
}
