import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { INITIAL_PROPERTIES } from '../data/properties'

const PropertyContext = createContext(null)

const STORAGE_KEY = 'res_curated_properties_v5'

export function PropertyProvider({ children }) {
  // Load saved properties or default list
  const [properties, setProperties] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) {
        const parsed = JSON.parse(saved)
        if (Array.isArray(parsed) && parsed.length > 0) return parsed
      }
    } catch {
      // ignore
    }
    return INITIAL_PROPERTIES
  })

  // Filter and search states
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedLocation, setSelectedLocation] = useState('All')
  const [selectedBudget, setSelectedBudget] = useState('All')
  const [sortBy, setSortBy] = useState('featured')

  // Modals state
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [detailsProperty, setDetailsProperty] = useState(null)
  const [bookingProperty, setBookingProperty] = useState(null)
  const [notification, setNotification] = useState(null)

  // Save changes to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(properties))
    } catch {
      // ignore
    }
  }, [properties])

  // Toast notification helper
  const notify = (message, type = 'success') => {
    setNotification({ message, type })
    setTimeout(() => {
      setNotification((prev) => (prev?.message === message ? null : prev))
    }, 4500)
  }

  // Add property function
  const addProperty = (newProp) => {
    const formattedPrice = Number(newProp.price) || 0
    let priceDisplay = `₹${formattedPrice.toLocaleString('en-IN')}`
    if (formattedPrice >= 10000000) {
      priceDisplay = `₹${(formattedPrice / 10000000).toFixed(2)} Crore`
    } else if (formattedPrice >= 100000) {
      priceDisplay = `₹${(formattedPrice / 100000).toFixed(2)} Lakhs`
    }

    const created = {
      id: `prop-${Date.now()}`,
      title: newProp.title.trim(),
      developer: newProp.developer?.trim() || 'Verified Independent Seller',
      category: newProp.category || 'Apartments & Penthouses',
      categorySlug: (newProp.category || 'apartments').toLowerCase(),
      type: newProp.type || 'Residential',
      location: newProp.location.trim(),
      locationSlug: (newProp.location || 'gurugram').toLowerCase().replace(/\s+/g, '-'),
      price: formattedPrice,
      priceDisplay: priceDisplay,
      area: `${newProp.area || 2500} Sq.Ft`,
      bedrooms: Number(newProp.bedrooms) || 3,
      bathrooms: Number(newProp.bathrooms) || 3,
      tag: 'NEW LISTING',
      tagColor: 'amber',
      rera: newProp.rera?.trim() || 'Self-Certified Verification',
      featured: true,
      image: newProp.image?.trim() || 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=90',
      gallery: [
        newProp.image?.trim() || 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=90',
        'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=90',
      ],
      description: newProp.description?.trim() || 'High specification property in prime sector with premium fittings, dedicated parking, and full documentation compliance.',
      specs: {
        possession: newProp.possession || 'Ready to Move',
        facing: newProp.facing || 'East Facing',
        furnishing: newProp.furnishing || 'Semi-Furnished',
        parking: newProp.parking || '2 Covered Parking Slots',
        contact: newProp.contactPhone || '+91-8800006689',
      },
      highlights: ['Direct Owner / Channel Verified', 'Clear Titles & Verification Complete', 'Pre-approved Bank Loan Facility'],
      createdAt: new Date().toISOString(),
    }

    setProperties((prev) => [created, ...prev])
    setIsAddModalOpen(false)
    notify(`Property "${created.title}" successfully listed! It is now live in the directory.`)

    // Scroll to properties section
    setTimeout(() => {
      const el = document.getElementById('properties-showcase')
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 300)
  }

  // Reset to default sample properties if needed
  const resetToDefaultProperties = () => {
    setProperties(INITIAL_PROPERTIES)
    localStorage.removeItem(STORAGE_KEY)
    notify('Reset properties to initial curated showcase.')
  }

  // Filtered properties calculation
  const filteredProperties = useMemo(() => {
    return properties.filter((p) => {
      // Search query check (title, location, developer, description, type)
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim()
        const textToSearch = `${p.title} ${p.location} ${p.type} ${p.category} ${p.developer} ${p.description}`.toLowerCase()
        if (!textToSearch.includes(q)) return false
      }

      // Category check
      if (selectedCategory && selectedCategory !== 'All' && selectedCategory !== 'all') {
        const sc = selectedCategory.toLowerCase()
        const pCat = p.category.toLowerCase()
        const pType = p.type.toLowerCase()
        const matchesCategory =
          pCat.includes(sc) ||
          pType.includes(sc) ||
          sc.includes(pCat) ||
          (sc.includes('bungalow') && (pCat.includes('bungalow') || pCat.includes('villa') || pType.includes('villa'))) ||
          (sc.includes('villa') && (pCat.includes('villa') || pType.includes('villa'))) ||
          (sc.includes('house') && (pCat.includes('house') || pCat.includes('villa'))) ||
          (sc.includes('floor') && (pCat.includes('floor') || pType.includes('floor'))) ||
          (sc.includes('apartment') && (pCat.includes('apartment') || pType.includes('penthouse'))) ||
          (sc.includes('commercial') && (pCat.includes('commercial') || pType.includes('sco') || pType.includes('retail')))
        if (!matchesCategory) return false
      }

      // Location check
      if (selectedLocation && selectedLocation !== 'All') {
        const locMatch = p.location.toLowerCase().includes(selectedLocation.toLowerCase())
        if (!locMatch) return false
      }

      // Budget check
      if (selectedBudget && selectedBudget !== 'All') {
        if (selectedBudget === 'under-3') {
          if (p.price > 30000000) return false
        } else if (selectedBudget === '3-6') {
          if (p.price < 30000000 || p.price > 60000000) return false
        } else if (selectedBudget === '6-10') {
          if (p.price < 60000000 || p.price > 100000000) return false
        } else if (selectedBudget === '10-plus') {
          if (p.price < 100000000) return false
        }
      }

      return true
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price
      if (sortBy === 'price-high') return b.price - a.price
      if (sortBy === 'bedrooms') return b.bedrooms - a.bedrooms
      return 0 // default order (featured / newly added first)
    })
  }, [properties, searchQuery, selectedCategory, selectedLocation, selectedBudget, sortBy])

  const openDetails = (prop) => setDetailsProperty(prop)
  const closeDetails = () => setDetailsProperty(null)

  const openBooking = (prop) => setBookingProperty(prop)
  const closeBooking = () => setBookingProperty(null)

  return (
    <PropertyContext.Provider
      value={{
        properties,
        filteredProperties,
        searchQuery,
        setSearchQuery,
        selectedCategory,
        setSelectedCategory,
        selectedLocation,
        setSelectedLocation,
        selectedBudget,
        setSelectedBudget,
        sortBy,
        setSortBy,
        addProperty,
        resetToDefaultProperties,
        isAddModalOpen,
        setIsAddModalOpen,
        detailsProperty,
        openDetails,
        closeDetails,
        bookingProperty,
        openBooking,
        closeBooking,
        notification,
        notify,
      }}
    >
      {children}
    </PropertyContext.Provider>
  )
}

export function useProperties() {
  const context = useContext(PropertyContext)
  if (!context) {
    throw new Error('useProperties must be used within a PropertyProvider')
  }
  return context
}
