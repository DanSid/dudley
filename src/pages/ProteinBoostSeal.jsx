import { useState, useEffect, useRef } from 'react'
import { ShoppingBag, Droplets, Wind, Heart, Leaf, ArrowRight, Star, Check, Sparkles } from 'lucide-react'
import Navbar from '../components/common/Navbar'
import InteractiveProductDisplay from '../components/common/InteractiveProductDisplay'
import Footer from '../components/common/Footer'
import StickyMobileCTA from '../components/common/StickyMobileCTA'
import WelcomePopup from '../components/common/WelcomePopup'
import ExitIntentPopup from '../components/common/ExitIntentPopup'
import FAQ from '../components/sections/FAQ'
import SocialProof from '../components/sections/SocialProof'
import OfferSection from '../components/sections/OfferSection'
import EmailCapture from '../components/sections/EmailCapture'

const ACCENT = '#5B7B6A'
const ACCENT2 = '#7A9F8C'
const SHOP_URL = 'https://shop.dudleyq.com/products/peppermint-soothe-conditioner-8-oz'

function useScrollReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add('visible'); obs.disconnect() }
    }, { threshold: 0.12 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}

function AnimatedSection({ children, className = '' }) {
  const ref = useScrollReveal()
  return <div ref={ref} className={`animate-on-scroll ${className}`}>{children}</div>
}

/* ─────────────────────────────── HERO ─────────────────────────────── */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0F1F18 0%, #1C3028 50%, #0F1F18 100%)' }}>
      {/* Soft sage glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full opacity-15 translate-x-1/3 blur-3xl"
        style={{ background: 'radial-gradient(circle, #7A9F8C, transparent 70%)' }} />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10 blur-2xl"
        style={{ background: 'radial-gradient(circle, #5B7B6A, transparent 70%)' }} />
      {/* Gold accent glow top left */}
      <div className="absolute top-0 left-1/4 w-48 h-48 rounded-full opacity-10 blur-2xl"
        style={{ background: 'radial-gradient(circle, #C9A445, transparent 70%)' }} />
      <div className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '30px 30px' }} />

      <div className="container-pad relative z-10 pt-24 pb-16 md:pb-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase mb-6 border text-sage-100/80"
              style={{ background: 'rgba(91,123,106,0.2)', borderColor: 'rgba(122,159,140,0.3)' }}>
              <Leaf size={12} className="text-green-300" />
              Moisture Restore · Detangling · Post-Wash Comfort
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-5">
              The Softness<br />
              <span style={{ color: '#AECFBB' }}>Your Hair Has</span><br />
              Been Asking For.
            </h1>

            <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-lg">
              Lengin & Strengin Protein Boost & Seal restores what the wash cycle removes. Avocado seals moisture, peppermint refreshes the scalp, and green tea protects your strands — leaving you with silky, detangled, manageable hair and a fresh coolness that lingers.
            </p>

            <div className="flex items-center gap-3 mb-8">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#AECFBB" stroke="none" />)}
              </div>
              <span className="text-white/60 text-sm">4.8 · 140+ reviews</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href={SHOP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary"
                style={{ background: `linear-gradient(135deg, ${ACCENT}, ${ACCENT2})`, color: '#fff' }}>
                <ShoppingBag size={18} />
                Shop Now — 15% Off
                <ArrowRight size={16} />
              </a>
              <button
                onClick={() => document.getElementById('benefits')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-white"
              >
                Discover the Difference
              </button>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <div className="discount-badge">SPRING2026</div>
              <span className="text-white/60 text-sm">= 15% off your order</span>
            </div>
          </div>

          {/* Right: product */}
         <div className="flex justify-center">
  <InteractiveProductDisplay
    imageSrc=""
    alt="Lengin & Strengin Protein Boost & Seal 8oz"
    accent={ACCENT}
    accent2={ACCENT2}
    topBadge="🥑 Avocado Moisture Seal"
    bottomBadge="✓ Silky + Detangled Finish"
    title="Lengin & Strengin Protein Boost & Seal"
    description="A moisture-restoring conditioner that softens, detangles, and leaves behind a fresh peppermint finish. The summary card now sits close to the hero visual for quicker product understanding."
    bullets={[
      'Softens and detangles',
      'Helps seal the cuticle',
      'Fresh peppermint finish',
      'Great for post-wash slip',
    ]}
    imageClassName="w-64 md:w-80 object-contain"
  >
    {/* VIDEO */}
    <div className="product-hero-image animate-float w-80 md:w-[32rem] flex flex-col items-center gap-4">
      <div
        className="w-80 md:w-[42rem] h-96 md:h-[40rem] rounded-3xl flex flex-col items-center justify-center text-center p-6 border-2 relative overflow-hidden"
        style={{ 
          background: 'linear-gradient(135deg, #172921, #172921)', 
          borderColor: `${ACCENT}20`, 
          filter: 'drop-shadow(0 30px 50px rgba(0,0,0,0.4))' 
        }}
      >
        <video
          src="/assets/DUDLEYS_Protein_Boost_&_Seal_Duo_Motion.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover rounded-3xl"
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-col items-center justify-center bg-black/40 rounded-b-3xl">
          <p className="text-white/60 font-semibold text-sm">Lengin & Strengin Protein Boost & Seal</p>
        </div>
      </div>
    </div>
  </InteractiveProductDisplay>
</div>
        </div>

        {/* Stats */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-white/10 pt-10">
          {[
            { n: 'Instant', label: 'Detangling Action' },
            { n: 'Fresh', label: 'Peppermint Finish' },
            { n: 'Sealed', label: 'Cuticle Protection' },
            { n: 'All', label: 'Curl Types' },
          ].map(item => (
            <div key={item.label} className="text-center">
              <p className="font-display text-2xl md:text-3xl font-bold" style={{ color: '#AECFBB' }}>{item.n}</p>
              <p className="text-white/50 text-xs mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────── BENEFITS ─────────────────────────────── */
const BENEFITS = [
  { icon: <Droplets size={26} />, title: 'Deep Moisture Restoration', desc: 'Replenishes moisture stripped by cleansing. Avocado oils penetrate the hair shaft to restore hydration from within — not just on the surface.' },
  { icon: <Heart size={26} />, title: 'Instant Detangling', desc: 'The conditioner\'s softening complex creates slip that allows a comb or fingers to glide through tangles without breakage. Works for the thickest 4C hair.' },
  { icon: <Sparkles size={26} />, title: 'Cuticle Sealing Shine', desc: 'Green tea polyphenols smooth and close the hair cuticle, creating a reflective surface that gives a natural, healthy shine without any heaviness or grease.' },
  { icon: <Wind size={26} />, title: 'Post-Wash Freshness', desc: 'The lingering peppermint scent is light, fresh, and natural — not overpowering. Your hair smells as clean as it feels, from wash day to the following morning.' },
]

function Benefits() {
  return (
    <section id="benefits" className="section-pad bg-white">
      <div className="container-pad">
        <AnimatedSection className="text-center mb-12">
          <p className="section-label" style={{ color: ACCENT }}>
            <span className="w-8 h-px inline-block" style={{ background: ACCENT }} />
            More Than a Conditioner
            <span className="w-8 h-px inline-block" style={{ background: ACCENT }} />
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-dudley-navy mb-4">
            Wash Day Should End with Your Best Hair Yet
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Lengin & Strengin Protein Boost & Seals, softens, and refreshes in a single step. Paired with the shampoo, it completes the full scalp-to-strand restoration.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {BENEFITS.map((b, i) => (
            <AnimatedSection key={i}>
              <div className="card h-full" style={{ borderLeft: `3px solid ${ACCENT}` }}>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 text-white"
                  style={{ background: `linear-gradient(135deg, ${ACCENT}, ${ACCENT2})` }}>
                  {b.icon}
                </div>
                <h3 className="font-semibold text-dudley-navy text-base mb-2">{b.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* The feel story */}
        <AnimatedSection>
          <div className="rounded-3xl p-8 md:p-12" style={{ background: 'linear-gradient(135deg, #EDF4F0, #F5FAF7)' }}>
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <p className="section-label mb-3" style={{ color: ACCENT }}>The Post-Wash Feeling</p>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-dudley-navy mb-4">
                  Hair That Feels Like It's Been to a Salon
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                  The Lengin & Strengin Protein Boost & Seal doesn't just "condition" your hair — it transforms it. After rinsing, the difference is immediate. Soft. Smooth. Deeply hydrated. A cooling freshness that feels luxurious, not medicinal.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { emoji: '💧', label: 'Moisture Restored' },
                    { emoji: '✨', label: 'Natural Shine' },
                    { emoji: '🧊', label: 'Cool + Fresh' },
                    { emoji: '🌿', label: 'All-Natural Scent' },
                    { emoji: '💪', label: 'Stronger Strands' },
                    { emoji: '🙌', label: 'Zero Tangles' },
                  ].map(f => (
                    <div key={f.label} className="flex items-center gap-2 text-sm text-dudley-navy">
                      <span>{f.emoji}</span>
                      <span className="font-medium">{f.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                {/* How to use */}
                <div className="bg-white rounded-2xl p-6 shadow-card">
                  <p className="font-semibold text-dudley-navy mb-4 text-sm uppercase tracking-wider">
                    How to Use
                  </p>
                  {[
                    { num: '1', step: 'Apply after shampooing', detail: 'Distribute through damp hair, focusing on mid-lengths and ends.' },
                    { num: '2', step: 'Detangle gently', detail: 'Use a wide-tooth comb or fingers while the conditioner is in for maximum slip.' },
                    { num: '3', step: 'Leave on 2–5 minutes', detail: 'Let the formula penetrate the hair shaft for the deepest conditioning effect.' },
                    { num: '4', step: 'Rinse with cool water', detail: 'Cool water seals the cuticle for maximum shine and smoothness.' },
                  ].map(s => (
                    <div key={s.num} className="flex gap-4 py-3 border-b border-gray-50 last:border-0">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-white font-bold text-sm"
                        style={{ background: `linear-gradient(135deg, ${ACCENT}, ${ACCENT2})` }}>
                        {s.num}
                      </div>
                      <div>
                        <p className="font-medium text-dudley-navy text-sm">{s.step}</p>
                        <p className="text-gray-500 text-xs">{s.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

/* ─────────────────────────────── INGREDIENTS ─────────────────────────────── */
function Ingredients() {
  return (
    <section id="ingredients" className="section-pad"
      style={{ background: 'linear-gradient(135deg, #0F1F18 0%, #1C3028 100%)' }}>
      <div className="container-pad">
        <AnimatedSection className="text-center mb-12">
          <p className="section-label text-white/50">
            <span className="w-8 h-px inline-block bg-white/30" />
            The Formula
            <span className="w-8 h-px inline-block bg-white/30" />
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Three Ingredients. One Restoration.
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {[
            {
              emoji: '🥑', name: 'Avocado Oil', color: '#AECFBB',
              desc: 'The moisture backbone of the conditioner. Rich in oleic acid, vitamins A, D, and E, and natural biotin — avocado penetrates the hair shaft to restore lipid balance and seal in softness.',
              tags: ['Deep moisture penetration', 'Natural biotin source', 'Cuticle sealing', 'Prevents dry scalp'],
            },
            {
              emoji: '🌿', name: 'Peppermint Extract', color: '#C8E6D8',
              desc: 'Provides the refreshing cooling sensation and light fresh scent. Peppermint in conditioner form still delivers scalp-soothing benefits — calming post-wash sensitivity and leaving the scalp balanced.',
              tags: ['Cooling sensation', 'Scalp-soothing', 'Natural fresh scent', 'Anti-inflammatory'],
            },
            {
              emoji: '🍵', name: 'Green Tea Polyphenols', color: '#D4EFDF',
              desc: 'Act as the cuticle-smoothing agent. EGCG polyphenols cause the hair cuticle to lie flat, creating a smooth surface that reflects light for natural shine and locks in the moisture added by avocado.',
              tags: ['Cuticle smoothing', 'Natural shine', 'Antioxidant protection', 'Locks in moisture'],
            },
          ].map((ing, i) => (
            <AnimatedSection key={i}>
              <div className="rounded-3xl p-7 border border-white/10 h-full" style={{ background: 'rgba(255,255,255,0.05)' }}>
                <div className="text-4xl mb-4">{ing.emoji}</div>
                <h3 className="font-display text-xl font-bold mb-3" style={{ color: ing.color }}>{ing.name}</h3>
                <p className="text-white/65 text-sm leading-relaxed mb-5">{ing.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {ing.tags.map(t => (
                    <span key={t} className="px-3 py-1 rounded-full text-xs border text-white/60"
                      style={{ borderColor: `${ing.color}40`, background: `${ing.color}10` }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Pair with shampoo */}
        <AnimatedSection>
          <div className="rounded-3xl p-8 md:p-10 border border-white/10"
            style={{ background: 'rgba(91,123,106,0.12)' }}>
            <div className="text-center mb-6">
              <p className="text-xs font-bold tracking-widest text-green-300 uppercase mb-2">Pro Tip</p>
              <h3 className="font-display text-2xl font-bold text-white mb-3">
                Even Better with the Shampoo
              </h3>
              <p className="text-white/65 text-sm max-w-lg mx-auto">
                The Lengin & Strengin Protein Boost & Seal is designed to complete the work started by the Lengin & Strengin Protein Boost & Seal. Together, they create a full cleanse-restore cycle that leaves your hair in its best possible state after every wash day.
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <a
                href="https://shop.dudleyq.com/products/peppermint-soothe-shampoo-cond-combo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-dudley-navy transition-all hover:brightness-110"
                style={{ background: 'linear-gradient(135deg, #C9A445, #DDB95A)' }}
              >
                <ShoppingBag size={18} />
                Get the Full Combo — Save More
              </a>
              <a
                href={SHOP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white transition-all border border-white/20 hover:bg-white/10"
              >
                Shop Conditioner Only
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

/* ─────────────────────────────── HAIR TYPES ─────────────────────────────── */
function HairTypes() {
  return (
    <section className="section-pad bg-white">
      <div className="container-pad">
        <AnimatedSection className="text-center mb-12">
          <p className="section-label" style={{ color: ACCENT }}>
            <span className="w-8 h-px inline-block" style={{ background: ACCENT }} />
            Made for Every Texture
            <span className="w-8 h-px inline-block" style={{ background: ACCENT }} />
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-dudley-navy mb-4">
            Works for Every Curl, Coil, and Wave
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Whether you're rocking a TWA or waist-length locs, fine waves or 4C coils — Lengin & Strengin Protein Boost & Seal adapts to your texture, not the other way around.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            { type: 'Type 2', label: 'Wavy', desc: 'Adds definition without weighing down waves', emoji: '〰️' },
            { type: 'Type 3', label: 'Curly', desc: 'Boosts curl definition and reduces frizz', emoji: '🌀' },
            { type: 'Type 4A–B', label: 'Coily', desc: 'Deep moisture for thicker, tighter coils', emoji: '🌿' },
            { type: 'Type 4C', label: 'Tightly Coiled', desc: 'Maximum softness + detangling for dense textures', emoji: '🎯' },
          ].map((ht, i) => (
            <AnimatedSection key={i}>
              <div className="card text-center" style={{ borderBottom: `3px solid ${ACCENT}` }}>
                <div className="text-3xl mb-3">{ht.emoji}</div>
                <p className="text-xs font-bold tracking-widest uppercase mb-1" style={{ color: ACCENT }}>{ht.type}</p>
                <h3 className="font-semibold text-dudley-navy mb-2">{ht.label}</h3>
                <p className="text-gray-500 text-xs">{ht.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Works on relaxed too */}
        <AnimatedSection>
          <div className="rounded-3xl p-7 md:p-10" style={{ background: `${ACCENT}10`, border: `1px solid ${ACCENT}25` }}>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              {[
                { label: 'Natural Hair', emoji: '🌱', desc: 'Defines texture, reduces shrinkage, maximises hydration' },
                { label: 'Relaxed + Texlaxed', emoji: '💎', desc: 'Repairs post-chemical softness and reduces protein overload dryness' },
                { label: 'Protective Styles', emoji: '✨', desc: 'Perfect conditioning step before braiding, twisting, or locking' },
              ].map(item => (
                <div key={item.label}>
                  <div className="text-3xl mb-3">{item.emoji}</div>
                  <h3 className="font-semibold text-dudley-navy mb-2">{item.label}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

const TESTIMONIALS = [
  {
    name: 'Rochelle A.', location: 'Atlanta, GA', rating: 5, handle: 'r/blackladies',
    text: "The softness after using this conditioner is unreal. I have 4B hair and detangling used to take forever. Now I glide through it in minutes. The peppermint scent is so refreshing and it's not overpowering at all. Love it."
  },
  {
    name: 'Priya J.', location: 'Washington DC', rating: 5, handle: 'r/Naturalhair',
    text: "I tried this after using the shampoo combo and the combination is everything. The conditioner sealed in all that freshness and my curls were defined for 4 days. That's unheard of for my 3C hair. This is my routine now."
  },
  {
    name: 'Jasmine O.', location: 'Charlotte, NC', rating: 4, handle: 'r/CurlyHairCare',
    text: "Genuinely the best conditioner I've found for my hair. Clean ingredients, beautiful scent, and it actually does what it says. My hair feels softer and more manageable than it has in years. The peppermint is a whole vibe."
  },
]

const FAQS = [
  { question: 'How long should I leave the conditioner in?', answer: 'For a regular conditioning treatment, 2–5 minutes is sufficient. For a deep conditioning session, you can leave it on for 15–30 minutes under a heat cap or plastic shower cap. The longer you leave it, the deeper the avocado and moisture compounds penetrate.' },
  { question: 'Can I use it as a co-wash instead of shampoo?', answer: 'While the conditioner isn\'t formulated as a co-wash, some users with very low-porosity hair or low manipulation styles do use it as a rinse-out conditioning cleanse. However, for proper scalp cleansing, we recommend pairing with the Lengin & Strengin Protein Boost & Seal.' },
  { question: 'Is this a rinse-out or leave-in conditioner?', answer: 'Lengin & Strengin Protein Boost & Seal 8oz is a rinse-out conditioner. For daily leave-in conditioning, we recommend the Vitamin Power Leave-In Conditioning Spray. The two products work beautifully together as a complete conditioning system.' },
  { question: 'Will it weigh down fine hair?', answer: 'The formula is balanced to work across textures including fine hair. Use a smaller amount (about a dime to quarter size) for fine hair, focusing on the ends rather than the roots. Apply, detangle, and rinse thoroughly for best results without any heaviness.' },
  { question: 'How does it pair with the Lengin & Strengin Protein Boost & Seal?', answer: 'They were formulated as a system. The shampoo opens the cuticle and stimulates the scalp; the conditioner seals the cuticle and restores moisture. Together, they deliver a complete, balanced wash day result. The Combo pack is available at a better price.' },
  { question: 'How do I apply the SPRING2026 discount?', answer: 'Add Lengin & Strengin Protein Boost & Seal 8oz to your cart at shop.dudleyq.com and enter SPRING2026 at checkout for 15% off. Valid for first-time orders in the Spring 2026 period.' },
]

export default function PeppermintConditioner() {
  return (
    <div className="min-h-screen">
      <Navbar accentColor={ACCENT} ctaUrl={SHOP_URL} />
      <WelcomePopup productName="Lengin & Strengin Protein Boost & Seal" accentColor={ACCENT} gradientFrom="#0F1F18" shopUrl={SHOP_URL} />
      <ExitIntentPopup productName="Lengin & Strengin Protein Boost & Seal" accentColor={ACCENT} shopUrl={SHOP_URL} />
      <Hero />
      <Benefits />
      <Ingredients />
      <HairTypes />
      <SocialProof
        testimonials={TESTIMONIALS}
        overallRating={4.8}
        totalReviews={142}
        accentColor={ACCENT}
      />
      <OfferSection
        productName="Lengin & Strengin Protein Boost & Seal 8 oz"
        price="$12.99"
        originalPrice="$15.28"
        shopUrl={SHOP_URL}
        accentColor={ACCENT}
        gradientFrom="#0F1F18"
        features={[
          'Avocado oil deep moisture restoration',
          'Instant detangling — zero breakage',
          'Green tea cuticle smoothing for shine',
          'Refreshing peppermint post-wash freshness',
          'Works on all curl types 2A through 4C',
          'Also great paired with Peppermint Shampoo',
        ]}
      />
      <EmailCapture
        accentColor={ACCENT}
        gradientFrom="#0F1F18"
        headline="Get Your Free Post-Wash Routine Guide"
        subline="The right conditioner is just the start. Get expert guidance on building a full post-wash routine that keeps your hair moisturised, defined, and thriving between wash days."
      />
      <FAQ faqs={FAQS} accentColor={ACCENT} bgColor="#EDF4F0" />
      <Footer />
      <StickyMobileCTA
        productName="Peppermint Conditioner"
        price="$12.99"
        shopUrl={SHOP_URL}
        accentColor={ACCENT}
      />
    </div>
  )
}
