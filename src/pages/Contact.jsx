import { Mail, Phone } from 'lucide-react'
import LeadForm from '../components/LeadForm'
import Seo from '../components/Seo'

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact Us"
        description="Talk with the DERPS team about connecting your business on one ERP platform."
      />
      <section className="bg-ink px-5 py-20 text-white lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-dolphin-300">CONTACT US</p>
            <h1 className="mt-5 text-balance text-4xl font-extrabold sm:text-5xl">
              Let’s talk about how your business works
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              Share what you want to simplify. We’ll help you understand how DERPS can bring your teams, inventory, CRM, accounting, and daily operations together.
            </p>
          </div>
          <div className="flex flex-col justify-center gap-5 lg:items-end">
            <a
              className="flex w-full max-w-sm items-center gap-4 rounded-xl bg-white/10 p-5 transition hover:bg-white/15"
              href="mailto:support@derps.com"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-dolphin-600/30 text-dolphin-300">
                <Mail size={22} />
              </span>
              <span>
                <small className="block text-xs uppercase tracking-wider text-slate-400">Email Support</small>
                <strong className="text-base text-white">support@derps.com</strong>
              </span>
            </a>
            <a
              className="flex w-full max-w-sm items-center gap-4 rounded-xl bg-white/10 p-5 transition hover:bg-white/15"
              href="tel:8886961049"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-dolphin-600/30 text-dolphin-300">
                <Phone size={22} />
              </span>
              <span>
                <small className="block text-xs uppercase tracking-wider text-slate-400">Toll Free Phone</small>
                <strong className="text-base text-white">888-696-1049</strong>
              </span>
            </a>
          </div>
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
