import { useState } from 'react'
import { Link } from 'react-router-dom'
import CtaBand from '../components/CtaBand'
import { Arrow, WhatsAppIcon, CalendarBookIcon } from '../components/Icons'
import PageBanner from '../components/PageBanner'
import Reveal from '../components/Reveal'
import { useProperties } from '../context/PropertyContext'
import { ADANI_PLOTS_INFO } from '../data/properties'
import { company } from '../data/site'
import usePageMeta from '../hooks/usePageMeta'

export default function Properties() {
  usePageMeta(
    'Adani Plots Sector 63 | Golf Course Extension Road Gurugram | Real Estate Square',
    'Exclusive residential plots by Adani Realty in Sector 63 Gurugram. 170, 253 and 267 Sq. Yd. plots adjacent to DLF The Arbour. S+4 floors approved, 100% power backup, ready to construct.'
  )

  const { properties, openDetails, openBooking } = useProperties()
  const [selectedSizeFilter, setSelectedSizeFilter] = useState('All')
  const [viewMode, setViewMode] = useState('grid')
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0)

  const adaniGallery = [
    { src: '/images/adani/aerial.jpg', title: 'Aerial Drone View of Plotted Enclave' },
    { src: '/images/adani/entrance.jpg', title: 'Grand 24x7 Security Entrance Gatehouse' },
    { src: '/images/adani/stilt_4.jpg', title: 'S+4 Ready-to-Construct Avenue & Green Parks' },
  ]

  const filteredPlots = properties.filter((p) => {
    if (selectedSizeFilter === 'All') return true
    return p.area.includes(selectedSizeFilter)
  })

  return (
    <>
      {/* 1. Page Banner */}
      <PageBanner
        title="Adani Plots · Sector 63"
        image="slideshow/slide1.jpg"
        alt="Adani Plots Sector 63 Golf Course Extension Road Gurugram"
      />

      <section className="section bg-[#f5f1ea] pt-8 pb-20 md:pb-28">
        <div className="wrap">
          {/* Top Headline & Verified Trust Badge */}
          <div className="mb-8 border-b border-ink/10 pb-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-bronze/40 bg-sand/60 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-bronze-d">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Verified Plotted Enclave · Golf Extension Road</span>
                </div>
                <h1 className="h2 !mb-2 text-ink">
                  ADANI PLOTS — Sector 63, Golf Extension Road
                </h1>
                <p className="max-w-[76ch] text-stone text-xs sm:text-sm md:text-base leading-relaxed">
                  Prime freehold residential plots adjacent to <strong className="text-ink font-semibold">DLF The Arbour</strong>. Ready to construct with sanctioned <strong className="text-ink font-semibold">Stilt + 4 Floors (S+4)</strong> map approvals, 100% power backup, and gated community security.
                </p>
              </div>

              {/* RERA & Connectivity Badge */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-lg border border-bronze/30 bg-white px-3.5 py-2 text-xs font-bold text-ink shadow-sm">
                  🏛️ {ADANI_PLOTS_INFO.rera}
                </span>
                <span className="rounded-lg bg-emerald-700 px-3.5 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-sm">
                  Ready to Construct
                </span>
              </div>
            </div>
          </div>

          {/* 2. Interactive Media & Quick Overview Grid */}
          <div className="mb-12 grid gap-8 lg:grid-cols-12 items-stretch">
            {/* Left: Interactive High-Resolution Showcase (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-between overflow-hidden rounded-2xl border border-ink/10 bg-white p-4 sm:p-5 shadow-lg">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-ink">
                <img
                  src={adaniGallery[activeGalleryIndex].src}
                  alt={adaniGallery[activeGalleryIndex].title}
                  decoding="async"
                  className="h-full w-full object-cover transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20" />
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <div>
                    <span className="rounded bg-bronze px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow">
                      Golf Course Extension Rd, Gurugram
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mt-1 drop-shadow">
                      {adaniGallery[activeGalleryIndex].title}
                    </h3>
                  </div>
                  <span className="text-xs text-amber-200 font-semibold bg-black/60 px-2.5 py-1 rounded backdrop-blur-sm">
                    Adjacent to DLF The Arbour
                  </span>
                </div>
              </div>

              {/* Gallery Thumbnails */}
              <div className="mt-4 grid grid-cols-3 gap-3">
                {adaniGallery.map((g, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveGalleryIndex(idx)}
                    className={`relative overflow-hidden rounded-lg border-2 transition cursor-pointer aspect-[16/10] ${
                      activeGalleryIndex === idx
                        ? 'border-bronze ring-2 ring-bronze/40 scale-[1.02]'
                        : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={g.src} alt={g.title} loading="lazy" decoding="async" className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Key Project Details Card & Rates Matrix (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl border border-ink/10 bg-white p-4 sm:p-6 md:p-7 shadow-lg">
              <div>
                <div className="flex items-center justify-between border-b border-ink/10 pb-4 mb-4">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-widest text-bronze block">
                      Project Specification
                    </span>
                    <h2 className="font-serif text-2xl font-bold text-ink">
                      Project Overview
                    </h2>
                  </div>
                  <span className="rounded bg-sand px-3 py-1 text-xs font-bold text-bronze-d">
                    Sector 63
                  </span>
                </div>

                {/* Details Table */}
                <div className="overflow-hidden rounded-xl border border-ink/10 text-xs">
                  <div className="grid grid-cols-2 divide-x divide-ink/10 border-b border-ink/10 bg-ivory/80 p-3 font-semibold text-stone">
                    <span>DETAIL</span>
                    <span className="pl-3">INFORMATION</span>
                  </div>
                  <div className="divide-y divide-ink/10">
                    <div className="grid grid-cols-2 divide-x divide-ink/10 p-3">
                      <span className="font-bold text-ink">Location</span>
                      <span className="pl-3 text-stone">{ADANI_PLOTS_INFO.location}</span>
                    </div>
                    <div className="grid grid-cols-2 divide-x divide-ink/10 p-3 bg-ivory/30">
                      <span className="font-bold text-ink">Position</span>
                      <span className="pl-3 text-emerald-800 font-semibold">{ADANI_PLOTS_INFO.position}</span>
                    </div>
                    <div className="grid grid-cols-2 divide-x divide-ink/10 p-3">
                      <span className="font-bold text-ink">Plot Type</span>
                      <span className="pl-3 text-stone">{ADANI_PLOTS_INFO.plotType}</span>
                    </div>
                    <div className="grid grid-cols-2 divide-x divide-ink/10 p-3 bg-ivory/30">
                      <span className="font-bold text-ink">Plot Sizes</span>
                      <span className="pl-3 text-ink font-semibold">{ADANI_PLOTS_INFO.plotSizes}</span>
                    </div>
                    <div className="grid grid-cols-2 divide-x divide-ink/10 p-3">
                      <span className="font-bold text-ink">Construction</span>
                      <span className="pl-3 text-stone">{ADANI_PLOTS_INFO.construction}</span>
                    </div>
                    <div className="grid grid-cols-2 divide-x divide-ink/10 p-3 bg-ivory/30">
                      <span className="font-bold text-ink">Floors Approval</span>
                      <span className="pl-3 text-bronze-d font-bold">{ADANI_PLOTS_INFO.floors}</span>
                    </div>
                    <div className="grid grid-cols-2 divide-x divide-ink/10 p-3">
                      <span className="font-bold text-ink">Community</span>
                      <span className="pl-3 text-stone">{ADANI_PLOTS_INFO.community}</span>
                    </div>
                    <div className="grid grid-cols-2 divide-x divide-ink/10 p-3 bg-ivory/30">
                      <span className="font-bold text-ink">Power Infrastructure</span>
                      <span className="pl-3 text-stone">{ADANI_PLOTS_INFO.power}</span>
                    </div>
                    <div className="grid grid-cols-2 divide-x divide-ink/10 p-3">
                      <span className="font-bold text-ink">Payment Term</span>
                      <span className="pl-3 text-ink font-bold">{ADANI_PLOTS_INFO.paymentTerm}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick WhatsApp & Call Action */}
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://wa.me/918800006689?text=Hello%2C%20I%20am%20interested%20in%20Adani%20Plots%20Sector%2063%2C%20Gurugram.%20Please%20share%20allotment%20details."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-4 py-3 text-xs font-bold uppercase tracking-wider text-white shadow transition hover:bg-[#1ebd59]"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  <span>Inquire on WhatsApp</span>
                </a>
                <button
                  type="button"
                  onClick={() => openBooking(properties[0])}
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-ink px-4 py-3 text-xs font-bold uppercase tracking-wider text-white shadow transition hover:bg-bronze cursor-pointer"
                >
                  <CalendarBookIcon className="h-4 w-4 text-bronze-l" />
                  <span>Book Site Visit</span>
                </button>
              </div>
            </div>
          </div>

          {/* 3. Plot Options & Rates Comparison Table */}
          <div className="mb-12 rounded-2xl border border-bronze/30 bg-white p-6 sm:p-8 shadow-xl">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-ink/10 pb-4">
              <div>
                <span className="kicker !mb-1 text-bronze">Transparent Pricing</span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink">
                  Plot Options &amp; Rates
                </h2>
                <p className="text-xs sm:text-sm text-stone mt-1">
                  Transparent, verified rate schedule on Golf Course Extension Road, Sector 63, Gurugram.
                </p>
              </div>
              <span className="rounded-full bg-emerald-100 border border-emerald-300 px-3 py-1 text-xs font-bold text-emerald-800">
                Payment Term: 60–90 Days
              </span>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-bronze/40 bg-sand/40 text-xs uppercase tracking-wider text-ink font-bold">
                    <th className="py-3.5 px-4">Plot Size</th>
                    <th className="py-3.5 px-4">Approx Area (Sq.Ft)</th>
                    <th className="py-3.5 px-4">Rate per Sq. Yd.</th>
                    <th className="py-3.5 px-4">Total Value</th>
                    <th className="py-3.5 px-4">Sanctioned Floors</th>
                    <th className="py-3.5 px-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-ink/10">
                  {ADANI_PLOTS_INFO.rates.map((row, idx) => (
                    <tr key={idx} className="hover:bg-ivory/60 transition-colors">
                      <td className="py-4 px-4 font-serif font-bold text-base text-ink">
                        {row.size}
                      </td>
                      <td className="py-4 px-4 text-stone text-xs font-medium">
                        {row.sqft}
                      </td>
                      <td className="py-4 px-4 font-bold text-bronze-d">
                        {row.rate}
                      </td>
                      <td className="py-4 px-4 font-serif font-bold text-base text-ink">
                        {row.priceDisplay}
                      </td>
                      <td className="py-4 px-4">
                        <span className="rounded bg-emerald-50 text-emerald-800 border border-emerald-200 px-2.5 py-1 text-xs font-semibold">
                          S+4 Floors Approved
                        </span>
                      </td>
                      <td className="py-4 px-4 text-right">
                        <button
                          type="button"
                          onClick={() => openBooking(properties[idx] || properties[0])}
                          className="inline-flex items-center gap-1.5 rounded bg-ink px-3.5 py-2 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-bronze cursor-pointer"
                        >
                          <CalendarBookIcon className="h-3.5 w-3.5 text-bronze-l" />
                          <span>Book Visit</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 4. Filter / Switcher Bar */}
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-ink/10 bg-white p-4 shadow-sm">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-stone mr-2">
                Filter Plot Sizes:
              </span>
              {['All', '170', '253', '267'].map((size) => (
                <button
                  key={size}
                  type="button"
                  onClick={() => setSelectedSizeFilter(size)}
                  className={`rounded-full px-4 py-1.5 text-xs font-bold transition cursor-pointer ${
                    selectedSizeFilter === size
                      ? 'bg-bronze text-white shadow-sm'
                      : 'border border-ink/15 bg-ivory text-ink hover:border-bronze hover:bg-sand'
                  }`}
                >
                  {size === 'All' ? 'All Plot Sizes' : `${size} Sq. Yd.`}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3 text-xs text-stone font-medium">
              <span>Showing</span>
              <span className="font-bold text-ink bg-sand/60 px-2 py-0.5 rounded">
                {filteredPlots.length} Verified Plots
              </span>
            </div>
          </div>

          {/* 5. Plot Inventory Cards Grid */}
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPlots.map((p, idx) => (
              <Reveal
                key={p.id}
                delay={idx * 60}
                className="group flex flex-col overflow-hidden rounded-2xl bg-white border border-ink/10 shadow-[0_12px_32px_-16px_rgba(0,0,0,0.12)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-20px_rgba(0,0,0,0.22)] hover:border-bronze/50"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-sand">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

                  {/* Top Badges */}
                  <div className="absolute top-3 inset-x-3 flex items-center justify-between gap-2">
                    <span className="rounded bg-emerald-800/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm shadow">
                      {p.tag}
                    </span>
                    <span className="rounded bg-black/60 px-2 py-0.5 text-[10px] font-semibold text-white/90 backdrop-blur-sm">
                      S+4 Approved
                    </span>
                  </div>

                  {/* Bottom Rate & Price Tag */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-baseline justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-widest text-white/80 block">
                        Rate: {p.rateDisplay}
                      </span>
                      <span className="font-serif text-2xl font-bold text-white drop-shadow">
                        {p.priceDisplay}
                      </span>
                    </div>
                    <span className="text-xs text-amber-200 font-semibold bg-black/50 px-2.5 py-1 rounded backdrop-blur-sm">
                      {p.plotSizeYards}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-bronze">
                        Residential Plotted Land
                      </span>
                      <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        Ready to Construct
                      </span>
                    </div>

                    <h3 className="font-serif text-xl font-bold leading-snug text-ink mb-2 group-hover:text-bronze-d transition-colors">
                      {p.title}
                    </h3>

                    <p className="flex items-center gap-1.5 text-xs text-stone mb-4">
                      <svg className="h-3.5 w-3.5 text-bronze shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="font-medium text-ink">{p.location}</span>
                    </p>

                    {/* Spec Chips */}
                    <div className="mb-4 grid grid-cols-2 gap-2 text-xs">
                      <div className="rounded-lg bg-sand/40 border border-ink/5 p-2.5">
                        <span className="block text-[10px] uppercase font-bold text-stone">Position</span>
                        <span className="font-semibold text-ink text-[11px] truncate block">Adjacent DLF Arbour</span>
                      </div>
                      <div className="rounded-lg bg-sand/40 border border-ink/5 p-2.5">
                        <span className="block text-[10px] uppercase font-bold text-stone">Payment Term</span>
                        <span className="font-semibold text-ink text-[11px] block">60–90 Days</span>
                      </div>
                      <div className="rounded-lg bg-sand/40 border border-ink/5 p-2.5">
                        <span className="block text-[10px] uppercase font-bold text-stone">Sanctioned</span>
                        <span className="font-semibold text-bronze-d text-[11px] block">S+4 Floors Map</span>
                      </div>
                      <div className="rounded-lg bg-sand/40 border border-ink/5 p-2.5">
                        <span className="block text-[10px] uppercase font-bold text-stone">Power Backup</span>
                        <span className="font-semibold text-emerald-700 text-[11px] block">100% Backed</span>
                      </div>
                    </div>

                    <p className="text-xs text-stone line-clamp-2 leading-relaxed mb-4">
                      {p.description}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 pt-4 border-t border-ink/10">
                    <button
                      type="button"
                      onClick={() => openDetails(p)}
                      className="flex-1 rounded border border-ink/20 bg-transparent py-2.5 text-center text-xs font-bold uppercase tracking-wider text-ink transition hover:border-ink hover:bg-ink hover:text-white cursor-pointer"
                    >
                      View Details
                    </button>
                    <button
                      type="button"
                      onClick={() => openBooking(p)}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 rounded bg-bronze py-2.5 text-center text-xs font-bold uppercase tracking-wider text-white transition hover:bg-bronze-d shadow-sm cursor-pointer"
                    >
                      <CalendarBookIcon className="h-3.5 w-3.5 text-white" />
                      <span>Schedule</span>
                    </button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* 6. Key Details Highlights Strip */}
          <div className="mt-14 rounded-2xl border border-ink/10 bg-white p-7 sm:p-9 shadow-lg">
            <div className="mb-6 max-w-2xl">
              <span className="kicker !mb-1 text-bronze">Community Highlights</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink">
                Key Details of Adani Plots Sector 63
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {ADANI_PLOTS_INFO.keyDetails.map((detail, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 rounded-xl border border-ink/5 bg-sand/30 p-4 transition-all hover:bg-sand/60"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-bronze/10 text-bronze font-bold text-xs">
                    ✓
                  </span>
                  <span className="text-xs font-medium text-ink leading-relaxed">
                    {detail}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Flagship Projects Link Banner */}
      <section className="bg-ink py-12 text-white">
        <div className="wrap flex flex-wrap items-center justify-between gap-6">
          <div>
            <span className="kicker !text-bronze-l">Looking for Ultra-Luxury Residences?</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1">
              Explore TREVOC Royal Residences — Sector 56
            </h2>
            <p className="text-xs sm:text-sm text-[#d3cbbe] mt-1 max-w-[65ch]">
              172 limited residences across 2 iconic towers with 50,000 sq. ft Club Royal and 36,000 sq. ft Skydeck on Golf Course Road.
            </p>
          </div>
          <Link to="/projects" className="btn btn-bronze text-xs">
            View TREVOC Royal Residences <Arrow />
          </Link>
        </div>
      </section>

      <CtaBand title="Looking to book a plot in Adani Plots Sector 63?" showName={false} />
    </>
  )
}
