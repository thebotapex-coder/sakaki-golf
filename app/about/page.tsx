import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function AboutPage() {
  const values = [
    { title: 'Performance First', desc: 'Every pattern is tested through a full swing. Fabric, fit, and construction have to earn their place.' },
    { title: 'Considered Design', desc: 'No logos for the sake of logos. No colour for the sake of colour. Everything has a reason.' },
    { title: 'Built to Last', desc: "We'd rather you buy one great polo every two years than three average ones annually. Quality over volume." },
    { title: 'On & Off the Course', desc: 'Golf is part of a lifestyle. Our clothes should move with you through the whole day, not just the round.' },
  ]

  return (
    <>
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-[#1c1c1c] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1c1c1c] to-[#2a3d2b]" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="text-[20vw] font-black text-white/[0.03] tracking-tight uppercase select-none">US</span>
        </div>
        <div className="container mx-auto px-6 relative">
          <p className="text-[11px] tracking-[0.3em] uppercase text-[#3d5a3e] font-semibold mb-4">Our Story</p>
          <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tight leading-none mb-6">
            About<br /><span className="text-[#d4b896]">Sakaki Golf</span>
          </h1>
          <p className="text-[#8a8a8a] text-lg max-w-xl leading-relaxed">
            Built by golfers who wanted better clothes. Still building.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[10px] tracking-[0.25em] uppercase text-[#3d5a3e] font-bold mb-4">Where It Started</p>
              <h2 className="text-3xl md:text-4xl font-black text-[#1c1c1c] uppercase tracking-tight mb-6">
                Frustrated Golfers Make the Best Designers
              </h2>
              <div className="space-y-4 text-[#5a5a5a] leading-relaxed">
                <p>
                  Sakaki Golf started with a simple observation: golf clothing was either stiff and traditional or loud and oversized. Neither felt right. We wanted something that could move with a modern swing and hold up across a full day — on the course and after.
                </p>
                <p>
                  We spent two years testing fabrics, refining patterns, and obsessing over details most brands overlook: collar roll, hem length under a full backswing, waistband comfort after four hours in the sun. The result is a line we're proud to wear ourselves — which is still the only standard that matters to us.
                </p>
                <p>
                  Sakaki is named for the sacred tree in Japanese culture — an evergreen associated with clarity, focus, and ceremony. Qualities that translate well to golf.
                </p>
              </div>
            </div>
            <div className="aspect-[4/5] bg-[#f0ede8] relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-[#3d5a3e]/20 mx-auto mb-4" />
                  <span className="text-[11px] tracking-widest uppercase text-[#8a8a8a] font-medium">Brand Image</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#f5f0e8]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[10px] tracking-[0.25em] uppercase text-[#3d5a3e] font-bold mb-3">What We Stand For</p>
            <h2 className="text-3xl md:text-4xl font-black text-[#1c1c1c] uppercase tracking-tight">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v) => (
              <div key={v.title} className="bg-white p-8 border border-[#e2ddd6]">
                <div className="w-8 h-1 bg-[#3d5a3e] mb-6" />
                <h3 className="text-[13px] font-black tracking-[0.08em] uppercase text-[#1c1c1c] mb-3">{v.title}</h3>
                <p className="text-sm text-[#5a5a5a] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-[#1c1c1c]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { num: '2 yrs', label: 'In Development' },
              { num: '8+', label: 'Fabric Iterations' },
              { num: '100%', label: 'Swing Tested' },
              { num: '∞', label: 'Holes Ahead' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl md:text-5xl font-black text-[#d4b896] mb-2">{stat.num}</p>
                <p className="text-[11px] tracking-[0.15em] uppercase text-[#8a8a8a] font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white text-center">
        <div className="container mx-auto px-6 max-w-xl">
          <h2 className="text-3xl font-black text-[#1c1c1c] uppercase tracking-tight mb-4">Ready to Play?</h2>
          <p className="text-[#5a5a5a] mb-8 leading-relaxed">Explore the collection and find your fit.</p>
          <Link href="/shop" className="inline-block bg-[#1c1c1c] text-white text-[12px] font-bold tracking-[0.1em] uppercase px-10 py-4 hover:bg-[#3d5a3e] transition-colors">
            Shop the Collection →
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}
