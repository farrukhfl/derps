import { useState } from 'react'
import { CheckCircle2, TrendingDown, Clock, DollarSign, Sparkles, ShieldCheck } from 'lucide-react'
import { motion } from 'framer-motion'
import { impact, moving } from '../data/homeContent'
import Reveal from './Reveal'
import Button from './ui/Button'

export default function ImpactSection() {
  const [teamSize, setTeamSize] = useState(15)

  // Estimated annual calculations
  const standaloneToolCostPerUserYear = 210 * 12 // ~$2,520/user/yr across 7-8 standalone tools
  const derpsAnnualEstimated = Math.round(teamSize * 65 * 12)
  const standaloneAnnual = teamSize * standaloneToolCostPerUserYear
  const annualSavings = Math.max(0, standaloneAnnual - derpsAnnualEstimated)
  const hoursSavedPerYear = teamSize * 180 // ~15 hrs/month saved on data re-entry

  return (
    <>
      <section className="relative overflow-hidden bg-sand px-5 py-24 lg:px-8 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] items-center">
            {/* Left Column: Context & Bullets */}
            <Reveal>
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-dolphin-100/80 px-3.5 py-1 text-xs font-bold tracking-[0.2em] text-dolphin-800 uppercase">
                  <Sparkles size={14} className="text-dolphin-600" />
                  <span>QUANTIFIABLE BUSINESS IMPACT</span>
                </div>

                <h2 className="mt-5 text-balance text-3xl font-extrabold sm:text-4xl lg:text-5xl text-slate-900 leading-tight">
                  {impact.title}
                </h2>

                <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-600">
                  {impact.body}
                </p>

                <ul className="mt-8 space-y-3.5">
                  {impact.bullets.map((item) => (
                    <li key={item} className="flex items-start gap-3 font-semibold text-slate-800 text-sm sm:text-base">
                      <CheckCircle2 className="mt-1 shrink-0 text-dolphin-600" size={19} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <Button to="/contact-us">
                    Calculate Custom ROI
                  </Button>
                  <Button to="/solutions" variant="secondary">
                    Compare Solutions
                  </Button>
                </div>
              </div>
            </Reveal>

            {/* Right Column: Interactive Live ROI Calculator Widget */}
            <Reveal>
              <div className="overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-9 shadow-2xl">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-dolphin-700">
                      Interactive ROI Estimator
                    </span>
                    <h3 className="text-xl font-bold text-slate-900">Estimated Annual Savings</h3>
                  </div>
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700 border border-emerald-200">
                    Live Calculation
                  </span>
                </div>

                {/* Team Size Slider */}
                <div className="mt-6">
                  <div className="flex items-center justify-between">
                    <label htmlFor="team-size" className="text-xs font-bold uppercase tracking-wider text-slate-600">
                      Your Organization Team Size:
                    </label>
                    <span className="text-lg font-extrabold text-dolphin-700 bg-dolphin-50 px-3 py-0.5 rounded-lg border border-dolphin-200">
                      {teamSize} {teamSize === 1 ? 'User' : 'Users'}
                    </span>
                  </div>

                  <input
                    id="team-size"
                    type="range"
                    min="3"
                    max="150"
                    value={teamSize}
                    onChange={(e) => setTeamSize(parseInt(e.target.value, 10))}
                    className="mt-4 w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-dolphin-600"
                  />
                  <div className="flex justify-between text-[11px] text-slate-500 mt-1 font-semibold">
                    <span>3 Users</span>
                    <span>50 Users</span>
                    <span>100 Users</span>
                    <span>150+ Users</span>
                  </div>
                </div>

                {/* Savings Metric Outputs */}
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-emerald-50/80 p-4 sm:p-5 border border-emerald-200/60 text-emerald-950">
                    <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block">
                      Estimated Software Savings
                    </span>
                    {/* Locale pinned to en-US: toLocaleString() with no
                        locale uses the visitor's own browser locale, which
                        the prerendered HTML (always built with en-US) can
                        never match -- causing a hydration mismatch for any
                        non-US-locale visitor. Also keeps the "$" prefix
                        unambiguous instead of e.g. "$26.100" reading as a
                        decimal in locales that use "." as a thousands
                        separator. */}
                    <p className="mt-2 text-2xl sm:text-3xl font-extrabold text-emerald-700">
                      ${annualSavings.toLocaleString('en-US')}
                    </p>
                    <span className="text-[11px] font-medium text-emerald-700 block mt-1">
                      Per year vs. standalone SaaS
                    </span>
                  </div>

                  <div className="rounded-2xl bg-dolphin-50/80 p-4 sm:p-5 border border-dolphin-200/60 text-dolphin-950">
                    <span className="text-xs font-bold text-dolphin-800 uppercase tracking-wider block">
                      Admin Hours Saved
                    </span>
                    <p className="mt-2 text-2xl sm:text-3xl font-extrabold text-dolphin-700">
                      {hoursSavedPerYear.toLocaleString('en-US')} hrs
                    </p>
                    <span className="text-[11px] font-medium text-dolphin-700 block mt-1">
                      Per year in manual data entry
                    </span>
                  </div>
                </div>

                {/* Micro Guarantee */}
                <div className="mt-6 flex items-center justify-between pt-4 border-t border-slate-100 text-xs text-slate-500 font-semibold">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck size={15} className="text-emerald-600" />
                    Zero Data Lock-In
                  </span>
                  <span>Includes Historical Data Migration</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Migration Banner */}
      <section className="bg-ink px-5 py-16 text-white lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold">{moving.title}</h3>
            <p className="mt-2 max-w-3xl leading-relaxed text-slate-300 text-sm sm:text-base">
              {moving.body}
            </p>
          </div>
          <Button to="/contact-us" variant="light" className="shrink-0">
            {moving.cta}
          </Button>
        </div>
      </section>
    </>
  )
}
