import { useState, useEffect } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaUserFriends, FaSuitcase, FaSnowflake, FaGasPump, FaRupeeSign, FaCalendarAlt, FaClock, FaMapMarkerAlt, FaUser, FaPhoneAlt } from 'react-icons/fa'
import { HiArrowRight, HiArrowLeft } from 'react-icons/hi'
import MiniHero from '../components/MiniHero/MiniHero'
import { cars } from '../data/cars'

export default function BookCar() {
  const [searchParams] = useSearchParams()
  const carName = searchParams.get('car')

  const selectedCar = cars.find(c => {
    const query = carName?.toLowerCase() || ''
    const nameLower = c.name.toLowerCase()
    return query.includes(nameLower) || nameLower.includes(query)
  }) || cars[0]

  const [form, setForm] = useState({
    name: '',
    mobile: '',
    car: selectedCar.name,
    pickup: '',
    drop: '',
    date: new Date(Date.now() + 86400000).toISOString().split('T')[0], // Defaults to tomorrow
    time: '10:00'
  })
  
  const [sent, setSent] = useState(false)

  // Update form if search parameters change
  useEffect(() => {
    setForm(prev => ({ ...prev, car: selectedCar.name }))
  }, [selectedCar])

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const msg = `Hello! I want to book a ride.%0A%0A` +
      `👤 Name: ${form.name || 'Not provided'}%0A` +
      `📞 Mobile: ${form.mobile || 'Not provided'}%0A` +
      `🚗 Car: ${form.car || 'Not selected'}%0A` +
      `📍 Pickup Location: ${form.pickup || 'Not provided'}%0A` +
      `🏁 Drop Location: ${form.drop || 'Not provided'}%0A` +
      `📅 Journey Date: ${form.date || 'Not selected'}%0A` +
      `🕐 Pickup Time: ${form.time || 'Not selected'}%0A%0AThanks`
    window.open(`https://wa.me/919643199064?text=${msg}`, '_blank')
    setSent(true)
    setTimeout(() => {
      setSent(false)
      // Reset input fields except standard defaults
      setForm(prev => ({
        ...prev,
        name: '',
        mobile: '',
        pickup: '',
        drop: ''
      }))
    }, 4000)
  }

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

  const inputClass = "luxury-input w-full rounded-sm px-4 py-3.5 text-sm font-body focus:border-gold transition-colors duration-300"

  return (
    <main className="min-h-screen pb-24" style={{ background: '#0a0a0a' }}>
      <MiniHero
        title="BOOK YOUR RIDE"
        subtitle={`Pre-filled booking request for ${selectedCar.name}`}
        breadcrumb={['Fleet', 'Book Car']}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-16">
        <Link to="/fleet" className="inline-flex items-center gap-2 text-xs font-body font-semibold tracking-wider text-gold hover:text-white transition-colors uppercase mb-8">
          <HiArrowLeft className="text-sm" /> Back to Fleet
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Car Details */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="luxury-card rounded-2xl overflow-hidden"
            >
              {/* Car Image Visual Container */}
              <div className="h-96 relative bg-zinc-900 overflow-hidden flex items-center justify-center">
                <img
                  src={selectedCar.image}
                  alt={selectedCar.name}
                  className="absolute inset-0 w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
                <span className={`absolute top-4 left-4 text-xs font-body font-semibold px-3 py-1 rounded-sm tracking-wider uppercase border ${tagStyle[selectedCar.tag] || 'bg-gold/15 text-gold border-gold/30'}`}>
                  {selectedCar.tag}
                </span>

                {/* Floating Rate Badge */}
                <div className="absolute bottom-4 right-4 glass-dark rounded-sm px-4 py-2 flex flex-col items-end">
                  <span className="text-[10px] uppercase font-body text-white/40 tracking-wider">Estimated Rate</span>
                  <div className="flex items-baseline gap-0.5">
                    <FaRupeeSign className="text-gold text-xs" />
                    <span className="font-heading text-2xl font-black gold-text">{selectedCar.rateNum}</span>
                    <span className="text-[10px] text-white/50 ml-1 font-body">/ km</span>
                  </div>
                </div>
              </div>

              {/* Information */}
              <div className="p-8">
                <div className="flex flex-wrap items-baseline gap-x-3 mb-2">
                  <h2 className="font-heading text-3xl font-bold text-white">{selectedCar.name}</h2>
                  <span className="font-body text-xs text-white/30 uppercase tracking-widest">{selectedCar.category}</span>
                </div>
                
                <div className="gold-divider mb-6 ml-0" />

                <p className="font-body text-white/60 leading-relaxed text-sm mb-8">
                  {selectedCar.description}
                </p>

                {/* Specs */}
                <h3 className="font-heading text-lg font-bold text-white mb-4">Specifications</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-xl border border-white/5 bg-white/[0.02]">
                  <div className="flex flex-col items-center text-center p-2">
                    <FaUserFriends className="text-gold text-lg mb-2" />
                    <span className="font-heading text-sm font-bold text-white">{selectedCar.passengers} pax</span>
                    <span className="font-body text-[10px] text-white/30 uppercase">Capacity</span>
                  </div>
                  <div className="flex flex-col items-center text-center p-2">
                    <FaSuitcase className="text-gold text-lg mb-2" />
                    <span className="font-heading text-sm font-bold text-white">{selectedCar.luggage} bags</span>
                    <span className="font-body text-[10px] text-white/30 uppercase">Luggage</span>
                  </div>
                  <div className="flex flex-col items-center text-center p-2">
                    <FaSnowflake className="text-gold text-lg mb-2" />
                    <span className="font-heading text-sm font-bold text-white">Equipped</span>
                    <span className="font-body text-[10px] text-white/30 uppercase">Air Conditioning</span>
                  </div>
                  <div className="flex flex-col items-center text-center p-2">
                    <FaGasPump className="text-gold text-lg mb-2" />
                    <span className="font-heading text-sm font-bold text-white">{selectedCar.fuel}</span>
                    <span className="font-body text-[10px] text-white/30 uppercase">Fuel Type</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Pre-filled Booking Form */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative"
            >
              <div className="absolute -inset-2 rounded-xl opacity-20 blur-2xl pointer-events-none"
                style={{ background: 'radial-gradient(circle, #D4A73C, transparent 70%)' }}
              />

              <div className="glass rounded-xl p-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-gold/60 rounded-tl-xl pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-gold/60 rounded-br-xl pointer-events-none" />

                <h3 className="font-heading text-2xl font-bold text-white mb-1">Book This <span className="gold-text">Vehicle</span></h3>
                <p className="font-body text-xs text-white/40 mb-6">Confirm details below to request your booking instantly.</p>

                {sent ? (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center py-16"
                  >
                    <div className="relative w-20 h-20 mx-auto mb-6">
                      <div className="absolute inset-0 rounded-full border-2 border-gold animate-ping opacity-40" />
                      <div className="w-20 h-20 rounded-full border-2 border-gold flex items-center justify-center">
                        <span className="text-gold text-4xl">✓</span>
                      </div>
                    </div>
                    <p className="font-heading text-2xl text-white mb-2 font-bold">Booking Request Sent!</p>
                    <p className="font-body text-sm text-white/45 max-w-xs mx-auto leading-relaxed">
                      Our customer relations agent will contact you on your mobile number within 10 minutes to verify.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Selected Car Display */}
                    <div>
                      <label className="font-body text-[11px] text-white/40 mb-1.5 block tracking-wider uppercase font-semibold">Selected Vehicle</label>
                      <select
                        name="car"
                        value={form.car}
                        onChange={handleChange}
                        className={inputClass}
                        required
                      >
                        {cars.map(c => (
                          <option key={c.name} value={c.name} className="bg-zinc-950 text-white">
                            {c.name} ({c.category} - {c.rate})
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Name */}
                    <div>
                      <label className="font-body text-[11px] text-white/40 mb-1.5 block tracking-wider uppercase font-semibold">
                        <span className="flex items-center gap-1.5"><FaUser className="text-gold/50 text-[10px]" /> Your Name</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Enter full name"
                        className={inputClass}
                        required
                      />
                    </div>

                    {/* Mobile */}
                    <div>
                      <label className="font-body text-[11px] text-white/40 mb-1.5 block tracking-wider uppercase font-semibold">
                        <span className="flex items-center gap-1.5"><FaPhoneAlt className="text-gold/50 text-[10px]" /> Mobile Number</span>
                      </label>
                      <input
                        type="tel"
                        name="mobile"
                        value={form.mobile}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                        className={inputClass}
                        required
                      />
                    </div>

                    {/* Pickup Location */}
                    <div>
                      <label className="font-body text-[11px] text-white/40 mb-1.5 block tracking-wider uppercase font-semibold">
                        <span className="flex items-center gap-1.5"><FaMapMarkerAlt className="text-gold/50 text-[10px]" /> Pickup Address / Point</span>
                      </label>
                      <input
                        type="text"
                        name="pickup"
                        value={form.pickup}
                        onChange={handleChange}
                        placeholder="Enter pickup point (e.g. Airport T3, Delhi)"
                        className={inputClass}
                        required
                      />
                    </div>

                    {/* Destination / Drop Location */}
                    <div>
                      <label className="font-body text-[11px] text-gold mb-1.5 block tracking-wider uppercase font-bold">
                        <span className="flex items-center gap-1.5"><FaMapMarkerAlt className="text-gold text-[10px]" /> Destination (Drop Location) *</span>
                      </label>
                      <input
                        type="text"
                        name="drop"
                        value={form.drop}
                        onChange={handleChange}
                        placeholder="Enter destination (e.g. Noida, Jaipur)"
                        className="luxury-input w-full rounded-sm px-4 py-3.5 text-sm font-body border-gold/70 focus:border-gold bg-gold/5 text-white"
                        required
                      />
                    </div>

                    {/* Date and Time */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="font-body text-[11px] text-white/40 mb-1.5 block tracking-wider uppercase font-semibold">
                          <span className="flex items-center gap-1.5"><FaCalendarAlt className="text-gold/50 text-[10px]" /> Date</span>
                        </label>
                        <input
                          type="date"
                          name="date"
                          value={form.date}
                          onChange={handleChange}
                          className={inputClass}
                          required
                        />
                      </div>
                      <div>
                        <label className="font-body text-[11px] text-gold mb-1.5 block tracking-wider uppercase font-bold">
                          <span className="flex items-center gap-1.5"><FaClock className="text-gold text-[10px]" /> Pickup Time *</span>
                        </label>
                        <input
                          type="time"
                          name="time"
                          value={form.time}
                          onChange={handleChange}
                          className="luxury-input w-full rounded-sm px-4 py-3.5 text-sm font-body border-gold/70 focus:border-gold bg-gold/5 text-white"
                          required
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="btn-gold w-full py-4 text-[11px] rounded-sm mt-4 gap-2 flex items-center justify-center"
                    >
                      Book Your Ride Now <HiArrowRight className="text-sm" />
                    </button>

                    <p className="font-body text-[10px] text-white/20 text-center leading-relaxed">
                      All rates are estimated. Outstation travel billing minimum is 250km per day. State taxes & tolls are charged extra at actuals.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  )
}
