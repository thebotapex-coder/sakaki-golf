import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import NewsletterForm from '@/components/NewsletterForm'
import productsData from '@/data/products.json'
import blogData from '@/data/blog-posts.json'

type Product = {
  id: string
  slug: string
  name: string
  price: number
  category: string
  gender: string
  tag: string | null
  description: string
  details: string[]
  colors: string[]
  inStock: boolean
  featured: boolean
}

type BlogPost = {
  slug: string
  title: string
  date: string
  category: string
  excerpt: string
  content: string
}

const featuredProducts = (productsData as Product[]).filter(p => p.featured).slice(0, 4)
const latestPosts = (blogData as BlogPost[]).slice(0, 2)

export default function HomePage() {
  return (
    <>
      <Navigation />

      {/* Hero */}
      <section className="relative min-h-screen flex items-end bg-[#2a3d2b] overflow-hidden">
        {/* Background texture */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2a3d2b] via-[#3d5a3e] to-[#1c2e1d]" />
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}
        />
        {/* Large background text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <span className="text-[18vw] font-black tracking-tight text-white/5 select-none uppercase leading-none">
            SAKAKI
          </span>
        </div>

        <div className="relative container mx-auto px-6 pb-20 pt-40">
          <div className="max-w-3xl">
            <p className="text-[11px] tracking-[0.3em] uppercase text-[#8ab88c] font-semibold mb-6">
              Spring / Summer 2026
            </p>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-[0.95] tracking-tight mb-8 uppercase">
              Play Well.<br />
              <span className="text-[#d4b896]">Look Better.</span>
            </h1>
            <p className="text-[#a8c4aa] text-lg max-w-lg leading-relaxed mb-10">
              Golf clothing built for the modern player. Premium fabrics, considered design, and a fit that works from the first tee to the 19th hole.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/shop"
                className="bg-white text-[#1c1c1c] text-[12px] font-bold tracking-[0.1em] uppercase px-8 py-4 hover:bg-[#d4b896] transition-colors"
              >
                Shop the Collection
              </Link>
              <Link
                href="/about"
                className="border border-white/40 text-white text-[12px] font-bold tracking-[0.1em] uppercase px-8 py-4 hover:border-white hover:bg-white/10 transition-all"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 right-8 flex flex-col items-center gap-2 opacity-40">
          <span className="text-[10px] tracking-[0.2em] uppercase text-white rotate-90 origin-center mb-4">Scroll</span>
          <div className="w-px h-12 bg-white/40" />
        </div>
      </section>

      {/* Category strip */}
      <section className="bg-[#f5f0e8] border-b border-[#e2ddd6]">
        <div className="container mx-auto px-6">
          <div className="flex overflow-x-auto gap-0 -mx-6 px-6 md:mx-0 md:px-0 md:grid md:grid-cols-5">
            {['Polos', 'Bottoms', 'Outerwear', 'Headwear', 'Accessories'].map((cat) => (
              <Link
                key={cat}
                href={`/shop?category=${cat}`}
                className="flex-shrink-0 flex flex-col items-center justify-center py-6 px-8 text-center border-r border-[#e2ddd6] last:border-r-0 hover:bg-[#1c1c1c] hover:text-white group transition-colors"
              >
                <span className="text-[11px] tracking-[0.15em] uppercase font-bold text-inherit transition-colors">{cat}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-[10px] tracking-[0.25em] uppercase text-[#3d5a3e] font-bold mb-2">Featured</p>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight uppercase text-[#1c1c1c]">New Arrivals</h2>
            </div>
            <Link href="/shop" className="hidden md:block text-[12px] tracking-[0.08em] uppercase font-semibold text-[#1c1c1c] border-b border-[#1c1c1c] hover:text-[#3d5a3e] hover:border-[#3d5a3e] transition-colors pb-0.5">
              View All →
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {featuredProducts.map((product) => (
              <Link key={product.id} href={`/shop/${product.slug}`} className="group">
                {/* Product image placeholder */}
                <div className="aspect-[3/4] bg-[#f0ede8] mb-4 overflow-hidden relative">
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                    <div className="w-16 h-16 rounded-full bg-[#d4b896]/40" />
                    <span className="text-[11px] tracking-widest uppercase text-[#8a8a8a] font-medium">{product.category}</span>
                  </div>
                  {product.tag && (
                    <span className="absolute top-3 left-3 bg-[#1c1c1c] text-white text-[9px] tracking-[0.12em] uppercase font-bold px-2 py-1">
                      {product.tag}
                    </span>
                  )}
                  <div className="absolute inset-0 bg-[#3d5a3e]/0 group-hover:bg-[#3d5a3e]/8 transition-colors" />
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.15em] uppercase text-[#8a8a8a] mb-1">{product.category} · {product.gender}</p>
                  <h3 className="text-sm font-semibold text-[#1c1c1c] group-hover:text-[#3d5a3e] transition-colors leading-snug mb-1">{product.name}</h3>
                  <p className="text-sm font-bold text-[#1c1c1c]">${product.price}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="md:hidden text-center mt-8">
            <Link href="/shop" className="inline-block text-[12px] tracking-[0.08em] uppercase font-semibold bg-[#1c1c1c] text-white px-8 py-3 hover:bg-[#3d5a3e] transition-colors">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Brand Statement */}
      <section className="py-20 md:py-32 bg-[#1c1c1c] overflow-hidden relative">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="text-[22vw] font-black text-white/[0.03] tracking-tight uppercase select-none">GOLF</span>
        </div>
        <div className="container mx-auto px-6 relative text-center">
          <p className="text-[11px] tracking-[0.3em] uppercase text-[#3d5a3e] font-semibold mb-6">The Sakaki Philosophy</p>
          <h2 className="text-3xl md:text-5xl font-black text-white leading-tight max-w-3xl mx-auto mb-8 uppercase tracking-tight">
            Clothing That Performs Like Equipment
          </h2>
          <p className="text-[#8a8a8a] text-lg max-w-xl mx-auto leading-relaxed mb-10">
            Every Sakaki piece starts with the swing. Fit, movement, and durability come first — style follows naturally when the fundamentals are right.
          </p>
          <Link href="/about" className="inline-block border border-white/30 text-white text-[12px] font-bold tracking-[0.1em] uppercase px-8 py-4 hover:bg-white hover:text-[#1c1c1c] transition-all">
            Read Our Story
          </Link>
        </div>
      </section>

      {/* Practice Planner CTA */}
      <section className="py-20 md:py-28 bg-[#f5f0e8]">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-[11px] tracking-[0.3em] uppercase text-[#3d5a3e] font-semibold mb-4">New Feature</p>
            <h2 className="text-3xl md:text-4xl font-black text-[#1c1c1c] uppercase tracking-tight mb-6">
              Practice Planner
            </h2>
            <p className="text-[#5a5a5a] text-lg leading-relaxed mb-8">
              Plan your range sessions, track practice goals, and build consistent routines with our free in-app Practice Planner — built for golfers who want to improve.
            </p>
            <Link
              href="/practice-planner"
              className="inline-block bg-[#3d5a3e] text-white text-[12px] font-bold tracking-[0.1em] uppercase px-10 py-4 hover:bg-[#2a3d2b] transition-colors"
            >
              Open Practice Planner →
            </Link>
          </div>
        </div>
      </section>

      {/* Journal Preview */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-[10px] tracking-[0.25em] uppercase text-[#3d5a3e] font-bold mb-2">From the Blog</p>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight uppercase text-[#1c1c1c]">The Journal</h2>
            </div>
            <Link href="/blog" className="hidden md:block text-[12px] tracking-[0.08em] uppercase font-semibold text-[#1c1c1c] border-b border-[#1c1c1c] hover:text-[#3d5a3e] hover:border-[#3d5a3e] transition-colors pb-0.5">
              All Posts →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {latestPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                <div className="aspect-[16/9] bg-[#f0ede8] mb-5 overflow-hidden relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-[10px] tracking-[0.2em] uppercase text-[#8a8a8a] font-medium">{post.category}</span>
                  </div>
                  <div className="absolute inset-0 bg-[#3d5a3e]/0 group-hover:bg-[#3d5a3e]/8 transition-colors" />
                </div>
                <p className="text-[10px] tracking-[0.15em] uppercase text-[#8a8a8a] mb-2">
                  {post.category} · {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </p>
                <h3 className="text-lg font-bold text-[#1c1c1c] group-hover:text-[#3d5a3e] transition-colors leading-snug mb-3">{post.title}</h3>
                <p className="text-sm text-[#5a5a5a] leading-relaxed">{post.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-[#3d5a3e]">
        <div className="container mx-auto px-6 text-center">
          <p className="text-[10px] tracking-[0.25em] uppercase text-[#8ab88c] font-semibold mb-3">Stay in the Loop</p>
          <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight mb-4">
            Join the Sakaki Community
          </h2>
          <p className="text-[#a8c4aa] mb-8 max-w-md mx-auto text-sm">
            New arrivals, exclusive drops, and golf content — straight to your inbox.
          </p>
          <NewsletterForm />
        </div>
      </section>

      <Footer />
    </>
  )
}
