import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { WhatsAppIcon } from './Icons'
import { company, navLinks } from '../data/site'

export default function Header() {
  const [small, setSmall] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  // Scroll detection for sticky header shadow
  useEffect(() => {
    const onScroll = () => setSmall(window.scrollY > 30)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close drawer on Escape key
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  // Close drawer when route changes
  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      {/* Main Luxury Navigation Bar */}
      <header
        className={`sticky top-0 z-50 border-b border-ink/10 bg-[#faf7f1]/95 backdrop-blur-md transition-all duration-300 ${
          small ? 'shadow-[0_12px_32px_-12px_rgba(0,0,0,0.28)]' : ''
        }`}
      >
        <div
          className={`wrap flex items-center justify-between transition-[height] duration-300 ${
            small ? 'h-[64px] sm:h-[68px] md:h-[76px]' : 'h-[72px] sm:h-[78px] md:h-[94px]'
          }`}
        >
          {/* Brand Logo */}
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2.5 sm:gap-3.5 leading-tight group py-1"
            aria-label="Real Estate Square - Home"
          >
            <div
              className={`relative flex items-center justify-center rounded-xl bg-white p-1 border border-bronze/35 shadow-sm transition-all duration-300 group-hover:border-bronze group-hover:shadow-md group-hover:scale-105 shrink-0 ${
                small ? 'h-9 w-9 sm:h-10 sm:w-10 md:h-11 md:w-11' : 'h-11 w-11 sm:h-12 sm:w-12 md:h-14 md:w-14'
              }`}
            >
              <img
                src="/logo.png"
                alt="Real Estate Square Official Logo"
                className="h-full w-full object-contain"
              />
            </div>
            <span className="font-serif text-[1.12rem] sm:text-[1.32rem] md:text-[1.52rem] font-bold uppercase tracking-[0.05em] text-ink leading-none">
              Real Estate Square
            </span>
          </Link>

          {/* Desktop Navigation Links (hidden on mobile, visible on lg) */}
          <nav aria-label="Main" className="hidden lg:flex items-center gap-7">
            <ul className="flex items-center gap-7">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <NavLink
                    to={l.to}
                    end={l.to === '/'}
                    className={({ isActive }) =>
                      `group relative block py-2 text-[0.92rem] font-bold tracking-wide transition-colors ${
                        isActive ? 'text-bronze-d' : 'text-ink hover:text-bronze-d'
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {l.label}
                        <span
                          className={`absolute bottom-0 left-0 h-[2.5px] bg-bronze transition-all duration-300 ${
                            isActive ? 'w-full' : 'w-0 group-hover:w-full'
                          }`}
                        />
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>

            <a
              href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent('Hello Real Estate Square, I would like to inquire about verified properties.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-bronze px-4 py-2 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-bronze-d shadow-sm ml-2"
            >
              <WhatsAppIcon className="h-3.5 w-3.5 fill-current" />
              <span>Inquire</span>
            </a>
          </nav>

          {/* Mobile Menu Hamburger Button */}
          <button
            type="button"
            aria-label={open ? 'Close navigation drawer' : 'Open navigation drawer'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="relative flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-lg border border-ink/20 bg-white shadow-xs lg:hidden cursor-pointer"
          >
            <span
              className={`absolute h-0.5 w-5 bg-ink transition-all duration-300 ${
                open ? 'rotate-45' : '-translate-y-1.5'
              }`}
            />
            <span
              className={`absolute h-0.5 w-5 bg-ink transition-opacity duration-300 ${
                open ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`absolute h-0.5 w-5 bg-ink transition-all duration-300 ${
                open ? '-rotate-45' : 'translate-y-1.5'
              }`}
            />
          </button>
        </div>
      </header>

      {/* ============================================================== */}
      {/* MOBILE RIGHT-TO-LEFT SLIDE DRAWER & BACKDROP OVERLAY          */}
      {/* ============================================================== */}

      {/* Dimmed Backdrop Overlay */}
      <div
        className={`fixed inset-0 z-[98] bg-black/65 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* Slide Drawer (Right to Left slide animation) */}
      <aside
        className={`fixed top-0 right-0 bottom-0 z-[99] flex w-[84vw] max-w-xs sm:max-w-sm flex-col justify-between bg-[#faf7f1] text-ink shadow-[-12px_0_50px_rgba(0,0,0,0.5)] border-l border-ink/10 transition-transform duration-300 ease-out lg:hidden ${
          open ? 'translate-x-0' : 'translate-x-full pointer-events-none'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
      >
        {/* Top Drawer Header */}
        <div className="flex items-center justify-between border-b border-ink/10 px-5 py-4 bg-white/80">
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3"
          >
            <div className="h-10 w-10 rounded-xl border border-bronze/40 p-1 bg-white shadow-sm flex items-center justify-center shrink-0">
              <img src="/logo.png" alt="Real Estate Square" className="h-full w-full object-contain" />
            </div>
            <div>
              <span className="font-serif text-base font-bold uppercase tracking-wider text-ink block leading-tight">
                Real Estate Square
              </span>
            </div>
          </Link>

          {/* Close Button (X) */}
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-sand/60 hover:bg-bronze hover:text-white text-ink transition-colors text-2xl font-bold cursor-pointer"
            aria-label="Close menu"
          >
            ×
          </button>
        </div>

        {/* Navigation Links Body */}
        <nav className="flex-1 overflow-y-auto px-4 py-5 space-y-4">
          <div>
            <span className="mb-2.5 px-3 block text-[10px] font-extrabold uppercase tracking-widest text-stone">
              Navigation
            </span>
            <ul className="space-y-1.5">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <NavLink
                    to={l.to}
                    end={l.to === '/'}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center justify-between rounded-xl px-4 py-3 text-sm font-bold tracking-wide transition-all ${
                        isActive
                          ? 'bg-bronze text-white shadow-md'
                          : 'text-ink hover:bg-sand/70 hover:text-bronze-d'
                      }`
                    }
                  >
                    <span>{l.label}</span>
                    <span className="text-xs opacity-60">➔</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact Actions in Drawer */}
         
        </nav>

       
      </aside>
    </>
  )
}
