import { motion } from 'framer-motion'
import { FaStar, FaShieldAlt, FaMoneyBillWave, FaIdCard, FaCar, FaHeadset } from 'react-icons/fa'
import { HiArrowRight } from 'react-icons/hi'
import { Link } from 'react-router-dom'

const cards = [
  {
    icon: FaStar,
    title: 'Customer First',
    desc: '5-star rated service with thousands of delighted customers across Delhi NCR. Your satisfaction is our benchmark.',
    num: '01',
  },
  {
    icon: FaCar,
    title: 'On-Time, Every Time',
    desc: 'Punctuality is our promise — not just a slogan. Your driver arrives on schedule, every single trip.',
    num: '02',
  },
  {
    icon: FaMoneyBillWave,
    title: 'Transparent Pricing',
    desc: 'No hidden charges, no surprises. Clear per-kilometre rates shared upfront at the time of booking.',
    num: '03',
  },
  {
    icon: FaIdCard,
    title: 'Verified Chauffeurs',
    desc: 'All drivers are background-checked, licensed and professionally trained in hospitality and safety.',
    num: '04',
  },
  {
    icon: FaShieldAlt,
    title: 'Safe & Sanitized',
    desc: 'GPS-tracked, regularly sanitized premium vehicles. Your safety is our highest priority every journey.',
    num: '05',
  },
  {
    icon: FaHeadset,
    title: '24×7 Support',
    desc: 'Round-the-clock customer service — call, WhatsApp or email. We are always there when you need us.',
    num: '06',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-28 relative overflow-hidden" style={{ background: '#0f0f0f' }}>
      {/* BG decorations */}
      <div className="absolute top-0 inset-x-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(212,167,60,0.35), transparent)' }} />
      <div className="absolute bottom-0 inset-x-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(212,167,60,0.35), transparent)' }} />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.04] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #D4A73C, transparent 70%)' }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-[0.04] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #D4A73C, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 mb-16">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="section-label mb-3"
            >
              Why Choose Us
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="section-title text-4xl md:text-5xl"
            >
              The <span>ANSA PRIME</span><br />Difference
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="shrink-0"
          >
            <div className="gold-divider-left mb-4" />
            <p className="font-body text-sm text-white/45 max-w-xs leading-relaxed">
              We combine luxury, reliability and genuine care to give you the finest travel experience in the capital.
            </p>
            <Link to="/about" className="flex items-center gap-2 text-gold text-xs font-body font-semibold mt-4 group hover:gap-3 transition-all">
              Learn More About Us <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="luxury-card rounded-xl p-7 cursor-default group relative overflow-hidden"
            >
              {/* Number watermark */}
              <span className="absolute top-4 right-5 font-heading text-6xl font-black text-white/[0.03] select-none pointer-events-none">
                {c.num}
              </span>

              {/* Icon */}
              <div className="icon-box mb-5">
                <c.icon className="text-gold text-xl" />
              </div>

              <h3 className="font-heading text-lg font-bold text-white mb-2 group-hover:text-gold transition-colors duration-300">
                {c.title}
              </h3>
              <p className="font-body text-sm text-white/45 leading-relaxed">{c.desc}</p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500"
                style={{ background: 'linear-gradient(90deg, #D4A73C, #F0D060)' }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
