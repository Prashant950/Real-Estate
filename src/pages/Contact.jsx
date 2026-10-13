import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import PageBanner from '../components/PageBanner'
import Reveal from '../components/Reveal'
import { Arrow, PhoneIcon, WhatsAppIcon } from '../components/Icons'
import { company, offices, searchOptions } from '../data/site'
import { useProperties } from '../context/PropertyContext'
import usePageMeta from '../hooks/usePageMeta'

export default function Contact() {
  usePageMeta(
    'Contact Us | Real Estate Square - Gurugram, Delhi & Jaipur Offices',
    'Contact Real Estate Square for prime residential, luxury builder floors, and commercial property advisory across Gurugram, Delhi NCR and Jaipur.'
  )

  const [params] = useSearchParams()
  const { notify } = useProperties()

  const [f, setF] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    need: params.get('need') || searchOptions.need[0],
    type: params.get('type') || searchOptions.type[0],
    location: params.get('location') || searchOptions.location[0],
    budget: params.get('budget') || '₹3 - 5 Cr',
  })

  const [submitting, setSubmitting] = useState(false)
  const [activeFaq, setActiveFaq] = useState(null)

  const set = (k) => (e) => setF((s) => ({ ...s, [k]: e.target.value }))
  const setDirect = (k, v) => setF((s) => ({ ...s, [k]: v }))

  const submit = async (e) => {
    e.preventDefault()
    if (!f.name?.trim() || !f.phone?.trim()) {
      notify('Please provide your Name and Phone Number.')
      return
    }

    setSubmitting(true)
    const payload = {
      name: f.name.trim(),
      phone: f.phone.trim(),
      email: f.email?.trim() || '',
      need: f.need,
      type: f.type,
      location: f.location,
      budget: f.budget,
      message: f.message?.trim() || '',
      source: 'Contact Page Web Form',
    }

    try {
      await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
    } catch (err) {
      console.warn('API sync warning:', err)
    }

    // Backup persistence in localStorage
    try {
      const stored = JSON.parse(localStorage.getItem('res_inquiries') || '[]')
      stored.unshift({
        id: `inq-${Date.now()}`,
        ...payload,
        createdAt: new Date().toISOString(),
      })
      localStorage.setItem('res_inquiries', JSON.stringify(stored))
    } catch {
      // ignore
    }

    setSubmitting(false)
    notify('Thank you! Your enquiry has been successfully submitted. Our senior advisor will contact you shortly.')

    // Reset Form
    setF({
      name: '',
      phone: '',
      email: '',
      message: '',
      need: searchOptions.need[0],
      type: searchOptions.type[0],
      location: searchOptions.location[0],
      budget: '₹3 - 5 Cr',
    })
  }

  const budgetOptions = [
    'Under ₹1.5 Cr',
    '₹1.5 - 3 Cr',
    '₹3 - 5 Cr',
    '₹5 - 10 Cr',
    '₹10 - 25 Cr',
    '₹25 Cr+',
  ]

  const faqs = [
    {
      q: 'How does Real Estate Square verify property ownership and title authenticity?',
      a: 'Every property represented in our portfolio undergoes exhaustive due diligence: registry deed examination, municipal mutation scrutiny, bank non-encumbrance status, and physical land boundary verification before any prospective buyer is presented with details.',
    },
    {
      q: 'Can I arrange confidential site inspections on weekends or outside standard hours?',
      a: 'Yes. Our senior portfolio managers organize private, chauffeured property previews 7 days a week, including discreet early morning or evening walk-throughs aligned with your privacy requirements.',
    },
    {
      q: 'Do you manage turnkey renovations or new builder floor construction?',
      a: 'Yes. In addition to transactional advisory, we possess deep on-ground engineering capability for turnkey builder floor development, architectural redesign, and corporate developer collaborations across DLF Phase 1-5 and prime Gurugram sectors.',
    },
    {
      q: 'Are there any fees or charges for initial consultation and market appraisals?',
      a: 'Initial investment consultations, portfolio analysis, and site visits with our advisory principals are completely complimentary. We discuss transparent terms only when a prospective transaction progresses to formal documentation.',
    },
  ]

  return (
    <>
      <PageBanner
        title="Contact Real Estate Square"
        image="bg/contact_banner.jpg"
        alt="Contact Real Estate Square luxury property advisory"
      />

      {/* 1. Quick Communication Channels Strip */}
      <section className="border-b border-ink/10 bg-white py-8 sm:py-10">
        <div className="wrap">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {/* Phone Advisory */}
            <div className="flex flex-col justify-between rounded-xl border border-ink/10 bg-[#faf8f4] p-5 shadow-sm transition hover:border-bronze hover:shadow-md">
              <div>
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-bronze/15 text-bronze-d">
                  <PhoneIcon className="h-5 w-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-ink">Senior Advisory Desk</h3>
                <p className="mt-1 text-xs text-stone">Direct line to Mr. Honey Taneja &amp; team</p>
              </div>
              <div className="mt-4 pt-3 border-t border-ink/5">
                <a
                  href={`tel:${company.phones[0].tel}`}
                  className="block text-sm font-bold text-ink hover:text-bronze transition-colors"
                >
                  {company.phones[0].label}
                </a>
                <a
                  href={`tel:${company.phones[1].tel}`}
                  className="block text-xs text-stone hover:text-bronze transition-colors mt-0.5"
                >
                  {company.phones[1].label}
                </a>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex flex-col justify-between rounded-xl border border-emerald-200 bg-emerald-50/40 p-5 shadow-sm transition hover:border-emerald-400 hover:shadow-md">
              <div>
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-600 text-white">
                  <WhatsAppIcon className="h-5 w-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-ink">Priority WhatsApp</h3>
                <p className="mt-1 text-xs text-stone">Instant brochure &amp; pricing dispatch</p>
              </div>
              <div className="mt-4 pt-3 border-t border-emerald-100">
                <a
                  href={`https://api.whatsapp.com/send?phone=${company.whatsapp}&text=${encodeURIComponent(
                    'Hello Real Estate Square, I would like to enquire about premium properties in Gurugram / Delhi NCR.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-800 hover:text-emerald-950"
                >
                  Chat In 1-Click <Arrow className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col justify-between rounded-xl border border-ink/10 bg-[#faf8f4] p-5 shadow-sm transition hover:border-bronze hover:shadow-md">
              <div>
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-bronze/15 text-bronze-d">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-serif text-lg font-bold text-ink">Official Correspondence</h3>
                <p className="mt-1 text-xs text-stone">Formal investor briefs &amp; title mandates</p>
              </div>
              <div className="mt-4 pt-3 border-t border-ink/5">
                <a
                  href={`mailto:${company.email}`}
                  className="block text-sm font-bold text-ink hover:text-bronze transition-colors truncate"
                >
                  {company.email}
                </a>
              </div>
            </div>

            {/* Office Hours */}
            <div className="flex flex-col justify-between rounded-xl border border-ink/10 bg-[#faf8f4] p-5 shadow-sm transition hover:border-bronze hover:shadow-md">
              <div>
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-bronze/15 text-bronze-d">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" strokeWidth="1.8" />
                    <path strokeLinecap="round" strokeWidth="1.8" d="M12 6v6l4 2" />
                  </svg>
                </div>
                <h3 className="font-serif text-lg font-bold text-ink">Consultation Hours</h3>
                <p className="mt-1 text-xs text-stone">Open 7 days a week for visits</p>
              </div>
              <div className="mt-4 pt-3 border-t border-ink/5">
                <span className="block text-xs font-bold text-ink">Mon – Sun: 9:30 AM – 8:00 PM</span>
                <span className="text-[11px] text-stone">Private off-hour slots upon request</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Interactive VIP Property Consultation Form */}
      <section id="enquiry" className="section scroll-mt-24 bg-sand">
        <div className="wrap grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Left Column: Context & Assurances */}
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-bronze/40 bg-white px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-bronze-d mb-3 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-bronze" />
              <span>Direct Principal Consultation</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-ink leading-tight mb-4">
              Tell Us What You Are Looking For
            </h2>
            <p className="text-sm sm:text-base text-stone leading-relaxed mb-6">
              Whether you are acquiring a luxury builder floor in DLF Phase 1, securing high-yield pre-rented commercial space, or seeking an off-market valuation for your ancestral property, our directors provide honest, data-backed guidance.
            </p>

            <div className="space-y-4 rounded-xl border border-ink/10 bg-white/80 p-6 backdrop-blur-sm shadow-sm mb-8">
              <div className="flex items-start gap-3.5">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-bronze/20 text-bronze-d text-xs font-bold">✓</span>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wide text-ink">100% Legal Title Integrity</h3>
                  <p className="text-xs text-stone mt-0.5">Dispute-free registries, clean municipal mutations &amp; zero hidden hypothecations.</p>
                </div>
              </div>
              <div className="flex items-start gap-3.5">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-bronze/20 text-bronze-d text-xs font-bold">✓</span>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wide text-ink">Transparent Direct Pricing</h3>
                  <p className="text-xs text-stone mt-0.5">No artificial markups or unverified intermediary quotes.</p>
                </div>
              </div>
              <div className="flex items-start gap-3.5">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-bronze/20 text-bronze-d text-xs font-bold">✓</span>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wide text-ink">Strict Client Confidentiality</h3>
                  <p className="text-xs text-stone mt-0.5">Your contact details are never shared with unsolicited telemarketing brokers.</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-ink p-6 text-white shadow-lg">
              <div className="flex items-center gap-3 mb-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-xs font-bold uppercase tracking-widest text-bronze-l">Need Urgent Assistance?</span>
              </div>
              <p className="text-xs text-white/80 leading-relaxed mb-4">
                Call our senior helpline immediately for off-market inventory or time-sensitive registration guidance.
              </p>
              <div className="flex flex-wrap gap-2.5">
                <a
                  href={`tel:${company.phones[0].tel}`}
                  className="rounded-lg bg-bronze px-4 py-2 text-xs font-bold text-white hover:bg-bronze-d transition-colors"
                >
                  Call {company.phones[0].label}
                </a>
                <a
                  href={`https://api.whatsapp.com/send?phone=${company.whatsapp}&text=${encodeURIComponent('Hello Mr. Honey Taneja, I need immediate advisory regarding a property in Gurugram.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-white/10 px-4 py-2 text-xs font-bold text-white hover:bg-white/20 transition-colors border border-white/20"
                >
                  Direct WhatsApp
                </a>
              </div>
            </div>
          </Reveal>

          {/* Right Column: Tailored Luxury Form */}
          <Reveal
            as="form"
            onSubmit={submit}
            className="rounded-2xl border border-bronze/30 bg-white p-6 sm:p-9 shadow-xl"
          >
            <div className="mb-6 border-b border-ink/10 pb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-bronze-d">Advisory Intake Form</span>
              <h3 className="font-serif text-2xl font-bold text-ink">Specify Your Property Criteria</h3>
            </div>

            {/* Requirement Pills (Looking To) */}
            <div className="mb-5">
              <label className="block text-xs font-bold uppercase tracking-wider text-ink mb-2">
                I Am Looking To:
              </label>
              <div className="flex flex-wrap gap-2">
                {searchOptions.need.map((n) => {
                  const active = f.need === n
                  return (
                    <button
                      key={n}
                      type="button"
                      onClick={() => setDirect('need', n)}
                      className={`rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-all ${
                        active
                          ? 'bg-ink text-white shadow-sm ring-2 ring-bronze'
                          : 'bg-[#faf8f4] text-stone hover:bg-sand/70 hover:text-ink border border-ink/10'
                      }`}
                    >
                      {n}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Grid of Contact Inputs */}
            <div className="grid gap-4 sm:grid-cols-2 mb-5">
              <div>
                <label htmlFor="f-name" className="block text-xs font-bold text-ink mb-1.5">
                  Full Name <span className="text-amber-700">*</span>
                </label>
                <input
                  id="f-name"
                  required
                  placeholder="e.g. Vikram Malhotra"
                  autoComplete="name"
                  value={f.name}
                  onChange={set('name')}
                  className="w-full rounded-lg border border-ink/20 bg-[#faf8f4] px-3.5 py-2.5 text-sm text-ink transition focus:border-bronze focus:bg-white focus:outline-none focus:ring-2 focus:ring-bronze/20"
                />
              </div>

              <div>
                <label htmlFor="f-phone" className="block text-xs font-bold text-ink mb-1.5">
                  Phone Number <span className="text-amber-700">*</span>
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-xs font-bold text-stone">
                    +91
                  </span>
                  <input
                    id="f-phone"
                    type="tel"
                    required
                    placeholder="98100 XXXXX"
                    autoComplete="tel"
                    value={f.phone}
                    onChange={set('phone')}
                    className="w-full rounded-lg border border-ink/20 bg-[#faf8f4] pl-11 pr-3.5 py-2.5 text-sm text-ink transition focus:border-bronze focus:bg-white focus:outline-none focus:ring-2 focus:ring-bronze/20"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="f-email" className="block text-xs font-bold text-ink mb-1.5">
                  Email Address
                </label>
                <input
                  id="f-email"
                  type="email"
                  placeholder="name@company.com"
                  autoComplete="email"
                  value={f.email}
                  onChange={set('email')}
                  className="w-full rounded-lg border border-ink/20 bg-[#faf8f4] px-3.5 py-2.5 text-sm text-ink transition focus:border-bronze focus:bg-white focus:outline-none focus:ring-2 focus:ring-bronze/20"
                />
              </div>

              <div>
                <label htmlFor="f-location" className="block text-xs font-bold text-ink mb-1.5">
                  Preferred Location
                </label>
                <select
                  id="f-location"
                  value={f.location}
                  onChange={set('location')}
                  className="w-full rounded-lg border border-ink/20 bg-[#faf8f4] px-3 py-2.5 text-sm text-ink transition focus:border-bronze focus:bg-white focus:outline-none focus:ring-2 focus:ring-bronze/20"
                >
                  {[...new Set([f.location, ...searchOptions.location])].map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="f-type" className="block text-xs font-bold text-ink mb-1.5">
                  Property Category
                </label>
                <select
                  id="f-type"
                  value={f.type}
                  onChange={set('type')}
                  className="w-full rounded-lg border border-ink/20 bg-[#faf8f4] px-3 py-2.5 text-sm text-ink transition focus:border-bronze focus:bg-white focus:outline-none focus:ring-2 focus:ring-bronze/20"
                >
                  {[...new Set([f.type, ...searchOptions.type])].map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Budget Chips */}
            <div className="mb-5">
              <label className="block text-xs font-bold uppercase tracking-wider text-ink mb-2">
                Investment Budget Range:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {budgetOptions.map((b) => {
                  const active = f.budget === b
                  return (
                    <button
                      key={b}
                      type="button"
                      onClick={() => setDirect('budget', b)}
                      className={`rounded-lg py-2 px-2 text-center text-xs font-semibold transition-all ${
                        active
                          ? 'border-2 border-bronze bg-sand/60 text-bronze-d font-bold shadow-xs'
                          : 'border border-ink/10 bg-[#faf8f4] text-stone hover:bg-sand/30'
                      }`}
                    >
                      {b}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Message */}
            <div className="mb-6">
              <label htmlFor="f-message" className="block text-xs font-bold text-ink mb-1.5">
                Specific Notes or Landmark Preferences
              </label>
              <textarea
                id="f-message"
                rows={3}
                placeholder="e.g. Looking for a 500 sq yd 4 BHK ground floor with private lawn in DLF Phase 1 or Golf Course Road."
                value={f.message}
                onChange={set('message')}
                className="w-full rounded-lg border border-ink/20 bg-[#faf8f4] px-3.5 py-2.5 text-sm text-ink transition focus:border-bronze focus:bg-white focus:outline-none focus:ring-2 focus:ring-bronze/20"
              />
            </div>

            {/* Submit Action Button - Only single Submit button as requested */}
            <div className="mt-2">
              <button
                type="submit"
                disabled={submitting}
                className="btn w-full !py-4 !text-xs sm:!text-sm !bg-bronze hover:!bg-bronze-d !border-bronze justify-center shadow-lg cursor-pointer font-bold uppercase tracking-widest text-white disabled:opacity-60 transition-all hover:shadow-xl"
              >
                {submitting ? 'Submitting Details...' : 'Submit Enquiry'}
              </button>
            </div>

            <p className="mt-4 text-center text-[11px] text-stone">
              🔒 Your details are securely recorded in our database and protected by strict client confidentiality.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 3. Comprehensive Corporate Offices Directory */}
      <section className="section bg-white">
        <div className="wrap">
          <Reveal className="mb-12 text-center max-w-2xl mx-auto">
            <span className="kicker">Regional Presence</span>
            <h2 className="h2 !mb-3 text-ink">Our Executive Offices</h2>
            <p className="text-stone text-xs sm:text-sm leading-relaxed">
              Drop by for coffee and confidential discussions at our fully appointed offices across Gurugram, Delhi, and Jaipur.
            </p>
          </Reveal>

          <div className="grid gap-8 lg:grid-cols-3">
            {offices.map((o, n) => (
              <Reveal
                as="article"
                key={o.label}
                delay={n * 100}
                className="flex flex-col overflow-hidden rounded-2xl border border-ink/10 bg-[#faf8f4] shadow-md transition-all duration-300 hover:border-bronze hover:shadow-xl"
              >
                {/* Live Embedded Map with subtle overlay */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-sand border-b border-ink/10">
                  <iframe
                    src={o.map}
                    title={`Map - ${o.label}`}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                    className="h-full w-full border-0 grayscale-[0.25] transition-all duration-700 hover:grayscale-0"
                  />
                  <span className="absolute top-3 left-3 rounded bg-ink/80 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-bronze-l backdrop-blur-xs">
                    {o.label}
                  </span>
                </div>

                {/* Office Info Details */}
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <h3 className="font-serif text-2xl font-bold text-ink mb-2">{o.name}</h3>
                  <address className="mb-5 text-xs sm:text-sm text-stone leading-relaxed not-italic">
                    {o.address.map((l) => (
                      <span key={l} className="block">
                        {l}
                      </span>
                    ))}
                  </address>

                  <div className="mb-6 space-y-2 border-t border-b border-ink/10 py-4 text-xs">
                    {o.details.map(([k, vals]) => (
                      <div key={k} className="flex items-baseline justify-between gap-2">
                        <span className="font-bold text-ink uppercase tracking-wider text-[11px]">{k}:</span>
                        <div className="text-right">
                          {vals.map(([t, href], i) => (
                            <span key={t}>
                              {i > 0 && <span className="text-stone/40"> | </span>}
                              <a
                                href={href}
                                className="font-semibold text-stone hover:text-bronze-d hover:underline"
                              >
                                {t}
                              </a>
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto grid grid-cols-3 gap-2">
                    <a
                      href={o.call}
                      className="rounded-lg bg-bronze py-2.5 text-center text-xs font-bold text-white transition hover:bg-bronze-d shadow-xs"
                    >
                      Call
                    </a>
                    <a
                      href={o.mail}
                      className="rounded-lg bg-ink py-2.5 text-center text-xs font-bold text-white transition hover:bg-black shadow-xs"
                    >
                      Email
                    </a>
                    <a
                      href={o.directions}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg border border-ink/20 bg-white py-2.5 text-center text-xs font-bold text-ink transition hover:border-bronze hover:text-bronze shadow-xs"
                    >
                      Directions
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Client Advisory FAQ Accordion */}
      <section className="section bg-sand border-t border-ink/10">
        <div className="wrap max-w-4xl mx-auto">
          <Reveal className="mb-10 text-center">
            <span className="kicker">Got Questions?</span>
            <h2 className="h2 !mb-2 text-ink">Frequently Asked Questions</h2>
            <p className="text-stone text-xs sm:text-sm">
              Clear answers to the most common queries our clients have when embarking on high-value real estate engagements.
            </p>
          </Reveal>

          <div className="space-y-3.5">
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index
              return (
                <Reveal
                  key={faq.q}
                  className="rounded-xl border border-ink/10 bg-white overflow-hidden shadow-xs transition hover:border-bronze/50"
                >
                  <button
                    type="button"
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    className="flex w-full items-center justify-between p-5 text-left transition hover:bg-[#faf8f4] cursor-pointer"
                  >
                    <span className="font-serif text-base sm:text-lg font-bold text-ink pr-4">
                      {faq.q}
                    </span>
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-ink/15 text-sm transition-transform duration-300 ${
                        isOpen ? 'rotate-180 bg-bronze text-white border-bronze' : 'text-stone'
                      }`}
                    >
                      ↓
                    </span>
                  </button>
                  {isOpen && (
                    <div className="border-t border-ink/10 bg-[#faf8f4] px-5 py-4 text-xs sm:text-sm text-stone leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
