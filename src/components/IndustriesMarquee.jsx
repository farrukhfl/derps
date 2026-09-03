import {
  Boxes, BriefcaseBusiness, Building2, Factory, GraduationCap, HardHat,
  HeartPulse, Laptop, Megaphone, Plane, ShoppingBag, Stethoscope, Truck,
  ArrowRight
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { industries } from '../data/homeContent'

const industryIcons = {
  'Retail & E-Commerce': ShoppingBag,
  'Merchant Services & ISO Payments': Building2,
  'Field Services & Logistics': Truck,
  'IT & Software Engineering': Laptop,
  'Corporate & Multi-Entity Enterprises': Building2,
  'Wholesale & Distribution': Boxes,
  'Hardware Staging & Manufacturing': Factory,
  'Consulting & Professional Services': BriefcaseBusiness,
  'Healthcare & Medical Supplies': Stethoscope,
  'Education & Training Academies': GraduationCap,
}

export default function IndustriesMarquee() {
  const items = [...industries, ...industries]

  return (
    <section id="industries" className="overflow-hidden border-y border-slate-200 bg-white py-8" aria-label="Industries served">
      <div className="flex flex-col sm:flex-row items-center justify-between mx-auto max-w-7xl px-5 mb-5">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 text-center sm:text-left">
          Built for the way your vertical industry works
        </p>
        <Link
          to="/industries"
          className="mt-2 sm:mt-0 inline-flex items-center gap-1.5 text-xs font-bold text-dolphin-700 hover:text-dolphin-800 transition group"
        >
          <span>Explore all industry solutions</span>
          <ArrowRight size={13} className="transition group-hover:translate-x-1" />
        </Link>
      </div>

      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {items.map((industry, i) => {
          const Icon = industryIcons[industry] || HeartPulse
          return (
            <Link
              to="/industries"
              className="group mx-2.5 flex items-center gap-3 whitespace-nowrap rounded-full border border-slate-200/90 bg-slate-50/80 px-5 py-2.5 text-sm font-semibold text-slate-700 transition duration-300 hover:bg-white hover:border-dolphin-300 hover:text-dolphin-700 hover:shadow-soft"
              key={`${industry}-${i}`}
              aria-hidden={i >= industries.length}
            >
              <Icon className="text-dolphin-600 transition duration-300 group-hover:rotate-6 group-hover:scale-110" size={17} strokeWidth={2} aria-hidden="true" />
              <span>{industry}</span>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
