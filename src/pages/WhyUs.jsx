import { Link } from 'react-router-dom'
import CtaBand from '../components/CtaBand'
import { Arrow, FeatureIcon } from '../components/Icons'
import PageBanner from '../components/PageBanner'
import Reveal from '../components/Reveal'
import { company, img, whyUs } from '../data/site'
import usePageMeta from '../hooks/usePageMeta'

export default function WhyUs() {
  usePageMeta(
    'Why Choose Real Estate Square | Trusted Property Advisors Gurugram',
    company.description
  )

  const PILLAR_IMAGES = [
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85',
    'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=85',
  ]

  return (
    <>
      <PageBanner
        title="Why Choose Real Estate Square?"
        image="bg/why_us_banner.jpg"
        alt="Why choose Real Estate Square advisory firm"
      />

      {/* 1. Header Overview & Value Proposition */}
      <section className="section bg-white !pb-14">
        <div className="wrap text-center max-w-3xl mx-auto">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-bronze/40 bg-sand/60 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-bronze-d">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Unrivaled Market Authority &amp; Zero Conflict</span>
          </div>
          <h1 className="h2 !mb-4 text-ink">
            Research, Investment Guidance &amp; Complete Turnkey Management
          </h1>
          <p className="text-stone text-sm sm:text-base leading-relaxed">
            Unlike conventional brokers who focus on closing quick sales, <strong className="text-ink">Real Estate Square</strong> functions as your long-term real estate fiduciary. We protect your wealth, verify historical titles, and identify prime growth corridors before they become mainstream.
          </p>
        </div>
      </section>

      {/* 2. Advantage Comparison (Ordinary Brokers vs Real Estate Square) */}
      <section className="pb-16 bg-white">
        <div className="wrap">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-ink/10 bg-[#faf8f4] p-7 shadow-sm transition hover:border-bronze hover:shadow-md">
              <span className="text-3xl mb-3 block">⚖️</span>
              <h3 className="font-serif text-xl font-bold text-ink mb-2">100% Legal Due Diligence</h3>
              <p className="text-xs sm:text-sm text-stone leading-relaxed">
                Exhaustive title deed investigations, bank encumbrance checks, and RERA compliance audits before presenting any property.
              </p>
            </div>
            <div className="rounded-2xl border border-ink/10 bg-[#faf8f4] p-7 shadow-sm transition hover:border-bronze hover:shadow-md">
              <span className="text-3xl mb-3 block">🏢</span>
              <h3 className="font-serif text-xl font-bold text-ink mb-2">Off-Market Proprietary Access</h3>
              <p className="text-xs sm:text-sm text-stone leading-relaxed">
                Direct access to off-market inventory, distressed sale opportunities, and private builder allotments across DLF &amp; South Delhi.
              </p>
            </div>
            <div className="rounded-2xl border border-ink/10 bg-[#faf8f4] p-7 shadow-sm transition hover:border-bronze hover:shadow-md">
              <span className="text-3xl mb-3 block">🤝</span>
              <h3 className="font-serif text-xl font-bold text-ink mb-2">Turnkey After-Sales Support</h3>
              <p className="text-xs sm:text-sm text-stone leading-relaxed">
                Our commitment continues long after the agreement. We facilitate utility transfers, bank disbursements, interior collaborations, and tenant leasing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The 5 Strategic Pillars of Excellence - Contained & Screen-Fit */}
      <section className="bg-sand py-12 sm:py-16">
        <div className="wrap space-y-10 sm:space-y-12">
          {whyUs.map((w, n) => (
            <article
              key={w.title}
              className="group grid overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-lg transition-all duration-300 hover:border-bronze hover:shadow-2xl lg:grid-cols-2"
            >
              {/* Visual Column with High-Resolution Photography */}
              <div
                className={`relative min-h-[280px] overflow-hidden sm:min-h-[360px] lg:min-h-[420px] ${
                  n % 2 ? 'lg:order-2' : ''
                }`}
              >
                <img
                  src={PILLAR_IMAGES[n] || img(w.image)}
                  alt={w.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>

              {/* Content Column */}
              <Reveal
                className={`flex flex-col justify-center p-8 sm:p-12 lg:p-16 ${
                  n % 2 ? 'bg-[#faf8f4]' : 'bg-white'
                }`}
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl border border-bronze bg-sand/40 text-bronze-d shadow-sm group-hover:bg-bronze group-hover:text-white transition-colors">
                  <FeatureIcon name={w.icon} className="h-7 w-7" />
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-[2.1rem] font-bold text-ink mb-4 leading-snug">
                  {w.title}
                </h2>
                <div className="space-y-3.5 text-xs sm:text-sm text-stone leading-relaxed">
                  {w.paras.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
                <div className="mt-7">
                  <Link
                    to="/properties"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-bronze-d hover:text-ink hover:underline"
                  >
                    <span>Explore Matching Properties</span>
                    <Arrow className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </Reveal>
            </article>
          ))}
        </div>
      </section>

      {/* 4. Bottom Trust Guarantee Callout */}
      <section className="bg-[#121110] py-16 text-white border-t border-bronze/30">
        <div className="wrap flex flex-wrap items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-bronze-l block mb-1">
              SPEAK DIRECTLY WITH OUR PRINCIPALS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold leading-tight">
              Ready to Navigate Delhi NCR&apos;s Real Estate with Confidence?
            </h2>
            <p className="text-xs sm:text-sm text-[#ded8cb] mt-2">
              Our directors are available for confidential consultations on residential purchases, luxury builder floor collaborations, or commercial pre-leased yields.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href={`tel:${company.phones[0].tel}`}
              className="rounded-md bg-gradient-to-r from-bronze to-amber-600 px-7 py-3.5 text-xs font-bold uppercase tracking-widest text-white shadow-lg transition hover:brightness-110"
            >
              Call {company.phones[0].label}
            </a>
            <Link
              to="/contact"
              className="rounded-md border border-white/20 bg-white/5 px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-white transition hover:border-white hover:bg-white/10"
            >
              Send Requirement
            </Link>
          </div>
        </div>
      </section>

      <CtaBand showName={false} />
    </>
  )
}
