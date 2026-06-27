import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import MiniHero from '../components/MiniHero/MiniHero'
import { FaCarSide, FaPhoneAlt, FaWhatsapp, FaUsers, FaRoad, FaCheckCircle } from 'react-icons/fa'
import DzireImg from '../assets/car_images/Dzire.jpeg'
import AuraImg from '../assets/car_images/Aura.jpeg'
import MarazzoImg from '../assets/car_images/Marazzo.png'
import InnovaCrystaImg from '../assets/car_images/Innova Crysta.jpeg'
import HycrossImg from '../assets/car_images/Hycross.png'
import PremiumSedanImg from '../assets/car_images/Perimum sedan.png'

const vehicles = [
  {
    name: 'Maruti Dzire',
    type: 'Sedan',
    seating: '4+1D',
    rate: '₹15',
    features: ['AC', 'Comfortable Seats', 'Music System', 'GPS Tracked'],
    ideal: 'Perfect for couples and small families for city rides and short outstation trips.',
    color: '#3B82F6',
    image: DzireImg
  },
  {
    name: 'Honda City',
    type: 'Sedan',
    seating: '4+1D',
    rate: '₹17',
    features: ['AC', 'Premium Interiors', 'Music System', 'GPS Tracked'],
    ideal: 'Premium sedan offering superior comfort and status for business and family trips.',
    color: '#3B82F6',
    image: PremiumSedanImg
  },
  {
    name: 'Hyundai Aura',
    type: 'Sedan',
    seating: '4+1D',
    rate: '₹15',
    features: ['AC', 'Comfortable Seating', 'Music System', 'GPS Tracked'],
    ideal: 'Modern sedan, highly fuel-efficient and spacious for city and outstation travel.',
    color: '#3B82F6',
    image: AuraImg,
    objectPosition: 'bottom'
  },
  {
    name: 'Premium Sedan',
    type: 'Premium Sedan',
    seating: '4+1D',
    rate: '₹18',
    features: ['Luxury AC', 'Extra Comfort Seats', 'Music System', 'GPS Tracked'],
    ideal: 'Upgraded premium sedan offering superior space, luxury style and executive travel comfort.',
    color: '#D4A73C',
    image: PremiumSedanImg
  },
  {
    name: 'Maruti Ertiga',
    type: 'MPV',
    seating: '6+1D',
    rate: '₹19',
    features: ['AC', 'Push-back Seats', 'Spacious Cabin', 'GPS Tracked'],
    ideal: 'Ideal for small group travel, family trips and outstation journeys.',
    color: '#10B981',
    image: 'https://i.pinimg.com/736x/83/c2/98/83c298c77de26dc6355885f0307e7d10.jpg'
  },
  {
    name: 'Kia Carens',
    type: 'MPV',
    seating: '6+1D',
    rate: '₹20',
    features: ['AC', 'Modern Interior', 'Panoramic Roof', 'GPS Tracked'],
    ideal: 'Modern and stylish MPV perfect for family outings and medium-distance trips.',
    color: '#8B5CF6',
    image: 'https://i.pinimg.com/736x/3a/8f/49/3a8f4965003a43180ba20603616f983d.jpg'
  },
  {
    name: 'Mahindra Marazzo',
    type: 'MPV',
    seating: '7+1D',
    rate: '₹20',
    features: ['Dual AC', 'Comfortable Captain Seats', 'Large Boot Space', 'GPS Tracked'],
    ideal: 'Spacious and smooth ride, perfect for highway travels and family vacations.',
    color: '#06B6D4',
    image: MarazzoImg
  },
  {
    name: 'Toyota Hycross',
    type: 'Premium MPV',
    seating: '7+1D',
    rate: '₹33',
    features: ['Luxury Dual AC', 'Captain Seats', 'Ambient Lighting', 'GPS Tracked'],
    ideal: 'Premium hybrid MPV for ultimate passenger comfort and a smooth, silent ride.',
    color: '#D4A73C',
    image: HycrossImg
  },
  {
    name: 'Innova Crysta',
    type: 'Premium SUV',
    seating: '7+1D',
    rate: '₹22',
    features: ['Luxury AC', 'Captain Seats', 'Ample Luggage', 'GPS Tracked'],
    ideal: 'Best choice for premium travel, corporate trips and large family outstation tours.',
    color: '#D4A73C',
    image: InnovaCrystaImg
  },
  {
    name: 'Toyota Fortuner',
    type: 'Luxury SUV',
    seating: '7+1D',
    rate: '₹48',
    features: ['Dual AC', 'Leather Interiors', 'Powerful Engine', 'GPS Tracked'],
    ideal: 'Luxury SUV with high road presence, perfect for VIP travel and rough terrains.',
    color: '#F59E0B',
    image: 'https://i.pinimg.com/736x/14/f1/cb/14f1cbe0edfb3620de8bd8bd53ebc411.jpg'
  },
  {
    name: 'Toyota Camry Hybrid',
    type: 'Luxury Sedan',
    seating: '4+1D',
    rate: '₹53',
    features: ['Premium AC', 'Reclining Rear Seats', 'Silent Electric Cabin', 'GPS Tracked'],
    ideal: 'Executive luxury sedan for VIP transfers, corporate executives and premium occasions.',
    color: '#F43F5E',
    image: 'https://i.pinimg.com/736x/10/39/75/103975fc93f1e60de40c8a0fdd44b3ea.jpg'
  },
  {
    name: 'Mercedes Benz',
    type: 'Ultra Luxury',
    seating: '4+1D',
    rate: '₹88',
    features: ['Dual-Zone Climate Control', 'Premium Leather', 'State-of-the-Art Safety', 'GPS Tracked'],
    ideal: 'Elite class luxury for VIPs, celebrity transport, corporate events and luxury weddings.',
    color: '#6366F1',
    image: 'https://i.pinimg.com/736x/7f/f5/8f/7ff58fa900f6172d69fa16cb34024da9.jpg'
  },
]

export default function Fleet() {
  return (
    <main>
      <MiniHero
        title="OUR FLEET"
        subtitle="Well-maintained, GPS-tracked vehicles with professional drivers — choose your perfect ride"
        breadcrumb={['Fleet']}
        bgImage="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1200"
      />

      {/* ═══════════════ VEHICLES GRID ═══════════════ */}
      <section className="py-24" style={{ background: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="section-label mb-3">Premium Vehicles</motion.p>
            <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="section-title text-4xl md:text-5xl mb-4">
              Best Taxi Service <span>In Delhi</span>
            </motion.h2>
            <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
              className="gold-divider" />
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
              className="text-sm text-gray-500 mt-5 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>
              We provide the best taxi service in Delhi with well-maintained cabs, reliable drivers, and budget-friendly rates for every journey.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {vehicles.map((v, i) => (
              <motion.div
                key={v.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.1, duration: 0.6 }}
                whileHover={{ y: -10, boxShadow: '0 30px 60px rgba(212,167,60,0.15)' }}
                className="luxury-card overflow-hidden group"
              >
                {/* Vehicle Image */}
                <div className="h-48 relative overflow-hidden">
                  <img
                    src={v.image}
                    alt={v.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    style={{ objectPosition: v.objectPosition || 'center' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                  {/* Badges */}
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase"
                    style={{ background: `${v.color}dd`, color: '#fff', fontFamily: 'Inter, Poppins, sans-serif' }}>
                    {v.type}
                  </span>
                  <div className="absolute bottom-3 right-3 flex gap-2">
                    <span className="px-2 py-1 rounded-full text-[10px] font-bold"
                      style={{ background: 'rgba(212,167,60,0.9)', color: '#0a0a0a', fontFamily: 'Inter, Poppins, sans-serif' }}>
                      <FaUsers className="inline mr-1" />{v.seating}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  {/* Title + Rate */}
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-heading text-lg font-bold text-gray-900 group-hover:text-gold transition-colors">{v.name}</h3>
                    <div className="text-right shrink-0 ml-3">
                      <p className="font-heading text-xl font-black gold-text">{v.rate}/km</p>
                      <p className="text-[10px] text-gray-400 tracking-wider font-semibold" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>Rate</p>
                    </div>
                  </div>

                  <p className="text-xs text-gray-500 leading-relaxed mb-4" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>{v.ideal}</p>

                  {/* Features */}
                  <ul className="grid grid-cols-2 gap-1.5 mb-5">
                    {v.features.map(f => (
                      <li key={f} className="flex items-center gap-1.5 text-xs text-gray-500" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>
                        <FaCheckCircle className="text-gold/60 text-xs shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>

                  {/* Distance info */}
                  <div className="flex items-center gap-2 mb-5">
                    <FaRoad className="text-gold/40 text-xs" />
                    <span className="text-[10px] text-gray-400 tracking-wider uppercase font-semibold" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>Min 250 km/day for outstation</span>
                  </div>

                  {/* CTAs */}
                  <div className="flex gap-2">
                    <Link to={`/book?car=${encodeURIComponent(v.name)}`} className="flex-1 btn-gold py-2.5 rounded-full justify-center" style={{ fontSize: '0.75rem', letterSpacing: '0.5px' }}>
                      Book Now
                    </Link>
                    <a href="tel:+919643199064"
                      className="flex-1 btn-outline py-2.5 rounded-full gap-1.5 justify-center" style={{ fontSize: '0.75rem', letterSpacing: '0.5px' }}>
                      <FaPhoneAlt className="text-[9px]" /> Call
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ CTA ═══════════════ */}
      <section className="py-20 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #D4A73C, #c49535, #B8891F)' }}>
        <div className="absolute inset-0 opacity-[0.08]"
          style={{ backgroundImage: 'repeating-linear-gradient(45deg, #fff 0px, #fff 1px, transparent 0, transparent 60px)' }} />
        <div className="max-w-3xl mx-auto px-4 text-center relative">
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="font-heading text-3xl md:text-4xl font-black text-white mb-3">
            Need a <span style={{ WebkitTextFillColor: 'rgba(255,255,255,0.7)' }}>Custom Quote?</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="text-sm text-white/80 mb-8" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>
            Contact us for bulk bookings, multi-day packages, wedding transport or any special requirements.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/919643199064?text=Hello%20I%20want%20to%20enquire%20about%20your%20fleet.%20Thanks"
              target="_blank" rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 text-[11px] font-bold tracking-[2px] uppercase bg-white text-gray-900 rounded-full hover:-translate-y-1 transition-all duration-300 hover:shadow-lg"
              style={{ fontFamily: 'Inter, Poppins, sans-serif' }}
            >
              <FaWhatsapp className="text-base text-green-600" /> WhatsApp Now
            </a>
            <a href="tel:+919643199064"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 text-[11px] font-bold tracking-[2px] uppercase border-2 border-white text-white rounded-full hover:-translate-y-1 hover:bg-white hover:text-gray-900 transition-all duration-300"
              style={{ fontFamily: 'Inter, Poppins, sans-serif' }}
            >
              <FaPhoneAlt /> +91 96431 99064
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
