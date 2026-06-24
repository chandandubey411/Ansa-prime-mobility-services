import { useState, useEffect, useRef } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX, HiPhone, HiChevronDown, HiMail } from 'react-icons/hi'
import {
  FaPlane, FaBriefcase, FaTaxi, FaRoad, FaRing, FaUserTie,
  FaMapMarkedAlt, FaMountain, FaStar, FaTemperatureLow,
  FaFacebookF, FaInstagram, FaGoogle
} from 'react-icons/fa'

const servicesDropdown = [
  { label: 'Car Rental Delhi',         path: '/services', icon: FaTaxi },
  { label: 'Outstation Taxi',          path: '/services', icon: FaRoad },
  { label: 'Tempo Traveller Service',  path: '/fleet',    icon: FaMapMarkedAlt },
  { label: 'Oneway Cab',               path: '/services', icon: FaPlane },
  { label: 'Airport Taxi',             path: '/services', icon: FaPlane },
]

const packagesDropdown = [
  { label: 'Chardham Tour Package',    path: '/pricing', icon: FaStar },
  { label: 'Same Day Tour Package',    path: '/pricing', icon: FaMapMarkedAlt },
]

function DropdownMenu({ items, isOpen }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 8, scale: 0.97 }}
          transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
          className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 rounded-xl overflow-hidden z-50"
          style={{
            background: 'rgba(255,255,255,0.98)',
            border: '1px solid rgba(212,167,60,0.25)',
            boxShadow: '0 20px 60px rgba(0,0,0,0.12), 0 0 40px rgba(212,167,60,0.06)',
            backdropFilter: 'blur(20px)',
          }}
        >
          {/* top accent */}
          <div className="h-0.5 w-full" style={{ background: 'linear-gradient(90deg, transparent, #D4A73C, transparent)' }} />
          <ul className="py-2">
            {items.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.path}
                  className="flex items-center gap-3 px-4 py-2.5 text-gray-600 hover:text-gold hover:bg-gold/5 transition-all duration-200 group"
                  style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase' }}
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
    const onScroll = () => setScrolled(window.scrollY > 70)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close dropdowns when clicking outside
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
      {/* TOP BAR — Contact Info */}
      <div className="fixed top-0 left-0 right-0 z-50 text-dark-DEFAULT py-1.5 hidden md:block"
        style={{ background: '#D4A73C' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Left: Phone + Email */}
          <div className="flex items-center gap-6">
            <a href="tel:+919643199064" className="flex items-center gap-1.5 text-[11px] font-bold text-dark-DEFAULT hover:opacity-80 transition-opacity">
              <HiPhone className="text-sm" /> +91 96431 99064
            </a>
            <a href="mailto:info@ansaprime.com" className="flex items-center gap-1.5 text-[11px] font-bold text-dark-DEFAULT hover:opacity-80 transition-opacity">
              <HiMail className="text-sm" /> info@ansaprime.com
            </a>
          </div>
          {/* Right: Social Icons */}
          <div className="flex items-center gap-3">
            <a href="https://www.facebook.com/share/1GQDKScG4Z/" target="_blank" rel="noreferrer" aria-label="Facebook"
              className="hover:opacity-70 transition-opacity text-dark-DEFAULT text-sm"><FaFacebookF /></a>
            <a href="https://www.instagram.com/ansaprimemobilityservices?igsh=cGFnZnZ6ankwa2wx" target="_blank" rel="noreferrer" aria-label="Instagram"
              className="hover:opacity-70 transition-opacity text-dark-DEFAULT text-sm"><FaInstagram /></a>
            <a href="https://maps.google.com/" target="_blank" rel="noreferrer" aria-label="Google Maps"
              className="hover:opacity-70 transition-opacity text-dark-DEFAULT text-sm"><FaGoogle /></a>
          </div>
        </div>
      </div>

      {/* MAIN NAV */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
        className={`fixed left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'top-[36px] md:top-[36px] py-3'
            : 'top-[36px] md:top-[36px] bg-transparent py-5'
        }`}
        style={scrolled ? { background: 'rgba(255,255,255,0.97)', backdropFilter: 'blur(20px)', boxShadow: '0 4px 30px rgba(0,0,0,0.08)', borderBottom: '1px solid rgba(212,167,60,0.15)' } : {}}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* LOGO */}
          <Link to="/" className="flex items-center leading-none group">
            <img
              src="/logo-transparent.png"
              alt="ANSA PRIME Mobility Services"
              className="h-14 w-auto object-contain group-hover:opacity-90 transition-opacity drop-shadow-lg"
            />
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center gap-7">
            {/* Home */}
            <NavLink to="/" end className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Home
            </NavLink>

            {/* About */}
            <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              About Us
            </NavLink>

            {/* Fleet */}
            <NavLink to="/fleet" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Fleet
            </NavLink>

            {/* Services Dropdown */}
            <div className="relative" ref={servicesRef}>
              <button
                className={`nav-link flex items-center gap-1.5 bg-transparent border-0 cursor-pointer ${servicesOpen ? 'active' : ''}`}
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
              <div
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <DropdownMenu items={servicesDropdown} isOpen={servicesOpen} />
              </div>
            </div>

            {/* Packages Dropdown */}
            <div className="relative" ref={packagesRef}>
              <button
                className={`nav-link flex items-center gap-1.5 bg-transparent border-0 cursor-pointer ${packagesOpen ? 'active' : ''}`}
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
              <div
                onMouseEnter={() => setPackagesOpen(true)}
                onMouseLeave={() => setPackagesOpen(false)}
              >
                <DropdownMenu items={packagesDropdown} isOpen={packagesOpen} />
              </div>
            </div>

            {/* Contact */}
            <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Contact
            </NavLink>
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:+919643199064" className="flex items-center gap-2 text-gold text-xs font-body font-semibold tracking-wider hover:text-gold-light transition-colors">
              <HiPhone className="text-base" /> +91 96431 99064
            </a>
            <a
              href="https://wa.me/919643199064?text=Hello%20I%20want%20to%20book%20a%20cab.%20Thanks"
              target="_blank" rel="noreferrer"
              className="btn-gold px-5 py-2.5 text-[11px] rounded-sm"
            >
              Book Now
            </a>
          </div>

          {/* HAMBURGER */}
          <button
            className="lg:hidden text-gray-700 text-2xl focus:outline-none p-1"
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
            transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
            className="fixed inset-0 z-30 flex flex-col pt-28 pb-10 px-8 overflow-y-auto"
            style={{ background: 'linear-gradient(135deg, #f8f5f0 0%, #ece6db 60%, #f5f0e8 100%)' }}
          >
            <div className="gradient-line-h mb-8" />
            <div className="flex flex-col gap-2">

              {/* Home */}
              <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.05 }}>
                <NavLink
                  to="/" end onClick={closeMobile}
                  className={({ isActive }) =>
                    `font-heading text-3xl font-bold pb-4 mb-2 border-b border-black/10 flex items-center gap-3 transition-colors ${isActive ? 'text-gold' : 'text-gray-800'}`
                  }
                >
                  <span className="text-gold text-sm font-body tracking-widest">01</span>Home
                </NavLink>
              </motion.div>

              {/* About */}
              <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.10 }}>
                <NavLink
                  to="/about" onClick={closeMobile}
                  className={({ isActive }) =>
                    `font-heading text-3xl font-bold pb-4 mb-2 border-b border-black/10 flex items-center gap-3 transition-colors ${isActive ? 'text-gold' : 'text-gray-800'}`
                  }
                >
                  <span className="text-gold text-sm font-body tracking-widest">02</span>About Us
                </NavLink>
              </motion.div>

              {/* Fleet */}
              <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.12 }}>
                <NavLink
                  to="/fleet" onClick={closeMobile}
                  className={({ isActive }) =>
                    `font-heading text-3xl font-bold pb-4 mb-2 border-b border-black/10 flex items-center gap-3 transition-colors ${isActive ? 'text-gold' : 'text-gray-800'}`
                  }
                >
                  <span className="text-gold text-sm font-body tracking-widest">03</span>Fleet
                </NavLink>
              </motion.div>

              {/* Services accordion */}
              <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15 }}>
                <button
                  onClick={() => setMobileServices(v => !v)}
                  className="w-full font-heading text-3xl font-bold pb-4 mb-2 border-b border-black/10 flex items-center justify-between text-gray-800 transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-gold text-sm font-body tracking-widest">04</span>Services
                  </span>
                  <motion.span animate={{ rotate: mobileServices ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <HiChevronDown className="text-gold text-xl" />
                  </motion.span>
                </button>
                <AnimatePresence>
                  {mobileServices && (
                    <motion.ul
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden pl-8 mb-4 space-y-3"
                    >
                      {servicesDropdown.map(item => (
                        <li key={item.label}>
                          <Link
                             to={item.path} onClick={closeMobile}
                            className="flex items-center gap-2 text-gray-500 hover:text-gold transition-colors font-body text-sm tracking-wider uppercase"
                          >
                            <item.icon className="text-gold/50 text-xs" />
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Packages accordion */}
              <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.20 }}>
                <button
                  onClick={() => setMobilePackages(v => !v)}
                  className="w-full font-heading text-3xl font-bold pb-4 mb-2 border-b border-black/10 flex items-center justify-between text-gray-800 transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-gold text-sm font-body tracking-widest">05</span>Packages
                  </span>
                  <motion.span animate={{ rotate: mobilePackages ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <HiChevronDown className="text-gold text-xl" />
                  </motion.span>
                </button>
                <AnimatePresence>
                  {mobilePackages && (
                    <motion.ul
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden pl-8 mb-4 space-y-3"
                    >
                      {packagesDropdown.map(item => (
                        <li key={item.label}>
                          <Link
                            to={item.path} onClick={closeMobile}
                            className="flex items-center gap-2 text-gray-500 hover:text-gold transition-colors font-body text-sm tracking-wider uppercase"
                          >
                            <item.icon className="text-gold/50 text-xs" />
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Contact */}
              <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.25 }}>
                <NavLink
                  to="/contact" onClick={closeMobile}
                  className={({ isActive }) =>
                    `font-heading text-3xl font-bold pb-4 mb-2 border-b border-black/10 flex items-center gap-3 transition-colors ${isActive ? 'text-gold' : 'text-gray-800'}`
                  }
                >
                  <span className="text-gold text-sm font-body tracking-widest">06</span>Contact
                </NavLink>
              </motion.div>

            </div>

            <div className="mt-8 flex flex-col gap-3">
              <a
                href="tel:+919643199064"
                className="btn-outline px-6 py-3 text-sm rounded-sm w-full text-center"
                onClick={closeMobile}
              >
                +91 96431 99064
              </a>
              <a
                href="https://wa.me/919643199064?text=Hello%20I%20want%20to%20book%20a%20cab.%20Thanks"
                target="_blank" rel="noreferrer"
                className="btn-gold px-6 py-3 text-sm rounded-sm w-full text-center"
                onClick={closeMobile}
              >
                Book Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
