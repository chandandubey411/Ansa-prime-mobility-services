import { motion } from 'framer-motion'
import { FaRupeeSign, FaCheckCircle, FaPlane, FaMoon, FaUser, FaRoad } from 'react-icons/fa'
import { HiArrowRight } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import MiniHero from '../components/MiniHero/MiniHero'
import { cars } from '../data/cars'

const pricing = cars.map(c => ({
  name: c.name,
  rate: c.rateNum,
  tag: c.tag,
  image: c.image
}))

const extras = [
  {
    icon: FaPlane,
    title: 'Airport Charges',
    items: ['Pickup/drop surcharge: ₹200–₹500', 'Night airport charge (10PM–6AM): +₹300', 'Toll & parking at actuals'],
  },
  {
    icon: FaMoon,
    title: 'Night Charges',
    items: ['Night surcharge (10PM–6AM): +₹150/trip', 'Applied on all vehicle categories', 'No charge on pre-booked packages'],
  },
  {
    icon: FaUser,
    title: 'Driver Allowance',
    items: ['Outstation: ₹300/day per driver', 'Minimum 12-hour booking required', 'Return trips: allowance included'],
  },
  {
    icon: FaRoad,
    title: 'Outstation Terms',
    items: ['Minimum 250km billing per day', 'Fuel & tolls included per-km', 'AC usage included in all fares'],
  },
]

const tagStyle = {
  'Economy':     'text-zinc-400',
  'Premium':     'text-amber-400',
  'Sedan':       'text-blue-400',
  'MPV':         'text-emerald-400',
  'Premium MPV': 'text-purple-400',
  'Hybrid MPV':  'text-teal-400',
  'Premium SUV': 'text-orange-400',
  'Executive':   'text-sky-400',
  'Ultra Luxury':'text-yellow-400',
}

export default function Pricing() {
  return (
    <main>
      <MiniHero
        title="OUR PRICING"
        subtitle="Transparent per-kilometre rates — no hidden charges, no surprises"
        breadcrumb={['Pricing']}
      />

      {/* Rate Table */}
      <section className="py-28" style={{ background: '#0a0a0a' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="section-label mb-3">Rate Card</motion.p>
            <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="section-title text-4xl md:text-5xl mb-4">
              Simple, <span>Honest</span> Rates
            </motion.h2>
            <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
              className="gold-divider" />
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.35 }}
              className="font-body text-sm text-white/40 mt-4 max-w-md mx-auto">
              What you see is exactly what you pay. All prices are per kilometre, inclusive of AC and fuel.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
            {pricing.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.08, duration: 0.5 }}
                className="w-full flex"
              >
                <Link
                  to={`/book?car=${encodeURIComponent(p.name)}`}
                  className="luxury-card rounded-xl p-5 flex items-center gap-4 group hover:border-gold/50 cursor-pointer w-full transition-all duration-300 block"
                >
                  <div className="w-16 h-12 rounded overflow-hidden shrink-0 bg-zinc-900 relative">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-heading text-sm font-bold text-white group-hover:text-gold transition-colors truncate mb-0.5">
                      {p.name}
                    </p>
                    <p className={`font-body text-[10px] tracking-widest uppercase font-semibold ${tagStyle[p.tag] || 'text-gold'}`}>
                      {p.tag}
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="flex items-baseline gap-0.5">
                      <FaRupeeSign className="text-gold text-sm" />
                      <span className="font-heading text-2xl font-black gold-text">{p.rate}</span>
                    </div>
                    <p className="font-body text-[10px] text-white/30">per km</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Extra Charges */}
          <div className="text-center mb-10">
            <p className="section-label mb-3">Additional Information</p>
            <h3 className="section-title text-3xl mb-4">Charges &amp; <span>Terms</span></h3>
            <div className="gold-divider" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
            {extras.map((e, i) => (
              <motion.div
                key={e.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="luxury-card rounded-xl p-6 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="icon-box w-11 h-11">
                    <e.icon className="text-gold text-base" />
                  </div>
                  <h4 className="font-heading text-base font-bold text-white group-hover:text-gold transition-colors">{e.title}</h4>
                </div>
                <ul className="space-y-2.5">
                  {e.items.map(item => (
                    <li key={item} className="flex items-start gap-2.5">
                      <FaCheckCircle className="text-gold/60 text-xs mt-0.5 shrink-0" />
                      <span className="font-body text-sm text-white/50">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Disclaimer */}
          <motion.div
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
            className="rounded-xl p-6 text-center mb-12"
            style={{ background: 'rgba(212,167,60,0.05)', border: '1px solid rgba(212,167,60,0.2)' }}
          >
            <p className="font-body text-sm text-white/45">
              <span className="text-gold font-semibold">Note: </span>
              All rates are approximate and subject to change. Final fare confirmed at booking. GST applicable per government norms.
            </p>
          </motion.div>

          <div className="text-center">
            <Link to="/contact" className="btn-gold px-12 py-4 text-[11px] rounded-sm gap-2">
              Get Custom Quote <HiArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
