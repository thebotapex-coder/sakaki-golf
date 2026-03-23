'use client'

export default function NewsletterForm() {
  return (
    <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
      <input
        type="email"
        placeholder="Your email address"
        className="flex-1 px-5 py-3 bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-white/60 transition-colors"
      />
      <button
        type="submit"
        className="bg-white text-[#1c1c1c] text-[11px] font-bold tracking-[0.1em] uppercase px-8 py-3 hover:bg-[#d4b896] transition-colors whitespace-nowrap"
      >
        Subscribe
      </button>
    </form>
  )
}
