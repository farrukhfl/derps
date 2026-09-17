import { useState, useRef } from 'react'
import { CheckCircle2, ShieldCheck, AlertCircle } from 'lucide-react'
import { countries } from '../data/countries'
import { industries } from '../data/homeContent'
import { postForm } from '../utils/api'
import { sanitizeInput, isValidEmail, checkRateLimit } from '../utils/security'
import Button from './ui/Button'
import SectionHeading from './ui/SectionHeading'

const initial = {
  name: '',
  businessName: '',
  email: '',
  phone: '',
  service: '',
  country: '',
  size: '',
  industry: '',
  message: '',
  website_url_hp: '', // Honeypot field for bot trap
}

const serviceOptions = [
  'Full ERP Suite (All Modules)',
  'Operations & Logistics',
  'Sales Flow',
  'Accounting & Finance',
  'Merchant CRM',
  'Projects & QA Tasks',
  'HR & Staff Directory',
  'Unified Communication',
  'Helpdesk & Support',
]

function validate(values) {
  const errors = {}
  const cleanName = sanitizeInput(values.name)
  const cleanBusiness = sanitizeInput(values.businessName)
  const cleanEmail = values.email.trim()
  const cleanMessage = sanitizeInput(values.message)

  if (!cleanName) errors.name = 'Please enter your name.'
  else if (cleanName.length > 100) errors.name = 'Name must be under 100 characters.'

  if (!cleanBusiness) errors.businessName = 'Please enter your company name.'
  else if (cleanBusiness.length > 120) errors.businessName = 'Company name must be under 120 characters.'

  if (!cleanEmail) errors.email = 'Please enter your email address.'
  else if (!isValidEmail(cleanEmail)) errors.email = 'Please enter a valid business email address.'

  if (!values.service) errors.service = 'Select the module or service you are interested in.'

  if (!cleanMessage) errors.message = 'Tell us a little about what your business needs.'
  else if (cleanMessage.length > 3000) errors.message = 'Message must be under 3,000 characters.'

  return errors
}

export default function LeadForm({
  eyebrow = 'LET’S TALK',
  title = 'See how one system can change the workday',
  body = 'Tell us a little about your business. Our team will help you explore whether DERPS is the right fit.',
}) {
  const [values, setValues] = useState(initial)
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const formLoadTime = useRef(Date.now())

  const update = ({ target }) => {
    const { name, value } = target
    setValues((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
    if (submitError) setSubmitError('')
  }

  const submit = async (event) => {
    event.preventDefault()

    // 1. Bot Honeypot Trap Check (if filled, silently pretend success without sending payload)
    if (values.website_url_hp && values.website_url_hp.trim().length > 0) {
      setSubmitted(true)
      return
    }

    // 2. Automated Script Speed Check (human cannot fill form in < 1.2s)
    const elapsed = Date.now() - formLoadTime.current
    if (elapsed < 1200) {
      setSubmitError('Please take your time filling out the form.')
      return
    }

    // 3. Form Validation & XSS Sanitization
    const nextErrors = validate(values)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      requestAnimationFrame(() => {
        const firstErrorField = Object.keys(nextErrors)[0]
        document.getElementById(firstErrorField)?.focus()
      })
      return
    }

    // 4. Client Rate Limiting Check (prevents flood attacks) - only consumed once the form is actually valid
    const rateCheck = checkRateLimit('lead_form_submit', 8000)
    if (!rateCheck.allowed) {
      setSubmitError(`Please wait ${rateCheck.remainingSeconds} seconds before submitting again.`)
      return
    }

    setIsSubmitting(true)
    setSubmitError('')

    try {
      const sanitizedPayload = {
        name: sanitizeInput(values.name),
        email: values.email.trim(),
        businessName: sanitizeInput(values.businessName),
        service: values.service,
        message: sanitizeInput(values.message),
        phone: sanitizeInput(values.phone) || undefined,
        country: values.country || undefined,
        companySize: values.size || undefined,
        industry: values.industry || undefined,
      }

      await postForm('/contact-inquiry', sanitizedPayload)
      setSubmitted(true)
    } catch (error) {
      const nextApiErrors = error.fieldErrors || {}
      setErrors(nextApiErrors)
      setSubmitError(error.message || 'Unable to submit your request. Please try again.')
      if (Object.keys(nextApiErrors).length > 0) {
        requestAnimationFrame(() => {
          const firstErrorField = Object.keys(nextApiErrors)[0]
          document.getElementById(firstErrorField)?.focus()
        })
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  const fieldClass =
    'mt-2 min-h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-ink transition focus:border-dolphin-600 focus:outline-none focus:ring-1 focus:ring-dolphin-600'
  const errorFieldClass = 'border-rose-500 focus:border-rose-500 focus:ring-rose-500'

  return (
    <section id="lead-form" className="bg-dolphin-50 px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.8fr_1.2fr]">
        <SectionHeading eyebrow={eyebrow} title={title} body={body} />

        {submitted ? (
          <div
            className="flex min-h-[460px] flex-col items-center justify-center rounded-2xl border border-dolphin-200 bg-white p-8 text-center shadow-soft sm:p-12"
            role="status"
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
              <CheckCircle2 size={36} aria-hidden="true" />
            </span>
            <h3 className="mt-6 text-3xl font-extrabold text-ink">Thanks for reaching out!</h3>
            <p className="mt-3 max-w-md text-base leading-7 text-slate-600">
              Your inquiry has been securely recorded. A DERPS solutions specialist will review your requirements and reach out shortly.
            </p>
            <Button
              variant="secondary"
              className="mt-8"
              onClick={() => {
                setValues(initial)
                setErrors({})
                setSubmitError('')
                setSubmitted(false)
                formLoadTime.current = Date.now()
              }}
            >
              Send another message
            </Button>
          </div>
        ) : (
          <form onSubmit={submit} noValidate className="grid gap-5 rounded-2xl bg-white p-6 shadow-soft sm:grid-cols-2 sm:p-9">
            {submitError && (
              <div role="alert" className="sm:col-span-2 flex items-center gap-2.5 rounded-xl border border-rose-200 bg-rose-50 p-4 text-sm font-semibold text-rose-700">
                <AlertCircle size={18} className="shrink-0" />
                <span>{submitError}</span>
              </div>
            )}

            {/* Invisible Honeypot Trap Field (Catches automated bots) */}
            <div className="hidden" aria-hidden="true" style={{ display: 'none' }}>
              <label htmlFor="website_url_hp">Leave this empty</label>
              <input
                type="text"
                id="website_url_hp"
                name="website_url_hp"
                value={values.website_url_hp}
                onChange={update}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <Field
              id="name"
              label="Full Name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="e.g. Alex Morgan"
              required
              value={values.name}
              error={errors.name}
              onChange={update}
              className={`${fieldClass} ${errors.name ? errorFieldClass : ''}`}
            />

            <Field
              id="businessName"
              label="Company / Business Name"
              name="businessName"
              type="text"
              autoComplete="organization"
              placeholder="e.g. Acme Corp"
              required
              value={values.businessName}
              error={errors.businessName}
              onChange={update}
              className={`${fieldClass} ${errors.businessName ? errorFieldClass : ''}`}
            />

            <Field
              id="email"
              label="Email Address"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@company.com"
              required
              value={values.email}
              error={errors.email}
              onChange={update}
              className={`${fieldClass} ${errors.email ? errorFieldClass : ''}`}
            />

            <Field
              id="phone"
              label="Phone Number"
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="e.g. (555) 000-0000"
              value={values.phone}
              error={errors.phone}
              onChange={update}
              className={`${fieldClass} ${errors.phone ? errorFieldClass : ''}`}
            />

            <Select
              id="service"
              label="Module / Service Interested In"
              name="service"
              required
              value={values.service}
              error={errors.service}
              onChange={update}
              options={serviceOptions}
              className={`${fieldClass} ${errors.service ? errorFieldClass : ''}`}
            />

            <Select
              id="country"
              label="Country"
              name="country"
              value={values.country}
              error={errors.country}
              onChange={update}
              options={countries}
              className={`${fieldClass} ${errors.country ? errorFieldClass : ''}`}
            />

            <Select
              id="size"
              label="Company Size"
              name="size"
              value={values.size}
              onChange={update}
              options={['1-5 employees', '10-20 employees', '20-50 employees', '50-100 employees', '100+ employees']}
              className={fieldClass}
            />

            <Select
              id="industry"
              label="Industry"
              name="industry"
              value={values.industry}
              onChange={update}
              options={industries}
              className={fieldClass}
            />

            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-bold text-slate-800">
                Message / How can we help? <span className="text-dolphin-600">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                placeholder="Tell us about your current challenges, workflows, or what you would like to achieve with DERPS..."
                value={values.message}
                onChange={update}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? 'message-error' : undefined}
                className={`${fieldClass} resize-y ${errors.message ? errorFieldClass : ''}`}
              />
              {errors.message && (
                <span id="message-error" className="mt-1 block text-xs font-medium text-rose-600">
                  {errors.message}
                </span>
              )}
            </div>

            <div className="sm:col-span-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
              <Button
                type="submit"
                disabled={isSubmitting}
                aria-busy={isSubmitting}
                className="w-full sm:w-auto disabled:cursor-wait disabled:opacity-70"
              >
                {isSubmitting ? 'Verifying & Sending...' : 'Submit Request'}
              </Button>
              <p className="text-xs text-slate-500 flex items-center gap-1.5">
                <ShieldCheck size={14} className="text-emerald-600" />
                <span>Protected with anti-bot verification. Fields with <span className="text-dolphin-600 font-bold">*</span> required.</span>
              </p>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}

function Field({ id, label, name, error, required, className, ...props }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-bold text-slate-800">
        {label} {required && <span className="text-dolphin-600">*</span>}
      </label>
      <input
        id={id}
        name={name}
        className={className}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        {...props}
      />
      {error && (
        <span id={`${name}-error`} className="mt-1 block text-xs font-medium text-rose-600">
          {error}
        </span>
      )}
    </div>
  )
}

function Select({ id, label, name, options, error, required, className, ...props }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-bold text-slate-800">
        {label} {required && <span className="text-dolphin-600">*</span>}
      </label>
      <select
        id={id}
        name={name}
        className={className}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        {...props}
      >
        <option value="">Select {label.toLowerCase()}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error && (
        <span id={`${name}-error`} className="mt-1 block text-xs font-medium text-rose-600">
          {error}
        </span>
      )}
    </div>
  )
}
