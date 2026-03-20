import Link from 'next/link'
import { ArrowLeft, Check } from 'lucide-react'
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

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }))
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = products.find((p) => p.slug === slug)

  if (!product) {
    return (
      <>
        <Navigation />
        <div className="min-h-screen flex items-center justify-center pt-20">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-[#1c1c1c] mb-4">Product not found</h1>
            <Link href="/shop" className="text-[#3d5a3e] underline">Back to Shop</Link>
          </div>
        </div>
        <Footer />
      </>
    )
  }

  const colorMap: Record<string, string> = {
    Sage: '#3d5a3e', White: '#ffffff', Bone: '#d4b896', Oatmeal: '#d4b896',
    Cream: '#f0e8d8', Sand: '#d4b896', Charcoal: '#3a3a3a', Navy: '#1e2d4a',
    Black: '#1c1c1c', Blush: '#e8b4b0', Tan: '#c4956a', Slate: '#7a8a9a',
  }

  return (
    <>
      <Navigation />

      <div className="min-h-screen bg-white pt-16 md:pt-20">
        <div className="container mx-auto px-6 py-8">
          {/* Breadcrumb */}
          <Link href="/shop" className="inline-flex items-center gap-2 text-[11px] tracking-[0.1em] uppercase text-[#8a8a8a] hover:text-[#3d5a3e] transition-colors font-semibold mb-8">
            <ArrowLeft size={14} />
            Back to Shop
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            {/* Product Images */}
            <div className="space-y-3">
              {/* Main image */}
              <div className="aspect-[3/4] bg-[#f0ede8] relative">
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                  <div className="w-24 h-24 rounded-full bg-[#d4b896]/50" />
                  <span className="text-[12px] tracking-widest uppercase text-[#8a8a8a] font-medium">{product.category}</span>
                </div>
                {product.tag && (
                  <span className="absolute top-4 left-4 bg-[#1c1c1c] text-white text-[9px] tracking-[0.12em] uppercase font-bold px-2.5 py-1.5">
                    {product.tag}
                  </span>
                )}
              </div>
              {/* Thumbnail row */}
              <div className="grid grid-cols-3 gap-3">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="aspect-square bg-[#f5f0e8] cursor-pointer hover:opacity-80 transition-opacity" />
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="flex flex-col">
              <p className="text-[10px] tracking-[0.2em] uppercase text-[#8a8a8a] font-semibold mb-2">
                {product.category} · {product.gender}
              </p>
              <h1 className="text-2xl md:text-3xl font-black text-[#1c1c1c] uppercase tracking-tight mb-3">
                {product.name}
              </h1>
              <p className="text-2xl font-bold text-[#1c1c1c] mb-6">${product.price}</p>

              {/* Colors */}
              <div className="mb-6">
                <p className="text-[11px] tracking-[0.15em] uppercase font-bold text-[#1c1c1c] mb-3">
                  Colour: <span className="font-normal text-[#5a5a5a]">{product.colors[0]}</span>
                </p>
                <div className="flex gap-2">
                  {product.colors.map((color, i) => (
                    <button
                      key={color}
                      className={`w-8 h-8 rounded-full transition-all ${i === 0 ? 'ring-2 ring-offset-2 ring-[#1c1c1c]' : 'ring-1 ring-[#e2ddd6] hover:ring-[#1c1c1c]'}`}
                      style={{ background: colorMap[color] || '#888' }}
                      title={color}
                    />
                  ))}
                </div>
              </div>

              {/* Sizes */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-[11px] tracking-[0.15em] uppercase font-bold text-[#1c1c1c]">Size</p>
                  <button className="text-[11px] tracking-[0.08em] uppercase text-[#3d5a3e] font-semibold underline">Size Guide</button>
                </div>
                <div className="grid grid-cols-5 gap-2">
                  {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size, i) => (
                    <button
                      key={size}
                      className={`py-2.5 text-[11px] font-bold tracking-wider uppercase border transition-colors ${
                        i === 1
                          ? 'bg-[#1c1c1c] text-white border-[#1c1c1c]'
                          : 'border-[#e2ddd6] text-[#1c1c1c] hover:border-[#1c1c1c]'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Add to Cart */}
              <div className="flex gap-3 mb-8">
                <button className="flex-1 bg-[#1c1c1c] text-white text-[12px] font-bold tracking-[0.1em] uppercase py-4 hover:bg-[#3d5a3e] transition-colors">
                  Add to Cart — ${product.price}
                </button>
                <button className="border border-[#e2ddd6] px-4 hover:border-[#1c1c1c] transition-colors">
                  ♡
                </button>
              </div>

              {/* Description */}
              <div className="border-t border-[#e2ddd6] pt-6 mb-6">
                <p className="text-sm text-[#5a5a5a] leading-relaxed">{product.description}</p>
              </div>

              {/* Details */}
              <div className="border-t border-[#e2ddd6] pt-6">
                <p className="text-[11px] tracking-[0.15em] uppercase font-bold text-[#1c1c1c] mb-4">Product Details</p>
                <ul className="flex flex-col gap-2">
                  {product.details.map((detail) => (
                    <li key={detail} className="flex items-center gap-2 text-sm text-[#5a5a5a]">
                      <Check size={13} className="text-[#3d5a3e] flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Shipping note */}
              <div className="mt-6 bg-[#f5f0e8] px-5 py-4 text-[12px] text-[#5a5a5a] leading-relaxed">
                Free shipping on orders over $150. Returns accepted within 30 days of purchase.
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
