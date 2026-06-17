import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaWhatsapp, FaPhoneAlt, FaArrowUp } from 'react-icons/fa'

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed bottom-7 right-5 z-50 flex flex-col gap-3 items-center">
      {/* WhatsApp */}
      <motion.a
        href="https://wa.me/919643199064"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn text-white text-xl relative"
        style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)' }}
        whileHover={{ scale: 1.18 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, x: 70 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        title="Chat on WhatsApp"
      >
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full animate-ping opacity-25"
          style={{ background: '#25D366' }} />
        <FaWhatsapp className="relative z-10" />
      </motion.a>

      {/* Call */}
      <motion.a
        href="tel:+919643199064"
        className="floating-btn text-dark-DEFAULT text-lg"
        style={{ background: 'linear-gradient(135deg, #D4A73C, #F0D060)' }}
        whileHover={{ scale: 1.18 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, x: 70 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.75, duration: 0.5 }}
        title="Call Us"
      >
        <FaPhoneAlt />
      </motion.a>

      {/* Scroll To Top */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="floating-btn text-gold text-lg"
            style={{ background: '#171717', border: '1.5px solid rgba(212,167,60,0.5)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            whileHover={{ scale: 1.18 }}
            whileTap={{ scale: 0.95 }}
            title="Scroll to Top"
          >
            <FaArrowUp />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}
