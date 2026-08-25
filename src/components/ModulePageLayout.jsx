import {
  BadgeCheck, BadgeDollarSign, BellRing, BookOpenCheck, Boxes, CalendarDays,
  ChartColumnBig, ChartNoAxesCombined, ChartPie, ChartSpline, Check,
  CheckCircle2, CircleCheckBig, CircleDollarSign, ClipboardCheck,
  ClipboardPenLine, Clock, Columns3, ContactRound, FileCheck2, FileInput,
  FileSpreadsheet, FileText, FolderGit2, Gauge, Goal, GraduationCap,
  HandCoins, Handshake, HardDrive, Headset, Inbox, KanbanSquare,
  Landmark, LifeBuoy, ListPlus, Megaphone, MessagesSquare, NotebookTabs,
  PackageCheck, PackageSearch, PanelsTopLeft, Receipt, ReceiptText,
  RefreshCcw, Rocket, Route, ScanBarcode, ScanLine, ScrollText,
  Settings2, ShieldCheck, SlidersHorizontal, Tags, Truck, Undo2,
  UsersRound, Video, WalletCards, Warehouse, Wrench, Sparkles,
  ArrowRight,
} from 'lucide-react'
import { motion } from 'framer-motion'
import Button from './ui/Button'
import FaqAccordion from './FaqAccordion'
import Reveal from './Reveal'
import Seo from './Seo'

const iconMap = {
  BadgeCheck, BadgeDollarSign, BellRing, BookOpenCheck, Boxes, CalendarDays,
  ChartColumnBig, ChartNoAxesCombined, ChartPie, ChartSpline, Check,
  CheckCircle2, CircleCheckBig, CircleDollarSign, ClipboardCheck,
  ClipboardPenLine, Clock, ClockAlert: Clock, Columns3, ContactRound, FileCheck2, FileInput,
  FileSpreadsheet, FileText, FolderGit2, Gauge, Goal, GraduationCap,
  HandCoins, Handshake, HardDrive, Headset, Inbox, KanbanSquare,
  Landmark, LifeBuoy, ListPlus, Megaphone, MessagesSquare, NotebookTabs,
  PackageCheck, PackageSearch, PanelsTopLeft, Receipt, ReceiptText,
  RefreshCcw, Rocket, Route, ScanBarcode, ScanLine, ScrollText,
  Settings2, ShieldCheck, SlidersHorizontal, Tags, Truck, Undo2,
  UsersRound, Video, WalletCards, Warehouse, Wrench, Sparkles,
}

export default function ModulePageLayout({ content }) {
  const [flagshipFeature, ...gridFeatures] = content.features || []

  return (
    <>
      <Seo title={content.name} description={content.subhead} />
      <ModuleHero content={content} />
      <ModuleAreas content={content} />

      {/* Main Features Section */}
      <section className="overflow-hidden px-5 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="text-xs font-bold tracking-[0.2em] text-dolphin-700">CORE CAPABILITIES</p>
            <h2 className="mt-4 text-balance text-3xl font-extrabold sm:text-4xl lg:text-5xl">
              Everything your {content.name.toLowerCase()} team needs
            </h2>
          </div>

          {/* Spotlight Flagship Feature with Single Image Showcase */}
          {flagshipFeature && (
            <Reveal>
              <div className="mb-14 overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 sm:p-12 shadow-soft">
                <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_.9fr]">
                  <div>
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-dolphin-50 text-dolphin-700">
                      {iconMap[flagshipFeature.icon] ? (
                        (() => {
                          const Icon = iconMap[flagshipFeature.icon]
                          return <Icon size={24} />
                        })()
                      ) : (
                        <Sparkles size={24} />
                      )}
                    </span>
                    <h3 className="mt-6 text-balance text-2xl font-extrabold sm:text-3xl lg:text-4xl text-slate-900">
                      {flagshipFeature.title}
                    </h3>
                    <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600">
                      {flagshipFeature.description}
                    </p>
                    <ul className="mt-7 space-y-3">
                      {flagshipFeature.bullets.map(item => (
                        <li key={item} className="flex items-start gap-3 font-semibold text-slate-700 text-sm sm:text-base">
                          <Check className="mt-1 shrink-0 text-dolphin-600" size={18} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Exactly 1 clean image showcase per module */}
                  <ModuleImageShowcase moduleName={content.name} image={content.image} />
                </div>
              </div>
            </Reveal>
          )}

          {/* Capabilities Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {gridFeatures.map((feature) => {
              const Icon = iconMap[feature.icon] || Sparkles
              return (
                <Reveal key={feature.title}>
                  <motion.article
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                    className="flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-white p-7 shadow-soft transition hover:border-dolphin-300 hover:shadow-lg"
                  >
                    <div>
                      <span className="icon-lift grid h-11 w-11 place-items-center rounded-xl bg-dolphin-50 text-dolphin-700">
                        <Icon size={22} />
                      </span>
                      <h4 className="mt-5 text-xl font-bold text-slate-900 leading-snug">
                        {feature.title}
                      </h4>
                      <p className="mt-3 text-sm leading-relaxed text-slate-600">
                        {feature.description}
                      </p>
                    </div>

                    <ul className="mt-6 space-y-2.5 border-t border-slate-100 pt-5">
                      {feature.bullets.map(bullet => (
                        <li key={bullet} className="flex items-start gap-2.5 text-xs font-semibold text-slate-700 leading-5">
                          <Check className="mt-0.5 shrink-0 text-dolphin-600" size={15} />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.article>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <Benefits content={content} />
      <FaqAccordion
        items={content.faqs}
        title={`${content.name} questions, answered`}
        body={`Helpful context for teams considering DERPS ${content.name}.`}
      />
      <section className="px-5 pb-24 lg:px-8 lg:pb-32">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-7 rounded-[2rem] bg-dolphin-600 p-8 text-white sm:p-12 md:flex-row md:items-center shadow-xl">
          <div>
            <h2 className="text-3xl font-extrabold">Ready to connect your {content.name.toLowerCase()} work?</h2>
            <p className="mt-3 text-dolphin-100">See how DERPS fits the way your team works today.</p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-3">
            <Button to="/contact-us" variant="light">Book a Demo</Button>
            <Button to="/contact-us" variant="outlineLight">{content.secondaryCta}</Button>
          </div>
        </div>
      </section>
    </>
  )
}

function ModuleHero({ content }) {
  return (
    <section className="relative overflow-hidden bg-dolphin-50 px-5 py-20 lg:px-8 lg:py-28">
      <motion.div
        animate={{ rotate: [0, 5, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute right-0 top-0 h-72 w-72 translate-x-1/3 -translate-y-1/3 rounded-full border-[50px] border-dolphin-100"
      />
      <Reveal>
        <div className="relative mx-auto max-w-5xl text-center">
          <p className="text-xs font-bold tracking-[0.2em] text-dolphin-700">{content.eyebrow}</p>
          <h1 className="mx-auto mt-5 max-w-4xl text-balance text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:text-6xl">
            {content.title}
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            {content.subhead}
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Button to="/contact-us">Book a Demo</Button>
            <Button to="/contact-us" variant="secondary">{content.secondaryCta}</Button>
          </div>
          <ul className="mt-10 flex flex-col justify-center gap-3 text-sm font-semibold text-slate-600 sm:flex-row sm:gap-7">
            {content.trustBullets.map(item => (
              <li key={item} className="flex items-center justify-center gap-2">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-dolphin-600 text-white">
                  <Check size={12} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  )
}

function ModuleAreas({ content }) {
  return (
    <section className="border-y border-slate-200 bg-white px-5 py-12 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-xl font-bold">{content.stripTitle}</h2>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07 } } }}
          className={`mt-8 grid gap-3 sm:grid-cols-2 ${content.areas.length === 5 ? 'lg:grid-cols-5' : 'lg:grid-cols-6'}`}
        >
          {content.areas.map(area => {
            const Icon = iconMap[area.icon] || Sparkles
            return (
              <motion.article
                variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0 } }}
                key={area.label}
                className="group interactive-card rounded-xl border border-slate-200 p-4 text-center"
              >
                <Icon className="icon-lift mx-auto text-dolphin-700" size={23} />
                <h3 className="mt-3 text-sm font-bold tracking-normal">{area.label}</h3>
                {area.description && <p className="mt-2 text-xs leading-5 text-slate-500">{area.description}</p>}
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

function ModuleImageShowcase({ moduleName, image }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className="relative rounded-2xl border border-slate-200 bg-slate-50 p-3 sm:p-4 shadow-soft"
    >
      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
        {/* Browser Top Window Bar */}
        <div className="flex h-10 items-center justify-between border-b border-slate-200 bg-slate-50/80 px-4">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
          </div>
          <span className="rounded bg-slate-200/70 px-3 py-0.5 text-[11px] font-medium text-slate-600">
            DERPS · {moduleName} Workspace
          </span>
          <span className="h-2 w-4" />
        </div>

        {/* Image Display or Clean Placeholder Slot */}
        {image ? (
          <img
            src={image}
            alt={`DERPS ${moduleName} interface screenshot`}
            className="w-full h-auto object-cover max-h-[420px]"
          />
        ) : (
          <div className="relative flex min-h-[300px] sm:min-h-[360px] flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-dolphin-50/40 p-8 text-center">
            <div className="grid h-16 w-16 place-items-center rounded-2xl bg-white text-dolphin-600 shadow-md border border-slate-200/80">
              <Sparkles size={28} />
            </div>
            <h4 className="mt-5 text-base font-bold text-slate-800">
              {moduleName} Module Interface
            </h4>
            <p className="mt-1.5 max-w-xs text-xs text-slate-500 leading-relaxed">
              Unified workspace overview for {moduleName.toLowerCase()} operations and team workflows.
            </p>
            <div className="mt-6 flex items-center gap-2 rounded-full border border-dolphin-200 bg-white px-3.5 py-1 text-xs font-semibold text-dolphin-700 shadow-xs">
              <span className="h-2 w-2 rounded-full bg-dolphin-600" />
              <span>Live Connected Module</span>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  )
}

function Benefits({ content }) {
  const split = Math.ceil(content.benefits.length / 2)
  return (
    <section className="bg-ink px-5 py-20 text-white lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.8fr_1.2fr]">
        <div>
          <p className="text-xs font-bold tracking-[0.2em] text-dolphin-300">THE BUSINESS IMPACT</p>
          <h2 className="mt-4 text-balance text-3xl font-extrabold sm:text-4xl">{content.benefitsTitle}</h2>
        </div>
        <div className="grid gap-x-8 sm:grid-cols-2">
          {[content.benefits.slice(0, split), content.benefits.slice(split)].map((column, index) => (
            <ul key={index} className="divide-y divide-white/10">
              {column.map(item => (
                <li key={item} className="flex items-start gap-3 py-4 font-semibold leading-6 text-slate-200">
                  <Check className="mt-0.5 shrink-0 text-dolphin-300" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  )
}
