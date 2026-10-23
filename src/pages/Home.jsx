import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Hero from '../components/Hero'
import { Arrow, WhatsAppIcon } from '../components/Icons'
import Reveal from '../components/Reveal'
import { useProperties } from '../context/PropertyContext'
import { ASSET_CATEGORIES } from '../data/properties'
import usePageMeta from '../hooks/usePageMeta'
import VideoShowcase from '../components/VideoShowcase'

export default function Home() {
  usePageMeta(
    'Real Estate Square | Assuring Best Properties & Complete Property Management',
    'Thorough leader in sale, purchase, leasing, turnkey construction & collaborations in Gurugram & Delhi NCR.'
  )

  const navigate = useNavigate()
  const { setSelectedCategory, notify } = useProperties()

  const [contactForm, setContactForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Sale & Purchase of Properties',
    budget: '₹3 - 5 Cr',
    location: 'DLF Phase 1 & 2, Gurugram',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleContactSubmit = async (e) => {
    e.preventDefault()
    if (!contactForm.name.trim() || !contactForm.phone.trim()) {
      notify('Please provide your Name and Phone Number.')
      return
    }

    setIsSubmitting(true)
    const payload = {
      name: contactForm.name.trim(),
      phone: contactForm.phone.trim(),
      email: contactForm.email.trim(),
      service: contactForm.service,
      budget: contactForm.budget,
      location: contactForm.location,
      message: contactForm.message.trim(),
      source: 'Home Page Direct Advisory Form',
      createdAt: new Date().toISOString(),
    }

    try {
      await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
    } catch {
      // ignore
    }

    try {
      const stored = JSON.parse(localStorage.getItem('res_inquiries') || '[]')
      stored.unshift({ id: `inq-${Date.now()}`, ...payload })
      localStorage.setItem('res_inquiries', JSON.stringify(stored))
    } catch {
      // ignore
    }

    setIsSubmitting(false)
    notify('Thank you! Your enquiry has been received. Our senior advisor will contact you shortly.')
    setContactForm({
      name: '',
      phone: '',
      email: '',
      service: 'Sale & Purchase of Properties',
      budget: '₹3 - 5 Cr',
      location: 'DLF Phase 1 & 2, Gurugram',
      message: '',
    })
  }

  const handleCategoryClick = (catTitle) => {
    setSelectedCategory(catTitle)
    navigate('/properties')
  }

  return (
    <>
      {/* 1. Hero with Live Search & Filter Bar */}
      <Hero />

      {/* Section 2: Distinct Asset Classes Handled with Authority */}
      <section id="asset-classes" className="bg-[#f5f0e6] py-8 md:py-12 scroll-mt-20">
        <div className="wrap">
          <Reveal className="mb-8 border-b border-ink/10 pb-5">
            <span className="kicker">Core Specialization</span>
            <h2 className="h2 !mb-1 text-ink">Distinct Asset Classes Handled with Authority</h2>
            <p className="text-sm text-stone max-w-[60ch]">
              Curated portfolio segments managed with specialized legal and structural advisory.
            </p>
          </Reveal>

          {/* 4 Cards Grid matching screenshot */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
            {ASSET_CATEGORIES.filter((c) => c.id !== 'all').map((cat, idx) => (
              <Reveal key={cat.title} delay={idx * 80} className="h-full flex flex-col">
                <div
                  onClick={() => handleCategoryClick(cat.title)}
                  className="group relative flex flex-col h-full overflow-hidden rounded-xl bg-ink text-white shadow-lg cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div className="relative aspect-[4/5] overflow-hidden shrink-0">
                    <img
                      src={cat.image}
                      alt={cat.title}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/20" />
                    <span className="absolute top-4 left-4 rounded bg-bronze px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-widest text-white shadow">
                      {cat.badge}
                    </span>
                  </div>

                  <div className="p-6 flex flex-1 flex-col justify-between">
                    <div>
                      <h3 className="font-serif text-2xl font-bold leading-snug mb-2 group-hover:text-bronze-l transition-colors">
                        {cat.title}
                      </h3>
                      <p className="text-xs text-[#d3cbbe] line-clamp-2 mb-4 leading-relaxed">
                        {cat.description}
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-bronze-l group-hover:underline mt-auto pt-2">
                      Explore Listings →
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Action: View All Properties button below cards */}
          <Reveal className="mt-8 text-center">
            <Link to="/properties" className="btn btn-dark text-xs">
              View All Properties <Arrow />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Section 3: Thorough Leadership in Sales, Purchase & Turnkey Development */}
      <section className="bg-ivory py-8 md:py-10">
        <div className="wrap grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left: HD Luxury Villa with Dual Floating Badges & Gold Architectural Frame */}
          <Reveal className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl group border border-ink/10">
              <img
                src="https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=900&q=75"
                alt="Luxury Villa by Real Estate Square"
                loading="lazy"
                decoding="async"
                className="w-full aspect-[4/3] object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

              {/* Floating Top Trust Badge */}
              <div className="absolute top-4 right-4 rounded-full border border-white/30 bg-black/65 px-3.5 py-1 text-xs text-white backdrop-blur-md shadow-lg flex items-center gap-2">
                <span className="text-amber-400 font-bold">★</span>
                <span className="font-semibold text-bronze-l text-[11px] uppercase tracking-wider">
                  25+ Years of Trust · Delhi NCR
                </span>
              </div>

              {/* Floating Bottom Verified Card */}
              
            </div>

            {/* Decorative Gold Frame Offset */}
            <span
              className="absolute -z-10 rounded-2xl border-2 border-bronze/40 hidden sm:block shadow-sm"
              style={{ inset: '-16px 16px 16px -16px' }}
            />
          </Reveal>

          {/* Right: Leadership Copy, 3 Feature Pillars, & Action CTA */}
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-bronze/40 bg-sand/60 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-bronze-d mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-bronze" />
              <span>Advisory &amp; Turnkey Development</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.85rem] font-bold text-ink leading-[1.14] mb-4">
              Thorough Leadership in Sales, Purchase &amp; Turnkey Development
            </h2>

            <p className="mb-3.5 text-base sm:text-lg text-ink font-medium leading-relaxed">
              <strong className="text-bronze-d font-bold">Real Estate Square</strong> is an established market leader in sale, purchase, leasing, turnkey construction and corporate collaborations across Gurugram and Delhi NCR.
            </p>

            <p className="mb-6 text-stone text-xs sm:text-sm md:text-base leading-relaxed">
              We provide total property management, comprehensive legal documentation assistance, portfolio restructuring and authoritative valuations. With deep proprietary intelligence on transaction histories, we protect your capital and maximize returns.
            </p>

            {/* 3 Refined Feature Pillars with Gold Linear SVGs */}
            <div className="grid gap-3.5 sm:grid-cols-3">
              {/* Pillar 1 */}
              <div className="group rounded-xl border border-ink/10 bg-white p-4.5 shadow-sm transition-all duration-300 hover:border-bronze hover:shadow-md hover:-translate-y-1">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-bronze/10 text-bronze transition-colors group-hover:bg-bronze group-hover:text-white">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    <line x1="11" y1="8" x2="11" y2="14" />
                    <line x1="8" y1="11" x2="14" y2="11" />
                  </svg>
                </div>
                <h4 className="font-serif text-base font-bold text-ink mb-1 group-hover:text-bronze-d transition-colors">
                  On-Demand Discovery
                </h4>
                <p className="text-[11px] text-stone leading-relaxed">
                  Curated access to off-market inventory &amp; prime corridor listings.
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="group rounded-xl border border-ink/10 bg-white p-4.5 shadow-sm transition-all duration-300 hover:border-bronze hover:shadow-md hover:-translate-y-1">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-bronze/10 text-bronze transition-colors group-hover:bg-bronze group-hover:text-white">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path d="M12 3v18M3 9l9-6 9 6M6 15l-3 4h6l-3-4zM18 15l-3 4h6l-3-4z" />
                  </svg>
                </div>
                <h4 className="font-serif text-base font-bold text-ink mb-1 group-hover:text-bronze-d transition-colors">
                  Due Diligence
                </h4>
                <p className="text-[11px] text-stone leading-relaxed">
                  Complete title check, registry verification &amp; zoning sanctions.
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="group rounded-xl border border-ink/10 bg-white p-4.5 shadow-sm transition-all duration-300 hover:border-bronze hover:shadow-md hover:-translate-y-1">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-bronze/10 text-bronze transition-colors group-hover:bg-bronze group-hover:text-white">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path d="M21 2l-2 2m-2-2l2 2M3 13l7 7 11-11-7-7L3 13z" />
                    <circle cx="7.5" cy="16.5" r="1.5" />
                  </svg>
                </div>
                <h4 className="font-serif text-base font-bold text-ink mb-1 group-hover:text-bronze-d transition-colors">
                  End-to-End Execution
                </h4>
                <p className="text-[11px] text-stone leading-relaxed">
                  Seamless drafting, registration, key handover &amp; fit-out support.
                </p>
              </div>
            </div>

            {/* Bottom Actions & Metrics Strip */}
           
          </Reveal>
        </div>
      </section>

      {/* Section 4: Our Specialized Services */}
      <section id="services" className="bg-white py-8 md:py-12 scroll-mt-20">
        <div className="wrap">
          <Reveal className="mb-7 text-center max-w-2xl mx-auto">
            <span className="kicker">Unmatched Capabilities</span>
            <h2 className="h2 !mb-3 text-ink">Our Specialized Services</h2>
            <p className="text-stone text-sm leading-relaxed">
              Proprietary execution standards backed by over two decades of local market intelligence, verified transactions, and high-trust client relationships.
            </p>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: '🔑',
                title: 'Sale & Purchase of all Properties',
                points: ['Complete documentation & title search', 'Private off-market investor networking', 'Transparent zero-conflict dealings'],
                desc: 'Active involvement in residential apartments, luxury builder floors, plots, and commercial assets across Gurugram & Delhi NCR.',
              },
              {
                icon: '🏢',
                title: 'Renting & Leasing of all Properties',
                points: ['MNC & expat tenant verification', 'Dispute-proof legal lease agreements', 'Seamless property handovers'],
                desc: 'Structured leasing solutions for penthouses, independent houses, commercial retail and corporate headquarters.',
              },
              {
                icon: '📈',
                title: 'Pre-Rented Commercial Properties',
                points: ['Assured 9% to 12% rental yield', 'Blue-chip bank & retail tenants', '100% bank-fundable verified assets'],
                desc: 'Secure cashflow-generating assets with locked-in long leases, high returns, and regular escalation schedules.',
              },
              {
                icon: '🏗️',
                title: 'Construction & Collaboration',
                points: ['Turnkey plot redevelopment', 'Joint development partnerships', 'German/Italian premium finishes'],
                desc: 'Bespoke architectural construction of lavish designer floors and independent homes with transparent milestone tracking.',
              },
            ].map((s, i) => (
              <Reveal
                key={s.title}
                delay={i * 70}
                className="group flex flex-col justify-between rounded-xl border border-ink/10 bg-[#faf8f4] p-7 transition-all duration-300 hover:border-bronze hover:bg-white hover:shadow-xl hover:-translate-y-1"
              >
                <div>
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-lg bg-bronze/10 text-3xl group-hover:bg-bronze group-hover:scale-110 transition-all">
                    {s.icon}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-ink mb-3 leading-snug">
                    {s.title}
                  </h3>
                  <p className="text-xs text-stone mb-4 leading-relaxed">
                    {s.desc}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {s.points.map((pt, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-stone">
                        <span className="text-bronze font-bold">✓</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Cinematic Real Estate Video Tours (Right under Specialized Services) */}
      <VideoShowcase />

      {/* Section 6: Dark Gold Stats Banner ("Years of Excellence In Delhi NCR") */}
      <section className="relative isolate overflow-hidden bg-[#121110] py-12 text-white md:py-16">
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=70')` }}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#121110] via-[#121110]/90 to-[#121110]/70" />

        <div className="wrap">
          <div className="mb-8 max-w-3xl">
            <span className="kicker !text-bronze-l">Legacy of Integrity</span>
            <h2 className="h2 text-white !mb-4">Years of Excellence In Delhi NCR</h2>
            <p className="font-serif text-xl md:text-2xl leading-relaxed text-[#ded8cb]">
              Our core foundation is built on deep proprietary knowledge of local property records, trusted community relationships, and swift conflict-free deal resolution.
            </p>
          </div>

          {/* 4 Big Metrics Grid */}
          <div className="grid grid-cols-2 gap-6 border-t border-white/15 pt-8 sm:grid-cols-4">
            <div>
              <span className="font-serif text-4xl md:text-5xl font-bold text-bronze-l block mb-1">
                ₹500+ Cr
              </span>
              <h4 className="text-sm font-bold uppercase tracking-wider text-white">Transaction Value</h4>
              <p className="text-xs text-white/60 mt-1">Closed successfully across NCR</p>
            </div>
            <div>
              <span className="font-serif text-4xl md:text-5xl font-bold text-bronze-l block mb-1">
                1,500+
              </span>
              <h4 className="text-sm font-bold uppercase tracking-wider text-white">Satisfied Families</h4>
              <p className="text-xs text-white/60 mt-1">Homebuyers &amp; corporate clients</p>
            </div>
            <div>
              <span className="font-serif text-4xl md:text-5xl font-bold text-bronze-l block mb-1">
                25+ Years
              </span>
              <h4 className="text-sm font-bold uppercase tracking-wider text-white">Market Leadership</h4>
              <p className="text-xs text-white/60 mt-1">Continuous presence in Gurugram</p>
            </div>
            <div>
              <span className="font-serif text-4xl md:text-5xl font-bold text-bronze-l block mb-1">
                99.8%
              </span>
              <h4 className="text-sm font-bold uppercase tracking-wider text-white">Title Clearance</h4>
              <p className="text-xs text-white/60 mt-1">Flawless legal due diligence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Direct Office Address & Quick Advisory Contact Form */}
      <section id="contact-advisory" className="bg-[#f8f5ef] py-10 md:py-14 scroll-mt-20 border-t border-ink/5">
        <div className="wrap">
          {/* Section Header */}
          <Reveal className="mb-8 text-center max-w-2xl mx-auto">
            <span className="kicker">Direct Advisory Desk</span>
            <h2 className="h2 !mb-2 text-ink">Connect With Our Senior Partners</h2>
            <p className="text-stone text-xs md:text-sm">
              Personalized consultation for acquisitions, turnkey development, and institutional investments across Gurugram &amp; Delhi NCR.
            </p>
          </Reveal>

          {/* Responsive Layout:
              - Mobile (< lg): Form is Order 1 (Top / First), Address is Order 2 (Down / Second)
              - Laptop (lg:): Address is Order 1 (Left, 5 cols), Form is Order 2 (Right, 7 cols)
          */}
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-10 items-stretch">
            {/* Left side in Laptop / Down in Mobile: Address & Office Details */}
            <div className="order-2 lg:order-1 lg:col-span-5 flex flex-col justify-between rounded-2xl border border-ink/10 bg-white p-6 sm:p-8 shadow-sm">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="h-2 w-2 rounded-full bg-bronze" />
                  <span className="text-[11px] font-bold uppercase tracking-widest text-bronze-d">
                    Registered Headquarters
                  </span>
                </div>

                {/* Gurugram HQ Card */}
                <div className="mb-5 rounded-xl border border-bronze/20 bg-ivory/60 p-4.5">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <span className="text-[10px] font-extrabold uppercase tracking-widest text-bronze-d block">
                        MAIN ADVISORY DESK
                      </span>
                      <h4 className="font-serif text-lg font-bold text-ink">
                        Gurugram Office
                      </h4>
                    </div>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=The+Shopping+Mall+Arjun+Marg+DLF+Phase+1+Gurugram"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 rounded bg-sand/70 px-2 py-1 text-[11px] font-semibold text-ink hover:bg-bronze hover:text-white transition-colors"
                    >
                      <span>Map ↗</span>
                    </a>
                  </div>
                  <p className="text-xs text-stone leading-relaxed">
                    O-107, 1st Floor, Shopping Mall, Arjun Marg, DLF Phase-1, Gurugram, Haryana - 122002 INDIA
                  </p>
                </div>

                {/* Delhi Regional Branch Card */}
                <div className="mb-5 rounded-xl border border-ink/10 bg-sand/30 p-4.5">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <span className="text-[10px] font-extrabold uppercase tracking-widest text-stone block">
                        REGIONAL BRANCH
                      </span>
                      <h4 className="font-serif text-lg font-bold text-ink">
                        Delhi Office (Taneja Associates)
                      </h4>
                    </div>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=B-1/18A+Paschim+Vihar+New+Delhi+110063"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 rounded bg-white px-2 py-1 text-[11px] font-semibold text-ink hover:bg-bronze hover:text-white transition-colors border border-ink/10"
                    >
                      <span>Map ↗</span>
                    </a>
                  </div>
                  <p className="text-xs text-stone leading-relaxed">
                    B-1/18A, Paschim Vihar, New Delhi - 110063 INDIA
                  </p>
                </div>

                {/* Direct Communications */}
                <div className="space-y-3 pt-3 border-t border-ink/10">
                  <div className="flex items-center gap-3 text-xs text-stone">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-bronze/10 text-bronze font-bold text-sm">
                      📞
                    </span>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-stone/80 block">Direct Telephones</span>
                      <div className="flex items-center gap-2 font-semibold text-ink">
                        <a href="tel:+918800006689" className="hover:text-bronze transition-colors">+91-8800006689</a>
                        <span>·</span>
                        <a href="tel:+918800006678" className="hover:text-bronze transition-colors">8800006678</a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-stone">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-bronze/10 text-bronze font-bold text-sm">
                      ✉️
                    </span>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-stone/80 block">Email Advisory</span>
                      <a href="mailto:info@realestatesquare.in" className="font-semibold text-ink hover:text-bronze transition-colors">
                        info@realestatesquare.in
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-stone">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-bronze/10 text-bronze font-bold text-sm">
                      🕒
                    </span>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-stone/80 block">Advisory Hours</span>
                      <span className="font-semibold text-ink">
                        Mon – Sun: 9:30 AM to 7:30 PM
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Instant WhatsApp Action */}
              <a
                href="https://wa.me/918800006689?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20properties%20in%20Delhi%20NCR."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-4 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition hover:bg-[#1ebd59]"
              >
                <WhatsAppIcon className="h-4 w-4" />
                <span>Chat on WhatsApp Directly</span>
              </a>
            </div>

            {/* Right side in Laptop / First in Mobile: Contact Form */}
            <div className="order-1 lg:order-2 lg:col-span-7 rounded-2xl border border-ink/10 bg-white p-6 sm:p-8 shadow-sm">
              <div className="mb-5 border-b border-ink/10 pb-4">
                <span className="kicker !mb-1 text-bronze">Priority Inquiry</span>
                <h3 className="font-serif text-2xl font-bold text-ink">
                  Request Confidential Advisory
                </h3>
                <p className="text-xs text-stone mt-1">
                  Share your requirements below. Our senior principal will personally connect with verified options.
                </p>
              </div>

              <form onSubmit={handleContactSubmit} className="space-y-4">
                {/* Row 1: Name & Phone */}
                <div className="grid gap-3.5 sm:grid-cols-2">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-stone mb-1">
                      Your Name <span className="text-amber-600">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vikram Malhotra"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      className="w-full rounded-md border border-ink/15 bg-ivory/50 px-3.5 py-2.5 text-xs sm:text-sm text-ink placeholder:text-stone/50 focus:border-bronze focus:bg-white focus:outline-none focus:ring-1 focus:ring-bronze"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-stone mb-1">
                      Phone Number <span className="text-amber-600">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={contactForm.phone}
                      onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                      className="w-full rounded-md border border-ink/15 bg-ivory/50 px-3.5 py-2.5 text-xs sm:text-sm text-ink placeholder:text-stone/50 focus:border-bronze focus:bg-white focus:outline-none focus:ring-1 focus:ring-bronze"
                    />
                  </div>
                </div>

                {/* Row 2: Email & Category */}
                <div className="grid gap-3.5 sm:grid-cols-2">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-stone mb-1">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="name@example.com"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      className="w-full rounded-md border border-ink/15 bg-ivory/50 px-3.5 py-2.5 text-xs sm:text-sm text-ink placeholder:text-stone/50 focus:border-bronze focus:bg-white focus:outline-none focus:ring-1 focus:ring-bronze"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-stone mb-1">
                      Asset Category
                    </label>
                    <select
                      value={contactForm.service}
                      onChange={(e) => setContactForm({ ...contactForm, service: e.target.value })}
                      className="w-full rounded-md border border-ink/15 bg-ivory/50 px-3.5 py-2.5 text-xs sm:text-sm text-ink focus:border-bronze focus:bg-white focus:outline-none focus:ring-1 focus:ring-bronze cursor-pointer"
                    >
                      <option value="Sale & Purchase of Properties">Sale &amp; Purchase of Properties</option>
                      <option value="Renting & Leasing">Renting &amp; Leasing</option>
                      <option value="Pre-Rented Commercial">Pre-Rented Commercial (High Yield)</option>
                      <option value="Construction & Collaboration">Construction &amp; Collaboration</option>
                      <option value="Luxury Builder Floor">Luxury Designer Floors</option>
                      <option value="Independent Villa / Bungalow">Independent Villa / Bungalow</option>
                    </select>
                  </div>
                </div>

                {/* Row 3: Budget & Location */}
                <div className="grid gap-3.5 sm:grid-cols-2">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-stone mb-1">
                      Investment Budget
                    </label>
                    <select
                      value={contactForm.budget}
                      onChange={(e) => setContactForm({ ...contactForm, budget: e.target.value })}
                      className="w-full rounded-md border border-ink/15 bg-ivory/50 px-3.5 py-2.5 text-xs sm:text-sm text-ink focus:border-bronze focus:bg-white focus:outline-none focus:ring-1 focus:ring-bronze cursor-pointer"
                    >
                      <option value="Under ₹2 Cr">Under ₹2 Crore</option>
                      <option value="₹2 - 5 Cr">₹2 – ₹5 Crore</option>
                      <option value="₹5 - 10 Cr">₹5 – ₹10 Crore</option>
                      <option value="₹10 - 25 Cr">₹10 – ₹25 Crore</option>
                      <option value="₹25 Cr+">₹25 Crore+</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-stone mb-1">
                      Preferred Location
                    </label>
                    <select
                      value={contactForm.location}
                      onChange={(e) => setContactForm({ ...contactForm, location: e.target.value })}
                      className="w-full rounded-md border border-ink/15 bg-ivory/50 px-3.5 py-2.5 text-xs sm:text-sm text-ink focus:border-bronze focus:bg-white focus:outline-none focus:ring-1 focus:ring-bronze cursor-pointer"
                    >
                      <option value="DLF Phase 1 & 2, Gurugram">DLF Phase 1 &amp; 2, Gurugram</option>
                      <option value="Golf Course Road Corridor">Golf Course Road Corridor</option>
                      <option value="Golf Course Ext & SPR">Golf Course Ext &amp; SPR</option>
                      <option value="Cyber City Commercial Corridor">Cyber City Commercial Corridor</option>
                      <option value="South Delhi / Vasant Vihar">South Delhi / Vasant Vihar</option>
                      <option value="Sohna Road Integrated Townships">Sohna Road Integrated Townships</option>
                    </select>
                  </div>
                </div>

                {/* Row 4: Message */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-stone mb-1">
                    Requirement Notes (Optional)
                  </label>
                  <textarea
                    rows="3"
                    placeholder="Tell us about specific plot size, configuration, preferred sector, or immediate possession timeline..."
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    className="w-full rounded-md border border-ink/15 bg-ivory/50 px-3.5 py-2.5 text-xs sm:text-sm text-ink placeholder:text-stone/50 focus:border-bronze focus:bg-white focus:outline-none focus:ring-1 focus:ring-bronze resize-none"
                  />
                </div>

                {/* Row 5: Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-ink px-6 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-md transition-all hover:bg-bronze hover:shadow-lg disabled:opacity-60 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Submitting Enquiry...</span>
                    ) : (
                      <>
                        <span>Submit Confidential Enquiry</span>
                        <Arrow className="h-4 w-4" />
                      </>
                    )}
                  </button>
                  <p className="mt-2 text-center text-[11px] text-stone">
                    🔒 100% Privacy Assured · No Unsolicited Spam · Response within 30 Mins
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

     
    </>
  )
}
