import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import MiniHero from '../components/MiniHero/MiniHero'
import { FaCheckCircle, FaPhoneAlt, FaWhatsapp, FaArrowRight, FaMapMarkerAlt, FaClock, FaRoad } from 'react-icons/fa'
import { HiLocationMarker } from 'react-icons/hi'

const packages = [
  {
    from: 'Delhi', to: 'Agra',
    desc: 'Visit the iconic Taj Mahal, Agra Fort and enjoy a comfortable same-day or multi-day tour.',
    highlights: ['Taj Mahal', 'Agra Fort', 'Fatehpur Sikri', 'Mehtab Bagh'],
    dist: '~230', time: '3–4 hrs', duration: 'Same Day / 2 Days',
    color: 'rgba(212,167,60,0.12)',
    border: 'rgba(212,167,60,0.3)',
    tag: 'Popular',
  },
  {
    from: 'Delhi', to: 'Jaipur',
    desc: 'Explore forts, palaces, and vibrant culture with a smooth and well-planned Jaipur tour.',
    highlights: ['Amber Fort', 'Hawa Mahal', 'City Palace', 'Jantar Mantar'],
    dist: '~270', time: '4–5 hrs', duration: '1–2 Days',
    color: 'rgba(59,130,246,0.08)',
    border: 'rgba(59,130,246,0.25)',
    tag: 'Most Booked',
  },
  {
    from: 'Delhi', to: 'Rishikesh',
    desc: 'Enjoy a peaceful journey to Rishikesh with scenic views, river ghats, and spiritual attractions.',
    highlights: ['Laxman Jhula', 'River Rafting', 'Ganga Ghat', 'Triveni Ghat'],
    dist: '~240', time: '4–5 hrs', duration: '1–2 Days',
    color: 'rgba(16,185,129,0.08)',
    border: 'rgba(16,185,129,0.25)',
    tag: 'Adventure',
  },
  {
    from: 'Delhi', to: 'Haridwar',
    desc: 'Experience a peaceful journey with holy ghats, Ganga Aarti, and spiritual landmarks.',
    highlights: ['Har ki Pauri', 'Ganga Aarti', 'Mansa Devi Temple', 'Chandi Devi'],
    dist: '~215', time: '3–4 hrs', duration: '1–2 Days',
    color: 'rgba(245,158,11,0.08)',
    border: 'rgba(245,158,11,0.25)',
    tag: 'Spiritual',
  },
  {
    from: 'Delhi', to: 'Mathura & Vrindavan',
    desc: 'Visit the sacred city of Lord Krishna with Mathura and Vrindavan temples on same day.',
    highlights: ['Krishna Janmabhoomi', 'Vrindavan ISKCON', 'Banke Bihari', 'Prem Mandir'],
    dist: '~165', time: '2.5–3 hrs', duration: 'Same Day / 1 Day',
    color: 'rgba(139,92,246,0.08)',
    border: 'rgba(139,92,246,0.25)',
    tag: 'Spiritual',
  },
  {
    from: 'Delhi', to: 'Manali',
    desc: 'Experience snow-capped mountains, adventure activities, and a comfortable long-distance journey.',
    highlights: ['Rohtang Pass', 'Solang Valley', 'Hadimba Temple', 'Mall Road'],
    dist: '~540', time: '10–12 hrs', duration: '3–4 Days',
    color: 'rgba(236,72,153,0.08)',
    border: 'rgba(236,72,153,0.25)',
    tag: 'Hill Station',
  },
  {
    from: 'Delhi', to: 'Mussoorie',
    desc: 'Enjoy a scenic hill station journey with pleasant weather, mountain views, and a relaxing trip.',
    highlights: ['Mall Road', 'Kempty Falls', 'Lal Tibba', 'Camel Back Road'],
    dist: '~300', time: '5–6 hrs', duration: '1–2 Days',
    color: 'rgba(6,182,212,0.08)',
    border: 'rgba(6,182,212,0.25)',
    tag: 'Hill Station',
  },
  {
    from: 'Delhi', to: 'Khatu Shyam',
    desc: 'Plan a comfortable religious trip to Khatu Shyam Ji for a peaceful and hassle-free darshan.',
    highlights: ['Khatu Shyam Temple', 'Salasar Balaji', 'Lohargal Kund', 'Night Darshan'],
    dist: '~320', time: '5–6 hrs', duration: '1–2 Days',
    color: 'rgba(34,197,94,0.08)',
    border: 'rgba(34,197,94,0.25)',
    tag: 'Pilgrimage',
  },
  {
    from: 'Delhi', to: 'Dehradun',
    desc: 'A refreshing trip to Uttarakhand\'s capital with forest parks, waterfalls and pleasant climate.',
    highlights: ['Robber\'s Cave', 'Sahastradhara', 'Forest Research Institute', 'Tapkeshwar Temple'],
    dist: '~295', time: '5–6 hrs', duration: '1–2 Days',
    color: 'rgba(251,191,36,0.08)',
    border: 'rgba(251,191,36,0.25)',
    tag: 'Nature',
  },
  {
    from: 'Delhi', to: 'Chandigarh',
    desc: 'Visit the beautifully planned city of Chandigarh — Rock Garden, Rose Garden and more.',
    highlights: ['Rock Garden', 'Rose Garden', 'Sukhna Lake', 'Elante Mall'],
    dist: '~250', time: '4–5 hrs', duration: '1–2 Days',
    color: 'rgba(168,85,247,0.08)',
    border: 'rgba(168,85,247,0.25)',
    tag: 'City Tour',
  },
  {
    from: 'Delhi', to: 'Shimla',
    desc: 'Drive to the queen of hill stations for a perfect getaway with scenic mountain landscapes.',
    highlights: ['Mall Road', 'Christ Church', 'Jakhoo Temple', 'Kufri'],
    dist: '~345', time: '6–7 hrs', duration: '2–3 Days',
    color: 'rgba(20,184,166,0.08)',
    border: 'rgba(20,184,166,0.25)',
    tag: 'Hill Station',
  },
  {
    from: 'Delhi', to: 'Amritsar',
    desc: 'A spiritual and cultural journey to the Golden Temple and Wagah Border in Punjab.',
    highlights: ['Golden Temple', 'Wagah Border', 'Jallianwala Bagh', 'Durgiana Temple'],
    dist: '~450', time: '7–8 hrs', duration: '1–2 Days',
    color: 'rgba(245,101,57,0.08)',
    border: 'rgba(245,101,57,0.25)',
    tag: 'Spiritual',
  },
]

export default function Pricing() {
  return (
    <main>
      <MiniHero
        title="TOUR PACKAGES"
        subtitle="Discover India's most loved destinations — comfortable rides, fixed pricing, professional drivers"
        breadcrumb={['Packages']}
        bgImage="https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?q=80&w=1200"
      />

      {/* ═══════════════ PACKAGES GRID ═══════════════ */}
      <section className="py-24" style={{ background: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="section-label mb-3">Outstation Taxi</motion.p>
            <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="section-title text-4xl md:text-5xl mb-4">
              Popular Tour <span>Packages</span>
            </motion.h2>
            <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
              className="gold-divider" />
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
              className="text-sm text-gray-500 mt-5 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>
              Discover India's most loved tourist destinations with our premium outstation taxi services. Comfortable rides, fixed pricing, and professional drivers for a stress-free journey.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.map((pkg, i) => (
              <motion.div
                key={`${pkg.from}-${pkg.to}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.1, duration: 0.6 }}
                whileHover={{ y: -10, boxShadow: '0 30px 60px rgba(212,167,60,0.15)' }}
                className="luxury-card overflow-hidden group cursor-default"
                style={{ border: `1px solid ${pkg.border}` }}
              >
                {/* Top band */}
                <div className="h-1.5 w-full" style={{ background: 'linear-gradient(90deg, #D4A73C, #F0D060)' }} />

                <div className="p-7">
                  {/* Tag */}
                  <span className="gold-badge mb-4 inline-block">{pkg.tag}</span>

                  {/* Route */}
                  <div className="flex items-start gap-2 mb-4">
                    <HiLocationMarker className="text-gold text-xl mt-0.5 shrink-0" />
                    <div>
                      <p className="text-[10px] text-gray-400 tracking-widest uppercase font-semibold" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>{pkg.from}</p>
                      <h3 className="font-heading text-2xl font-bold text-gray-900 group-hover:text-gold transition-colors">
                        To {pkg.to}
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm text-gray-500 leading-relaxed mb-5" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>{pkg.desc}</p>

                  {/* Meta chips */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    <span className="flex items-center gap-1 text-[10px] text-gray-500 px-3 py-1 rounded-full font-semibold"
                      style={{ background: 'rgba(212,167,60,0.08)', border: '1px solid rgba(212,167,60,0.2)', fontFamily: 'Inter, Poppins, sans-serif' }}>
                      <FaMapMarkerAlt className="text-gold/60 text-[9px]" /> {pkg.duration}
                    </span>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-6">
                    {pkg.highlights.map(h => (
                      <li key={h} className="flex items-center gap-2.5 text-xs text-gray-500" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>
                        <FaCheckCircle className="text-gold/60 text-xs shrink-0" /> {h}
                      </li>
                    ))}
                  </ul>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <a href={`https://wa.me/919643199064?text=Hello%20I%20want%20to%20book%20${encodeURIComponent(`Delhi to ${pkg.to}`)}.%20Please%20share%20details.%20Thanks`}
                      target="_blank" rel="noreferrer"
                      className="flex-1 btn-gold py-2.5 rounded-full justify-center gap-1.5" style={{ fontSize: '0.75rem', letterSpacing: '0.5px' }}>
                      Book Now <FaArrowRight />
                    </a>
                    <a href="tel:+919643199064"
                      className="flex-1 btn-outline py-2.5 rounded-full gap-1.5 justify-center" style={{ fontSize: '0.75rem', letterSpacing: '0.5px' }}>
                      <FaPhoneAlt className="text-[9px]" /> Call Now
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ BOOKING INFO ═══════════════ */}
      <section className="py-16 relative" style={{ background: '#f8fafc' }}>
        <div className="h-px w-full absolute top-0" style={{ background: 'linear-gradient(90deg,transparent,rgba(212,167,60,0.25),transparent)' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'How to Book',
                steps: [
                  'Call or WhatsApp us your pickup location & destination',
                  'Select your preferred vehicle from our fleet',
                  "Confirm date & time — we'll send a confirmation",
                  'Our driver arrives on time for a comfortable journey',
                ],
              },
              {
                title: "What's Included",
                steps: [
                  'Driver allowance & toll taxes',
                  'State permits for outstation trips',
                  'GST invoice on request',
                  '24/7 customer support throughout your journey',
                ],
              },
              {
                title: 'Why Book With Us',
                steps: [
                  'Fixed pricing — no surge or hidden charges',
                  'Police-verified, experienced drivers',
                  'Well-maintained, GPS-tracked vehicles',
                  'Flexible cancellation policy',
                ],
              },
            ].map((section, i) => (
              <motion.div key={section.title}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}
                className="info-card group"
              >
                <h3 className="font-heading text-lg font-bold text-gray-900 mb-5">{section.title}</h3>
                <ul className="space-y-3">
                  {section.steps.map((step, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-gray-500" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>
                      <span className="font-heading text-gold font-bold text-xs mt-0.5 shrink-0">{String(j + 1).padStart(2, '0')}</span>
                      {step}
                    </li>
                  ))}
                </ul>
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
            Book Your <span style={{ color: 'rgba(255,255,255,0.75)' }}>Tour Now!</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="text-sm text-white/80 mb-8" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>
            Call us or WhatsApp for custom tour packages, bulk bookings or any special travel requirements.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/919643199064?text=Hello%20I%20want%20to%20book%20a%20tour%20package.%20Thanks"
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
