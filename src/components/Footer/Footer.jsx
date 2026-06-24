import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaFacebookF, FaInstagram, FaGoogle, FaWhatsapp, FaPhoneAlt } from 'react-icons/fa'
import { HiLocationMarker, HiPhone, HiMail, HiArrowRight } from 'react-icons/hi'

const quickLinks = [
  { label: 'Home',                  path: '/' },
  { label: 'About Us',              path: '/about' },
  { label: 'Chardham Tour Packages',path: '/pricing' },
  { label: 'Same Day Tour Packages',path: '/pricing' },
  { label: 'Contact Us',            path: '/contact' },
]

const serviceLinks = [
  { label: 'Car Rental Delhi',         path: '/services' },
  { label: 'Outstation Taxi',          path: '/services' },
  { label: 'Tempo Traveller Service',  path: '/fleet' },
  { label: 'Oneway Cab Service',       path: '/services' },
  { label: 'Airport Taxi',             path: '/services' },
]

const tourLinks = [
  { label: 'Delhi to Agra Tour',         path: '/pricing' },
  { label: 'Delhi to Jaipur Tour',       path: '/pricing' },
  { label: 'Delhi to Rishikesh Tour',    path: '/pricing' },
  { label: 'Delhi to Haridwar Tour',     path: '/pricing' },
  { label: 'Delhi to Mathura Tour',      path: '/pricing' },
  { label: 'Delhi to Manali Tour',       path: '/pricing' },
  { label: 'Delhi to Mussoorie Tour',    path: '/pricing' },
  { label: 'Delhi to Chandigarh Tour',   path: '/pricing' },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ background: '#f2ede6' }}>
      {/* Top border */}
      <div className="h-px w-full" style={{ background: 'linear-gradient(90deg, transparent, #D4A73C, transparent)' }} />



      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* BRAND */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center mb-4">
              <img
                src="/logo-transparent.png"
                alt="ANSA PRIME Mobility Services"
                className="h-16 w-auto object-contain"
              />
            </Link>
            <p className="font-body text-sm text-gray-600 leading-relaxed mb-5">
              ANSA Prime Mobility Services — New Delhi's trusted premium cab service. Ride in Comfort. Arrive in Style.
            </p>

            {/* Address */}
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2.5">
                <HiLocationMarker className="text-gold text-lg mt-0.5 shrink-0" />
                <span className="font-body text-xs text-gray-500 leading-relaxed">
                  <strong className="text-gray-700 block">Head Office:</strong>
                  94, Block B, Zamrudpur, Greater Kailash,<br />New Delhi – 110048
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <HiPhone className="text-gold text-base shrink-0" />
                <a href="tel:+919643199064" className="font-body text-xs text-gray-500 hover:text-gold transition-colors">
                  +91 96431 99064
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <HiMail className="text-gold text-base shrink-0" />
                <a href="mailto:info@ansaprime.com" className="font-body text-xs text-gray-500 hover:text-gold transition-colors">
                  info@ansaprime.com
                </a>
              </li>
            </ul>

            {/* Social */}
            <div className="flex items-center gap-2.5">
              {[
                { Icon: FaFacebookF,  href: 'https://www.facebook.com/share/1GQDKScG4Z/',  label: 'Facebook' },
                { Icon: FaInstagram,  href: 'https://www.instagram.com/ansaprimemobilityservices?igsh=cGFnZnZ6ankwa2wx', label: 'Instagram' },
                { Icon: FaGoogle,     href: 'https://maps.google.com/',   label: 'Google' },
                { Icon: FaWhatsapp,   href: 'https://wa.me/919643199064', label: 'WhatsApp' },
              ].map(({ Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}
                  className="w-9 h-9 rounded-full border border-gold/25 flex items-center justify-center text-gold/60
                    hover:bg-gold hover:text-dark-DEFAULT hover:border-gold transition-all duration-300 text-sm">
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="font-heading text-base font-bold text-gray-800 mb-6 relative pb-3">
              Quick Links
              <span className="absolute bottom-0 left-0 w-10 h-0.5" style={{ background: 'linear-gradient(90deg, #D4A73C, transparent)' }} />
            </h4>
            <ul className="space-y-3">
              {quickLinks.map(l => (
                <li key={l.label}>
                  <Link to={l.path}
                    className="font-body text-sm text-gray-500 hover:text-gold transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold/40 group-hover:bg-gold transition-colors shrink-0" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="font-heading text-base font-bold text-gray-800 mb-6 relative pb-3">
              Our Services
              <span className="absolute bottom-0 left-0 w-10 h-0.5" style={{ background: 'linear-gradient(90deg, #D4A73C, transparent)' }} />
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map(s => (
                <li key={s.label}>
                  <Link to={s.path}
                    className="font-body text-sm text-gray-500 hover:text-gold transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold/40 group-hover:bg-gold transition-colors shrink-0" />
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* TOUR PACKAGES */}
          <div>
            <h4 className="font-heading text-base font-bold text-gray-800 mb-6 relative pb-3">
              Tour Packages
              <span className="absolute bottom-0 left-0 w-10 h-0.5" style={{ background: 'linear-gradient(90deg, #D4A73C, transparent)' }} />
            </h4>
            <ul className="space-y-3">
              {tourLinks.map(t => (
                <li key={t.label}>
                  <Link to={t.path}
                    className="font-body text-sm text-gray-500 hover:text-gold transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold/40 group-hover:bg-gold transition-colors shrink-0" />
                    {t.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* WORKING HOURS */}
          <div>
            <h4 className="font-heading text-base font-bold text-gray-800 mb-6 relative pb-3">
              Working Hours
              <span className="absolute bottom-0 left-0 w-10 h-0.5" style={{ background: 'linear-gradient(90deg, #D4A73C, transparent)' }} />
            </h4>
            <ul className="space-y-3">
              {[
                { day: 'Monday – Friday', time: '24 Hours' },
                { day: 'Saturday',        time: '24 Hours' },
                { day: 'Sunday',          time: '24 Hours' },
                { day: 'Holidays',        time: '24 Hours' },
              ].map(h => (
                <li key={h.day} className="flex flex-col gap-0.5">
                  <span className="font-heading text-sm font-bold gold-text">{h.time}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 p-4 rounded-xl" style={{ background: 'rgba(212,167,60,0.08)', border: '1px solid rgba(212,167,60,0.2)' }}>
              <p className="font-body text-xs text-gold font-semibold tracking-wider uppercase mb-2">Book Instantly</p>
              <a href="https://wa.me/919643199064?text=Hello%20I%20want%20to%20book%20a%20cab.%20Thanks"
                target="_blank" rel="noreferrer"
                className="flex items-center gap-2 font-body text-xs text-gray-600 hover:text-gold transition-colors">
                <FaWhatsapp className="text-base text-green-400" />
                WhatsApp: +91 96431 99064
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-black/8 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-gray-400">
            © Copyright reserved to ANSA Prime Mobility Services 2026
          </p>
          <div className="flex items-center gap-4">
            <Link to="/about" className="font-body text-xs text-gray-400 hover:text-gold transition-colors">Privacy Policy</Link>
            <span className="w-px h-3 bg-black/10" />
            <Link to="/about" className="font-body text-xs text-gray-400 hover:text-gold transition-colors">Terms of Service</Link>
          </div>
          <p className="font-body text-xs text-gray-400">
            Designed with <span className="text-gold">♥</span> for Premium Travel
          </p>
        </div>
      </div>
    </footer>
  )
}
