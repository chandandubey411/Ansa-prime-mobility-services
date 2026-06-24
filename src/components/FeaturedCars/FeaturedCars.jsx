import { useRef } from 'react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { FaUserFriends, FaSuitcase, FaSnowflake, FaGasPump } from 'react-icons/fa'
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { cars } from '../../data/cars'

// Choose representative signature cars for homepage slider
const featuredNames = ['Mercedes Benz C Class', 'Camry Hybrid', 'Fortuner', 'Innova Crysta', 'Hycross', 'Honda City']
const featuredCars = cars.filter(c => featuredNames.includes(c.name))

export default function FeaturedCars() {
  const prevRef = useRef(null)
  const nextRef = useRef(null)

  return (
    <section className="py-28 relative overflow-hidden" style={{ background: '#f8f5f0' }}>
      <div className="absolute top-0 inset-x-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(212,167,60,0.35), transparent)' }} />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-[0.05] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #D4A73C, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="section-label mb-3">Featured Fleet</motion.p>
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="section-title text-4xl md:text-5xl mb-4">
            Our <span>Signature</span> Vehicles
          </motion.h2>
          <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
            className="gold-divider" />
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.35 }}
            className="font-body text-sm text-gray-500 mt-4 max-w-md mx-auto leading-relaxed">
            Hand-picked luxury vehicles for every occasion — from airport runs to corporate journeys.
          </motion.p>
        </div>

        {/* Slider */}
        <div className="relative">
          {/* Nav Buttons */}
          <div className="flex justify-end gap-3 mb-5">
            <button ref={prevRef}
              className="w-11 h-11 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-white transition-all duration-300">
              <HiArrowLeft />
            </button>
            <button ref={nextRef}
              className="w-11 h-11 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-white transition-all duration-300">
              <HiArrowRight />
            </button>
          </div>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
            onBeforeInit={swiper => {
              swiper.params.navigation.prevEl = prevRef.current
              swiper.params.navigation.nextEl = nextRef.current
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            loop
            spaceBetween={20}
            breakpoints={{
              0:    { slidesPerView: 1 },
              640:  { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12"
          >
            {featuredCars.map((car) => (
              <SwiperSlide key={car.name}>
                <motion.div
                   initial={{ opacity: 0, y: 30 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   className="luxury-card rounded-xl overflow-hidden group h-full"
                >
                  {/* Visual */}
                  <div className="h-48 flex items-center justify-center relative overflow-hidden bg-zinc-900">
                    <img
                      src={car.image}
                      alt={car.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ background: 'radial-gradient(circle at center, rgba(212,167,60,0.15), transparent 70%)' }} />

                    {/* Tag */}
                    <span className={`absolute top-3 left-3 bg-gradient-to-r ${car.tagColor} border text-[10px] font-body font-semibold px-2.5 py-0.5 rounded-sm tracking-wider uppercase z-10`}>
                      {car.tag}
                    </span>

                    {/* Rate badge */}
                    <div className="absolute bottom-3 right-3 glass-dark rounded-sm px-2 py-1 z-10">
                      <span className="font-heading text-sm font-bold gold-text">{car.rate}</span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-5">
                    <h3 className="font-heading text-base font-bold text-gray-900 mb-1 group-hover:text-gold transition-colors duration-300">
                      {car.name}
                    </h3>
                    <p className="font-body text-[11px] text-gray-400 mb-4 tracking-wider uppercase">{car.category}</p>

                    <div className="flex flex-wrap gap-x-4 gap-y-1 mb-5">
                      <span className="flex items-center gap-1.5 text-[12px] text-gray-500 font-body">
                        <FaUserFriends className="text-gold/60 text-xs" /> {car.passengers} Pax
                      </span>
                      <span className="flex items-center gap-1.5 text-[12px] text-gray-500 font-body">
                        <FaSuitcase className="text-gold/60 text-xs" /> {car.luggage} Bags
                      </span>
                      <span className="flex items-center gap-1.5 text-[12px] text-gray-500 font-body">
                        <FaSnowflake className="text-gold/60 text-xs" /> AC
                      </span>
                      <span className="flex items-center gap-1.5 text-[12px] text-gray-500 font-body">
                        <FaGasPump className="text-gold/60 text-xs" /> {car.fuel}
                      </span>
                    </div>

                    <Link to={`/book?car=${encodeURIComponent(car.name)}`} className="btn-gold w-full py-2.5 text-[11px] rounded-sm">
                      Book This Car
                    </Link>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Footer CTA */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
          className="text-center mt-6">
          <Link to="/fleet" className="btn-outline px-10 py-3.5 text-[11px] rounded-sm gap-2">
            View Full Fleet <HiArrowRight />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
