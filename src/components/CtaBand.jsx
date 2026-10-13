import { Link } from 'react-router-dom'
import { company, img } from '../data/site'
import Reveal from './Reveal'

export default function CtaBand({ title = 'We’ll help you find a new better place for your home and offices.', showName = true }) {
  return (
    <section className="relative isolate bg-ink bg-cover bg-center py-20 text-center text-white" style={{ backgroundImage: `url(${img('bg/bg3.jpg')})` }}>
      <div className="absolute inset-0 -z-10 bg-[#141311]/80" />
      <Reveal className="wrap">
        <h2 className="mx-auto mb-6 max-w-[20ch] text-[clamp(2rem,4vw,3.2rem)]">{title}</h2>
        {showName && <p className="mb-7 font-bold uppercase tracking-[0.2em] text-bronze-l">“Real Estate Square”</p>}
        <div className="flex flex-wrap justify-center gap-3.5">
          <Link to="/contact" className="btn">Contact Us</Link>
          <a href={`tel:${company.phones[0].tel}`} className="btn btn-ghost">{company.phones[0].label}</a>
        </div>
      </Reveal>
    </section>
  )
}
