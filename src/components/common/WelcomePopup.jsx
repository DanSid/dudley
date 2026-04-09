import { useState, useEffect } from 'react'
import { X, Sparkles, Tag } from 'lucide-react'

export default function WelcomePopup({ productName, accentColor = '#C9A445', gradientFrom = '#0D1B3E', shopUrl = '#' }) {
  const [visible, setVisible] = useState(false)
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [codeCopied, setCodeCopied] = useState(false)

  useEffect(() => {
    const seen = sessionStorage.getItem('dudley_popup_shown')
    if (!seen) {
      const timer = setTimeout(() => {
        setVisible(true)
        sessionStorage.setItem('dudley_popup_shown', '1')
      }, 3500)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) setSubmitted(true)
  }

  const copyCode = () => {
    navigator.clipboard.writeText('SPRING2026').catch(() => {})
    setCodeCopied(true)
    setTimeout(() => setCodeCopied(false), 2500)
  }

  if (!visible) return null

  return (
    <div className="popup-overlay" onClick={(e) => e.target === e.currentTarget && setVisible(false)}>
      <div className="popup-card animate-fade-up">
        {/* Header gradient */}
        <div
          className="relative px-8 pt-10 pb-8 text-white text-center"
          style={{ background: `linear-gradient(135deg, ${gradientFrom}, #162347)` }}
        >
          <button
            onClick={() => setVisible(false)}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            <X size={16} />
          </button>
          <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
            <Sparkles size={24} style={{ color: accentColor }} />
          </div>
          <p className="text-xs font-semibold tracking-widest uppercase mb-2 text-white/60">Welcome to Dudley Beauty</p>
          <h2 className="font-display text-2xl font-bold leading-tight mb-1">
            Get 15% Off Your First Order
          </h2>
          <p className="text-sm text-white/70 mt-2">
            Join thousands who trust Dudley for healthy, beautiful hair.
          </p>
        </div>

        {/* Body */}
        <div className="px-8 py-7">
          {!submitted ? (
            <>
              <div
                className="flex items-center gap-3 p-4 rounded-2xl mb-5 cursor-pointer border-2 transition-all duration-200 hover:scale-105"
                style={{ background: `${accentColor}15`, borderColor: `${accentColor}40` }}
                onClick={copyCode}
              >
                <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ background: accentColor }}>
                  <Tag size={17} className="text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-gray-500 mb-0.5">Your discount code</p>
                  <p className="font-bold tracking-widest text-dudley-navy text-lg">SPRING2026</p>
                </div>
                <span className="text-xs font-semibold text-gray-400">
                  {codeCopied ? '✓ Copied' : 'Tap to copy'}
                </span>
              </div>

              <p className="text-sm text-gray-500 text-center mb-4">Or enter your email for a reminder + hair tips</p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-200 text-sm focus:border-dudley-gold outline-none transition-colors bg-gray-50 focus:bg-white"
                  required
                />
                <button
                  type="submit"
                  className="btn-primary w-full justify-center"
                  style={{ background: `linear-gradient(135deg, ${accentColor}, #DDB95A)` }}
                >
                  Claim My 15% Off
                </button>
              </form>

              <p className="text-xs text-gray-400 text-center mt-4">
                No spam. Unsubscribe anytime. Black-owned since 1967.
              </p>
            </>
          ) : (
            <div className="text-center py-4">
              <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="font-display text-xl font-bold text-dudley-navy mb-2">You're in!</h3>
              <p className="text-sm text-gray-500 mb-5">Check your inbox. Use your code below to save today.</p>
              <div
                className="flex items-center justify-between p-4 rounded-xl mb-5 cursor-pointer"
                style={{ background: `${accentColor}18`, border: `2px solid ${accentColor}40` }}
                onClick={copyCode}
              >
                <span className="font-bold tracking-widest text-dudley-navy">SPRING2026</span>
                <span className="text-xs font-semibold" style={{ color: accentColor }}>
                  {codeCopied ? '✓ Copied!' : 'Tap to copy'}
                </span>
              </div>
              <a
                href={shopUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full justify-center"
                style={{ background: `linear-gradient(135deg, ${accentColor}, #DDB95A)` }}
                onClick={() => setVisible(false)}
              >
                Shop {productName} Now
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
