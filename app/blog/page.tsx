import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import blogData from '@/data/blog-posts.json'

type BlogPost = {
  slug: string
  title: string
  date: string
  category: string
  excerpt: string
  content: string
}

const posts = blogData as BlogPost[]

export default function BlogPage() {
  const [featured, ...rest] = posts

  return (
    <>
      <Navigation />

      {/* Header */}
      <div className="pt-32 pb-12 bg-[#f5f0e8] border-b border-[#e2ddd6]">
        <div className="container mx-auto px-6">
          <p className="text-[10px] tracking-[0.25em] uppercase text-[#3d5a3e] font-bold mb-2">Tips, Style & Golf</p>
          <h1 className="text-4xl md:text-5xl font-black text-[#1c1c1c] uppercase tracking-tight">The Journal</h1>
        </div>
      </div>

      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6">

          {/* Featured post */}
          {featured && (
            <Link href={`/blog/${featured.slug}`} className="group block mb-16 md:mb-20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="aspect-[16/10] bg-[#f0ede8] relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-[11px] tracking-widest uppercase text-[#8a8a8a] font-medium">{featured.category}</span>
                  </div>
                  <div className="absolute inset-0 bg-[#3d5a3e]/0 group-hover:bg-[#3d5a3e]/8 transition-colors" />
                  <span className="absolute top-4 left-4 bg-[#1c1c1c] text-white text-[9px] tracking-[0.12em] uppercase font-bold px-2.5 py-1.5">
                    Featured
                  </span>
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-[#8a8a8a] font-semibold mb-3">
                    {featured.category} · {new Date(featured.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </p>
                  <h2 className="text-2xl md:text-3xl font-black text-[#1c1c1c] group-hover:text-[#3d5a3e] transition-colors uppercase tracking-tight mb-4 leading-tight">
                    {featured.title}
                  </h2>
                  <p className="text-[#5a5a5a] leading-relaxed mb-6">{featured.excerpt}</p>
                  <span className="text-[11px] tracking-[0.1em] uppercase font-bold text-[#1c1c1c] border-b border-[#1c1c1c] group-hover:text-[#3d5a3e] group-hover:border-[#3d5a3e] transition-colors pb-0.5">
                    Read Article →
                  </span>
                </div>
              </div>
            </Link>
          )}

          {/* Divider */}
          {rest.length > 0 && (
            <div className="border-t border-[#e2ddd6] pt-16">
              <p className="text-[10px] tracking-[0.25em] uppercase text-[#8a8a8a] font-bold mb-10">More from the Journal</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {rest.map((post) => (
                  <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                    <div className="aspect-[16/10] bg-[#f0ede8] mb-4 relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-[11px] tracking-widest uppercase text-[#8a8a8a] font-medium">{post.category}</span>
                      </div>
                      <div className="absolute inset-0 bg-[#3d5a3e]/0 group-hover:bg-[#3d5a3e]/8 transition-colors" />
                    </div>
                    <p className="text-[10px] tracking-[0.15em] uppercase text-[#8a8a8a] mb-2">
                      {post.category} · {new Date(post.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                    </p>
                    <h3 className="font-bold text-[#1c1c1c] group-hover:text-[#3d5a3e] transition-colors leading-snug mb-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-[#5a5a5a] leading-relaxed">{post.excerpt}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  )
}
