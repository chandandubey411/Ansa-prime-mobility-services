import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { HiHome, HiChevronRight } from 'react-icons/hi'

export default function MiniHero({ title, subtitle, breadcrumb = [], bgImage = '/hero-bg.jpg' }) {
  return (
    <section className="mini-hero" style={{ background: `url(${bgImage}) center/cover no-repeat` }}>
      {/* Bottom fade to white */}
      <div className="absolute inset-x-0 bottom-0 h-28 pointer-events-none"
        style={{ background: 'linear-gradient(to top, #ffffff, transparent)' }} />

      {/* Content */}
      <div className="mini-hero-content px-4 w-full">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex items-center gap-3 justify-center mb-3"
        >
          <span className="w-8 h-px" style={{ background: 'rgba(212,167,60,0.6)' }} />
          <span className="text-[10px] font-bold tracking-[3px] uppercase" style={{ color: '#D4A73C', fontFamily: 'Inter, sans-serif' }}>ANSA PRIME MOBILITY</span>
          <span className="w-8 h-px" style={{ background: 'rgba(212,167,60,0.6)' }} />
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.65, ease: [0.23, 1, 0.32, 1] }}
          className="font-heading font-black text-white text-center mb-3 drop-shadow-lg"
          style={{
            fontSize: 'clamp(2rem, 7vw, 4.2rem)',
            fontFamily: 'Inter, Outfit, sans-serif',
            letterSpacing: '-0.03em',
            lineHeight: 1.05,
          }}
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="text-sm text-white/70 text-center mb-4 max-w-lg mx-auto"
            style={{ fontFamily: 'Inter, Poppins, sans-serif' }}
          >
            {subtitle}
          </motion.p>
        )}

        {/* Breadcrumb */}
        {breadcrumb.length > 0 && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
            className="flex items-center gap-1.5 justify-center text-xs text-white/50 tracking-wider"
            style={{ fontFamily: 'Inter, Poppins, sans-serif' }}
          >
            <Link to="/" className="flex items-center gap-1 hover:text-white/80 transition-colors">
              <HiHome className="text-sm" /> Home
            </Link>
            {breadcrumb.map((b, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <HiChevronRight className="text-gold/60" />
                <span className={i === breadcrumb.length - 1 ? 'text-gold font-semibold' : 'text-white/50'}>
                  {b}
                </span>
              </span>
            ))}
          </motion.nav>
        )}
      </div>
    </section>
  )
}
