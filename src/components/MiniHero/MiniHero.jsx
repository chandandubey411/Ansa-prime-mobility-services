import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { HiHome, HiChevronRight } from 'react-icons/hi'

export default function MiniHero({ title, subtitle, breadcrumb = [] }) {
  return (
    <section className="mini-hero" style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #171717 50%, #0f0c08 100%)' }}>
      {/* Gold radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[400px] rounded-full opacity-[0.08] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #D4A73C, transparent 70%)' }} />

      {/* Diagonal lines pattern */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{ backgroundImage: 'repeating-linear-gradient(-45deg, #D4A73C 0px, #D4A73C 1px, transparent 0px, transparent 60px)' }} />

      {/* Top border */}
      <div className="absolute top-0 inset-x-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(212,167,60,0.5), transparent)' }} />

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-24 pointer-events-none"
        style={{ background: 'linear-gradient(to top, #0a0a0a, transparent)' }} />

      {/* Content */}
      <div className="mini-hero-content px-4 w-full">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="flex items-center gap-3 justify-center mb-3"
        >
          <span className="w-8 h-px" style={{ background: 'linear-gradient(90deg, transparent, #D4A73C)' }} />
          <span className="section-label text-[10px]">ANSA PRIME MOBILITY</span>
          <span className="w-8 h-px" style={{ background: 'linear-gradient(90deg, #D4A73C, transparent)' }} />
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          className="font-heading font-black text-white text-center mb-3"
          style={{ fontSize: 'clamp(2rem, 7vw, 4.5rem)' }}
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="font-body text-sm text-white/40 text-center mb-4 max-w-lg mx-auto"
          >
            {subtitle}
          </motion.p>
        )}

        {/* Breadcrumb */}
        {breadcrumb.length > 0 && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-1.5 justify-center font-body text-xs text-white/35 tracking-wider"
          >
            <Link to="/" className="flex items-center gap-1 hover:text-gold transition-colors">
              <HiHome className="text-sm" /> Home
            </Link>
            {breadcrumb.map((b, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <HiChevronRight className="text-gold/40" />
                <span className={i === breadcrumb.length - 1 ? 'text-gold font-semibold' : 'text-white/35'}>
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
