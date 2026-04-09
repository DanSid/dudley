import { Star } from 'lucide-react'

function StarRow({ rating = 5, color = '#C9A445' }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={14}
          fill={i < rating ? color : '#E5E7EB'}
          stroke="none"
        />
      ))}
    </div>
  )
}

function TestimonialCard({ name, location, rating, text, handle, accentColor }) {
  return (
    <div className="testimonial-card">
      <StarRow rating={rating} color={accentColor} />
      <p className="mt-3 text-gray-700 text-sm md:text-base leading-relaxed">{text}</p>
      <div className="mt-4 flex items-center gap-3">
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0"
          style={{ background: `linear-gradient(135deg, ${accentColor}, #DDB95A)` }}
        >
          {name.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-dudley-navy text-sm">{name}</p>
          <p className="text-gray-400 text-xs">{location} {handle && `· ${handle}`}</p>
        </div>
      </div>
    </div>
  )
}

function RatingBar({ label, percent, accentColor }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-xs text-gray-500 w-16 shrink-0">{label}</span>
      <div className="flex-1 rating-bar">
        <div className="rating-fill" style={{ width: `${percent}%`, background: `linear-gradient(90deg, ${accentColor}, #DDB95A)` }} />
      </div>
      <span className="text-xs font-semibold text-gray-600 w-8 text-right">{percent}%</span>
    </div>
  )
}

export default function SocialProof({ testimonials = [], overallRating = 4.9, totalReviews = 247, accentColor = '#C9A445' }) {
  return (
    <section id="reviews" className="section-pad bg-dudley-off-white">
      <div className="container-pad">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="section-label" style={{ color: accentColor }}>
            <span className="w-8 h-px inline-block" style={{ background: accentColor }} />
            Real Results, Real People
            <span className="w-8 h-px inline-block" style={{ background: accentColor }} />
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-dudley-navy mb-3">
            The Community Has Spoken
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Join thousands of women and men who've transformed their hair journey with Dudley Beauty.
          </p>
        </div>

        {/* Rating summary */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-card flex flex-col md:flex-row gap-8 items-center">
            {/* Big number */}
            <div className="text-center shrink-0">
              <p className="font-display text-6xl font-bold text-dudley-navy leading-none">{overallRating}</p>
              <StarRow rating={5} color={accentColor} />
              <p className="text-xs text-gray-400 mt-2">{totalReviews.toLocaleString()} verified reviews</p>
            </div>
            {/* Bars */}
            <div className="flex-1 w-full space-y-2.5">
              <RatingBar label="5 stars" percent={88} accentColor={accentColor} />
              <RatingBar label="4 stars" percent={8} accentColor={accentColor} />
              <RatingBar label="3 stars" percent={3} accentColor={accentColor} />
              <RatingBar label="2 stars" percent={1} accentColor={accentColor} />
              <RatingBar label="1 star" percent={0} accentColor={accentColor} />
            </div>
            {/* Trust badges */}
            <div className="text-center shrink-0 space-y-2">
              <div className="flex flex-col gap-1.5">
                {['Verified Purchases', 'No Paid Reviews', 'Real Community'].map(b => (
                  <div key={b} className="flex items-center gap-2 text-xs text-gray-600">
                    <span className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-[10px] font-bold">✓</span>
                    {b}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} {...t} accentColor={accentColor} />
          ))}
        </div>

        {/* Reddit callout */}
        <div
          className="mt-10 rounded-3xl p-6 md:p-8 text-center border"
          style={{ background: `${accentColor}08`, borderColor: `${accentColor}25` }}
        >
          <p className="text-sm text-gray-500 mb-2">Shared across Reddit communities including</p>
          <p className="font-semibold text-dudley-navy text-sm">
            r/Naturalhair · r/BlackHair · r/CurlyHairCare · r/blackladies · r/CrownCare
          </p>
          <p className="text-xs text-gray-400 mt-3">
            "This is the brand we grew up on — and it's back, better than ever." — Reddit community
          </p>
        </div>
      </div>
    </section>
  )
}
