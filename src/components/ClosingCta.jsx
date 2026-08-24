import { closing } from '../data/homeContent'
import Button from './ui/Button'

export default function ClosingCta() {
  return <section className="px-5 py-24 lg:px-8 lg:py-32"><div className="mx-auto max-w-5xl rounded-[2rem] bg-dolphin-600 px-6 py-16 text-center text-white sm:px-12"><p className="text-xs font-bold tracking-[0.2em] text-dolphin-100">READY WHEN YOU ARE</p><h2 className="mt-5 text-balance text-4xl font-extrabold lg:text-5xl">{closing.title}</h2><p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/90">{closing.body}</p><Button to="/contact-us" variant="light" className="mt-8">{closing.cta}</Button></div></section>
}
