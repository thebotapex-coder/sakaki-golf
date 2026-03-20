'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ShoppingBag } from 'lucide-react'

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { href: '/shop', label: 'Shop' },
    { href: '/about', label: 'About' },
    { href: '/blog', label: 'Journal' },
    { href: '/practice-planner', label: 'Practice Planner' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm border-b border-[#e2ddd6] shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none group">
          <span className="text-[11px] tracking-[0.25em] uppercase text-[#3d5a3e] font-semibold">Sakaki</span>
          <span className="text-xl font-black tracking-[0.08em] uppercase text-[#1c1c1c]">Golf</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[13px] font-medium tracking-[0.05em] uppercase text-[#1c1c1c] hover:text-[#3d5a3e] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-4">
          <button className="hidden md:flex items-center gap-2 bg-[#1c1c1c] text-white text-[12px] font-semibold tracking-[0.06em] uppercase px-5 py-2.5 hover:bg-[#3d5a3e] transition-colors">
            <ShoppingBag size={14} />
            Cart (0)
          </button>
          <button
            className="md:hidden text-[#1c1c1c]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-[#e2ddd6] px-6 py-6 flex flex-col gap-5">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[14px] font-semibold tracking-[0.06em] uppercase text-[#1c1c1c] hover:text-[#3d5a3e] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <button className="mt-2 flex items-center gap-2 bg-[#1c1c1c] text-white text-[12px] font-semibold tracking-[0.06em] uppercase px-5 py-3 w-fit hover:bg-[#3d5a3e] transition-colors">
            <ShoppingBag size={14} />
            Cart (0)
          </button>
        </div>
      )}
    </header>
  )
}
