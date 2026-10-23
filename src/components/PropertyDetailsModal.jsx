import { useState } from 'react'
import { useProperties } from '../context/PropertyContext'
import { WhatsAppIcon, CalendarBookIcon } from './Icons'

export default function PropertyDetailsModal() {
  const { detailsProperty, closeDetails, openBooking } = useProperties()
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  if (!detailsProperty) return null

  const p = detailsProperty
  const images = p.gallery?.length ? p.gallery : [p.image]

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="details-title"
      className="fixed inset-0 z-[110] flex items-center justify-center bg-black/85 p-2 sm:p-4 md:p-6 backdrop-blur-md transition-all animate-fade-in"
      onClick={(e) => e.target === e.currentTarget && closeDetails()}
    >
      <div className="relative max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-bronze/40 bg-[#161513] text-[#f4efe6] shadow-2xl">
        {/* Top Header */}
        <div className="sticky top-0 z-20 flex items-start justify-between gap-3 border-b border-white/10 bg-[#1c1b18]/95 backdrop-blur px-4 sm:px-6 py-3.5 sm:py-4">
          <div className="min-w-0 flex-1 pr-2">
            <span className="inline-block rounded bg-bronze/20 px-2 py-0.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-bronze-l">
              {p.tag || 'VERIFIED ASSET'}
            </span>
            <h2 id="details-title" className="font-serif text-lg sm:text-2xl font-bold tracking-tight text-white mt-1 leading-snug break-words">
              {p.title}
            </h2>
          </div>
          <button
            type="button"
            onClick={closeDetails}
            className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-xl font-bold text-white/70 transition hover:bg-bronze hover:text-white cursor-pointer mt-0.5"
            aria-label="Close modal"
          >
            ×
          </button>
        </div>

        <div className="p-4 sm:p-6 space-y-5 sm:space-y-6">
          {/* Main Gallery */}
          <div className="space-y-3">
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden rounded-xl bg-black">
              <img
                src={images[activeImageIndex] || p.image}
                alt={p.title}
                decoding="async"
                className="h-full w-full object-cover transition-all duration-500"
              />
              <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 rounded-md bg-black/75 px-2.5 py-1 text-xs sm:text-sm font-semibold text-white backdrop-blur-sm max-w-[65%] truncate">
                {p.location}
              </div>
              <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 rounded-md bg-bronze px-2.5 py-1 font-serif text-sm sm:text-lg font-bold text-white shadow-lg">
                {p.priceDisplay}
              </div>
            </div>

            {images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-2">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImageIndex(idx)}
                    className={`h-14 w-20 sm:h-16 sm:w-24 shrink-0 overflow-hidden rounded-lg border-2 transition cursor-pointer ${
                      activeImageIndex === idx ? 'border-bronze ring-2 ring-bronze/40 scale-105' : 'border-white/20 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="Thumbnail" loading="lazy" decoding="async" className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Quick Metrics Bar (Fully Responsive) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 rounded-xl border border-white/10 bg-white/5 p-3 sm:p-4 text-center">
            <div>
              <span className="text-[10px] sm:text-xs uppercase tracking-wider text-white/50 block mb-0.5">Price</span>
              <p className="font-serif text-sm sm:text-lg font-bold text-amber-300 truncate">{p.priceDisplay}</p>
            </div>
            <div>
              <span className="text-[10px] sm:text-xs uppercase tracking-wider text-white/50 block mb-0.5">Super Area</span>
              <p className="font-serif text-sm sm:text-lg font-bold text-white truncate">{p.area}</p>
            </div>
            <div>
              <span className="text-[10px] sm:text-xs uppercase tracking-wider text-white/50 block mb-0.5">Configuration</span>
              <p className="font-serif text-sm sm:text-lg font-bold text-white truncate">{p.bedrooms > 0 ? `${p.bedrooms} BHK` : p.type}</p>
            </div>
            <div>
              <span className="text-[10px] sm:text-xs uppercase tracking-wider text-white/50 block mb-0.5">RERA Status</span>
              <p className="text-xs sm:text-sm font-bold text-emerald-400 mt-1 truncate">{p.rera || '100% Verified'}</p>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="font-serif text-base sm:text-lg font-bold text-white mb-2">Property Overview</h3>
            <p className="text-xs sm:text-sm leading-relaxed text-[#c6beb0]">{p.description}</p>
          </div>

          {/* Key Highlights */}
          {p.highlights && (
            <div>
              <h3 className="font-serif text-base sm:text-lg font-bold text-white mb-2.5">Key Highlights &amp; Specifications</h3>
              <div className="grid gap-2 sm:grid-cols-2">
                {p.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 rounded-lg bg-white/[0.03] p-2 sm:p-2.5 border border-white/5 text-xs sm:text-sm text-[#e3ded4]">
                    <span className="text-bronze font-bold">✓</span>
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Specs Table (Clean Responsive 1-col on mobile, 2-col on tablet/desktop) */}
          {p.specs && (
            <div className="rounded-xl border border-white/10 bg-[#1e1c18] p-4 sm:p-5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-bronze-l mb-3">Architectural &amp; Legal Specifications</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1.5 sm:gap-y-2 text-xs">
                {Object.entries(p.specs).map(([key, val]) => (
                  <div key={key} className="flex flex-col sm:flex-row sm:items-center justify-between gap-0.5 sm:gap-2 border-b border-white/5 py-1.5 sm:py-2">
                    <span className="capitalize text-white/50 font-medium shrink-0">
                      {key.replace(/([A-Z])/g, ' $1')}:
                    </span>
                    <span className="font-semibold text-white text-left sm:text-right break-words">
                      {val}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Footer Actions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-4 border-t border-white/10">
            <div className="text-xs text-white/60 text-center sm:text-left">
              Direct Advisory: <span className="font-bold text-white">+91-8800006689</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 w-full sm:w-auto">
              <a
                href={`https://wa.me/918800006689?text=${encodeURIComponent(`Hi, I am interested in ${p.title} (${p.priceDisplay}) at ${p.location}. Please share complete brochure and site visit details.`)}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-black transition hover:bg-[#1ebd5a] shadow"
              >
                <WhatsAppIcon className="h-4 w-4" />
                <span>Inquire on WhatsApp</span>
              </a>
              <button
                type="button"
                onClick={() => {
                  closeDetails()
                  openBooking(p)
                }}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-bronze bg-bronze px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg transition hover:bg-bronze-d cursor-pointer"
              >
                <CalendarBookIcon className="h-4 w-4 text-white" />
                <span>Schedule Site Visit</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
