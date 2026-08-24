import {
  Boxes, BriefcaseBusiness, Building2, Factory, GraduationCap, HardHat,
  HeartPulse, Laptop, Megaphone, Plane, ShoppingBag, Stethoscope, Truck,
} from 'lucide-react'
import { industries } from '../data/homeContent'

const industryIcons = {
  'Retail': ShoppingBag,
  'IT & Technology': Laptop,
  'Field Services': BriefcaseBusiness,
  'Education & Training': GraduationCap,
  'Construction': HardHat,
  'Manufacturing': Factory,
  'Corporate & Enterprise Offices': Building2,
  'Logistics & Supply Chain': Truck,
  'Healthcare': Stethoscope,
  'Wholesale & Distribution': Boxes,
  'Consulting': BriefcaseBusiness,
  'Media & Marketing': Megaphone,
  'International Services': Plane,
}

export default function IndustriesMarquee() {
  const items = [...industries, ...industries]
  return <section id="industries" className="overflow-hidden border-y border-slate-200 py-8" aria-label="Industries served"><p className="mb-6 text-center text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Built for the way your industry works</p><div className="flex w-max animate-marquee hover:[animation-play-state:paused]">{items.map((industry, i) => { const Icon = industryIcons[industry] || HeartPulse; return <div className="group mx-3 flex items-center gap-3 whitespace-nowrap rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-600 transition duration-300 hover:border-dolphin-200 hover:shadow-soft" key={`${industry}-${i}`} aria-hidden={i >= industries.length}><Icon className="text-dolphin-600 transition duration-300 group-hover:rotate-6 group-hover:scale-110" size={18} strokeWidth={2} aria-hidden="true" />{industry}</div> })}</div></section>
}
