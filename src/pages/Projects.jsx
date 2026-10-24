import { useState } from 'react'
import { Link } from 'react-router-dom'
import CtaBand from '../components/CtaBand'
import { Arrow, WhatsAppIcon, CalendarBookIcon } from '../components/Icons'
import PageBanner from '../components/PageBanner'
import Reveal from '../components/Reveal'
import { useProperties } from '../context/PropertyContext'
import {
  BPTP_PLOTS_INFO,
  ADANI_PLOTS_INFO,
  TREVOC_PROJECT_INFO,
  TREVOC_PROPERTIES,
} from '../data/properties'
import { company } from '../data/site'
import usePageMeta from '../hooks/usePageMeta'

export default function Projects() {
  usePageMeta(
    'Current Projects | BPTP Green Oaks, Adani Plots & TREVOC Royal Residences | Real Estate Square',
    'Explore premier current projects in Gurugram: BPTP Green Oaks (Sector 70A), Adani Plots (Sector 63), and TREVOC Royal Residences (Sector 56). Complete project details, pricing, and site visits.'
  )

  const { openBooking, openDetails } = useProperties()
  const [activeProject, setActiveProject] = useState('all') // 'all' | 'bptp' | 'adani' | 'trevoc'

  // Gallery states for each project
  const [bptpImgIdx, setBptpImgIdx] = useState(0)
  const [adaniImgIdx, setAdaniImgIdx] = useState(0)
  const [trevocImgIdx, setTrevocImgIdx] = useState(0)

  // Subtab for TREVOC
  const [trevocSubTab, setTrevocSubTab] = useState('overview')

  const bptpGallery = [
    { src: '/images/bptp/plot_2side.jpg', title: '137 Sq. Yd. 2-Side Open Residential Plot', tag: '2-Side Open' },
    { src: '/images/bptp/corner_plot.jpg', title: '137 Sq. Yd. East-Facing Corner Plot', tag: 'Corner Plot' },
    { src: '/images/bptp/clubhouse_park.jpg', title: 'Gated Society Club House & Expansive Central Park', tag: 'Club & Park' },
  ]

  const adaniGallery = [
    { src: '/images/adani/aerial.jpg', title: 'Aerial Drone View of Plotted Enclave', tag: 'Aerial Drone' },
    { src: '/images/adani/entrance.jpg', title: 'Grand 24x7 Security Entrance Gatehouse', tag: 'Gatehouse' },
    { src: '/images/adani/stilt_4.jpg', title: 'S+4 Ready-to-Construct Avenue & Green Parks', tag: 'S+4 Avenue' },
  ]

  const trevocGallery = [
    { src: '/images/trevoc/exterior.jpg', title: '2 Iconic Towers from 80 Ft Elevated Podium', tag: 'Architecture' },
    { src: '/images/trevoc/club_royal.jpg', title: 'Club Royal (50,000 Sq.Ft) Sunken Seating Restaurant', tag: 'Club Royal' },
    { src: '/images/trevoc/skydeck.jpg', title: 'Skydeck (36,000 Sq.Ft) Rooftop Track & Cabanas', tag: 'Skydeck' },
    { src: '/images/trevoc/living.jpg', title: 'Spacious Living Room with 11 Ft Ceilings & Deck', tag: 'Interiors' },
    { src: '/images/trevoc/master_suite.jpg', title: 'Master Bedroom Suite with Golf Course Views', tag: 'Master Suite' },
    { src: '/images/trevoc/pool.jpg', title: 'Temperature-Controlled Swimming Pool & Spa', tag: 'Wellness' },
    { src: '/images/trevoc/lobby.jpg', title: 'Triple-Height Grand Lobby & Biometric Lifts', tag: 'Grand Arrival' },
  ]

  return (
    <>
      {/* 1. Page Banner */}
      <PageBanner
        title="Current Projects"
        image="slideshow/slide1.jpg"
        alt="Current Projects - BPTP Green Oaks, Adani Plots, TREVOC Royal Residences"
      />

      <section className="section bg-[#f5f1ea] pt-6 sm:pt-8 pb-16 sm:pb-20 md:pb-28">
        <div className="wrap">
          {/* Header & Badges */}
          <div className="mb-6 sm:mb-8 border-b border-ink/10 pb-5 sm:pb-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-bronze/40 bg-sand/60 px-3 py-1 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-bronze-d">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                  <span>Flagship Developments · Gurugram Premier Corridors</span>
                </div>
                <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-ink leading-tight mb-2">
                  Current Projects &amp; Masterplanned Enclaves
                </h1>
                <p className="max-w-[78ch] text-stone text-xs sm:text-sm md:text-base leading-relaxed">
                  Explore our three premier active developments across Gurugram: <strong className="text-ink font-semibold">BPTP Green Oaks (Sector 70A)</strong>, <strong className="text-ink font-semibold">ADANI PLOTS (Sector 63)</strong>, and <strong className="text-ink font-semibold">TREVOC Royal Residences (Sector 56)</strong>. Complete project specifications, pricing, amenities, and direct luxury advisory.
                </p>
              </div>

              {/* RERA & Connectivity Badge */}
              <div className="flex flex-wrap items-center gap-2 shrink-0">
                <span className="rounded-lg border border-bronze/30 bg-white px-3 py-1.5 sm:px-3.5 sm:py-2 text-[11px] sm:text-xs font-bold text-ink shadow-xs">
                  🏛️ 3 Active Developments
                </span>
                <span className="rounded-lg bg-emerald-700 px-3 py-1.5 sm:px-3.5 sm:py-2 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-white shadow-xs">
                  100% Verified Titles
                </span>
              </div>
            </div>
          </div>

          {/* 2. Interactive Project Selector Tab Bar (Horizontal Touch Scroll on Mobile) */}
          <div className="mb-8 sm:mb-10 flex flex-col md:flex-row md:items-center md:justify-between gap-3 border-b border-ink/10 pb-3">
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1.5 -mx-4 px-4 sm:mx-0 sm:px-0">
              <button
                type="button"
                onClick={() => setActiveProject('all')}
                className={`shrink-0 rounded-xl px-3.5 sm:px-4 py-2 text-xs font-bold uppercase tracking-wider transition cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
                  activeProject === 'all'
                    ? 'bg-ink text-white shadow-md'
                    : 'bg-white text-stone border border-ink/10 hover:border-bronze hover:text-ink'
                }`}
              >
                <span>All 3 Projects</span>
                <span className={`rounded-full px-1.5 py-0.2 text-[10px] font-extrabold ${activeProject === 'all' ? 'bg-bronze text-white' : 'bg-sand text-ink'}`}>
                  3
                </span>
              </button>

              <button
                type="button"
                onClick={() => setActiveProject('bptp')}
                className={`shrink-0 rounded-xl px-3.5 sm:px-4 py-2 text-xs font-bold uppercase tracking-wider transition cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
                  activeProject === 'bptp'
                    ? 'bg-bronze text-white shadow-md'
                    : 'bg-white text-stone border border-ink/10 hover:border-bronze hover:text-ink'
                }`}
              >
                <span>BPTP Green Oaks (Sector 70A)</span>
                <span className="rounded-full bg-emerald-600 text-white px-1.5 py-0.5 text-[9px] font-bold">
                  ONLY 2 PLOTS
                </span>
              </button>

              <button
                type="button"
                onClick={() => setActiveProject('adani')}
                className={`shrink-0 rounded-xl px-3.5 sm:px-4 py-2 text-xs font-bold uppercase tracking-wider transition cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
                  activeProject === 'adani'
                    ? 'bg-bronze text-white shadow-md'
                    : 'bg-white text-stone border border-ink/10 hover:border-bronze hover:text-ink'
                }`}
              >
                <span>Adani Plots (Sector 63)</span>
                <span className="rounded-full bg-blue-700 text-white px-1.5 py-0.5 text-[9px] font-bold">
                  S+4 APPROVED
                </span>
              </button>

              <button
                type="button"
                onClick={() => setActiveProject('trevoc')}
                className={`shrink-0 rounded-xl px-3.5 sm:px-4 py-2 text-xs font-bold uppercase tracking-wider transition cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
                  activeProject === 'trevoc'
                    ? 'bg-bronze text-white shadow-md'
                    : 'bg-white text-stone border border-ink/10 hover:border-bronze hover:text-ink'
                }`}
              >
                <span>TREVOC Royal (Sector 56)</span>
                <span className="rounded-full bg-purple-700 text-white px-1.5 py-0.5 text-[9px] font-bold">
                  3 &amp; 4 BHK
                </span>
              </button>
            </div>

            <Link
              to="/properties"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-bronze-d hover:text-ink transition-colors shrink-0 self-start md:self-auto pt-1 md:pt-0"
            >
              <span>View Property Inventory</span>
              <Arrow />
            </Link>
          </div>

          {/* ============================================================== */}
          {/* PROJECT 1: BPTP GREEN OAKS (Sector 70A, Gurgaon)              */}
          {/* ============================================================== */}
          {(activeProject === 'all' || activeProject === 'bptp') && (
            <div id="project-bptp" className="mb-12 sm:mb-16 rounded-2xl sm:rounded-3xl border border-bronze/40 bg-white p-4 sm:p-7 md:p-10 shadow-xl scroll-mt-24">
              {/* Top Banner */}
              <div className="mb-6 sm:mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-ink/10 pb-4 sm:pb-5">
                <div>
                  <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 rounded-full bg-emerald-50 border border-emerald-300 px-2.5 sm:px-3.5 py-0.5 sm:py-1 text-[10px] sm:text-xs font-bold text-emerald-800 uppercase tracking-wider mb-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-600 animate-pulse" />
                    <span>Plotted Community · Sector 70A, Gurgaon</span>
                    <span className="hidden sm:inline">·</span>
                    <span className="hidden sm:inline">1% Commission Committed</span>
                  </div>
                  <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-ink">
                    BPTP GREEN OAKS — Sector 70A
                  </h2>
                  <p className="text-stone text-xs sm:text-sm md:text-base leading-relaxed mt-1">
                    Premium residential plots located in Sector 70A, Gurgaon. Gated society featuring resident club house, huge park, and seamless connectivity to SPR, Golf Course Extension Road, Sohna Road, and NH-48.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2 shrink-0">
                  <span className="rounded-lg sm:rounded-xl bg-emerald-700 text-white px-3 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs font-bold uppercase tracking-wider shadow">
                    Only 2 Plots Available
                  </span>
                  <span className="rounded-lg sm:rounded-xl bg-amber-100 text-amber-900 border border-amber-300 px-3 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs font-bold">
                    East-Facing Plots
                  </span>
                </div>
              </div>

              {/* Gallery + Details Grid */}
              <div className="grid gap-6 sm:gap-8 lg:grid-cols-12 items-stretch mb-6 sm:mb-8">
                {/* Left: Gallery Showcase (7 cols) */}
                <div className="lg:col-span-7 flex flex-col justify-between overflow-hidden rounded-xl sm:rounded-2xl border border-ink/10 bg-sand/20 p-3 sm:p-5">
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg sm:rounded-xl bg-ink">
                    <img
                      src={bptpGallery[bptpImgIdx].src}
                      alt={bptpGallery[bptpImgIdx].title}
                      decoding="async"
                      className="h-full w-full object-cover transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                    <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex items-end justify-between">
                      <div>
                        <span className="rounded bg-bronze px-2 sm:px-2.5 py-0.5 sm:py-1 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-white shadow">
                          {bptpGallery[bptpImgIdx].tag}
                        </span>
                        <h3 className="font-serif text-lg sm:text-2xl font-bold text-white mt-1 drop-shadow">
                          {bptpGallery[bptpImgIdx].title}
                        </h3>
                      </div>
                      <span className="text-[11px] sm:text-xs text-amber-200 font-semibold bg-black/60 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded backdrop-blur-sm shrink-0">
                        137 Sq. Yds. Each
                      </span>
                    </div>
                  </div>

                  {/* Thumbnails */}
                  <div className="mt-3 sm:mt-4 grid grid-cols-3 gap-2 sm:gap-3">
                    {bptpGallery.map((g, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setBptpImgIdx(idx)}
                        className={`relative overflow-hidden rounded-lg border-2 transition cursor-pointer aspect-[16/10] ${
                          bptpImgIdx === idx
                            ? 'border-bronze ring-2 ring-bronze/40 scale-[1.02]'
                            : 'border-transparent opacity-70 hover:opacity-100'
                        }`}
                      >
                        <img src={g.src} alt={g.title} loading="lazy" decoding="async" className="h-full w-full object-cover" />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Right: Key Project Details Table (5 cols) */}
                <div className="lg:col-span-5 flex flex-col justify-between rounded-xl sm:rounded-2xl border border-ink/10 bg-ivory/60 p-4 sm:p-6">
                  <div>
                    <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-bronze block mb-1">
                      OFFICIAL PROJECT SPECIFICATION
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-ink mb-3">
                      Key Project Details
                    </h3>

                    <div className="overflow-hidden rounded-xl border border-ink/10 text-xs">
                      <div className="grid grid-cols-2 divide-x divide-ink/10 border-b border-ink/10 bg-sand/60 p-2.5 sm:p-3 font-bold text-ink">
                        <span>DETAIL</span>
                        <span className="pl-3">INFORMATION</span>
                      </div>
                      <div className="divide-y divide-ink/10">
                        <div className="grid grid-cols-2 divide-x divide-ink/10 p-2.5 sm:p-3">
                          <span className="font-bold text-ink">Location</span>
                          <span className="pl-3 text-stone">{BPTP_PLOTS_INFO.location}</span>
                        </div>
                        <div className="grid grid-cols-2 divide-x divide-ink/10 p-2.5 sm:p-3 bg-sand/20">
                          <span className="font-bold text-ink">Property Type</span>
                          <span className="pl-3 text-emerald-800 font-semibold">{BPTP_PLOTS_INFO.propertyType}</span>
                        </div>
                        <div className="grid grid-cols-2 divide-x divide-ink/10 p-2.5 sm:p-3">
                          <span className="font-bold text-ink">Available Inventory</span>
                          <span className="pl-3 text-red-700 font-bold">{BPTP_PLOTS_INFO.availableInventory}</span>
                        </div>
                        <div className="grid grid-cols-2 divide-x divide-ink/10 p-2.5 sm:p-3 bg-sand/20">
                          <span className="font-bold text-ink">Plot Size</span>
                          <span className="pl-3 text-ink font-semibold">{BPTP_PLOTS_INFO.plotSize}</span>
                        </div>
                        <div className="grid grid-cols-2 divide-x divide-ink/10 p-2.5 sm:p-3">
                          <span className="font-bold text-ink">Facing</span>
                          <span className="pl-3 text-emerald-800 font-bold">{BPTP_PLOTS_INFO.facing}</span>
                        </div>
                        <div className="grid grid-cols-2 divide-x divide-ink/10 p-2.5 sm:p-3 bg-sand/20">
                          <span className="font-bold text-ink">Commission</span>
                          <span className="pl-3 text-bronze-d font-bold">{BPTP_PLOTS_INFO.commission}</span>
                        </div>
                        <div className="grid grid-cols-2 divide-x divide-ink/10 p-2.5 sm:p-3">
                          <span className="font-bold text-ink">Society Amenities</span>
                          <span className="pl-3 text-stone">Club House, Huge Park, 24×7 Security</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-4 sm:mt-5 flex flex-col sm:flex-row gap-2.5 sm:gap-3">
                    <a
                      href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent('Hello Real Estate Square, I am interested in BPTP Green Oaks Sector 70A plots (137 Sq. Yds. East-Facing). Please share brochure and pricing details.')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-3.5 py-2.5 sm:py-3 text-xs font-bold uppercase tracking-wider text-white shadow transition hover:bg-[#1ebd59]"
                    >
                      <WhatsAppIcon className="h-4 w-4" />
                      <span>Inquire on WhatsApp</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => openBooking({
                        id: 'bptp-green-oaks',
                        title: 'BPTP Green Oaks — Sector 70A Plots',
                        priceDisplay: 'From ₹4.11 Cr (₹3 Lakh/Sq.Yd)',
                        location: 'Sector 70A, Gurgaon',
                        area: '137 Sq. Yds.',
                      })}
                      className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-ink px-3.5 py-2.5 sm:py-3 text-xs font-bold uppercase tracking-wider text-white shadow transition hover:bg-bronze cursor-pointer"
                    >
                      <CalendarBookIcon className="h-4 w-4 text-bronze-l" />
                      <span>Book Site Visit</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Plot Options & Pricing Table */}
              <div className="mb-6 rounded-xl sm:rounded-2xl border border-bronze/30 bg-ivory/70 p-4 sm:p-6 shadow-sm">
                <div className="mb-3 sm:mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-bronze block">
                      TRANSPARENT PRICING
                    </span>
                    <h4 className="font-serif text-lg sm:text-2xl font-bold text-ink">
                      Plot Options &amp; Pricing — BPTP Green Oaks
                    </h4>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="rounded-full bg-emerald-100 border border-emerald-300 px-3 py-0.5 text-xs font-bold text-emerald-800">
                      East-Facing Plots
                    </span>
                    <span className="sm:hidden text-[10px] font-semibold text-stone">
                      Swipe horizontally ➔
                    </span>
                  </div>
                </div>

                <div className="overflow-x-auto no-scrollbar -mx-2 px-2 sm:mx-0 sm:px-0">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[560px] sm:min-w-0">
                    <thead>
                      <tr className="border-b-2 border-bronze/40 bg-sand/60 text-xs uppercase tracking-wider text-ink font-bold">
                        <th className="py-2.5 sm:py-3 px-3 sm:px-4">Plot Option</th>
                        <th className="py-2.5 sm:py-3 px-3 sm:px-4">Plot Size</th>
                        <th className="py-2.5 sm:py-3 px-3 sm:px-4">Facing</th>
                        <th className="py-2.5 sm:py-3 px-3 sm:px-4">Rate / Sq. Yd.</th>
                        <th className="py-2.5 sm:py-3 px-3 sm:px-4">Approx. Total</th>
                        <th className="py-2.5 sm:py-3 px-3 sm:px-4 text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-ink/10">
                      {BPTP_PLOTS_INFO.rates.map((row, idx) => (
                        <tr key={idx} className="hover:bg-sand/30 transition-colors">
                          <td className="py-3 px-3 sm:px-4 font-bold text-ink whitespace-nowrap">
                            ● {row.type}
                          </td>
                          <td className="py-3 px-3 sm:px-4 text-stone font-medium whitespace-nowrap">
                            {row.size} ({row.sqft})
                          </td>
                          <td className="py-3 px-3 sm:px-4 text-emerald-800 font-bold whitespace-nowrap">
                            {row.facing}
                          </td>
                          <td className="py-3 px-3 sm:px-4 font-bold text-bronze-d whitespace-nowrap">
                            {row.rate}
                          </td>
                          <td className="py-3 px-3 sm:px-4 font-serif font-bold text-sm sm:text-base text-ink whitespace-nowrap">
                            {row.priceDisplay}
                          </td>
                          <td className="py-3 px-3 sm:px-4 text-right whitespace-nowrap">
                            <button
                              type="button"
                              onClick={() => openBooking({
                                id: `bptp-${idx}`,
                                title: `BPTP Green Oaks — ${row.type}`,
                                priceDisplay: row.priceDisplay,
                                location: 'Sector 70A, Gurgaon',
                                area: row.size,
                              })}
                              className="inline-flex items-center gap-1 rounded bg-ink px-2.5 sm:px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-bronze cursor-pointer"
                            >
                              <span>Book Visit</span>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Key Features & Connectivity Grid */}
              <div className="grid gap-4 sm:gap-6 md:grid-cols-2 pt-2">
                <div className="rounded-xl border border-ink/10 bg-sand/20 p-4 sm:p-5">
                  <h5 className="font-serif text-sm sm:text-base font-bold text-ink mb-2.5 sm:mb-3 flex items-center gap-2">
                    <span className="text-bronze">★</span> Key Society Features
                  </h5>
                  <div className="space-y-2 text-xs text-stone">
                    {BPTP_PLOTS_INFO.keyFeatures.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="text-emerald-700 font-bold shrink-0">✓</span>
                        <span className="font-medium text-ink">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl border border-ink/10 bg-sand/20 p-4 sm:p-5">
                  <h5 className="font-serif text-sm sm:text-base font-bold text-ink mb-2.5 sm:mb-3 flex items-center gap-2">
                    <span className="text-bronze">📍</span> Prime Connectivity Hub
                  </h5>
                  <div className="space-y-2 text-xs text-stone">
                    {BPTP_PLOTS_INFO.connectivity.map((conn, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="text-bronze font-bold shrink-0">➔</span>
                        <span className="font-medium text-ink">{conn}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ============================================================== */}
          {/* PROJECT 2: ADANI PLOTS (Sector 63, Golf Extension Road)       */}
          {/* ============================================================== */}
          {(activeProject === 'all' || activeProject === 'adani') && (
            <div id="project-adani" className="mb-12 sm:mb-16 rounded-2xl sm:rounded-3xl border border-blue-900/30 bg-white p-4 sm:p-7 md:p-10 shadow-xl scroll-mt-24">
              {/* Top Banner */}
              <div className="mb-6 sm:mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-ink/10 pb-4 sm:pb-5">
                <div>
                  <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 rounded-full bg-blue-50 border border-blue-300 px-2.5 sm:px-3.5 py-0.5 sm:py-1 text-[10px] sm:text-xs font-bold text-blue-900 uppercase tracking-wider mb-2">
                    <span className="h-2 w-2 rounded-full bg-blue-700 animate-pulse" />
                    <span>Plotted Enclave · Sector 63, Golf Extension Road</span>
                    <span className="hidden sm:inline">·</span>
                    <span className="hidden sm:inline">Adjacent to DLF The Arbour</span>
                  </div>
                  <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-ink">
                    ADANI PLOTS — Sector 63, Gurugram
                  </h2>
                  <p className="text-stone text-xs sm:text-sm md:text-base leading-relaxed mt-1">
                    Prime freehold residential plots adjacent to DLF The Arbour. Sanctioned for Stilt + 4 Floors (S+4) map approvals with 100% power backup, wide paved avenues, and flexible 60–90 days payment terms.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2 shrink-0">
                  <span className="rounded-lg sm:rounded-xl bg-emerald-700 text-white px-3 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs font-bold uppercase tracking-wider shadow">
                    Ready to Construct
                  </span>
                  <span className="rounded-lg sm:rounded-xl bg-sand text-ink border border-ink/15 px-3 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs font-bold">
                    S+4 Approved
                  </span>
                </div>
              </div>

              {/* Gallery + Details Grid */}
              <div className="grid gap-6 sm:gap-8 lg:grid-cols-12 items-stretch mb-6 sm:mb-8">
                {/* Left: Gallery Showcase (7 cols) */}
                <div className="lg:col-span-7 flex flex-col justify-between overflow-hidden rounded-xl sm:rounded-2xl border border-ink/10 bg-sand/20 p-3 sm:p-5">
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg sm:rounded-xl bg-ink">
                    <img
                      src={adaniGallery[adaniImgIdx].src}
                      alt={adaniGallery[adaniImgIdx].title}
                      decoding="async"
                      className="h-full w-full object-cover transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                    <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex items-end justify-between">
                      <div>
                        <span className="rounded bg-bronze px-2 sm:px-2.5 py-0.5 sm:py-1 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-white shadow">
                          {adaniGallery[adaniImgIdx].tag}
                        </span>
                        <h3 className="font-serif text-lg sm:text-2xl font-bold text-white mt-1 drop-shadow">
                          {adaniGallery[adaniImgIdx].title}
                        </h3>
                      </div>
                      <span className="text-[11px] sm:text-xs text-amber-200 font-semibold bg-black/60 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded backdrop-blur-sm shrink-0">
                        Adjacent DLF The Arbour
                      </span>
                    </div>
                  </div>

                  {/* Thumbnails */}
                  <div className="mt-3 sm:mt-4 grid grid-cols-3 gap-2 sm:gap-3">
                    {adaniGallery.map((g, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setAdaniImgIdx(idx)}
                        className={`relative overflow-hidden rounded-lg border-2 transition cursor-pointer aspect-[16/10] ${
                          adaniImgIdx === idx
                            ? 'border-bronze ring-2 ring-bronze/40 scale-[1.02]'
                            : 'border-transparent opacity-70 hover:opacity-100'
                        }`}
                      >
                        <img src={g.src} alt={g.title} loading="lazy" decoding="async" className="h-full w-full object-cover" />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Right: Key Project Details Table (5 cols) */}
                <div className="lg:col-span-5 flex flex-col justify-between rounded-xl sm:rounded-2xl border border-ink/10 bg-ivory/60 p-4 sm:p-6">
                  <div>
                    <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-bronze block mb-1">
                      PROJECT SPECIFICATION &amp; APPROVALS
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-ink mb-3">
                      Adani Plots Details
                    </h3>

                    <div className="overflow-hidden rounded-xl border border-ink/10 text-xs">
                      <div className="grid grid-cols-2 divide-x divide-ink/10 border-b border-ink/10 bg-sand/60 p-2.5 sm:p-3 font-bold text-ink">
                        <span>DETAIL</span>
                        <span className="pl-3">INFORMATION</span>
                      </div>
                      <div className="divide-y divide-ink/10">
                        <div className="grid grid-cols-2 divide-x divide-ink/10 p-2.5 sm:p-3">
                          <span className="font-bold text-ink">Location</span>
                          <span className="pl-3 text-stone">{ADANI_PLOTS_INFO.location}</span>
                        </div>
                        <div className="grid grid-cols-2 divide-x divide-ink/10 p-2.5 sm:p-3 bg-sand/20">
                          <span className="font-bold text-ink">Position</span>
                          <span className="pl-3 text-emerald-800 font-semibold">{ADANI_PLOTS_INFO.position}</span>
                        </div>
                        <div className="grid grid-cols-2 divide-x divide-ink/10 p-2.5 sm:p-3">
                          <span className="font-bold text-ink">Plot Sizes</span>
                          <span className="pl-3 text-ink font-semibold">{ADANI_PLOTS_INFO.plotSizes}</span>
                        </div>
                        <div className="grid grid-cols-2 divide-x divide-ink/10 p-2.5 sm:p-3 bg-sand/20">
                          <span className="font-bold text-ink">Construction</span>
                          <span className="pl-3 text-emerald-800 font-bold">{ADANI_PLOTS_INFO.construction}</span>
                        </div>
                        <div className="grid grid-cols-2 divide-x divide-ink/10 p-2.5 sm:p-3">
                          <span className="font-bold text-ink">Floors Approved</span>
                          <span className="pl-3 text-bronze-d font-bold">{ADANI_PLOTS_INFO.floors}</span>
                        </div>
                        <div className="grid grid-cols-2 divide-x divide-ink/10 p-2.5 sm:p-3 bg-sand/20">
                          <span className="font-bold text-ink">Payment Term</span>
                          <span className="pl-3 text-ink font-bold">{ADANI_PLOTS_INFO.paymentTerm}</span>
                        </div>
                        <div className="grid grid-cols-2 divide-x divide-ink/10 p-2.5 sm:p-3">
                          <span className="font-bold text-ink">RERA Registered</span>
                          <span className="pl-3 text-stone">{ADANI_PLOTS_INFO.rera}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-4 sm:mt-5 flex flex-col sm:flex-row gap-2.5 sm:gap-3">
                    <a
                      href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent('Hello Real Estate Square, I am interested in Adani Plots Sector 63, Gurugram. Please share available plot inventory and payment terms.')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-3.5 py-2.5 sm:py-3 text-xs font-bold uppercase tracking-wider text-white shadow transition hover:bg-[#1ebd59]"
                    >
                      <WhatsAppIcon className="h-4 w-4" />
                      <span>Inquire on WhatsApp</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => openBooking({
                        id: 'adani-plots-sec63',
                        title: 'Adani Plots Sector 63',
                        priceDisplay: 'From ₹5.10 Crore (₹3 Lakh/Sq.Yd)',
                        location: 'Golf Extension Road, Sector 63, Gurugram',
                        area: '170 - 267 Sq. Yd.',
                      })}
                      className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-ink px-3.5 py-2.5 sm:py-3 text-xs font-bold uppercase tracking-wider text-white shadow transition hover:bg-bronze cursor-pointer"
                    >
                      <CalendarBookIcon className="h-4 w-4 text-bronze-l" />
                      <span>Book Site Visit</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Rates Comparison Table */}
              <div className="rounded-xl sm:rounded-2xl border border-bronze/30 bg-ivory/70 p-4 sm:p-6 shadow-sm">
                <div className="mb-3 sm:mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-bronze block">
                      RATES &amp; INVENTORY
                    </span>
                    <h4 className="font-serif text-lg sm:text-2xl font-bold text-ink">
                      Plot Options &amp; Rates — Adani Plots Sector 63
                    </h4>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="rounded-full bg-blue-100 border border-blue-300 px-3 py-0.5 text-xs font-bold text-blue-900">
                      Payment Term: 60–90 Days
                    </span>
                    <span className="sm:hidden text-[10px] font-semibold text-stone">
                      Swipe horizontally ➔
                    </span>
                  </div>
                </div>

                <div className="overflow-x-auto no-scrollbar -mx-2 px-2 sm:mx-0 sm:px-0">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[580px] sm:min-w-0">
                    <thead>
                      <tr className="border-b-2 border-bronze/40 bg-sand/60 text-xs uppercase tracking-wider text-ink font-bold">
                        <th className="py-2.5 sm:py-3 px-3 sm:px-4">Plot Size</th>
                        <th className="py-2.5 sm:py-3 px-3 sm:px-4">Approx Area</th>
                        <th className="py-2.5 sm:py-3 px-3 sm:px-4">Rate / Sq. Yd.</th>
                        <th className="py-2.5 sm:py-3 px-3 sm:px-4">Total Value</th>
                        <th className="py-2.5 sm:py-3 px-3 sm:px-4">Sanctioned Floors</th>
                        <th className="py-2.5 sm:py-3 px-3 sm:px-4 text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-ink/10">
                      {ADANI_PLOTS_INFO.rates.map((row, idx) => (
                        <tr key={idx} className="hover:bg-sand/30 transition-colors">
                          <td className="py-3 px-3 sm:px-4 font-bold text-ink whitespace-nowrap">
                            {row.size}
                          </td>
                          <td className="py-3 px-3 sm:px-4 text-stone font-medium whitespace-nowrap">
                            {row.sqft}
                          </td>
                          <td className="py-3 px-3 sm:px-4 font-bold text-bronze-d whitespace-nowrap">
                            {row.rate}
                          </td>
                          <td className="py-3 px-3 sm:px-4 font-serif font-bold text-sm sm:text-base text-ink whitespace-nowrap">
                            {row.priceDisplay}
                          </td>
                          <td className="py-3 px-3 sm:px-4 text-emerald-800 font-semibold whitespace-nowrap">
                            S+4 Floors Approved
                          </td>
                          <td className="py-3 px-3 sm:px-4 text-right whitespace-nowrap">
                            <button
                              type="button"
                              onClick={() => openBooking({
                                id: `adani-${idx}`,
                                title: `Adani Plots — ${row.size}`,
                                priceDisplay: row.priceDisplay,
                                location: 'Golf Extension Road, Sector 63, Gurugram',
                                area: row.size,
                              })}
                              className="inline-flex items-center gap-1 rounded bg-ink px-2.5 sm:px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-bronze cursor-pointer"
                            >
                              <span>Book Visit</span>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* ============================================================== */}
          {/* PROJECT 3: TREVOC ROYAL RESIDENCES (Sector 56)                 */}
          {/* ============================================================== */}
          {(activeProject === 'all' || activeProject === 'trevoc') && (
            <div id="project-trevoc" className="mb-12 sm:mb-16 rounded-2xl sm:rounded-3xl border border-purple-900/30 bg-white p-4 sm:p-7 md:p-10 shadow-xl scroll-mt-24">
              {/* Top Banner */}
              <div className="mb-6 sm:mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-ink/10 pb-4 sm:pb-5">
                <div>
                  <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 rounded-full bg-purple-50 border border-purple-300 px-2.5 sm:px-3.5 py-0.5 sm:py-1 text-[10px] sm:text-xs font-bold text-purple-900 uppercase tracking-wider mb-2">
                    <span className="h-2 w-2 rounded-full bg-purple-700 animate-pulse" />
                    <span>Luxury Sky Residences · Sector 56, Golf Course Road</span>
                    <span className="hidden sm:inline">·</span>
                    <span className="hidden sm:inline">50,000 Sq. Ft Club Royal &amp; 36,000 Sq. Ft Skydeck</span>
                  </div>
                  <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-ink">
                    TREVOC ROYAL RESIDENCES — Sector 56
                  </h2>
                  <p className="text-stone text-xs sm:text-sm md:text-base leading-relaxed mt-1">
                    A luxury residential development designed around space, privacy, elevated living and premium amenities. Limited collection of 172 residences positioned from 80 ft above ground across 2 iconic towers.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2 shrink-0">
                  <span className="rounded-lg sm:rounded-xl bg-ink text-bronze-l px-3 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs font-bold uppercase tracking-wider shadow">
                    172 Residences Only
                  </span>
                  <span className="rounded-lg sm:rounded-xl bg-purple-100 text-purple-950 border border-purple-300 px-3 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs font-bold">
                    3 &amp; 4 BHK + Utility
                  </span>
                </div>
              </div>

              {/* Gallery + Details Grid */}
              <div className="grid gap-6 sm:gap-8 lg:grid-cols-12 items-stretch mb-6 sm:mb-8">
                {/* Left: Gallery Showcase (7 cols) */}
                <div className="lg:col-span-7 flex flex-col justify-between overflow-hidden rounded-xl sm:rounded-2xl border border-ink/10 bg-sand/20 p-3 sm:p-5">
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg sm:rounded-xl bg-ink">
                    <img
                      src={trevocGallery[trevocImgIdx].src}
                      alt={trevocGallery[trevocImgIdx].title}
                      decoding="async"
                      className="h-full w-full object-cover transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                    <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex items-end justify-between">
                      <div>
                        <span className="rounded bg-bronze px-2 sm:px-2.5 py-0.5 sm:py-1 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-white shadow">
                          {trevocGallery[trevocImgIdx].tag}
                        </span>
                        <h3 className="font-serif text-lg sm:text-2xl font-bold text-white mt-1 drop-shadow">
                          {trevocGallery[trevocImgIdx].title}
                        </h3>
                      </div>
                      <span className="text-[11px] sm:text-xs text-amber-200 font-semibold bg-black/60 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded backdrop-blur-sm shrink-0">
                        Sector 56, Golf Course Rd
                      </span>
                    </div>
                  </div>

                  {/* Thumbnails */}
                  <div className="mt-3 sm:mt-4 flex gap-2 sm:gap-2.5 overflow-x-auto no-scrollbar pb-1 -mx-1 px-1">
                    {trevocGallery.map((g, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setTrevocImgIdx(idx)}
                        className={`relative h-14 sm:h-16 w-20 sm:w-24 shrink-0 overflow-hidden rounded-lg border-2 transition cursor-pointer ${
                          trevocImgIdx === idx
                            ? 'border-bronze ring-2 ring-bronze/40 scale-105'
                            : 'border-transparent opacity-60 hover:opacity-100'
                        }`}
                      >
                        <img src={g.src} alt={g.title} loading="lazy" decoding="async" className="h-full w-full object-cover" />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Right: Key Project Details Table (5 cols) */}
                <div className="lg:col-span-5 flex flex-col justify-between rounded-xl sm:rounded-2xl border border-ink/10 bg-ivory/60 p-4 sm:p-6">
                  <div>
                    <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-bronze block mb-1">
                      OFFICIAL PROJECT SPECIFICATION
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-ink mb-3">
                      Key Project Details
                    </h3>

                    <div className="overflow-hidden rounded-xl border border-ink/10 text-xs">
                      <div className="grid grid-cols-2 divide-x divide-ink/10 border-b border-ink/10 bg-sand/60 p-2.5 sm:p-3 font-bold text-ink">
                        <span>DETAIL</span>
                        <span className="pl-3">INFORMATION</span>
                      </div>
                      <div className="divide-y divide-ink/10">
                        <div className="grid grid-cols-2 divide-x divide-ink/10 p-2.5 sm:p-3">
                          <span className="font-bold text-ink">Location</span>
                          <span className="pl-3 text-stone">Sector 56, Golf Course Road, Gurgaon</span>
                        </div>
                        <div className="grid grid-cols-2 divide-x divide-ink/10 p-2.5 sm:p-3 bg-sand/20">
                          <span className="font-bold text-ink">Total Residences</span>
                          <span className="pl-3 text-bronze-d font-bold">172 residences</span>
                        </div>
                        <div className="grid grid-cols-2 divide-x divide-ink/10 p-2.5 sm:p-3">
                          <span className="font-bold text-ink">Towers</span>
                          <span className="pl-3 text-ink font-semibold">2 iconic towers</span>
                        </div>
                        <div className="grid grid-cols-2 divide-x divide-ink/10 p-2.5 sm:p-3 bg-sand/20">
                          <span className="font-bold text-ink">Configurations</span>
                          <span className="pl-3 text-ink font-semibold">3 BHK + Utility and 4 BHK + Utility</span>
                        </div>
                        <div className="grid grid-cols-2 divide-x divide-ink/10 p-2.5 sm:p-3">
                          <span className="font-bold text-ink">3 BHK + Utility</span>
                          <span className="pl-3 text-ink font-bold">2,642 sq. ft</span>
                        </div>
                        <div className="grid grid-cols-2 divide-x divide-ink/10 p-2.5 sm:p-3 bg-sand/20">
                          <span className="font-bold text-ink">4 BHK + Utility</span>
                          <span className="pl-3 text-ink font-bold">3,380 sq. ft</span>
                        </div>
                        <div className="grid grid-cols-2 divide-x divide-ink/10 p-2.5 sm:p-3">
                          <span className="font-bold text-ink">Club Royal</span>
                          <span className="pl-3 text-purple-900 font-bold">50,000 Sq. Ft Curated Club</span>
                        </div>
                        <div className="grid grid-cols-2 divide-x divide-ink/10 p-2.5 sm:p-3 bg-sand/20">
                          <span className="font-bold text-ink">Skydeck</span>
                          <span className="pl-3 text-purple-900 font-bold">36,000 Sq. Ft Open-to-Sky</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-4 sm:mt-5 flex flex-col sm:flex-row gap-2.5 sm:gap-3">
                    <a
                      href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent('Hello Real Estate Square, I would like to enquire about TREVOC Royal Residences Sector 56, Golf Course Road Gurgaon.')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-3.5 py-2.5 sm:py-3 text-xs font-bold uppercase tracking-wider text-white shadow transition hover:bg-[#1ebd59]"
                    >
                      <WhatsAppIcon className="h-4 w-4" />
                      <span>Inquire on WhatsApp</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => openBooking(TREVOC_PROPERTIES[0])}
                      className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-ink px-3.5 py-2.5 sm:py-3 text-xs font-bold uppercase tracking-wider text-white shadow transition hover:bg-bronze cursor-pointer"
                    >
                      <CalendarBookIcon className="h-4 w-4 text-bronze-l" />
                      <span>Book Site Visit</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Sub-Tabs for Deep Dive (Horizontal Touch Scroll on Mobile) */}
              <div className="mb-6 flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar pb-2 -mx-3 px-3 sm:mx-0 sm:px-0 border-b border-ink/10">
                {[
                  { id: 'overview', label: 'Residences & Config' },
                  { id: 'club-royal', label: 'Club Royal (50,000 Sq.Ft)' },
                  { id: 'skydeck', label: 'Skydeck (36,000 Sq.Ft)' },
                  { id: 'features', label: 'Signature Features' },
                  { id: 'location', label: 'Location Advantage' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setTrevocSubTab(tab.id)}
                    className={`shrink-0 rounded-full px-3.5 sm:px-4 py-1.5 text-[11px] sm:text-xs font-bold uppercase tracking-wider transition cursor-pointer whitespace-nowrap ${
                      trevocSubTab === tab.id
                        ? 'bg-purple-900 text-white shadow-md'
                        : 'bg-white text-stone border border-ink/10 hover:border-bronze hover:text-ink'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Subtab 1: Available Configurations Cards */}
              {trevocSubTab === 'overview' && (
                <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {TREVOC_PROPERTIES.map((p, idx) => (
                    <Reveal
                      key={p.id}
                      delay={idx * 60}
                      className="group flex flex-col overflow-hidden rounded-2xl bg-white border border-ink/10 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                    >
                      <div className="relative aspect-[16/10] overflow-hidden bg-sand">
                        <img
                          src={p.image}
                          alt={p.title}
                          loading="lazy"
                          decoding="async"
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20" />
                        <div className="absolute top-2.5 inset-x-2.5 sm:top-3 sm:inset-x-3 flex items-center justify-between gap-2">
                          <span className="rounded bg-ink/90 px-2 sm:px-2.5 py-0.5 sm:py-1 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-bronze-l backdrop-blur-sm shadow">
                            {p.tag}
                          </span>
                        </div>
                        <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-3 sm:left-3 sm:right-3 flex items-baseline justify-between">
                          <span className="font-serif text-xl sm:text-2xl font-bold text-white drop-shadow">
                            {p.priceDisplay}
                          </span>
                          <span className="text-[11px] sm:text-xs text-amber-200 font-semibold bg-black/50 px-2 py-0.5 rounded backdrop-blur-sm">
                            {p.area}
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-1 flex-col justify-between p-4 sm:p-5">
                        <div>
                          <h4 className="font-serif text-base sm:text-lg font-bold leading-snug text-ink mb-1.5 sm:mb-2">
                            {p.title}
                          </h4>
                          <p className="text-xs text-stone line-clamp-2 leading-relaxed mb-3 sm:mb-4">
                            {p.description}
                          </p>
                        </div>
                        <div className="flex items-center gap-2 pt-3 border-t border-ink/10">
                          <button
                            type="button"
                            onClick={() => openDetails(p)}
                            className="flex-1 rounded border border-ink/20 bg-transparent py-2 text-center text-xs font-bold uppercase tracking-wider text-ink transition hover:bg-ink hover:text-white cursor-pointer"
                          >
                            Details
                          </button>
                          <button
                            type="button"
                            onClick={() => openBooking(p)}
                            className="flex-1 rounded bg-bronze py-2 text-center text-xs font-bold uppercase tracking-wider text-white transition hover:bg-bronze-d cursor-pointer"
                          >
                            Book Visit
                          </button>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              )}

              {/* Subtab 2: Club Royal */}
              {trevocSubTab === 'club-royal' && (
                <div className="rounded-xl sm:rounded-2xl border border-ink/10 bg-ivory/60 p-4 sm:p-6 md:p-8">
                  <div className="mb-6 grid gap-6 lg:grid-cols-2 items-center">
                    <div>
                      <h4 className="font-serif text-xl sm:text-2xl font-bold text-ink">
                        Club Royal — 50,000 Sq. Ft of Curated Luxury
                      </h4>
                      <p className="text-stone text-xs sm:text-sm leading-relaxed mt-2">
                        Fine-dining multi-cuisine restaurant with sunken seating, state-of-the-art gymnasium, temperature-controlled swimming pools, indoor VR gaming, private mini theatre, business lounges, spa and resident café.
                      </p>
                    </div>
                    <img
                      src="/images/trevoc/club_royal.jpg"
                      alt="Club Royal"
                      className="w-full aspect-[16/9] object-cover rounded-xl shadow"
                    />
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    {TREVOC_PROJECT_INFO.clubRoyalAmenities.map((a, i) => (
                      <div key={i} className="rounded-xl border border-ink/10 bg-white p-3.5 sm:p-4">
                        <div className="text-xl sm:text-2xl mb-1">{a.icon}</div>
                        <h5 className="font-serif text-xs sm:text-sm font-bold text-ink mb-1">{a.title}</h5>
                        <p className="text-[10px] sm:text-[11px] text-stone leading-relaxed">{a.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Subtab 3: Skydeck */}
              {trevocSubTab === 'skydeck' && (
                <div className="rounded-xl sm:rounded-2xl border border-bronze/30 bg-[#121110] text-white p-4 sm:p-6 md:p-8">
                  <div className="mb-6 grid gap-6 lg:grid-cols-2 items-center">
                    <div>
                      <h4 className="font-serif text-xl sm:text-2xl font-bold text-white">
                        Skydeck — 36,000 Sq. Ft of Open-to-Sky Experiences
                      </h4>
                      <p className="text-[#c6beb0] text-xs sm:text-sm leading-relaxed mt-2">
                        Breathtaking panoramic city views, rooftop jogging track, open-air theatre, elegant cabanas, dedicated yoga/meditation zones, and exclusive BBQ lounges.
                      </p>
                    </div>
                    <img
                      src="/images/trevoc/skydeck.jpg"
                      alt="Skydeck"
                      className="w-full aspect-[16/9] object-cover rounded-xl shadow border border-white/10"
                    />
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {TREVOC_PROJECT_INFO.skydeckExperiences.map((e, i) => (
                      <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-3.5 sm:p-4">
                        <div className="text-xl sm:text-2xl mb-1">{e.icon}</div>
                        <h5 className="font-serif text-sm sm:text-base font-bold text-white mb-1">{e.title}</h5>
                        <p className="text-[10px] sm:text-[11px] text-[#c6beb0] leading-relaxed">{e.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Subtab 4: Signature Features */}
              {trevocSubTab === 'features' && (
                <div className="grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {TREVOC_PROJECT_INFO.signatureFeatures.map((f, i) => (
                    <div key={i} className="rounded-xl border border-ink/10 bg-sand/30 p-3.5 sm:p-4">
                      <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-bronze block mb-1">
                        ★ Feature {i + 1}
                      </span>
                      <h5 className="font-serif text-xs sm:text-sm font-bold text-ink mb-1">{f.title}</h5>
                      <p className="text-xs text-stone leading-relaxed">{f.desc}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Subtab 5: Location Advantage */}
              {trevocSubTab === 'location' && (
                <div className="grid gap-2.5 sm:gap-3 sm:grid-cols-2">
                  {TREVOC_PROJECT_INFO.locationAdvantages.map((a, i) => (
                    <div key={i} className="flex items-start gap-2.5 sm:gap-3 rounded-xl border border-ink/10 bg-ivory/80 p-3 sm:p-3.5">
                      <span className="flex h-5 w-5 sm:h-6 sm:w-6 shrink-0 items-center justify-center rounded-full bg-bronze/10 text-bronze text-xs font-bold">
                        📍
                      </span>
                      <span className="text-xs font-medium text-ink leading-relaxed">{a}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* 4. Side-by-Side Comparison Matrix */}
          <div className="mb-12 sm:mb-16 rounded-2xl sm:rounded-3xl border border-bronze/30 bg-white p-4 sm:p-7 md:p-10 shadow-lg">
            <div className="mb-4 sm:mb-6 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 sm:gap-4">
              <div className="max-w-2xl">
                <span className="kicker !mb-1 text-bronze">Comparative Analysis</span>
                <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-ink">
                  Current Projects Comparison Matrix
                </h3>
                <p className="text-xs sm:text-sm text-stone mt-1">
                  Side-by-side comparison of Gurugram's three premier developments to help you find the ideal asset.
                </p>
              </div>
              <span className="sm:hidden text-[10px] font-semibold text-stone self-end">
                Swipe matrix horizontally ➔
              </span>
            </div>

            <div className="overflow-x-auto no-scrollbar -mx-2 px-2 sm:mx-0 sm:px-0">
              <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[640px] sm:min-w-0">
                <thead>
                  <tr className="border-b-2 border-bronze/40 bg-sand/60 text-xs uppercase tracking-wider text-ink font-bold">
                    <th className="py-2.5 sm:py-3 px-3 sm:px-4">Project</th>
                    <th className="py-2.5 sm:py-3 px-3 sm:px-4">Location</th>
                    <th className="py-2.5 sm:py-3 px-3 sm:px-4">Asset Type</th>
                    <th className="py-2.5 sm:py-3 px-3 sm:px-4">Sizes / Config</th>
                    <th className="py-2.5 sm:py-3 px-3 sm:px-4">Pricing Range</th>
                    <th className="py-2.5 sm:py-3 px-3 sm:px-4 text-right">Inquiry</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-ink/10">
                  <tr className="hover:bg-sand/30 transition-colors">
                    <td className="py-3.5 px-3 sm:px-4 font-bold text-ink whitespace-nowrap">
                      <span className="block text-emerald-800 text-[10px] uppercase font-extrabold tracking-wider">Only 2 Plots</span>
                      BPTP Green Oaks
                    </td>
                    <td className="py-3.5 px-3 sm:px-4 text-stone font-medium whitespace-nowrap">Sector 70A, Gurgaon</td>
                    <td className="py-3.5 px-3 sm:px-4 text-ink font-semibold whitespace-nowrap">Residential Plots (East-Facing)</td>
                    <td className="py-3.5 px-3 sm:px-4 text-stone whitespace-nowrap">137 Sq. Yds. (1,233 Sq. Ft)</td>
                    <td className="py-3.5 px-3 sm:px-4 font-serif font-bold text-bronze-d whitespace-nowrap">₹4.11 Cr - ₹4.45 Cr</td>
                    <td className="py-3.5 px-3 sm:px-4 text-right whitespace-nowrap">
                      <button
                        type="button"
                        onClick={() => setActiveProject('bptp')}
                        className="rounded bg-ink px-2.5 sm:px-3 py-1.5 text-xs font-bold uppercase text-white hover:bg-bronze transition cursor-pointer"
                      >
                        Explore
                      </button>
                    </td>
                  </tr>

                  <tr className="hover:bg-sand/30 transition-colors">
                    <td className="py-3.5 px-3 sm:px-4 font-bold text-ink whitespace-nowrap">
                      <span className="block text-blue-800 text-[10px] uppercase font-extrabold tracking-wider">S+4 Approved</span>
                      Adani Plots
                    </td>
                    <td className="py-3.5 px-3 sm:px-4 text-stone font-medium whitespace-nowrap">Sector 63, Golf Ext. Rd</td>
                    <td className="py-3.5 px-3 sm:px-4 text-ink font-semibold whitespace-nowrap">Residential Plots (S+4 Approved)</td>
                    <td className="py-3.5 px-3 sm:px-4 text-stone whitespace-nowrap">170, 253 &amp; 267 Sq. Yd.</td>
                    <td className="py-3.5 px-3 sm:px-4 font-serif font-bold text-bronze-d whitespace-nowrap">₹5.10 Cr - ₹8.81 Cr</td>
                    <td className="py-3.5 px-3 sm:px-4 text-right whitespace-nowrap">
                      <button
                        type="button"
                        onClick={() => setActiveProject('adani')}
                        className="rounded bg-ink px-2.5 sm:px-3 py-1.5 text-xs font-bold uppercase text-white hover:bg-bronze transition cursor-pointer"
                      >
                        Explore
                      </button>
                    </td>
                  </tr>

                  <tr className="hover:bg-sand/30 transition-colors">
                    <td className="py-3.5 px-3 sm:px-4 font-bold text-ink whitespace-nowrap">
                      <span className="block text-purple-800 text-[10px] uppercase font-extrabold tracking-wider">Club Royal &amp; Skydeck</span>
                      TREVOC Royal Residences
                    </td>
                    <td className="py-3.5 px-3 sm:px-4 text-stone font-medium whitespace-nowrap">Sector 56, Golf Course Rd</td>
                    <td className="py-3.5 px-3 sm:px-4 text-ink font-semibold whitespace-nowrap">Luxury Sky Residences</td>
                    <td className="py-3.5 px-3 sm:px-4 text-stone whitespace-nowrap">3 &amp; 4 BHK + Utility (2,642 - 3,380 Sq.Ft)</td>
                    <td className="py-3.5 px-3 sm:px-4 font-serif font-bold text-bronze-d whitespace-nowrap">₹6.60 Cr - ₹8.45+ Cr</td>
                    <td className="py-3.5 px-3 sm:px-4 text-right whitespace-nowrap">
                      <button
                        type="button"
                        onClick={() => setActiveProject('trevoc')}
                        className="rounded bg-ink px-2.5 sm:px-3 py-1.5 text-xs font-bold uppercase text-white hover:bg-bronze transition cursor-pointer"
                      >
                        Explore
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Cross link to Properties directory */}
      <section className="bg-ink py-10 sm:py-12 text-white">
        <div className="wrap flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6">
          <div>
            <span className="kicker !text-bronze-l">Looking for Immediate Plot &amp; Apartment Listings?</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1">
              Browse All Active Listings in Our Properties Directory
            </h2>
            <p className="text-xs sm:text-sm text-[#d3cbbe] mt-1 max-w-[65ch]">
              Filter by size, budget, corridor and plot type across Sector 70A, Sector 56 and Sector 63.
            </p>
          </div>
          <Link to="/properties" className="btn btn-bronze text-xs self-start sm:self-auto shrink-0">
            View Properties Directory <Arrow />
          </Link>
        </div>
      </section>

      <CtaBand title="Schedule a Private VIP Site Visit for Any Current Project" showName={false} />
    </>
  )
}
