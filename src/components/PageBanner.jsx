import { Link } from 'react-router-dom'
import { img } from '../data/site'

export default function PageBanner({ title, image, alt }) {
  return (
    <section className="relative isolate flex min-h-[340px] items-end overflow-hidden bg-ink text-white">
      <img src={img(image)} alt={alt} fetchPriority="high" className="absolute inset-0 -z-20 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#0e0d0c]/90 to-[#0e0d0c]/35" />
      <div className="wrap pb-12 pt-[70px]">
        <p className="mb-3 text-[0.82rem] text-[#d3ccbe]"><Link to="/" className="hover:text-bronze-l">Home</Link> / {title}</p>
        <h1 className="text-[clamp(2.4rem,5vw,4rem)]">{title}</h1>
      </div>
    </section>
  )
}
