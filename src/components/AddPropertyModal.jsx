import { useState } from 'react'
import { useProperties } from '../context/PropertyContext'

const SAMPLE_IMAGES = [
  { label: 'Luxury Villa', url: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1600&q=90' },
  { label: 'Modern Floor', url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=90' },
  { label: 'Penthouse', url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=90' },
  { label: 'Commercial Hub', url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=90' },
  { label: 'Designer Suite', url: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=90' },
]

export default function AddPropertyModal() {
  const { isAddModalOpen, setIsAddModalOpen, addProperty } = useProperties()

  const [form, setForm] = useState({
    title: '',
    category: 'Hybrid & Designer Floors',
    type: 'Luxury Builder Floor',
    price: '45000000',
    location: 'DLF Phase 1, Gurugram',
    area: '3200',
    bedrooms: '4',
    bathrooms: '4',
    rera: 'RERA-GRG-2024-VERIFIED',
    image: SAMPLE_IMAGES[1].url,
    developer: 'Private Owner / Authorized Principal',
    description: 'High specification luxury floor with Italian marble, private elevator, VRV cooling, and clear legal title registry.',
    contactPhone: '+91-8800006689',
    ownerName: '',
  })

  if (!isAddModalOpen) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.title.trim()) {
      alert('Please enter a property title')
      return
    }
    addProperty(form)
  }

  const formatPricePreview = (val) => {
    const num = Number(val)
    if (!num) return '₹0'
    if (num >= 10000000) return `₹${(num / 10000000).toFixed(2)} Crore`
    if (num >= 100000) return `₹${(num / 100000).toFixed(2)} Lakhs`
    return `₹${num.toLocaleString('en-IN')}`
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="add-prop-title"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-2 sm:p-4 backdrop-blur-md transition-all animate-fade-in"
      onClick={(e) => e.target === e.currentTarget && setIsAddModalOpen(false)}
    >
      <div className="relative max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-bronze/40 bg-[#161513] text-[#f4efe6] shadow-2xl">
        {/* Modal Header */}
        <div className="sticky top-0 z-10 flex items-start justify-between gap-3 border-b border-white/10 bg-[#1c1b18]/95 backdrop-blur px-4 sm:px-6 py-3.5 sm:py-4">
          <div className="flex items-center gap-3 min-w-0 pr-2">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-bronze/20 text-bronze border border-bronze/40 font-serif font-bold text-lg">
              +
            </span>
            <div className="min-w-0">
              <h2 id="add-prop-title" className="font-serif text-lg sm:text-2xl font-bold tracking-tight text-white leading-snug">
                List New Property / Asset
              </h2>
              <p className="text-xs text-[#a9a295] truncate">
                Submit your residential or commercial inventory to Delhi NCR&apos;s verified network
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setIsAddModalOpen(false)}
            className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-xl font-bold text-white/70 transition hover:bg-bronze hover:text-white cursor-pointer"
            aria-label="Close modal"
          >
            ×
          </button>
        </div>

        {/* Modal Form */}
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 p-4 sm:p-6 text-sm">
          {/* Title */}
          <div>
            <label className="mb-1 block font-semibold text-xs uppercase tracking-wider text-bronze-l">
              Property Title *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. DLF Privana North Super Luxury Condos"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className="w-full rounded-md border border-white/15 bg-white/5 px-4 py-2.5 text-white placeholder-white/40 focus:border-bronze focus:outline-none focus:ring-1 focus:ring-bronze"
            />
          </div>

          {/* Category & Property Type */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block font-semibold text-xs uppercase tracking-wider text-bronze-l">
                Asset Class Category
              </label>
              <select
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
                className="w-full rounded-md border border-white/15 bg-[#201e1b] px-4 py-2.5 text-white focus:border-bronze focus:outline-none"
              >
                <option value="Hybrid & Designer Floors">Hybrid & Designer Floors</option>
                <option value="Apartments & Penthouses">Apartments & Penthouses</option>
                <option value="Houses, Bungalows & Villas">Houses, Bungalows & Villas</option>
                <option value="Commercial & Flex-Spaces">Commercial & Flex-Spaces</option>
              </select>
            </div>
            <div>
              <label className="mb-1 block font-semibold text-xs uppercase tracking-wider text-bronze-l">
                Specific Property Type
              </label>
              <input
                type="text"
                placeholder="e.g. Luxury Builder Floor, Duplex Penthouse, SCO"
                value={form.type}
                onChange={(e) => setForm({ ...form, type: e.target.value })}
                className="w-full rounded-md border border-white/15 bg-white/5 px-4 py-2.5 text-white focus:border-bronze focus:outline-none"
              />
            </div>
          </div>

          {/* Price & Location */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="block font-semibold text-xs uppercase tracking-wider text-bronze-l">
                  Price in Rupees (INR) *
                </label>
                <span className="font-bold text-xs text-amber-300">
                  {formatPricePreview(form.price)}
                </span>
              </div>
              <input
                type="number"
                required
                step="50000"
                placeholder="45000000"
                value={form.price}
                onChange={(e) => setForm({ ...form, price: e.target.value })}
                className="w-full rounded-md border border-white/15 bg-white/5 px-4 py-2.5 text-white focus:border-bronze focus:outline-none"
              />
            </div>
            <div>
              <label className="mb-1 block font-semibold text-xs uppercase tracking-wider text-bronze-l">
                Prime Location / Corridor *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. DLF Phase 1, Gurugram or Golf Course Road"
                value={form.location}
                onChange={(e) => setForm({ ...form, location: e.target.value })}
                className="w-full rounded-md border border-white/15 bg-white/5 px-4 py-2.5 text-white focus:border-bronze focus:outline-none"
              />
            </div>
          </div>

          {/* Area, BHK, Bathrooms */}
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="mb-1 block font-semibold text-xs uppercase tracking-wider text-bronze-l">
                Area (Sq.Ft)
              </label>
              <input
                type="number"
                placeholder="3200"
                value={form.area}
                onChange={(e) => setForm({ ...form, area: e.target.value })}
                className="w-full rounded-md border border-white/15 bg-white/5 px-4 py-2.5 text-white focus:border-bronze focus:outline-none"
              />
            </div>
            <div>
              <label className="mb-1 block font-semibold text-xs uppercase tracking-wider text-bronze-l">
                Bedrooms (BHK)
              </label>
              <select
                value={form.bedrooms}
                onChange={(e) => setForm({ ...form, bedrooms: e.target.value })}
                className="w-full rounded-md border border-white/15 bg-[#201e1b] px-4 py-2.5 text-white focus:border-bronze focus:outline-none"
              >
                <option value="0">Commercial / Office</option>
                <option value="1">1 BHK</option>
                <option value="2">2 BHK</option>
                <option value="3">3 BHK</option>
                <option value="4">4 BHK</option>
                <option value="5">5 BHK</option>
                <option value="6">6+ BHK / Grand Villa</option>
              </select>
            </div>
            <div>
              <label className="mb-1 block font-semibold text-xs uppercase tracking-wider text-bronze-l">
                Bathrooms
              </label>
              <input
                type="number"
                placeholder="4"
                value={form.bathrooms}
                onChange={(e) => setForm({ ...form, bathrooms: e.target.value })}
                className="w-full rounded-md border border-white/15 bg-white/5 px-4 py-2.5 text-white focus:border-bronze focus:outline-none"
              />
            </div>
          </div>

          {/* HD Image Selection */}
          <div>
            <div className="mb-1.5 flex items-center justify-between">
              <label className="block font-semibold text-xs uppercase tracking-wider text-bronze-l">
                High Definition Photo URL
              </label>
              <span className="text-[11px] text-white/50">Click preset or paste custom HD URL</span>
            </div>
            <div className="flex flex-wrap gap-2 mb-2">
              {SAMPLE_IMAGES.map((img) => (
                <button
                  key={img.label}
                  type="button"
                  onClick={() => setForm({ ...form, image: img.url })}
                  className={`rounded border px-2.5 py-1 text-xs transition ${
                    form.image === img.url
                      ? 'border-bronze bg-bronze text-white font-bold'
                      : 'border-white/20 bg-white/5 text-white/80 hover:bg-white/10'
                  }`}
                >
                  {img.label}
                </button>
              ))}
            </div>
            <input
              type="url"
              required
              value={form.image}
              onChange={(e) => setForm({ ...form, image: e.target.value })}
              className="w-full rounded-md border border-white/15 bg-white/5 px-4 py-2.5 text-white focus:border-bronze focus:outline-none"
            />
          </div>

          {/* RERA and Developer */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block font-semibold text-xs uppercase tracking-wider text-bronze-l">
                RERA Number or Registration
              </label>
              <input
                type="text"
                placeholder="RERA-GRG-1142-2023 or Ready Freehold"
                value={form.rera}
                onChange={(e) => setForm({ ...form, rera: e.target.value })}
                className="w-full rounded-md border border-white/15 bg-white/5 px-4 py-2.5 text-white focus:border-bronze focus:outline-none"
              />
            </div>
            <div>
              <label className="mb-1 block font-semibold text-xs uppercase tracking-wider text-bronze-l">
                Owner / Authorized Contact Phone
              </label>
              <input
                type="text"
                placeholder="+91-8800006689"
                value={form.contactPhone}
                onChange={(e) => setForm({ ...form, contactPhone: e.target.value })}
                className="w-full rounded-md border border-white/15 bg-white/5 px-4 py-2.5 text-white focus:border-bronze focus:outline-none"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="mb-1 block font-semibold text-xs uppercase tracking-wider text-bronze-l">
              Detailed Property Description & Key Highlights
            </label>
            <textarea
              rows={3}
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              className="w-full rounded-md border border-white/15 bg-white/5 px-4 py-2.5 text-white focus:border-bronze focus:outline-none"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-end gap-3 pt-3 border-t border-white/10">
            <button
              type="button"
              onClick={() => setIsAddModalOpen(false)}
              className="rounded px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white/70 hover:text-white"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded bg-gradient-to-r from-bronze to-amber-600 px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-white shadow-lg transition hover:brightness-110"
            >
              Publish & List Property
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
