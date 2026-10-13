import { Route, Routes } from 'react-router-dom'
import './App.css'
import AddPropertyModal from './components/AddPropertyModal'
import BookingTourModal from './components/BookingTourModal'
import FloatingContact from './components/FloatingContact'
import Footer from './components/Footer'
import Header from './components/Header'
import NotificationToast from './components/NotificationToast'
import PropertyDetailsModal from './components/PropertyDetailsModal'
import ScrollToTop from './components/ScrollToTop'
import { PropertyProvider } from './context/PropertyContext'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Properties from './pages/Properties'
import WhyUs from './pages/WhyUs'

export default function App() {
  return (
    <PropertyProvider>
      <ScrollToTop />
      <Header />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/why-us" element={<WhyUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
      <FloatingContact />

      {/* Global Interactive Modals & Toast */}
      <AddPropertyModal />
      <PropertyDetailsModal />
      <BookingTourModal />
      <NotificationToast />
    </PropertyProvider>
  )
}
