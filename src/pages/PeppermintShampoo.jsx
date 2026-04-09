import { useState, useEffect, useRef } from 'react'
import { ShoppingBag, Wind, Droplets, Leaf, Shield, ArrowRight, Star, Check, Sparkles } from 'lucide-react'
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

const ACCENT = '#1A6B6B'
const ACCENT2 = '#2A9090'
const SHOP_URL = 'https://shop.dudleyq.com/products/peppermint-soothe-shampoo-8oz'

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
      style={{ background: 'linear-gradient(135deg, #041A1A 0%, #0A2E2E 50%, #041A1A 100%)' }}>
      {/* Teal glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full opacity-15 translate-x-1/3 blur-3xl"
        style={{ background: 'radial-gradient(circle, #2A9090, transparent 70%)' }} />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full opacity-10 blur-2xl"
        style={{ background: 'radial-gradient(circle, #1A6B6B, transparent 70%)' }} />
      <div className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '28px 28px' }} />

      <div className="container-pad relative z-10 pt-24 pb-16 md:pb-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase mb-6 border text-teal-200/80"
              style={{ background: 'rgba(26,107,107,0.2)', borderColor: 'rgba(42,144,144,0.3)' }}>
              <Wind size={12} className="text-teal-300" />
              Deep Follicle Cleansing · Scalp Therapy · Growth Support
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-5">
              The Tingle<br />
              <span style={{ color: '#7DCFCF' }}>Means</span> It's<br />
              Working.
            </h1>

            <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-lg">
              Peppermint Soothe Shampoo isn't just a cleanser — it's a scalp reset. Menthol cools, peppermint stimulates, green tea protects, and every follicle gets the deep cleanse it's been waiting for. Feel the difference in the first wash.
            </p>

            <div className="flex items-center gap-3 mb-8">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#7DCFCF" stroke="none" />)}
              </div>
              <span className="text-white/60 text-sm">4.9 · 160+ reviews</span>
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
                Learn the Science
              </button>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <div className="discount-badge">SPRING2026</div>
              <span className="text-white/60 text-sm">= 15% off your order</span>
            </div>
          </div>

          {/* Right: product image */}
          <div className="flex justify-center">
            <InteractiveProductDisplay
              imageSrc="/assets/IMG_9301 Scalp & Skin Relief.png"
              alt="Peppermint Soothe Shampoo 8oz"
              accent={ACCENT}
              accent2={ACCENT2}
              topBadge="❄️ Cooling Menthol Action"
              bottomBadge="✓ DHT Blocker Formula"
              title="Peppermint Soothe Shampoo 8 oz"
              description="A scalp-focused shampoo designed to cool, clarify, and reset irritated roots. The product description now stays directly under the main hero image instead of feeling separated from it."
              bullets={[
                'Deep follicle cleansing',
                'Peppermint tingle refresh',
                'Helps remove buildup',
                'Ideal for tender scalps',
              ]}
              imageClassName="w-64 md:w-80 object-contain"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-white/10 pt-10">
          {[
            { n: '3', label: 'Hero Botanicals' },
            { n: 'Deep', label: 'Follicle Cleansing' },
            { n: 'DHT', label: 'Blocker Properties' },
            { n: '8oz', label: 'Premium Concentration' },
          ].map(item => (
            <div key={item.label} className="text-center">
              <p className="font-display text-2xl md:text-3xl font-bold" style={{ color: '#7DCFCF' }}>{item.n}</p>
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
  { icon: <Wind size={26} />, title: 'Cooling Scalp Stimulation', desc: 'The menthol tingle isn\'t just a feeling — it signals active vasodilation. Blood flow to your scalp increases, feeding your follicles the nutrients they need to grow.' },
  { icon: <Sparkles size={26} />, title: 'Removes Buildup Completely', desc: 'Product residue, excess sebum, dandruff flakes — deep follicle cleansing removes them all. Your scalp can breathe and absorb after-wash treatments properly.' },
  { icon: <Shield size={26} />, title: 'Natural DHT Blocker', desc: 'Peppermint\'s active compounds have shown ability to inhibit DHT at the scalp, helping create a healthier environment for hair growth and retention.' },
  { icon: <Leaf size={26} />, title: 'Antiseptic Scalp Care', desc: 'Natural antiseptic properties target odour-causing bacteria, dandruff fungus, and scalp irritation — leaving a clean slate for every strand to grow from.' },
]

function Benefits() {
  return (
    <section id="benefits" className="section-pad bg-white">
      <div className="container-pad">
        <AnimatedSection className="text-center mb-12">
          <p className="section-label" style={{ color: ACCENT }}>
            <span className="w-8 h-px inline-block" style={{ background: ACCENT }} />
            Why Scalp Health Matters
            <span className="w-8 h-px inline-block" style={{ background: ACCENT }} />
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-dudley-navy mb-4">
            Healthy Hair Starts at the Root
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            You can't grow healthy hair from a clogged, irritated scalp. Peppermint Soothe Shampoo fixes the foundation — so everything else you put in your hair actually works.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {BENEFITS.map((b, i) => (
            <AnimatedSection key={i}>
              <div className="card h-full" style={{ borderTop: `3px solid ${ACCENT}` }}>
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

        {/* What you'll feel */}
        <AnimatedSection>
          <div className="rounded-3xl overflow-hidden shadow-card">
            <div className="p-1" style={{ background: `linear-gradient(90deg, ${ACCENT}, ${ACCENT2})` }} />
            <div className="bg-white p-8 md:p-12">
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { phase: 'First 30 seconds', sensation: 'The Wake-Up Tingle', desc: 'Menthol activates. You feel the cooling sensation spreading across your scalp. Circulation increases. This is the shampoo telling you the cleanse has begun.', emoji: '❄️' },
                  { phase: 'After rinsing', sensation: 'Total Scalp Freshness', desc: 'Buildup is gone. Sebum cleared. The scalp feels clean and light — not tight or stripped. Peppermint leaves a lasting freshness that no artificial fragrance can replicate.', emoji: '✨' },
                  { phase: 'Day after washing', sensation: 'Hair That Breathes', desc: 'Follicles unclogged. Scalp balanced. Hair sits better, moves better, and absorbs your leave-in and styling products more effectively.', emoji: '🌬️' },
                ].map((s, i) => (
                  <div key={i} className="text-center">
                    <div className="text-4xl mb-3">{s.emoji}</div>
                    <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: ACCENT }}>{s.phase}</p>
                    <h3 className="font-semibold text-dudley-navy text-base mb-3">{s.sensation}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                ))}
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
      style={{ background: 'linear-gradient(135deg, #041A1A 0%, #0A2E2E 100%)' }}>
      <div className="container-pad">
        <AnimatedSection className="text-center mb-12">
          <p className="section-label text-white/50">
            <span className="w-8 h-px inline-block bg-white/30" />
            What's Inside
            <span className="w-8 h-px inline-block bg-white/30" />
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Three Botanicals. One Powerful Cleanse.
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {[
            {
              emoji: '🌿', name: 'Peppermint (Menthol)', color: '#7DCFCF',
              desc: 'The hero ingredient. Menthol is a natural vasolidator and antiseptic that cools the scalp, stimulates blood flow, removes bacteria, and delivers that signature tingle that tells you it\'s working.',
              tags: ['Cooling + refreshing', 'Scalp stimulation', 'Natural antiseptic', 'DHT inhibitor'],
            },
            {
              emoji: '🍵', name: 'Green Tea Extract', color: '#A8E6C9',
              desc: 'Rich in polyphenols and EGCG — green tea is a powerful antioxidant that fights scalp inflammation and oxidative damage caused by pollution, heat, and chemical exposure.',
              tags: ['EGCG antioxidants', 'Anti-inflammatory', 'Follicle protection', 'Reduces scalp damage'],
            },
            {
              emoji: '🥑', name: 'Avocado (Biotin Source)', color: '#C8E6C9',
              desc: 'Avocado\'s natural biotin content reinforces hair strength while its fatty acids soften and protect the scalp surface. Prevents the over-drying that many shampoos cause.',
              tags: ['Natural biotin', 'Prevents dry scalp', 'Scalp-softening', 'Cuticle protection'],
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

        {/* Scalp health section */}
        <AnimatedSection>
          <div className="rounded-3xl p-7 md:p-10 border border-white/10"
            style={{ background: 'rgba(26,107,107,0.12)' }}>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-xs font-bold tracking-widest text-teal-300 uppercase mb-2">Pro Scalp Tip</p>
                <h3 className="font-display text-2xl font-bold text-white mb-3">
                  Use It as a Pre-Style Ritual
                </h3>
                <p className="text-white/65 text-sm leading-relaxed mb-4">
                  For best results, use Peppermint Soothe Shampoo as the first step in a two-product routine. After rinsing, follow with the Peppermint Soothe Conditioner for a complete wash day that cleanses AND restores moisture balance.
                </p>
                <div className="space-y-2">
                  {[
                    'Lather well and massage into scalp for 60–90 seconds',
                    'Let the menthol activate before rinsing',
                    'Follow with Peppermint Conditioner for best results',
                    'Use 1–2x weekly for optimal scalp health',
                  ].map(tip => (
                    <div key={tip} className="flex items-center gap-2 text-sm text-white/60">
                      <Check size={13} className="text-teal-300 shrink-0" />{tip}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <img
                  src="/assets/IMG_9299 Scalp & Skin Relief.png"
                  alt="Scalp care application — PLACEHOLDER: Replace with Peppermint Shampoo application image"
                  className="w-full max-w-xs mx-auto rounded-2xl object-cover"
                  style={{ filter: 'drop-shadow(0 15px 30px rgba(0,0,0,0.4))' }}
                />
                <p className="text-xs text-white/30 text-center mt-2">📌 Placeholder — Replace with application lifestyle image</p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

/* ─────────────────────────────── SCALP HEALTH ─────────────────────────────── */
function ScalpHealth() {
  return (
    <section className="section-pad bg-white">
      <div className="container-pad">
        <AnimatedSection className="text-center mb-12">
          <p className="section-label" style={{ color: ACCENT }}>
            <span className="w-8 h-px inline-block" style={{ background: ACCENT }} />
            Scalp Health = Hair Health
            <span className="w-8 h-px inline-block" style={{ background: ACCENT }} />
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-dudley-navy mb-4">
            This Is Scalp Therapy. Not Just Shampoo.
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Most shampoos clean your hair. Peppermint Soothe treats your scalp — and that's the difference between hair that grows and hair that stays the same.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Before state */}
          <AnimatedSection>
            <div className="rounded-2xl p-7 bg-gray-50">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-5">Common Scalp Struggles</p>
              <div className="space-y-4">
                {[
                  { problem: 'Persistent dandruff that won\'t clear', tag: 'COMMON' },
                  { problem: 'Itchy scalp from braids or weaves', tag: 'COMMON' },
                  { problem: 'Buildup from styling products', tag: 'COMMON' },
                  { problem: 'Oily scalp with dry ends', tag: 'COMMON' },
                  { problem: 'Thinning at edges or crown', tag: 'COMMON' },
                ].map((s, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-gray-600">
                    <span className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center text-red-400 text-xs font-bold shrink-0">✕</span>
                    {s.problem}
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
          {/* After state */}
          <AnimatedSection>
            <div className="rounded-2xl p-7" style={{ background: `${ACCENT}10`, border: `1px solid ${ACCENT}25` }}>
              <p className="text-xs font-bold uppercase tracking-wider mb-5" style={{ color: ACCENT }}>After Peppermint Soothe Shampoo</p>
              <div className="space-y-4">
                {[
                  'Scalp clear of flakes after 2–3 washes',
                  'Immediate itch relief from the first use',
                  'Product buildup removed — scalp breathes again',
                  'Balanced scalp — no more oil-dry imbalance',
                  'Healthier follicles support stronger growth',
                ].map((s, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-dudley-navy font-medium">
                    <span className="w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
                      style={{ background: ACCENT }}>✓</span>
                    {s}
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection className="mt-10 text-center">
          <a href={SHOP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex"
            style={{ background: `linear-gradient(135deg, ${ACCENT}, ${ACCENT2})` }}>
            <ShoppingBag size={18} />
            Start Your Scalp Reset — Use SPRING2026
          </a>
        </AnimatedSection>
      </div>
    </section>
  )
}

const TESTIMONIALS = [
  {
    name: 'Imani S.', location: 'Baltimore, MD', rating: 5, handle: 'r/Naturalhair',
    text: "I had dandruff for YEARS. Tried everything. Two washes with Peppermint Soothe Shampoo and it was basically gone. The cooling sensation is everything — it just feels like it's cleaning your scalp at a cellular level."
  },
  {
    name: 'Kamau B.', location: 'New Orleans, LA', rating: 5, handle: 'r/CrownCare',
    text: "I was dealing with scalp buildup from waves products and pomade. This shampoo cleared everything without stripping the moisture from my hair. The tingle is addictive honestly. My scalp hasn't felt this clean in years."
  },
  {
    name: 'Tiffany G.', location: 'Philadelphia, PA', rating: 5, handle: 'r/blackladies',
    text: "I wear braids constantly and my scalp was always irritated and itchy between installs. Peppermint Soothe is my go-to wash day shampoo now. Takes the scalp sensitivity completely away. Nothing else I've tried comes close."
  },
]

const FAQS = [
  { question: 'Will this shampoo dry out my hair?', answer: 'No. Peppermint Soothe Shampoo is formulated to deeply cleanse the scalp without stripping the hair strand of natural oils. Avocado\'s fatty acids provide a counterbalancing conditioning effect. However, for the best experience, always follow with the Peppermint Soothe Conditioner to restore full moisture balance.' },
  { question: 'Is it safe for colour-treated or chemically processed hair?', answer: 'Yes. The formula is gentle enough for relaxed, permed, colour-treated, and texlaxed hair. It cleans without the harsh sulfates that can strip colour or cause damage to chemically treated strands.' },
  { question: 'How is this different from regular dandruff shampoos?', answer: 'Clinical dandruff shampoos often rely on harsh chemicals like zinc pyrithione or selenium sulfide that can be drying and damage colour. Peppermint Soothe uses natural peppermint, green tea, and avocado to address the root cause (scalp buildup, bacteria, and inflammation) without harsh side effects.' },
  { question: 'Can I use it under braids or extensions?', answer: 'Yes. For in-braid scalp cleansing, dilute slightly and use a nozzle applicator bottle to target the scalp directly between braids. The peppermint helps soothe any scalp tenderness from tight styles.' },
  { question: 'How long before I see results on dandruff?', answer: 'Many users report noticeable improvement after the first or second wash. For persistent conditions, consistent weekly use over 2-4 weeks will typically bring significant improvement. Results vary based on severity and individual hair type.' },
  { question: 'How do I apply the SPRING2026 code?', answer: 'Go to shop.dudleyq.com, add the Peppermint Soothe Shampoo 8oz to your cart, and enter SPRING2026 at checkout for 15% off. Valid for first-time orders during Spring 2026.' },
]

export default function PeppermintShampoo() {
  return (
    <div className="min-h-screen">
      <Navbar accentColor={ACCENT} ctaUrl={SHOP_URL} />
      <WelcomePopup productName="Peppermint Soothe Shampoo" accentColor={ACCENT} gradientFrom="#041A1A" shopUrl={SHOP_URL} />
      <ExitIntentPopup productName="Peppermint Soothe Shampoo" accentColor={ACCENT} shopUrl={SHOP_URL} />
      <Hero />
      <Benefits />
      <Ingredients />
      <ScalpHealth />
      <SocialProof
        testimonials={TESTIMONIALS}
        overallRating={4.9}
        totalReviews={163}
        accentColor={ACCENT}
      />
      <OfferSection
        productName="Peppermint Soothe Shampoo 8 oz"
        price="$12.99"
        originalPrice="$15.28"
        shopUrl={SHOP_URL}
        accentColor={ACCENT}
        gradientFrom="#041A1A"
        features={[
          'Deep follicle-stimulating cleansing formula',
          'Natural peppermint menthol cooling action',
          'DHT blocker properties for growth support',
          'Green tea antioxidants protect follicles',
          'Avocado prevents post-wash dryness',
          'Gentle enough for colour-treated hair',
        ]}
      />
      <EmailCapture
        accentColor={ACCENT}
        gradientFrom="#041A1A"
        headline="Get Your Free Scalp Health Reset Guide"
        subline="Dandruff, itching, buildup — we have solutions. Get your personalised scalp guide and a first-order discount to start your Peppermint Soothe routine today."
      />
      <FAQ faqs={FAQS} accentColor={ACCENT} bgColor="#E8F5F5" />
      <Footer />
      <StickyMobileCTA
        productName="Peppermint Shampoo"
        price="$12.99"
        shopUrl={SHOP_URL}
        accentColor={ACCENT}
      />
    </div>
  )
}
