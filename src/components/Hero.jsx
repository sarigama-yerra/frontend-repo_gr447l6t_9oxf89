import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/1VHYoewWfi45VYZ5/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/40 to-slate-900/90 pointer-events-none"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-36 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-white ring-1 ring-white/20">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Luxury Real Estate, Curated
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            Contemporary homes with timeless character
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-slate-200/90">
            We connect discerning buyers with extraordinary properties across Europe. Private showings, architectural insights, and concierge-level service from first viewing to final keys.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#listings" className="inline-flex justify-center rounded-xl bg-white text-slate-900 px-5 py-3 font-semibold shadow-lg shadow-slate-900/20 hover:shadow-slate-900/30 transition ring-1 ring-white/20">
              Explore Listings
            </a>
            <a href="#contact" className="inline-flex justify-center rounded-xl bg-white/10 text-white px-5 py-3 font-semibold backdrop-blur ring-1 ring-white/20 hover:bg-white/15 transition">
              Book a Private Tour
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
