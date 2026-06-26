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

  const inputCls = "luxury-input w-full px-4 py-3 text-sm"

  return (
    <div className="relative">
      {/* Glow behind card */}
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
          boxShadow: '0 35px 100px -40px rgba(15,23,42,0.75)',
          padding: '28px',
        }}
      >
        {/* Top accent gradient */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24"
          style={{ background: 'linear-gradient(90deg, rgba(212,167,60,0.10), rgba(255,255,255,0))' }}
        />

        {/* Header */}
        <div className="relative mb-5">
          <p className="section-label text-[10px] mb-2">Plan Your Ride</p>
          <h3
            className="text-2xl font-bold text-slate-900"
            style={{ fontFamily: 'Inter, Outfit, sans-serif', letterSpacing: '-0.03em' }}
          >
            Keep it simple from<br />the <span className="gold-text">first message.</span>
          </h3>
          <p className="text-xs text-gray-500 mt-1.5" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>
            Share your details and we'll confirm your booking on WhatsApp.
          </p>
        </div>

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
          <form onSubmit={submit} className="space-y-3 relative">
            {/* Name */}
            <div>
              <label className="text-[11px] text-gray-500 mb-1 block font-semibold tracking-wider" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>Your Name</label>
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
              <label className="text-[11px] text-gray-500 mb-1 block font-semibold tracking-wider" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>Mobile Number</label>
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
              <label className="text-[11px] text-gray-500 mb-1 block font-semibold tracking-wider" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>Select Vehicle</label>
              <select name="car" value={form.car} onChange={handle} required className={inputCls}>
                <option value="">— Choose Car —</option>
                {VEHICLES.map(v => <option key={v} value={v}>{v}</option>)}
              </select>
            </div>

            {/* Pickup Location */}
            <div>
              <label className="text-[11px] text-gray-500 mb-1 block font-semibold tracking-wider" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>Pickup Location</label>
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
              <label className="text-[11px] text-gray-500 mb-1 block font-semibold tracking-wider" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>Drop / Destination</label>
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
                <label className="text-[11px] text-gray-500 mb-1 block font-semibold tracking-wider" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>Journey Date</label>
                <input name="date" type="date" value={form.date} onChange={handle} required className={inputCls} />
              </div>
              <div>
                <label className="text-[11px] text-gray-500 mb-1 block font-semibold tracking-wider" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>Pickup Time</label>
                <input name="time" type="time" value={form.time} onChange={handle} required className={inputCls} />
              </div>
            </div>

            <div className="mt-5 flex flex-col gap-3 border-t border-black/8 pt-4">
              <p className="text-xs text-gray-500" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>
                We'll call or WhatsApp you after you submit to confirm your booking.
              </p>
              <button
                type="submit"
                className="btn-gold w-full py-4 gap-2 rounded-full"
                style={{ fontSize: '0.8rem', letterSpacing: '0.5px' }}
              >
                <FaWhatsapp className="text-base" /> Request Booking <HiArrowRight className="text-sm" />
              </button>
            </div>

            <p className="text-[11px] text-gray-500 text-center" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>
              Or call directly: <a href="tel:+919643199064" className="text-gold font-semibold hover:text-gold-dark transition-colors">+91 96431 99064</a>
            </p>
          </form>
        )}
      </div>
    </div>
  )
}
