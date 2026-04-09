import { useState, useEffect, useRef } from 'react'
import { X, Clock, Tag } from 'lucide-react'

export default function ExitIntentPopup({ productName, accentColor = '#C9A445', shopUrl = '#' }) {
  const [visible, setVisible] = useState(false)
  const [codeCopied, setCodeCopied] = useState(false)
  const triggered = useRef(false)

  useEffect(() => {
    const handleMouseLeave = (e) => {
      if (e.clientY < 10 && !triggered.current) {
        const seen = sessionStorage.getItem('dudley_exit_shown')
        if (!seen) {
          triggered.current = true
          setVisible(true)
          sessionStorage.setItem('dudley_exit_shown', '1')
        }
      }
    }
    document.addEventListener('mouseleave', handleMouseLeave)
    return () => document.removeEventListener('mouseleave', handleMouseLeave)
  }, [])

  const copyCode = () => {
    navigator.clipboard.writeText('SPRING2026').catch(() => {})
    setCodeCopied(true)
    setTimeout(() => setCodeCopied(false), 2500)
  }

  if (!visible) return null

  return (
    <div className="popup-overlay" onClick={(e) => e.target === e.currentTarget && setVisible(false)}>
      <div className="popup-card animate-fade-up max-w-sm" style={{ maxWidth: '400px' }}>
        <div className="relative text-center">
          {/* Color header strip */}
          <div className="h-2 w-full" style={{ background: `linear-gradient(90deg, ${accentColor}, #DDB95A)` }} />
          <button
            onClick={() => setVisible(false)}
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors z-10"
          >
            <X size={15} className="text-gray-500" />
          </button>

          <div className="px-7 py-7">
            <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: `${accentColor}20` }}>
              <Clock size={22} style={{ color: accentColor }} />
            </div>
            <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-2">Wait — before you go</p>
            <h3 className="font-display text-xl font-bold text-dudley-navy mb-2 leading-tight">
              Your hair deserves this.<br />Don't miss 15% off.
            </h3>
            <p className="text-sm text-gray-500 mb-5">
              Grab your discount code for {productName} and save today.
            </p>

            {/* Code block */}
            <div
              className="flex items-center justify-between p-4 rounded-xl mb-4 cursor-pointer transition-all duration-200 hover:scale-[1.02]"
              style={{ background: `${accentColor}12`, border: `2px dashed ${accentColor}50` }}
              onClick={copyCode}
            >
              <div className="flex items-center gap-2">
                <Tag size={16} style={{ color: accentColor }} />
                <span className="font-bold tracking-widest text-dudley-navy text-base">SPRING2026</span>
              </div>
              <span className="text-xs font-semibold" style={{ color: accentColor }}>
                {codeCopied ? '✓ Copied!' : 'Tap to copy'}
              </span>
            </div>

            <a
              href={shopUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full justify-center mb-3"
              style={{ background: `linear-gradient(135deg, ${accentColor}, #DDB95A)` }}
              onClick={() => setVisible(false)}
            >
              Shop Now & Save 15%
            </a>

            <button
              onClick={() => setVisible(false)}
              className="text-xs text-gray-400 hover:text-gray-600 transition-colors underline"
            >
              No thanks, I'll pay full price
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
