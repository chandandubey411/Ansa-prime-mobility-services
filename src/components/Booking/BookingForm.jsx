import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaCarAlt } from 'react-icons/fa'
import { HiArrowRight } from 'react-icons/hi'

import { cars } from '../../data/cars'

const CARS = cars.map(c => c.name)

export default function BookingForm() {
  const [form, setForm] = useState({ name: '', mobile: '', car: '', pickup: '', drop: '', date: '', time: '' })
  const [sent, setSent] = useState(false)
  const [active, setActive] = useState(null)

  const handle = e => setForm({ ...form, [e.target.name]: e.target.value })
  const submit = e => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }
  const inp = `luxury-input w-full rounded-sm px-4 py-3 text-sm font-body ${active === 'active' ? 'border-gold' : ''}`

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
          <span className="section-label text-[10px]">Instant Booking</span>
        </div>
        <h3 className="font-heading text-2xl font-bold text-white mb-5">
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
            <p className="font-heading text-xl text-white mb-1">Request Sent!</p>
            <p className="font-body text-sm text-white/40">We'll call you within minutes.</p>
          </motion.div>
        ) : (
          <form onSubmit={submit} className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="font-body text-[11px] text-white/40 mb-1 block tracking-wider">Full Name</label>
                <input name="name" value={form.name} onChange={handle}
                  placeholder="Your name" required className={inp} />
              </div>
              <div>
                <label className="font-body text-[11px] text-white/40 mb-1 block tracking-wider">Mobile No.</label>
                <input name="mobile" value={form.mobile} onChange={handle}
                  placeholder="+91 XXXXX" required className={inp} />
              </div>
            </div>

            <div>
              <label className="font-body text-[11px] text-white/40 mb-1 block tracking-wider">Select Vehicle</label>
              <select name="car" value={form.car} onChange={handle} required className={inp}>
                <option value="">Choose your car</option>
                {CARS.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>

            <div>
              <label className="font-body text-[11px] text-white/40 mb-1 block tracking-wider">Pickup Location</label>
              <input name="pickup" value={form.pickup} onChange={handle}
                placeholder="Enter pickup point" required className={inp} />
            </div>

            <div>
              <label className="font-body text-[11px] text-white/40 mb-1 block tracking-wider">Drop Location</label>
              <input name="drop" value={form.drop} onChange={handle}
                placeholder="Enter destination" required className={inp} />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="font-body text-[11px] text-white/40 mb-1 block tracking-wider">Date</label>
                <input name="date" type="date" value={form.date} onChange={handle} required className={inp} />
              </div>
              <div>
                <label className="font-body text-[11px] text-white/40 mb-1 block tracking-wider">Time</label>
                <input name="time" type="time" value={form.time} onChange={handle} required className={inp} />
              </div>
            </div>

            <button
              type="submit"
              className="btn-gold w-full py-4 text-[11px] rounded-sm mt-1 gap-2"
            >
              Book Your Ride <HiArrowRight className="text-sm" />
            </button>

            <p className="font-body text-[11px] text-white/25 text-center">
              Or call us: <a href="tel:+919643199064" className="text-gold hover:text-gold-light transition-colors">+91 96431 99064</a>
            </p>
          </form>
        )}
      </div>
    </div>
  )
}
