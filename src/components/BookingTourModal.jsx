import { useState } from 'react'
import { useProperties } from '../context/PropertyContext'
import { CalendarBookIcon } from './Icons'

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
      className="fixed inset-0 z-[120] flex items-center justify-center bg-black/85 p-2 sm:p-4 backdrop-blur-md transition-all animate-fade-in"
      onClick={(e) => e.target === e.currentTarget && closeBooking()}
    >
      <div className="relative max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-bronze/40 bg-[#161513] text-[#f4efe6] shadow-2xl">
        <div className="sticky top-0 z-10 flex items-start justify-between gap-3 border-b border-white/10 bg-[#1c1b18]/95 backdrop-blur px-4 sm:px-6 py-3.5 sm:py-4">
          <div className="min-w-0 flex-1 pr-2">
            <h2 id="booking-title" className="font-serif text-lg sm:text-xl font-bold tracking-tight text-white leading-snug">
              Schedule VIP Property Tour
            </h2>
            <p className="text-xs text-amber-300 font-medium truncate mt-0.5">
              {bookingProperty.title} ({bookingProperty.priceDisplay})
            </p>
          </div>
          <button
            type="button"
            onClick={closeBooking}
            className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-xl font-bold text-white/70 transition hover:bg-bronze hover:text-white cursor-pointer"
            aria-label="Close modal"
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 p-4 sm:p-6 text-sm">
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
              className="w-full rounded-md border border-white/15 bg-white/5 px-3.5 py-2.5 text-white placeholder-white/40 focus:border-bronze focus:outline-none"
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
                className="w-full rounded-md border border-white/15 bg-white/5 px-3.5 py-2.5 text-white placeholder-white/40 focus:border-bronze focus:outline-none"
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
                className="w-full rounded-md border border-white/15 bg-white/5 px-3.5 py-2.5 text-white placeholder-white/40 focus:border-bronze focus:outline-none"
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
                className="w-full rounded-md border border-white/15 bg-[#201e1b] px-3.5 py-2.5 text-white focus:border-bronze focus:outline-none"
              />
            </div>
            <div>
              <label className="mb-1 block font-semibold text-xs uppercase tracking-wider text-bronze-l">
                Preferred Slot
              </label>
              <select
                value={form.preferredTime}
                onChange={(e) => setForm({ ...form, preferredTime: e.target.value })}
                className="w-full rounded-md border border-white/15 bg-[#201e1b] px-3.5 py-2.5 text-white focus:border-bronze focus:outline-none"
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
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 gap-2">
              {['In-Person VIP Site Visit', 'Live Video Walkthrough'].map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setForm({ ...form, tourType: t })}
                  className={`rounded border p-2.5 text-center text-xs font-semibold transition cursor-pointer ${
                    form.tourType === t
                      ? 'border-bronze bg-bronze/20 text-bronze-l font-bold'
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
              className="w-full rounded-md border border-white/15 bg-white/5 px-3.5 py-2 text-white focus:border-bronze focus:outline-none"
            />
          </div>

          <div className="flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-end gap-2.5 pt-3 border-t border-white/10">
            <button
              type="button"
              onClick={closeBooking}
              className="rounded px-4 py-2 text-xs font-bold uppercase tracking-wider text-white/70 hover:text-white transition cursor-pointer text-center"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded bg-gradient-to-r from-bronze to-amber-600 px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-white shadow-lg transition hover:brightness-110 cursor-pointer"
            >
              <CalendarBookIcon className="h-4 w-4" />
              <span>Confirm Tour Booking</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
