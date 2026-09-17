import {
  Boxes, ClipboardCheck, ContactRound, Landmark, Layers2, LifeBuoy,
  MessagesSquare, PanelsTopLeft, Share2, TrendingUp, UsersRound,
  ShieldCheck, Activity, CheckCircle2, ArrowUpRight, Zap, Sparkles,
  Check
} from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import Seo from '../components/Seo'
import { skipInitialAnimation, useStartLoopAfterMount } from '../utils/hydrationFlag'
import Reveal from '../components/Reveal'
import Button from '../components/ui/Button'
import SectionHeading from '../components/ui/SectionHeading'
import { aboutContent } from '../data/aboutContent'

const icons = {
  Boxes, ClipboardCheck, ContactRound, Landmark,
  Layers2, LifeBuoy, MessagesSquare, PanelsTopLeft,
  Share2, TrendingUp, UsersRound
}

export default function AboutUs() {
  const reduceMotion = useReducedMotion()
  const loopReady = useStartLoopAfterMount()

  return (
    <>
      <Seo title={aboutContent.title} description={aboutContent.subhead} />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-dolphin-50 via-white to-dolphin-50/40 px-5 py-20 lg:px-8 lg:py-28">
        <div className="dot-grid absolute inset-0 opacity-30 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" aria-hidden="true" />
        <motion.div
          animate={reduceMotion || !loopReady ? {} : { x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -left-20 top-10 h-80 w-80 rounded-full bg-dolphin-200/40 blur-3xl -z-10"
          data-loop-anim="true"
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[.95fr_1.05fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-dolphin-200/80 bg-white px-3.5 py-1 text-xs font-bold tracking-[0.2em] text-dolphin-700 shadow-xs uppercase">
              <Sparkles size={14} className="text-dolphin-600" />
              <span>{aboutContent.eyebrow}</span>
            </div>

            <h1 className="mt-5 text-balance text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:text-6xl text-slate-900">
              {aboutContent.title}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              {aboutContent.subhead}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Button to="/contact-us" className="shadow-md shadow-dolphin-600/20">
                {aboutContent.cta}
              </Button>
              <Button to="/solutions" variant="secondary">
                View Solutions
              </Button>
            </div>

            <div className="mt-8 flex items-center gap-6 text-sm font-semibold text-slate-700 pt-6 border-t border-slate-200/70">
              <span className="flex items-center gap-2">
                <Check className="text-emerald-600" size={16} /> Multi-Tenant Ready
              </span>
              <span className="flex items-center gap-2">
                <Check className="text-emerald-600" size={16} /> 99.9% Cloud Uptime
              </span>
            </div>
          </div>

          {/* About Us Dynamic Banner GIF Showcase */}
          <AboutBannerShowcase />
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="px-5 py-24 lg:px-8 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading align="center" eyebrow="ONE CONNECTED SYSTEM" title={aboutContent.capabilitiesTitle} />
          </Reveal>
          <motion.div
            initial={skipInitialAnimation ? "visible" : "hidden"}
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
                  className="group interactive-card rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 flex flex-col justify-between shadow-soft hover:border-dolphin-300"
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
        <div className="mx-auto max-w-5xl rounded-[2rem] bg-gradient-to-r from-ink via-slate-900 to-dolphin-900 px-6 py-16 text-center text-white sm:px-12 shadow-2xl">
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

function AboutBannerShowcase() {
  return (
    <motion.div
      initial={skipInitialAnimation ? false : { opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto w-full max-w-xl"
    >
      <div className="blue-glow overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-3.5 shadow-2xl">
        <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-900 group">
          {/* Top Window Bar */}
          <div className="flex h-10 items-center justify-between border-b border-white/10 bg-slate-800/90 px-4">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </div>
            <span className="text-xs font-semibold text-slate-300">
              DERPS Enterprise Ecosystem · Architecture
            </span>
            <span className="flex items-center gap-1 text-[11px] text-emerald-400 font-bold">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" /> Live
            </span>
          </div>

          {/* Animated Banner GIF */}
          <div className="relative overflow-hidden bg-slate-950 flex items-center justify-center p-2 sm:p-3">
            <img
              src="/DERPS Website images/DERPS About us/banner.gif"
              alt="DERPS Enterprise System Architecture Overview"
              className="w-full h-auto max-h-[520px] object-contain transition duration-500 group-hover:scale-[1.02]"
            />
          </div>
        </div>

        {/* Live Architecture Status Bar */}
        <div className="mt-3.5 flex items-center justify-between rounded-xl bg-slate-50 px-4 py-2.5 border border-slate-100 text-xs font-semibold text-slate-700">
          <div className="flex items-center gap-2">
            <ShieldCheck size={16} className="text-dolphin-600" />
            <span>Multi-Tenant Enterprise Cloud</span>
          </div>
          <span className="rounded-md bg-dolphin-100 px-2.5 py-0.5 text-[11px] font-bold text-dolphin-700">
            8 Connected Modules
          </span>
        </div>
      </div>
    </motion.div>
  )
}
