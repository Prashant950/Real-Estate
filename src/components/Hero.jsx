import { useCallback, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useProperties } from '../context/PropertyContext'
import { Arrow } from './Icons'

const HERO_SLIDES = [
  {
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2560&q=95',
    title: 'Sky Duplexes & Presidential Penthouses',
    kicker: 'Panoramic Skyline Living',
    caption: 'Private lap pools, direct high-speed elevators & double-height decks',
  },
  {
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2560&q=95',
    title: 'Exclusive Independent Villas & Estates',
    kicker: 'Bespoke Residential Sanctuaries',
    caption: 'Gated ultra-luxury private residences with landscaped grounds',
  },
  {
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2560&q=95',
    title: 'Turnkey Hybrid Designer Floors',
    kicker: 'Architectural Excellence & Civil Craft',
    caption: 'Italian marble, Schüco fenestration & crystal-clear freehold titles',
  },
  {
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=2560&q=95',
    title: 'DLF Phase 1 & Golf Course Road Corridor',
    kicker: 'Gurugram & Delhi NCR Premier Assets',
    caption: 'Trophy high-rises & luxury condominiums with unhindered views',
  },
  {
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2560&q=95',
    title: 'High-Yield Pre-Leased Commercial & SCOs',
    kicker: 'Institutional Grade Capital Returns',
    caption: 'Assured 9% to 12% annual yields backed by blue-chip MNC leases',
  },
]

export default function Hero() {
  const { setIsAddModalOpen } = useProperties()

  const [activeSlide, setActiveSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const touchStartX = useRef(0)

  const nextSlide = useCallback(() => {
    setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length)
  }, [])

  const prevSlide = useCallback(() => {
    setActiveSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)
  }, [])

  // Fast Auto-Slide Interval (3.2 seconds)
  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(() => {
      nextSlide()
    }, 3200)
    return () => clearInterval(timer)
  }, [isPaused, nextSlide])

  // Mobile Touch Swipe Handling
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 40) {
      if (diff > 0) nextSlide()
      else prevSlide()
    }
  }

  return (
    <section
      aria-label="Hero Showcase"
      className="relative isolate overflow-hidden text-white h-[calc(100vh-80px)] min-h-[540px] max-h-[840px] flex items-center"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* 1. Clear Natural Full HD Auto-Sliding Images with ZERO Dark Overlays */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        {HERO_SLIDES.map((slide, index) => {
          const isActive = index === activeSlide
          return (
            <div
              key={slide.image}
              aria-hidden={!isActive}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                loading={index === 0 ? 'eager' : 'lazy'}
                className={`h-full w-full object-cover object-center ${
                  isActive ? 'animate-hero-motion' : 'scale-100'
                }`}
              />
            </div>
          )
        })}
      </div>

      {/* 2. Transparent Hero Foreground Content - Shifted right with larger typography & zero black box */}
      <div className="wrap relative z-20 w-full py-8 pl-4 sm:pl-12 md:pl-20 lg:pl-28 xl:pl-36">
        <div className="max-w-2xl lg:max-w-3xl animate-fade-in">
          {/* Main Headline - Larger, Grand & Transparent Background */}
          <h1 className="font-serif text-[clamp(2.3rem,4.8vw,4rem)] font-bold tracking-tight text-white leading-[1.08] mb-3 drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)]">
            REAL ESTATE SQUARE
            <span className="block font-normal italic text-bronze-l mt-1.5 text-[clamp(1.5rem,3.2vw,2.5rem)] drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
              Assuring Best Properties &amp; Complete Property Management
            </span>
          </h1>

          <p className="max-w-[56ch] text-sm sm:text-base md:text-lg text-white/95 leading-relaxed mb-7 drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)] font-medium">
            A thorough leader in sale, purchase, leasing, turnkey constructions, and high-yield commercial investments across Gurugram, DLF Phase 1, Golf Course Road, and South Delhi.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3.5">
            <Link
              to="/properties"
              className="group inline-flex items-center gap-2.5 rounded-md bg-gradient-to-r from-bronze to-amber-600 px-6 sm:px-7 py-3 text-xs sm:text-sm font-bold uppercase tracking-widest text-white shadow-[0_10px_25px_-5px_rgba(0,0,0,0.5)] transition duration-300 hover:brightness-110 hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Explore Properties</span>
              <Arrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>

  
          </div>
        </div>
      </div>

      {/* 3. Bottom Slide Controls & Indicators */}
      <div className="absolute bottom-5 inset-x-0 z-30 pointer-events-none">
        <div className="wrap flex items-center justify-between">
          {/* Slide Title Tag */}
          <div className="hidden sm:flex items-center gap-2 rounded-full border border-white/20 bg-black/50 px-3.5 py-1 text-xs backdrop-blur-md text-white shadow-lg pointer-events-auto">
            <span className="font-bold text-bronze-l">0{activeSlide + 1} / 0{HERO_SLIDES.length}</span>
            <span className="text-white/40">|</span>
            <span className="text-white/90 font-medium truncate max-w-[240px] md:max-w-md">
              {HERO_SLIDES[activeSlide].title}
            </span>
          </div>

          {/* Dots & Nav Arrows */}
          <div className="flex items-center gap-2 pointer-events-auto ml-auto">
            <div className="flex items-center gap-1.5 mr-2">
              {HERO_SLIDES.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    activeSlide === idx
                      ? 'w-6 bg-bronze shadow'
                      : 'w-2 bg-white/50 hover:bg-white/90'
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={prevSlide}
                aria-label="Previous Slide"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30 bg-black/50 text-xs text-white backdrop-blur-md transition hover:bg-bronze hover:border-bronze hover:text-white cursor-pointer shadow"
              >
                ←
              </button>
              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next Slide"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30 bg-black/50 text-xs text-white backdrop-blur-md transition hover:bg-bronze hover:border-bronze hover:text-white cursor-pointer shadow"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
