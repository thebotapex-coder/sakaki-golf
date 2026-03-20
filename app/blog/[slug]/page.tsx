import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
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

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }))
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = posts.find((p) => p.slug === slug)
  const relatedPosts = posts.filter((p) => p.slug !== slug).slice(0, 2)

  if (!post) {
    return (
      <>
        <Navigation />
        <div className="min-h-screen flex items-center justify-center pt-20">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Post not found</h1>
            <Link href="/blog" className="text-[#3d5a3e] underline">Back to Journal</Link>
          </div>
        </div>
        <Footer />
      </>
    )
  }

  const paragraphs = post.content.split('\n\n').filter(Boolean)

  return (
    <>
      <Navigation />

      {/* Hero */}
      <div className="pt-24 md:pt-28 bg-[#1c1c1c]">
        <div className="container mx-auto px-6 py-12 md:py-16">
          <Link href="/blog" className="inline-flex items-center gap-2 text-[11px] tracking-[0.1em] uppercase text-[#8a8a8a] hover:text-[#d4b896] transition-colors font-semibold mb-8">
            <ArrowLeft size={14} />
            Back to Journal
          </Link>
          <p className="text-[10px] tracking-[0.2em] uppercase text-[#3d5a3e] font-bold mb-4">
            {post.category} · {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
          <h1 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight leading-tight max-w-3xl">
            {post.title}
          </h1>
        </div>
      </div>

      {/* Cover image placeholder */}
      <div className="aspect-[21/9] bg-[#f0ede8] relative max-h-[480px] overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-[11px] tracking-widest uppercase text-[#8a8a8a] font-medium">{post.category}</span>
        </div>
      </div>

      {/* Article body */}
      <article className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6 max-w-2xl">
          <p className="text-lg text-[#5a5a5a] leading-relaxed font-medium mb-8 border-l-4 border-[#3d5a3e] pl-5">
            {post.excerpt}
          </p>
          <div className="space-y-5">
            {paragraphs.map((para, i) => (
              <p key={i} className="text-[#3a3a3a] leading-relaxed text-[1.05rem]">{para}</p>
            ))}
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-[#e2ddd6] flex items-center gap-4 flex-wrap">
            <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#8a8a8a]">Tags</span>
            {['Golf', 'Style', post.category].map((tag) => (
              <span key={tag} className="text-[11px] tracking-[0.08em] uppercase font-semibold bg-[#f0ede8] text-[#5a5a5a] px-3 py-1.5">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-[#f5f0e8] border-t border-[#e2ddd6]">
          <div className="container mx-auto px-6">
            <p className="text-[10px] tracking-[0.25em] uppercase font-bold text-[#8a8a8a] mb-8">More from the Journal</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedPosts.map((related) => (
                <Link key={related.slug} href={`/blog/${related.slug}`} className="group bg-white p-6 border border-[#e2ddd6] hover:border-[#3d5a3e] transition-colors">
                  <p className="text-[10px] tracking-[0.15em] uppercase text-[#8a8a8a] mb-2">
                    {related.category} · {new Date(related.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                  </p>
                  <h3 className="font-bold text-[#1c1c1c] group-hover:text-[#3d5a3e] transition-colors leading-snug mb-2">{related.title}</h3>
                  <p className="text-sm text-[#5a5a5a] leading-relaxed">{related.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Shop CTA */}
      <section className="py-14 bg-[#1c1c1c] text-center">
        <p className="text-[10px] tracking-[0.25em] uppercase text-[#3d5a3e] font-bold mb-3">Sakaki Golf</p>
        <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-4">Ready to Gear Up?</h3>
        <Link href="/shop" className="inline-block bg-white text-[#1c1c1c] text-[12px] font-bold tracking-[0.1em] uppercase px-8 py-3 hover:bg-[#d4b896] transition-colors">
          Shop the Collection →
        </Link>
      </section>

      <Footer />
    </>
  )
}
