import { useState, useEffect } from 'react'
import Reveal from './Reveal'
import { WhatsAppIcon, Arrow } from './Icons'
import { company } from '../data/site'
import { useProperties } from '../context/PropertyContext'

export const REAL_ESTATE_VIDEOS = [
  {
    id: 'cybercity-buildings-20s',
    youtubeId: 'mZiVlBQ8CnU',
    kicker: '20-Sec Iconic Architecture Reel',
    title: '20-Sec DLF Cyber City & High-Rise Towers (Indian Music Feel)',
    category: 'High-Rise Towers & Architecture',
    location: 'DLF Cyber City & DLF Phase 2, Gurugram',
    duration: '00:20',
    resolution: '4K Drone · Indian Feel',
    priceDisplay: '₹25 - 150+ Cr Assets',
    badge: '🎵 20s Indian Feel Music',
    thumbnail: 'https://img.youtube.com/vi/mZiVlBQ8CnU/maxresdefault.jpg',
    fallbackThumbnail: 'https://img.youtube.com/vi/mZiVlBQ8CnU/hqdefault.jpg',
    highlights: ['20-Sec High-Rise Building Tour', 'Indian Feel Background Music', 'DLF Iconic Glass Facades', 'Futuristic City Skyline'],
    description:
      'A fast 20-second cinematic drone tour of Gurugram’s world-famous DLF Cyber City and iconic high-rise architectural towers with Indian feel background music. Showcasing world-class commercial infrastructure, glass facades, and prime real estate.',
    stats: [
      { label: 'Duration', value: '00:20 Seconds' },
      { label: 'Audio', value: 'Indian Feel Music 🎵' },
      { label: 'Asset Type', value: 'High-Rise Towers & Skyline' },
      { label: 'Location', value: 'DLF Cyber City, Gurugram' },
    ],
  },
  {
    id: 'dlf-golf-links',
    youtubeId: 'Y3YEloKFJ0Q',
    kicker: 'Gurugram Billionaires Row',
    title: 'DLF Golf Links: The Camellias, Magnolias & Aralias',
    category: 'Gated Golf Community',
    location: 'Prime Golf Course Road, Gurugram',
    duration: '12:45',
    resolution: '4K Drone Aerial',
    priceDisplay: '₹35 - 190+ Cr',
    badge: 'Aerial & Architecture',
    thumbnail: 'https://img.youtube.com/vi/Y3YEloKFJ0Q/maxresdefault.jpg',
    fallbackThumbnail: 'https://img.youtube.com/vi/Y3YEloKFJ0Q/hqdefault.jpg',
    highlights: ['60+ Acres Landscaped Greens', 'Tri-Tower Masterpiece', 'Helipad & 7-Tier Security', 'Private Concierge Club'],
    description:
      'A cinematic drone and interior exploration of DLF Golf Links — home to corporate leaders and high-net-worth investors. Discover the security, architectural pedigree, and tranquil manicured fairways of DLF Phase 5.',
    stats: [
      { label: 'Asset Types', value: 'Luxury Condos & Penthouses' },
      { label: 'Corridor', value: 'Golf Course Road' },
      { label: 'Community', value: 'Ultra-HNW Gated' },
      { label: 'Amenities', value: 'Championship Golf Club' },
    ],
  },
  {
    id: 'luxury-villa-15s-music',
    youtubeId: '8cumXFw9TlY',
    kicker: '15-Sec Property Reel',
    title: '15-Sec Ultra-Modern Luxury Villa Tour (With Music)',
    category: '15s Music Walkthrough',
    location: 'Prime Luxury Enclave, Gurugram NCR',
    duration: '00:15',
    resolution: '4K 60fps · Music',
    priceDisplay: '₹15 - 22 Cr',
    badge: '🎵 15s With Music',
    thumbnail: 'https://img.youtube.com/vi/8cumXFw9TlY/maxresdefault.jpg',
    fallbackThumbnail: 'https://img.youtube.com/vi/8cumXFw9TlY/hqdefault.jpg',
    highlights: ['15-Second Cinematic Tour', 'Luxury Background Music', 'Double-Height Living Room', 'Designer Italian Finishes'],
    description:
      'A stunning 15-second cinematic real estate walkthrough set to luxury background music. Showcasing lavish double-height ceilings, designer chandeliers, marble staircase, and opulent architectural interiors.',
    stats: [
      { label: 'Duration', value: '00:15 Seconds' },
      { label: 'Audio', value: 'Luxury Music Track 🎵' },
      { label: 'Format', value: 'Cinematic Short Reel' },
      { label: 'Status', value: 'Ready to Move' },
    ],
  },
]

export default function VideoShowcase() {
  const [activeVideo, setActiveVideo] = useState(null)
  const { openBooking } = useProperties()

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setActiveVideo(null)
    }
    if (activeVideo) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [activeVideo])

  const handleBookVisit = (video) => {
    setActiveVideo(null)
    openBooking({
      id: video.id,
      title: video.title,
      priceDisplay: video.priceDisplay,
      location: video.location,
      category: video.category,
      area: video.stats[0]?.value || 'Prime Luxury',
    })
  }

  const getWhatsAppUrl = (videoTitle) => {
    const text = encodeURIComponent(
      `Hello Real Estate Square, I saw the video tour of "${videoTitle}" on your website and would like to receive verified pricing, floor plans, and arrange a private site visit.`
    )
    return `https://wa.me/${company.whatsapp}?text=${text}`
  }

  return (
    <section id="video-tours" className="relative isolate overflow-hidden bg-[#141312] py-12 md:py-16 text-white scroll-mt-20 border-t border-b border-bronze/20">
      {/* Subtle luxury ambient background glows */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-full bg-bronze/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-bronze-d/15 blur-3xl" />

      <div className="wrap relative">
        {/* Section Header */}
        <Reveal className="mb-10 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-bronze/40 bg-bronze/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-bronze-l mb-3">
            <span className="flex h-2 w-2 rounded-full bg-bronze animate-pulse" />
            <span>Cinematic Property Walkthroughs</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.15] mb-4">
            Experience Prime Real Estate In Motion
          </h2>

          <p className="text-sm sm:text-base text-[#ded8cb] leading-relaxed max-w-2xl mx-auto">
            Take an immersive high-definition walkthrough of iconic luxury penthouses, signature builder floors, and prime gated communities across Gurugram &amp; Delhi NCR.
          </p>
        </Reveal>

        {/* 3 Real Estate Videos Grid */}
        <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {REAL_ESTATE_VIDEOS.map((video, idx) => (
            <Reveal
              key={video.id}
              delay={idx * 120}
              className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-[#1d1b19] overflow-hidden shadow-2xl transition-all duration-300 hover:border-bronze hover:shadow-[0_20px_45px_-12px_rgba(189,149,77,0.35)] hover:-translate-y-1.5"
            >
              <div>
                {/* Video Thumbnail Wrapper with Play Button */}
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => setActiveVideo(video)}
                  onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setActiveVideo(video)}
                  className="relative aspect-[16/9] w-full overflow-hidden bg-black cursor-pointer select-none"
                  aria-label={`Watch video tour: ${video.title}`}
                >
                  <img
                    src={video.thumbnail}
                    onError={(e) => {
                      if (e.target.src !== video.fallbackThumbnail) {
                        e.target.src = video.fallbackThumbnail
                      }
                    }}
                    alt={video.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-108 group-hover:brightness-105"
                  />

                  {/* Dark Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141312] via-black/35 to-black/30 group-hover:via-black/20 transition-all duration-300" />

                  {/* Floating Badges */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    <span className="rounded bg-black/80 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-bronze-l border border-bronze/30 backdrop-blur-md">
                      {video.badge}
                    </span>
                  </div>

                  <div className="absolute top-3 right-3 flex items-center gap-1.5 rounded bg-black/80 px-2.5 py-1 text-[11px] font-semibold text-white/90 border border-white/15 backdrop-blur-md">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-ping" />
                    <span>{video.duration}</span>
                    <span className="text-white/40">·</span>
                    <span className="text-bronze-l font-bold text-[10px]">{video.resolution}</span>
                  </div>

                  {/* Glowing Animated Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-bronze text-white shadow-[0_0_30px_rgba(189,149,77,0.7)] transition-all duration-300 group-hover:scale-115 group-hover:bg-bronze-l group-hover:text-ink">
                      {/* Pulse Ring */}
                      <span className="absolute inset-0 rounded-full border-2 border-bronze-l/70 animate-ping opacity-40 pointer-events-none" />
                      {/* Play Triangle Icon */}
                      <svg
                        className="h-6 w-6 ml-1 transition-transform group-hover:translate-x-0.5"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>

                  {/* Category Chip at Bottom of Thumbnail */}
                  <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-xs text-white/80">
                    <span className="truncate font-medium text-[11px] tracking-wide text-bronze-l">
                      {video.category}
                    </span>
                    <span className="font-bold text-white text-[11px] bg-black/60 px-2 py-0.5 rounded">
                      {video.priceDisplay}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 sm:p-6">
                  <div className="mb-2 flex items-center gap-1.5 text-xs text-[#a8a29e]">
                    <svg className="h-3.5 w-3.5 text-bronze shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                    <span className="truncate">{video.location}</span>
                  </div>

                  <h3
                    onClick={() => setActiveVideo(video)}
                    className="font-serif text-lg sm:text-xl font-bold text-white leading-snug mb-3 cursor-pointer group-hover:text-bronze-l transition-colors"
                  >
                    {video.title}
                  </h3>

                  <p className="text-xs text-[#ded8cb]/80 leading-relaxed mb-4 line-clamp-2">
                    {video.description}
                  </p>

                  {/* Highlight Spec Chips */}
                  <div className="mb-5 flex flex-wrap gap-1.5">
                    {video.highlights.slice(0, 3).map((item, hIdx) => (
                      <span
                        key={hIdx}
                        className="inline-flex items-center gap-1 rounded bg-[#2a2825] px-2.5 py-1 text-[11px] font-medium text-[#ded8cb] border border-white/5"
                      >
                        <span className="text-bronze font-bold">✓</span>
                        <span>{item}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-5 pt-0 sm:p-6 sm:pt-0 border-t border-white/5 mt-auto">
                <div className="grid grid-cols-2 gap-2.5 pt-4">
                  <button
                    type="button"
                    onClick={() => setActiveVideo(video)}
                    className="cursor-pointer inline-flex items-center justify-center gap-1.5 rounded border border-bronze bg-bronze px-3 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-all duration-200 hover:border-bronze-d hover:bg-bronze-d hover:shadow-lg"
                  >
                    <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                    <span>Play Tour</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleBookVisit(video)}
                    className="cursor-pointer inline-flex items-center justify-center gap-1 rounded border border-white/20 bg-transparent px-3 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-all duration-200 hover:border-bronze hover:bg-white/10 hover:text-bronze-l"
                  >
                    <span>Book Visit</span>
                    <Arrow className="h-3 w-3" />
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

       
      </div>

      {/* Lightbox / Video Player Modal */}
      {activeVideo && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="video-modal-title"
          className="fixed inset-0 z-[150] flex items-center justify-center bg-black/90 p-3 sm:p-6 backdrop-blur-md animate-fade-in"
          onClick={(e) => e.target === e.currentTarget && setActiveVideo(null)}
        >
          <div className="relative flex flex-col max-h-[94vh] w-full max-w-4xl overflow-hidden rounded-2xl border border-bronze/40 bg-[#161513] text-[#f4efe6] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] animate-scale-up">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-white/10 bg-[#1d1b18] px-5 py-3.5">
              <div className="min-w-0 pr-4">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-bronze-l block">
                  {activeVideo.category} · {activeVideo.resolution}
                </span>
                <h3 id="video-modal-title" className="font-serif text-lg sm:text-xl font-bold text-white truncate">
                  {activeVideo.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setActiveVideo(null)}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-xl font-bold text-white/80 transition hover:bg-bronze hover:text-white"
                aria-label="Close video player"
              >
                ×
              </button>
            </div>

            {/* Video Player Iframe (16:9 responsive) */}
            <div className="relative aspect-[16/9] w-full bg-black">
              <iframe
                title={activeVideo.title}
                src={`https://www.youtube-nocookie.com/embed/${activeVideo.youtubeId}?autoplay=1&rel=0&modestbranding=1&playsinline=1${activeVideo.duration.startsWith('00:') ? `&loop=1&playlist=${activeVideo.youtubeId}` : ''}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 h-full w-full border-0"
              />
            </div>

            {/* Modal Footer & Property Details */}
            <div className="overflow-y-auto p-5 sm:p-6 max-h-[35vh]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
                <div>
                  <div className="flex items-center gap-2 text-xs text-[#a8a29e] mb-1">
                    <span className="text-bronze">📍</span>
                    <span>{activeVideo.location}</span>
                    <span className="text-white/30">·</span>
                    <span className="text-amber-300 font-semibold">{activeVideo.duration} Full Walkthrough</span>
                  </div>
                  <p className="font-serif text-2xl font-bold text-bronze-l">
                    {activeVideo.priceDisplay}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2.5">
                  <a
                    href={getWhatsAppUrl(activeVideo.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded bg-[#25D366] px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-black transition hover:bg-[#1ebd5a]"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    <span>Inquire on WhatsApp</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => handleBookVisit(activeVideo)}
                    className="inline-flex items-center gap-2 rounded border border-bronze bg-bronze px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-bronze-d"
                  >
                    <span>Schedule Site Visit</span>
                  </button>
                </div>
              </div>

              {/* Property Stats Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
                {activeVideo.stats.map((s, idx) => (
                  <div key={idx} className="rounded-lg bg-[#22201d] p-3 border border-white/5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-stone block mb-0.5">
                      {s.label}
                    </span>
                    <span className="font-serif text-sm sm:text-base font-semibold text-white">
                      {s.value}
                    </span>
                  </div>
                ))}
              </div>

              <p className="mt-4 text-xs text-[#ded8cb] leading-relaxed">
                {activeVideo.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
