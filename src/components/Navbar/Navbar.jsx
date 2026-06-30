import { useState, useEffect, useRef } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX, HiPhone, HiChevronDown, HiMail } from 'react-icons/hi'
import {
  FaPlane, FaBriefcase, FaTaxi, FaRoad, FaRing, FaUserTie,
  FaMapMarkedAlt, FaStar,
  FaFacebookF, FaInstagram, FaWhatsapp
} from 'react-icons/fa'

const servicesDropdown = [
  { label: 'Airport Transfer',       path: '/services', icon: FaPlane },
  { label: 'Outstation Taxi',        path: '/services', icon: FaRoad },
  { label: 'Corporate Travel',       path: '/services', icon: FaBriefcase },
  { label: 'Local Cab Service',      path: '/services', icon: FaTaxi },
  { label: 'Wedding Transport',      path: '/services', icon: FaRing },
  { label: 'Premium Chauffeur',      path: '/services', icon: FaUserTie },
]

const packagesDropdown = [
  { label: 'Chardham Tour Package',  path: '/pricing', icon: FaStar },
  { label: 'Same Day Tour Package',  path: '/pricing', icon: FaMapMarkedAlt },
  { label: 'All Tour Packages',      path: '/pricing', icon: FaMapMarkedAlt },
]

function DropdownMenu({ items, isOpen }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 8, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 6, scale: 0.97 }}
          transition={{ duration: 0.18, ease: [0.23, 1, 0.32, 1] }}
          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 rounded-xl overflow-hidden z-50"
          style={{
            background: '#ffffff',
            border: '1px solid rgba(15,23,42,0.08)',
            boxShadow: '0 20px 50px rgba(0,0,0,0.12)',
          }}
        >
          <ul className="py-1.5">
            {items.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.path}
                  className="flex items-center gap-3 px-4 py-2.5 text-gray-600 hover:text-gold hover:bg-amber-50 transition-all duration-150 group"
                  style={{ fontSize: '0.78rem', fontFamily: 'Inter, Poppins, sans-serif', fontWeight: 600 }}
                >
                  <item.icon className="text-gold/50 group-hover:text-gold text-xs transition-colors shrink-0" />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled]         = useState(false)
  const [mobileOpen, setMobileOpen]     = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [packagesOpen, setPackagesOpen] = useState(false)
  const [mobileServices, setMobileServices] = useState(false)
  const [mobilePackages, setMobilePackages] = useState(false)

  const servicesRef = useRef(null)
  const packagesRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const handleClick = (e) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target)) setServicesOpen(false)
      if (packagesRef.current && !packagesRef.current.contains(e.target)) setPackagesOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const closeMobile = () => {
    setMobileOpen(false)
    setMobileServices(false)
    setMobilePackages(false)
  }

  return (
    <>
      {/* TOP INFO BAR — thin, clean, dark */}
      <div
        className="fixed top-0 left-0 right-0 z-50 hidden md:block"
        style={{ background: '#0f172a', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between py-2">
          {/* Left: info */}
          <div className="flex items-center gap-5 text-[11px] font-medium text-slate-400" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>
            <span>24/7 Booking Support</span>
            <span className="w-px h-3 bg-white/15" />
            <span>Airport · Outstation · Corporate · Wedding</span>
          </div>
          {/* Right: contact + social */}
          <div className="flex items-center gap-5">
            <a href="tel:+919643199064" className="flex items-center gap-1.5 text-[11px] font-semibold text-white hover:text-gold transition-colors" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>
              <HiPhone className="text-gold text-sm" /> +91 96431 99064
            </a>
            <a href="mailto:info@ansaprimemobility.in" className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-400 hover:text-gold transition-colors" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>
              <HiMail className="text-sm" /> info@ansaprimemobility.in
            </a>
            <div className="flex items-center gap-3 ml-1 border-l border-white/10 pl-4">
              <a href="https://www.facebook.com/share/1GQDKScG4Z/" target="_blank" rel="noreferrer" aria-label="Facebook"
                className="hover:text-gold transition-colors text-slate-400 text-sm"><FaFacebookF /></a>
              <a href="https://www.instagram.com/ansaprimemobilityservices?igsh=cGFnZnZ6ankwa2wx" target="_blank" rel="noreferrer" aria-label="Instagram"
                className="hover:text-gold transition-colors text-slate-400 text-sm"><FaInstagram /></a>
              <a href="https://wa.me/919643199064" target="_blank" rel="noreferrer" aria-label="WhatsApp"
                className="hover:text-gold transition-colors text-slate-400 text-sm"><FaWhatsapp /></a>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN NAV */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.5, ease: 'easeOut' }}
        className={`fixed left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'md:top-[33px] top-0 py-3'
            : 'md:top-[33px] top-0 py-4'
        }`}
        style={scrolled
          ? {
              background: 'rgba(255,255,255,0.98)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              boxShadow: '0 1px 0 rgba(15,23,42,0.08), 0 4px 20px rgba(0,0,0,0.05)',
            }
          : {
              background: 'rgba(255,255,255,0)',
            }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3 leading-none group">
            <img
              src="/logo-transparent.png"
              alt="ANSA PRIME Mobility Services"
              className="h-11 w-auto object-contain group-hover:opacity-90 transition-opacity drop-shadow"
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-0.5">
            <NavLink to="/" end className={({ isActive }) => `nav-link px-3.5 py-2 rounded-lg hover:bg-black/5 ${isActive ? 'active' : ''}`}>
              Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => `nav-link px-3.5 py-2 rounded-lg hover:bg-black/5 ${isActive ? 'active' : ''}`}>
              About
            </NavLink>
            <NavLink to="/fleet" className={({ isActive }) => `nav-link px-3.5 py-2 rounded-lg hover:bg-black/5 ${isActive ? 'active' : ''}`}>
              Fleet
            </NavLink>

            {/* Services Dropdown */}
            <div className="relative" ref={servicesRef}>
              <button
                className={`nav-link flex items-center gap-1 bg-transparent border-0 cursor-pointer px-3.5 py-2 rounded-lg hover:bg-black/5 ${servicesOpen ? 'active' : ''}`}
                onMouseEnter={() => { setServicesOpen(true); setPackagesOpen(false) }}
                onMouseLeave={() => setServicesOpen(false)}
                onClick={() => { setServicesOpen(v => !v); setPackagesOpen(false) }}
                aria-haspopup="true"
                aria-expanded={servicesOpen}
              >
                Services
                <motion.span animate={{ rotate: servicesOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                  <HiChevronDown className="text-xs" />
                </motion.span>
              </button>
              <div onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
                <DropdownMenu items={servicesDropdown} isOpen={servicesOpen} />
              </div>
            </div>

            {/* Packages Dropdown */}
            <div className="relative" ref={packagesRef}>
              <button
                className={`nav-link flex items-center gap-1 bg-transparent border-0 cursor-pointer px-3.5 py-2 rounded-lg hover:bg-black/5 ${packagesOpen ? 'active' : ''}`}
                onMouseEnter={() => { setPackagesOpen(true); setServicesOpen(false) }}
                onMouseLeave={() => setPackagesOpen(false)}
                onClick={() => { setPackagesOpen(v => !v); setServicesOpen(false) }}
                aria-haspopup="true"
                aria-expanded={packagesOpen}
              >
                Packages
                <motion.span animate={{ rotate: packagesOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                  <HiChevronDown className="text-xs" />
                </motion.span>
              </button>
              <div onMouseEnter={() => setPackagesOpen(true)} onMouseLeave={() => setPackagesOpen(false)}>
                <DropdownMenu items={packagesDropdown} isOpen={packagesOpen} />
              </div>
            </div>

            <NavLink to="/pricing" className={({ isActive }) => `nav-link px-3.5 py-2 rounded-lg hover:bg-black/5 ${isActive ? 'active' : ''}`}>
              Pricing
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => `nav-link px-3.5 py-2 rounded-lg hover:bg-black/5 ${isActive ? 'active' : ''}`}>
              Contact
            </NavLink>
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:+919643199064"
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-black/12 text-gray-700 hover:border-gold/50 hover:text-gold transition-all duration-200"
              style={{ fontSize: '0.78rem', fontFamily: 'Inter, Poppins, sans-serif', fontWeight: 600 }}
            >
              <HiPhone className="text-sm text-gold" />
              +91 96431 99064
            </a>
            <a
              href="https://wa.me/919643199064?text=Hello%20I%20want%20to%20book%20a%20cab.%20Thanks"
              target="_blank" rel="noreferrer"
              className="btn-gold px-5 py-2.5 rounded-lg"
            >
              Book Now
            </a>
          </div>

          {/* HAMBURGER */}
          <button
            className="lg:hidden w-10 h-10 rounded-xl border border-black/12 flex items-center justify-center text-gray-700 text-xl focus:outline-none hover:border-gold/40 hover:text-gold transition-all"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <HiX className="text-gold" /> : <HiMenuAlt3 />}
          </button>
        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
            className="fixed inset-0 z-50 flex flex-col pt-6 pb-10 px-6 overflow-y-auto"
            style={{ background: '#ffffff' }}
          >
            {/* Header bar */}
            <div className="flex items-center justify-between pb-6 mb-2 border-b border-black/8">
              <img src="/logo-transparent.png" alt="ANSA PRIME" className="h-9 w-auto object-contain" />
              <button
                className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-gray-700 text-xl"
                onClick={closeMobile}
              >
                <HiX />
              </button>
            </div>

            <div className="flex flex-col gap-0">
              {[
                { label: 'Home', to: '/', end: true },
                { label: 'About Us', to: '/about' },
                { label: 'Fleet', to: '/fleet' },
              ].map(({ label, to, end }) => (
                <NavLink
                  key={to}
                  to={to} end={end} onClick={closeMobile}
                  className={({ isActive }) =>
                    `text-xl font-bold py-4 border-b border-black/8 flex items-center justify-between transition-colors ${isActive ? 'text-gold' : 'text-gray-800'}`
                  }
                  style={{ fontFamily: 'Inter, Outfit, sans-serif', letterSpacing: '-0.02em' }}
                >
                  {label}
                </NavLink>
              ))}

              {/* Services Accordion */}
              <div>
                <button
                  onClick={() => setMobileServices(v => !v)}
                  className="w-full py-4 border-b border-black/8 flex items-center justify-between text-gray-800"
                  style={{ fontFamily: 'Inter, Outfit, sans-serif', fontSize: '1.25rem', fontWeight: 700, letterSpacing: '-0.02em' }}
                >
                  Services
                  <motion.span animate={{ rotate: mobileServices ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <HiChevronDown className="text-gold text-lg" />
                  </motion.span>
                </button>
                <AnimatePresence>
                  {mobileServices && (
                    <motion.ul
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden pl-4 py-2 space-y-2 mb-1"
                    >
                      {servicesDropdown.map(item => (
                        <li key={item.label}>
                          <Link to={item.path} onClick={closeMobile}
                            className="flex items-center gap-2 text-gray-500 hover:text-gold transition-colors py-1"
                            style={{ fontFamily: 'Inter, Poppins, sans-serif', fontSize: '0.85rem', fontWeight: 600 }}
                          >
                            <item.icon className="text-gold/50 text-xs" />
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>

              {/* Packages Accordion */}
              <div>
                <button
                  onClick={() => setMobilePackages(v => !v)}
                  className="w-full py-4 border-b border-black/8 flex items-center justify-between text-gray-800"
                  style={{ fontFamily: 'Inter, Outfit, sans-serif', fontSize: '1.25rem', fontWeight: 700, letterSpacing: '-0.02em' }}
                >
                  Packages
                  <motion.span animate={{ rotate: mobilePackages ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <HiChevronDown className="text-gold text-lg" />
                  </motion.span>
                </button>
                <AnimatePresence>
                  {mobilePackages && (
                    <motion.ul
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden pl-4 py-2 space-y-2 mb-1"
                    >
                      {packagesDropdown.map(item => (
                        <li key={item.label}>
                          <Link to={item.path} onClick={closeMobile}
                            className="flex items-center gap-2 text-gray-500 hover:text-gold transition-colors py-1"
                            style={{ fontFamily: 'Inter, Poppins, sans-serif', fontSize: '0.85rem', fontWeight: 600 }}
                          >
                            <item.icon className="text-gold/50 text-xs" />
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>

              {[
                { label: 'Pricing', to: '/pricing' },
                { label: 'Contact', to: '/contact' },
              ].map(({ label, to }) => (
                <NavLink
                  key={to}
                  to={to} onClick={closeMobile}
                  className={({ isActive }) =>
                    `text-xl font-bold py-4 border-b border-black/8 flex items-center justify-between transition-colors ${isActive ? 'text-gold' : 'text-gray-800'}`
                  }
                  style={{ fontFamily: 'Inter, Outfit, sans-serif', letterSpacing: '-0.02em' }}
                >
                  {label}
                </NavLink>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3">
              <a href="tel:+919643199064"
                className="btn-outline px-6 py-3.5 text-sm rounded-xl w-full text-center"
                onClick={closeMobile}
              >
                <HiPhone className="inline mr-2" />
                +91 96431 99064
              </a>
              <a
                href="https://wa.me/919643199064?text=Hello%20I%20want%20to%20book%20a%20cab.%20Thanks"
                target="_blank" rel="noreferrer"
                className="btn-gold px-6 py-3.5 text-sm rounded-xl w-full text-center"
                onClick={closeMobile}
              >
                Book Now
              </a>
            </div>

            {/* Contact info */}
            <div className="mt-6 pt-6 border-t border-black/8 space-y-2">
              <a href="tel:+919643199064" className="flex items-center gap-2 text-sm text-gray-500 hover:text-gold transition-colors">
                <HiPhone className="text-gold" /> +91 96431 99064
              </a>
              <a href="mailto:info@ansaprimemobility.in" className="flex items-center gap-2 text-sm text-gray-500 hover:text-gold transition-colors">
                <HiMail className="text-gold" /> info@ansaprimemobility.in
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
