import { Building2, ShieldCheck, KeyRound, Globe2 } from 'lucide-react'

export default function Features() {
  const items = [
    {
      icon: Building2,
      title: 'Architectural Icons',
      desc: 'Curated selection of residences in landmark buildings and design-forward developments.',
    },
    {
      icon: ShieldCheck,
      title: 'Discretion & Trust',
      desc: 'Private viewings, NDAs, and confidential negotiation handled by senior partners only.',
    },
    {
      icon: KeyRound,
      title: 'Turnkey Service',
      desc: 'From mortgage advisory to interior curation — everything arranged end-to-end.',
    },
    {
      icon: Globe2,
      title: 'International Reach',
      desc: 'Local expertise across Germany, France, and Switzerland with multilingual agents.',
    },
  ]

  return (
    <section id="services" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(59,130,246,0.15),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 text-white hover:bg-white/10 transition">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 text-white ring-1 ring-white/20 shadow-md">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-slate-300/90 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
