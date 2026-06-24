import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaPlane, FaBriefcase, FaTaxi, FaRoad, FaRing, FaUserTie, FaCheckCircle, FaPhoneAlt, FaWhatsapp, FaArrowRight, FaMapMarkedAlt, FaUniversity } from 'react-icons/fa'
import { HiArrowRight } from 'react-icons/hi'
import MiniHero from '../components/MiniHero/MiniHero'

const services = [
  {
    icon: FaPlane,
    title: 'Airport Transfer',
    desc: 'Punctual, stress-free airport pickups and drops 24/7. Real-time flight tracking, meet & greet at all terminals of IGI and Hindon airports.',
    features: ['Flight tracking included', 'Meet & greet service', 'All terminals covered', '24/7 availability', 'Fixed price no surge', 'Online booking available'],
    color: 'rgba(59,130,246,0.08)',
    border: 'rgba(59,130,246,0.25)',
    tag: 'Available 24/7',
  },
  {
    icon: FaBriefcase,
    title: 'Corporate Travel',
    desc: 'Premium executive travel for businesses. Monthly billing, dedicated account managers, GST invoices and a luxury fleet of sedans and SUVs.',
    features: ['Monthly billing available', 'Dedicated account manager', 'GST invoices on request', 'Executive sedans & SUVs', 'Online reporting dashboard', 'Priority booking always'],
    color: 'rgba(139,92,246,0.08)',
    border: 'rgba(139,92,246,0.25)',
    tag: 'Corporate',
  },
  {
    icon: FaTaxi,
    title: 'Local Taxi Service',
    desc: 'Comfortable, safe local cab service across all of Delhi NCR. Hourly packages available. Perfect for shopping, medical visits and daily commutes.',
    features: ['Hourly packages available', 'All Delhi NCR areas', 'Fully AC vehicles', 'Police verified drivers', 'Real-time GPS tracking', 'Transparent pricing'],
    color: 'rgba(16,185,129,0.08)',
    border: 'rgba(16,185,129,0.25)',
    tag: 'Delhi NCR',
  },
  {
    icon: FaRoad,
    title: 'Outstation Trips',
    desc: 'Long-distance travel in premium comfort. Agra, Jaipur, Chandigarh, Dehradun and all India. One-way and round-trip options available.',
    features: ['One-way & round-trip', 'All India coverage', 'Premium SUVs & MPVs', 'Driver allowance included', 'Toll & permits covered', 'Flexible pickup times'],
    color: 'rgba(245,158,11,0.08)',
    border: 'rgba(245,158,11,0.25)',
    tag: 'All India',
  },
  {
    icon: FaRing,
    title: 'Wedding Transport',
    desc: 'Make your special day even more memorable with our decorated luxury fleet. Baraat transfers, bride & groom conveyance and full guest management.',
    features: ['Decorated vehicles', 'Baraat packages', 'Guest conveyance', 'Luxury sedans & SUVs', 'Tempo Travellers available', 'Coordinated fleet management'],
    color: 'rgba(236,72,153,0.08)',
    border: 'rgba(236,72,153,0.25)',
    tag: 'Wedding',
  },
  {
    icon: FaUserTie,
    title: 'Premium Chauffeur',
    desc: 'Personal chauffeur service with uniformed, impeccably trained drivers. Mercedes Benz, Camry Hybrid and Fortuner available for your exclusive use.',
    features: ['Uniformed chauffeur', 'Luxury vehicles available', 'Hourly & daily booking', 'VIP treatment', 'Privacy & discretion', 'Corporate & VIP events'],
    color: 'rgba(212,167,60,0.08)',
    border: 'rgba(212,167,60,0.3)',
    tag: 'VIP Service',
  },
  {
    icon: FaMapMarkedAlt,
    title: 'Same Day Tours',
    desc: 'Explore famous tourist destinations from Delhi on the same day. Agra, Mathura, Jaipur and more — all with a professional driver-guide.',
    features: ['Agra same day tour', 'Mathura-Vrindavan day trip', 'Jaipur same day tour', 'Fatehpur Sikri visit', 'Haridwar day trip', 'Fixed all-inclusive pricing'],
    color: 'rgba(34,197,94,0.08)',
    border: 'rgba(34,197,94,0.25)',
    tag: 'Day Tours',
  },
  {
    icon: FaUniversity,
    title: 'Pilgrimage Tours',
    desc: 'Peaceful and comfortable religious journeys to Mathura, Haridwar, Rishikesh, Vaishno Devi, Khatu Shyam and more with experienced local drivers.',
    features: ['Mathura & Vrindavan', 'Haridwar & Rishikesh', 'Khatu Shyam Ji', 'Vaishno Devi trips', 'Char Dham Yatra', 'Night travel available'],
    color: 'rgba(249,115,22,0.08)',
    border: 'rgba(249,115,22,0.25)',
    tag: 'Pilgrimage',
  },
]

const localServices = [
  { area: 'Car Rental in Delhi',       link: '#' },
  { area: 'Cab Service in Noida',      link: '#' },
  { area: 'Taxi in Gurgaon',           link: '#' },
  { area: 'Cab in Faridabad',          link: '#' },
  { area: 'Taxi in Ghaziabad',         link: '#' },
  { area: 'Cab Service in Dwarka',     link: '#' },
  { area: 'Taxi in South Delhi',       link: '#' },
  { area: 'Cab in Rohini',             link: '#' },
  { area: 'Airport Taxi Delhi',        link: '#' },
  { area: 'Taxi in Saket',             link: '#' },
  { area: 'Cab in Vasant Kunj',        link: '#' },
  { area: 'One Way Cab Delhi',         link: '#' },
]

export default function Services() {
  return (
    <main>
      <MiniHero
        title="OUR SERVICES"
        subtitle="Premium mobility solutions for every journey — tailored to your needs across Delhi NCR and all India"
        breadcrumb={['Services']}
        bgImage="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1200"
      />

      {/* ═══════════════ SERVICES GRID ═══════════════ */}
      <section className="py-28" style={{ background: '#f8f5f0' }}>
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
              className="font-body text-sm text-gray-500 mt-4 max-w-xl mx-auto">
              From airport pickups to grand weddings — we have a premium service tailored for every journey.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 4) * 0.1, duration: 0.6 }}
                whileHover={{ y: -10, boxShadow: '0 30px 60px rgba(212,167,60,0.15)' }}
                className="rounded-xl overflow-hidden cursor-default group"
                style={{ background: '#ffffff', border: `1px solid ${s.border}`, boxShadow: '0 2px 15px rgba(0,0,0,0.05)' }}
              >
                {/* Header */}
                <div className="p-7 pb-5 relative overflow-hidden"
                  style={{ background: s.color, borderBottom: `1px solid ${s.border}` }}>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: 'radial-gradient(circle at 30% 50%, rgba(212,167,60,0.06), transparent 70%)' }} />
                  <span className="gold-badge mb-4 inline-block">{s.tag}</span>
                  <div className="w-14 h-14 rounded-xl mb-4 flex items-center justify-center"
                    style={{ background: 'rgba(212,167,60,0.1)', border: '1px solid rgba(212,167,60,0.25)' }}>
                    <s.icon className="text-gold text-xl group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-gray-900 group-hover:text-gold transition-colors">
                    {s.title}
                  </h3>
                </div>

                {/* Body */}
                <div className="p-6">
                  <p className="font-body text-sm text-gray-500 leading-relaxed mb-5">{s.desc}</p>
                  <ul className="space-y-2 mb-5">
                    {s.features.map(f => (
                      <li key={f} className="flex items-center gap-2.5 font-body text-xs text-gray-500">
                        <FaCheckCircle className="text-gold/60 text-sm shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-2">
                    <Link to="/contact"
                      className="flex-1 btn-gold py-2 text-[10px] rounded-sm justify-center gap-1.5">
                      Book Now <FaArrowRight />
                    </Link>
                    <a href="tel:+919643199064"
                      className="flex-1 btn-outline py-2 text-[10px] rounded-sm gap-1.5 justify-center">
                      <FaPhoneAlt className="text-[9px]" /> Call
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ LOCAL SERVICES ═══════════════ */}
      <section className="py-16 relative" style={{ background: '#f2ede6' }}>
        <div className="h-px w-full absolute top-0" style={{ background: 'linear-gradient(90deg,transparent,rgba(212,167,60,0.25),transparent)' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="section-label text-center mb-8">Service Areas</motion.h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {localServices.map(s => (
              <a key={s.area} href={s.link}
                className="font-body text-xs text-gray-500 hover:text-gold border border-black/10 hover:border-gold/40 px-5 py-2.5 rounded-full transition-all duration-300 hover:bg-gold/5">
                {s.area}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ CTA ═══════════════ */}
      <section className="py-20 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #D4A73C, #c49535, #B8891F)' }}>
        <div className="absolute inset-0 opacity-[0.08]"
          style={{ backgroundImage: 'repeating-linear-gradient(45deg, #fff 0px, #fff 1px, transparent 0, transparent 60px)' }} />
        <div className="max-w-3xl mx-auto px-4 text-center relative">
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="font-heading text-3xl md:text-4xl font-black text-white mb-3">
            Need a <span style={{ color: 'rgba(255,255,255,0.75)' }}>Custom Solution?</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="font-body text-sm text-white/80 mb-8">
            Contact us for corporate packages, bulk bookings or any special travel requirements.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/919643199064?text=Hello%20I%20want%20to%20enquire%20about%20your%20services.%20Thanks"
              target="_blank" rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 text-[11px] font-body font-bold tracking-[2px] uppercase bg-white text-gray-900 rounded-sm hover:-translate-y-1 transition-all duration-300 hover:shadow-lg">
              <FaWhatsapp className="text-base text-green-600" /> WhatsApp Now
            </a>
            <a href="tel:+919643199064"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 text-[11px] font-body font-bold tracking-[2px] uppercase border-2 border-white text-white rounded-sm hover:-translate-y-1 hover:bg-white hover:text-gray-900 transition-all duration-300">
              <FaPhoneAlt /> +91 96431 99064
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
