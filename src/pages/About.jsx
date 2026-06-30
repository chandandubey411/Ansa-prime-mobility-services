import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import MiniHero from '../components/MiniHero/MiniHero'
import Counter from '../components/Counter/Counter'
import {
  FaCheckCircle, FaPhoneAlt, FaWhatsapp, FaAward,
  FaShieldAlt, FaHandshake, FaCarSide, FaArrowRight
} from 'react-icons/fa'
import { HiLocationMarker, HiMail, HiPhone } from 'react-icons/hi'

const whyChooseUs = [
  {
    icon: FaShieldAlt,
    title: 'Safety First',
    desc: 'All our drivers are police-verified and background-checked. GPS-tracked vehicles for your complete peace of mind.',
  },
  {
    icon: FaAward,
    title: 'Premium Quality',
    desc: 'Well-maintained, fully air-conditioned fleet of luxury sedans, SUVs, and Tempo Travellers serviced regularly.',
  },
  {
    icon: FaHandshake,
    title: 'Transparent Pricing',
    desc: 'No hidden charges. Fixed competitive rates with GST invoices available for corporate clients.',
  },
  {
    icon: FaCarSide,
    title: 'Wide Fleet',
    desc: 'From compact sedans to 26-seater Tempo Travellers and luxury Urbania vans — we have a vehicle for every need.',
  },
]

const milestones = [
  { year: '2016', title: 'Company Founded', desc: 'Started operations in New Delhi with a small fleet of 3 premium vehicles.' },
  { year: '2018', title: 'Fleet Expansion', desc: 'Expanded to 25+ vehicles including Tempo Travellers and luxury SUVs.' },
  { year: '2020', title: 'Corporate Clients', desc: 'Onboarded major corporate clients with dedicated account management.' },
  { year: '2023', title: 'Pan-India Coverage', desc: 'Extended outstation services to cover major tourist destinations across India.' },
  { year: '2026', title: '5,000+ Happy Clients', desc: 'Serving over 5,000 satisfied clients with 100+ verified expert drivers.' },
]

const teamValues = [
  'Punctuality is our promise — always on time',
  'Comfort and cleanliness in every vehicle',
  'Professional, courteous, and uniformed drivers',
  '24/7 customer support for all your queries',
  'Transparent billing with no hidden charges',
  'GPS-enabled fleet for real-time tracking',
]

export default function About() {
  return (
    <main>
      <MiniHero
        title="ABOUT US"
        subtitle="Learn more about ANSA Prime Mobility Services — New Delhi's trusted premium cab service"
        breadcrumb={['About Us']}
        bgImage="/about-img.jpg"
      />

      {/* ═══════════════ WHO WE ARE ═══════════════ */}
      <section className="pt-24 pb-12" style={{ background: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Left */}
            <div>
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="section-label mb-3">Who We Are</motion.p>
              <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                className="section-title text-4xl md:text-5xl mb-5">
                Your Trusted <span>Mobility Partner</span>
              </motion.h2>
              <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
                className="gold-divider-left mb-7" />

              {[
                'ANSA Prime Mobility Services is a leading premium cab and taxi service provider based in New Delhi, India. Since 2016, we have been delivering reliable, comfortable, and affordable transportation solutions across Delhi NCR and beyond.',
                'We believe the best way to discover India is by road. Every turn brings a new story, a new sight, and a new experience. That love for road travel inspires us to create journeys that are as enjoyable as they are unforgettable.',
                'Whether it\'s a quick airport transfer, a corporate commute, an outstation trip, or a grand wedding — ANSA Prime delivers an unmatched travel experience with professionally trained chauffeurs and well-maintained, luxury vehicles.',
              ].map((para, i) => (
                <motion.p key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.35 + i * 0.1 }}
                  className="text-sm text-gray-500 leading-relaxed mb-4" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>
                  {para}
                </motion.p>
              ))}

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-4 mt-6">
                <Link to="/contact" className="btn-gold px-8 py-3.5 rounded-full gap-2" style={{ fontSize: '0.8rem', letterSpacing: '0.5px' }}>
                  Book a Cab <FaArrowRight />
                </Link>
                <a href="tel:+919643199064" className="btn-outline px-8 py-3.5 rounded-full gap-2" style={{ fontSize: '0.8rem', letterSpacing: '0.5px' }}>
                  <FaPhoneAlt /> Call Us Now
                </a>
              </motion.div>
            </div>

            {/* Right — Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                { value: '5,000+', label: 'Happy Clients',    sub: 'Across Delhi NCR' },
                { value: '100+',   label: 'Expert Drivers',   sub: 'Police Verified' },
                { value: '15+',    label: 'Luxury Vehicles',  sub: 'Premium Fleet' },
              ].map((s, i) => (
                <div key={s.label}
                  className={`info-card group text-center ${i === 2 ? 'sm:col-span-2' : ''}`}
                >
                  <p className="font-heading text-3xl font-black gold-text mb-1">
                    <Counter value={s.value} />
                  </p>
                  <p className="text-sm font-semibold text-gray-700" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>{s.label}</p>
                  <p className="text-[11px] text-gray-400 tracking-wider mt-1" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>{s.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ WHY CHOOSE US ═══════════════ */}
      <section className="pt-12 pb-24 relative" style={{ background: '#f8fafc' }}>
        <div className="h-px w-full absolute top-0" style={{ background: 'linear-gradient(90deg,transparent,rgba(212,167,60,0.25),transparent)' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="section-label mb-3">Why ANSA Prime</motion.p>
            <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="section-title text-4xl md:text-5xl mb-4">
              Why <span>Choose Us?</span>
            </motion.h2>
            <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
              className="gold-divider" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, i) => (
              <motion.div key={item.title}
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}
                whileHover={{ y: -8, boxShadow: '0 20px 50px rgba(212,167,60,0.15)' }}
                className="info-card group text-center"
              >
                <div className="w-16 h-16 rounded-2xl mx-auto mb-5 flex items-center justify-center transition-all duration-300"
                  style={{ background: 'rgba(212,167,60,0.08)', border: '1px solid rgba(212,167,60,0.2)' }}>
                  <item.icon className="text-gold text-2xl group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="font-heading text-base font-bold text-gray-900 mb-3 group-hover:text-gold transition-colors">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ OUR VALUES ═══════════════ */}
      <section className="py-24" style={{ background: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Left — Values list */}
            <div>
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="section-label mb-3">Our Values</motion.p>
              <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                className="section-title text-4xl md:text-5xl mb-5">
                What We <span>Stand For</span>
              </motion.h2>
              <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
                className="gold-divider-left mb-8" />
              <ul className="space-y-4">
                {teamValues.map((val, i) => (
                  <motion.li key={val}
                    initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                    className="flex items-center gap-3 text-sm text-gray-600" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>
                    <FaCheckCircle className="text-gold text-base shrink-0" /> {val}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Right — Timeline */}
            <div className="relative pl-8">
              <div className="absolute left-2 top-0 bottom-0 w-0.5" style={{ background: 'linear-gradient(180deg, #D4A73C, rgba(212,167,60,0.1))' }} />
              {milestones.map((m, i) => (
                <motion.div key={m.year}
                  initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="relative mb-8 last:mb-0">
                  {/* Dot */}
                  <div className="absolute -left-[30px] top-1 w-4 h-4 rounded-full border-2 border-gold bg-white" />
                  <span className="text-xs text-gold font-bold tracking-widest" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>{m.year}</span>
                  <h4 className="font-heading text-base font-bold text-gray-900 mt-1 mb-1">{m.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>{m.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ CONTACT INFO STRIP ═══════════════ */}
      <section className="py-10 sm:py-14 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #D4A73C, #c49535, #B8891F)' }}>
        <div className="absolute inset-0 opacity-[0.08]"
          style={{ backgroundImage: 'repeating-linear-gradient(45deg, #fff 0px, #fff 1px, transparent 0, transparent 60px)' }} />
        <div className="max-w-5xl mx-auto px-4 relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { icon: HiLocationMarker, label: 'Our Location', value: '94, Block B, Zamrudpur, Greater Kailash, New Delhi – 110048' },
              { icon: HiPhone,          label: 'Call Us',       value: '+91 96431 99064' },
              { icon: HiMail,           label: 'Email Us',      value: 'info@ansaprimemobility.in' },
            ].map((c, i) => (
              <div key={c.label}>
               <div className="flex flex-col items-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center mb-3 sm:mb-4"
                  style={{ background: 'rgba(255,255,255,0.25)', border: '1px solid rgba(255,255,255,0.5)' }}>
                  <c.icon className="text-white text-lg sm:text-xl" />
                </div>
                <p className="text-[10px] sm:text-xs text-white/70 tracking-widest uppercase mb-1 font-semibold" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>{c.label}</p>
                {c.label === 'Email Us' ? (
                  <a href={`mailto:${c.value}`} className="text-xs sm:text-sm font-semibold text-white hover:text-white/80 break-all px-4" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>{c.value}</a>
                ) : c.label === 'Call Us' ? (
                  <a href={`tel:${c.value.replace(/\s+/g, '')}`} className="text-xs sm:text-sm font-semibold text-white hover:text-white/80" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>{c.value}</a>
                ) : (
                  <p className="text-xs sm:text-sm font-semibold text-white px-4" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>{c.value}</p>
                )}
               </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a href="https://wa.me/919643199064?text=Hello%20I%20want%20to%20book%20a%20cab.%20Thanks"
              target="_blank" rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 text-[11px] font-bold tracking-[2px] uppercase bg-white text-gray-900 rounded-full hover:-translate-y-1 transition-all duration-300 hover:shadow-lg"
              style={{ fontFamily: 'Inter, Poppins, sans-serif' }}
            >
              <FaWhatsapp className="text-base text-green-600" /> WhatsApp Us
            </a>
            <Link to="/contact"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 text-[11px] font-bold tracking-[2px] uppercase border-2 border-white text-white rounded-full hover:-translate-y-1 hover:bg-white hover:text-gray-900 transition-all duration-300"
              style={{ fontFamily: 'Inter, Poppins, sans-serif' }}
            >
              Contact Us <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
