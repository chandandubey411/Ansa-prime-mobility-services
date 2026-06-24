import { useRef } from 'react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'
import 'swiper/css'
import 'swiper/css/pagination'

const reviews = [
  {
    name: 'Rajesh Sharma',
    role: 'Corporate Executive, Delhi',
    stars: 5,
    text: 'Absolutely premium experience! The Mercedes was spotless, driver was punctual and extremely professional. ANSA PRIME is my go-to for all airport transfers.',
    avatar: 'R',
  },
  {
    name: 'Priya Mehta',
    role: 'Marketing Director',
    stars: 5,
    text: 'Booked Camry Hybrid for our team outing — seamless booking process, excellent driver, completely transparent pricing. Highly recommend for corporate travel.',
    avatar: 'P',
  },
  {
    name: 'Amit Verma',
    role: 'Business Traveller',
    stars: 5,
    text: 'Used Fortuner for outstation trip to Jaipur. Incredibly smooth ride, knowledgeable and courteous driver. Will definitely book again for every long trip!',
    avatar: 'A',
  },
  {
    name: 'Sunita Kapoor',
    role: 'Frequent Flyer',
    stars: 5,
    text: 'Best airport transfer service in Delhi! Always on time, clean cars, professional drivers. ANSA PRIME truly sets the gold standard for premium cab services.',
    avatar: 'S',
  },
  {
    name: 'Dr. Vikram Singh',
    role: 'Medical Professional',
    stars: 5,
    text: 'Reliable, safe and premium. As a doctor I need punctual service — ANSA PRIME has never let me down. Their 24/7 support is outstanding.',
    avatar: 'V',
  },
]

export default function Testimonials() {
  return (
    <section className="py-28 relative overflow-hidden" style={{ background: '#f2ede6' }}>
      {/* BG */}
      <div className="absolute top-0 inset-x-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(212,167,60,0.35), transparent)' }} />
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, #D4A73C 1px, transparent 1px)', backgroundSize: '45px 45px' }} />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full opacity-[0.05] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #D4A73C, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="section-label mb-3">
            Client Stories
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="section-title text-4xl md:text-5xl mb-4">
            What Our <span>Clients</span> Say
          </motion.h2>
          <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
            className="gold-divider" />
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          loop
          spaceBetween={24}
          breakpoints={{
            0:    { slidesPerView: 1 },
            640:  { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-14"
        >
          {reviews.map((r, i) => (
            <SwiperSlide key={i}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-xl p-7 h-full relative flex flex-col group hover:border-gold/40 transition-colors duration-300"
              >
                {/* Quote icon */}
                <FaQuoteLeft className="text-gold/15 text-5xl absolute top-5 right-5 select-none" />

                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {Array(r.stars).fill(0).map((_, j) => (
                    <FaStar key={j} className="text-gold text-sm" />
                  ))}
                </div>

                {/* Text */}
                <p className="font-body text-sm text-gray-600 leading-relaxed mb-6 italic flex-1">
                  "{r.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 border-t border-black/8 pt-5">
                  <div className="w-11 h-11 rounded-full flex items-center justify-center shrink-0 font-heading font-black text-gold text-base"
                    style={{ background: 'linear-gradient(135deg, rgba(212,167,60,0.18), rgba(212,167,60,0.06))', border: '1.5px solid rgba(212,167,60,0.4)' }}>
                    {r.avatar}
                  </div>
                  <div>
                    <p className="font-body text-sm font-bold text-gray-900">{r.name}</p>
                    <p className="font-body text-xs text-gold/60">{r.role}</p>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
