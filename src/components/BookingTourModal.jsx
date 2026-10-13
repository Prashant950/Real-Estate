import { useState } from 'react'
import { useProperties } from '../context/PropertyContext'

export default function BookingTourModal() {
  const { bookingProperty, closeBooking, notify } = useProperties()

  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    preferredDate: '',
    preferredTime: '11:00 AM - 01:00 PM',
    tourType: 'In-Person VIP Site Visit',
    notes: '',
  })

  if (!bookingProperty) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    notify(`Thank you, ${form.name}! Your ${form.tourType} for "${bookingProperty.title}" is confirmed. Our senior advisor will call you at ${form.phone}.`)
    closeBooking()
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-title"
      className="fixed inset-0 z-[120] flex items-center justify-center bg-black/85 p-4 backdrop-blur-md transition-all animate-fade-in"
      onClick={(e) => e.target === e.currentTarget && closeBooking()}
    >
      <div className="relative max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-xl border border-bronze/40 bg-[#161513] text-[#f4efe6] shadow-2xl">
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-white/10 bg-[#1c1b18] px-6 py-4">
          <div>
            <h2 id="booking-title" className="font-serif text-xl font-bold tracking-tight text-white">
              Schedule VIP Property Tour
            </h2>
            <p className="text-xs text-amber-300 font-medium truncate max-w-[320px]">
              {bookingProperty.title} ({bookingProperty.priceDisplay})
            </p>
          </div>
          <button
            type="button"
            onClick={closeBooking}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-xl text-white/70 transition hover:bg-bronze hover:text-white"
            aria-label="Close modal"
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 p-6 text-sm">
          <div>
            <label className="mb-1 block font-semibold text-xs uppercase tracking-wider text-bronze-l">
              Full Name *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Rahul Sharma"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full rounded-md border border-white/15 bg-white/5 px-4 py-2.5 text-white placeholder-white/40 focus:border-bronze focus:outline-none"
            />
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div>
              <label className="mb-1 block font-semibold text-xs uppercase tracking-wider text-bronze-l">
                Phone Number *
              </label>
              <input
                type="tel"
                required
                placeholder="+91 98765 43210"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full rounded-md border border-white/15 bg-white/5 px-4 py-2.5 text-white placeholder-white/40 focus:border-bronze focus:outline-none"
              />
            </div>
            <div>
              <label className="mb-1 block font-semibold text-xs uppercase tracking-wider text-bronze-l">
                Email Address
              </label>
              <input
                type="email"
                placeholder="rahul@example.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-md border border-white/15 bg-white/5 px-4 py-2.5 text-white placeholder-white/40 focus:border-bronze focus:outline-none"
              />
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div>
              <label className="mb-1 block font-semibold text-xs uppercase tracking-wider text-bronze-l">
                Preferred Date *
              </label>
              <input
                type="date"
                required
                value={form.preferredDate}
                onChange={(e) => setForm({ ...form, preferredDate: e.target.value })}
                className="w-full rounded-md border border-white/15 bg-[#201e1b] px-4 py-2.5 text-white focus:border-bronze focus:outline-none"
              />
            </div>
            <div>
              <label className="mb-1 block font-semibold text-xs uppercase tracking-wider text-bronze-l">
                Preferred Slot
              </label>
              <select
                value={form.preferredTime}
                onChange={(e) => setForm({ ...form, preferredTime: e.target.value })}
                className="w-full rounded-md border border-white/15 bg-[#201e1b] px-4 py-2.5 text-white focus:border-bronze focus:outline-none"
              >
                <option>10:00 AM - 12:00 PM</option>
                <option>12:00 PM - 02:00 PM</option>
                <option>02:00 PM - 04:00 PM</option>
                <option>04:00 PM - 06:30 PM</option>
              </select>
            </div>
          </div>

          <div>
            <label className="mb-1 block font-semibold text-xs uppercase tracking-wider text-bronze-l">
              Tour Preference
            </label>
            <div className="grid grid-cols-2 gap-2">
              {['In-Person VIP Site Visit', 'Live Video Walkthrough'].map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setForm({ ...form, tourType: t })}
                  className={`rounded border p-2 text-center text-xs font-semibold transition ${
                    form.tourType === t
                      ? 'border-bronze bg-bronze/20 text-bronze-l'
                      : 'border-white/15 bg-white/5 text-white/70 hover:bg-white/10'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="mb-1 block font-semibold text-xs uppercase tracking-wider text-bronze-l">
              Special Requirements / Queries
            </label>
            <textarea
              rows={2}
              placeholder="e.g. Inquiring about immediate loan sanction, floor plan or parking slots"
              value={form.notes}
              onChange={(e) => setForm({ ...form, notes: e.target.value })}
              className="w-full rounded-md border border-white/15 bg-white/5 px-4 py-2 text-white focus:border-bronze focus:outline-none"
            />
          </div>

          <div className="flex items-center justify-end gap-3 pt-3 border-t border-white/10">
            <button
              type="button"
              onClick={closeBooking}
              className="rounded px-4 py-2 text-xs font-bold uppercase tracking-wider text-white/70 hover:text-white"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded bg-gradient-to-r from-bronze to-amber-600 px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-white shadow-lg transition hover:brightness-110"
            >
              Confirm Tour Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
