import { motion } from 'framer-motion'
import { useRef } from 'react'
import CountUp from 'react-countup'
import { useInView } from 'framer-motion'
import { FaBullseye, FaEye, FaHeart, FaPhoneAlt } from 'react-icons/fa'
import { HiArrowRight } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import MiniHero from '../components/MiniHero/MiniHero'

const stats = [
  { value: 5000, suffix: '+', label: 'Happy Customers', sub: 'Across Delhi NCR' },
  { value: 100,  suffix: '+', label: 'Verified Drivers', sub: 'Background Checked' },
  { value: 8,    suffix: '+', label: 'Years Experience', sub: 'Since 2016' },
  { value: 12,   suffix: '+', label: 'Luxury Vehicles', sub: 'Premium Fleet' },
]

const mvv = [
  {
    icon: FaBullseye,
    title: 'Our Mission',
    text: 'To provide safe, comfortable and premium cab services that make every journey a luxury experience — whether a short local trip or a long outstation ride across India.',
  },
  {
    icon: FaEye,
    title: 'Our Vision',
    text: "To become Delhi NCR's most trusted luxury mobility brand, setting new benchmarks in transportation quality, driver professionalism and customer satisfaction.",
  },
  {
    icon: FaHeart,
    title: 'Our Values',
    text: 'Integrity, Punctuality, Safety and Excellence. We treat every customer as our most important guest and every vehicle as a mobile sanctuary of comfort.',
  },
]

const team = [
  { name: 'Ansar Ahmed',   role: 'Founder & CEO',      emoji: '👨‍💼' },
  { name: 'Rahul Sharma',  role: 'Operations Manager',  emoji: '👷' },
  { name: 'Priyanka Singh','role': 'Customer Relations', emoji: '👩‍💼' },
]

function StatCard({ value, suffix, label, sub }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  return (
    <div ref={ref} className="counter-card rounded-xl p-8 text-center luxury-card">
      <div className="font-heading text-5xl font-black gold-text mb-1">
        {isInView ? <CountUp end={value} duration={2.5} /> : '0'}{suffix}
      </div>
      <p className="font-body text-sm font-semibold text-white/80 mb-0.5">{label}</p>
      <p className="font-body text-[11px] text-white/35 tracking-wider">{sub}</p>
    </div>
  )
}

export default function About() {
  return (
    <main>
      <MiniHero
        title="ABOUT US"
        subtitle="Premium cab booking & luxury mobility across Delhi NCR since 2016"
        breadcrumb={['About Us']}
      />

      {/* WELCOME */}
      <section className="py-28" style={{ background: '#0a0a0a' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left: Image */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="rounded-xl overflow-hidden aspect-[4/3] relative">
                <img src="/about-img.jpg" alt="ANSA PRIME Chauffeur Service" className="w-full h-full object-cover" />
                <div className="absolute inset-0"
                  style={{ background: 'linear-gradient(to bottom, transparent 60%, rgba(10,10,10,0.7))' }} />
              </div>
              {/* Gold border corners */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 pointer-events-none"
                style={{ borderBottom: '2px solid rgba(212,167,60,0.5)', borderRight: '2px solid rgba(212,167,60,0.5)', borderRadius: '0 0 12px 0' }} />
              <div className="absolute -top-4 -left-4 w-24 h-24 pointer-events-none"
                style={{ borderTop: '2px solid rgba(212,167,60,0.5)', borderLeft: '2px solid rgba(212,167,60,0.5)', borderRadius: '12px 0 0 0' }} />
              {/* Experience badge */}
              <div className="absolute bottom-6 left-6 glass-dark rounded-xl px-5 py-4">
                <p className="font-heading text-3xl font-black gold-text">8+</p>
                <p className="font-body text-xs text-white/60 tracking-wider">Years of Excellence</p>
              </div>
            </motion.div>

            {/* Right: Text */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="section-label mb-3">Who We Are</p>
              <h2 className="section-title text-4xl md:text-5xl mb-2">ANSA PRIME</h2>
              <h3 className="font-heading text-xl text-white/50 mb-6">MOBILITY SERVICES</h3>
              <div className="gold-divider-left mb-7" />

              <p className="font-body text-sm text-white/55 leading-relaxed mb-4">
                Ansa Prime Mobility Services is a premium cab rental and transportation provider dedicated to delivering smooth, safe and luxurious travel experiences across Delhi NCR and beyond.
              </p>
              <p className="font-body text-sm text-white/55 leading-relaxed mb-8">
                Founded on the principles of luxury, punctuality and professionalism, we serve corporate clients, frequent flyers, wedding parties and leisure travellers with equal dedication. Our fleet of premium vehicles and trained chauffeurs ensure every ride is unforgettable.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-8">
                {['Airport Transfers', 'Corporate Travel', 'Local Cabs', 'Outstation Trips', 'Wedding Transport', '24×7 Availability'].map(f => (
                  <div key={f} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                    <span className="font-body text-sm text-white/55">{f}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <a href="tel:+919643199064" className="btn-gold px-8 py-4 text-[11px] rounded-sm gap-2">
                  <FaPhoneAlt /> Call Us Today
                </a>
                <Link to="/contact" className="btn-outline px-8 py-4 text-[11px] rounded-sm gap-2">
                  Book a Ride <HiArrowRight />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MISSION VISION VALUES */}
      <section className="py-28 relative" style={{ background: '#0d0d0d' }}>
        <div className="h-px w-full absolute top-0" style={{ background: 'linear-gradient(90deg, transparent, rgba(212,167,60,0.35), transparent)' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <p className="section-label mb-3">Our Foundation</p>
            <h2 className="section-title text-4xl md:text-5xl mb-4">
              Mission, Vision &amp; <span>Values</span>
            </h2>
            <div className="gold-divider" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mvv.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="luxury-card rounded-xl p-8 text-center group relative overflow-hidden"
              >
                <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500"
                  style={{ background: 'linear-gradient(90deg, #D4A73C, #F0D060)' }} />
                <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{ background: 'rgba(212,167,60,0.08)', border: '1px solid rgba(212,167,60,0.25)' }}>
                  <item.icon className="text-gold text-xl" />
                </div>
                <h3 className="font-heading text-xl font-bold text-white mb-3 group-hover:text-gold transition-colors">{item.title}</h3>
                <p className="font-body text-sm text-white/45 leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-24" style={{ background: '#0a0a0a' }}>
        <div className="h-px w-full absolute" style={{ background: 'linear-gradient(90deg, transparent, rgba(212,167,60,0.35), transparent)' }} />
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="section-label mb-3">By The Numbers</p>
            <h2 className="section-title text-4xl">Trusted by <span>Thousands</span></h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {stats.map(s => <StatCard key={s.label} {...s} />)}
          </div>
        </div>
      </section>
    </main>
  )
}
