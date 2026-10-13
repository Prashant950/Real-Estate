import { Link, useNavigate } from 'react-router-dom'
import Hero from '../components/Hero'
import { Arrow } from '../components/Icons'
import Reveal from '../components/Reveal'
import { useProperties } from '../context/PropertyContext'
import { ASSET_CATEGORIES, BUILDER_BENEFITS } from '../data/properties'
import { company, offices } from '../data/site'
import usePageMeta from '../hooks/usePageMeta'

export default function Home() {
  usePageMeta(
    'Real Estate Square | Assuring Best Properties & Complete Property Management',
    'Thorough leader in sale, purchase, leasing, turnkey construction & collaborations in Gurugram & Delhi NCR.'
  )

  const navigate = useNavigate()
  const { setSelectedCategory, setIsAddModalOpen } = useProperties()

  const handleCategoryClick = (catTitle) => {
    setSelectedCategory(catTitle)
    navigate('/properties')
  }

  return (
    <>
      {/* 1. Hero with Live Search & Filter Bar */}
      <Hero />

      {/* Section 2: Thorough Leadership in Sales, Purchase & Turnkey Development */}
      <section className="section bg-ivory pt-16 md:pt-24 lg:pt-28">
        <div className="wrap grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left: HD Luxury Villa with Dual Floating Badges & Gold Architectural Frame */}
          <Reveal className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl group border border-ink/10">
              <img
                src="https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1600&q=90"
                alt="Luxury Villa by Real Estate Square"
                loading="lazy"
                className="w-full aspect-[4/3] object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

              {/* Floating Top Trust Badge */}
              <div className="absolute top-4 right-4 rounded-full border border-white/30 bg-black/65 px-3.5 py-1 text-xs text-white backdrop-blur-md shadow-lg flex items-center gap-2">
                <span className="text-amber-400 font-bold">★</span>
                <span className="font-semibold text-bronze-l text-[11px] uppercase tracking-wider">
                  25+ Years of Trust · Delhi NCR
                </span>
              </div>

              {/* Floating Bottom Verified Card */}
              
            </div>

            {/* Decorative Gold Frame Offset */}
            <span
              className="absolute -z-10 rounded-2xl border-2 border-bronze/40 hidden sm:block shadow-sm"
              style={{ inset: '-16px 16px 16px -16px' }}
            />
          </Reveal>

          {/* Right: Leadership Copy, 3 Feature Pillars, & Action CTA */}
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-bronze/40 bg-sand/60 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-bronze-d mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-bronze" />
              <span>Advisory &amp; Turnkey Development</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.85rem] font-bold text-ink leading-[1.14] mb-4">
              Thorough Leadership in Sales, Purchase &amp; Turnkey Development
            </h2>

            <p className="mb-3.5 text-base sm:text-lg text-ink font-medium leading-relaxed">
              <strong className="text-bronze-d font-bold">Real Estate Square</strong> is an established market leader in sale, purchase, leasing, turnkey construction and corporate collaborations across Gurugram and Delhi NCR.
            </p>

            <p className="mb-7 text-stone text-xs sm:text-sm md:text-base leading-relaxed">
              We provide total property management, comprehensive legal documentation assistance, portfolio restructuring and authoritative valuations. With deep proprietary intelligence on transaction histories, we protect your capital and maximize returns.
            </p>

            {/* 3 Refined Feature Pillars with Gold Linear SVGs */}
            <div className="grid gap-3.5 sm:grid-cols-3 mb-8">
              {/* Pillar 1 */}
              <div className="group rounded-xl border border-ink/10 bg-white p-4.5 shadow-sm transition-all duration-300 hover:border-bronze hover:shadow-md hover:-translate-y-1">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-bronze/10 text-bronze transition-colors group-hover:bg-bronze group-hover:text-white">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    <line x1="11" y1="8" x2="11" y2="14" />
                    <line x1="8" y1="11" x2="14" y2="11" />
                  </svg>
                </div>
                <h4 className="font-serif text-base font-bold text-ink mb-1 group-hover:text-bronze-d transition-colors">
                  On-Demand Discovery
                </h4>
                <p className="text-[11px] text-stone leading-relaxed">
                  Curated access to off-market inventory &amp; prime corridor listings.
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="group rounded-xl border border-ink/10 bg-white p-4.5 shadow-sm transition-all duration-300 hover:border-bronze hover:shadow-md hover:-translate-y-1">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-bronze/10 text-bronze transition-colors group-hover:bg-bronze group-hover:text-white">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path d="M12 3v18M3 9l9-6 9 6M6 15l-3 4h6l-3-4zM18 15l-3 4h6l-3-4z" />
                  </svg>
                </div>
                <h4 className="font-serif text-base font-bold text-ink mb-1 group-hover:text-bronze-d transition-colors">
                  Due Diligence
                </h4>
                <p className="text-[11px] text-stone leading-relaxed">
                  Complete title check, registry verification &amp; zoning sanctions.
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="group rounded-xl border border-ink/10 bg-white p-4.5 shadow-sm transition-all duration-300 hover:border-bronze hover:shadow-md hover:-translate-y-1">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-bronze/10 text-bronze transition-colors group-hover:bg-bronze group-hover:text-white">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path d="M21 2l-2 2m-2-2l2 2M3 13l7 7 11-11-7-7L3 13z" />
                    <circle cx="7.5" cy="16.5" r="1.5" />
                  </svg>
                </div>
                <h4 className="font-serif text-base font-bold text-ink mb-1 group-hover:text-bronze-d transition-colors">
                  End-to-End Execution
                </h4>
                <p className="text-[11px] text-stone leading-relaxed">
                  Seamless drafting, registration, key handover &amp; fit-out support.
                </p>
              </div>
            </div>

            {/* Bottom Actions & Metrics Strip */}
           
          </Reveal>
        </div>
      </section>

      {/* Section 3: Distinct Asset Classes Handled with Authority */}
      <section id="asset-classes" className="section bg-[#f5f0e6] scroll-mt-20">
        <div className="wrap">
          <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-6 border-b border-ink/10 pb-6">
            <div>
              <span className="kicker">Core Specialization</span>
              <h2 className="h2 !mb-1 text-ink">Distinct Asset Classes Handled with Authority</h2>
              <p className="text-sm text-stone max-w-[60ch]">
                Curated portfolio segments managed with specialized legal and structural advisory.
              </p>
            </div>
            <Link to="/properties" className="btn btn-dark text-xs">
              View All Properties <Arrow />
            </Link>
          </Reveal>

          {/* 4 Cards Grid matching screenshot */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ASSET_CATEGORIES.filter((c) => c.id !== 'all').map((cat, idx) => (
              <Reveal key={cat.title} delay={idx * 80}>
                <div
                  onClick={() => handleCategoryClick(cat.title)}
                  className="group relative flex flex-col overflow-hidden rounded-xl bg-ink text-white shadow-lg cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src={cat.image}
                      alt={cat.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/20" />
                    <span className="absolute top-4 left-4 rounded bg-bronze px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-widest text-white shadow">
                      {cat.badge}
                    </span>
                  </div>

                  <div className="p-6">
                    <h3 className="font-serif text-2xl font-bold leading-snug mb-2 group-hover:text-bronze-l transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-[#d3cbbe] line-clamp-2 mb-4 leading-relaxed">
                      {cat.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-bronze-l group-hover:underline">
                      Explore Listings →
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Our Specialized Services */}
      <section id="services" className="section bg-white scroll-mt-20">
        <div className="wrap">
          <Reveal className="mb-12 text-center max-w-2xl mx-auto">
            <span className="kicker">Unmatched Capabilities</span>
            <h2 className="h2 !mb-3 text-ink">Our Specialized Services</h2>
            <p className="text-stone text-sm leading-relaxed">
              Proprietary execution standards backed by over two decades of local market intelligence, verified transactions, and high-trust client relationships.
            </p>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: '🔑',
                title: 'Sale & Purchase of all Properties',
                points: ['Complete documentation & title search', 'Private off-market investor networking', 'Transparent zero-conflict dealings'],
                desc: 'Active involvement in residential apartments, luxury builder floors, plots, and commercial assets across Gurugram & Delhi NCR.',
              },
              {
                icon: '🏢',
                title: 'Renting & Leasing of all Properties',
                points: ['MNC & expat tenant verification', 'Dispute-proof legal lease agreements', 'Seamless property handovers'],
                desc: 'Structured leasing solutions for penthouses, independent houses, commercial retail and corporate headquarters.',
              },
              {
                icon: '📈',
                title: 'Pre-Rented Commercial Properties',
                points: ['Assured 9% to 12% rental yield', 'Blue-chip bank & retail tenants', '100% bank-fundable verified assets'],
                desc: 'Secure cashflow-generating assets with locked-in long leases, high returns, and regular escalation schedules.',
              },
              {
                icon: '🏗️',
                title: 'Construction & Collaboration',
                points: ['Turnkey plot redevelopment', 'Joint development partnerships', 'German/Italian premium finishes'],
                desc: 'Bespoke architectural construction of lavish designer floors and independent homes with transparent milestone tracking.',
              },
            ].map((s, i) => (
              <Reveal
                key={s.title}
                delay={i * 70}
                className="group flex flex-col justify-between rounded-xl border border-ink/10 bg-[#faf8f4] p-7 transition-all duration-300 hover:border-bronze hover:bg-white hover:shadow-xl hover:-translate-y-1"
              >
                <div>
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-lg bg-bronze/10 text-3xl group-hover:bg-bronze group-hover:scale-110 transition-all">
                    {s.icon}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-ink mb-3 leading-snug">
                    {s.title}
                  </h3>
                  <p className="text-xs text-stone mb-4 leading-relaxed">
                    {s.desc}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {s.points.map((pt, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-stone">
                        <span className="text-bronze font-bold">✓</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to="/contact#enquiry"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-bronze-d hover:text-ink transition-colors"
                >
                  <span>Learn More</span>
                  <Arrow className="h-3 w-3" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Assuring Best Properties Across All Budgets */}
      <section className="section bg-[#f5f1ea]">
        <div className="wrap grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <span className="kicker">Tailored Acquisition</span>
            <h2 className="h2 !mb-4 text-ink">
              Assuring Best Properties Across All Budgets
            </h2>
            <p className="mb-4 text-base md:text-lg text-stone leading-relaxed">
              Whether you are an astute investor seeking high rental yields or a family looking for your forever residence in Delhi NCR, our extensive portfolio provides verified options across every tier.
            </p>
            <p className="mb-4 text-stone text-sm md:text-base leading-relaxed">
              From contemporary 3 BHK builder floors in emerging sectors to sprawling presidential penthouses on Golf Course Road, we conduct unbiased comparative analysis so you never overpay.
            </p>
            <p className="mb-6 text-stone text-sm md:text-base leading-relaxed">
              We take the <strong className="text-ink">quality of our customer service extremely seriously</strong> and strive to make your acquisition seamless, transparent, and legally sound.
            </p>

            <div className="rounded-lg border border-bronze/30 bg-white p-5 shadow-sm mb-7">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  <span className="h-10 w-10 rounded-full border-2 border-white bg-bronze flex items-center justify-center text-white font-bold text-xs">
                    4.9★
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-sm text-ink">Highest Client Trust Rating</h4>
                  <p className="text-xs text-stone">Over ₹500 Cr+ transactional volume closed without a single title dispute.</p>
                </div>
              </div>
            </div>

            <Link to="/projects" className="btn btn-dark text-xs">
              Search All Budgets <Arrow />
            </Link>
          </Reveal>

          {/* Right: Panoramic Living Room with Mountain/City View */}
          <Reveal className="relative">
            <div className="relative overflow-hidden rounded-xl shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=90"
                alt="Presidential Suites & Luxury Apartments"
                loading="lazy"
                className="w-full aspect-[4/3] object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Floating Headline Card on image matching screenshot */}
              <div className="absolute bottom-6 inset-x-6 rounded-lg bg-black/80 p-4 backdrop-blur-md border border-white/20 text-white">
                <span className="text-[10px] font-bold uppercase tracking-widest text-bronze-l block mb-0.5">
                  EXCLUSIVE SELECTION
                </span>
                <h4 className="font-serif text-xl font-bold leading-tight">
                  Presidential Suites &amp; Luxury Apartments
                </h4>
                <p className="text-xs text-[#d3cbbe] mt-1">
                  Floor-to-ceiling panoramic views, private elevators &amp; 5-star concierge services.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Section 6: Dark Gold Stats Banner ("Years of Excellence In Delhi NCR") */}
      <section className="relative isolate overflow-hidden bg-[#121110] py-20 text-white md:py-28">
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80')` }}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#121110] via-[#121110]/90 to-[#121110]/70" />

        <div className="wrap">
          <div className="mb-14 max-w-3xl">
            <span className="kicker !text-bronze-l">Legacy of Integrity</span>
            <h2 className="h2 text-white !mb-4">Years of Excellence In Delhi NCR</h2>
            <p className="font-serif text-xl md:text-2xl leading-relaxed text-[#ded8cb]">
              Our core foundation is built on deep proprietary knowledge of local property records, trusted community relationships, and swift conflict-free deal resolution.
            </p>
          </div>

          {/* 4 Big Metrics Grid */}
          <div className="grid grid-cols-2 gap-8 border-t border-white/15 pt-10 sm:grid-cols-4">
            <div>
              <span className="font-serif text-4xl md:text-5xl font-bold text-bronze-l block mb-1">
                ₹500+ Cr
              </span>
              <h4 className="text-sm font-bold uppercase tracking-wider text-white">Transaction Value</h4>
              <p className="text-xs text-white/60 mt-1">Closed successfully across NCR</p>
            </div>
            <div>
              <span className="font-serif text-4xl md:text-5xl font-bold text-bronze-l block mb-1">
                1,500+
              </span>
              <h4 className="text-sm font-bold uppercase tracking-wider text-white">Satisfied Families</h4>
              <p className="text-xs text-white/60 mt-1">Homebuyers &amp; corporate clients</p>
            </div>
            <div>
              <span className="font-serif text-4xl md:text-5xl font-bold text-bronze-l block mb-1">
                25+ Years
              </span>
              <h4 className="text-sm font-bold uppercase tracking-wider text-white">Market Leadership</h4>
              <p className="text-xs text-white/60 mt-1">Continuous presence in Gurugram</p>
            </div>
            <div>
              <span className="font-serif text-4xl md:text-5xl font-bold text-bronze-l block mb-1">
                99.8%
              </span>
              <h4 className="text-sm font-bold uppercase tracking-wider text-white">Title Clearance</h4>
              <p className="text-xs text-white/60 mt-1">Flawless legal due diligence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Benefits of New Builders Homes */}
      <section className="section bg-[#f5f1ea]">
        <div className="wrap">
          <Reveal className="mb-10 text-center max-w-2xl mx-auto">
            <span className="kicker">Finishing Standards</span>
            <h2 className="h2 !mb-2 text-ink">Benefits of New Builders Homes</h2>
            <p className="text-xs md:text-sm text-stone">
              Every newly constructed floor incorporates premier international fittings and sustainable smart-home amenities.
            </p>
          </Reveal>

          {/* 5 HD Gallery Cards matching screenshot */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {BUILDER_BENEFITS.map((b, idx) => (
              <Reveal key={b.title} delay={idx * 60}>
                <div className="group overflow-hidden rounded-xl bg-white border border-ink/10 shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl">
                  <div className="relative aspect-square overflow-hidden bg-sand">
                    <img
                      src={b.image}
                      alt={b.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                    <span className="absolute bottom-2.5 left-2.5 right-2.5 text-xs font-serif font-bold text-white leading-tight">
                      {b.title}
                    </span>
                  </div>
                  <div className="p-3 text-[11px] text-stone">
                    <p className="font-semibold text-ink mb-0.5">{b.sub}</p>
                    <p className="line-clamp-2 text-stone/80 text-[10px]">{b.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

     
    </>
  )
}
