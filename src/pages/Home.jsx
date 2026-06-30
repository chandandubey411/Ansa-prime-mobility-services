import HeroSection from '../components/Hero/HeroSection'
import Testimonials from '../components/Testimonials/Testimonials'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Counter from '../components/Counter/Counter'
import {
  FaCarSide, FaUserTie, FaMoneyBillWave, FaClock,
  FaPhoneAlt, FaWhatsapp, FaCheckCircle, FaMapMarkedAlt,
  FaArrowRight, FaStar
} from 'react-icons/fa'
import { HiLocationMarker } from 'react-icons/hi'
import DzireImg from '../assets/car_images/Dzire.jpeg'
import AuraImg from '../assets/car_images/Aura.jpeg'
import MarazzoImg from '../assets/car_images/Marazzo.png'
import InnovaCrystaImg from '../assets/car_images/Innova Crysta.jpeg'
import HycrossImg from '../assets/car_images/Hycross.png'
import PremiumSedanImg from '../assets/car_images/Perimum sedan.png'

/* ── DATA ── */
const features = [
  {
    num: '01',
    icon: FaCarSide,
    title: 'Comfortable Seating',
    desc: 'Our cabs are equipped with comfortable push-back seats to ensure a relaxed and smooth journey every time.',
    color: '#3B82F6',
  },
  {
    num: '02',
    icon: FaUserTie,
    title: 'Experienced Drivers',
    desc: 'Our cabs are operated by experienced, police-verified drivers for a reliable and hassle-free ride.',
    color: '#D4A73C',
  },
  {
    num: '03',
    icon: FaMoneyBillWave,
    title: 'Affordable Rates',
    desc: 'Our affordable and transparent rates ensure you get the best value for every journey with no hidden charges.',
    color: '#10B981',
  },
  {
    num: '04',
    icon: FaClock,
    title: '24/7 Service',
    desc: 'Our 24/7 service ensures a premium cab is always available whenever and wherever you need it.',
    color: '#EC4899',
  },
]

const fleetVehicles = [
  {
    name: 'Maruti Dzire',
    seating: '4+1D',
    rate: '₹15',
    type: 'Sedan',
    startingPrice: '₹4,000',
    image: DzireImg
  },
  {
    name: 'Honda City',
    seating: '4+1D',
    rate: '₹17',
    type: 'Sedan',
    startingPrice: '₹4,500',
    image: PremiumSedanImg
  },
  {
    name: 'Hyundai Aura',
    seating: '4+1D',
    rate: '₹15',
    type: 'Sedan',
    startingPrice: '₹4,000',
    image: AuraImg,
    objectPosition: 'bottom'
  },
  {
    name: 'Premium Sedan',
    seating: '4+1D',
    rate: '₹18',
    type: 'Premium Sedan',
    startingPrice: '₹4,800',
    image: PremiumSedanImg
  },
  {
    name: 'Maruti Ertiga',
    seating: '6+1D',
    rate: '₹19',
    type: 'MPV',
    startingPrice: '₹5,000',
    image: 'https://i.pinimg.com/736x/83/c2/98/83c298c77de26dc6355885f0307e7d10.jpg'
  },
  {
    name: 'Kia Carens',
    seating: '6+1D',
    rate: '₹20',
    type: 'MPV',
    startingPrice: '₹5,500',
    image: 'https://i.pinimg.com/736x/3a/8f/49/3a8f4965003a43180ba20603616f983d.jpg'
  },
  {
    name: 'Mahindra Marazzo',
    seating: '7+1D',
    rate: '₹20',
    type: 'MPV',
    startingPrice: '₹5,500',
    image: MarazzoImg
  },
  {
    name: 'Toyota Hycross',
    seating: '7+1D',
    rate: '₹33',
    type: 'Premium MPV',
    startingPrice: '₹8,500',
    image: HycrossImg
  },
  {
    name: 'Innova Crysta',
    seating: '7+1D',
    rate: '₹22',
    type: 'Premium SUV',
    startingPrice: '₹6,000',
    image: InnovaCrystaImg
  },
  {
    name: 'Toyota Fortuner',
    seating: '7+1D',
    rate: '₹48',
    type: 'Luxury SUV',
    startingPrice: '₹12,000',
    image: 'https://i.pinimg.com/736x/14/f1/cb/14f1cbe0edfb3620de8bd8bd53ebc411.jpg'
  },
  {
    name: 'Toyota Camry Hybrid',
    seating: '4+1D',
    rate: '₹53',
    type: 'Luxury Sedan',
    startingPrice: '₹13,000',
    image: 'https://i.pinimg.com/736x/10/39/75/103975fc93f1e60de40c8a0fdd44b3ea.jpg'
  },
  {
    name: 'Mercedes Benz',
    seating: '4+1D',
    rate: '₹88',
    type: 'Ultra Luxury',
    startingPrice: '₹20,000',
    image: 'https://i.pinimg.com/736x/7f/f5/8f/7ff58fa900f6172d69fa16cb34024da9.jpg'
  },
]

const tourPackages = [
  {
    from: 'Delhi', to: 'Agra',
    desc: 'Visit the iconic Taj Mahal, Agra Fort and enjoy a comfortable same-day return trip.',
    highlights: ['Taj Mahal', 'Agra Fort', 'Fatehpur Sikri', 'Same Day Return'],
    dist: '~230', time: '3–4 hrs',
    color: 'rgba(212,167,60,0.08)',
  },
  {
    from: 'Delhi', to: 'Jaipur',
    desc: 'Explore forts, palaces, and vibrant culture with a smooth and well-planned Jaipur tour.',
    highlights: ['Amber Fort', 'Hawa Mahal', 'City Palace', 'Jantar Mantar'],
    dist: '~270', time: '4–5 hrs',
    color: 'rgba(59,130,246,0.08)',
  },
  {
    from: 'Delhi', to: 'Rishikesh',
    desc: 'Enjoy a peaceful journey to Rishikesh with scenic views, river ghats, and spiritual attractions.',
    highlights: ['Laxman Jhula', 'River Rafting', 'Ganga Ghat', 'Triveni Ghat'],
    dist: '~240', time: '4–5 hrs',
    color: 'rgba(16,185,129,0.08)',
  },
  {
    from: 'Delhi', to: 'Haridwar',
    desc: 'Experience a peaceful journey with holy ghats, Ganga Aarti, and spiritual landmarks.',
    highlights: ['Har ki Pauri', 'Ganga Aarti', 'Mansa Devi', 'Chandi Devi'],
    dist: '~215', time: '3–4 hrs',
    color: 'rgba(139,92,246,0.08)',
  },
  {
    from: 'Delhi', to: 'Mathura',
    desc: 'Visit the sacred city of Lord Krishna with a smooth ride covering Mathura and Vrindavan temples.',
    highlights: ['Krishna Janmabhoomi', 'Vrindavan', 'Banke Bihari', 'ISKCON Temple'],
    dist: '~165', time: '2.5–3 hrs',
    color: 'rgba(245,158,11,0.08)',
  },
  {
    from: 'Delhi', to: 'Manali',
    desc: 'Experience snow-capped mountains, adventure activities, and a comfortable long-distance journey.',
    highlights: ['Rohtang Pass', 'Solang Valley', 'Hadimba Temple', 'Mall Road'],
    dist: '~540', time: '10–12 hrs',
    color: 'rgba(236,72,153,0.08)',
  },
  {
    from: 'Delhi', to: 'Mussoorie',
    desc: 'Enjoy a scenic hill station journey with pleasant weather, mountain views, and a relaxing trip.',
    highlights: ['Mall Road', 'Kempty Falls', 'Lal Tibba', 'Camel Back Road'],
    dist: '~300', time: '5–6 hrs',
    color: 'rgba(6,182,212,0.08)',
  },
  {
    from: 'Delhi', to: 'Khatu Shyam',
    desc: 'Plan a comfortable religious trip to Khatu Shyam Ji for a peaceful and hassle-free darshan.',
    highlights: ['Khatu Shyam Temple', 'Salasar Balaji', 'Lohargal', 'Night Darshan'],
    dist: '~320', time: '5–6 hrs',
    color: 'rgba(34,197,94,0.08)',
  },
]

const popularRoutes = [
  'Delhi to Jaipur Cab', 'Delhi to Dehradun Cab', 'Haridwar Taxi',
  'Delhi to Mathura Cab', 'Delhi to Rishikesh Cab', 'Delhi to Agra Cab',
  'Cab Service in Delhi', 'Delhi Outstation Taxi', 'Delhi to Manali Cab',
  'Delhi to Shimla Taxi', 'Delhi to Chandigarh Cab', 'Delhi to Nainital Taxi',
  'Innova Hire in Delhi', 'Delhi to Amritsar Taxi', 'Delhi to Mussoorie Taxi',
  'One Way Taxi Delhi', 'Delhi Airport Taxi', 'Delhi to Ambala Cab',
  'Tempo Traveller on Rent', 'Delhi to Vrindavan Cab', 'Delhi to Khatu Shyam Cab',
  'Corporate Cab Delhi', 'Wedding Car Rental Delhi', 'Luxury Cab Delhi',
]

/* ── COMPONENT ── */
export default function Home() {
  return (
    <main>
      <HeroSection />

      {/* ═══════════════ FEATURE CARDS ═══════════════ */}
      <section style={{ background: '#f8fafc' }} className="py-16 relative">
        <div className="h-px w-full absolute top-0" style={{ background: 'linear-gradient(90deg,transparent,rgba(212,167,60,0.25),transparent)' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Section header */}
          <div className="text-center mb-10">
            <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="section-label mb-3 justify-center">Why Book With Us</motion.p>
            <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="section-title text-3xl md:text-4xl max-w-2xl mx-auto"
            >
              Better travel, built around <span>how you move.</span>
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((f, i) => (
              <motion.div
                key={f.num}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.09, duration: 0.55 }}
                className="info-card group"
              >
                {/* Icon */}
                <div className="w-11 h-11 rounded-2xl mb-4 flex items-center justify-center transition-all duration-300"
                  style={{ background: `${f.color}18`, border: `1px solid ${f.color}30` }}>
                  <f.icon style={{ color: f.color }} className="text-lg group-hover:scale-110 transition-transform" />
                </div>
                <h3
                  className="text-base font-bold text-gray-900 mb-2 group-hover:text-gold transition-colors"
                  style={{ fontFamily: 'Inter, Outfit, sans-serif', letterSpacing: '-0.02em' }}
                >{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ FLEET / BEST CAB SERVICE ═══════════════ */}
      <section className="py-20 relative" style={{ background: '#ffffff' }}>
        <div className="h-px w-full absolute top-0" style={{ background: 'linear-gradient(90deg,transparent,rgba(212,167,60,0.35),transparent)' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="text-center mb-14">
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="section-label mb-3">Our Fleet</motion.p>
            <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="section-title text-4xl md:text-5xl mb-4">
              Best Cab Service <span>In Delhi</span>
            </motion.h2>
            <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
              className="gold-divider" />
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
              className="font-body text-sm text-gray-500 mt-5 max-w-2xl mx-auto leading-relaxed">
              We provide the best taxi service in Delhi with well-maintained cabs, reliable drivers, and budget-friendly rates for every journey.
            </motion.p>
          </div>

          {/* Vehicle Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {fleetVehicles.slice(0, 3).map((v, i) => (
              <motion.div
                key={v.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 4) * 0.1 }}
                whileHover={{ y: -8, boxShadow: '0 20px 50px rgba(212,167,60,0.18)' }}
                className="rounded-xl overflow-hidden group"
                style={{ background: '#ffffff', border: '1px solid rgba(212,167,60,0.15)', boxShadow: '0 2px 15px rgba(0,0,0,0.06)' }}
              >
                {/* Vehicle Image */}
                <div className="h-44 relative overflow-hidden">
                  <img
                    src={v.image}
                    alt={v.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    style={{ objectPosition: v.objectPosition || 'center' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  {/* Type badge */}
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-sm text-[10px] font-bold tracking-wider uppercase"
                    style={{ background: 'rgba(212,167,60,0.9)', color: '#fff' }}>
                    {v.type}
                  </span>
                </div>

                <div className="p-5">
                  <h3 className="font-heading text-base font-bold text-gray-900 mb-3 group-hover:text-gold transition-colors">{v.name}</h3>
                  <div className="flex justify-around items-center mb-4">
                    <div className="text-center">
                      <p className="font-heading text-lg font-black gold-text">{v.seating}</p>
                      <p className="font-body text-[10px] text-gray-400 tracking-wider uppercase">Seats</p>
                    </div>
                    <div className="w-px h-8" style={{ background: 'rgba(212,167,60,0.2)' }} />
                    <div className="text-center">
                      <p className="font-heading text-lg font-black gold-text">{v.rate}/km</p>
                      <p className="font-body text-[10px] text-gray-400 tracking-wider uppercase">Rate</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Link to={`/book?car=${encodeURIComponent(v.name)}`}
                      className="flex-1 btn-gold py-2 text-[10px] rounded-sm gap-1.5 justify-center">
                      Book Now
                    </Link>
                    <a href="tel:+919643199064"
                      className="flex-1 btn-outline py-2 text-[10px] rounded-sm gap-1.5 justify-center">
                      <FaPhoneAlt className="text-[9px]" /> Call
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mb-10">
            <Link to="/fleet" className="btn-outline px-10 py-3.5 text-[11px] rounded-sm gap-2">
              View Full Fleet <FaArrowRight />
            </Link>
          </div>


        </div>
      </section>

      {/* ═══════════════ TOUR PACKAGES ═══════════════ */}
      <section className="py-20 relative" style={{ background: '#f8fafc' }}>
        <div className="h-px w-full absolute top-0" style={{ background: 'linear-gradient(90deg,transparent,rgba(212,167,60,0.35),transparent)' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="text-center mb-14">
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="section-label mb-3">Outstation Taxi</motion.p>
            <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="section-title text-4xl md:text-5xl mb-4">
              Popular <span>Tour Packages</span>
            </motion.h2>
            <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
              className="gold-divider" />
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
              className="font-body text-sm text-gray-500 mt-5 max-w-2xl mx-auto leading-relaxed">
              Discover India's most loved tourist destinations with our premium outstation taxi services. Comfortable rides, fixed pricing, and professional drivers for a stress-free journey.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {tourPackages.map((pkg, i) => (
              <motion.div
                key={`${pkg.from}-${pkg.to}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 4) * 0.1 }}
                whileHover={{ y: -8, boxShadow: '0 20px 50px rgba(212,167,60,0.15)' }}
                className="rounded-xl overflow-hidden group cursor-default"
                style={{ background: '#ffffff', border: '1px solid rgba(212,167,60,0.15)', boxShadow: '0 2px 15px rgba(0,0,0,0.05)' }}
              >
                {/* Color band */}
                <div className="h-2 w-full" style={{ background: 'linear-gradient(90deg, #D4A73C, #B8891F)' }} />

                <div className="p-6">
                  {/* Route */}
                  <div className="flex items-center gap-2 mb-4">
                    <HiLocationMarker className="text-gold text-base shrink-0" />
                    <div>
                      <span className="font-body text-[10px] text-gray-400 tracking-widest uppercase">{pkg.from}</span>
                      <p className="font-heading text-lg font-bold text-gray-900 group-hover:text-gold transition-colors">
                        To {pkg.to}
                      </p>
                    </div>
                  </div>

                  <p className="font-body text-xs text-gray-500 leading-relaxed mb-4">{pkg.desc}</p>

                  {/* Highlights */}
                  <ul className="space-y-1.5 mb-5">
                    {pkg.highlights.map(h => (
                      <li key={h} className="flex items-center gap-2 font-body text-[11px] text-gray-500">
                        <FaCheckCircle className="text-gold/60 text-xs shrink-0" /> {h}
                      </li>
                    ))}
                  </ul>



                  {/* Actions */}
                  <div className="flex gap-2">
                    <Link to="/contact" className="flex-1 btn-gold py-2 text-[10px] rounded-sm justify-center">
                      Book Now
                    </Link>
                    <a href="tel:+919643199064"
                      className="flex-1 btn-outline py-2 text-[10px] rounded-sm gap-1 justify-center">
                      <FaPhoneAlt className="text-[9px]" /> Call
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/pricing" className="btn-outline px-10 py-3.5 text-[11px] rounded-sm gap-2">
              View All Packages <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════ CTA BANNER ═══════════════ */}
      <section className="py-20 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #D4A73C, #c49535, #B8891F)' }}>
        <div className="absolute inset-0 opacity-[0.08]"
          style={{ backgroundImage: 'repeating-linear-gradient(45deg, #fff 0px, #fff 1px, transparent 0, transparent 60px)' }} />
        <div className="max-w-4xl mx-auto px-4 text-center relative">
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="font-body text-xs font-bold tracking-[5px] uppercase text-white/80 mb-3">Ready to Ride?</motion.p>
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl font-black text-white mb-4">
            Book Your Cab Now!
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="font-body text-sm text-white/75 mb-8 max-w-xl mx-auto leading-relaxed">
            Call us or WhatsApp for instant booking. Available 24/7 across Delhi NCR — Airport, Outstation, Corporate, Wedding & Local.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/919643199064?text=Hello%20I%20want%20to%20book%20a%20cab.%20Thanks"
              target="_blank" rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 text-[11px] font-body font-bold tracking-[2px] uppercase bg-white text-gray-900 rounded-sm hover:-translate-y-1 transition-all duration-300 hover:shadow-lg">
              <FaWhatsapp className="text-base text-green-600" /> WhatsApp Us
            </a>
            <a href="tel:+919643199064"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 text-[11px] font-body font-bold tracking-[2px] uppercase border-2 border-white text-white rounded-sm hover:-translate-y-1 hover:bg-white hover:text-gray-900 transition-all duration-300">
              <FaPhoneAlt /> Call Now: +91 96431 99064
            </a>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════ ABOUT TEXT SECTION ═══════════════ */}
      <section className="py-20 relative" style={{ background: '#ffffff' }}>
        <div className="h-px w-full absolute top-0" style={{ background: 'linear-gradient(90deg,transparent,rgba(212,167,60,0.35),transparent)' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Left text */}
            <div>
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="section-label mb-3">About ANSA Prime</motion.p>
              <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                className="section-title text-4xl md:text-5xl mb-5">
                Book <span>Taxi in Delhi</span>
              </motion.h2>
              <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
                className="gold-divider-left mb-7" />

              <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.35 }}
                className="font-body text-sm text-gray-500 leading-relaxed mb-4">
                We are providing the best way to explore India, one road trip at a time. Every turn brings a new story, a new sight, and a new experience. That love for road travel inspires us to create journeys that are as enjoyable as they are unforgettable.
              </motion.p>
              <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
                className="font-body text-sm text-gray-500 leading-relaxed mb-4">
                Travelling by cab lets you experience the journey as much as the destination. Connect with cultures, enjoy local food — because it's these moments that make travel truly meaningful.
              </motion.p>
              <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.45 }}
                className="font-body text-sm text-gray-500 leading-relaxed mb-8">
                To make planning easier, you can book a cab on our website or call us on <strong className="text-gold">+91 96431 99064</strong> to discuss your itinerary. From booking to safe return, we ensure a memorable journey.
              </motion.p>

              {/* Checklist */}
              <motion.ul initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }}
                className="space-y-3 mb-8">
                {['Multiple Vehicle Options Available', 'Affordable & Transparent Pricing', 'Experienced Drivers & 24/7 Support', 'Safe, Comfortable & Reliable Travel'].map(item => (
                  <li key={item} className="flex items-center gap-3 font-body text-sm text-gray-600">
                    <FaCheckCircle className="text-gold text-sm shrink-0" /> {item}
                  </li>
                ))}
              </motion.ul>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.55 }}
                className="flex flex-wrap gap-4">
                <Link to="/about" className="btn-gold px-8 py-3.5 text-[11px] rounded-sm gap-2">
                  Learn More <FaArrowRight />
                </Link>
                <Link to="/contact" className="btn-outline px-8 py-3.5 text-[11px] rounded-sm">
                  Get In Touch
                </Link>
              </motion.div>
            </div>

            {/* Right stats grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                { value: '5,000+', label: 'Happy Clients', sub: 'Across Delhi NCR', fullWidth: true },
                { value: '100+', label: 'Expert Drivers', sub: 'Police Verified' },
                { value: '15+', label: 'Premium Vehicles', sub: 'Well Maintained' },
              ].map((s, i) => (
<<<<<<< HEAD
                <div key={s.label}
                  className="rounded-xl p-6 text-center"
=======
                <motion.div key={s.label}
                  initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className={`rounded-xl p-6 text-center ${s.fullWidth ? 'col-span-2' : ''}`}
>>>>>>> 0256137619f107a75e0f8b90f4864492342acce3
                  style={{ background: '#ffffff', border: '1px solid rgba(212,167,60,0.15)', boxShadow: '0 2px 15px rgba(0,0,0,0.05)' }}>
                  <p className="font-heading text-3xl font-black gold-text mb-1">
                    <Counter value={s.value} />
                  </p>
                  <p className="font-body text-sm font-semibold text-gray-700">{s.label}</p>
                  <p className="font-body text-[11px] text-gray-400 tracking-wider mt-1">{s.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ TESTIMONIALS ═══════════════ */}
      <Testimonials />

      {/* ═══════════════ POPULAR ROUTES ═══════════════ */}
      <section className="py-14 relative" style={{ background: '#f8fafc' }}>
        <div className="h-px w-full absolute top-0" style={{ background: 'linear-gradient(90deg,transparent,rgba(212,167,60,0.25),transparent)' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="section-label text-center mb-8">Popular Cab Routes</motion.h3>
          <div className="flex flex-wrap gap-2 justify-center">
            {popularRoutes.map(route => (
              <a
                key={route}
                href={`https://wa.me/919643199064?text=Hello%20I%20need%20${encodeURIComponent(route)}%20service.%20Please%20share%20details.`}
                target="_blank" rel="noreferrer"
                className="font-body text-xs text-gray-500 hover:text-gold border border-black/10 hover:border-gold/40 px-4 py-2 rounded-full transition-all duration-300 hover:bg-gold/5"
              >
                {route}
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
