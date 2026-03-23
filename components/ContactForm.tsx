'use client'

export default function ContactForm() {
  return (
    <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
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
          <option>Returns &amp; Exchanges</option>
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
  )
}
