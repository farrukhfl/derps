import {
  Boxes, ClipboardCheck, ContactRound, Landmark, Layers2, LifeBuoy,
  MessagesSquare, PanelsTopLeft, Share2, TrendingUp, UsersRound,
  ShieldCheck, Activity, CheckCircle2, ArrowUpRight, Zap
} from 'lucide-react'
import { motion } from 'framer-motion'
import Seo from '../components/Seo'
import Reveal from '../components/Reveal'
import Button from '../components/ui/Button'
import SectionHeading from '../components/ui/SectionHeading'
import { aboutContent } from '../data/aboutContent'

const icons = { Boxes, ClipboardCheck, ContactRound, Landmark, Layers2, LifeBuoy, MessagesSquare, PanelsTopLeft, Share2, TrendingUp, UsersRound }

export default function AboutUs() {
  return (
    <>
      <Seo title={aboutContent.title} description={aboutContent.subhead} />
      
      {/* Hero Section */}
      <section className="overflow-hidden bg-dolphin-50 px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[.95fr_1.05fr]">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-dolphin-700">{aboutContent.eyebrow}</p>
            <h1 className="mt-5 text-balance text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:text-6xl">
              {aboutContent.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              {aboutContent.subhead}
            </p>
            <Button to="/contact-us" className="mt-9">
              {aboutContent.cta}
            </Button>
          </div>
          <EnterpriseDashboardCard />
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="px-5 py-24 lg:px-8 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading align="center" eyebrow="ONE CONNECTED SYSTEM" title={aboutContent.capabilitiesTitle} />
          </Reveal>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }}
            className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {aboutContent.capabilities.map(item => {
              const Icon = icons[item.icon] || Boxes
              return (
                <motion.article
                  variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }}
                  key={item.name}
                  className="group interactive-card rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 flex flex-col justify-between"
                >
                  <div>
                    <span className="icon-lift grid h-12 w-12 place-items-center rounded-xl bg-dolphin-50 text-dolphin-700 group-hover:bg-dolphin-600 group-hover:text-white transition">
                      <Icon size={22} />
                    </span>
                    <h2 className="mt-5 text-lg font-bold sm:text-xl text-slate-900">{item.name}</h2>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
                  </div>
                </motion.article>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-sand px-5 py-24 lg:px-8 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow={aboutContent.mission.eyebrow}
              title={aboutContent.mission.title}
              body={aboutContent.mission.body}
            />
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {aboutContent.mission.features.map(item => {
              const Icon = icons[item.icon] || Layers2
              return (
                <article key={item.title} className="rounded-2xl bg-white p-8 shadow-soft border border-slate-200/80 flex flex-col justify-between">
                  <div>
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-dolphin-600 text-white shadow-sm">
                      <Icon size={24} />
                    </span>
                    <h3 className="mt-6 text-xl font-bold text-slate-900">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.description}</p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="px-5 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-5xl rounded-[2rem] bg-ink px-6 py-16 text-center text-white sm:px-12 shadow-2xl">
          <h2 className="text-balance text-4xl font-extrabold lg:text-5xl">
            {aboutContent.closingTitle}
          </h2>
          <Button to="/contact-us" className="mt-8">
            Get Started
          </Button>
        </div>
      </section>
    </>
  )
}

function EnterpriseDashboardCard() {
  return (
    <div className="relative rounded-[2rem] border border-slate-200 bg-white p-4 shadow-xl">
      <div className="rounded-2xl bg-slate-900 p-6 text-white">
        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-dolphin-600 font-bold text-white text-xs">
              DRMS
            </span>
            <div>
              <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400">System Status</span>
              <p className="text-sm font-bold text-emerald-400 flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" /> All Systems Live
              </p>
            </div>
          </div>
          <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-slate-300">
            Multi-Tenant Enterprise
          </span>
        </div>

        {/* Live Metrics Grid */}
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
          <div className="rounded-xl bg-white/5 p-3.5 border border-white/5">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Quoted Deals</span>
            <p className="mt-1 text-lg font-extrabold text-white">$142,500</p>
            <span className="text-[10px] text-emerald-400 font-semibold flex items-center gap-0.5 mt-0.5">
              <ArrowUpRight size={12} /> Digital Quotes Live
            </span>
          </div>

          <div className="rounded-xl bg-white/5 p-3.5 border border-white/5">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Inventory Stock</span>
            <p className="mt-1 text-lg font-extrabold text-white">1,240 Units</p>
            <span className="text-[10px] text-dolphin-300 font-semibold mt-0.5 block">
              Serialized Tracking Active
            </span>
          </div>

          <div className="rounded-xl bg-white/5 p-3.5 border border-white/5 col-span-2 sm:col-span-1">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">General Ledger</span>
            <p className="mt-1 text-lg font-extrabold text-emerald-400">Balanced</p>
            <span className="text-[10px] text-slate-400 font-semibold mt-0.5 block">
              Double-Entry Validated
            </span>
          </div>
        </div>

        {/* Connected Department Streams */}
        <div className="mt-4 rounded-xl bg-white/5 p-4 border border-white/5">
          <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-3">Live Connected Architecture</span>
          <div className="space-y-2.5">
            <div className="flex items-center justify-between text-xs rounded-lg bg-white/5 px-3 py-2">
              <span className="flex items-center gap-2 text-slate-200">
                <CheckCircle2 size={14} className="text-dolphin-400" /> Sales Orders & Fulfillment Dispatch
              </span>
              <span className="font-semibold text-emerald-400 text-[10px] bg-emerald-500/10 px-2 py-0.5 rounded">Synchronized</span>
            </div>
            <div className="flex items-center justify-between text-xs rounded-lg bg-white/5 px-3 py-2">
              <span className="flex items-center gap-2 text-slate-200">
                <CheckCircle2 size={14} className="text-dolphin-400" /> Merchant Onboarding & Underwriting Board
              </span>
              <span className="font-semibold text-dolphin-300 text-[10px] bg-dolphin-500/10 px-2 py-0.5 rounded">Active Stream</span>
            </div>
            <div className="flex items-center justify-between text-xs rounded-lg bg-white/5 px-3 py-2">
              <span className="flex items-center gap-2 text-slate-200">
                <CheckCircle2 size={14} className="text-dolphin-400" /> Real-Time WebRTC Video & WebSocket Alerts
              </span>
              <span className="font-semibold text-emerald-400 text-[10px] bg-emerald-500/10 px-2 py-0.5 rounded">Live</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
