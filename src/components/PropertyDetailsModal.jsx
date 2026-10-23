import { useState } from 'react'
import { useProperties } from '../context/PropertyContext'

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
      className="fixed inset-0 z-[110] flex items-center justify-center bg-black/85 p-4 backdrop-blur-md transition-all animate-fade-in"
      onClick={(e) => e.target === e.currentTarget && closeDetails()}
    >
      <div className="relative max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-xl border border-bronze/40 bg-[#161513] text-[#f4efe6] shadow-2xl">
        {/* Top Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between border-b border-white/10 bg-[#1c1b18] px-6 py-4">
          <div>
            <span className="inline-block rounded bg-bronze/20 px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider text-bronze-l">
              {p.tag || 'VERIFIED ASSET'}
            </span>
            <h2 id="details-title" className="font-serif text-2xl font-bold tracking-tight text-white mt-1">
              {p.title}
            </h2>
          </div>
          <button
            type="button"
            onClick={closeDetails}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-xl text-white/70 transition hover:bg-bronze hover:text-white"
            aria-label="Close modal"
          >
            ×
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Main Gallery */}
          <div className="space-y-3">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg bg-black">
              <img
                src={images[activeImageIndex] || p.image}
                alt={p.title}
                decoding="async"
                className="h-full w-full object-cover transition-all duration-500"
              />
              <div className="absolute bottom-4 left-4 rounded-md bg-black/70 px-3 py-1 text-sm font-semibold text-white backdrop-blur-sm">
                {p.location}
              </div>
              <div className="absolute bottom-4 right-4 rounded-md bg-bronze px-3 py-1 font-serif text-lg font-bold text-white shadow-lg">
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
                    className={`h-16 w-24 flex-shrink-0 overflow-hidden rounded border transition ${
                      activeImageIndex === idx ? 'border-bronze ring-2 ring-bronze' : 'border-white/20 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="Thumbnail" loading="lazy" decoding="async" className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
            <div>
              <span className="text-xs uppercase tracking-wider text-white/50">Price</span>
              <p className="font-serif text-xl font-bold text-amber-300">{p.priceDisplay}</p>
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider text-white/50">Super Area</span>
              <p className="font-serif text-xl font-bold text-white">{p.area}</p>
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider text-white/50">Configuration</span>
              <p className="font-serif text-xl font-bold text-white">{p.bedrooms > 0 ? `${p.bedrooms} BHK` : p.type}</p>
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider text-white/50">RERA Status</span>
              <p className="text-xs font-bold text-green-400 mt-1">{p.rera || '100% Verified'}</p>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="font-serif text-lg font-bold text-white mb-2">Property Overview</h3>
            <p className="text-sm leading-relaxed text-[#c6beb0]">{p.description}</p>
          </div>

          {/* Key Highlights */}
          {p.highlights && (
            <div>
              <h3 className="font-serif text-lg font-bold text-white mb-2">Key Highlights & Specifications</h3>
              <div className="grid gap-2 sm:grid-cols-2">
                {p.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-[#e3ded4]">
                    <span className="text-bronze font-bold">✓</span>
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Specs Table */}
          {p.specs && (
            <div className="rounded-lg border border-white/10 bg-[#1e1c18] p-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-bronze-l mb-3">Architectural & Legal Specifications</h4>
              <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-xs">
                {Object.entries(p.specs).map(([key, val]) => (
                  <div key={key} className="flex justify-between border-b border-white/5 py-1.5">
                    <span className="capitalize text-white/50">{key.replace(/([A-Z])/g, ' $1')}:</span>
                    <span className="font-medium text-white">{val}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Footer Actions */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
            <div className="text-xs text-white/60">
              Direct Advisory: <span className="font-bold text-white">+91-8800006689</span>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={`https://wa.me/918800006689?text=${encodeURIComponent(`Hi, I am interested in ${p.title} (${p.priceDisplay}) at ${p.location}. Please share complete brochure and site visit details.`)}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded bg-green-700 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-green-600"
              >
                WhatsApp Inquiry
              </a>
              <button
                type="button"
                onClick={() => {
                  closeDetails()
                  openBooking(p)
                }}
                className="inline-flex items-center gap-2 rounded bg-gradient-to-r from-bronze to-amber-600 px-5 py-2 text-xs font-bold uppercase tracking-widest text-white shadow-lg transition hover:brightness-110"
              >
                Schedule Site Visit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
