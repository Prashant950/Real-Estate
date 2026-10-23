import { useState, useEffect } from 'react'
import Reveal from './Reveal'
import { WhatsAppIcon, Arrow, CalendarBookIcon } from './Icons'
import { company } from '../data/site'
import { useProperties } from '../context/PropertyContext'

export const REAL_ESTATE_VIDEOS = [
  {
    id: 'video-tour-1',
    orderNumber: 1,
    videoSrc: '/video/1.mp4',
    kicker: 'Iconic Luxury Walkthrough #1',
    title: 'Tour #1: Ultra-Luxury High-Rise Penthouse & Sky Duplex',
    category: 'Signature Penthouses & Duplexes',
    location: 'Golf Course Road, DLF Phase 5, Gurugram',
    duration: '00:42',
    resolution: '4K Ultra-HD · Audio Walkthrough',
    priceDisplay: '₹18.50 - 45+ Cr',
    badge: '🎬 Walkthrough #1',
    highlights: [
      '42-Sec High-Definition Walkthrough',
      'Double-Height Living & Panoramic Deck',
      'Private High-Speed Biometric Elevator',
      'Championship Golf Course & City Views',
    ],
    description:
      'Experience an exclusive high-definition walkthrough of this ultra-luxury sky duplex penthouse on the coveted Golf Course Road corridor. Showcasing double-height ceilings, bespoke chandelier details, imported Italian marble finishes, wrap-around sunset deck, and 5-tier private security.',
    stats: [
      { label: 'Duration', value: '00:42 Seconds' },
      { label: 'Asset Type', value: 'Sky Duplex & Penthouse' },
      { label: 'Corridor', value: 'Golf Course Road' },
      { label: 'Status', value: 'Ready to Move / Sanctioned' },
    ],
    specs: {
      position: 'Prime DLF Phase 5 Corridor',
      configuration: '4 & 5 BHK Sky Duplex / Penthouse',
      superArea: '6,850 - 11,200 Sq. Ft',
      elevators: 'Private Biometric High-Speed Lifts',
      parking: '3-4 Covered Multi-Tier Car Parking Slots',
      security: '5-Tier Perimeter & Access Control',
      powerBackup: '100% Dedicated Redundant Power Backup',
      legalStatus: 'RERA Sanctioned & Freehold Registry',
    },
  },
  {
    id: 'video-tour-2',
    orderNumber: 2,
    videoSrc: '/video/2.mp4',
    kicker: 'Iconic Luxury Walkthrough #2',
    title: 'Tour #2: Bespoke Luxury Mansion & Turnkey Designer Floor',
    category: 'Turnkey Designer Floors & Mansions',
    location: 'DLF Phase 1 & 2, Golf Course Ext., Gurugram',
    duration: '00:49',
    resolution: '4K Ultra-HD · Audio Walkthrough',
    priceDisplay: '₹8.50 - 24+ Cr',
    badge: '🎬 Walkthrough #2',
    highlights: [
      '49-Sec Architectural & Interior Tour',
      'Stilt + 4 Floors Approval with Stilt Parking',
      'Imported German Schüco Glazing & Modular Kitchen',
      'Spacious 4 BHK + Home Lounge & Servant Suite',
    ],
    description:
      'An immersive 49-second high-definition walkthrough of a bespoke turnkey designer builder floor and private residence. Features uncompromising structural craftsmanship, Italian statuario flooring, automated ambient mood lighting, designer bath suites, and dedicated multi-car stilt parking.',
    stats: [
      { label: 'Duration', value: '00:49 Seconds' },
      { label: 'Asset Type', value: 'Turnkey Designer Floor' },
      { label: 'Corridor', value: 'DLF Phase 1 / Ext.' },
      { label: 'Status', value: 'Brand New Possession' },
    ],
    specs: {
      position: 'DLF Phase 1 & 2 Prime Boulevard',
      configuration: '4 BHK + Lounge + Servant Quarters',
      superArea: '3,250 - 5,400 Sq. Ft',
      parking: 'Dedicated 2-3 Covered Stilt Car Slots',
      airConditioning: 'Full VRV / VRF Air Filtration',
      ceilingHeight: '11 Ft Clear Architectural Ceilings',
      powerBackup: '100% Uninterrupted Power Backup',
      ownership: 'Clear Freehold Title & Immediate Registry',
    },
  },
  {
    id: 'video-tour-3',
    orderNumber: 3,
    videoSrc: '/video/3.mp4',
    kicker: 'Iconic Luxury Walkthrough #3',
    title: 'Tour #3: Elevated High-Rise Residences & Royal Amenities',
    category: 'Gated Luxury Enclave',
    location: 'Sector 56 & 63, Golf Extension Corridor, Gurugram',
    duration: '00:45',
    resolution: '4K Ultra-HD · Audio Walkthrough',
    priceDisplay: '₹6.60 - 15+ Cr',
    badge: '🎬 Walkthrough #3',
    highlights: [
      '45-Sec Immersive Property Walkthrough',
      'Residences Elevated 80 Ft Above Ground',
      '50,000 Sq. Ft Club Royal & 36,000 Sq. Ft Skydeck',
      'Rooftop Track, Infinity Pool & Heated Spa',
    ],
    description:
      'Immerse yourself in a full tour of elevated luxury living across Gurgaon’s most prestigious development. Highlighting palatial 3 & 4 BHK residences with wrap-around decks, 11 ft ceilings, and multi-tier amenities including temperature-controlled swimming pools, sunken restaurant, and illuminated rooftop track.',
    stats: [
      { label: 'Duration', value: '00:45 Seconds' },
      { label: 'Asset Type', value: 'Elevated Luxury Condos' },
      { label: 'Corridor', value: 'Sector 56 / 63 Corridor' },
      { label: 'Status', value: 'HRERA Registered' },
    ],
    specs: {
      position: 'Sector 56, Golf Course Road Corridor',
      configuration: '3 & 4 BHK + Utility Suites',
      superArea: '2,642 - 3,380 Sq. Ft',
      clubhouse: '50,000 Sq. Ft Club Royal & 36,000 Sq. Ft Skydeck',
      elevation: 'Apartments Start 80 Ft Above Ground',
      security: '5-Tier Multi-Layer Access Control',
      powerBackup: '100% Generator Backup & Treated Water',
      rera: 'HRERA Sanctioned & Approved Project',
    },
  },
]

export default function VideoShowcase() {
  const [activeVideo, setActiveVideo] = useState(null)
  // 'video' (Full Mode) | 'details' (Description Mode) | 'split' (Side-by-Side Mode)
  const [modalView, setModalView] = useState('video')
  const { openBooking } = useProperties()

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setActiveVideo(null)
    }
    if (activeVideo) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [activeVideo])

  const handleOpenVideo = (video, mode = 'video') => {
    setActiveVideo(video)
    setModalView(mode)
  }

  const handleBookVisit = (video) => {
    setActiveVideo(null)
    openBooking({
      id: video.id,
      title: video.title,
      priceDisplay: video.priceDisplay,
      location: video.location,
      category: video.category,
      area: video.stats[1]?.value || 'Prime Luxury',
    })
  }

  const getWhatsAppUrl = (videoTitle) => {
    const text = encodeURIComponent(
      `Hello Real Estate Square, I saw the video tour of "${videoTitle}" on your website and would like to receive verified pricing, floor plans, and arrange a private site visit.`
    )
    return `https://wa.me/${company.whatsapp}?text=${text}`
  }

  return (
    <section id="video-tours" className="relative isolate overflow-hidden bg-[#141312] py-12 md:py-16 text-white scroll-mt-20 border-t border-b border-bronze/20">
      {/* Subtle luxury ambient background glows */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-full bg-bronze/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-bronze-d/15 blur-3xl" />

      <div className="wrap relative">
        {/* Section Header */}
        <Reveal className="mb-10 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-bronze/40 bg-bronze/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-bronze-l mb-3">
            <span className="flex h-2 w-2 rounded-full bg-bronze animate-pulse" />
            <span>Cinematic Property Walkthroughs</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.15] mb-4">
            Experience Prime Real Estate In Motion
          </h2>

          <p className="text-sm sm:text-base text-[#ded8cb] leading-relaxed max-w-2xl mx-auto">
            Take an immersive high-definition walkthrough of iconic luxury penthouses, signature builder floors, and prime gated communities across Gurugram &amp; Delhi NCR.
          </p>
        </Reveal>

        {/* 3 Real Estate Videos Grid: 1.mp4, 2.mp4, 3.mp4 */}
        <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {REAL_ESTATE_VIDEOS.map((video, idx) => (
            <Reveal
              key={video.id}
              delay={idx * 120}
              className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-[#1d1b19] overflow-hidden shadow-2xl transition-all duration-300 hover:border-bronze hover:shadow-[0_20px_45px_-12px_rgba(189,149,77,0.35)] hover:-translate-y-1.5"
            >
              <div>
                {/* Fast-Loading HTML5 Video Preview Thumbnail (Preload metadata for instant loading) */}
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => handleOpenVideo(video, 'video')}
                  onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleOpenVideo(video, 'video')}
                  className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-black cursor-pointer select-none"
                  aria-label={`Watch video tour: ${video.title}`}
                >
                  <video
                    src={`${video.videoSrc}#t=0.001`}
                    preload="metadata"
                    playsInline
                    muted
                    loop
                    onMouseEnter={(e) => {
                      e.currentTarget.play().catch(() => {})
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.pause()
                      e.currentTarget.currentTime = 0.001
                    }}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Dark Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141312] via-black/25 to-black/35 group-hover:via-black/10 transition-all duration-300 pointer-events-none" />

                  {/* Floating Top Badges */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 pointer-events-none">
                    <span className="rounded bg-black/80 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-bronze-l border border-bronze/30 backdrop-blur-md">
                      {video.badge}
                    </span>
                  </div>

                  <div className="absolute top-3 right-3 flex items-center gap-1.5 rounded bg-black/80 px-2.5 py-1 text-[11px] font-semibold text-white/90 border border-white/15 backdrop-blur-md pointer-events-none">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-ping" />
                    <span>{video.duration}</span>
                    <span className="text-white/40">·</span>
                    <span className="text-bronze-l font-bold text-[10px]">{video.resolution.split('·')[0]}</span>
                  </div>

                  {/* Glowing Animated Play Button in center */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="relative flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-bronze text-white shadow-[0_0_30px_rgba(189,149,77,0.7)] transition-all duration-300 group-hover:scale-115 group-hover:bg-bronze-l group-hover:text-ink">
                      {/* Pulse Ring */}
                      <span className="absolute inset-0 rounded-full border-2 border-bronze-l/70 animate-ping opacity-40 pointer-events-none" />
                      {/* Play Triangle Icon */}
                      <svg
                        className="h-6 w-6 ml-1 transition-transform group-hover:translate-x-0.5"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>

                  {/* Category & Price Chip at Bottom of Thumbnail */}
                  <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-xs text-white/90 pointer-events-none">
                    <span className="truncate font-semibold text-[11px] tracking-wide text-bronze-l bg-black/75 px-2 py-0.5 rounded backdrop-blur-sm">
                      {video.category}
                    </span>
                    <span className="font-bold text-white text-[11px] bg-bronze/90 px-2.5 py-0.5 rounded shadow">
                      {video.priceDisplay}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 sm:p-6">
                  <div className="mb-2 flex items-center gap-1.5 text-xs text-[#a8a29e]">
                    <svg className="h-3.5 w-3.5 text-bronze shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                    <span className="truncate">{video.location}</span>
                  </div>

                  <h3
                    onClick={() => handleOpenVideo(video, 'video')}
                    className="font-serif text-lg sm:text-xl font-bold text-white leading-snug mb-3 cursor-pointer group-hover:text-bronze-l transition-colors"
                  >
                    {video.title}
                  </h3>

                  <p className="text-xs text-[#ded8cb]/80 leading-relaxed mb-4 line-clamp-2">
                    {video.description}
                  </p>

                  {/* Highlight Spec Chips */}
                  <div className="mb-5 flex flex-wrap gap-1.5">
                    {video.highlights.slice(0, 3).map((item, hIdx) => (
                      <span
                        key={hIdx}
                        className="inline-flex items-center gap-1 rounded bg-[#2a2825] px-2.5 py-1 text-[11px] font-medium text-[#ded8cb] border border-white/5"
                      >
                        <span className="text-bronze font-bold">✓</span>
                        <span>{item}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-5 pt-0 sm:p-6 sm:pt-0 border-t border-white/5 mt-auto">
                <div className="grid grid-cols-2 gap-2.5 pt-4">
                  <button
                    type="button"
                    onClick={() => handleOpenVideo(video, 'video')}
                    className="cursor-pointer inline-flex items-center justify-center gap-1.5 rounded border border-bronze bg-bronze px-3 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-all duration-200 hover:border-bronze-d hover:bg-bronze-d hover:shadow-lg"
                  >
                    <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                    <span>Play Tour</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleBookVisit(video)}
                    className="cursor-pointer inline-flex items-center justify-center gap-1.5 rounded border border-white/20 bg-transparent px-3 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-all duration-200 hover:border-bronze hover:bg-white/10 hover:text-bronze-l"
                  >
                    <CalendarBookIcon className="h-3.5 w-3.5 text-bronze-l" />
                    <span>Book Visit</span>
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox / Video Player Modal with Full Mode & Optional Description Toggle */}
      {activeVideo && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="video-modal-title"
          className="fixed inset-0 z-[150] flex items-center justify-center bg-black/92 p-2 sm:p-4 backdrop-blur-md animate-fade-in"
          onClick={(e) => e.target === e.currentTarget && setActiveVideo(null)}
        >
          {/* Modal Box */}
          <div
            className={`relative flex flex-col w-full overflow-hidden rounded-2xl border border-bronze/40 bg-[#141312] text-[#f4efe6] shadow-[0_25px_70px_-15px_rgba(0,0,0,0.95)] animate-scale-up transition-all duration-300 ${
              modalView === 'video'
                ? 'max-w-2xl h-[94vh] max-h-[94vh]'
                : modalView === 'split'
                ? 'max-w-5xl h-[94vh] max-h-[94vh]'
                : 'max-w-4xl max-h-[92vh] overflow-y-auto'
            }`}
          >
            {/* Top Sticky Header with Mode Switchers */}
            <div className="sticky top-0 z-30 flex items-center justify-between border-b border-white/10 bg-[#1c1b18]/95 backdrop-blur px-4 sm:px-6 py-3">
              <div className="min-w-0 pr-3">
                <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-widest text-bronze-l block truncate">
                  {activeVideo.category} · {activeVideo.badge}
                </span>
                <h3 id="video-modal-title" className="font-serif text-base sm:text-lg font-bold text-white truncate">
                  {activeVideo.title}
                </h3>
              </div>

              {/* View Mode Toggle Switchers & Close Button */}
              <div className="flex items-center gap-2 shrink-0">
                <div className="inline-flex rounded-lg bg-black/60 p-1 border border-white/10 text-xs">
                  <button
                    type="button"
                    onClick={() => setModalView('video')}
                    className={`cursor-pointer rounded-md px-2.5 sm:px-3 py-1 font-bold transition flex items-center gap-1.5 ${
                      modalView === 'video'
                        ? 'bg-bronze text-white shadow-md'
                        : 'text-white/70 hover:text-white'
                    }`}
                    title="Full Mode Video"
                  >
                    <svg className="h-3 w-3 fill-current" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                    <span>Full Video</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setModalView('details')}
                    className={`cursor-pointer rounded-md px-2.5 sm:px-3 py-1 font-bold transition flex items-center gap-1.5 ${
                      modalView === 'details'
                        ? 'bg-bronze text-white shadow-md'
                        : 'text-white/70 hover:text-white'
                    }`}
                    title="View Property Description & Specifications"
                  >
                    <span>📋 Description</span>
                  </button>

                  {/* Desktop Side-by-side mode */}
                  <button
                    type="button"
                    onClick={() => setModalView('split')}
                    className={`hidden md:inline-flex cursor-pointer rounded-md px-2.5 sm:px-3 py-1 font-bold transition items-center gap-1.5 ${
                      modalView === 'split'
                        ? 'bg-bronze text-white shadow-md'
                        : 'text-white/70 hover:text-white'
                    }`}
                    title="Side-by-Side: Full Video on Left, Description on Right"
                  >
                    <span>◫ Split View</span>
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveVideo(null)}
                  className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-white/10 text-xl font-bold text-white/80 transition hover:bg-bronze hover:text-white ml-1 cursor-pointer"
                  aria-label="Close video player"
                >
                  ×
                </button>
              </div>
            </div>

            {/* ------------------------------------------------------------- */}
            {/* VIEW 1: FULL MODE VIDEO (TALL, IMMERSIVE, MAXIMUM VIEWPORT)  */}
            {/* ------------------------------------------------------------- */}
            {modalView === 'video' && (
              <div className="relative flex-1 flex flex-col justify-between overflow-hidden bg-black">
                {/* Full Height Vertical Video Container */}
                <div className="relative flex-1 flex items-center justify-center w-full h-full p-2 sm:p-3 overflow-hidden">
                  <video
                    key={activeVideo.videoSrc}
                    src={activeVideo.videoSrc}
                    controls
                    autoPlay
                    playsInline
                    preload="auto"
                    className="h-full w-auto max-h-[78vh] aspect-[9/16] object-contain rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.9)] bg-black"
                  />
                </div>

                {/* Floating Bottom Luxury Info & Description Trigger Bar */}
                <div className="sticky bottom-0 z-20 flex flex-wrap items-center justify-between gap-3 border-t border-white/15 bg-black/90 backdrop-blur-md px-4 sm:px-6 py-3">
                  <div className="min-w-0 pr-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-stone block truncate">
                      {activeVideo.location}
                    </span>
                    <span className="font-serif text-base sm:text-lg font-bold text-amber-300">
                      {activeVideo.priceDisplay}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setModalView('details')}
                      className="cursor-pointer inline-flex items-center gap-1.5 rounded-lg border border-bronze bg-bronze px-3.5 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-lg transition hover:bg-bronze-d"
                    >
                      <span>📋 View Description &amp; Details</span>
                      <span>→</span>
                    </button>

                    <a
                      href={getWhatsAppUrl(activeVideo.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg bg-[#25D366] px-3.5 py-2 text-xs font-bold uppercase tracking-wider text-black transition hover:bg-[#1ebd5a] shadow"
                    >
                      <WhatsAppIcon className="h-3.5 w-3.5" />
                      <span className="hidden sm:inline">WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            )}

            {/* ------------------------------------------------------------- */}
            {/* VIEW 2: FULL DESCRIPTION & DETAILS MODE                      */}
            {/* ------------------------------------------------------------- */}
            {modalView === 'details' && (
              <div className="overflow-y-auto">
                {/* Quick Return Bar */}
                <div className="flex items-center justify-between bg-bronze/15 border-b border-bronze/30 px-5 sm:px-6 py-3">
                  <span className="text-xs font-semibold text-bronze-l">
                    Currently Viewing Property Description &amp; Specifications
                  </span>
                  <button
                    type="button"
                    onClick={() => setModalView('video')}
                    className="cursor-pointer inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white bg-bronze hover:bg-bronze-d px-3 py-1.5 rounded-md transition shadow"
                  >
                    <span>◀ Back to Full Video</span>
                  </button>
                </div>

                <div className="p-5 sm:p-7 space-y-6">
                  {/* Quick Metrics Bar */}
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-white/50 block mb-1">Price Range</span>
                      <p className="font-serif text-lg sm:text-xl font-bold text-amber-300">{activeVideo.priceDisplay}</p>
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-white/50 block mb-1">Duration</span>
                      <p className="font-serif text-lg sm:text-xl font-bold text-white">{activeVideo.duration} Full Tour</p>
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-white/50 block mb-1">Asset Category</span>
                      <p className="font-serif text-xs sm:text-sm font-semibold text-white mt-1 truncate">{activeVideo.category}</p>
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-white/50 block mb-1">Location</span>
                      <p className="text-xs sm:text-sm font-bold text-emerald-400 mt-1 truncate">{activeVideo.location.split(',')[0]}</p>
                    </div>
                  </div>

                  {/* Property & Walkthrough Overview */}
                  <div>
                    <h4 className="font-serif text-xl font-bold text-white mb-2">
                      Property &amp; Walkthrough Overview
                    </h4>
                    <p className="text-sm leading-relaxed text-[#c6beb0]">
                      {activeVideo.description}
                    </p>
                  </div>

                  {/* Key Highlights & Tour Features */}
                  {activeVideo.highlights && (
                    <div>
                      <h4 className="font-serif text-lg font-bold text-white mb-3">
                        Key Highlights &amp; Tour Features
                      </h4>
                      <div className="grid gap-2.5 sm:grid-cols-2">
                        {activeVideo.highlights.map((h, i) => (
                          <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#e3ded4] bg-white/[0.03] p-3 rounded-lg border border-white/5">
                            <span className="text-bronze font-bold">✓</span>
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Architectural & Legal Specifications */}
                  {activeVideo.specs && (
                    <div className="rounded-xl border border-white/10 bg-[#1e1c18] p-4 sm:p-5">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-bronze-l mb-3">
                        Architectural &amp; Legal Specifications
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1.5 sm:gap-y-2 text-xs">
                        {Object.entries(activeVideo.specs).map(([key, val]) => (
                          <div key={key} className="flex flex-col sm:flex-row sm:items-center justify-between gap-0.5 sm:gap-2 border-b border-white/5 py-1.5 sm:py-2">
                            <span className="capitalize text-white/50 font-medium shrink-0">{key.replace(/([A-Z])/g, ' $1')}:</span>
                            <span className="font-semibold text-white text-left sm:text-right break-words">{val}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Direct Footer Actions: WhatsApp & Schedule Visit */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
                    <div className="text-xs text-white/60 text-center sm:text-left">
                      Direct Luxury Advisory: <span className="font-bold text-white">+91-8800006689</span>
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-3 w-full sm:w-auto">
                      <a
                        href={getWhatsAppUrl(activeVideo.title)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-black transition hover:bg-[#1ebd5a] shadow-lg font-semibold"
                      >
                        <WhatsAppIcon className="h-4 w-4" />
                        <span>Inquire on WhatsApp</span>
                      </a>

                      <button
                        type="button"
                        onClick={() => handleBookVisit(activeVideo)}
                        className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 rounded-lg border border-bronze bg-bronze px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-bronze-d shadow-lg cursor-pointer"
                      >
                        <CalendarBookIcon className="h-4 w-4" />
                        <span>Schedule Site Visit</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ------------------------------------------------------------- */}
            {/* VIEW 3: SPLIT VIEW (SIDE-BY-SIDE ON DESKTOP)                  */}
            {/* ------------------------------------------------------------- */}
            {modalView === 'split' && (
              <div className="grid grid-cols-1 md:grid-cols-12 flex-1 h-[calc(94vh-60px)] overflow-hidden">
                {/* Left: Full Height Video Player (5 cols) */}
                <div className="md:col-span-5 bg-black flex items-center justify-center p-3 relative border-b md:border-b-0 md:border-r border-white/10">
                  <video
                    key={activeVideo.videoSrc}
                    src={activeVideo.videoSrc}
                    controls
                    autoPlay
                    playsInline
                    preload="auto"
                    className="h-full w-auto max-h-[82vh] aspect-[9/16] object-contain rounded-xl shadow-2xl bg-black"
                  />
                </div>

                {/* Right: Scrollable Property Details (7 cols) */}
                <div className="md:col-span-7 overflow-y-auto p-5 sm:p-6 space-y-5 bg-[#161513]">
                  {/* Quick Metrics Bar */}
                  <div className="grid grid-cols-2 gap-2.5 rounded-xl border border-white/10 bg-white/5 p-3.5 text-center">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-white/50 block">Price Range</span>
                      <p className="font-serif text-base sm:text-lg font-bold text-amber-300">{activeVideo.priceDisplay}</p>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-white/50 block">Duration</span>
                      <p className="font-serif text-base sm:text-lg font-bold text-white">{activeVideo.duration} Tour</p>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-white/50 block">Category</span>
                      <p className="font-serif text-xs font-semibold text-white truncate">{activeVideo.category}</p>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-white/50 block">Location</span>
                      <p className="text-xs font-bold text-emerald-400 truncate">{activeVideo.location.split(',')[0]}</p>
                    </div>
                  </div>

                  {/* Overview */}
                  <div>
                    <h4 className="font-serif text-lg font-bold text-white mb-1.5">Overview</h4>
                    <p className="text-xs leading-relaxed text-[#c6beb0]">
                      {activeVideo.description}
                    </p>
                  </div>

                  {/* Key Highlights */}
                  {activeVideo.highlights && (
                    <div>
                      <h4 className="font-serif text-sm font-bold text-white mb-2">Key Highlights</h4>
                      <div className="grid gap-2">
                        {activeVideo.highlights.map((h, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-[#e3ded4] bg-white/[0.03] p-2 rounded border border-white/5">
                            <span className="text-bronze font-bold">✓</span>
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Specs */}
                  {activeVideo.specs && (
                    <div className="rounded-xl border border-white/10 bg-[#1e1c18] p-4 text-xs">
                      <h4 className="text-[11px] font-bold uppercase tracking-wider text-bronze-l mb-2">
                        Specifications
                      </h4>
                      <div className="divide-y divide-white/5">
                        {Object.entries(activeVideo.specs).map(([key, val]) => (
                          <div key={key} className="flex justify-between py-1.5">
                            <span className="capitalize text-white/50">{key.replace(/([A-Z])/g, ' $1')}:</span>
                            <span className="font-medium text-white">{val}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-2.5 pt-2">
                    <a
                      href={getWhatsAppUrl(activeVideo.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-black transition hover:bg-[#1ebd5a]"
                    >
                      <WhatsAppIcon className="h-4 w-4" />
                      <span>WhatsApp</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => handleBookVisit(activeVideo)}
                      className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg border border-bronze bg-bronze px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-bronze-d cursor-pointer"
                    >
                      <CalendarBookIcon className="h-3.5 w-3.5" />
                      <span>Book Visit</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  )
}
