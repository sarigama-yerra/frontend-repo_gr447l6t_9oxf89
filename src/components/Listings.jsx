import { MapPin, BedDouble, Bath, Square } from 'lucide-react'

const properties = [
  {
    id: 1,
    title: 'Skyline Penthouse',
    location: 'Frankfurt, Germany',
    price: '€3,450,000',
    beds: 3,
    baths: 3,
    area: '245 m²',
    image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1920&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Haussmann Elegance',
    location: 'Paris, France',
    price: '€2,980,000',
    beds: 4,
    baths: 2,
    area: '210 m²',
    image: 'https://images.unsplash.com/photo-1684602766513-7d0694cd5bd0?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxMYWtldmlldyUyMFJlc2lkZW5jZXxlbnwwfDB8fHwxNzYzNDU0MzU0fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    id: 3,
    title: 'Lakeview Residence',
    location: 'Zurich, Switzerland',
    price: 'CHF 4,200,000',
    beds: 5,
    baths: 4,
    area: '320 m²',
    image: 'https://images.unsplash.com/photo-1502003148287-a82ef80a6abc?q=80&w=1920&auto=format&fit=crop',
  },
]

export default function Listings() {
  return (
    <section id="listings" className="relative bg-slate-950 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_0%,rgba(14,165,233,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Featured Listings</h2>
            <p className="mt-2 text-slate-300/90">
              A small preview of extraordinary homes available through our network.
            </p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex rounded-xl bg-white text-slate-900 px-5 py-3 font-semibold ring-1 ring-white/20">
            Get Access to Off-Market
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((p) => (
            <article key={p.id} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
              <div className="relative h-56 overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between">
                  <span className="text-white text-lg font-semibold">{p.price}</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-white font-semibold text-lg">{p.title}</h3>
                <div className="mt-1 flex items-center gap-2 text-slate-300/90 text-sm">
                  <MapPin className="h-4 w-4" /> {p.location}
                </div>
                <div className="mt-4 flex items-center gap-4 text-slate-300/90 text-sm">
                  <div className="inline-flex items-center gap-1"><BedDouble className="h-4 w-4" /> {p.beds} bed</div>
                  <div className="inline-flex items-center gap-1"><Bath className="h-4 w-4" /> {p.baths} bath</div>
                  <div className="inline-flex items-center gap-1"><Square className="h-4 w-4" /> {p.area}</div>
                </div>
                <div className="mt-5">
                  <a href="#contact" className="inline-flex items-center rounded-xl bg-white/10 px-4 py-2 text-white ring-1 ring-white/20 hover:bg-white/15 transition">
                    Request Details
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
