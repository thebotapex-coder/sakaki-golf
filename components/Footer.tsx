import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#1c1c1c] text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex flex-col leading-none mb-4">
              <span className="text-[10px] tracking-[0.25em] uppercase text-[#3d5a3e] font-semibold">Sakaki</span>
              <span className="text-2xl font-black tracking-[0.08em] uppercase text-white">Golf</span>
            </div>
            <p className="text-[#8a8a8a] text-sm leading-relaxed">
              Premium golf apparel designed for performance and lifestyle. On the course. Off it.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-[11px] tracking-[0.2em] uppercase font-bold text-[#8a8a8a] mb-4">Shop</h4>
            <ul className="flex flex-col gap-3">
              {['Polos', 'Bottoms', 'Outerwear', 'Headwear', 'Accessories'].map((item) => (
                <li key={item}>
                  <Link href="/shop" className="text-sm text-[#c0bdb8] hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[11px] tracking-[0.2em] uppercase font-bold text-[#8a8a8a] mb-4">Company</h4>
            <ul className="flex flex-col gap-3">
              {[
                { href: '/about', label: 'About Us' },
                { href: '/blog', label: 'Journal' },
                { href: '/practice-planner', label: 'Practice Planner' },
                { href: '/contact', label: 'Contact' },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-[#c0bdb8] hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[11px] tracking-[0.2em] uppercase font-bold text-[#8a8a8a] mb-4">Connect</h4>
            <ul className="flex flex-col gap-3">
              <li><a href="mailto:hello@sakakigolf.com" className="text-sm text-[#c0bdb8] hover:text-white transition-colors">hello@sakakigolf.com</a></li>
              <li><a href="#" className="text-sm text-[#c0bdb8] hover:text-white transition-colors">Instagram</a></li>
              <li><a href="#" className="text-sm text-[#c0bdb8] hover:text-white transition-colors">TikTok</a></li>
              <li><a href="#" className="text-sm text-[#c0bdb8] hover:text-white transition-colors">Pinterest</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#2e2e2e] pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-xs text-[#5a5a5a] tracking-wide">© 2026 Sakaki Golf. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="text-xs text-[#5a5a5a] hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-xs text-[#5a5a5a] hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="text-xs text-[#5a5a5a] hover:text-white transition-colors">Shipping & Returns</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
