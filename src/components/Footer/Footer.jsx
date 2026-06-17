import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp, FaPhoneAlt } from 'react-icons/fa'
import { HiLocationMarker, HiPhone, HiMail, HiArrowRight } from 'react-icons/hi'

const quickLinks = [
  { label: 'Home',     path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Fleet',    path: '/fleet' },
  { label: 'Pricing',  path: '/pricing' },
  { label: 'Services', path: '/services' },
  { label: 'Contact',  path: '/contact' },
]

const services = [
  'Airport Transfer',
  'Corporate Travel',
  'Local Taxi Service',
  'Outstation Trips',
  'Wedding Transport',
  'Premium Chauffeur',
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ background: '#080808' }}>
      {/* Top border */}
      <div className="h-px w-full" style={{ background: 'linear-gradient(90deg, transparent, #D4A73C, transparent)' }} />

      {/* CTA Strip */}
      <div className="py-14 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0f0c00, #1a1200, #0f0c00)' }}>
        <div className="absolute inset-0 opacity-[0.06]"
          style={{ backgroundImage: 'repeating-linear-gradient(45deg, #D4A73C 0px, #D4A73C 1px, transparent 0, transparent 60px)' }} />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="section-label mb-3">Ready to Ride?</motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="font-heading text-3xl md:text-4xl font-black text-white mb-3">
            Book Your <span className="gold-text">Premium Cab</span> Now
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="font-body text-sm text-white/45 mb-8 max-w-lg mx-auto">
            Available 24/7 across Delhi NCR — Airport, Outstation, Corporate or Local.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-gold px-10 py-4 text-[11px] rounded-sm gap-2">
              Book Now <HiArrowRight />
            </Link>
            <a href="tel:+919643199064" className="btn-outline px-10 py-4 text-[11px] rounded-sm gap-2">
              <FaPhoneAlt /> +91 96431 99064
            </a>
          </motion.div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* BRAND */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center mb-4">
              <img
                src="/logo-transparent.png"
                alt="ANSA PRIME Mobility Services"
                className="h-16 w-auto object-contain"
              />
            </Link>
            <p className="font-body text-sm text-white/45 leading-relaxed mb-6">
              Premium cab booking & luxury mobility in New Delhi. Ride in Comfort. Arrive in Style. Serving Delhi NCR since 2016.
            </p>
            {/* Social */}
            <div className="flex items-center gap-2.5">
              {[
                { Icon: FaFacebookF, href: '#' },
                { Icon: FaInstagram, href: '#' },
                { Icon: FaYoutube,   href: '#' },
                { Icon: FaWhatsapp,  href: 'https://wa.me/919643199064' },
              ].map(({ Icon, href }, i) => (
                <a key={i} href={href} target={href !== '#' ? '_blank' : undefined} rel="noreferrer"
                  className="w-9 h-9 rounded-full border border-gold/25 flex items-center justify-center text-gold/60
                    hover:bg-gold hover:text-dark-DEFAULT hover:border-gold transition-all duration-300 text-sm">
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="font-heading text-base font-bold text-white mb-6 relative pb-3">
              Quick Links
              <span className="absolute bottom-0 left-0 w-10 h-0.5" style={{ background: 'linear-gradient(90deg, #D4A73C, transparent)' }} />
            </h4>
            <ul className="space-y-3">
              {quickLinks.map(l => (
                <li key={l.path}>
                  <Link to={l.path}
                    className="font-body text-sm text-white/45 hover:text-gold transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold/40 group-hover:bg-gold transition-colors shrink-0" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="font-heading text-base font-bold text-white mb-6 relative pb-3">
              Our Services
              <span className="absolute bottom-0 left-0 w-10 h-0.5" style={{ background: 'linear-gradient(90deg, #D4A73C, transparent)' }} />
            </h4>
            <ul className="space-y-3">
              {services.map(s => (
                <li key={s}>
                  <Link to="/services"
                    className="font-body text-sm text-white/45 hover:text-gold transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold/40 group-hover:bg-gold transition-colors shrink-0" />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="font-heading text-base font-bold text-white mb-6 relative pb-3">
              Contact Us
              <span className="absolute bottom-0 left-0 w-10 h-0.5" style={{ background: 'linear-gradient(90deg, #D4A73C, transparent)' }} />
            </h4>
            <ul className="space-y-5">
              <li className="flex gap-3">
                <HiLocationMarker className="text-gold text-xl mt-0.5 shrink-0" />
                <p className="font-body text-sm text-white/45 leading-relaxed">
                  94, Block B, Zamrudpur,<br />
                  Greater Kailash, New Delhi,<br />
                  Delhi – 110048
                </p>
              </li>
              <li className="flex items-center gap-3">
                <HiPhone className="text-gold text-lg shrink-0" />
                <a href="tel:+919643199064" className="font-body text-sm text-white/45 hover:text-gold transition-colors">
                  +91 96431 99064
                </a>
              </li>
              <li className="flex items-center gap-3">
                <HiMail className="text-gold text-lg shrink-0" />
                <a href="mailto:info@ansaprime.com" className="font-body text-sm text-white/45 hover:text-gold transition-colors">
                  info@ansaprime.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-white/25">
            © 2026 ANSA PRIME MOBILITY SERVICES. All Rights Reserved.
          </p>
          <p className="font-body text-xs text-white/25">
            Designed with <span className="text-gold">♥</span> for Premium Travel
          </p>
        </div>
      </div>
    </footer>
  )
}
