import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import CtaBand from '../components/CtaBand'
import { Arrow, WhatsAppIcon } from '../components/Icons'
import PageBanner from '../components/PageBanner'
import Reveal from '../components/Reveal'
import { useProperties } from '../context/PropertyContext'
import { company } from '../data/site'
import usePageMeta from '../hooks/usePageMeta'

export default function Properties() {
  usePageMeta(
    'Luxury Properties in Gurugram & Delhi NCR | Real Estate Square',
    'Browse our curated portfolio of residential apartments, luxury builder floors, independent villas and pre-leased commercial assets across Delhi NCR.'
  )

  const {
    filteredProperties,
    properties,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    selectedLocation,
    setSelectedLocation,
    selectedBudget,
    setSelectedBudget,
    sortBy,
    setSortBy,
    openDetails,
    openBooking,
    setIsAddModalOpen,
  } = useProperties()

  // Local UI states
  const [selectedBhk, setSelectedBhk] = useState('All')
  const [viewMode, setViewMode] = useState('grid') // 'grid' | 'list'
  const [favorites, setFavorites] = useState({})

  const toggleFavorite = (id) => {
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  // Multi-factor filtered list including BHK
  const displayProperties = useMemo(() => {
    return filteredProperties.filter((p) => {
      if (selectedBhk !== 'All') {
        if (selectedBhk === '5-plus') {
          if (p.bedrooms < 5) return false
        } else if (selectedBhk === 'commercial') {
          if (p.bedrooms !== 0) return false
        } else {
          if (p.bedrooms !== Number(selectedBhk)) return false
        }
      }
      return true
    })
  }, [filteredProperties, selectedBhk])

  const resetAllFilters = () => {
    setSearchQuery('')
    setSelectedCategory('All')
    setSelectedLocation('All')
    setSelectedBudget('All')
    setSelectedBhk('All')
    setSortBy('featured')
  }

  const hasActiveFilters =
    searchQuery !== '' ||
    selectedCategory !== 'All' ||
    selectedLocation !== 'All' ||
    selectedBudget !== 'All' ||
    selectedBhk !== 'All'

  return (
    <>
      {/* 1. Page Banner with Verified Credentials */}
      <PageBanner
        title="Verified Luxury Properties"
        image="slideshow/slide1.jpg"
        alt="Real Estate Square verified luxury properties in Gurugram & Delhi NCR"
      />

      <section className="section bg-[#f5f1ea] pt-8 pb-20 md:pb-28">
        <div className="wrap">
          {/* Top Headline & Quick Action Bar */}
          <div className="mb-8 flex flex-wrap items-end justify-between gap-6 border-b border-ink/10 pb-6">
            <div>
              <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-bronze/40 bg-sand/60 px-3 py-1 text-xs font-bold uppercase tracking-wider text-bronze-d">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Delhi NCR Premier Realty Directory</span>
              </div>
              <h1 className="h2 !mb-2 text-ink">Exclusive Properties &amp; Luxury Estates</h1>
              <p className="max-w-[70ch] text-stone text-xs sm:text-sm md:text-base leading-relaxed">
                Hand-picked inventory featuring transparent pricing, verified legal ownership, and turnkey advisory assistance across Gurugram, DLF Phase 1, Golf Course Road &amp; South Delhi.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => setIsAddModalOpen(true)}
                className="inline-flex items-center gap-2 rounded-md bg-ink px-5 py-3 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-bronze hover:shadow-md cursor-pointer"
              >
                <span className="text-bronze-l font-bold text-base leading-none">+</span> List Your Property
              </button>
            </div>
          </div>

          {/* 2. Comprehensive Filter & Search Command Center */}
          <div className="mb-10 rounded-2xl border border-ink/10 bg-white p-5 md:p-7 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.12)]">
            {/* Search Input on Top */}
            <div className="mb-5">
              <label htmlFor="prop-search" className="mb-1.5 block text-[0.72rem] font-bold uppercase tracking-wider text-stone">
                Search By Name / Location / Landmark / Developer
              </label>
              <div className="relative">
                <input
                  id="prop-search"
                  type="search"
                  placeholder="e.g. DLF Privana, Golf Course Road, Villa, Camellias, Penthouse, Commercial SCO..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-lg border border-ink/15 bg-ivory/60 px-4 py-3 text-sm text-ink placeholder:text-stone/60 focus:border-bronze focus:bg-white focus:outline-none focus:ring-2 focus:ring-bronze/20"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3.5 top-3 text-sm font-bold text-stone hover:text-ink cursor-pointer"
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>

            {/* Dropdown Filters Grid */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {/* Asset Class Filter */}
              <div>
                <label htmlFor="filter-cat" className="mb-1.5 block text-[0.70rem] font-bold uppercase tracking-wider text-stone">
                  Asset Class
                </label>
                <select
                  id="filter-cat"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full rounded-md border border-ink/15 bg-ivory/60 px-3.5 py-2.5 text-sm text-ink focus:border-bronze focus:bg-white focus:outline-none cursor-pointer"
                >
                  <option value="All">All Categories ({properties.length})</option>
                  <option value="Apartments">Apartments &amp; Penthouses</option>
                  <option value="Villas">Houses &amp; Luxury Villas</option>
                  <option value="Floors">Hybrid &amp; Designer Floors</option>
                  <option value="Commercial">Commercial &amp; SCOs</option>
                </select>
              </div>

              {/* Location Corridor Filter */}
              <div>
                <label htmlFor="filter-loc" className="mb-1.5 block text-[0.70rem] font-bold uppercase tracking-wider text-stone">
                  Prime Location
                </label>
                <select
                  id="filter-loc"
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full rounded-md border border-ink/15 bg-ivory/60 px-3.5 py-2.5 text-sm text-ink focus:border-bronze focus:bg-white focus:outline-none cursor-pointer"
                >
                  <option value="All">All Locations (NCR)</option>
                  <option value="DLF Phase 1">DLF Phase 1 &amp; 2</option>
                  <option value="Golf Course">Golf Course Road</option>
                  <option value="Sohna Road">Sohna Road</option>
                  <option value="South Delhi">South Delhi / Vasant Vihar</option>
                  <option value="Cyber City">Cyber City Corridor</option>
                  <option value="SPR">Southern Peripheral Rd (SPR)</option>
                </select>
              </div>

              {/* Budget Range Filter */}
              <div>
                <label htmlFor="filter-budget" className="mb-1.5 block text-[0.70rem] font-bold uppercase tracking-wider text-stone">
                  Budget Range
                </label>
                <select
                  id="filter-budget"
                  value={selectedBudget}
                  onChange={(e) => setSelectedBudget(e.target.value)}
                  className="w-full rounded-md border border-ink/15 bg-ivory/60 px-3.5 py-2.5 text-sm text-ink focus:border-bronze focus:bg-white focus:outline-none cursor-pointer"
                >
                  <option value="All">Any Budget</option>
                  <option value="under-3">Under ₹3.00 Cr</option>
                  <option value="3-6">₹3.00 Cr - ₹6.00 Cr</option>
                  <option value="6-10">₹6.00 Cr - ₹10.00 Cr</option>
                  <option value="10-plus">Above ₹10.00 Cr</option>
                </select>
              </div>

              {/* Bedrooms (BHK) Filter */}
              <div>
                <label htmlFor="filter-bhk" className="mb-1.5 block text-[0.70rem] font-bold uppercase tracking-wider text-stone">
                  Configuration (BHK)
                </label>
                <select
                  id="filter-bhk"
                  value={selectedBhk}
                  onChange={(e) => setSelectedBhk(e.target.value)}
                  className="w-full rounded-md border border-ink/15 bg-ivory/60 px-3.5 py-2.5 text-sm text-ink focus:border-bronze focus:bg-white focus:outline-none cursor-pointer"
                >
                  <option value="All">All Configurations</option>
                  <option value="3">3 BHK</option>
                  <option value="4">4 BHK</option>
                  <option value="5-plus">5+ BHK / Sky Villas</option>
                  <option value="commercial">Commercial / SCO</option>
                </select>
              </div>
            </div>

            {/* Quick Filter Tag Pills */}
            <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-ink/5 pt-3">
              <span className="text-xs font-bold uppercase tracking-wider text-stone mr-1">Quick Filters:</span>
              {[
                { label: 'All', cat: 'All', loc: 'All' },
                { label: 'Ready to Move', cat: 'All', loc: 'All' },
                { label: 'DLF Phase 1', cat: 'All', loc: 'DLF Phase 1' },
                { label: 'Golf Course Rd', cat: 'All', loc: 'Golf Course' },
                { label: 'Luxury Penthouses', cat: 'Apartments', loc: 'All' },
                { label: 'Villas', cat: 'Villas', loc: 'All' },
                { label: 'Commercial SCOs', cat: 'Commercial', loc: 'All' },
              ].map((pill) => (
                <button
                  key={pill.label}
                  type="button"
                  onClick={() => {
                    setSelectedCategory(pill.cat)
                    setSelectedLocation(pill.loc)
                  }}
                  className={`rounded-full px-3 py-1 text-xs font-semibold transition cursor-pointer ${
                    selectedCategory === pill.cat && selectedLocation === pill.loc
                      ? 'bg-bronze text-white shadow-sm'
                      : 'border border-ink/15 bg-ivory text-ink hover:border-bronze hover:bg-sand'
                  }`}
                >
                  {pill.label}
                </button>
              ))}
            </div>

            {/* Filter Meta Bar (Results count, Sort, View Toggle, Reset) */}
            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-ink/10 pt-3 text-xs">
              <div className="flex items-center gap-2 text-stone font-medium">
                <span>Showing</span>
                <span className="font-bold text-ink bg-sand/60 px-2 py-0.5 rounded">
                  {displayProperties.length} of {properties.length} Verified Properties
                </span>
                {hasActiveFilters && (
                  <span className="text-bronze font-semibold">· Filters Active</span>
                )}
              </div>

              <div className="flex flex-wrap items-center gap-4">
                {/* Sort selector */}
                <div className="flex items-center gap-2">
                  <span className="text-stone font-medium">Sort:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="rounded border border-ink/15 bg-ivory/60 px-2 py-1 text-xs text-ink focus:border-bronze focus:outline-none cursor-pointer"
                  >
                    <option value="featured">Featured First</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="bedrooms">Most Bedrooms</option>
                  </select>
                </div>

                {/* View Mode Toggle: Grid vs List */}
                <div className="hidden sm:flex items-center rounded border border-ink/15 bg-ivory p-0.5">
                  <button
                    type="button"
                    onClick={() => setViewMode('grid')}
                    title="Grid View"
                    className={`rounded px-2 py-1 text-xs font-bold transition ${
                      viewMode === 'grid' ? 'bg-ink text-white' : 'text-stone hover:text-ink'
                    }`}
                  >
                    Grid ⊞
                  </button>
                  <button
                    type="button"
                    onClick={() => setViewMode('list')}
                    title="List View"
                    className={`rounded px-2 py-1 text-xs font-bold transition ${
                      viewMode === 'list' ? 'bg-ink text-white' : 'text-stone hover:text-ink'
                    }`}
                  >
                    List ☰
                  </button>
                </div>

                {hasActiveFilters && (
                  <button
                    type="button"
                    onClick={resetAllFilters}
                    className="font-bold text-bronze-d hover:underline cursor-pointer"
                  >
                    Reset All Filters
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* 3. Property Showcase Display */}
          {displayProperties.length > 0 ? (
            <div className={viewMode === 'grid' ? 'grid gap-7 sm:grid-cols-2 lg:grid-cols-3' : 'space-y-6'}>
              {displayProperties.map((p, idx) => (
                <Reveal
                  key={p.id}
                  delay={idx * 50}
                  className={`group flex overflow-hidden rounded-xl bg-white border border-ink/10 shadow-[0_12px_32px_-16px_rgba(0,0,0,0.12)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-20px_rgba(0,0,0,0.22)] hover:border-bronze/50 ${
                    viewMode === 'list' ? 'flex-col md:flex-row' : 'flex-col'
                  }`}
                >
                  {/* Image & Overlay Badges */}
                  <div
                    className={`relative overflow-hidden bg-sand ${
                      viewMode === 'list' ? 'aspect-[16/10] md:w-5/12 md:aspect-auto' : 'aspect-[16/10]'
                    }`}
                  >
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-108"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

                    {/* Top Badges */}
                    <div className="absolute top-3 inset-x-3 flex items-center justify-between gap-2">
                      <span className="rounded bg-ink/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-bronze-l backdrop-blur-sm shadow">
                        {p.tag || 'EXCLUSIVE'}
                      </span>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation()
                          toggleFavorite(p.id)
                        }}
                        aria-label="Save to favorites"
                        className={`flex h-8 w-8 items-center justify-center rounded-full backdrop-blur-md transition ${
                          favorites[p.id] ? 'bg-rose-600 text-white' : 'bg-black/50 text-white/80 hover:text-white'
                        }`}
                      >
                        ♥
                      </button>
                    </div>

                    {/* Bottom Price Tag */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-baseline justify-between">
                      <div>
                        <span className="text-[10px] uppercase font-bold tracking-widest text-white/80 block">
                          Investment Value
                        </span>
                        <span className="font-serif text-2xl font-bold text-white drop-shadow">
                          {p.priceDisplay}
                        </span>
                      </div>
                      <span className="text-xs text-amber-200 font-semibold bg-black/50 px-2 py-0.5 rounded backdrop-blur-sm">
                        {p.area}
                      </span>
                    </div>
                  </div>

                  {/* Property Details */}
                  <div className={`flex flex-1 flex-col justify-between p-5 sm:p-6 ${viewMode === 'list' ? 'md:w-7/12' : ''}`}>
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-bronze">
                          {p.category}
                        </span>
                        <span className="text-[10px] font-semibold text-stone bg-ivory px-2 py-0.5 rounded border border-ink/10">
                          {p.type}
                        </span>
                      </div>

                      <h3 className="font-serif text-xl sm:text-2xl font-bold leading-snug text-ink mb-1 group-hover:text-bronze-d transition-colors">
                        {p.title}
                      </h3>

                      <p className="flex items-center gap-1.5 text-xs text-stone mb-3">
                        <svg className="h-3.5 w-3.5 text-bronze shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>{p.location}</span>
                        {p.developer && (
                          <>
                            <span className="text-stone/40">·</span>
                            <span className="text-stone/80 truncate">by {p.developer}</span>
                          </>
                        )}
                      </p>

                      {/* Quick Specs Matrix */}
                      <div className="mb-4 grid grid-cols-3 divide-x divide-ink/10 rounded-lg border border-ink/10 bg-ivory/80 py-2.5 text-center text-xs">
                        <div>
                          <span className="block text-stone text-[10px] uppercase">Bedrooms</span>
                          <span className="font-bold text-ink">{p.bedrooms > 0 ? `${p.bedrooms} BHK` : 'Commercial'}</span>
                        </div>
                        <div>
                          <span className="block text-stone text-[10px] uppercase">Bathrooms</span>
                          <span className="font-bold text-ink">{p.bathrooms || '2+'}</span>
                        </div>
                        <div>
                          <span className="block text-stone text-[10px] uppercase">Super Area</span>
                          <span className="font-bold text-ink">{p.area}</span>
                        </div>
                      </div>

                      <p className="text-xs line-clamp-2 text-stone/90 mb-4 leading-relaxed">
                        {p.description}
                      </p>

                      {/* Highlights checklist */}
                      {p.highlights && (
                        <div className="mb-4 flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-stone">
                          {p.highlights.slice(0, 2).map((h, i) => (
                            <span key={i} className="flex items-center gap-1">
                              <span className="text-bronze font-bold">✓</span> {h}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-ink/10">
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
                        className="flex-1 rounded bg-bronze py-2.5 text-center text-xs font-bold uppercase tracking-wider text-white transition hover:bg-bronze-d shadow-sm cursor-pointer"
                      >
                        Schedule Visit
                      </button>
                      <a
                        href={`https://wa.me/918800006689?text=${encodeURIComponent(
                          `Hi, I am interested in ${p.title} (${p.priceDisplay}) at ${p.location}. Please share complete brochure and site visit details.`
                        )}`}
                        target="_blank"
                        rel="noreferrer"
                        title="Chat on WhatsApp"
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded bg-emerald-700 text-white transition hover:bg-emerald-600 cursor-pointer"
                      >
                        <WhatsAppIcon className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="rounded-2xl border border-dashed border-ink/20 bg-white p-12 text-center shadow-sm">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-sand text-3xl text-bronze">
                🔍
              </div>
              <h2 className="font-serif text-2xl font-bold text-ink mb-2">No Matching Properties Found</h2>
              <p className="mx-auto max-w-md text-sm text-stone mb-6">
                We couldn&apos;t find properties matching your current filters. You can clear the filters or submit your custom requirement directly to our advisory principals.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <button
                  type="button"
                  onClick={resetAllFilters}
                  className="btn btn-dark text-xs"
                >
                  Reset All Filters
                </button>
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(true)}
                  className="btn text-xs"
                >
                  + List Your Property
                </button>
              </div>
            </div>
          )}

          {/* 4. Custom Requirement Callout */}
          <div className="mt-14 rounded-2xl border border-bronze/30 bg-[#121110] p-8 md:p-10 text-white shadow-xl">
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div className="max-w-2xl">
                <span className="text-xs font-bold uppercase tracking-widest text-bronze-l block mb-1">
                  OFF-MARKET &amp; PRIVATE INVENTORY
                </span>
                <h3 className="font-serif text-2xl md:text-3xl font-bold leading-tight">
                  Can&apos;t find your ideal property? Speak with our Senior Principals.
                </h3>
                <p className="text-xs md:text-sm text-[#ded8cb] mt-2 leading-relaxed">
                  We maintain a private portfolio of off-market penthouses, trophy farmhouses, and pre-leased commercial floors that are not publicly listed for discretion.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={`tel:${company.phones[0].tel}`}
                  className="rounded-md bg-gradient-to-r from-bronze to-amber-600 px-7 py-3.5 text-xs font-bold uppercase tracking-widest text-white shadow-md transition hover:brightness-110 cursor-pointer"
                >
                  Call +91-8800006689
                </a>
                <Link
                  to="/contact"
                  className="rounded-md border border-white/20 bg-white/5 px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-white transition hover:border-white hover:bg-white/10 cursor-pointer"
                >
                  Submit Requirement
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand title="Looking to buy, sell, or lease your property in Delhi NCR?" showName={false} />
    </>
  )
}
