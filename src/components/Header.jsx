import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useProperties } from '../context/PropertyContext'
import { company, navLinks } from '../data/site'

export default function Header() {
  const [small, setSmall] = useState(false)
  const [open, setOpen] = useState(false)
  const { setIsAddModalOpen } = useProperties()

  useEffect(() => {
    const onScroll = () => setSmall(window.scrollY > 30)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      {/* Top Gold / Dark Notice Bar */}
     

      {/* Main Luxury Navigation Bar */}
      <header
        className={`sticky top-0 z-50 border-b border-ink/10 bg-[#faf7f1]/95 backdrop-blur-md transition-all duration-300 ${
          small ? 'shadow-[0_12px_32px_-12px_rgba(0,0,0,0.28)]' : ''
        }`}
      >
        <div
          className={`wrap flex items-center justify-between transition-[height] duration-300 ${
            small ? 'h-[68px] md:h-[76px]' : 'h-[78px] md:h-[94px]'
          }`}
        >
          {/* Brand Logo */}
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3.5 leading-tight group py-1"
            aria-label="Real Estate Square - Home"
          >
            <div
              className={`relative flex items-center justify-center rounded-xl bg-white p-1 border border-bronze/35 shadow-sm transition-all duration-300 group-hover:border-bronze group-hover:shadow-md group-hover:scale-105 shrink-0 ${
                small ? 'h-10 w-10 md:h-11 md:w-11' : 'h-12 w-12 md:h-14 md:w-14'
              }`}
            >
              <img
                src="/logo.png"
                alt="Real Estate Square Official Logo"
                className="h-full w-full object-contain"
              />
            </div>
            <span className="font-serif text-[1.22rem] font-bold uppercase tracking-[0.05em] text-ink sm:text-[1.52rem] leading-none">
              Real Estate Square
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main"
            className={`absolute inset-x-0 top-full overflow-hidden border-b border-ink/10 bg-[#faf7f1] transition-[max-height] duration-500 lg:static lg:max-h-none lg:border-0 lg:bg-transparent ${
              open ? 'max-h-[90vh] shadow-2xl' : 'max-h-0'
            }`}
          >
            <ul className="flex flex-col px-6 pb-6 pt-3 lg:flex-row lg:items-center lg:gap-7 lg:p-0">
              {navLinks.map((l) => (
                <li key={l.to} className="border-b border-ink/5 lg:border-0">
                  <NavLink
                    to={l.to}
                    end={l.to === '/'}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `group relative block py-3.5 text-[0.92rem] font-bold tracking-wide transition-colors ${
                        isActive ? 'text-bronze-d' : 'text-ink hover:text-bronze-d'
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {l.label}
                        <span
                          className={`absolute bottom-0 left-0 hidden h-[2.5px] bg-bronze transition-all duration-300 lg:block ${
                            isActive ? 'w-full' : 'w-0 group-hover:w-full'
                          }`}
                        />
                      </>
                    )}
                  </NavLink>
                </li>
              ))}

             

              
            </ul>
          </nav>

          {/* Desktop Right Action Buttons */}
          

          {/* Mobile Menu Hamburger */}
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="relative flex h-11 w-11 items-center justify-center rounded border border-ink/20 bg-white/70 lg:hidden cursor-pointer"
          >
            <span
              className={`absolute h-0.5 w-6 bg-ink transition-all duration-300 ${
                open ? 'rotate-45' : '-translate-y-2'
              }`}
            />
            <span
              className={`absolute h-0.5 w-6 bg-ink transition-opacity duration-300 ${
                open ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`absolute h-0.5 w-6 bg-ink transition-all duration-300 ${
                open ? '-rotate-45' : 'translate-y-2'
              }`}
            />
          </button>
        </div>
      </header>
    </>
  )
}
