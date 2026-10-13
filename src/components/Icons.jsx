const stroke = { fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round' }

const paths = {
  sale: <path d="M6 42V14l14-8v36M20 42V22l22 6v14M4 42h40M11 20h4M11 27h4M11 34h4M28 32h4M36 34h4" />,
  rent: (<><circle cx="16" cy="24" r="8" /><path d="M24 24h20M36 24v8M42 24v6M16 20v8" /></>),
  pre: (<><path d="M6 40V24l10-6 10 6v16M26 40V10h16v30M4 40h40M12 30h4M32 18h4M32 26h4M32 34h4" /></>),
  con: <path d="M6 42h36M10 42V22l14-12 14 12v20M18 42V30h12v12M4 24 24 8l20 16" />,
}
const small = {
  search: (<><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></>),
  chart: <path d="M3 20h18M6 16l4-5 4 3 5-8" />,
  shield: (<><path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z" /><path d="m9 12 2 2 4-4" /></>),
  hand: <path d="M3 12c0-5 4-8 9-8s9 3 9 8v3a3 3 0 0 1-3 3h-1v-6h4M3 12v3a3 3 0 0 0 3 3h1v-6H3M15 21h-3" />,
  bank: <path d="M3 10 12 4l9 6M5 10v8M9.5 10v8M14.5 10v8M19 10v8M3 20h18" />,
}

export function ServiceIcon({ name, className = '' }) {
  return (
    <svg viewBox="0 0 48 48" strokeWidth="1.2" className={className} aria-hidden="true" {...stroke}>
      {paths[name]}
    </svg>
  )
}

export function FeatureIcon({ name, className = '' }) {
  return (
    <svg viewBox="0 0 24 24" strokeWidth="1.4" className={className} aria-hidden="true" {...stroke}>
      {small[name]}
    </svg>
  )
}

export const Arrow = ({ className = 'h-4 w-4' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)

export const WhatsAppIcon = ({ className = 'h-6 w-6' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.1-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.700 6.700 0 0 1-3.300-2.900c-.2-.4.2-.4.7-1.300.1-.2 0-.3 0-.5l-.8-1.800c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.300c-.2.300-.9.900-.9 2.200s.9 2.500 1 2.700c.1.200 1.800 2.800 4.400 3.900 1.600.7 2.300.8 3.100.6.500-.1 1.500-.6 1.700-1.200.2-.6.2-1.100.2-1.200-.1-.2-.3-.2-.5-.3z" />
  </svg>
)

export const PhoneIcon = ({ className = 'h-6 w-6' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.100.4 2.300.6 3.600.6.600 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.500c.6 0 1 .4 1 1 0 1.300.2 2.500.6 3.600.1.300 0 .700-.2 1z" />
  </svg>
)

export const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor" aria-hidden="true">
    <path d="M13.5 22v-8h2.7l.4-3.2h-3.1V8.8c0-.9.3-1.5 1.6-1.5h1.7V4.4c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1v2.4H7.7V14h2.7v8z" />
  </svg>
)

export const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
  </svg>
)
