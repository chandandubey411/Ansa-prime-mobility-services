import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiLocationMarker, HiPhone, HiMail, HiClock } from 'react-icons/hi'
import { FaWhatsapp } from 'react-icons/fa'
import { HiArrowRight } from 'react-icons/hi'
import MiniHero from '../components/MiniHero/MiniHero'

const contactInfo = [
  {
    icon: HiLocationMarker,
    title: 'Our Address',
    lines: ['94, Block B, Zamrudpur,', 'Greater Kailash, New Delhi', 'Delhi – 110048'],
  },
  {
    icon: HiPhone,
    title: 'Phone Number',
    lines: ['+91 96431 99064'],
    href: 'tel:+919643199064',
  },
  {
    icon: HiMail,
    title: 'Email Address',
    lines: ['info@ansaprime.com'],
    href: 'mailto:info@ansaprime.com',
  },
  {
    icon: HiClock,
    title: 'Working Hours',
    lines: ['24 Hours / 7 Days a Week', 'Always Available for You'],
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', mobile: '', email: '', service: '', message: '' })
  const [sent, setSent] = useState(false)

  const handle = e => setForm({ ...form, [e.target.name]: e.target.value })
  const submit = e => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => { setSent(false); setForm({ name: '', mobile: '', email: '', service: '', message: '' }) }, 4500)
  }
  const inp = 'luxury-input w-full rounded-sm px-4 py-3 text-sm font-body'

  return (
    <main>
      <MiniHero
        title="CONTACT US"
        subtitle="Get in touch — we're available 24/7 to plan your premium journey"
        breadcrumb={['Contact']}
        bgImage="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=1200"
      />

      <section className="py-24" style={{ background: '#f8f5f0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="section-label mb-3">Get In Touch</motion.p>
            <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="section-title text-4xl md:text-5xl mb-4 text-gray-900">
              Let's <span>Connect</span>
            </motion.h2>
            <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
              className="gold-divider" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
            {/* LEFT — Info */}
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <h3 className="font-heading text-2xl font-bold text-gray-900 mb-2">
                ANSA PRIME <span className="gold-text">MOBILITY</span>
              </h3>
              <p className="font-body text-sm text-gray-500 mb-8 leading-relaxed max-w-md">
                Whether you need an airport cab, a corporate chauffeur or a long outstation journey — we are here for you round the clock. Reach out and let us take care of every detail.
              </p>

              {/* Contact Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {contactInfo.map((info, i) => (
                  <motion.div 
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white rounded-xl p-5 shadow-sm border border-black/5"
                  >
                    <div className="icon-box w-11 h-11 mb-3">
                      <info.icon className="text-gold text-lg" />
                    </div>
                    <p className="font-body text-[10px] text-gray-400 uppercase tracking-widest mb-1.5">{info.title}</p>
                    {info.href ? (
                      <a href={info.href} className="font-body text-sm text-gray-700 hover:text-gold transition-colors font-medium">
                        {info.lines.join('')}
                      </a>
                    ) : (
                      info.lines.map(l => (
                        <p key={l} className="font-body text-sm text-gray-700">{l}</p>
                      ))
                    )}
                  </motion.div>
                ))}
              </div>

              {/* WhatsApp */}
              <a
                href="https://wa.me/919643199064"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-7 py-4 rounded-sm font-body text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1"
                style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)', boxShadow: '0 4px 20px rgba(37,211,102,0.25)' }}
              >
                <FaWhatsapp className="text-xl" />
                Chat on WhatsApp
              </a>
            </motion.div>

            {/* RIGHT — Form */}
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <div className="relative">
                <div className="rounded-xl overflow-hidden" style={{ background: '#ffffff', border: '1px solid rgba(212,167,60,0.15)', boxShadow: '0 2px 20px rgba(0,0,0,0.06)' }}>
                  <div className="p-8 relative">
                  <h3 className="font-heading text-xl font-bold text-gray-900 mb-6">
                    Send Us a <span className="gold-text">Message</span>
                  </h3>

                  {sent ? (
                    <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center py-14">
                      <div className="relative w-20 h-20 mx-auto mb-5">
                        <div className="absolute inset-0 rounded-full animate-ping opacity-30"
                          style={{ background: 'rgba(212,167,60,0.5)' }} />
                        <div className="w-20 h-20 rounded-full border-2 border-gold flex items-center justify-center">
                          <span className="text-gold text-4xl">✓</span>
                        </div>
                      </div>
                      <h3 className="font-heading text-2xl font-bold text-gray-900 mb-1">Message Sent!</h3>
                      <p className="font-body text-sm text-gray-500">Fill in the form and we'll get back to you on WhatsApp.</p>
                    </motion.div>
                  ) : (
                    <form onSubmit={submit} className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="font-body text-[11px] text-gray-400 mb-1.5 block tracking-wider">Full Name</label>
                          <input name="name" value={form.name} onChange={handle}
                            placeholder="Your name" required className={inp} />
                        </div>
                        <div>
                          <label className="font-body text-[11px] text-gray-400 mb-1.5 block tracking-wider">Mobile No.</label>
                          <input name="mobile" value={form.mobile} onChange={handle}
                            placeholder="+91 XXXXX" required className={inp} />
                        </div>
                      </div>
                      <div>
                        <label className="font-body text-[11px] text-gray-400 mb-1.5 block tracking-wider">Email Address</label>
                        <input name="email" type="email" value={form.email} onChange={handle}
                          placeholder="your@email.com" required className={inp} />
                      </div>
                      <div>
                        <label className="font-body text-[11px] text-gray-400 mb-1.5 block tracking-wider">Service Required</label>
                        <select name="service" value={form.service} onChange={handle} className={inp}>
                          <option value="">Select a service</option>
                          {['Airport Transfer', 'Corporate Travel', 'Local Taxi', 'Outstation Trip', 'Wedding Transport', 'Premium Chauffeur'].map(s => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="font-body text-[11px] text-gray-400 mb-1.5 block tracking-wider">Message</label>
                        <textarea name="message" value={form.message} onChange={handle}
                          placeholder="Tell us about your travel requirements..."
                          rows={4} required className={`${inp} resize-none`} />
                      </div>
                      <button type="submit" className="btn-gold w-full py-4 text-[11px] rounded-sm gap-2">
                        Send Message <HiArrowRight />
                      </button>
                    </form>
                  )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-80 relative">
        <div className="absolute top-0 inset-x-0 h-px z-10"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(212,167,60,0.4), transparent)' }} />
        <iframe
          title="ANSA PRIME Location — Greater Kailash New Delhi"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.7395267938644!2d77.24163!3d28.5574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3c5b6a0c6f9%3A0x1234567890abcdef!2sGreater%20Kailash%2C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1620000000000"
          width="100%"
          height="100%"
          style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(75%) sepia(20%)' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </main>
  )
}
