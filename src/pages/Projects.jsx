import { useState } from 'react'
import { Link } from 'react-router-dom'
import CtaBand from '../components/CtaBand'
import { Arrow, WhatsAppIcon, CalendarBookIcon } from '../components/Icons'
import PageBanner from '../components/PageBanner'
import Reveal from '../components/Reveal'
import { useProperties } from '../context/PropertyContext'
import { TREVOC_PROJECT_INFO, TREVOC_PROPERTIES } from '../data/properties'
import { company } from '../data/site'
import usePageMeta from '../hooks/usePageMeta'

export default function Projects() {
  usePageMeta(
    'TREVOC Royal Residences | Sector 56 Golf Course Road Gurgaon | Current Projects',
    'Explore TREVOC Royal Residences in Sector 56, Golf Course Road, Gurgaon. 172 exclusive residences across 2 iconic towers. Spacious 3 & 4 BHK + Utility, 50,000 sq. ft Club Royal and 36,000 sq. ft Skydeck.'
  )

  const { openDetails, openBooking } = useProperties()
  const [activeTab, setActiveTab] = useState('overview') // 'overview' | 'club-royal' | 'skydeck' | 'features' | 'location'
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  const galleryImages = [
    { src: '/images/trevoc/exterior.jpg', title: '2 Iconic Towers from 80 Ft Elevated Podium', tag: 'Architecture' },
    { src: '/images/trevoc/club_royal.jpg', title: 'Club Royal (50,000 Sq.Ft) Sunken Seating Restaurant', tag: 'Club Royal' },
    { src: '/images/trevoc/skydeck.jpg', title: 'Skydeck (36,000 Sq.Ft) Rooftop Track & Cabanas', tag: 'Skydeck' },
    { src: '/images/trevoc/living.jpg', title: 'Spacious Living Room with 11 Ft Ceilings & Deck', tag: 'Interiors' },
    { src: '/images/trevoc/master_suite.jpg', title: 'Master Bedroom Suite with Golf Course Views', tag: 'Master Suite' },
    { src: '/images/trevoc/pool.jpg', title: 'Temperature-Controlled Swimming Pool & Spa', tag: 'Wellness' },
    { src: '/images/trevoc/lobby.jpg', title: 'Triple-Height Grand Lobby & Biometric Lifts', tag: 'Grand Arrival' },
  ]

  return (
    <>
      {/* 1. Page Banner */}
      <PageBanner
        title="TREVOC Royal Residences"
        image="slideshow/slide1.jpg"
        alt="TREVOC Royal Residences Sector 56 Golf Course Road Gurgaon"
      />

      <section className="section bg-[#f5f1ea] pt-8 pb-20 md:pb-28">
        <div className="wrap">
          {/* Header & Badges */}
          <div className="mb-8 border-b border-ink/10 pb-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-bronze/40 bg-sand/60 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-bronze-d">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Flagship Project · Golf Course Road, Gurgaon</span>
                </div>
                <h1 className="h2 !mb-2 text-ink">
                  TREVOC Royal Residences — Sector 56
                </h1>
                <p className="max-w-[76ch] text-stone text-xs sm:text-sm md:text-base leading-relaxed">
                  A luxury residential development designed around space, privacy, elevated living and premium amenities. Limited collection of 172 residences positioned from 80 ft above ground across 2 iconic towers.
                </p>
              </div>

              {/* RERA Badge */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-lg border border-bronze/30 bg-white px-3.5 py-2 text-xs font-bold text-ink shadow-sm">
                  🏛️ {TREVOC_PROJECT_INFO.rera}
                </span>
                <span className="rounded-lg bg-ink px-3.5 py-2 text-xs font-bold uppercase tracking-wider text-bronze-l shadow-sm">
                  172 Residences Only
                </span>
              </div>
            </div>
          </div>

          {/* 2. Hero Interactive Visual & Quick Details Table */}
          <div className="mb-12 grid gap-8 lg:grid-cols-12 items-stretch">
            {/* Left: Active Gallery Showcase (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-between overflow-hidden rounded-2xl border border-ink/10 bg-white p-4 sm:p-5 shadow-lg">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-ink">
                <img
                  src={galleryImages[activeImageIndex].src}
                  alt={galleryImages[activeImageIndex].title}
                  decoding="async"
                  className="h-full w-full object-cover transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <div>
                    <span className="rounded bg-bronze px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow">
                      {galleryImages[activeImageIndex].tag}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mt-1 drop-shadow">
                      {galleryImages[activeImageIndex].title}
                    </h3>
                  </div>
                  <span className="text-xs text-amber-200 font-semibold bg-black/60 px-2.5 py-1 rounded backdrop-blur-sm">
                    Sector 56, Golf Course Rd
                  </span>
                </div>
              </div>

              {/* Thumbnails */}
              <div className="mt-4 flex gap-2.5 overflow-x-auto pb-1">
                {galleryImages.map((g, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative h-16 w-24 shrink-0 overflow-hidden rounded-lg border-2 transition cursor-pointer ${
                      activeImageIndex === idx
                        ? 'border-bronze ring-2 ring-bronze/40 scale-105'
                        : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={g.src} alt={g.title} loading="lazy" decoding="async" className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Key Project Details Table (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl border border-ink/10 bg-white p-4 sm:p-6 md:p-7 shadow-lg">
              <div>
                <div className="flex items-center justify-between border-b border-ink/10 pb-4 mb-4">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-widest text-bronze block">
                      Official Project Data
                    </span>
                    <h2 className="font-serif text-2xl font-bold text-ink">
                      Key Project Details
                    </h2>
                  </div>
                  <span className="rounded bg-sand px-3 py-1 text-xs font-bold text-bronze-d">
                    Golf Course Road
                  </span>
                </div>

                {/* Table matching user specification */}
                <div className="overflow-hidden rounded-xl border border-ink/10 text-xs">
                  <div className="grid grid-cols-2 divide-x divide-ink/10 border-b border-ink/10 bg-ivory/80 p-3 font-semibold text-stone">
                    <span>DETAIL</span>
                    <span className="pl-3">INFORMATION</span>
                  </div>
                  <div className="divide-y divide-ink/10">
                    <div className="grid grid-cols-2 divide-x divide-ink/10 p-3">
                      <span className="font-bold text-ink">Location</span>
                      <span className="pl-3 text-stone">Sector 56, Golf Course Road, Gurgaon</span>
                    </div>
                    <div className="grid grid-cols-2 divide-x divide-ink/10 p-3 bg-ivory/30">
                      <span className="font-bold text-ink">Total Residences</span>
                      <span className="pl-3 text-bronze-d font-bold">172 residences</span>
                    </div>
                    <div className="grid grid-cols-2 divide-x divide-ink/10 p-3">
                      <span className="font-bold text-ink">Towers</span>
                      <span className="pl-3 text-ink font-semibold">2 iconic towers</span>
                    </div>
                    <div className="grid grid-cols-2 divide-x divide-ink/10 p-3 bg-ivory/30">
                      <span className="font-bold text-ink">Configurations</span>
                      <span className="pl-3 text-ink font-semibold">3 BHK + Utility and 4 BHK + Utility</span>
                    </div>
                    <div className="grid grid-cols-2 divide-x divide-ink/10 p-3">
                      <span className="font-bold text-ink">3 BHK + Utility</span>
                      <span className="pl-3 text-ink font-bold">2,642 sq. ft</span>
                    </div>
                    <div className="grid grid-cols-2 divide-x divide-ink/10 p-3 bg-ivory/30">
                      <span className="font-bold text-ink">4 BHK + Utility</span>
                      <span className="pl-3 text-ink font-bold">3,380 sq. ft</span>
                    </div>
                    <div className="grid grid-cols-2 divide-x divide-ink/10 p-3">
                      <span className="font-bold text-ink">Elevated Living</span>
                      <span className="pl-3 text-stone">Residences from 80 ft above ground</span>
                    </div>
                    <div className="grid grid-cols-2 divide-x divide-ink/10 p-3 bg-ivory/30">
                      <span className="font-bold text-ink">Ceiling Height</span>
                      <span className="pl-3 text-stone">11 ft clear ceiling heights</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://wa.me/918800006689?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20TREVOC%20Royal%20Residences%20Sector%2056%2C%20Golf%20Course%20Road%20Gurgaon."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-4 py-3 text-xs font-bold uppercase tracking-wider text-white shadow transition hover:bg-[#1ebd59]"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  <span>Inquire on WhatsApp</span>
                </a>
                <button
                  type="button"
                  onClick={() => openBooking(TREVOC_PROPERTIES[0])}
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-ink px-4 py-3 text-xs font-bold uppercase tracking-wider text-white shadow transition hover:bg-bronze cursor-pointer"
                >
                  <CalendarBookIcon className="h-4 w-4 text-bronze-l" />
                  <span>Book Site Visit</span>
                </button>
              </div>
            </div>
          </div>

          {/* 3. Section Navigation Tabs */}
          <div className="mb-10 flex flex-wrap items-center justify-center gap-2 border-b border-ink/10 pb-4">
            {[
              { id: 'overview', label: 'Residences & Configurations' },
              { id: 'club-royal', label: 'Club Royal (50,000 Sq.Ft)' },
              { id: 'skydeck', label: 'Skydeck (36,000 Sq.Ft)' },
              { id: 'features', label: 'Signature Features' },
              { id: 'location', label: 'Location Advantage' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-full px-5 py-2 text-xs font-bold uppercase tracking-wider transition cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-bronze text-white shadow-md'
                    : 'bg-white text-stone border border-ink/10 hover:border-bronze hover:text-ink'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* 4. Tab 1: Available Configurations & Residences Cards */}
          {(activeTab === 'overview' || activeTab === 'all') && (
            <div className="mb-16">
              <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
                <div>
                  <span className="kicker !mb-1 text-bronze">Palatial Living</span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink">
                    Spacious 3 &amp; 4 BHK + Utility Residences
                  </h2>
                </div>
                <span className="text-xs font-semibold text-stone">
                  Positioned from 80 ft above ground · 11 ft ceiling heights
                </span>
              </div>

              <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
                {TREVOC_PROPERTIES.map((p, idx) => (
                  <Reveal
                    key={p.id}
                    delay={idx * 60}
                    className="group flex flex-col overflow-hidden rounded-2xl bg-white border border-ink/10 shadow-[0_12px_32px_-16px_rgba(0,0,0,0.12)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-20px_rgba(0,0,0,0.22)] hover:border-bronze/50"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-sand">
                      <img
                        src={p.image}
                        alt={p.title}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-108"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
                      <div className="absolute top-3 inset-x-3 flex items-center justify-between gap-2">
                        <span className="rounded bg-ink/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-bronze-l backdrop-blur-sm shadow">
                          {p.tag}
                        </span>
                        <span className="rounded bg-black/60 px-2 py-0.5 text-[10px] font-semibold text-white/90 backdrop-blur-sm">
                          {p.type}
                        </span>
                      </div>
                      <div className="absolute bottom-3 left-3 right-3 flex items-baseline justify-between">
                        <div>
                          <span className="text-[10px] uppercase font-bold tracking-widest text-white/80 block">
                            Pricing
                          </span>
                          <span className="font-serif text-2xl font-bold text-white drop-shadow">
                            {p.priceDisplay}
                          </span>
                        </div>
                        <span className="text-xs text-amber-200 font-semibold bg-black/50 px-2.5 py-1 rounded backdrop-blur-sm">
                          {p.area}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col justify-between p-6">
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-bronze block mb-1">
                          Sector 56, Golf Course Road
                        </span>
                        <h3 className="font-serif text-xl font-bold leading-snug text-ink mb-2 group-hover:text-bronze-d transition-colors">
                          {p.title}
                        </h3>

                        {/* Quick Spec Pills */}
                        <div className="mb-4 grid grid-cols-3 divide-x divide-ink/10 rounded-lg border border-ink/10 bg-ivory/80 py-2 text-center text-xs">
                          <div>
                            <span className="block text-stone text-[10px] uppercase">Super Area</span>
                            <span className="font-bold text-ink">{p.area}</span>
                          </div>
                          <div>
                            <span className="block text-stone text-[10px] uppercase">Elevation</span>
                            <span className="font-bold text-ink">80+ Ft</span>
                          </div>
                          <div>
                            <span className="block text-stone text-[10px] uppercase">Ceilings</span>
                            <span className="font-bold text-ink">11 Ft</span>
                          </div>
                        </div>

                        <p className="text-xs text-stone line-clamp-2 leading-relaxed mb-4">
                          {p.description}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 pt-3 border-t border-ink/10">
                        <button
                          type="button"
                          onClick={() => openDetails(p)}
                          className="flex-1 rounded border border-ink/20 bg-transparent py-2.5 text-center text-xs font-bold uppercase tracking-wider text-ink transition hover:border-ink hover:bg-ink hover:text-white cursor-pointer"
                        >
                          View Details
                        </button>
                        <button
                          type="button"
                          onClick={() => openBooking(p)}
                          className="flex-1 inline-flex items-center justify-center gap-1.5 rounded bg-bronze py-2.5 text-center text-xs font-bold uppercase tracking-wider text-white transition hover:bg-bronze-d shadow-sm cursor-pointer"
                        >
                          <CalendarBookIcon className="h-3.5 w-3.5 text-white" />
                          <span>Schedule</span>
                        </button>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          )}

          {/* 5. Tab 2: Club Royal — 50,000 Sq. Ft of Curated Luxury */}
          {(activeTab === 'club-royal' || activeTab === 'all') && (
            <div className="mb-16 rounded-2xl border border-bronze/30 bg-white p-7 sm:p-10 shadow-xl">
              <div className="mb-8 grid gap-8 lg:grid-cols-2 items-center">
                <div>
                  <span className="kicker !mb-1 text-bronze">Curated Hospitality</span>
                  <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink">
                    Club Royal — 50,000 Sq. Ft of Curated Luxury
                  </h2>
                  <p className="text-stone text-xs sm:text-sm md:text-base leading-relaxed mt-3">
                    Immerse yourself in world-class hospitality, sports, culinary excellence, and holistic wellness spread across 50,000 sq. ft of private, resident-only indulgence.
                  </p>
                </div>
                <div className="overflow-hidden rounded-xl shadow-lg">
                  <img
                    src="/images/trevoc/club_royal.jpg"
                    alt="Club Royal Fine Dining with Sunken Seating"
                    loading="lazy"
                    decoding="async"
                    className="w-full aspect-[16/9] object-cover"
                  />
                </div>
              </div>

              {/* 8 Curated Amenities Grid */}
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {TREVOC_PROJECT_INFO.clubRoyalAmenities.map((amenity, idx) => (
                  <div
                    key={idx}
                    className="group rounded-xl border border-ink/10 bg-ivory/60 p-5 transition-all duration-300 hover:border-bronze hover:bg-white hover:shadow-md hover:-translate-y-1"
                  >
                    <div className="mb-3 text-2xl group-hover:scale-110 transition-transform">
                      {amenity.icon}
                    </div>
                    <h3 className="font-serif text-base font-bold text-ink mb-1 group-hover:text-bronze-d transition-colors">
                      {amenity.title}
                    </h3>
                    <p className="text-xs text-stone leading-relaxed">
                      {amenity.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 6. Tab 3: Skydeck — 36,000 Sq. Ft of Open-to-Sky Experiences */}
          {(activeTab === 'skydeck' || activeTab === 'all') && (
            <div className="mb-16 rounded-2xl border border-bronze/30 bg-[#121110] text-white p-7 sm:p-10 shadow-2xl">
              <div className="mb-8 grid gap-8 lg:grid-cols-2 items-center">
                <div>
                  <span className="kicker !text-bronze-l">Rooftop Oasis</span>
                  <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
                    Skydeck — 36,000 Sq. Ft of Open-to-Sky Experiences
                  </h2>
                  <p className="text-[#d3cbbe] text-xs sm:text-sm md:text-base leading-relaxed mt-3">
                    Hovering high above Golf Course Road, the 36,000 sq. ft Skydeck brings starlit cinema, panoramic horizon vistas, tranquil yoga, and vibrant social cabanas.
                  </p>
                </div>
                <div className="overflow-hidden rounded-xl border border-white/20 shadow-lg">
                  <img
                    src="/images/trevoc/skydeck.jpg"
                    alt="Rooftop Skydeck Jogging Track & Cabanas"
                    loading="lazy"
                    decoding="async"
                    className="w-full aspect-[16/9] object-cover"
                  />
                </div>
              </div>

              {/* 6 Experiences Grid */}
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {TREVOC_PROJECT_INFO.skydeckExperiences.map((exp, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:border-bronze hover:bg-white/10"
                  >
                    <div className="mb-3 text-2xl">{exp.icon}</div>
                    <h3 className="font-serif text-lg font-bold text-white mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-xs text-[#c6beb0] leading-relaxed">
                      {exp.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 7. Tab 4: Signature Features */}
          {(activeTab === 'features' || activeTab === 'all') && (
            <div className="mb-16 rounded-2xl border border-ink/10 bg-white p-7 sm:p-10 shadow-lg">
              <div className="mb-8 max-w-2xl">
                <span className="kicker !mb-1 text-bronze">Uncompromising Standards</span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink">
                  Signature Features
                </h2>
                <p className="text-stone text-xs sm:text-sm mt-2">
                  Every architectural element has been refined for elevated privacy, pure air, and quiet sophistication.
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {TREVOC_PROJECT_INFO.signatureFeatures.map((feat, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-ink/5 bg-sand/30 p-5 transition-all hover:bg-sand/60"
                  >
                    <span className="inline-block text-bronze font-bold text-sm mb-1.5">
                      ★ Feature {idx + 1}
                    </span>
                    <h3 className="font-serif text-base font-bold text-ink mb-1.5">
                      {feat.title}
                    </h3>
                    <p className="text-xs text-stone leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 8. Tab 5: Location Advantage */}
          {(activeTab === 'location' || activeTab === 'all') && (
            <div className="mb-16 rounded-2xl border border-ink/10 bg-white p-7 sm:p-10 shadow-lg">
              <div className="mb-8 max-w-2xl">
                <span className="kicker !mb-1 text-bronze">Coveted Address</span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink">
                  Location Advantage — Sector 56, Golf Course Road
                </h2>
                <p className="text-stone text-xs sm:text-sm mt-2">
                  Prime placement with seamless connectivity across Gurugram and Central/South Delhi.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {TREVOC_PROJECT_INFO.locationAdvantages.map((adv, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 rounded-xl border border-ink/5 bg-ivory/80 p-4"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-bronze/10 text-bronze font-bold text-xs">
                      📍
                    </span>
                    <span className="text-xs sm:text-sm text-ink leading-relaxed font-medium">
                      {adv}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 9. Project Highlights Summary Checklist */}
          <div className="rounded-2xl border border-bronze/30 bg-sand/50 p-7 sm:p-9 shadow-md">
            <div className="mb-5">
              <span className="kicker !mb-1 text-bronze">Executive Summary</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink">
                Project Highlights
              </h2>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {[
                'Limited collection of 172 residences',
                'Two iconic towers',
                'Spacious 3 & 4 BHK + Utility residences',
                '50,000 sq. ft Club Royal',
                '36,000 sq. ft Skydeck',
                'Elevated residences from 80 ft above ground',
                '11 ft clear ceiling heights',
                'Premium lifestyle amenities & privacy design',
              ].map((hl, idx) => (
                <div key={idx} className="flex items-center gap-2.5 rounded-lg bg-white p-3 border border-ink/5 shadow-xs">
                  <span className="text-emerald-700 font-bold">✓</span>
                  <span className="text-xs font-semibold text-ink">{hl}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cross link to Adani Plots */}
      <section className="bg-ink py-12 text-white">
        <div className="wrap flex flex-wrap items-center justify-between gap-6">
          <div>
            <span className="kicker !text-bronze-l">Interested in Plotted Land Development?</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1">
              Explore ADANI PLOTS — Sector 63, Golf Extension Road
            </h2>
            <p className="text-xs sm:text-sm text-[#d3cbbe] mt-1 max-w-[65ch]">
              170, 253 &amp; 267 Sq. Yd. residential plots adjacent to DLF The Arbour. S+4 floors approved with 60–90 days payment terms.
            </p>
          </div>
          <Link to="/properties" className="btn btn-bronze text-xs">
            View Adani Plots <Arrow />
          </Link>
        </div>
      </section>

      <CtaBand title="Schedule a Private VIP Presentation for TREVOC Royal Residences" showName={false} />
    </>
  )
}
