import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

/**
 * Premium Luxury Custom Select / Bottom Sheet for Mobile & Desktop
 * Eliminates the ugly dark native Android/iOS select popup and replaces it
 * with a bespoke ivory & bronze luxury selector matching the site design.
 */
export default function CustomSelect({
  label,
  value,
  onChange,
  options = [],
  placeholder = 'Select option...',
  className = '',
}) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  const selectedOption = options.find((opt) => opt.value === value) || options[0]

  // Close dropdown on outside click (desktop)
  useEffect(() => {
    if (!isOpen) return

    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false)
      }
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false)
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  // Mobile body scroll-lock when mobile sheet is open
  useEffect(() => {
    if (isOpen && typeof window !== 'undefined' && window.innerWidth < 640) {
      document.body.classList.add('modal-open-locked')
      const prevOverflow = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.classList.remove('modal-open-locked')
        document.body.style.overflow = prevOverflow
      }
    }
  }, [isOpen])

  const handleSelect = (val) => {
    onChange(val)
    setIsOpen(false)
  }

  return (
    <div ref={dropdownRef} className={`relative w-full min-w-0 ${className}`}>
      {label && (
        <label className="block text-[11px] font-bold uppercase tracking-wider text-stone mb-1 truncate">
          {label}
        </label>
      )}

      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className="w-full min-w-0 flex items-center justify-between gap-2 rounded-xl border border-ink/15 bg-sand/20 px-3 py-2.5 text-xs text-ink font-medium transition hover:border-bronze focus:border-bronze focus:bg-white focus:outline-none cursor-pointer text-left shadow-2xs min-h-[42px]"
      >
        <span className="truncate min-w-0 flex-1 block">
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <svg
          className={`h-3.5 w-3.5 text-stone shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-bronze' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* 1. Desktop Floating Menu (hidden on mobile, visible on sm:) */}
      {isOpen && (
        <div className="hidden sm:block absolute z-50 mt-1.5 w-full min-w-[220px] rounded-xl border border-bronze/30 bg-white py-1.5 shadow-[0_12px_32px_-8px_rgba(0,0,0,0.18)]">
          <div className="max-h-64 overflow-y-auto py-1 divide-y divide-ink/5">
            {options.map((opt) => {
              const isSelected = opt.value === value
              return (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => handleSelect(opt.value)}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 text-xs text-left transition cursor-pointer ${
                    isSelected
                      ? 'bg-sand/70 text-ink font-bold'
                      : 'text-stone hover:text-ink hover:bg-sand/30 font-medium'
                  }`}
                >
                  <div className="flex flex-col pr-2 min-w-0">
                    <span className="truncate">{opt.label}</span>
                    {opt.sublabel && (
                      <span className="text-[10px] text-stone/75 font-normal truncate mt-0.5">
                        {opt.sublabel}
                      </span>
                    )}
                  </div>
                  {isSelected && (
                    <span className="h-4 w-4 rounded-full bg-bronze text-white flex items-center justify-center text-[10px] shrink-0 font-bold ml-2">
                      ✓
                    </span>
                  )}
                </button>
              )
            })}
          </div>
        </div>
      )}

      {/* 2. Mobile Luxury Bottom Sheet (rendered directly to body to bypass any parent stacking context) */}
      {isOpen &&
        typeof document !== 'undefined' &&
        createPortal(
          <div className="sm:hidden fixed inset-0 z-[99999] flex flex-col justify-end">
            {/* Backdrop */}
            <div
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
            />

            {/* Bottom Sheet Modal Dialog */}
            <div className="relative z-10 w-full max-h-[85vh] overflow-y-auto rounded-t-3xl border-t border-bronze/40 bg-[#fdfbf7] p-5 pb-6 shadow-[0_-20px_50px_rgba(0,0,0,0.35)] animate-in slide-in-from-bottom duration-300">
              {/* Drag Handle Bar */}
              <div className="w-12 h-1.5 bg-ink/20 rounded-full mx-auto mb-3" />

              {/* Modal Header */}
              <div className="flex items-center justify-between border-b border-ink/10 pb-3 mb-3">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-bronze block">
                    REAL ESTATE SQUARE • FILTER
                  </span>
                  <h3 className="font-serif text-base font-bold text-ink">
                    {label || 'Choose Option'}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-sand/70 text-stone hover:text-ink hover:bg-sand font-bold text-sm cursor-pointer"
                  aria-label="Close selector"
                >
                  ✕
                </button>
              </div>

              {/* Options List */}
              <div className="space-y-2 py-1 max-h-[55vh] overflow-y-auto no-scrollbar">
                {options.map((opt) => {
                  const isSelected = opt.value === value
                  return (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => handleSelect(opt.value)}
                      className={`w-full flex items-center justify-between p-3.5 rounded-xl border text-left transition cursor-pointer min-h-[52px] ${
                        isSelected
                          ? 'bg-sand/70 border-bronze text-ink font-bold shadow-xs ring-1 ring-bronze/30'
                          : 'bg-white border-ink/10 text-stone hover:text-ink hover:bg-sand/20 font-medium'
                      }`}
                    >
                      <div className="flex flex-col pr-2 min-w-0">
                        <span className={`text-xs ${isSelected ? 'text-ink font-bold' : 'text-stone'}`}>
                          {opt.label}
                        </span>
                        {opt.sublabel && (
                          <span className="text-[10px] text-stone/80 font-normal mt-0.5">
                            {opt.sublabel}
                          </span>
                        )}
                      </div>

                      {/* Radio Checkmark Circle */}
                      <div
                        className={`h-5 w-5 rounded-full flex items-center justify-center border transition shrink-0 ml-2 ${
                          isSelected
                            ? 'border-bronze bg-bronze text-white shadow-xs'
                            : 'border-ink/25 bg-sand/20'
                        }`}
                      >
                        {isSelected ? (
                          <span className="text-xs font-bold leading-none">✓</span>
                        ) : (
                          <span className="h-2 w-2 rounded-full bg-transparent" />
                        )}
                      </div>
                    </button>
                  )
                })}
              </div>

              {/* Close / Done Button */}
              <div className="pt-3 mt-2 border-t border-ink/10">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="w-full rounded-xl bg-ink py-3 text-center text-xs font-bold uppercase tracking-wider text-white hover:bg-bronze transition shadow-sm cursor-pointer active:scale-[0.99]"
                >
                  Confirm Selection
                </button>
              </div>
            </div>
          </div>,
          document.body
        )}
    </div>
  )
}
