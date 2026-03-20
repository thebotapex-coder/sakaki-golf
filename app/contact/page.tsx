import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function ContactPage() {
  return (
    <>
      <Navigation />

      {/* Header */}
      <div className="pt-32 pb-12 bg-[#f5f0e8] border-b border-[#e2ddd6]">
        <div className="container mx-auto px-6">
          <p className="text-[10px] tracking-[0.25em] uppercase text-[#3d5a3e] font-bold mb-2">Get in Touch</p>
          <h1 className="text-4xl md:text-5xl font-black text-[#1c1c1c] uppercase tracking-tight">Contact Us</h1>
        </div>
      </div>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-4xl">

            {/* Info */}
            <div>
              <h2 className="text-xl font-black text-[#1c1c1c] uppercase tracking-tight mb-6">Let&apos;s Talk</h2>
              <p className="text-[#5a5a5a] leading-relaxed mb-10">
                Questions about sizing, orders, wholesale inquiries, or just want to talk golf? We&apos;re a small team and we actually read our emails.
              </p>

              <div className="space-y-8">
                <div>
                  <p className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#1c1c1c] mb-1">Email</p>
                  <a href="mailto:hello@sakakigolf.com" className="text-[#3d5a3e] font-semibold hover:underline">hello@sakakigolf.com</a>
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#1c1c1c] mb-1">Response Time</p>
                  <p className="text-[#5a5a5a] text-sm">We aim to respond within 1–2 business days.</p>
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#1c1c1c] mb-1">Returns & Orders</p>
                  <p className="text-[#5a5a5a] text-sm">30-day return window on all full-priced items. Include your order number in your message.</p>
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#1c1c1c] mb-1">Wholesale & Partnerships</p>
                  <p className="text-[#5a5a5a] text-sm">Interested in carrying Sakaki Golf? Reach out with your details and we&apos;ll be in touch.</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div>
              <form className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] tracking-[0.15em] uppercase font-bold text-[#1c1c1c] mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full border border-[#e2ddd6] px-4 py-3 text-sm text-[#1c1c1c] focus:outline-none focus:border-[#3d5a3e] transition-colors bg-white placeholder-[#c0bdb8]"
                      placeholder="First"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] tracking-[0.15em] uppercase font-bold text-[#1c1c1c] mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full border border-[#e2ddd6] px-4 py-3 text-sm text-[#1c1c1c] focus:outline-none focus:border-[#3d5a3e] transition-colors bg-white placeholder-[#c0bdb8]"
                      placeholder="Last"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] tracking-[0.15em] uppercase font-bold text-[#1c1c1c] mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full border border-[#e2ddd6] px-4 py-3 text-sm text-[#1c1c1c] focus:outline-none focus:border-[#3d5a3e] transition-colors bg-white placeholder-[#c0bdb8]"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label className="block text-[10px] tracking-[0.15em] uppercase font-bold text-[#1c1c1c] mb-2">Subject</label>
                  <select className="w-full border border-[#e2ddd6] px-4 py-3 text-sm text-[#1c1c1c] focus:outline-none focus:border-[#3d5a3e] transition-colors bg-white appearance-none">
                    <option value="">Select a topic...</option>
                    <option>Order / Shipping</option>
                    <option>Returns & Exchanges</option>
                    <option>Product Question</option>
                    <option>Wholesale Inquiry</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] tracking-[0.15em] uppercase font-bold text-[#1c1c1c] mb-2">Message</label>
                  <textarea
                    rows={5}
                    className="w-full border border-[#e2ddd6] px-4 py-3 text-sm text-[#1c1c1c] focus:outline-none focus:border-[#3d5a3e] transition-colors bg-white placeholder-[#c0bdb8] resize-none"
                    placeholder="Tell us how we can help..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#1c1c1c] text-white text-[12px] font-bold tracking-[0.1em] uppercase py-4 hover:bg-[#3d5a3e] transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
