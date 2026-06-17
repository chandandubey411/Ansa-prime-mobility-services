import HeroSection from '../components/Hero/HeroSection'
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs'
import FeaturedCars from '../components/FeaturedCars/FeaturedCars'
import Testimonials from '../components/Testimonials/Testimonials'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaPlane, FaBriefcase, FaTaxi, FaRoad } from 'react-icons/fa'
import { HiArrowRight } from 'react-icons/hi'

const services = [
  { icon: FaPlane,     title: 'Airport Transfer',  desc: '24/7 airport cab with flight tracking and meet & greet service.' },
  { icon: FaBriefcase, title: 'Corporate Travel',  desc: 'Executive fleet with monthly billing and dedicated account manager.' },
  { icon: FaTaxi,      title: 'Local Taxi',         desc: 'Comfortable local cabs for shopping, errands and daily commutes.' },
  { icon: FaRoad,      title: 'Outstation Trips',   desc: 'Long-distance travel to Agra, Jaipur, Chandigarh & all India.' },
]

const stats = [
  { value: '5,000+', label: 'Happy Clients',    sub: 'Across Delhi NCR' },
  { value: '100+',   label: 'Expert Drivers',   sub: 'Background Verified' },
  { value: '12+',    label: 'Luxury Vehicles',  sub: 'Premium Fleet' },
  { value: '8+',     label: 'Years Experience', sub: 'Trusted Since 2016' },
]

export default function Home() {
  return (
    <main>
      <HeroSection />

      {/* STATS BAND */}
      <section className="py-0 relative z-10" style={{ background: '#0a0a0a' }}>
        <div className="h-px w-full" style={{ background: 'linear-gradient(90deg, transparent, rgba(212,167,60,0.4), transparent)' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="counter-card rounded-lg px-6 py-5"
              >
                <p className="font-heading text-3xl md:text-4xl font-black gold-text mb-1">{s.value}</p>
                <p className="font-body text-sm font-semibold text-white/80">{s.label}</p>
                <p className="font-body text-[11px] text-white/35 tracking-wider">{s.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="h-px w-full" style={{ background: 'linear-gradient(90deg, transparent, rgba(212,167,60,0.4), transparent)' }} />
      </section>

      <WhyChooseUs />
      <FeaturedCars />

      {/* SERVICES PREVIEW */}
      <section className="py-28 relative overflow-hidden" style={{ background: '#111' }}>
        <div className="h-px w-full absolute top-0" style={{ background: 'linear-gradient(90deg, transparent, rgba(212,167,60,0.35), transparent)' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="section-label mb-3">What We Offer</motion.p>
            <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="section-title text-4xl md:text-5xl mb-4">
              Our <span>Services</span>
            </motion.h2>
            <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
              className="gold-divider" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="luxury-card rounded-xl p-7 group text-center"
              >
                <div className="w-16 h-16 rounded-2xl mx-auto mb-5 flex items-center justify-center transition-all duration-300"
                  style={{ background: 'rgba(212,167,60,0.08)', border: '1px solid rgba(212,167,60,0.2)' }}>
                  <s.icon className="text-gold text-2xl group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="font-heading text-base font-bold text-white mb-2 group-hover:text-gold transition-colors">{s.title}</h3>
                <p className="font-body text-sm text-white/40 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/services" className="btn-outline px-10 py-3.5 text-[11px] rounded-sm gap-2">
              All Services <HiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      <Testimonials />
    </main>
  )
}
