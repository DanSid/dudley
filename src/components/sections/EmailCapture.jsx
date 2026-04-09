import { useState } from 'react'
import { Mail, ArrowRight } from 'lucide-react'

export default function EmailCapture({ accentColor = '#C9A445', gradientFrom = '#0D1B3E', headline, subline }) {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) setSubmitted(true)
  }

  return (
    <section className="py-16 md:py-20" style={{ background: `linear-gradient(135deg, ${gradientFrom}15, ${accentColor}12)` }}>
      <div className="container-pad">
        <div className="max-w-2xl mx-auto text-center">
          {!submitted ? (
            <>
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-5"
                style={{ background: `${accentColor}20` }}>
                <Mail size={22} style={{ color: accentColor }} />
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-dudley-navy mb-3">
                {headline || 'Get Your Wash-Day Routine Guide'}
              </h2>
              <p className="text-gray-500 mb-7 text-sm md:text-base">
                {subline || 'Join 10,000+ in our community. Get expert tips, first access to new products, and an exclusive discount just for joining.'}
              </p>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-5 py-3.5 rounded-xl border border-gray-200 text-sm bg-white shadow-sm focus:outline-none focus:border-dudley-gold transition-colors"
                  required
                />
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-dudley-navy text-sm whitespace-nowrap transition-all duration-200 hover:brightness-110 hover:shadow-cta"
                  style={{ background: `linear-gradient(135deg, ${accentColor}, #DDB95A)` }}
                >
                  Get the Guide
                  <ArrowRight size={16} />
                </button>
              </form>
              <p className="text-xs text-gray-400 mt-4">
                No spam. Unsubscribe anytime. Your privacy matters to us.
              </p>
            </>
          ) : (
            <div>
              <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💌</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-dudley-navy mb-2">Check your inbox!</h3>
              <p className="text-gray-500 text-sm">
                Your wash-day guide is on its way. Don't forget to use <strong>SPRING2026</strong> for 15% off.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
