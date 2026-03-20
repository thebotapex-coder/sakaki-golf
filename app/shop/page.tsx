import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import productsData from '@/data/products.json'

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

const products = productsData as Product[]
const categories = ['All', 'Polos', 'Bottoms', 'Outerwear', 'Headwear', 'Accessories']

export default function ShopPage() {
  return (
    <>
      <Navigation />

      {/* Page Header */}
      <div className="pt-24 pb-10 bg-[#f5f0e8] border-b border-[#e2ddd6]">
        <div className="container mx-auto px-6">
          <p className="text-[10px] tracking-[0.25em] uppercase text-[#3d5a3e] font-bold mb-2">Spring / Summer 2026</p>
          <h1 className="text-4xl md:text-5xl font-black text-[#1c1c1c] uppercase tracking-tight">Shop All</h1>
        </div>
      </div>

      {/* Category Filter */}
      <div className="sticky top-16 md:top-20 z-40 bg-white border-b border-[#e2ddd6] shadow-sm">
        <div className="container mx-auto px-6">
          <div className="flex overflow-x-auto gap-0 -mx-6 px-6 md:mx-0 md:px-0">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`flex-shrink-0 px-5 py-4 text-[11px] tracking-[0.12em] uppercase font-bold border-b-2 transition-colors ${
                  cat === 'All'
                    ? 'border-[#1c1c1c] text-[#1c1c1c]'
                    : 'border-transparent text-[#8a8a8a] hover:text-[#1c1c1c]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <section className="py-12 md:py-16 bg-white min-h-[60vh]">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <p className="text-sm text-[#8a8a8a]">{products.length} products</p>
            <select className="text-[11px] tracking-[0.08em] uppercase font-semibold border border-[#e2ddd6] px-4 py-2 bg-white text-[#1c1c1c] focus:outline-none focus:border-[#3d5a3e]">
              <option>Sort: Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest</option>
            </select>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {products.map((product) => (
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
                  {/* Color swatches */}
                  <div className="absolute bottom-3 left-3 flex gap-1">
                    {product.colors.slice(0, 3).map((color) => (
                      <div
                        key={color}
                        className="w-3 h-3 rounded-full border border-white/60"
                        style={{
                          background: color === 'Sage' ? '#3d5a3e' : color === 'White' ? '#ffffff' : color === 'Bone' || color === 'Oatmeal' || color === 'Cream' || color === 'Sand' ? '#d4b896' : color === 'Charcoal' ? '#3a3a3a' : color === 'Navy' ? '#1e2d4a' : color === 'Black' ? '#1c1c1c' : color === 'Blush' ? '#e8b4b0' : color === 'Tan' ? '#c4956a' : '#888',
                          boxShadow: '0 0 0 1px rgba(0,0,0,0.1)'
                        }}
                        title={color}
                      />
                    ))}
                  </div>
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
        </div>
      </section>

      <Footer />
    </>
  )
}
