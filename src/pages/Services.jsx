import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaPlane, FaBriefcase, FaTaxi, FaRoad, FaRing, FaUserTie } from 'react-icons/fa'
import { HiArrowRight, HiCheckCircle } from 'react-icons/hi'
import MiniHero from '../components/MiniHero/MiniHero'

const services = [
  {
    icon: FaPlane,
    title: 'Airport Transfer',
    desc: 'Punctual, stress-free airport pickups and drops 24/7. Real-time flight tracking, meet & greet at all terminals of IGI and Hindon airports.',
    features: ['Flight tracking included', 'Meet & greet service', 'All terminals covered', '24/7 availability'],
    color: 'rgba(59,130,246,0.08)',
    border: 'rgba(59,130,246,0.2)',
  },
  {
    icon: FaBriefcase,
    title: 'Corporate Travel',
    desc: 'Premium executive travel for businesses. Monthly billing, dedicated account managers, GST invoices and a luxury fleet of sedans and SUVs.',
    features: ['Monthly billing', 'Dedicated account manager', 'GST invoices', 'Executive sedans & SUVs'],
    color: 'rgba(139,92,246,0.08)',
    border: 'rgba(139,92,246,0.2)',
  },
  {
    icon: FaTaxi,
    title: 'Local Taxi',
    desc: 'Comfortable, safe local cab service across all of Delhi NCR. Hourly packages available. Perfect for shopping, medical visits and daily commutes.',
    features: ['Hourly packages', 'All Delhi NCR areas', 'AC vehicles', 'Verified drivers'],
    color: 'rgba(16,185,129,0.08)',
    border: 'rgba(16,185,129,0.2)',
  },
  {
    icon: FaRoad,
    title: 'Outstation Trips',
    desc: 'Long-distance travel in premium comfort. Agra, Jaipur, Chandigarh, Dehradun and all India. One-way and round-trip options available.',
    features: ['One-way & round-trip', 'All India coverage', 'Premium SUVs & MPVs', 'Driver allowance included'],
    color: 'rgba(245,158,11,0.08)',
    border: 'rgba(245,158,11,0.2)',
  },
  {
    icon: FaRing,
    title: 'Wedding Transport',
    desc: 'Make your special day even more memorable with our decorated luxury fleet. Baraat transfers, bride & groom conveyance and full guest management.',
    features: ['Decorated vehicles', 'Baraat packages', 'Guest conveyance', 'Luxury sedans & SUVs'],
    color: 'rgba(236,72,153,0.08)',
    border: 'rgba(236,72,153,0.2)',
  },
  {
    icon: FaUserTie,
    title: 'Premium Chauffeur',
    desc: 'Personal chauffeur service with uniformed, impeccably trained drivers. Mercedes Benz, Camry Hybrid and Fortuner available for your exclusive use.',
    features: ['Uniformed chauffeur', 'Luxury vehicles', 'Hourly & daily booking', 'VIP treatment'],
    color: 'rgba(212,167,60,0.08)',
    border: 'rgba(212,167,60,0.3)',
  },
]

export default function Services() {
  return (
    <main>
      <MiniHero
        title="OUR SERVICES"
        subtitle="Premium mobility solutions for every journey — tailored to your needs"
        breadcrumb={['Services']}
      />

      <section className="py-28" style={{ background: '#0a0a0a' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="section-label mb-3">What We Offer</motion.p>
            <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="section-title text-4xl md:text-5xl mb-4">
              Luxury <span>Mobility</span> Solutions
            </motion.h2>
            <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
              className="gold-divider" />
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.35 }}
              className="font-body text-sm text-white/40 mt-4 max-w-xl mx-auto">
              From airport pickups to grand weddings — we have a premium service tailored for every journey.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.12, duration: 0.6 }}
                whileHover={{ y: -10, boxShadow: '0 30px 60px rgba(212,167,60,0.15)' }}
                className="rounded-xl overflow-hidden cursor-default group"
                style={{ background: '#171717', border: '1px solid rgba(212,167,60,0.12)' }}
              >
                {/* Header */}
                <div className="p-7 pb-5 relative overflow-hidden"
                  style={{ background: s.color, borderBottom: `1px solid ${s.border}` }}>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: 'radial-gradient(circle at 30% 50%, rgba(212,167,60,0.06), transparent 70%)' }} />
                  <div className="w-14 h-14 rounded-xl mb-5 flex items-center justify-center transition-all duration-300"
                    style={{ background: 'rgba(212,167,60,0.1)', border: '1px solid rgba(212,167,60,0.25)' }}>
                    <s.icon className="text-gold text-xl group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-white group-hover:text-gold transition-colors duration-300">
                    {s.title}
                  </h3>
                </div>

                {/* Body */}
                <div className="p-6">
                  <p className="font-body text-sm text-white/45 leading-relaxed mb-5">{s.desc}</p>
                  <ul className="space-y-2 mb-5">
                    {s.features.map(f => (
                      <li key={f} className="flex items-center gap-2.5 font-body text-xs text-white/40">
                        <HiCheckCircle className="text-gold/60 text-sm shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact"
                    className="flex items-center gap-2 font-body text-xs text-gold font-semibold tracking-wider hover:gap-3 transition-all duration-300 group/link">
                    Book This Service
                    <HiArrowRight className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0f0c00, #1a1200, #0f0c00)' }}>
        <div className="absolute inset-0 opacity-[0.06]"
          style={{ backgroundImage: 'repeating-linear-gradient(45deg, #D4A73C 0px, #D4A73C 1px, transparent 0, transparent 60px)' }} />
        <div className="max-w-3xl mx-auto px-4 text-center relative">
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="font-heading text-3xl md:text-4xl font-black text-white mb-3">
            Need a <span className="gold-text">Custom Solution?</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="font-body text-sm text-white/45 mb-8">
            Contact us for corporate packages, bulk bookings or any special travel requirements.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-gold px-10 py-4 text-[11px] rounded-sm">Contact Us</Link>
            <a href="tel:+919643199064" className="btn-outline px-10 py-4 text-[11px] rounded-sm">+91 96431 99064</a>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
