import { useState } from 'react'

export default function InteractiveProductDisplay({
  imageSrc,
  alt,
  accent,
  accent2,
  topBadge,
  bottomBadge,
  title,
  description,
  bullets = [],
  imageClassName = 'w-64 md:w-80 object-contain',
  children = null,
}) {
  const [isSpinning, setIsSpinning] = useState(false)

  const handleSpin = () => {
    setIsSpinning(false)
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setIsSpinning(true))
    })
  }

  return (
    <div className="relative max-w-xl w-full">
      <div
        className="absolute inset-0 rounded-full opacity-25 blur-3xl"
        style={{ background: `radial-gradient(circle, ${accent2 || accent}, transparent 60%)` }}
      />
      <div className="relative z-10 flex flex-col items-center">
        <button
          type="button"
          onClick={handleSpin}
          onAnimationEnd={() => setIsSpinning(false)}
          className="product-hero-button"
          aria-label={`Spin ${alt}`}
        >
          <div className={`product-hero-stage ${isSpinning ? 'spin-360' : ''}`}>
            {children || (
              <img
                src={imageSrc}
                alt={alt}
                className={`product-hero-image animate-float ${imageClassName}`}
                style={{ filter: 'drop-shadow(0 30px 50px rgba(0,0,0,0.4))' }}
              />
            )}
          </div>
        </button>

        <div className="product-image-hint">Tap the product image to spin it</div>

        <div className="product-description-card mt-5">
          <p className="text-xs font-bold tracking-[0.18em] uppercase mb-2" style={{ color: accent }}>
            Product Snapshot
          </p>
          <h3 className="text-lg md:text-xl font-semibold text-dudley-navy mb-2">
            {title}
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            {description}
          </p>
          {bullets.length > 0 && (
            <div className="grid sm:grid-cols-2 gap-2">
              {bullets.map((bullet) => (
                <div key={bullet} className="product-bullet">
                  <span className="product-bullet-dot" style={{ background: accent }} />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {topBadge && (
        <div className="absolute top-4 md:top-8 -left-2 md:-left-4 bg-white rounded-2xl px-4 py-2.5 shadow-card text-xs font-semibold text-dudley-navy z-20">
          {topBadge}
        </div>
      )}
      {bottomBadge && (
        <div
          className="absolute bottom-[11.5rem] md:bottom-[13rem] -right-2 md:-right-3 bg-white rounded-2xl px-4 py-2.5 shadow-card text-xs font-bold z-20"
          style={{ color: accent }}
        >
          {bottomBadge}
        </div>
      )}
    </div>
  )
}
