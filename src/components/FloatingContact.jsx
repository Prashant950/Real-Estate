import { company } from '../data/site'
import { WhatsAppIcon } from './Icons'

export default function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center group">
      {/* Tooltip badge */}
      <span className="pointer-events-none mr-3 hidden rounded-full bg-[#161513] px-3.5 py-1.5 text-xs font-bold text-[#faf8f4] shadow-xl border border-bronze/40 opacity-0 transition-all duration-300 group-hover:opacity-100 sm:inline-block">
        Chat with our Advisors
      </span>

      {/* Pulsing ring animation */}
      <span className="absolute right-0 h-14 w-14 rounded-full bg-emerald-500 opacity-75 animate-ping" />

      {/* Main Attractive WhatsApp Button */}
      <a
        href={`https://api.whatsapp.com/send?phone=${company.whatsapp}&text=${encodeURIComponent(
          'Hello Real Estate Square, I would like to inquire about premium properties in Gurugram / Delhi NCR.'
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-[#128c7e] via-[#25d366] to-[#25d366] text-white shadow-[0_10px_25px_-4px_rgba(37,211,102,0.6)] transition-all duration-300 hover:scale-110 hover:shadow-[0_15px_30px_-4px_rgba(37,211,102,0.8)]"
      >
        <WhatsAppIcon className="h-7 w-7 fill-white" />
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-75" />
          <span className="relative inline-flex h-4 w-4 rounded-full bg-emerald-400 border-2 border-white" />
        </span>
      </a>
    </div>
  )
}
