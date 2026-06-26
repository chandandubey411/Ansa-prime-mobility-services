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
    'Economy':     'bg-gray-100 text-gray-700 border-gray-300/60',
    'Premium':     'bg-amber-50 text-amber-700 border-amber-300/60',
    'Sedan':       'bg-blue-50 text-blue-700 border-blue-300/60',
    'MPV':         'bg-emerald-50 text-emerald-700 border-emerald-300/60',
    'Premium MPV': 'bg-purple-50 text-purple-700 border-purple-300/60',
    'Hybrid MPV':  'bg-teal-50 text-teal-700 border-teal-300/60',
    'Premium SUV': 'bg-orange-50 text-orange-700 border-orange-300/60',
    'Executive':   'bg-sky-50 text-sky-700 border-sky-300/60',
    'Ultra Luxury':'bg-yellow-50 text-yellow-700 border-yellow-400/60',
  }

  const inputClass = "luxury-input w-full px-4 py-3.5 text-sm"

  return (
    <main className="min-h-screen pb-24" style={{ background: '#ffffff' }}>
      <MiniHero
        title="BOOK YOUR RIDE"
        subtitle={`Pre-filled booking request for ${selectedCar.name}`}
        breadcrumb={['Fleet', 'Book Car']}
        bgImage="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=1200"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-16">
        <Link to="/fleet" className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-gold hover:text-gray-900 transition-colors uppercase mb-8" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>
          <HiArrowLeft className="text-sm" /> Back to Fleet
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Car Details */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="luxury-card overflow-hidden"
            >
              {/* Car Image Visual Container */}
              <div className="h-96 relative bg-gray-100 overflow-hidden flex items-center justify-center">
                <img
                  src={selectedCar.image}
                  alt={selectedCar.name}
                  className="absolute inset-0 w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
                <span className={`absolute top-4 left-4 text-xs font-semibold px-3 py-1 rounded-full tracking-wider uppercase border ${tagStyle[selectedCar.tag] || 'bg-gold/15 text-gold border-gold/30'}`} style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>
                  {selectedCar.tag}
                </span>

                {/* Floating Rate Badge */}
                <div className="absolute bottom-4 right-4 glass-dark rounded-2xl px-4 py-2 flex flex-col items-end">
                  <span className="text-[10px] uppercase text-gray-400 tracking-wider" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>Estimated Rate</span>
                  <div className="flex items-baseline gap-0.5">
                    <FaRupeeSign className="text-gold text-xs" />
                    <span className="font-heading text-2xl font-black gold-text">{selectedCar.rateNum}</span>
                    <span className="text-[10px] text-gray-500 ml-1" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>/ km</span>
                  </div>
                </div>
              </div>

              {/* Information */}
              <div className="p-8">
                <div className="flex flex-wrap items-baseline gap-x-3 mb-2">
                  <h2 className="font-heading text-3xl font-bold text-gray-900">{selectedCar.name}</h2>
                  <span className="text-xs text-gray-400 uppercase tracking-widest" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>{selectedCar.category}</span>
                </div>
                
                <div className="gold-divider mb-6 ml-0" />

                <p className="text-gray-600 leading-relaxed text-sm mb-8" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>
                  {selectedCar.description}
                </p>

                {/* Specs */}
                <h3 className="font-heading text-lg font-bold text-gray-900 mb-4">Specifications</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-xl border border-black/5 bg-white">
                  <div className="flex flex-col items-center text-center p-2">
                    <FaUserFriends className="text-gold text-lg mb-2" />
                    <span className="font-heading text-sm font-bold text-gray-900">{selectedCar.passengers} pax</span>
                    <span className="text-[10px] text-gray-500 uppercase" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>Capacity</span>
                  </div>
                  <div className="flex flex-col items-center text-center p-2">
                    <FaSuitcase className="text-gold text-lg mb-2" />
                    <span className="font-heading text-sm font-bold text-gray-900">{selectedCar.luggage} bags</span>
                    <span className="text-[10px] text-gray-500 uppercase" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>Luggage</span>
                  </div>
                  <div className="flex flex-col items-center text-center p-2">
                    <FaSnowflake className="text-gold text-lg mb-2" />
                    <span className="font-heading text-sm font-bold text-gray-900">Equipped</span>
                    <span className="text-[10px] text-gray-500 uppercase" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>Air Conditioning</span>
                  </div>
                  <div className="flex flex-col items-center text-center p-2">
                    <FaGasPump className="text-gold text-lg mb-2" />
                    <span className="font-heading text-sm font-bold text-gray-900">{selectedCar.fuel}</span>
                    <span className="text-[10px] text-gray-500 uppercase" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>Fuel Type</span>
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
              <div className="absolute -inset-4 rounded-3xl opacity-25 blur-3xl"
                style={{ background: 'radial-gradient(circle, rgba(212,167,60,0.6), transparent 70%)' }}
              />

              <div className="relative overflow-hidden"
                style={{
                  background: 'rgba(255,255,255,0.94)',
                  backdropFilter: 'blur(24px)',
                  WebkitBackdropFilter: 'blur(24px)',
                  borderRadius: '28px',
                  border: '1px solid rgba(255,255,255,0.6)',
                  boxShadow: '0 35px 100px -40px rgba(15,23,42,0.15)',
                  padding: '28px',
                }}
              >
                {/* Top accent gradient */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-24"
                  style={{ background: 'linear-gradient(90deg, rgba(212,167,60,0.10), rgba(255,255,255,0))' }}
                />

                <h3 className="font-heading text-2xl font-bold text-gray-900 mb-1">Book This <span className="gold-text">Vehicle</span></h3>
                <p className="text-xs text-gray-500 mb-6" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>Confirm details below to request your booking instantly.</p>

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
                    <p className="font-heading text-2xl text-gray-900 mb-2 font-bold">Booking Request Sent!</p>
                    <p className="text-sm text-gray-500 max-w-xs mx-auto leading-relaxed" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>
                      Our customer relations agent will contact you on your mobile number within 10 minutes to verify.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Selected Car Display */}
                    <div>
                      <label className="text-[11px] text-gray-500 mb-1.5 block tracking-wider uppercase font-semibold" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>Selected Vehicle</label>
                      <select
                        name="car"
                        value={form.car}
                        onChange={handleChange}
                        className={inputClass}
                        required
                      >
                        {cars.map(c => (
                          <option key={c.name} value={c.name} className="bg-white text-gray-900">
                            {c.name} ({c.category} - {c.rate})
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Name */}
                    <div>
                      <label className="text-[11px] text-gray-500 mb-1.5 block tracking-wider uppercase font-semibold" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>
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
                      <label className="text-[11px] text-gray-500 mb-1.5 block tracking-wider uppercase font-semibold" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>
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
                      <label className="text-[11px] text-gray-500 mb-1.5 block tracking-wider uppercase font-semibold" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>
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
                      <label className="text-[11px] text-gold mb-1.5 block tracking-wider uppercase font-bold" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>
                        <span className="flex items-center gap-1.5"><FaMapMarkerAlt className="text-gold text-[10px]" /> Destination (Drop Location) *</span>
                      </label>
                      <input
                        type="text"
                        name="drop"
                        value={form.drop}
                        onChange={handleChange}
                        placeholder="Enter destination (e.g. Noida, Jaipur)"
                        className={inputClass}
                        required
                      />
                    </div>

                    {/* Date and Time */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-[11px] text-gray-500 mb-1.5 block tracking-wider uppercase font-semibold" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>
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
                        <label className="text-[11px] text-gold mb-1.5 block tracking-wider uppercase font-bold" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>
                          <span className="flex items-center gap-1.5"><FaClock className="text-gold text-[10px]" /> Pickup Time *</span>
                        </label>
                        <input
                          type="time"
                          name="time"
                          value={form.time}
                          onChange={handleChange}
                          className={inputClass}
                          required
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="btn-gold w-full py-4 rounded-full mt-4 gap-2 flex items-center justify-center"
                      style={{ fontSize: '0.8rem', letterSpacing: '0.5px' }}
                    >
                      Book Your Ride Now <HiArrowRight className="text-sm" />
                    </button>

                    <p className="text-[10px] text-gray-400 text-center leading-relaxed" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>
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
