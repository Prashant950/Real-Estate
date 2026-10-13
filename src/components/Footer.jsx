import { Link } from 'react-router-dom'
import { company, navLinks } from '../data/site'
import { FacebookIcon, InstagramIcon } from './Icons'

const serviceNames = [
  'Sale & Purchase of all Properties',
  'Renting & Leasing of all Properties',
  'Pre-Rented Commercial Properties',
  'Construction & Collaboration',
]

export default function Footer() {
  return (
    <footer className="bg-[#121110] pt-20 text-[0.92rem] text-[#bdb6a8] border-t border-white/10">
      <div className="wrap grid gap-11 pb-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.1fr_1.3fr]">
        <div>
          {/* Typographic Luxury Brand Logo */}
          <div className="flex items-center gap-3 mb-4">
            <span className="relative grid h-11 w-11 place-items-center border-2 border-bronze bg-ink font-serif text-2xl font-bold text-bronze-l">
              R<span className="absolute inset-0.5 border border-bronze/40" />
            </span>
            <div>
              <span className="font-serif text-xl font-bold uppercase tracking-wider text-white block">
                Real Estate Square
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-bronze-l block">
                Gurugram &amp; Delhi NCR
              </span>
            </div>
          </div>

          <p className="text-xs leading-relaxed text-[#a8a192] mb-5 max-w-sm">
            {company.description}
          </p>

          <div className="flex gap-3">
            {[
              [company.facebook, 'Facebook', <FacebookIcon key="f" />],
              [company.instagram, 'Instagram', <InstagramIcon key="i" />],
            ].map(([href, label, icon]) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded border border-white/20 transition hover:border-bronze hover:bg-bronze hover:text-white"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-5 font-sans text-xs font-bold uppercase tracking-[0.16em] text-bronze-l">
            Explore Portfolio
          </h4>
          <ul className="grid gap-2.5 text-xs">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link className="transition hover:text-bronze-l" to={l.to}>
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <a href="#properties-showcase" className="transition hover:text-bronze-l">
                Verified Projects
              </a>
            </li>
            <li>
              <a href="#asset-classes" className="transition hover:text-bronze-l">
                Asset Classes
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-5 font-sans text-xs font-bold uppercase tracking-[0.16em] text-bronze-l">
            Our Services
          </h4>
          <ul className="grid gap-2.5 text-xs">
            {serviceNames.map((s) => (
              <li key={s}>
                <a className="transition hover:text-bronze-l" href="#services">
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-5 font-sans text-xs font-bold uppercase tracking-[0.16em] text-bronze-l">
            Advisory Locations
          </h4>
          <address className="mb-3.5 not-italic text-xs leading-relaxed text-[#ded8cb]">
            <strong className="text-white block font-sans">Gurugram Corporate Office:</strong>
            O-107, 1st Floor, Shopping Mall, Arjun Marg, DLF Phase-1, Gurugram, Haryana 122002
          </address>
          <address className="mb-3.5 not-italic text-xs leading-relaxed text-[#ded8cb]">
            <strong className="text-white block font-sans">South Delhi Office:</strong>
            B-1/18A, Paschim Vihar, New Delhi - 110063
          </address>
          <div className="space-y-1 text-xs">
            {company.phones.map((p) => (
              <a key={p.tel} href={`tel:${p.tel}`} className="block text-bronze-l hover:underline">
                📞 {p.label}
              </a>
            ))}
            <a href={`mailto:${company.email}`} className="block text-white/80 hover:text-bronze-l">
              ✉ {company.email}
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-xs text-white/50">
        <div className="wrap flex flex-wrap justify-between items-center gap-3">
          <span>{company.copyright}. All rights reserved.</span>
          <span className="text-bronze-l font-medium">
            Assuring Best Properties &amp; Complete Property Management
          </span>
        </div>
      </div>
    </footer>
  )
}
