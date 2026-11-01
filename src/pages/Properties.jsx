import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import CtaBand from '../components/CtaBand'
import CustomSelect from '../components/CustomSelect'
import { Arrow, WhatsAppIcon, CalendarBookIcon } from '../components/Icons'
import PageBanner from '../components/PageBanner'
import Reveal from '../components/Reveal'
import { useProperties } from '../context/PropertyContext'
import { BPTP_PLOTS_INFO, TREVOC_PROJECT_INFO, ADANI_PLOTS_INFO } from '../data/properties'
import { company } from '../data/site'
import usePageMeta from '../hooks/usePageMeta'

export default function Properties() {
  usePageMeta(
    'Verified Luxury Properties & Plots | BPTP Green Oaks, TREVOC Royal Residences & Adani Plots | Real Estate Square',
    'Explore verified properties in Gurugram: BPTP Green Oaks (Sector 70A plots), TREVOC Royal Residences (Sector 56 luxury residences), and Adani Plots (Sector 63). Direct advisory & transparent pricing.'
  )

  const { properties, openDetails, openBooking } = useProperties()

  // Real Estate Filter & Sort States
  const [searchKeyword, setSearchKeyword] = useState('')
  const [selectedProject, setSelectedProject] = useState('all') // 'all' | 'bptp' | 'trevoc' | 'adani'
  const [selectedType, setSelectedType] = useState('all') // 'all' | 'plots' | 'apartments'
  const [budgetRange, setBudgetRange] = useState('all') // 'all' | 'under-5' | '5-7' | '7-plus'
  const [sortBy, setSortBy] = useState('price-asc') // 'price-asc' (Starting se High) | 'price-desc' | 'featured'
  const [isSpotlightExpanded, setIsSpotlightExpanded] = useState(false)
  const [activeSpotlightProject, setActiveSpotlightProject] = useState('bptp')

  const [bptpGalleryIndex, setBptpGalleryIndex] = useState(0)
  const [trevocGalleryIndex, setTrevocGalleryIndex] = useState(0)
  const [adaniGalleryIndex, setAdaniGalleryIndex] = useState(0)

  const bptpGallery = [
    { src: '/images/bptp/plot_2side.jpg', title: 'BPTP Green Oaks — 137 Sq. Yd. 2-Side Open Plot' },
    { src: '/images/bptp/corner_plot.jpg', title: 'BPTP Green Oaks — 137 Sq. Yd. East-Facing Corner Plot' },
    { src: '/images/bptp/clubhouse_park.jpg', title: 'Gated Society Club House & Expansive Central Park' },
  ]

  const trevocGallery = [
    { src: '/images/trevoc/exterior.jpg', title: '2 Iconic Towers from 80 Ft Elevated Podium' },
    { src: '/images/trevoc/living.jpg', title: 'Spacious 3 & 4 BHK + Utility Residences (11 Ft Ceilings)' },
    { src: '/images/trevoc/club_royal.jpg', title: '50,000 Sq. Ft Curated Club Royal & Dining' },
    { src: '/images/trevoc/skydeck.jpg', title: '36,000 Sq. Ft Open-to-Sky Skydeck Experience' },
  ]

  const adaniGallery = [
    { src: '/images/adani/aerial.jpg', title: 'Aerial Drone View of Plotted Enclave' },
    { src: '/images/adani/entrance.jpg', title: 'Grand 24x7 Security Entrance Gatehouse' },
    { src: '/images/adani/stilt_4.jpg', title: 'S+4 Ready-to-Construct Avenue & Green Parks' },
  ]

  // Filter Dropdown Options for Custom Luxury Selector (Desktop Dropdown + Mobile Bottom Sheet)
  const projectOptions = useMemo(() => [
    { value: 'all', label: `All Developments (${properties.length} Properties)`, sublabel: 'BPTP, TREVOC & Adani Enclaves' },
    { value: 'bptp', label: 'BPTP Green Oaks (Sector 70A)', sublabel: '137 Sq. Yd. East-Facing Plots' },
    { value: 'trevoc', label: 'TREVOC Royal Residences (Sector 56)', sublabel: '3 & 4 BHK Sky Residences from 80 Ft' },
    { value: 'adani', label: 'Adani Plots (Sector 63)', sublabel: 'S+4 Approved Plots adjacent DLF The Arbour' },
  ], [properties.length])

  const budgetOptions = useMemo(() => [
    { value: 'all', label: 'All Budgets (₹4.11 Cr – ₹8.81 Cr)', sublabel: 'View all verified residential inventory' },
    { value: 'under-5', label: 'Starting Range: Under ₹5.00 Cr', sublabel: 'BPTP Green Oaks Plots (~₹4.11 Cr & ₹4.45 Cr)' },
    { value: '5-7', label: 'Mid-Tier Range: ₹5.00 Cr – ₹7.00 Cr', sublabel: 'Adani 170 Yd (₹5.10 Cr) & TREVOC 3 BHK (₹6.60 Cr)' },
    { value: '7-plus', label: 'Ultra-Luxury: Above ₹7.00 Cr', sublabel: 'Adani 253/267 Yd & TREVOC 4 BHK Residences' },
  ], [])

  const sortOptions = useMemo(() => [
    { value: 'price-asc', label: 'Price: Low to High (Starting se High) ⚡', sublabel: 'Lowest starting rates first' },
    { value: 'price-desc', label: 'Price: High to Low (High se Low)', sublabel: 'Highest trophy residences first' },
    { value: 'featured', label: 'Featured / Verified First', sublabel: 'Curated priority order' },
  ], [])

  // Filter & Sort calculation (Real Estate Portal Pattern)
  const displayedProperties = useMemo(() => {
    let list = [...properties]

    // 1. Search keyword
    if (searchKeyword.trim()) {
      const q = searchKeyword.toLowerCase().trim()
      list = list.filter((p) => {
        const text = `${p.title} ${p.project} ${p.location} ${p.type} ${p.developer} ${p.tag} ${p.description}`.toLowerCase()
        return text.includes(q)
      })
    }

    // 2. Project filter
    if (selectedProject === 'bptp') {
      list = list.filter((p) => p.project?.toLowerCase().includes('bptp'))
    } else if (selectedProject === 'trevoc') {
      list = list.filter((p) => p.project?.toLowerCase().includes('trevoc'))
    } else if (selectedProject === 'adani') {
      list = list.filter((p) => p.project?.toLowerCase().includes('adani'))
    }

    // 3. Property Type filter
    if (selectedType === 'plots') {
      list = list.filter((p) => p.type?.toLowerCase().includes('plot'))
    } else if (selectedType === 'apartments') {
      list = list.filter((p) => !p.type?.toLowerCase().includes('plot') || p.type?.toLowerCase().includes('residence') || p.categorySlug === 'apartments')
    }

    // 4. Budget Range (Starting se High)
    if (budgetRange === 'under-5') {
      list = list.filter((p) => p.price <= 50000000)
    } else if (budgetRange === '5-7') {
      list = list.filter((p) => p.price >= 45000000 && p.price <= 70000000)
    } else if (budgetRange === '7-plus') {
      list = list.filter((p) => p.price >= 70000000)
    }

    // 5. Sorting
    list.sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price // Starting se High
      if (sortBy === 'price-desc') return b.price - a.price // High to Low
      return 0 // default
    })

    return list
  }, [properties, searchKeyword, selectedProject, selectedType, budgetRange, sortBy])

  // Reset filters helper
  const resetFilters = () => {
    setSearchKeyword('')
    setSelectedProject('all')
    setSelectedType('all')
    setBudgetRange('all')
    setSortBy('price-asc')
  }

  const hasActiveFilters =
    searchKeyword.trim() !== '' ||
    selectedProject !== 'all' ||
    selectedType !== 'all' ||
    budgetRange !== 'all' ||
    sortBy !== 'price-asc'

  return (
    <>
      {/* 1. Page Banner */}
      <PageBanner
        title="Verified Properties & Plots"
        image="slideshow/slide1.jpg"
        alt="Verified Properties and Plots in Gurugram"
      />

      <section className="section bg-[#f5f1ea] pt-5 sm:pt-8 pb-16 md:pb-28">
        <div className="wrap">
          {/* Top Headline & Verified Trust Badge */}
          <div className="mb-6 sm:mb-8 border-b border-ink/10 pb-5 sm:pb-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
              <div>
                <div className="mb-2 inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-bronze/40 bg-sand/60 px-3 py-0.5 sm:px-3.5 sm:py-1 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-bronze-d">
                  <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Curated Luxury Portfolio · Gurugram</span>
                </div>
                <h1 className="h2 !mb-2 text-ink text-2xl sm:text-3xl md:text-4xl">
                  Prime Properties &amp; Plotted Communities
                </h1>
                <p className="max-w-[78ch] text-stone text-xs sm:text-sm md:text-base leading-relaxed">
                  Discover verified residential plots and signature residences across <strong className="text-ink font-semibold">BPTP Green Oaks (Sector 70A)</strong>, <strong className="text-ink font-semibold">TREVOC Royal Residences (Sector 56)</strong>, and <strong className="text-ink font-semibold">Adani Plots (Sector 63)</strong>. Complete title verification, transparent pricing, and direct luxury advisory.
                </p>
              </div>

              {/* Badges: Symmetrical Grid on Mobile */}
              <div className="grid grid-cols-2 gap-2 w-full sm:w-auto sm:flex sm:items-center shrink-0">
                <span className="rounded-xl border border-bronze/30 bg-white px-3 py-2 text-[11px] sm:text-xs font-bold text-ink shadow-xs text-center flex items-center justify-center gap-1.5">
                  ✓ 100% Title Verified
                </span>
                <span className="rounded-xl bg-emerald-700 px-3 py-2 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-white shadow-xs text-center flex items-center justify-center">
                  Direct Partner
                </span>
              </div>
            </div>
          </div>

          {/* 2. Real Estate Portal Filter Suite (Starting se High Range & Quick Interactive Filters) */}
          <div className="mb-6 sm:mb-8 rounded-2xl border border-bronze/30 bg-white p-4 sm:p-6 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.1)]">
            {/* Header: Title + Results Count + Clear Button */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-ink/10 pb-3 mb-4">
              <div>
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-bronze block">
                  REAL ESTATE PROPERTY FINDER
                </span>
                <h2 className="font-serif text-lg sm:text-xl font-bold text-ink">
                  Filter by Price Range, Project &amp; Asset Type
                </h2>
              </div>
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-sand/70 px-3 py-1 text-xs font-bold text-ink border border-ink/10">
                  {displayedProperties.length} Properties Match
                </span>
                {hasActiveFilters && (
                  <button
                    type="button"
                    onClick={resetFilters}
                    className="text-xs font-bold text-red-600 hover:text-red-700 underline cursor-pointer"
                  >
                    Reset All
                  </button>
                )}
              </div>
            </div>

            {/* Core Real Estate Filter Dropdowns: Responsive 4-Column Grid */}
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 mb-4">
              {/* 1. Keyword Search */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-stone mb-1">
                  Search Property / Sector
                </label>
                <div className="relative">
                  <input
                    type="search"
                    value={searchKeyword}
                    onChange={(e) => setSearchKeyword(e.target.value)}
                    placeholder="e.g. BPTP, Sector 70A, 3 BHK..."
                    className="w-full rounded-xl border border-ink/15 bg-sand/20 px-3.5 py-2.5 text-xs text-ink placeholder:text-stone/60 focus:border-bronze focus:bg-white focus:outline-none"
                  />
                  {searchKeyword && (
                    <button
                      type="button"
                      onClick={() => setSearchKeyword('')}
                      className="absolute right-3 top-2.5 text-xs text-stone hover:text-ink font-bold"
                    >
                      ✕
                    </button>
                  )}
                </div>
              </div>

              {/* 2. Development / Project */}
              <CustomSelect
                label="Development / Project"
                value={selectedProject}
                onChange={(val) => {
                  setSelectedProject(val)
                  if (val !== 'all') setActiveSpotlightProject(val)
                }}
                options={projectOptions}
              />

              {/* 3. Budget / Price Range ("Starting se High") */}
              <CustomSelect
                label="Price Range (Starting se High)"
                value={budgetRange}
                onChange={setBudgetRange}
                options={budgetOptions}
              />

              {/* 4. Sort By: Starting se High */}
              <CustomSelect
                label="Sort Order"
                value={sortBy}
                onChange={setSortBy}
                options={sortOptions}
              />
            </div>

           

            {/* Active Filter Chips Strip */}
            {hasActiveFilters && (
              <div className="mt-3 pt-3 border-t border-ink/10 flex flex-wrap items-center gap-1.5 text-xs">
                <span className="text-[11px] text-stone font-semibold">Active Filters:</span>
                {searchKeyword && (
                  <span className="inline-flex items-center gap-1 rounded-md bg-sand px-2 py-0.5 text-[11px] font-bold text-ink">
                    Keyword: "{searchKeyword}"
                    <button type="button" onClick={() => setSearchKeyword('')} className="hover:text-red-600 font-bold ml-0.5">✕</button>
                  </span>
                )}
                {selectedProject !== 'all' && (
                  <span className="inline-flex items-center gap-1 rounded-md bg-sand px-2 py-0.5 text-[11px] font-bold text-ink capitalize">
                    Project: {selectedProject}
                    <button type="button" onClick={() => setSelectedProject('all')} className="hover:text-red-600 font-bold ml-0.5">✕</button>
                  </span>
                )}
                {selectedType !== 'all' && (
                  <span className="inline-flex items-center gap-1 rounded-md bg-sand px-2 py-0.5 text-[11px] font-bold text-ink capitalize">
                    Type: {selectedType}
                    <button type="button" onClick={() => setSelectedType('all')} className="hover:text-red-600 font-bold ml-0.5">✕</button>
                  </span>
                )}
                {budgetRange !== 'all' && (
                  <span className="inline-flex items-center gap-1 rounded-md bg-sand px-2 py-0.5 text-[11px] font-bold text-ink">
                    Range: {budgetRange === 'under-5' ? '< ₹5 Cr' : budgetRange === '5-7' ? '₹5–₹7 Cr' : '> ₹7 Cr'}
                    <button type="button" onClick={() => setBudgetRange('all')} className="hover:text-red-600 font-bold ml-0.5">✕</button>
                  </span>
                )}
                {sortBy !== 'price-asc' && (
                  <span className="inline-flex items-center gap-1 rounded-md bg-sand px-2 py-0.5 text-[11px] font-bold text-ink">
                    Sort: {sortBy === 'price-desc' ? 'High to Low' : 'Featured'}
                    <button type="button" onClick={() => setSortBy('price-asc')} className="hover:text-red-600 font-bold ml-0.5">✕</button>
                  </span>
                )}
                <button
                  type="button"
                  onClick={resetFilters}
                  className="text-[11px] text-bronze-d hover:text-ink font-bold ml-1 cursor-pointer underline"
                >
                  Clear all
                </button>
              </div>
            )}
          </div>

          {/* Project Deep Dive Selector Tabs (Shown only when Deep Dive is expanded) */}
          {isSpotlightExpanded && (
            <div className="mb-6 flex flex-wrap items-center justify-between gap-2 border-b border-ink/10 pb-3">
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-stone mr-1">
                  Select Project Deep Dive:
                </span>
                <button
                  type="button"
                  onClick={() => setActiveSpotlightProject('bptp')}
                  className={`rounded-lg px-3 py-1.5 text-xs font-bold transition cursor-pointer ${
                    activeSpotlightProject === 'bptp'
                      ? 'bg-emerald-700 text-white shadow-xs'
                      : 'bg-white border border-ink/15 text-ink hover:bg-sand/40'
                  }`}
                >
                  BPTP Green Oaks (Sec 70A)
                </button>
                <button
                  type="button"
                  onClick={() => setActiveSpotlightProject('trevoc')}
                  className={`rounded-lg px-3 py-1.5 text-xs font-bold transition cursor-pointer ${
                    activeSpotlightProject === 'trevoc'
                      ? 'bg-purple-700 text-white shadow-xs'
                      : 'bg-white border border-ink/15 text-ink hover:bg-sand/40'
                  }`}
                >
                  TREVOC Royal (Sec 56)
                </button>
                <button
                  type="button"
                  onClick={() => setActiveSpotlightProject('adani')}
                  className={`rounded-lg px-3 py-1.5 text-xs font-bold transition cursor-pointer ${
                    activeSpotlightProject === 'adani'
                      ? 'bg-blue-700 text-white shadow-xs'
                      : 'bg-white border border-ink/15 text-ink hover:bg-sand/40'
                  }`}
                >
                  Adani Plots (Sec 63)
                </button>
              </div>

              <button
                type="button"
                onClick={() => setIsSpotlightExpanded(false)}
                className="text-xs font-semibold text-stone hover:text-ink cursor-pointer ml-auto"
              >
                ✕ Close Deep Dive
              </button>
            </div>
          )}

          {/* 3. DYNAMIC PROJECT SPOTLIGHT BOX (Deep Dive) */}
          {/* A. BPTP Green Oaks Spotlight */}
          {isSpotlightExpanded && (selectedProject === 'bptp' || (selectedProject === 'all' && activeSpotlightProject === 'bptp')) && (
            <div className="mb-10 sm:mb-12 rounded-2xl sm:rounded-3xl border border-bronze/30 bg-white p-4 sm:p-7 shadow-xl">
              <div className="mb-5 sm:mb-6 border-b border-ink/10 pb-4">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 sm:gap-4">
                  <div className="min-w-0 flex-1">
                    <div className="inline-flex items-center gap-2 rounded-lg bg-emerald-50 border border-emerald-200 px-3 py-1 text-[11px] sm:text-xs font-bold text-emerald-800 tracking-wide mb-2 max-w-full">
                      <span className="h-2 w-2 rounded-full bg-emerald-600 animate-pulse shrink-0" />
                      <span className="leading-snug break-words">Featured Plotted Community · Sector 70A, Gurgaon</span>
                    </div>
                    <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-ink leading-tight">
                      BPTP GREEN OAKS — Sector 70A
                    </h2>
                    <p className="text-xs sm:text-sm text-stone leading-relaxed mt-1.5 max-w-[70ch]">
                      Premium gated plotted society featuring East-Facing 137 Sq. Yds. plots, exclusive club house, and expansive central park.
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 shrink-0 pt-1">
                    <span className="rounded-lg bg-emerald-700 text-white px-3 py-1.5 text-xs font-bold uppercase tracking-wider shadow-xs">
                      Only 2 Plots Available
                    </span>
                    <span className="rounded-lg bg-amber-100 text-amber-900 border border-amber-300 px-3 py-1.5 text-xs font-bold shadow-xs">
                      East-Facing
                    </span>
                  </div>
                </div>
              </div>

              {/* Media & Key Project Details Grid */}
              <div className="grid gap-6 lg:grid-cols-12 items-stretch mb-6">
                {/* Left: Gallery Showcase (7 cols) */}
                <div className="lg:col-span-7 flex flex-col justify-between overflow-hidden rounded-xl border border-ink/10 bg-sand/20 p-3 sm:p-4">
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg bg-ink">
                    <img
                      src={bptpGallery[bptpGalleryIndex].src}
                      alt={bptpGallery[bptpGalleryIndex].title}
                      decoding="async"
                      className="h-full w-full object-cover transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20" />
                    <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                      <div>
                        <span className="rounded bg-bronze px-2 py-0.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-white shadow">
                          Sector 70A, Gurgaon
                        </span>
                        <h4 className="font-serif text-base sm:text-xl font-bold text-white mt-1 drop-shadow">
                          {bptpGallery[bptpGalleryIndex].title}
                        </h4>
                      </div>
                      <span className="text-[11px] sm:text-xs text-amber-200 font-semibold bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm">
                        137 Sq. Yds. Each
                      </span>
                    </div>
                  </div>

                  {/* Thumbnails */}
                  <div className="mt-3 grid grid-cols-3 gap-2">
                    {bptpGallery.map((g, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setBptpGalleryIndex(idx)}
                        className={`relative overflow-hidden rounded-md border-2 transition cursor-pointer aspect-[16/10] ${bptpGalleryIndex === idx
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
                <div className="lg:col-span-5 flex flex-col justify-between rounded-xl border border-ink/10 bg-ivory/50 p-3.5 sm:p-5">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-bronze block mb-1">
                      PROJECT SPECIFICATION &amp; USP
                    </span>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-ink mb-2.5">
                      Key Project Details
                    </h3>

                    <div className="overflow-hidden rounded-lg border border-ink/10 text-[11px] sm:text-xs">
                      <div className="grid grid-cols-2 divide-x divide-ink/10 border-b border-ink/10 bg-sand/60 p-2 sm:p-2.5 font-bold text-ink">
                        <span>DETAIL</span>
                        <span className="pl-2">INFORMATION</span>
                      </div>
                      <div className="divide-y divide-ink/10">
                        <div className="grid grid-cols-2 divide-x divide-ink/10 p-2 sm:p-2.5">
                          <span className="font-bold text-ink">Location</span>
                          <span className="pl-2 text-stone">{BPTP_PLOTS_INFO.location}</span>
                        </div>
                        <div className="grid grid-cols-2 divide-x divide-ink/10 p-2 sm:p-2.5 bg-sand/20">
                          <span className="font-bold text-ink">Property Type</span>
                          <span className="pl-2 text-emerald-800 font-semibold">{BPTP_PLOTS_INFO.propertyType}</span>
                        </div>
                        <div className="grid grid-cols-2 divide-x divide-ink/10 p-2 sm:p-2.5">
                          <span className="font-bold text-ink">Available Inventory</span>
                          <span className="pl-2 text-red-700 font-bold">{BPTP_PLOTS_INFO.availableInventory}</span>
                        </div>
                        <div className="grid grid-cols-2 divide-x divide-ink/10 p-2 sm:p-2.5 bg-sand/20">
                          <span className="font-bold text-ink">Plot Size</span>
                          <span className="pl-2 text-ink font-semibold">{BPTP_PLOTS_INFO.plotSize}</span>
                        </div>
                        <div className="grid grid-cols-2 divide-x divide-ink/10 p-2 sm:p-2.5">
                          <span className="font-bold text-ink">Facing</span>
                          <span className="pl-2 text-emerald-800 font-bold">{BPTP_PLOTS_INFO.facing}</span>
                        </div>
                        <div className="grid grid-cols-2 divide-x divide-ink/10 p-2 sm:p-2.5 bg-sand/20">
                          <span className="font-bold text-ink">Commission</span>
                          <span className="pl-2 text-bronze-d font-bold">{BPTP_PLOTS_INFO.commission}</span>
                        </div>
                        <div className="grid grid-cols-2 divide-x divide-ink/10 p-2 sm:p-2.5">
                          <span className="font-bold text-ink">Key Features</span>
                          <span className="pl-2 text-stone text-[10px] sm:text-[11px]">Gated Society, Club, Huge Park</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Direct Contact Actions */}
                  <div className="mt-4 flex flex-col sm:flex-row gap-2">
                    <a
                      href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent('Hello Real Estate Square, I am interested in BPTP Green Oaks Sector 70A plots (137 Sq. Yds. East-Facing). Please share pricing and site visit details.')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg bg-[#25D366] px-3.5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow transition hover:bg-[#1ebd59]"
                    >
                      <WhatsAppIcon className="h-4 w-4" />
                      <span>WhatsApp</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => openBooking(properties[0])}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg bg-ink px-3.5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow transition hover:bg-bronze cursor-pointer"
                    >
                      <CalendarBookIcon className="h-4 w-4 text-bronze-l" />
                      <span>Book Visit</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Plot Options & Pricing Table */}
              <div className="rounded-xl border border-ink/10 bg-ivory/60 p-3 sm:p-5">
                <div className="mb-2 sm:mb-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <h4 className="font-serif text-base sm:text-lg font-bold text-ink">
                    Plot Options &amp; Pricing — BPTP Green Oaks
                  </h4>
                  <span className="text-[10px] text-stone font-medium sm:hidden block">
                    ← Swipe sideways to view full rates →
                  </span>
                </div>

                <div className="overflow-x-auto -mx-2 px-2 sm:mx-0 sm:px-0 no-scrollbar">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[540px]">
                    <thead>
                      <tr className="border-b-2 border-bronze/40 bg-sand/50 text-[11px] sm:text-xs uppercase tracking-wider text-ink font-bold">
                        <th className="py-2.5 px-3">Plot Option</th>
                        <th className="py-2.5 px-3">Plot Size</th>
                        <th className="py-2.5 px-3">Facing</th>
                        <th className="py-2.5 px-3">Rate / Sq. Yd.</th>
                        <th className="py-2.5 px-3">Approx. Price</th>
                        <th className="py-2.5 px-3 text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-ink/10">
                      {BPTP_PLOTS_INFO.rates.map((row, idx) => (
                        <tr key={idx} className="hover:bg-sand/30 transition-colors">
                          <td className="py-2.5 px-3 font-bold text-ink">
                            ● {row.type}
                          </td>
                          <td className="py-2.5 px-3 text-stone">
                            {row.size} ({row.sqft})
                          </td>
                          <td className="py-2.5 px-3 text-emerald-800 font-semibold">
                            {row.facing}
                          </td>
                          <td className="py-2.5 px-3 font-bold text-bronze-d">
                            {row.rate}
                          </td>
                          <td className="py-2.5 px-3 font-serif font-bold text-sm sm:text-base text-ink">
                            {row.priceDisplay}
                          </td>
                          <td className="py-2.5 px-3 text-right">
                            <button
                              type="button"
                              onClick={() => openBooking(properties.find((p) => p.id.includes('bptp')) || properties[0])}
                              className="inline-flex items-center gap-1 rounded bg-ink px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-white transition hover:bg-bronze cursor-pointer"
                            >
                              <span>Book</span>
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

          {/* B. TREVOC Royal Residences Spotlight */}
          {isSpotlightExpanded && (selectedProject === 'trevoc' || (selectedProject === 'all' && activeSpotlightProject === 'trevoc')) && (
            <div className="mb-10 sm:mb-12 rounded-2xl sm:rounded-3xl border border-bronze/30 bg-white p-4 sm:p-7 shadow-xl">
              <div className="mb-5 sm:mb-6 border-b border-ink/10 pb-4">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 sm:gap-4">
                  <div className="min-w-0 flex-1">
                    <div className="inline-flex items-center gap-2 rounded-lg bg-purple-50 border border-purple-200 px-3 py-1 text-[11px] sm:text-xs font-bold text-purple-900 tracking-wide mb-2 max-w-full">
                      <span className="h-2 w-2 rounded-full bg-purple-700 animate-pulse shrink-0" />
                      <span className="leading-snug break-words">Ultra-Luxury Sky Residences · Sector 56, Golf Course Road</span>
                    </div>
                    <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-ink leading-tight">
                      TREVOC ROYAL RESIDENCES — Sector 56
                    </h2>
                    <p className="text-xs sm:text-sm text-stone leading-relaxed mt-1.5 max-w-[70ch]">
                      172 exclusive residences across 2 iconic towers with 50,000 sq. ft Club Royal and 36,000 sq. ft Skydeck.
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 shrink-0 pt-1">
                    <span className="rounded-lg bg-ink text-bronze-l px-3 py-1.5 text-xs font-bold uppercase tracking-wider shadow-xs">
                      172 Residences Only
                    </span>
                    <span className="rounded-lg bg-purple-100 text-purple-950 border border-purple-300 px-3 py-1.5 text-xs font-bold shadow-xs">
                      Elevated 80 Ft
                    </span>
                  </div>
                </div>
              </div>

              {/* Media & Key Details */}
              <div className="grid gap-6 lg:grid-cols-12 items-stretch mb-6">
                <div className="lg:col-span-7 flex flex-col justify-between overflow-hidden rounded-xl border border-ink/10 bg-sand/20 p-3 sm:p-4">
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg bg-ink">
                    <img
                      src={trevocGallery[trevocGalleryIndex].src}
                      alt={trevocGallery[trevocGalleryIndex].title}
                      decoding="async"
                      className="h-full w-full object-cover transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20" />
                    <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                      <div>
                        <span className="rounded bg-bronze px-2 py-0.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-white shadow">
                          Sector 56, Golf Course Road
                        </span>
                        <h4 className="font-serif text-base sm:text-xl font-bold text-white mt-1 drop-shadow">
                          {trevocGallery[trevocGalleryIndex].title}
                        </h4>
                      </div>
                      <span className="text-[11px] sm:text-xs text-amber-200 font-semibold bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm">
                        2 Iconic Towers
                      </span>
                    </div>
                  </div>

                  <div className="mt-3 flex gap-2 overflow-x-auto no-scrollbar pb-1">
                    {trevocGallery.map((g, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setTrevocGalleryIndex(idx)}
                        className={`relative h-14 w-20 sm:h-16 sm:w-24 shrink-0 overflow-hidden rounded-md border-2 transition cursor-pointer ${trevocGalleryIndex === idx
                            ? 'border-bronze ring-2 ring-bronze/40 scale-[1.02]'
                            : 'border-transparent opacity-70 hover:opacity-100'
                          }`}
                      >
                        <img src={g.src} alt={g.title} loading="lazy" decoding="async" className="h-full w-full object-cover" />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5 flex flex-col justify-between rounded-xl border border-ink/10 bg-ivory/50 p-3.5 sm:p-5">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-bronze block mb-1">
                      PROJECT OVERVIEW
                    </span>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-ink mb-2.5">
                      Key Project Details
                    </h3>

                    <div className="overflow-hidden rounded-lg border border-ink/10 text-[11px] sm:text-xs">
                      <div className="divide-y divide-ink/10">
                        <div className="grid grid-cols-2 divide-x divide-ink/10 p-2 sm:p-2.5">
                          <span className="font-bold text-ink">Location</span>
                          <span className="pl-2 text-stone">{TREVOC_PROJECT_INFO.location}</span>
                        </div>
                        <div className="grid grid-cols-2 divide-x divide-ink/10 p-2 sm:p-2.5 bg-sand/20">
                          <span className="font-bold text-ink">Total Residences</span>
                          <span className="pl-2 text-ink font-semibold">172 residences (2 towers)</span>
                        </div>
                        <div className="grid grid-cols-2 divide-x divide-ink/10 p-2 sm:p-2.5">
                          <span className="font-bold text-ink">Configurations</span>
                          <span className="pl-2 text-emerald-800 font-bold">3 &amp; 4 BHK + Utility</span>
                        </div>
                        <div className="grid grid-cols-2 divide-x divide-ink/10 p-2 sm:p-2.5 bg-sand/20">
                          <span className="font-bold text-ink">3 BHK + Utility</span>
                          <span className="pl-2 text-ink font-semibold">2,642 sq. ft</span>
                        </div>
                        <div className="grid grid-cols-2 divide-x divide-ink/10 p-2 sm:p-2.5">
                          <span className="font-bold text-ink">4 BHK + Utility</span>
                          <span className="pl-2 text-ink font-semibold">3,380 sq. ft</span>
                        </div>
                        <div className="grid grid-cols-2 divide-x divide-ink/10 p-2 sm:p-2.5 bg-sand/20">
                          <span className="font-bold text-ink">Club Royal</span>
                          <span className="pl-2 text-bronze-d font-bold">50,000 Sq. Ft Club</span>
                        </div>
                        <div className="grid grid-cols-2 divide-x divide-ink/10 p-2 sm:p-2.5">
                          <span className="font-bold text-ink">Skydeck</span>
                          <span className="pl-2 text-purple-800 font-bold">36,000 Sq. Ft Rooftop</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-col sm:flex-row gap-2">
                    <Link
                      to="/projects"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg bg-ink px-3.5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow transition hover:bg-bronze text-center"
                    >
                      <span>Explore Project Page →</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* C. Adani Plots Spotlight */}
          {isSpotlightExpanded && (selectedProject === 'adani' || (selectedProject === 'all' && activeSpotlightProject === 'adani')) && (
            <div className="mb-10 sm:mb-12 rounded-2xl sm:rounded-3xl border border-bronze/30 bg-white p-4 sm:p-7 shadow-xl">
              <div className="mb-5 sm:mb-6 border-b border-ink/10 pb-4">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 sm:gap-4">
                  <div className="min-w-0 flex-1">
                    <div className="inline-flex items-center gap-2 rounded-lg bg-blue-50 border border-blue-200 px-3 py-1 text-[11px] sm:text-xs font-bold text-blue-900 tracking-wide mb-2 max-w-full">
                      <span className="h-2 w-2 rounded-full bg-blue-700 animate-pulse shrink-0" />
                      <span className="leading-snug break-words">S+4 Map Approved Plotted Enclave · Sector 63</span>
                    </div>
                    <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-ink leading-tight">
                      ADANI PLOTS — Sector 63, Gurugram
                    </h2>
                    <p className="text-xs sm:text-sm text-stone leading-relaxed mt-1.5 max-w-[70ch]">
                      170, 253 and 267 Sq. Yd. plots adjacent to DLF The Arbour with sanctioned Stilt + 4 Floors map approvals.
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 shrink-0 pt-1">
                    <span className="rounded-lg bg-emerald-700 text-white px-3 py-1.5 text-xs font-bold uppercase tracking-wider shadow-xs">
                      Ready to Construct
                    </span>
                    <span className="rounded-lg bg-sand text-ink border border-ink/15 px-3 py-1.5 text-xs font-bold shadow-xs">
                      60–90 Days Payment
                    </span>
                  </div>
                </div>
              </div>

              {/* Media & Key Details */}
              <div className="grid gap-6 lg:grid-cols-12 items-stretch mb-6">
                <div className="lg:col-span-7 flex flex-col justify-between overflow-hidden rounded-xl border border-ink/10 bg-sand/20 p-3 sm:p-4">
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg bg-ink">
                    <img
                      src={adaniGallery[adaniGalleryIndex].src}
                      alt={adaniGallery[adaniGalleryIndex].title}
                      decoding="async"
                      className="h-full w-full object-cover transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20" />
                    <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                      <div>
                        <span className="rounded bg-bronze px-2 py-0.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-white shadow">
                          Sector 63, Gurugram
                        </span>
                        <h4 className="font-serif text-base sm:text-xl font-bold text-white mt-1 drop-shadow">
                          {adaniGallery[adaniGalleryIndex].title}
                        </h4>
                      </div>
                      <span className="text-[11px] sm:text-xs text-amber-200 font-semibold bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm">
                        Adjacent DLF The Arbour
                      </span>
                    </div>
                  </div>

                  <div className="mt-3 grid grid-cols-3 gap-2">
                    {adaniGallery.map((g, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setAdaniGalleryIndex(idx)}
                        className={`relative overflow-hidden rounded-md border-2 transition cursor-pointer aspect-[16/10] ${adaniGalleryIndex === idx
                            ? 'border-bronze ring-2 ring-bronze/40 scale-[1.02]'
                            : 'border-transparent opacity-70 hover:opacity-100'
                          }`}
                      >
                        <img src={g.src} alt={g.title} loading="lazy" decoding="async" className="h-full w-full object-cover" />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5 flex flex-col justify-between rounded-xl border border-ink/10 bg-ivory/50 p-3.5 sm:p-5">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-bronze block mb-1">
                      PROJECT SPECIFICATION
                    </span>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-ink mb-2.5">
                      Adani Plots Details
                    </h3>

                    <div className="overflow-hidden rounded-lg border border-ink/10 text-[11px] sm:text-xs">
                      <div className="divide-y divide-ink/10">
                        <div className="grid grid-cols-2 divide-x divide-ink/10 p-2 sm:p-2.5">
                          <span className="font-bold text-ink">Location</span>
                          <span className="pl-2 text-stone">{ADANI_PLOTS_INFO.location}</span>
                        </div>
                        <div className="grid grid-cols-2 divide-x divide-ink/10 p-2 sm:p-2.5 bg-sand/20">
                          <span className="font-bold text-ink">Position</span>
                          <span className="pl-2 text-emerald-800 font-semibold">{ADANI_PLOTS_INFO.position}</span>
                        </div>
                        <div className="grid grid-cols-2 divide-x divide-ink/10 p-2 sm:p-2.5">
                          <span className="font-bold text-ink">Plot Sizes</span>
                          <span className="pl-2 text-ink font-semibold">{ADANI_PLOTS_INFO.plotSizes}</span>
                        </div>
                        <div className="grid grid-cols-2 divide-x divide-ink/10 p-2 sm:p-2.5 bg-sand/20">
                          <span className="font-bold text-ink">Floors Approved</span>
                          <span className="pl-2 text-bronze-d font-bold">{ADANI_PLOTS_INFO.floors}</span>
                        </div>
                        <div className="grid grid-cols-2 divide-x divide-ink/10 p-2 sm:p-2.5">
                          <span className="font-bold text-ink">Power Infrastructure</span>
                          <span className="pl-2 text-stone">{ADANI_PLOTS_INFO.power}</span>
                        </div>
                        <div className="grid grid-cols-2 divide-x divide-ink/10 p-2 sm:p-2.5 bg-sand/20">
                          <span className="font-bold text-ink">Payment Term</span>
                          <span className="pl-2 text-ink font-bold">{ADANI_PLOTS_INFO.paymentTerm}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-col sm:flex-row gap-2">
                    <a
                      href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent('Hello Real Estate Square, I am interested in Adani Plots Sector 63. Please share availability and payment schedule.')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg bg-[#25D366] px-3.5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow transition hover:bg-[#1ebd59]"
                    >
                      <WhatsAppIcon className="h-4 w-4" />
                      <span>Inquire on WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 4. Filter / Header Bar for Inventory Grid */}
          <div className="mb-5 sm:mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 rounded-xl border border-ink/10 bg-white p-3.5 sm:p-4 shadow-xs">
            <div>
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-stone block">
                Verified Inventory
              </span>
              <h3 className="font-serif text-base sm:text-lg font-bold text-ink">
                Available Plots &amp; Residences Directory
              </h3>
            </div>

            <div className="flex flex-wrap items-center gap-2 text-xs text-stone font-medium">
              <span className="font-bold text-ink bg-sand/60 px-2 sm:px-2.5 py-1 rounded-md border border-ink/5 text-[11px] sm:text-xs">
                {displayedProperties.length} Properties
              </span>
              <span className="text-[11px] sm:text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 sm:px-2.5 py-1 rounded-md">
                {sortBy === 'price-asc'
                  ? '⚡ Sorted: Starting se High'
                  : sortBy === 'price-desc'
                  ? 'Sorted: High to Low'
                  : 'Sorted: Featured'}
              </span>
            </div>
          </div>

          {/* 5. LIVE PROPERTY INVENTORY CARDS GRID OR EMPTY STATE */}
          {displayedProperties.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-ink/20 bg-white p-8 sm:p-12 text-center my-6">
              <div className="mx-auto h-12 w-12 rounded-full bg-sand/60 flex items-center justify-center text-xl mb-3">
                🔍
              </div>
              <h4 className="font-serif text-lg font-bold text-ink mb-1">
                No properties match your current price or type filter
              </h4>
              <p className="text-xs sm:text-sm text-stone max-w-[45ch] mx-auto mb-4">
                Try selecting a different price range bracket or clear your search to view all verified properties.
              </p>
              <button
                type="button"
                onClick={resetFilters}
                className="inline-flex items-center gap-1.5 rounded-lg bg-ink px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-bronze transition shadow-sm cursor-pointer"
              >
                Reset Filters (View All {properties.length} Properties)
              </button>
            </div>
          ) : (
            <div className="grid gap-5 sm:gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {displayedProperties.map((p, idx) => (
              <Reveal
                key={p.id}
                delay={idx * 40}
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20" />

                  {/* Top Badges */}
                  <div className="absolute top-2.5 inset-x-2.5 sm:top-3 sm:inset-x-3 flex items-center justify-between gap-1.5">
                    <span className="rounded bg-emerald-800/90 px-2 sm:px-2.5 py-0.5 sm:py-1 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm shadow">
                      {p.tag}
                    </span>
                    <span className="rounded bg-black/60 px-2 py-0.5 text-[9px] sm:text-[10px] font-semibold text-white/90 backdrop-blur-sm">
                      {p.bedrooms > 0 ? `${p.bedrooms} BHK` : p.plotSizeYards || p.area.split('(')[0]}
                    </span>
                  </div>

                  {/* Bottom Rate & Price Tag */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-3 sm:left-3 sm:right-3 flex items-baseline justify-between">
                    <div>
                      {p.rateDisplay && (
                        <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-widest text-white/80 block">
                          Rate: {p.rateDisplay}
                        </span>
                      )}
                      <span className="font-serif text-xl sm:text-2xl font-bold text-white drop-shadow">
                        {p.priceDisplay}
                      </span>
                    </div>
                    <span className="text-[10px] sm:text-xs text-amber-200 font-semibold bg-black/50 px-2 py-0.5 rounded backdrop-blur-sm">
                      {p.developer}
                    </span>
                  </div>
                </div>

                {/* Details Body */}
                <div className="flex flex-1 flex-col justify-between p-4 sm:p-6">
                  <div>
                    <div className="flex items-center justify-between gap-1.5 mb-1.5">
                      <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-bronze truncate">
                        {p.type}
                      </span>
                      {p.facing && (
                        <span className="text-[10px] sm:text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 shrink-0">
                          {p.facing}
                        </span>
                      )}
                    </div>

                    <h3 className="font-serif text-lg sm:text-xl font-bold leading-snug text-ink mb-1.5 group-hover:text-bronze-d transition-colors">
                      {p.title}
                    </h3>

                    <p className="flex items-center gap-1 text-xs text-stone mb-3">
                      <svg className="h-3.5 w-3.5 text-bronze shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="font-medium text-ink truncate">{p.location}</span>
                    </p>

                    {/* Spec Chips (Mobile Compact) */}
                    <div className="mb-3 grid grid-cols-2 gap-1.5 text-[10px] sm:text-xs">
                      {p.specs?.community && (
                        <div className="rounded-lg bg-sand/40 border border-ink/5 p-1.5 sm:p-2">
                          <span className="block text-[9px] uppercase font-bold text-stone">Community</span>
                          <span className="font-semibold text-ink text-[10px] sm:text-[11px] truncate block">{p.specs.community}</span>
                        </div>
                      )}
                      {p.specs?.commission && (
                        <div className="rounded-lg bg-sand/40 border border-ink/5 p-1.5 sm:p-2">
                          <span className="block text-[9px] uppercase font-bold text-stone">Commission</span>
                          <span className="font-semibold text-emerald-800 text-[10px] sm:text-[11px] block">{p.specs.commission}</span>
                        </div>
                      )}
                      {p.specs?.elevation && (
                        <div className="rounded-lg bg-sand/40 border border-ink/5 p-1.5 sm:p-2">
                          <span className="block text-[9px] uppercase font-bold text-stone">Elevation</span>
                          <span className="font-semibold text-bronze-d text-[10px] sm:text-[11px] block">{p.specs.elevation}</span>
                        </div>
                      )}
                      {p.specs?.clubRoyal && (
                        <div className="rounded-lg bg-sand/40 border border-ink/5 p-1.5 sm:p-2">
                          <span className="block text-[9px] uppercase font-bold text-stone">Club Royal</span>
                          <span className="font-semibold text-purple-800 text-[10px] sm:text-[11px] block truncate">{p.specs.clubRoyal}</span>
                        </div>
                      )}
                      {p.specs?.floorsApproved && (
                        <div className="rounded-lg bg-sand/40 border border-ink/5 p-1.5 sm:p-2">
                          <span className="block text-[9px] uppercase font-bold text-stone">Sanctioned</span>
                          <span className="font-semibold text-bronze-d text-[10px] sm:text-[11px] block truncate">{p.specs.floorsApproved}</span>
                        </div>
                      )}
                      {p.specs?.paymentTerm && (
                        <div className="rounded-lg bg-sand/40 border border-ink/5 p-1.5 sm:p-2">
                          <span className="block text-[9px] uppercase font-bold text-stone">Payment</span>
                          <span className="font-semibold text-ink text-[10px] sm:text-[11px] block truncate">{p.specs.paymentTerm}</span>
                        </div>
                      )}
                    </div>

                    <p className="text-xs text-stone line-clamp-2 leading-relaxed mb-3">
                      {p.description}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 pt-3 border-t border-ink/10">
                    <button
                      type="button"
                      onClick={() => openDetails(p)}
                      className="flex-1 rounded border border-ink/20 bg-transparent py-2 sm:py-2.5 text-center text-xs font-bold uppercase tracking-wider text-ink transition hover:border-ink hover:bg-ink hover:text-white cursor-pointer"
                    >
                      Details
                    </button>
                    <button
                      type="button"
                      onClick={() => openBooking(p)}
                      className="flex-1 inline-flex items-center justify-center gap-1 rounded bg-bronze py-2 sm:py-2.5 text-center text-xs font-bold uppercase tracking-wider text-white transition hover:bg-bronze-d shadow-xs cursor-pointer"
                    >
                      <CalendarBookIcon className="h-3.5 w-3.5 text-white" />
                      <span>Schedule</span>
                    </button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        )}

          {/* 6. Why Invest in BPTP Green Oaks & TREVOC Strip */}
          <div className="mt-10 sm:mt-14 grid gap-6 md:grid-cols-2">
            {/* BPTP USPs Card */}
            <div className="rounded-2xl border border-ink/10 bg-white p-5 sm:p-8 shadow-sm">
              <div className="mb-3 sm:mb-4">
                <span className="kicker !mb-1 text-bronze">Plotted Community Highlights</span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-ink">
                  BPTP Green Oaks — Key Features
                </h3>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-stone">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-700 font-bold text-sm sm:text-base">✓</span>
                  <span><strong className="text-ink">Limited Inventory:</strong> Only 2 exclusive plots available in the entire plotted community.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-700 font-bold text-sm sm:text-base">✓</span>
                  <span><strong className="text-ink">East-Facing &amp; Open:</strong> 137 Sq. Yds. each, available in 2-Side Open and Corner configurations.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-700 font-bold text-sm sm:text-base">✓</span>
                  <span><strong className="text-ink">Lifestyle Amenities:</strong> Gated society with guarded gatehouse, exclusive resident club house, and huge central park.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-700 font-bold text-sm sm:text-base">✓</span>
                  <span><strong className="text-ink">Rapid Connectivity:</strong> Direct access to SPR, Golf Course Extension Road, Sohna Road, and NH-48.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-700 font-bold text-sm sm:text-base">✓</span>
                  <span><strong className="text-ink">Commission Commitment:</strong> 1% Commission committed for verified channel transactions.</span>
                </li>
              </ul>
            </div>

            {/* TREVOC USPs Card */}
            <div className="rounded-2xl border border-ink/10 bg-white p-5 sm:p-8 shadow-sm">
              <div className="mb-3 sm:mb-4">
                <span className="kicker !mb-1 text-bronze">Sky Residence Highlights</span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-ink">
                  TREVOC Royal Residences — Highlights
                </h3>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-stone">
                <li className="flex items-start gap-2">
                  <span className="text-purple-800 font-bold text-sm sm:text-base">✓</span>
                  <span><strong className="text-ink">Curated Exclusivity:</strong> Limited collection of 172 residences across 2 iconic towers in Sector 56.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-800 font-bold text-sm sm:text-base">✓</span>
                  <span><strong className="text-ink">Spacious Layouts:</strong> 3 BHK + Utility (2,642 sq. ft) &amp; 4 BHK + Utility (3,380 sq. ft) with 11 ft ceilings.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-800 font-bold text-sm sm:text-base">✓</span>
                  <span><strong className="text-ink">50,000 Sq. Ft Club Royal:</strong> Fine-dining with sunken seating, heated pool, VR gaming, cinema &amp; spa.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-800 font-bold text-sm sm:text-base">✓</span>
                  <span><strong className="text-ink">36,000 Sq. Ft Skydeck:</strong> Panoramic city views, rooftop track, open-air theatre &amp; private cabanas.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-800 font-bold text-sm sm:text-base">✓</span>
                  <span><strong className="text-ink">Elevated Living:</strong> Residences positioned from 80 ft above ground level with VRV air-conditioning.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Flagship Projects Link Banner */}
      <section className="bg-ink py-10 sm:py-12 text-white">
        <div className="wrap flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6">
          <div>
            <span className="kicker !text-bronze-l">Looking for In-Depth Architectural Tours?</span>
            <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-white mt-1">
              Explore TREVOC Royal Residences Detailed Showcase
            </h2>
            <p className="text-xs sm:text-sm text-[#d3cbbe] mt-1 max-w-[65ch]">
              Complete project overview, Club Royal amenities, Skydeck experiences, and floor plans on Golf Course Road.
            </p>
          </div>
          <Link to="/projects" className="btn btn-bronze text-xs shrink-0 self-start sm:self-auto">
            View Current Projects <Arrow />
          </Link>
        </div>
      </section>

      <CtaBand title="Looking to book a plot or luxury residence in Gurugram?" showName={false} />
    </>
  )
}
