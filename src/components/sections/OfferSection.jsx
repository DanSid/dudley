import { useState } from 'react'
import { Tag, ShoppingBag, ArrowRight, Check } from 'lucide-react'

export default function OfferSection({
  productName,
  price,
  originalPrice,
  shopUrl,
  accentColor = '#C9A445',
  gradientFrom = '#0D1B3E',
  features = []
}) {
  const [codeCopied, setCodeCopied] = useState(false)

  const copyCode = () => {
    navigator.clipboard.writeText('SPRING2026').catch(() => {})
    setCodeCopied(true)
    setTimeout(() => setCodeCopied(false), 2500)
  }

  return (
    <section id="buy" className="section-pad" style={{ background: `linear-gradient(135deg, ${gradientFrom} 0%, #0D2050 100%)` }}>
      <div className="container-pad">
        <div className="max-w-3xl mx-auto text-center text-white">
          {/* Label */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase mb-6"
            style={{ background: `${accentColor}25`, color: accentColor, border: `1px solid ${accentColor}40` }}>
            <Tag size={12} />
            Spring Sale — Limited Time
          </div>

          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 leading-tight">
            Ready to Transform<br />Your Hair Routine?
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
            Join the Dudley Beauty family. 59 years of science-backed haircare, trusted by generations.
          </p>

          {/* Offer card */}
          <div className="bg-white rounded-3xl p-6 md:p-10 text-left mb-8 shadow-popup">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Left: pricing */}
              <div className="flex-1">
                <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-1">You're getting</p>
                <h3 className="font-display text-2xl font-bold text-dudley-navy mb-3">{productName}</h3>
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="font-display text-4xl font-bold text-dudley-navy">
                    {price}
                  </span>
                  {originalPrice && (
                    <span className="text-lg text-gray-400 line-through">{originalPrice}</span>
                  )}
                  <span className="px-2.5 py-1 rounded-full text-xs font-bold text-white" style={{ background: '#e74c3c' }}>
                    15% OFF
                  </span>
                </div>

                {features.length > 0 && (
                  <ul className="space-y-2 mb-5">
                    {features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <Check size={16} className="shrink-0 mt-0.5" style={{ color: accentColor }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Right: code + CTA */}
              <div className="md:w-64 w-full space-y-4">
                {/* Discount code */}
                <div>
                  <p className="text-xs text-gray-400 mb-2 font-medium">Apply this code at checkout</p>
                  <button
                    onClick={copyCode}
                    className="w-full flex items-center justify-between p-4 rounded-xl border-2 transition-all duration-200 hover:scale-[1.02]"
                    style={{ background: `${accentColor}10`, borderColor: `${accentColor}40` }}
                  >
                    <span className="font-bold tracking-widest text-dudley-navy text-lg">SPRING2026</span>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full"
                      style={{ background: codeCopied ? '#dcfce7' : `${accentColor}20`, color: codeCopied ? '#166534' : accentColor }}>
                      {codeCopied ? '✓ Copied!' : 'Copy'}
                    </span>
                  </button>
                </div>

                {/* CTA */}
                <a
                  href={shopUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-4 px-6 rounded-xl font-bold text-dudley-navy transition-all duration-200 hover:brightness-110 hover:shadow-cta active:scale-95"
                  style={{ background: `linear-gradient(135deg, ${accentColor}, #DDB95A)` }}
                >
                  <ShoppingBag size={18} />
                  Shop Now
                  <ArrowRight size={16} />
                </a>

                <p className="text-center text-xs text-gray-400">
                  Free shipping on orders $30+. Easy returns.
                </p>
              </div>
            </div>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            {[
              { icon: '🔒', text: 'Secure Checkout' },
              { icon: '📦', text: 'Fast Shipping' },
              { icon: '↩️', text: 'Easy Returns' },
              { icon: '⭐', text: '4.9 Star Rating' },
              { icon: '🏆', text: 'Since 1967' },
            ].map(b => (
              <div key={b.text} className="flex items-center gap-2 text-sm text-white/60">
                <span>{b.icon}</span>
                {b.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
