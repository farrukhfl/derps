import { Check, CircleCheck, Sparkles, ShieldCheck, Zap } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { hero } from '../data/homeContent'
import Button from './ui/Button'
import { skipInitialAnimation, useStartLoopAfterMount } from '../utils/hydrationFlag'

export default function Hero() {
  const reduceMotion = useReducedMotion()
  const loopReady = useStartLoopAfterMount()
  const loop = (keyframes) => (reduceMotion || !loopReady ? {} : keyframes)
  const skipMountFade = reduceMotion || skipInitialAnimation
  const enter = (delay) => ({
    initial: skipMountFade ? false : { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
  })

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-dolphin-50/70 via-white to-dolphin-50/30">
      {/* Background Ambience & Dot Grid */}
      <div className="dot-grid absolute inset-0 opacity-40 [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" aria-hidden="true" />
      <motion.div
        className="absolute -left-28 top-20 h-96 w-96 rounded-full bg-dolphin-200/40 blur-3xl"
        animate={loop({ x: [0, 35, 0], y: [0, -25, 0] })}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
        data-loop-anim="true"
      />
      <motion.div
        className="absolute -right-20 bottom-10 h-96 w-96 rounded-full bg-dolphin-200/35 blur-3xl"
        animate={loop({ x: [0, -30, 0], y: [0, 20, 0] })}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
        data-loop-anim="true"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-[1.05fr_.95fr] lg:gap-14 lg:px-8 lg:py-28">
        {/* Left Column: Headlines & CTAs */}
        <div>
          <motion.div {...enter(0)} className="inline-flex items-center gap-2 rounded-full border border-dolphin-200/80 bg-white/90 px-3.5 py-1.5 shadow-xs backdrop-blur">
            <span className="flex h-2 w-2 rounded-full bg-dolphin-600 animate-pulse" />
            <span className="text-xs font-bold tracking-[0.18em] text-dolphin-700 uppercase">
              {hero.eyebrow}
            </span>
          </motion.div>

          <motion.h1
            {...enter(0.08)}
            className="mt-6 text-balance text-4xl font-extrabold leading-[1.08] text-ink sm:text-5xl lg:text-[3.75rem]"
          >
            {hero.title}
          </motion.h1>

          <motion.p
            {...enter(0.16)}
            className="mt-6 max-w-xl text-lg sm:text-xl font-semibold leading-8 text-dolphin-800"
          >
            {hero.subhead}
          </motion.p>

          <motion.p
            {...enter(0.22)}
            className="mt-4 max-w-xl text-base leading-7 text-slate-600"
          >
            {hero.body}
          </motion.p>

          <motion.div {...enter(0.28)} className="mt-8 flex flex-wrap items-center gap-4">
            <Button to="/contact-us" className="shadow-lg shadow-dolphin-600/25">
              {hero.cta}
            </Button>
            <Button to="/solutions" variant="secondary">
              Explore Solutions
            </Button>
          </motion.div>

          {/* Trust Highlights */}
          <motion.div {...enter(0.34)} className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 pt-6 border-t border-slate-200/80">
            <div className="flex items-center gap-2.5 text-sm font-semibold text-slate-700">
              <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-emerald-100 text-emerald-700">
                <Check size={14} />
              </span>
              <span>Guided Onboarding & Migration</span>
            </div>
            <div className="flex items-center gap-2.5 text-sm font-semibold text-slate-700">
              <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-dolphin-100 text-dolphin-700">
                <ShieldCheck size={14} />
              </span>
              <span>Enterprise RBAC Security</span>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Eye-Catching Transparent Floating Image Showcase */}
        <motion.div
          initial={skipMountFade ? false : { opacity: 0, scale: 0.92, y: 25 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-2xl"
        >
          {/* Subtle Radial Glow Behind Transparent Graphic */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[380px] w-[520px] rounded-full bg-gradient-to-tr from-dolphin-400/25 via-dolphin-200/20 to-emerald-300/15 blur-3xl -z-10 pointer-events-none" />

          {/* Floating Transparent Image Container */}
          <motion.div
            animate={loop({ y: [0, -10, 0] })}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            whileHover={{ scale: 1.025 }}
            className="relative cursor-pointer transition duration-300"
            data-loop-anim="true"
          >
            <img
              src="/DERPS Website images/Homepage images/homepage hero banner top.webp"
              alt="DERPS Enterprise Live Platform Interface"
              className="w-full h-auto object-contain drop-shadow-[0_25px_35px_rgba(12,121,247,0.18)] drop-shadow-[0_10px_15px_rgba(0,0,0,0.06)]"
              loading="eager"
            />

            {/* Floating Live Badge: Top Right */}
            <motion.div
              animate={loop({ y: [0, -6, 0] })}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -right-2 top-2 hidden sm:flex items-center gap-3 rounded-2xl border border-slate-200/90 bg-white/95 px-4 py-3 shadow-xl backdrop-blur"
              data-loop-anim="true"
            >
              <span className="grid h-8 w-8 place-items-center rounded-xl bg-dolphin-50 text-dolphin-600 font-bold shadow-xs">
                <Zap size={18} />
              </span>
              <div>
                <p className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  100% Real-Time Sync
                </p>
                <p className="text-[10px] font-medium text-slate-500">Live Connected Workflows</p>
              </div>
            </motion.div>

            {/* Floating Live Badge: Bottom Left */}
            <motion.div
              animate={loop({ y: [0, 6, 0] })}
              transition={{ duration: 5, delay: 0.6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -left-3 bottom-4 hidden sm:flex items-center gap-3 rounded-2xl border border-slate-800 bg-ink px-4 py-3 text-white shadow-2xl"
              data-loop-anim="true"
            >
              <span className="grid h-8 w-8 place-items-center rounded-xl bg-emerald-500/20 text-emerald-400">
                <CircleCheck size={18} />
              </span>
              <div>
                <p className="text-xs font-bold text-white">Unified Enterprise Engine</p>
                <p className="text-[10px] text-dolphin-200">Ops · CRM · Accounts · Comms</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
