import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { FaPhoneAlt, FaCarAlt, FaWhatsapp } from 'react-icons/fa'
import { HiArrowRight, HiLocationMarker } from 'react-icons/hi'
import BookingForm from '../Booking/BookingForm'

const stats = [
  { value: '5000+', label: 'Happy Clients' },
  { value: '100+',  label: 'Expert Drivers' },
  { value: '12+',   label: 'Luxury Cars' },
  { value: '24×7',  label: 'Availability' },
]

export default function HeroSection() {
  const carRef  = useRef(null)
  const bgRef   = useRef(null)

  useEffect(() => {
    // Floating car animation
    if (carRef.current) {
      gsap.to(carRef.current, {
        y: -22,
        duration: 3.8,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: -1,
      })
    }
    // Subtle parallax on BG
    const onMove = e => {
      if (!bgRef.current) return
      const x = (e.clientX / window.innerWidth - 0.5) * 12
      const y = (e.clientY / window.innerHeight - 0.5) * 8
      gsap.to(bgRef.current, { x, y, duration: 1.2, ease: 'power2.out' })
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-dark" style={{ paddingTop: '120px' }}>
      {/* ── PHOTO BACKGROUND ── */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div ref={bgRef} className="absolute inset-[-4%]"
          style={{
            backgroundImage: 'url(/hero-bg.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        {/* Dark vignette overlay */}
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, rgba(10,10,10,0.97) 0%, rgba(10,10,10,0.82) 45%, rgba(10,10,10,0.55) 100%)' }}
        />
        {/* Gold glow orb top */}
        <div className="absolute -top-32 left-1/3 w-[700px] h-[700px] rounded-full opacity-[0.06]"
          style={{ background: 'radial-gradient(circle, #D4A73C, transparent 70%)' }}
        />
        {/* Thin diagonal lines */}
        <div className="absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: 'repeating-linear-gradient(-45deg, #D4A73C 0px, #D4A73C 1px, transparent 0px, transparent 60px)' }}
        />
      </div>

      {/* ── CONTENT ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full py-16">
        <div className="flex flex-col lg:flex-row items-center gap-10 xl:gap-16">

          {/* ── LEFT COLUMN ── */}
          <div className="flex-1 text-center lg:text-left">

            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-3 justify-center lg:justify-start mb-5"
            >
              <span className="w-10 h-px bg-gradient-to-r from-gold to-transparent" />
              <span className="section-label">New Delhi's Finest Cab Service</span>
              <span className="w-10 h-px bg-gradient-to-l from-gold to-transparent" />
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1, ease: [0.23, 1, 0.32, 1] }}
              className="font-heading font-black leading-[0.92] mb-4"
              style={{ fontSize: 'clamp(2.8rem, 6vw, 5.2rem)' }}
            >
              <span className="gold-text block">ANSA PRIME</span>
              <span className="text-white block">MOBILITY</span>
              <span className="text-white/60 block" style={{ fontSize: '0.68em', letterSpacing: '0.12em' }}>
                SERVICES
              </span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.85 }}
              className="font-heading text-xl md:text-2xl text-white/40 italic mb-3"
            >
              Ride in Comfort. Arrive in Style.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.95 }}
              className="font-body text-sm text-white/45 max-w-[460px] mx-auto lg:mx-0 leading-relaxed mb-7"
            >
              Experience seamless luxury travel across Delhi NCR — verified chauffeurs,
              premium vehicles, transparent pricing, available 24 hours a day.
            </motion.p>

            {/* Service Tags */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.05 }}
              className="flex flex-wrap gap-2 justify-center lg:justify-start mb-8"
            >
              {['Airport Transfers', 'Corporate Travel', 'Outstation Trips', 'Wedding Transport'].map(t => (
                <span key={t} className="gold-badge">{t}</span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.15 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10"
            >
              <Link to="/contact" className="btn-gold px-8 py-4 text-[11px] rounded-sm gap-2">
                <FaCarAlt /> Book Your Ride <HiArrowRight />
              </Link>
              <a href="https://wa.me/919643199064" target="_blank" rel="noreferrer"
                className="btn-outline px-8 py-4 text-[11px] rounded-sm gap-2">
                <FaWhatsapp className="text-base" /> WhatsApp Us
              </a>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-[460px] mx-auto lg:mx-0"
            >
              {stats.map(s => (
                <div key={s.label} className="text-center lg:text-left">
                  <p className="font-heading text-2xl font-black gold-text">{s.value}</p>
                  <p className="font-body text-[11px] text-white/40 tracking-wider uppercase">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT: BOOKING FORM ── */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
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
        <span className="font-body text-[10px] text-white/20 tracking-[4px] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
          className="w-px h-10 bg-gradient-to-b from-gold to-transparent"
        />
      </motion.div>
    </section>
  )
}
