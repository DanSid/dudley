import { Instagram, Facebook, Youtube, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-dudley-navy-dark text-white">
      {/* Top strip */}
      <div className="border-b border-white/10">
        <div className="container-pad py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <img
            src="/assets/New Dudley Logo Med.png"
            alt="Dudley Beauty"
            className="h-10 object-contain brightness-0 invert opacity-90"
          />
          <div className="flex items-center gap-4">
            <a href="https://www.instagram.com/dudleybeautyco/" target="_blank" rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-dudley-gold hover:text-dudley-gold transition-all duration-200">
              <Instagram size={17} />
            </a>
            <a href="https://www.facebook.com/DudleyProducts" target="_blank" rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-dudley-gold hover:text-dudley-gold transition-all duration-200">
              <Facebook size={17} />
            </a>
            <a href="https://www.youtube.com/@dudleybeauty" target="_blank" rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-dudley-gold hover:text-dudley-gold transition-all duration-200">
              <Youtube size={17} />
            </a>
          </div>
        </div>
      </div>

      {/* Main grid */}
      <div className="container-pad py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <p className="text-white/60 text-sm leading-relaxed">
            Black-owned since 1967. Trusted by generations for healthy, beautiful hair.
            59 years of science-backed beauty.
          </p>
        </div>

        {/* Shop */}
        <div>
          <h4 className="text-white font-semibold text-sm mb-4">Shop</h4>
          <ul className="space-y-2.5 text-sm text-white/60">
            <li><a href="https://shop.dudleyq.com/products/pca-moisture-retainer-16-oz" target="_blank" rel="noopener noreferrer" className="hover:text-dudley-gold transition-colors">PCA Moisture Retainer</a></li>
            <li><a href="https://shop.dudleyq.com/products/peppermint-soothe-shampoo-cond-combo" target="_blank" rel="noopener noreferrer" className="hover:text-dudley-gold transition-colors">Peppermint Combo</a></li>
            <li><a href="https://shop.dudleyq.com/products/vitamin-power-leave-in-conditioner-8-oz" target="_blank" rel="noopener noreferrer" className="hover:text-dudley-gold transition-colors">Vitamin Power Leave-In</a></li>
            <li><a href="https://shop.dudleyq.com/products/peppermint-soothe-shampoo-8oz" target="_blank" rel="noopener noreferrer" className="hover:text-dudley-gold transition-colors">Peppermint Shampoo</a></li>
            <li><a href="https://shop.dudleyq.com/products/peppermint-soothe-conditioner-8-oz" target="_blank" rel="noopener noreferrer" className="hover:text-dudley-gold transition-colors">Peppermint Conditioner</a></li>
          </ul>
        </div>

        {/* Info */}
        <div>
          <h4 className="text-white font-semibold text-sm mb-4">Company</h4>
          <ul className="space-y-2.5 text-sm text-white/60">
            <li><a href="https://shop.dudleyq.com/pages/about-us" target="_blank" rel="noopener noreferrer" className="hover:text-dudley-gold transition-colors">Our Story</a></li>
            <li><a href="https://shop.dudleyq.com/pages/contact" target="_blank" rel="noopener noreferrer" className="hover:text-dudley-gold transition-colors">Contact Us</a></li>
            <li><a href="https://shop.dudleyq.com/pages/faq" target="_blank" rel="noopener noreferrer" className="hover:text-dudley-gold transition-colors">FAQ</a></li>
          </ul>
        </div>

        {/* Policies */}
        <div>
          <h4 className="text-white font-semibold text-sm mb-4">Policies</h4>
          <ul className="space-y-2.5 text-sm text-white/60">
            <li><a href="https://shop.dudleyq.com/policies/privacy-policy" target="_blank" rel="noopener noreferrer" className="hover:text-dudley-gold transition-colors">Privacy Policy</a></li>
            <li><a href="https://shop.dudleyq.com/policies/refund-policy" target="_blank" rel="noopener noreferrer" className="hover:text-dudley-gold transition-colors">Returns</a></li>
            <li><a href="https://shop.dudleyq.com/policies/shipping-policy" target="_blank" rel="noopener noreferrer" className="hover:text-dudley-gold transition-colors">Shipping</a></li>
            <li><a href="https://shop.dudleyq.com/policies/terms-of-service" target="_blank" rel="noopener noreferrer" className="hover:text-dudley-gold transition-colors">Terms of Service</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-pad py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs text-center md:text-left">
            © {new Date().getFullYear()} Dudley Beauty Corp. All rights reserved. Black-owned since 1967.
          </p>
          <p className="text-white/30 text-xs">
            Use code <span className="text-dudley-gold font-semibold">SPRING2026</span> for 15% off your first order.
          </p>
        </div>
      </div>
    </footer>
  )
}
