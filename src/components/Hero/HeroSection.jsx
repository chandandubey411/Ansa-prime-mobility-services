import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { FaCarAlt, FaWhatsapp, FaShieldAlt, FaClock, FaStar } from 'react-icons/fa'
import { HiArrowRight, HiPhone } from 'react-icons/hi'
import BookingForm from '../Booking/BookingForm'

const stats = [
  { value: '5,000+', label: 'Happy Clients' },
  { value: '100+',   label: 'Expert Drivers' },
  { value: '15+',    label: 'Premium Cars' },
  { value: '24×7',   label: 'Availability' },
]

const tags = ['Airport Transfers', 'Outstation Trips', 'Corporate Travel', 'Wedding Transport']

export default function HeroSection() {
  const bgRef = useRef(null)

  useEffect(() => {
    // Subtle parallax on BG
    const onMove = e => {
      if (!bgRef.current) return
      const x = (e.clientX / window.innerWidth - 0.5) * 10
      const y = (e.clientY / window.innerHeight - 0.5) * 7
      gsap.to(bgRef.current, { x, y, duration: 1.4, ease: 'power2.out' })
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <section
      className="relative w-full min-h-screen flex items-center overflow-hidden"
      style={{ paddingTop: '130px' }}
    >
      {/* ── DARK PHOTO BACKGROUND (like unicorncab.in) ── */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          ref={bgRef}
          className="absolute inset-[-4%]"
          style={{
            backgroundImage: 'url(/hero-bg.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        {/* Dark gradient overlay — inspired by reference site */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(120deg, rgba(10,14,20,0.90) 0%, rgba(10,14,20,0.72) 45%, rgba(10,14,20,0.45) 100%)',
          }}
        />
        {/* Bottom fade to white */}
        <div
          className="absolute inset-x-0 bottom-0 h-48"
          style={{ background: 'linear-gradient(to top, #ffffff, transparent)' }}
        />
        {/* Gold glow orb */}
        <div
          className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full opacity-[0.08] pointer-events-none"
          style={{ background: 'radial-gradient(circle, #D4A73C, transparent 70%)' }}
        />
      </div>

      {/* ── CONTENT ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full py-16">
        <div className="flex flex-col lg:flex-row items-center gap-10 xl:gap-16">

          {/* ── LEFT COLUMN ── */}
          <div className="flex-1 text-center lg:text-left">

            {/* Eyebrow badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/10 backdrop-blur mb-6"
            >
              <FaStar className="text-amber-300 text-xs" />
              <span className="text-white/90 text-xs font-semibold tracking-wide" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>
                New Delhi's Trusted Premium Cab Service
              </span>
            </motion.div>

            {/* Headline — Inter font, tight tracking */}
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
              className="font-heading font-black text-white mb-5"
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                lineHeight: 1.05,
                letterSpacing: '-0.04em',
                fontFamily: 'Inter, Outfit, sans-serif',
              }}
            >
              Travel Delhi NCR<br />
              with a Cab Service that feels{' '}
              <span className="gold-text-shimmer" style={{ WebkitTextFillColor: 'transparent' }}>
                Premium,
              </span>
              <br />
              <span style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.72em', fontWeight: 600, letterSpacing: '-0.02em' }}>
                Calm &amp; Dependable.
              </span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.85 }}
              className="text-white/75 max-w-[480px] mx-auto lg:mx-0 leading-relaxed mb-7"
              style={{ fontSize: '1rem', fontFamily: 'Inter, Poppins, sans-serif', fontWeight: 400 }}
            >
              Airport transfers, outstation rides, corporate commutes, and wedding transport —
              with verified chauffeurs, GPS tracking, and transparent pricing. Available 24 hours a day.
            </motion.p>

            {/* Service Tags */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              className="flex flex-wrap gap-2 justify-center lg:justify-start mb-8"
            >
              {tags.map(t => (
                <span
                  key={t}
                  className="px-4 py-1.5 rounded-full border border-white/15 bg-white/10 backdrop-blur text-white/90 text-xs font-semibold"
                  style={{ fontFamily: 'Inter, Poppins, sans-serif' }}
                >
                  {t}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-10"
            >
              <Link to="/contact"
                className="btn-gold px-8 py-4 text-xs gap-2 rounded-full"
              >
                <FaCarAlt /> Book Your Ride <HiArrowRight />
              </Link>
              <a href="https://wa.me/919643199064" target="_blank" rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-white/40 text-white text-xs font-bold tracking-wider uppercase hover:bg-white hover:text-gray-900 transition-all duration-300 hover:-translate-y-0.5"
                style={{ fontFamily: 'Inter, Poppins, sans-serif' }}
              >
                <FaWhatsapp className="text-base" /> WhatsApp Us
              </a>
            </motion.div>

            {/* Stats Row — glassmorphism chips */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.25 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-[500px] mx-auto lg:mx-0"
            >
              {stats.map(s => (
                <div
                  key={s.label}
                  className="stat-chip text-center lg:text-left"
                >
                  <p
                    className="text-xl font-extrabold text-white"
                    style={{ fontFamily: 'Inter, Outfit, sans-serif', letterSpacing: '-0.03em' }}
                  >{s.value}</p>
                  <p
                    className="text-[10px] text-white/65 tracking-wider uppercase mt-1"
                    style={{ fontFamily: 'Inter, Poppins, sans-serif' }}
                  >{s.label}</p>
                </div>
              ))}
            </motion.div>

            {/* Trust badge row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
              className="flex flex-wrap gap-4 mt-6 justify-center lg:justify-start"
            >
              {[
                { icon: FaShieldAlt, text: 'Police Verified Drivers' },
                { icon: FaClock,     text: '24/7 Availability' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-white/65 text-xs" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>
                  <Icon className="text-gold text-sm" /> {text}
                </div>
              ))}
              <a href="tel:+919643199064"
                className="flex items-center gap-2 text-white/80 hover:text-white text-xs font-semibold transition-colors"
                style={{ fontFamily: 'Inter, Poppins, sans-serif' }}
              >
                <HiPhone className="text-sm text-gold" /> +91 96431 99064
              </a>
            </motion.div>
          </div>

          {/* ── RIGHT: BOOKING FORM ── */}
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.65, duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
            className="w-full lg:w-[420px] xl:w-[450px] shrink-0"
          >
            <BookingForm />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-white/40 text-[10px] tracking-[4px] uppercase" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
          className="w-px h-10 bg-gradient-to-b from-gold to-transparent"
        />
      </motion.div>
    </section>
  )
}
