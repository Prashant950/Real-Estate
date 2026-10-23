import { Link } from 'react-router-dom'
import CtaBand from '../components/CtaBand'
import { Arrow } from '../components/Icons'
import PageBanner from '../components/PageBanner'
import Reveal from '../components/Reveal'
import { company, img, values } from '../data/site'
import usePageMeta from '../hooks/usePageMeta'

export default function About() {
  usePageMeta(
    'About Us | Real Estate Square - Leadership & Legacy in Delhi NCR',
    company.description
  )

  return (
    <>
      <PageBanner
        title="About Real Estate Square"
        image="bg/about_us_banner.jpg"
        alt="About Real Estate Square premier real estate advisory"
      />

      {/* 1. Director Profile Section - Compact & Elegant Photo */}
      <section className="section bg-white">
        <div className="wrap">
          <div className="grid items-center gap-10 lg:grid-cols-[auto_1fr] lg:gap-16">
            {/* Chhota & Dignified Executive Portrait of Mr. Honey Taneja */}
            <Reveal className="flex justify-center lg:justify-start">
              <div className="relative w-full max-w-[280px] sm:max-w-[310px] overflow-hidden rounded-2xl border-2 border-bronze/40 bg-gradient-to-b from-[#f5eee1] via-sand to-[#d9ceb9] shadow-xl group">
                <div className="aspect-[4/4.8] overflow-hidden">
                  <img
                    src={img('bg/honey-taneja.png')}
                    alt="Mr. Honey Taneja, Director of Real Estate Square"
                    className="h-full w-full object-contain object-bottom transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="bg-[#161513] px-5 py-4 text-center text-white border-t border-bronze/30">
                  <b className="block font-serif text-xl font-bold tracking-wide text-white">
                    Mr. Honey Taneja
                  </b>
                  <span className="text-xs font-semibold uppercase tracking-wider text-bronze-l block mt-0.5">
                    Director &amp; Advisory Principal
                  </span>
                  <span className="inline-block mt-2 rounded bg-bronze/20 px-2.5 py-0.5 text-[10px] font-bold text-amber-300 border border-bronze/40">
                    21+ Years Industry Legacy
                  </span>
                </div>
              </div>
            </Reveal>

            {/* Director's Profile & Editorial */}
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-bronze/40 bg-sand/60 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-bronze-d mb-3">
                <span className="h-1.5 w-1.5 rounded-full bg-bronze" />
                <span>Executive Leadership</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-ink leading-tight mb-4">
                Mr. Honey Taneja
              </h2>
              <div className="mb-6 rounded-r-xl border-l-4 border-bronze bg-[#faf7f0] p-5 shadow-sm">
                <p className="font-serif text-lg sm:text-xl text-ink leading-snug italic">
                  &ldquo;In high-stakes real estate, integrity is not merely a virtue—it is our definitive currency. We earn the lifelong respect of clients by offering candid, unbiased counsel and relentless protection of their capital.&rdquo;
                </p>
                <span className="mt-2 block text-xs font-bold uppercase tracking-wider text-bronze-d">
                  — Director, Real Estate Square (21+ Years Experience &amp; IT Professional)
                </span>
              </div>
              <p className="mb-3.5 text-sm sm:text-base text-stone leading-relaxed">
                As the Director of <strong className="text-ink">Real Estate Square</strong>, Mr. Honey Taneja combines over 21 years of on-ground real estate market mastery with the analytical rigor of a qualified computer IT professional.
              </p>
              <p className="mb-6 text-sm sm:text-base text-stone leading-relaxed">
                Having steered landmark transactions across DLF Phase 1, Golf Course Road, and prime South Delhi corridors, he leads the firm with a clear focus on transparent documentation, dispute-free freehold titles, and long-term client advocacy.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link to="/properties" className="btn text-xs">
                  View Our Portfolio <Arrow />
                </Link>
                <Link to="/contact" className="btn btn-dark text-xs">
                  Schedule Private Consultation
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2. Key Numbers & Metrics Banner */}
      <section className="bg-[#121110] py-14 text-white border-y border-bronze/30">
        <div className="wrap">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 text-center">
            <div>
              <span className="font-serif text-4xl sm:text-5xl font-bold text-bronze-l block mb-1">
                21+
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-white/90">Years Experience</span>
              <p className="text-[11px] text-white/60 mt-1">Continuous presence in NCR</p>
            </div>
            <div>
              <span className="font-serif text-4xl sm:text-5xl font-bold text-bronze-l block mb-1">
                ₹500+ Cr
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-white/90">Transaction Volume</span>
              <p className="text-[11px] text-white/60 mt-1">Successfully transacted</p>
            </div>
            <div>
              <span className="font-serif text-4xl sm:text-5xl font-bold text-bronze-l block mb-1">
                1,500+
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-white/90">Satisfied Families</span>
              <p className="text-[11px] text-white/60 mt-1">HNI buyers &amp; investors</p>
            </div>
            <div>
              <span className="font-serif text-4xl sm:text-5xl font-bold text-emerald-400 block mb-1">
                100%
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-white/90">Legal Clearance</span>
              <p className="text-[11px] text-white/60 mt-1">Zero title encumbrances</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Heritage & Complete Property Management */}
      <section className="section bg-sand">
        <div className="wrap grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <span className="kicker">Heritage &amp; Expertise</span>
            <h2 className="h2 text-ink">A Thorough Leader in Gurugram &amp; Delhi NCR</h2>
            <p className="mb-4 text-base sm:text-lg text-stone leading-relaxed">
              <strong className="text-ink">Real Estate Square</strong> is an authorized market leader in sale, purchase, renting, leasing, turnkey construction and corporate collaborations across residential and commercial sectors.
            </p>
            <p className="mb-4 text-sm sm:text-base text-stone leading-relaxed">
              We provide complete <strong>property management</strong>, total legal drafting assistance, structural valuation, and bank funding facilitation under a single unified roof.
            </p>
            <p className="text-sm sm:text-base text-stone leading-relaxed">
              With deep proprietary intelligence on historic transaction records, circle rates, and future development corridors, we identify high-yield investment opportunities without wasted efforts or broker delays.
            </p>
          </Reveal>

          <Reveal className="relative">
            <div className="overflow-hidden rounded-2xl shadow-2xl border border-ink/10 bg-white">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=75"
                alt="Luxury builder floors and architectural residences in Gurugram Delhi NCR"
                loading="lazy"
                decoding="async"
                className="aspect-[5/4] w-full object-cover transition-transform duration-1000 hover:scale-105"
              />
              <div className="bg-[#161513] px-5 py-3 text-white flex items-center justify-between border-t border-bronze/30">
                <span className="font-serif text-sm font-semibold text-bronze-l">
                  Luxury Designer Floors &amp; Turnkey Estates
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-white/80">
                  Delhi NCR &amp; Gurugram
                </span>
              </div>
            </div>
            <span className="absolute -z-10 rounded-2xl border-2 border-bronze/40 hidden sm:block" style={{ inset: '-16px 16px 16px -16px' }} />
          </Reveal>
        </div>
      </section>

      {/* 4. Core Pillars of Excellence */}
      <section className="section bg-white">
        <div className="wrap">
          <Reveal className="mb-12 text-center max-w-2xl mx-auto">
            <span className="kicker">Core Philosophy</span>
            <h2 className="h2 !mb-3 text-ink">Integrity, Responsiveness &amp; Customers First</h2>
            <p className="text-stone text-xs sm:text-sm leading-relaxed">
              Our guiding principles define every negotiation, advisory note, and property handover.
            </p>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-3">
            {values.map((v, n) => (
              <Reveal
                as="article"
                key={v.title}
                delay={n * 80}
                className="group rounded-xl border border-ink/10 bg-[#faf8f4] p-8 shadow-sm transition-all duration-300 hover:border-bronze hover:bg-white hover:shadow-lg hover:-translate-y-1"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-bronze/10 text-bronze font-bold text-lg group-hover:bg-bronze group-hover:text-white transition-colors">
                  0{n + 1}
                </div>
                <h3 className="font-serif text-2xl font-bold text-ink mb-3 group-hover:text-bronze-d transition-colors">
                  {v.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone leading-relaxed">{v.text}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10 rounded-xl border-l-4 border-bronze bg-ink p-7 text-white shadow-xl">
            <p className="font-serif text-xl sm:text-2xl leading-snug text-[#ded8cb]">
              &ldquo;We know that buying, selling or constructing property in Delhi NCR can feel complex. Real Estate Square will be with you at every milestone to ensure transparent, stress-free execution.&rdquo;
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
