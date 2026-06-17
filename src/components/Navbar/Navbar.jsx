import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX, HiPhone } from 'react-icons/hi'

const navLinks = [
  { label: 'Home',     path: '/' },
  { label: 'About',    path: '/about' },
  { label: 'Fleet',    path: '/fleet' },
  { label: 'Pricing',  path: '/pricing' },
  { label: 'Services', path: '/services' },
  { label: 'Contact',  path: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 70)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* TOP TICKER */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gold/95 text-dark-DEFAULT py-1.5 text-center font-body text-[11px] font-bold tracking-widest uppercase overflow-hidden">
        <span className="marquee-inner inline-flex gap-24 whitespace-nowrap">
          {[...Array(8)].map((_, i) => (
            <span key={i} className="flex items-center gap-3">
              ✦ Premium Cab Booking New Delhi &nbsp;&nbsp;|&nbsp;&nbsp; Airport Transfers &nbsp;&nbsp;|&nbsp;&nbsp; 24×7 Available &nbsp;&nbsp;|&nbsp;&nbsp; Call: +91 96431 99064
            </span>
          ))}
        </span>
      </div>

      {/* MAIN NAV */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
        className={`fixed left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'top-[30px] glass-dark shadow-luxury py-3'
            : 'top-[30px] bg-transparent py-5'
        }`}
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
            {navLinks.map(link => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:+919643199064" className="flex items-center gap-2 text-gold text-xs font-body font-semibold tracking-wider hover:text-gold-light transition-colors">
              <HiPhone className="text-base" /> +91 96431 99064
            </a>
            <Link to="/contact" className="btn-gold px-5 py-2.5 text-[11px] rounded-sm">
              Book Now
            </Link>
          </div>

          {/* HAMBURGER */}
          <button
            className="lg:hidden text-white text-2xl focus:outline-none p-1"
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
            style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #111 60%, #0f0c08 100%)' }}
          >
            <div className="gradient-line-h mb-8" />
            <div className="flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <NavLink
                    to={link.path}
                    end={link.path === '/'}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      `font-heading text-3xl font-bold pb-4 mb-2 border-b border-white/8 flex items-center gap-3 transition-colors ${
                        isActive ? 'text-gold' : 'text-white/80'
                      }`
                    }
                  >
                    <span className="text-gold text-sm font-body tracking-widest">0{i + 1}</span>
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3">
              <a
                href="tel:+919643199064"
                className="btn-outline px-6 py-3 text-sm rounded-sm w-full text-center"
                onClick={() => setMobileOpen(false)}
              >
                +91 96431 99064
              </a>
              <Link
                to="/contact"
                className="btn-gold px-6 py-3 text-sm rounded-sm w-full text-center"
                onClick={() => setMobileOpen(false)}
              >
                Book Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
