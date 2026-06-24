import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaCarAlt, FaWhatsapp } from 'react-icons/fa'
import { HiArrowRight } from 'react-icons/hi'

const VEHICLES = [
  'Maruti Dzire',
  'Honda City',
  'Hyundai Aura',
  'Premium Dzire',
  'Maruti Ertiga',
  'Kia Carens',
  'Mahindra Marazzo',
  'Toyota Hycross',
  'Innova Crysta',
  'Toyota Fortuner',
  'Toyota Camry Hybrid',
  'Mercedes Benz',
]

export default function BookingForm() {
  const [form, setForm] = useState({
    name: '',
    mobile: '',
    car: '',
    pickup: '',
    drop: '',
    date: '',
    time: '',
  })
  const [sent, setSent] = useState(false)

  const handle = e => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = e => {
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
    setTimeout(() => setSent(false), 4000)
  }

  const inputCls = "luxury-input w-full rounded-sm px-4 py-3 text-sm font-body"

  return (
    <div className="relative">
      {/* Glow behind card */}
      <div className="absolute -inset-3 rounded-xl opacity-20 blur-2xl"
        style={{ background: 'radial-gradient(circle, #D4A73C, transparent 70%)' }}
      />

      <div className="glass rounded-xl p-6 sm:p-7 relative overflow-hidden">
        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-gold/60 rounded-tl-xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-gold/60 rounded-br-xl pointer-events-none" />

        {/* Header */}
        <div className="flex items-center gap-2 mb-1">
          <FaCarAlt className="text-gold text-sm" />
          <span className="section-label text-[10px]">Quick Booking</span>
        </div>
        <h3 className="font-heading text-2xl font-bold text-gray-900 mb-5">
          Book Your <span className="gold-text">Ride</span>
        </h3>

        {sent ? (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center py-12"
          >
            <div className="relative w-20 h-20 mx-auto mb-5">
              <div className="absolute inset-0 rounded-full border-2 border-gold animate-ping opacity-40" />
              <div className="w-20 h-20 rounded-full border-2 border-gold flex items-center justify-center">
                <span className="text-gold text-4xl">✓</span>
              </div>
            </div>
            <p className="font-heading text-xl text-gray-900 mb-1">Redirecting to WhatsApp!</p>
            <p className="font-body text-sm text-gray-500">We'll confirm your booking shortly.</p>
          </motion.div>
        ) : (
          <form onSubmit={submit} className="space-y-3">
            {/* Name */}
            <div>
              <label className="font-body text-[11px] text-gray-700 mb-1 block tracking-wider">Name</label>
              <input
                name="name"
                type="text"
                value={form.name}
                onChange={handle}
                required
                placeholder="Enter Full Name"
                className={inputCls}
              />
            </div>

            {/* Mobile number */}
            <div>
              <label className="font-body text-[11px] text-gray-700 mb-1 block tracking-wider">Mobile Number</label>
              <input
                name="mobile"
                type="tel"
                value={form.mobile}
                onChange={handle}
                required
                placeholder="Enter Mobile Number"
                className={inputCls}
              />
            </div>

            {/* Select Car */}
            <div>
              <label className="font-body text-[11px] text-gray-700 mb-1 block tracking-wider">Select Car</label>
              <select name="car" value={form.car} onChange={handle} required className={inputCls}>
                <option value="">— Choose Car —</option>
                {VEHICLES.map(v => <option key={v} value={v}>{v}</option>)}
              </select>
            </div>

            {/* Pickup Location */}
            <div>
              <label className="font-body text-[11px] text-gray-700 mb-1 block tracking-wider">Pickup Location</label>
              <input
                name="pickup"
                type="text"
                value={form.pickup}
                onChange={handle}
                required
                placeholder="Enter Pickup Location"
                className={inputCls}
              />
            </div>

            {/* Drop Location */}
            <div>
              <label className="font-body text-[11px] text-gray-700 mb-1 block tracking-wider">Drop Location</label>
              <input
                name="drop"
                type="text"
                value={form.drop}
                onChange={handle}
                required
                placeholder="Enter Drop Location"
                className={inputCls}
              />
            </div>

            {/* Journey Date + Pickup Time */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="font-body text-[11px] text-gray-700 mb-1 block tracking-wider">Journey Date</label>
                <input name="date" type="date" value={form.date} onChange={handle} required className={inputCls} />
              </div>
              <div>
                <label className="font-body text-[11px] text-gray-700 mb-1 block tracking-wider">Pickup Time</label>
                <input name="time" type="time" value={form.time} onChange={handle} required className={inputCls} />
              </div>
            </div>

            <button
              type="submit"
              className="btn-gold w-full py-4 text-[11px] rounded-sm mt-2 gap-2"
            >
              <FaWhatsapp className="text-base" /> Book Now via WhatsApp <HiArrowRight className="text-sm" />
            </button>

            <p className="font-body text-[11px] text-gray-600 text-center">
              Or call us: <a href="tel:+919643199064" className="text-gold hover:text-gold-light transition-colors">+91 96431 99064</a>
            </p>
          </form>
        )}
      </div>
    </div>
  )
}
