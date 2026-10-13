import { useState } from 'react'
import CtaBand from '../components/CtaBand'
import PageBanner from '../components/PageBanner'
import Reveal from '../components/Reveal'
import { useProperties } from '../context/PropertyContext'
import { company } from '../data/site'
import usePageMeta from '../hooks/usePageMeta'

export default function Projects() {
  usePageMeta('Current Projects | Real Estate Square', company.description)

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

  const resetFilters = () => {
    setSearchQuery('')
    setSelectedCategory('All')
    setSelectedLocation('All')
    setSelectedBudget('All')
    setSortBy('featured')
  }

  const hasActiveFilters =
    searchQuery !== '' ||
    selectedCategory !== 'All' ||
    selectedLocation !== 'All' ||
    selectedBudget !== 'All'

  return (
    <>
      <PageBanner
        title="Current Projects"
        image="slideshow/slide1.jpg"
        alt="Current projects by Real Estate Square in Gurugram & Delhi NCR"
      />

      <section className="section bg-[#f5f1ea] pt-10 pb-20 md:pb-28">
        <div className="wrap">
          {/* Section Header */}
          <div className="mb-8 flex flex-wrap items-end justify-between gap-6 border-b border-ink/10 pb-6">
            <div>
              <span className="kicker">Verified Portfolio · Delhi NCR</span>
              <h2 className="h2 !mb-2 text-ink">Current Projects in Gurugram &amp; Delhi NCR</h2>
              <p className="max-w-[72ch] text-stone text-[0.95rem]">
                Hand-picked inventory featuring transparent pricing, verified legal ownership, and turnkey advisory assistance.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => setIsAddModalOpen(true)}
                className="inline-flex items-center gap-2 rounded bg-ink px-5 py-3 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-bronze hover:shadow-md"
              >
                <span className="text-bronze-l font-bold text-base leading-none">+</span> Add Property
              </button>
            </div>
          </div>

          {/* Top Filter Bar: Search By Name / Location / Landmark Upper Mein */}
          <div className="mb-10 rounded-xl border border-ink/10 bg-white p-5 md:p-6 shadow-[0_15px_35px_-20px_rgba(0,0,0,0.15)]">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {/* Prominent Search By Name / Location / Landmark */}
              <div className="sm:col-span-2 lg:col-span-2">
                <label
                  htmlFor="search-landmark"
                  className="mb-1.5 block text-[0.72rem] font-bold uppercase tracking-wider text-stone"
                >
                  Search By Name / Location / Landmark
                </label>
                <div className="relative">
                  <input
                    id="search-landmark"
                    type="search"
                    placeholder="e.g. DLF Privana, Golf Course Rd, Villa, Penthouse..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full rounded-md border border-ink/15 bg-ivory/60 px-4 py-2.5 text-sm text-ink focus:border-bronze focus:bg-white focus:outline-none focus:ring-2 focus:ring-bronze/20"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-2.5 text-xs font-bold text-stone hover:text-ink cursor-pointer"
                    >
                      ×
                    </button>
                  )}
                </div>
              </div>

              {/* Asset Class Filter */}
              <div>
                <label
                  htmlFor="filter-category"
                  className="mb-1.5 block text-[0.72rem] font-bold uppercase tracking-wider text-stone"
                >
                  Asset Class
                </label>
                <select
                  id="filter-category"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full rounded-md border border-ink/15 bg-ivory/60 px-3 py-2.5 text-sm text-ink focus:border-bronze focus:bg-white focus:outline-none focus:ring-2 focus:ring-bronze/20"
                >
                  <option value="All">All Categories ({properties.length})</option>
                  <option value="Apartments">Apartments &amp; Penthouses</option>
                  <option value="Villas">Houses &amp; Villas</option>
                  <option value="Floors">Hybrid Designer Floors</option>
                  <option value="Commercial">Commercial &amp; SCOs</option>
                </select>
              </div>

              {/* Prime Location Filter */}
              <div>
                <label
                  htmlFor="filter-location"
                  className="mb-1.5 block text-[0.72rem] font-bold uppercase tracking-wider text-stone"
                >
                  Location Corridor
                </label>
                <select
                  id="filter-location"
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full rounded-md border border-ink/15 bg-ivory/60 px-3 py-2.5 text-sm text-ink focus:border-bronze focus:bg-white focus:outline-none focus:ring-2 focus:ring-bronze/20"
                >
                  <option value="All">All NCR Corridors</option>
                  <option value="DLF Phase 1">DLF Phase 1 &amp; 2</option>
                  <option value="Golf Course">Golf Course Road</option>
                  <option value="Sohna Road">Sohna Road</option>
                  <option value="South Delhi">South Delhi / Vasant Vihar</option>
                  <option value="Cyber City">Cyber City Corridor</option>
                </select>
              </div>

              {/* Budget Range Filter */}
              <div>
                <label
                  htmlFor="filter-budget"
                  className="mb-1.5 block text-[0.72rem] font-bold uppercase tracking-wider text-stone"
                >
                  Budget Range
                </label>
                <select
                  id="filter-budget"
                  value={selectedBudget}
                  onChange={(e) => setSelectedBudget(e.target.value)}
                  className="w-full rounded-md border border-ink/15 bg-ivory/60 px-3 py-2.5 text-sm text-ink focus:border-bronze focus:bg-white focus:outline-none focus:ring-2 focus:ring-bronze/20"
                >
                  <option value="All">Any Budget</option>
                  <option value="under-3">Under ₹3.00 Cr</option>
                  <option value="3-6">₹3.00 Cr - ₹6.00 Cr</option>
                  <option value="6-10">₹6.00 Cr - ₹10.00 Cr</option>
                  <option value="10-plus">Above ₹10.00 Cr</option>
                </select>
              </div>
            </div>

            {/* Sub-bar with Sort & Active Counter */}
            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-ink/10 pt-3 text-xs">
              <div className="flex items-center gap-2 text-stone font-medium">
                <span>Showing</span>
                <span className="font-bold text-ink bg-sand/60 px-2 py-0.5 rounded">
                  {filteredProperties.length} of {properties.length} Verified Properties
                </span>
                {hasActiveFilters && (
                  <span className="text-bronze font-semibold">· Filters Active</span>
                )}
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-stone font-medium">Sort:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="rounded border border-ink/15 bg-ivory/60 px-2 py-1 text-xs text-ink focus:border-bronze focus:outline-none"
                  >
                    <option value="featured">Featured First</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="bedrooms">Most Bedrooms</option>
                  </select>
                </div>

                {hasActiveFilters && (
                  <button
                    type="button"
                    onClick={resetFilters}
                    className="font-bold text-bronze-d hover:underline cursor-pointer"
                  >
                    Reset All Filters
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* All Projects Grid Niche Rahoongi */}
          {filteredProperties.length > 0 ? (
            <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProperties.map((p, idx) => (
                <Reveal
                  key={p.id}
                  delay={idx * 60}
                  className="group flex flex-col overflow-hidden rounded-xl bg-white border border-ink/10 shadow-[0_12px_32px_-16px_rgba(0,0,0,0.12)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-20px_rgba(0,0,0,0.22)] hover:border-bronze/50"
                >
                  {/* Property Image & Badges */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-sand">
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
                      <span className="rounded bg-black/60 px-2 py-0.5 text-[10px] font-semibold text-white/90 backdrop-blur-sm">
                        {p.type}
                      </span>
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
                  <div className="flex flex-1 flex-col justify-between p-5">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-bronze block mb-1">
                        {p.category}
                      </span>
                      <h3 className="font-serif text-xl font-bold leading-snug text-ink mb-1 group-hover:text-bronze-d transition-colors">
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
                        <span className="truncate">{p.location}</span>
                      </p>

                      {/* Quick Specs */}
                      <div className="mb-4 grid grid-cols-3 divide-x divide-ink/10 rounded-md border border-ink/10 bg-ivory/80 py-2 text-center text-xs">
                        <div>
                          <span className="block text-stone text-[10px] uppercase">Bedrooms</span>
                          <span className="font-bold text-ink">{p.bedrooms > 0 ? `${p.bedrooms} BHK` : 'N/A'}</span>
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
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-2 pt-3 border-t border-ink/10">
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
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="rounded-xl border border-dashed border-ink/20 bg-white p-12 text-center shadow-sm">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-sand text-2xl text-bronze">
                🔍
              </div>
              <h3 className="font-serif text-2xl font-bold text-ink mb-2">No Matching Projects Found</h3>
              <p className="mx-auto max-w-md text-sm text-stone mb-6">
                We couldn&apos;t find properties matching your exact search criteria. You can reset filters or list your custom requirement directly with our principals.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <button
                  type="button"
                  onClick={resetFilters}
                  className="btn btn-dark text-xs"
                >
                  Clear All Filters
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
        </div>
      </section>

      <CtaBand title="Interested in a project or looking to list your asset?" showName={false} />
    </>
  )
}
