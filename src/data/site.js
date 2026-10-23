// ------------------------------------------------------------------
// All website content lives here (taken from the existing
// realestatesquare.in website). Edit text / images in ONE place.
// To use local images, put them in src/assets/images and change IMG_BASE.
// ------------------------------------------------------------------
export const IMG_BASE = 'https://www.realestatesquare.in/assets/images/'
export const img = (path) => path.startsWith('https://') ? path : `${IMG_BASE}${path}`

const propertyPhoto = (id, width = 1000) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=75`

export const company = {
  name: 'Real Estate Square',
  description:
    'Real Estate Square is a thorough leader in sale, purchase, renting, leasing, construction and collaborations of residential and commercial properties.',
  phones: [
    { label: '+91-8800006689', tel: '+918800006689' },
    { label: '+91-8800006678', tel: '+918800006678' },
  ],
  email: 'info@realestatesquare.in',
  whatsapp: '918800006689',
  facebook: 'https://www.facebook.com/profile.php?id=100083370151009',
  instagram: 'https://www.instagram.com/realestatessquare2020/?igshid=YmMyMTA2M2Y%3D',
  copyright: 'Copyright © 2022 REAL ESTATE SQUARE',
  gurugram: 'O-107, 1st Floor, Shopping Mall, Arjun Marg, DLF Phase-1, Gurugram, Haryana 122002 INDIA',
  delhi: 'B-1/18A, Paschim Vihar, New Delhi - 110063 INDIA',
}

export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/properties', label: 'Properties' },
  { to: '/about-us', label: 'About Us' },
  { to: '/projects', label: 'Current Projects' },
  { to: '/why-us', label: 'Why Us?' },
  { to: '/contact', label: 'Contact Us' },
]

export const slides = [
  {
    image: propertyPhoto('photo-1600607687939-ce8a6c25118c', 1200),
    alt: 'Apartments, condos and penthouses in Gurugram and Delhi NCR',
    kicker: 'Gurugram & Delhi NCR',
    title: 'Premium Real Estate Solutions in Gurugram & Delhi NCR',
    text: company.description,
  },
  {
    image: propertyPhoto('photo-1486406146926-c627a92ad1ab', 1200),
    alt: 'Commercial spaces, SCO, shop cum offices, shops in malls, office spaces',
    kicker: 'Commercial Properties',
    title: 'Are you looking for commercial spaces?',
    text: 'SCO, shop cum offices, shops in malls and office spaces in Gurugram & Delhi NCR.',
  },
  {
    image: propertyPhoto('photo-1497366754035-f200968a6e72', 1200),
    alt: 'All kinds of office spaces, retail shops and SCOs',
    kicker: 'Office Spaces & Retail',
    title: 'We deal in all kinds of office spaces',
    text: 'Retail shops, SCO’s and all types of commercial properties.',
  },
]

export const searchOptions = {
  need: ['Buy', 'Sell', 'Rent', 'Lease', 'Pre-Rented Commercial'],
  type: [
    'Residential Apartments',
    'Independent Houses',
    'New Builder Floors',
    'Villas / Plots',
    'Farm Houses',
    'All Types of Commercial Properties',
  ],
  location: [
    'Gurugram',
    'Delhi NCR',
    'Sohna Road',
    'New Gurgaon',
    'National Highway 8',
    'Main Gurgaon',
    'Old Gurgaon',
    'Gurugram New Sectors',
  ],
}

export const categories = [
  { image: propertyPhoto('photo-1600607687939-ce8a6c25118c'), title: 'Apartments', type: 'Residential Apartments', alt: 'Apartments in Gurugram Delhi NCR' },
  { image: propertyPhoto('photo-1600585154340-be6161a56a0c'), title: 'Houses / Builder Homes / Bungalows / Kothis', type: 'Independent Houses', alt: 'Houses, builder homes, bungalows, kothis' },
  { image: propertyPhoto('photo-1600607687920-4e2a09cf159d'), title: 'Builder Floors / Designer Floors / Luxury Floors / Duplexes', type: 'New Builder Floors', alt: 'Builder floors, designer floors, duplexes' },
  { image: propertyPhoto('photo-1486406146926-c627a92ad1ab'), title: 'Commercial Spaces / Office Spaces / Retail Shops / SCO / Mall Shops', type: 'All Types of Commercial Properties', alt: 'Commercial spaces, office spaces, retail shops' },
]

export const services = [
  {
    icon: 'sale',
    title: 'Sale & Purchase of all Properties',
    short: 'Real Estate Square is actively involved in the sale & purchase of residential apartments, independent houses/ floors, plots, farmhouses, villas and all types of commercial properties in Gurugram & Delhi NCR.',
    more: 'We assist you in all the drafting and procurement of all the necessary documentation required in the sale & purchase of any property. We have a strong networking throughout the area and we keep our customers / clients / investors well informed of the latest properties to buy.',
  },
  {
    icon: 'rent',
    title: 'Renting & Leasing of all Properties',
    short: 'Real Estate Square is actively engaged in Renting and Leasing of Independent Houses, Builder Floors, Pent Houses, Apartments, Offices.',
    more: 'We act as a mediator between both property owner and tenant to make a good deal for them. We cover almost all great locations of Gurugram and Delhi NCR, including Sohna Road, New Gurgaon, National Highway 8, Main Gurgaon, Old Gurgaon, Gurugram All New Sectors.',
  },
  {
    icon: 'pre',
    title: 'Pre-Rented Commercial Properties',
    short: 'The property which was already leased out is now available for sale, in which the buyer has the benefit of an assured income.',
    more: 'The ROI (returns) ranges from 10%-15% depending upon the location and building, also mostly on the terms of the lease. The pre-rented commercial properties we offer are located in buildings which are already sanctioned and approved by banks, making them completely fundable.',
  },
  {
    icon: 'con',
    title: 'Construction & Collaboration',
    short: 'Real Estate Square is actively engaged in construction of independent houses, builder floors in Gurugram and Delhi NCR, we provides complete solutions in construction.',
    more: 'Yes, we undertake construction / redeveloping of old residential properties into new designer lavish builder floors with all modern facilities in newly build floors. We, Real Estate Square have also collaborated with many prominent real estate partners for completing various real estate development projects.',
  },
]

export const excellenceKeys = [
  ['Local property knowledge', 'In-depth knowledge of properties in the area.'],
  ['Property history', 'Knowing their history.'],
  ['People involved', 'Interaction with them for a long period of time.'],
  ['Quick solutions', 'Identified quickly, without wasting efforts.'],
  ['Network', 'An extensive network of contacts.'],
]

export const builderPoints = [
  "Preserve your home's value.",
  "Handle hidden issues before they're big.",
  'Cherished Living in your newly built home.',
  'Benefit from enhanced value.',
  'Its Easy, Its Safe, Its Transparent, Its Better.',
]

export const benefits = [
  'Better Floor Plans',
  'World Class Interiors',
  'Modular Kitchens',
  'Designer Bathrooms',
  'Latest Fall Ceilings',
].map((title, i) => ({
  title,
  image: propertyPhoto([
    'photo-1600607687939-ce8a6c25118c',
    'photo-1600210492486-724fe5c67fb0',
    'photo-1600607687920-4e2a09cf159d',
    'photo-1600566753086-00f18fb6b3ea',
    'photo-1600585154340-be6161a56a0c',
  ][i]),
}))

export const projects = [
  {
    id: 'trevoc-3bhk',
    name: 'TREVOC Royal Residences — 3 BHK + Utility (2,642 Sq.Ft)',
    location: 'Sector 56, Golf Course Road, Gurgaon',
    image: '/images/trevoc/exterior.jpg',
    category: '3 BHK + Utility',
    specs: '2,642 Sq.Ft · 2 Iconic Towers · 11 Ft Ceilings',
  },
  {
    id: 'trevoc-4bhk',
    name: 'TREVOC Royal Residences — 4 BHK + Utility (3,380 Sq.Ft)',
    location: 'Sector 56, Golf Course Road, Gurgaon',
    image: '/images/trevoc/living.jpg',
    category: '4 BHK + Utility',
    specs: '3,380 Sq.Ft · Wrap-Around Balcony · Private Lobby',
  },
  {
    id: 'trevoc-club-royal',
    name: 'Club Royal — 50,000 Sq. Ft Curated Luxury Club',
    location: 'Sector 56, Golf Course Road, Gurgaon',
    image: '/images/trevoc/club_royal.jpg',
    category: '50,000 Sq.Ft Clubhouse',
    specs: 'Sunken Seating · Heated Pool · VR Gaming · Spa · Mini Cinema',
  },
  {
    id: 'trevoc-skydeck',
    name: 'Skydeck — 36,000 Sq. Ft Open-to-Sky Experience',
    location: 'Sector 56, Golf Course Road, Gurgaon',
    image: '/images/trevoc/skydeck.jpg',
    category: '36,000 Sq.Ft Rooftop',
    specs: 'Panoramic City Views · Jogging Track · Open-Air Theatre · Cabanas',
  },
  {
    id: 'trevoc-pool',
    name: 'Temperature-Controlled Pools & Wellness Suites',
    location: 'Sector 56, Golf Course Road, Gurgaon',
    image: '/images/trevoc/pool.jpg',
    category: 'Wellness & Aquatic',
    specs: 'Submerged Loungers · Living Green Wall · Holistic Spa',
  },
  {
    id: 'trevoc-suite',
    name: 'Master Bedroom Suite with Wrap-Around Balcony',
    location: 'Sector 56, Golf Course Road, Gurgaon',
    image: '/images/trevoc/master_suite.jpg',
    category: 'Signature Suite',
    specs: 'Chevron Oak Wood Flooring · Walk-In Closet · Golf Course Views',
  },
  {
    id: 'trevoc-lobby',
    name: 'Grand Entrance Lobbies & 5-Tier Biometric Security',
    location: 'Sector 56, Golf Course Road, Gurgaon',
    image: '/images/trevoc/lobby.jpg',
    category: 'Grand Arrival',
    specs: 'Triple-Height Onyx Lobbies · Resident Elevators · 5-Level Parking',
  },
]
export const projectCount = projects.length

export const values = [
  { title: 'Integrity', text: 'Real Estate Square will epitomise not only professional real estate knowledge, but a dedication to integrity and responsiveness to every customer whom we have the privilege of serving – and will be clear, accessible and expert.' },
  { title: "Customer's First", text: "Our 'Customer's First' vision will be promoted, integrated and expected through every level of our system and no deviation from this high ideal will be accepted. Our customers deserve, and will receive, the finest service offered by any real estate organisation." },
  { title: 'Honest Advice', text: "We're here to offer you valuable and honest advice when you need it so that you can navigate the best path through the process." },
]

export const whyUs = [
  { icon: 'search', title: 'Proper Research & Analysis', paras: [
    'Yes, whether its residential or commercial property, we understands our clients requirements with utmost knowledge of constructed properties in the area and the sale history of the specific property.',
    'Understanding the details as per existing and future requirements of individual clients combined with utility aesthetics and comfort towards achieving nothing but the best always.'] },
  { icon: 'chart', title: 'Right Property Investments', paras: [
    'Investing in a property is an important decision for an individual, whether it is a residential property or a commercial one. With the focus on prime and upmarket commercial and residential properties, we work for some of the top real-estate developers in the region and help people in securing their investments with reputed brands.',
    'Having an in-depth knowledge of the industry and its norms, property experts at Real Estate Square offer you to manage your entire real-estate investment portfolio.'] },
  { icon: 'shield', title: 'Geniune Real Estate Consultant', paras: [
    'Whether you’re an investor seeking yield generating assets or a home buyer. Our team of dedicated property experts helps you with constructive inputs and the right solution after carefully weighing every aspect.',
    'Our team possesses market intelligence with years of experience and is always ready to help you with a customized realty service by answering all your realty related queries or clarifying your doubts.'] },
  { icon: 'hand', title: 'Best After Sales Assistance', paras: [
    'Investing in a property is an important decision for an individual, whether it is a residential property or a commercial one. We believe that our job is not get over by assisting you in choosing the right property and buying it, we also provide best after sales assistance.',
    'Being an organization with the prime focus on client satisfaction, we goes a step further for the comfort and convenience of a buyer.'] },
  { icon: 'bank', title: 'Bank Loan Assistance', paras: [
    'In the evolving times where paper work is becoming a kiosk for most of us to manage. We at Real Estate Square, our experts team take care to offer a hassle free loan facilitation from the renowned Banks.',
    'We ensure smooth handling of the paper work process, which saves your time and energy.'] },
].map((w, i) => ({ ...w, image: `bg/why_us_${i + 1}.jpg` }))

export const offices = [
  {
    label: 'Gurugram Office', name: 'REAL ESTATE SQUARE',
    address: ['O-107, 1st Floor,', 'Shopping Mall, Arjun Marg,', 'DLF Phase-1, Gurugram,', 'Haryana - 122002 INDIA'],
    details: [
      ['Mobile', [['+91-8800006689', 'tel:+918800006689'], ['8800006678', 'tel:+918800006678'], ['9818861020', 'tel:+919818861020']]],
      ['E-Mail', [['info@realestatesquare.in', 'mailto:info@realestatesquare.in']]],
    ],
    call: 'tel:+918800006689', mail: 'mailto:info@realestatesquare.in',
    map: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14029.769882224942!2d77.0993803!3d28.4662185!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe1a329a2ab8249fb!2sThe%20Shopping%20Mall%2C%20Arjun%20marg!5e0!3m2!1sen!2sin!4v1644769931166!5m2!1sen!2sin',
    directions: 'https://www.google.com/maps/search/?api=1&query=The+Shopping+Mall+Arjun+Marg+DLF+Phase+1+Gurugram',
  },
  {
    label: 'Delhi Office', name: 'TANEJA ASSOCIATES',
    address: ['B-1/18A,', 'Paschim Vihar,', 'New Delhi - 110063 INDIA'],
    details: [
      ['Landline', [['011-47079733', 'tel:01147079733']]],
      ['Mobile', [['+91-9811228404', 'tel:+919811228404']]],
      ['E-Mail', [['tanejaestates@gmail.com', 'mailto:tanejaestates@gmail.com']]],
    ],
    call: 'tel:+919811228404', mail: 'mailto:tanejaestates@gmail.com',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.630669994014!2d77.10850321508345!3d28.670775282402694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d038f7c1219c7%3A0x609ca6945a683d6e!2s18%2C%20B%201%20Block%2C%20Paschim%20Vihar%2C%20New%20Delhi%2C%20Delhi%20110063!5e0!3m2!1sen!2sin!4v1644770052797!5m2!1sen!2sin',
    directions: 'https://www.google.com/maps/search/?api=1&query=B-1/18A+Paschim+Vihar+New+Delhi+110063',
  },
  {
    label: 'Jaipur Office', name: 'VIJAY CITY',
    address: ['Bichoon,', 'Jaipur-Ajmer Highway,', 'Jaipur - 303604 INDIA'],
    details: [
      ['Mobile', [['+91-9891398917', 'tel:+919891398917']]],
      ['E-Mail', [['vijaycity.jaipur@gmail.com', 'mailto:vijaycity.jaipur@gmail.com']]],
    ],
    call: 'tel:+919891398917', mail: 'mailto:vijaycity.jaipur@gmail.com',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7122.2337826822395!2d75.34870812528189!3d26.804406432697267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4019a82e4fd7%3A0xf57c453a10fd06f4!2sBichoon%2C%20Rajasthan%20303338!5e0!3m2!1sen!2sin!4v1644770178613!5m2!1sen!2sin',
    directions: 'https://www.google.com/maps/search/?api=1&query=Bichoon+Jaipur-Ajmer+Highway+Jaipur+303604',
  },
]
