import { useState, useEffect } from 'react'
import { Menu, X, ShoppingBag } from 'lucide-react'

export default function Navbar({ accentColor = '#C9A445', ctaUrl = '#buy' }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-dudley-navy/95 backdrop-blur-md shadow-lg py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container-pad flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 shrink-0">
          <img
            src="/assets/New Dudley Logo Med.png"
            alt="Dudley Beauty"
            className="h-9 md:h-10 object-contain"
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-white/80">
          <a href="#benefits" className="hover:text-white transition-colors">Benefits</a>
          <a href="#ingredients" className="hover:text-white transition-colors">Ingredients</a>
          <a href="#reviews" className="hover:text-white transition-colors">Reviews</a>
          <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <a
            href={ctaUrl}
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-dudley-navy transition-all duration-200 hover:brightness-110"
            style={{ background: `linear-gradient(135deg, ${accentColor}, #DDB95A)` }}
          >
            <ShoppingBag size={15} />
            Shop Now
          </a>
          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-white p-1"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-dudley-navy/97 backdrop-blur-md border-t border-white/10 px-5 py-6 flex flex-col gap-5">
          <a href="#benefits" className="text-white/80 hover:text-white text-base font-medium" onClick={() => setOpen(false)}>Benefits</a>
          <a href="#ingredients" className="text-white/80 hover:text-white text-base font-medium" onClick={() => setOpen(false)}>Ingredients</a>
          <a href="#reviews" className="text-white/80 hover:text-white text-base font-medium" onClick={() => setOpen(false)}>Reviews</a>
          <a href="#faq" className="text-white/80 hover:text-white text-base font-medium" onClick={() => setOpen(false)}>FAQ</a>
          <a
            href={ctaUrl}
            className="btn-primary text-center mt-2"
            onClick={() => setOpen(false)}
          >
            <ShoppingBag size={16} />
            Shop Now — Use Code SPRING2026
          </a>
        </div>
      )}
    </header>
  )
}
