import { Mail, Phone, Clock, MapPin, Sparkles, ShieldCheck } from 'lucide-react'
import { motion } from 'framer-motion'
import LeadForm from '../components/LeadForm'
import Seo from '../components/Seo'
import { skipInitialAnimation } from '../utils/hydrationFlag'

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact Us"
        description="Talk with the DERPS team about connecting your business on one ERP platform."
      />

      {/* Hero Section with Contact Image */}
      <section className="relative overflow-hidden bg-gradient-to-b from-ink via-slate-900 to-ink px-5 py-20 text-white lg:px-8 lg:py-28">
        <div className="dot-grid absolute inset-0 opacity-20 [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" aria-hidden="true" />
        <div className="absolute -left-20 top-20 h-80 w-80 rounded-full bg-dolphin-600/20 blur-3xl pointer-events-none" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: Heading & Contact Channels */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-xs font-bold tracking-[0.2em] text-dolphin-300 backdrop-blur uppercase">
              <Sparkles size={14} />
              <span>DIRECT ENTERPRISE DESK</span>
            </div>

            <h1 className="mt-5 text-balance text-4xl font-extrabold sm:text-5xl lg:text-6xl text-white">
              Let’s talk about how your business works
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              Share what you want to simplify. We’ll help you understand how DERPS brings your teams, serialized inventory, merchant CRM, double-entry accounting, and daily operations together.
            </p>

            {/* Quick Contact Action Cards */}
            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              <a
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition duration-200 hover:bg-white/10 hover:border-dolphin-400/50"
                href="mailto:support@derps.com"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-dolphin-600/30 text-dolphin-300 group-hover:bg-dolphin-600 group-hover:text-white transition">
                  <Mail size={22} />
                </span>
                <div>
                  <small className="block text-xs uppercase tracking-wider text-slate-400">Email Direct</small>
                  <strong className="text-sm sm:text-base text-white font-bold">support@derps.com</strong>
                </div>
              </a>

              <a
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition duration-200 hover:bg-white/10 hover:border-dolphin-400/50"
                href="tel:8886961049"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-dolphin-600/30 text-dolphin-300 group-hover:bg-dolphin-600 group-hover:text-white transition">
                  <Phone size={22} />
                </span>
                <div>
                  <small className="block text-xs uppercase tracking-wider text-slate-400">Toll Free Phone</small>
                  <strong className="text-sm sm:text-base text-white font-bold">888-696-1049</strong>
                </div>
              </a>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-6 text-xs text-slate-400 pt-6 border-t border-white/10">
              <span className="flex items-center gap-1.5">
                <Clock size={14} className="text-dolphin-400" /> Mon - Fri: 8:00 AM - 6:00 PM EST
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck size={14} className="text-emerald-400" /> Dedicated Technical Onboarding
              </span>
            </div>
          </div>

          {/* Right Column: Contact Image Showcase */}
          <motion.div
            initial={skipInitialAnimation ? false : { opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-lg"
          >
            <div className="overflow-hidden rounded-3xl border border-white/15 bg-white/5 p-4 backdrop-blur shadow-2xl">
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900 group">
                <img
                  src="/DERPS Website images/Contact us/contact us.webp"
                  alt="Contact DERPS Enterprise Solutions Team"
                  className="w-full h-auto object-cover max-h-[440px] transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="mt-4 flex items-center justify-between px-2 text-xs font-semibold text-slate-300">
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  Specialists Ready To Assist
                </span>
                <span className="text-dolphin-300 font-bold">1-on-1 Live Walkthrough</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <LeadForm
        eyebrow="GET IN TOUCH"
        title="Send our enterprise solutions team a message"
        body="Tell us about your organization and requirements. We'll connect you with a specialist to answer your questions and coordinate a live platform walkthrough."
      />
    </>
  )
}
