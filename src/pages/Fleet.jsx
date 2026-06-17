import { motion } from 'framer-motion'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaUserFriends, FaSuitcase, FaSnowflake, FaGasPump } from 'react-icons/fa'
import { HiArrowRight } from 'react-icons/hi'
import MiniHero from '../components/MiniHero/MiniHero'

import { cars } from '../data/cars'

const fleet = cars.map(c => ({
  ...c,
  cat: c.category,
  pax: c.passengers,
  bags: c.luggage
}))

const tagStyle = {
  'Economy':     'bg-zinc-800/80 text-zinc-300 border-zinc-600/40',
  'Premium':     'bg-amber-900/40 text-amber-300 border-amber-700/40',
  'Sedan':       'bg-blue-900/40 text-blue-300 border-blue-700/40',
  'MPV':         'bg-emerald-900/40 text-emerald-300 border-emerald-700/40',
  'Premium MPV': 'bg-purple-900/40 text-purple-300 border-purple-700/40',
  'Hybrid MPV':  'bg-teal-900/40 text-teal-300 border-teal-700/40',
  'Premium SUV': 'bg-orange-900/40 text-orange-300 border-orange-700/40',
  'Executive':   'bg-sky-900/40 text-sky-300 border-sky-700/40',
  'Ultra Luxury':'bg-yellow-900/50 text-yellow-300 border-yellow-600/50',
}

const filters = ['All', 'Economy', 'Sedan', 'MPV', 'SUV', 'Luxury']

export default function Fleet() {
  const [active, setActive] = useState('All')

  const filtered = fleet.filter(car => {
    if (active === 'All') return true
    if (active === 'Economy') return car.tag === 'Economy' || car.tag === 'Premium'
    if (active === 'Sedan')   return car.cat.includes('Sedan')
    if (active === 'MPV')     return car.cat.includes('MPV') || car.cat.includes('Utility')
    if (active === 'SUV')     return car.tag.includes('SUV')
    if (active === 'Luxury')  return car.tag === 'Ultra Luxury' || car.tag === 'Executive'
    return true
  })

  return (
    <main>
      <MiniHero
        title="OUR FLEET"
        subtitle="12 premium vehicles from compact economy to ultra-luxury — choose your perfect ride"
        breadcrumb={['Fleet']}
      />

      <section className="py-28" style={{ background: '#0a0a0a' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Heading */}
          <div className="text-center mb-10">
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="section-label mb-3">Our Vehicles</motion.p>
            <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="section-title text-4xl md:text-5xl mb-4">
              Premium <span>Fleet</span> Lineup
            </motion.h2>
            <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
              className="gold-divider" />
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`font-body text-xs font-semibold tracking-wider uppercase px-5 py-2 rounded-sm transition-all duration-300 ${
                  active === f
                    ? 'bg-gold text-dark-DEFAULT shadow-gold'
                    : 'border border-gold/25 text-white/50 hover:border-gold/50 hover:text-gold'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((car, i) => (
              <motion.div
                key={car.name}
                layout
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 4) * 0.08, duration: 0.5 }}
                className="luxury-card rounded-xl overflow-hidden group"
              >
                {/* Visual */}
                <div className="h-44 flex items-center justify-center relative overflow-hidden bg-zinc-900">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: 'radial-gradient(circle at center, rgba(212,167,60,0.15), transparent 70%)' }} />
                  <span className={`absolute top-3 left-3 text-[10px] font-body font-semibold px-2.5 py-0.5 rounded-sm tracking-wider uppercase border z-10 ${tagStyle[car.tag] || 'bg-gold/15 text-gold border-gold/30'}`}>
                    {car.tag}
                  </span>
                  <div className="absolute bottom-3 right-3 glass-dark rounded-sm px-2.5 py-1 z-10">
                    <span className="font-heading text-sm font-bold gold-text">{car.rate}</span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5">
                  <h3 className="font-heading text-base font-bold text-white mb-1 group-hover:text-gold transition-colors">{car.name}</h3>
                  <p className="font-body text-[11px] text-white/30 mb-4 uppercase tracking-wider">{car.cat}</p>
                  <div className="flex flex-wrap gap-x-3 gap-y-1 mb-5">
                    {[
                      { icon: FaUserFriends, label: `${car.pax} Pax` },
                      { icon: FaSuitcase,    label: `${car.bags} Bags` },
                      { icon: FaSnowflake,   label: 'AC' },
                      { icon: FaGasPump,     label: car.fuel },
                    ].map(({ icon: Icon, label }) => (
                      <span key={label} className="flex items-center gap-1 text-[11px] text-white/40 font-body">
                        <Icon className="text-gold/55 text-xs" /> {label}
                      </span>
                    ))}
                  </div>
                  <Link to={`/book?car=${encodeURIComponent(car.name)}`} className="btn-gold w-full py-2.5 text-[11px] rounded-sm">
                    Book Now
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
