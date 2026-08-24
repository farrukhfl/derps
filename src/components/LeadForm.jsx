import { useState } from 'react'
import { countries } from '../data/countries'
import { industries } from '../data/homeContent'
import Button from './ui/Button'
import SectionHeading from './ui/SectionHeading'

const initial = { company: '', email: '', phone: '', country: '', size: '', industry: '' }

export default function LeadForm() {
  const [values, setValues] = useState(initial)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const update = ({ target }) => setValues({ ...values, [target.name]: target.value })
  const submit = (event) => {
    event.preventDefault()
    const next = {}
    for (const field of ['company', 'email', 'phone', 'country']) if (!values[field].trim()) next[field] = 'This field is required.'
    if (values.email && !/^\S+@\S+\.\S+$/.test(values.email)) next.email = 'Enter a valid email address.'
    setErrors(next)
    if (!Object.keys(next).length) {
      // TODO: Connect this form to the approved lead-capture endpoint.
      setSubmitted(true)
    }
  }
  const fieldClass = 'mt-2 min-h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-ink transition focus:border-dolphin-600'
  return <section id="lead-form" className="bg-dolphin-50 px-5 py-24 lg:px-8 lg:py-32"><div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.8fr_1.2fr]"><SectionHeading eyebrow="LET’S TALK" title="See how one system can change the workday" body="Tell us a little about your business. Our team will help you explore whether DERPS is the right fit." />{submitted ? <div className="rounded-2xl border border-dolphin-200 bg-white p-10 shadow-soft" role="status"><h3 className="text-2xl font-bold">Thanks for reaching out.</h3><p className="mt-3 text-slate-600">Your form is valid. Submission will be enabled when the lead-capture backend is connected.</p><button className="mt-6 text-sm font-bold text-dolphin-700" onClick={() => setSubmitted(false)}>Edit information</button></div> : <form onSubmit={submit} noValidate className="grid gap-5 rounded-2xl bg-white p-6 shadow-soft sm:grid-cols-2 sm:p-9"><Field label="Company name" name="company" value={values.company} error={errors.company} onChange={update} className={fieldClass} /><Field label="Email Address" name="email" type="email" value={values.email} error={errors.email} onChange={update} className={fieldClass} /><Field label="Phone Number" name="phone" type="tel" value={values.phone} error={errors.phone} onChange={update} className={fieldClass} /><Select label="Country" name="country" value={values.country} error={errors.country} onChange={update} options={countries} className={fieldClass} required /><Select label="Company Size" name="size" value={values.size} onChange={update} options={['1-5', '10-20', '20-50', '50-100 employees']} className={fieldClass} /><Select label="Industry" name="industry" value={values.industry} onChange={update} options={industries} className={fieldClass} /><div className="sm:col-span-2"><Button type="submit">Submit</Button><p className="mt-3 text-xs text-slate-500">Fields marked with * are required.</p></div></form>}</div></section>
}

function Field({ label, name, error, className, ...props }) {
  return <label className="text-sm font-bold">{label}*<input name={name} className={className} aria-invalid={!!error} aria-describedby={error ? `${name}-error` : undefined} {...props} />{error && <span id={`${name}-error`} className="mt-1 block text-xs text-red-600">{error}</span>}</label>
}

function Select({ label, name, options, error, required, className, ...props }) {
  return <label className="text-sm font-bold">{label}{required && '*'}<select name={name} className={className} aria-invalid={!!error} aria-describedby={error ? `${name}-error` : undefined} {...props}><option value="">Select {label.toLowerCase()}</option>{options.map(option => <option key={option}>{option}</option>)}</select>{error && <span id={`${name}-error`} className="mt-1 block text-xs text-red-600">{error}</span>}</label>
}
