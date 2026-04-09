import { ShoppingBag, Tag } from 'lucide-react'
import { useState } from 'react'

export default function StickyMobileCTA({ productName, price, shopUrl, accentColor = '#C9A445' }) {
  const [codeCopied, setCodeCopied] = useState(false)

  const copyCode = () => {
    navigator.clipboard.writeText('SPRING2026').catch(() => {})
    setCodeCopied(true)
    setTimeout(() => setCodeCopied(false), 2500)
  }

  return (
    <div className="sticky-cta animate-fade-in">
      <div className="flex items-center gap-3">
        {/* Code pill */}
        <button
          onClick={copyCode}
          className="flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-bold tracking-wider shrink-0 transition-all duration-200"
          style={{ background: codeCopied ? '#4ade80' : 'rgba(201,164,69,0.2)', color: codeCopied ? '#0D1B3E' : '#C9A445', border: `1px solid ${codeCopied ? '#4ade80' : 'rgba(201,164,69,0.4)'}` }}
        >
          <Tag size={11} />
          {codeCopied ? 'Copied!' : 'SPRING2026'}
        </button>
        {/* CTA button */}
        <a
          href={shopUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-full font-semibold text-sm text-dudley-navy transition-all duration-200 hover:brightness-110 active:scale-95"
          style={{ background: `linear-gradient(135deg, ${accentColor}, #DDB95A)` }}
        >
          <ShoppingBag size={16} />
          Shop {productName} — {price}
        </a>
      </div>
    </div>
  )
}
