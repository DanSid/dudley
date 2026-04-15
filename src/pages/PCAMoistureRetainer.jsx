import { useState, useEffect, useRef } from 'react'
import { ShoppingBag, Droplets, Zap, Leaf, Shield, ArrowRight, Star, Check } from 'lucide-react'
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

const ACCENT = '#C9A445'
const SHOP_URL = 'https://shop.dudleyq.com/products/pca-moisture-retainer-16-oz'

/* ── Scroll-reveal hook ── */
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
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-hero">
      {/* BG texture */}
      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />

      {/* Gold orb */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full opacity-10 translate-x-1/2"
        style={{ background: 'radial-gradient(circle, #C9A445, transparent 70%)' }} />

      <div className="container-pad relative z-10 pt-24 pb-16 md:pb-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left: copy */}
          <div>
            {/* Heritage badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase mb-6 bg-white/10 border border-white/20 text-white/80">
              <span className="w-2 h-2 rounded-full bg-dudley-gold animate-pulse-slow" />
              Black-Owned Since 1967 · 59-Year Legacy
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-5">
              Your Hair<br />
              <span style={{ color: ACCENT }}>Holds Moisture</span><br />
              From the Air Itself
            </h1>

            <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-8 max-w-lg">
              PCA Moisture Retainer is the only daily leave-in powered by Sodium PCA — nature's humectant that pulls moisture directly from the air into every strand. No grease. Just all-day hydration.
            </p>

            {/* Star row */}
            <div className="flex items-center gap-3 mb-8">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="#C9A445" stroke="none" />
                ))}
              </div>
              <span className="text-white/60 text-sm">4.9 · 300+ reviews</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href={SHOP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <ShoppingBag size={18} />
                Shop Now — 15% Off
                <ArrowRight size={16} />
              </a>
              <button
                onClick={() => { const el = document.getElementById('benefits'); el?.scrollIntoView({ behavior: 'smooth' }) }}
                className="btn-white"
              >
                See How It Works
              </button>
            </div>

            {/* Discount callout */}
            <div className="mt-6 flex items-center gap-3">
              <div className="discount-badge">SPRING2026</div>
              <span className="text-white/60 text-sm">= 15% off your first order</span>
            </div>
          </div>

          {/* Right: product image */}
         <div className="flex justify-center">
  <InteractiveProductDisplay
    imageSrc=""
    alt="PCA Moisture Retainer 16 oz"
    accent={ACCENT}
    accent2="#DDB95A"
    topBadge="🧬 Sodium PCA Technology"
    bottomBadge="✓ Non-Greasy Formula"
    title="PCA Moisture Retainer 16 oz"
    description="A lightweight daily moisturizer that pulls moisture from the air into the hair shaft and helps keep styles soft without grease. The quick benefit summary now sits right beside the hero visual."
    bullets={[
      'Draws in moisture all day',
      'Biotin support for strength',
      'Works on wet or dry hair',
      'Family-friendly daily use',
    ]}
    imageClassName="w-72 md:w-96 object-contain"
  >
    {/* VIDEO */}
    <div className="product-hero-image animate-float w-80 md:w-[32rem] flex flex-col items-center gap-4">
      <div
        className="w-80 md:w-[32rem] h-96 md:h-[40rem] rounded-3xl flex flex-col items-center justify-center text-center p-6 border-2 relative overflow-hidden"
        style={{ 
          background: 'linear-gradient(135deg, #121f43, #121f43)', 
          borderColor: `${ACCENT}20`, 
          filter: 'drop-shadow(0 30px 50px rgba(0,0,0,0.4))' 
        }}
      >
        <video
          src="/assets/DUDLEYS_PCA_Moisture_Retainer_Motion.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover rounded-3xl"
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-col items-center justify-center bg-black/40 rounded-b-3xl">
          <p className="text-white/60 font-semibold text-sm">PCA Moisture Retainer 16 oz</p>
        </div>
      </div>
    </div>
  </InteractiveProductDisplay>
</div>
        </div>

        {/* Trust bar */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-white/10 pt-10">
          {[
            { n: '59', label: 'Years of Trust' },
            { n: '300+', label: 'Five-Star Reviews' },
            { n: '100%', label: 'Non-Greasy' },
            { n: 'All', label: 'Hair Types' },
          ].map(item => (
            <div key={item.label} className="text-center">
              <p className="font-display text-2xl md:text-3xl font-bold text-dudley-gold">{item.n}</p>
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
  { icon: <Droplets size={26} />, title: 'Pulls Moisture from Air', desc: 'Sodium PCA is a natural humectant found in healthy hair. It actively draws atmospheric moisture into the hair shaft all day.' },
  { icon: <Zap size={26} />, title: 'Biotin-Strengthened', desc: 'Vitamin H (Biotin) penetrates the cortex to build elasticity and strand strength, reducing breakage from root to tip.' },
  { icon: <Leaf size={26} />, title: '100% Non-Greasy', desc: 'No heavy oils or silicones. Just a lightweight, fast-absorbing formula that nourishes without weight or buildup.' },
  { icon: <Shield size={26} />, title: 'Works on Wet or Dry Hair', desc: 'Apply to freshly washed hair, refresh dry styles, or use daily to maintain softness — it works every time.' },
]

function Benefits() {
  return (
    <section id="benefits" className="section-pad bg-white">
      <div className="container-pad">
        <AnimatedSection className="text-center mb-12">
          <p className="section-label" style={{ color: ACCENT }}>
            <span className="w-8 h-px inline-block" style={{ background: ACCENT }} />
            Why PCA Works
            <span className="w-8 h-px inline-block" style={{ background: ACCENT }} />
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-dudley-navy mb-4">
            The Science of Staying Moisturised
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Most moisturisers just sit on top of your hair. PCA goes deeper — and keeps working long after you've applied it.
          </p>
          <div className="flex justify-center">
            <img
              src="/assets/DudleysPCA.png"
              alt="Dudley's Vitamin Power Ingredients"
              className="max-w-md h-auto rounded-2xl shadow-lg"
            />
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BENEFITS.map((b, i) => (
            <AnimatedSection key={i}>
              <div className="card h-full">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 text-white"
                  style={{ background: `linear-gradient(135deg, #0D1B3E, #162347)` }}>
                  {b.icon}
                </div>
                <div className="w-8 h-0.5 rounded mb-3" style={{ background: ACCENT }} />
                <h3 className="font-semibold text-dudley-navy text-base mb-2">{b.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* How to use */}
        <AnimatedSection className="mt-16 bg-dudley-cream rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="section-label mb-3" style={{ color: ACCENT }}>Simple Daily Ritual</p>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-dudley-navy mb-6">
                How to Use PCA Moisture Retainer
              </h3>
              <div className="space-y-4">
                {[
                  { step: '01', action: 'Apply to damp hair', desc: 'After washing, apply a generous amount to towel-dried hair for maximum absorption.' },
                  { step: '02', action: 'Work through sections', desc: 'Distribute evenly from roots to ends. No need to rinse — it\'s a leave-in.' },
                  { step: '03', action: 'Style as usual', desc: 'Proceed with your normal styling routine. PCA Moisture Retainer works under any product.' },
                  { step: '04', action: 'Refresh dry hair', desc: 'Add a small amount to dry hair anytime to revive softness and control frizz.' },
                ].map(s => (
                  <div key={s.step} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 text-white font-bold text-sm"
                      style={{ background: `linear-gradient(135deg, ${ACCENT}, #DDB95A)` }}>
                      {s.step}
                    </div>
                    <div>
                      <p className="font-semibold text-dudley-navy text-sm">{s.action}</p>
                      <p className="text-gray-500 text-sm">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center">
           
              <img
                src="/assets/PCA 16 oz.png"
                alt="PCA Moisture Retainer application"
                className="w-56 md:w-72 object-contain"
                style={{ filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.15))' }}
              />
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
    <section id="ingredients" className="section-pad" style={{ background: 'linear-gradient(135deg, #0D1B3E 0%, #162347 100%)' }}>
      <div className="container-pad">
        <AnimatedSection className="text-center mb-12">
          <p className="section-label text-white/50">
            <span className="w-8 h-px inline-block bg-white/30" />
            The Science Inside
            <span className="w-8 h-px inline-block bg-white/30" />
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Two Ingredients. Profound Results.
          </h2>
          <p className="text-white/60 max-w-xl mx-auto">
            No filler. No fluff. Every ingredient in PCA Moisture Retainer earns its place.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* PCA card */}
          <AnimatedSection>
            <div className="rounded-3xl p-8 border border-white/10 h-full" style={{ background: 'rgba(255,255,255,0.05)' }}>
              <div className="flex items-start gap-4 mb-5">
                <div className="w-14 h-14 rounded-2xl bg-dudley-gold/20 flex items-center justify-center shrink-0">
                  <span className="text-2xl">💧</span>
                </div>
                <div>
                  <p className="text-xs font-bold tracking-widest text-dudley-gold uppercase mb-1">Key Ingredient #1</p>
                  <h3 className="text-white font-display text-xl font-bold">Sodium PCA</h3>
                  <p className="text-white/50 text-xs">(Pyrrolidone Carboxylic Acid)</p>
                </div>
              </div>
              <div className="space-y-3">
                <p className="text-white/70 text-sm leading-relaxed">
                  Sodium PCA is a naturally occurring component of your hair's own NMF (Natural Moisturising Factor). Unlike glycerin, it doesn't rely on external water — it pulls humidity directly from the air.
                </p>
                <div className="grid grid-cols-2 gap-3 mt-4">
                  {['Hygroscopic humectant', 'Air-activated hydration', 'Restores hair NMF', 'Works in all climates'].map(f => (
                    <div key={f} className="flex items-center gap-2 text-xs text-white/60">
                      <Check size={12} className="text-dudley-gold shrink-0" />
                      {f}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Biotin card */}
          <AnimatedSection>
            <div className="rounded-3xl p-8 border border-white/10 h-full" style={{ background: 'rgba(255,255,255,0.05)' }}>
              <div className="flex items-start gap-4 mb-5">
                <div className="w-14 h-14 rounded-2xl bg-dudley-gold/20 flex items-center justify-center shrink-0">
                  <span className="text-2xl">🧬</span>
                </div>
                <div>
                  <p className="text-xs font-bold tracking-widest text-dudley-gold uppercase mb-1">Key Ingredient #2</p>
                  <h3 className="text-white font-display text-xl font-bold">Biotin (Vitamin H)</h3>
                  <p className="text-white/50 text-xs">(D-Biotin · Penetrating Strength Complex)</p>
                </div>
              </div>
              <div className="space-y-3">
                <p className="text-white/70 text-sm leading-relaxed">
                  Biotin is one of the few vitamins that can truly penetrate the hair cortex. From the inside out, it rebuilds weakened protein structures, increases elasticity, and protects against breakage.
                </p>
                <div className="grid grid-cols-2 gap-3 mt-4">
                  {['Cortex-penetrating', 'Reduces breakage', 'Builds elasticity', 'Strengthens strands'].map(f => (
                    <div key={f} className="flex items-center gap-2 text-xs text-white/60">
                      <Check size={12} className="text-dudley-gold shrink-0" />
                      {f}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Product detail banner */}
        <AnimatedSection>
          <div className="rounded-3xl p-7 md:p-10 border border-white/10 flex flex-col md:flex-row items-center gap-8"
            style={{ background: 'rgba(201,164,69,0.08)' }}>
            <img
              src="/assets/IMG_9306 PCA 16 oz.png"
              alt="PCA 16oz bottle"
              className="w-36 md:w-44 object-contain shrink-0"
              style={{ filter: 'drop-shadow(0 15px 30px rgba(0,0,0,0.3))' }}
            />
            <div>
              <h3 className="font-display text-xl md:text-2xl font-bold text-white mb-3">
                PCA Moisture Retainer 16 oz
              </h3>
              <p className="text-white/60 text-sm leading-relaxed mb-4">
                Available in 16 oz — the family-size bottle designed to last. Works on all hair types: natural, relaxed, curled, chemically treated, Type 1 through Type 4C. Trusted by families for three generations.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Family Size · 16oz', 'All Hair Types', 'Wet or Dry Application', 'Men & Women'].map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-full text-xs text-white/70 border border-white/20">{tag}</span>
                ))}
              </div>
            </div>
            <div className="shrink-0">
              <a
                href={SHOP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <ShoppingBag size={16} />
                Shop Now
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

/* ─────────────────────────────── BEFORE/AFTER ─────────────────────────────── */
function BeforeAfter() {
  return (
    <section className="section-pad bg-white">
      <div className="container-pad">
        <AnimatedSection className="text-center mb-12">
          <p className="section-label" style={{ color: ACCENT }}>
            <span className="w-8 h-px inline-block" style={{ background: ACCENT }} />
            Real Transformations
            <span className="w-8 h-px inline-block" style={{ background: ACCENT }} />
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-dudley-navy mb-4">
            What Your Hair Has Been Missing
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            These aren't filters or photo edits — this is what consistent moisture does over 4–6 weeks.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { before: 'Dry, brittle ends', after: 'Soft, moisturised, resilient', name: 'Tamika R.', type: 'Type 4B Natural' },
            { before: 'Breakage + shedding', after: 'Stronger, fuller strands', name: 'Marcus J.', type: 'Short Cut / Relaxed' },
            { before: 'Dull, lifeless curl pattern', after: 'Defined, hydrated curls', name: 'Jasmine D.', type: 'Type 3C Curly' },
          ].map((item, i) => (
            <AnimatedSection key={i}>
              <div className="rounded-2xl overflow-hidden shadow-card">
                <div className="grid grid-cols-2">
                  <div className="p-5 bg-gray-50">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Before</p>
                    <p className="text-sm text-gray-600">{item.before}</p>
                  </div>
                  <div className="p-5" style={{ background: `${ACCENT}12` }}>
                    <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: ACCENT }}>After</p>
                    <p className="text-sm text-dudley-navy font-medium">{item.after}</p>
                  </div>
                </div>
                <div className="p-4 border-t border-gray-100 bg-white flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm"
                    style={{ background: `linear-gradient(135deg, ${ACCENT}, #DDB95A)` }}>
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-dudley-navy text-sm">{item.name}</p>
                    <p className="text-gray-400 text-xs">{item.type}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
   
        {/* PCA Flyer image if available */}
        <AnimatedSection className="mt-12">
          <div className="rounded-3xl overflow-hidden bg-dudley-cream p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="section-label mb-3" style={{ color: ACCENT }}>Trusted by Men Too</p>
                <h3 className="font-display text-2xl font-bold text-dudley-navy mb-4">
                  PCA Works for the Whole Family
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                  From short cuts to long natural styles, from children's hair to mature hair — PCA Moisture Retainer is the one product that bridges every routine. Great for men managing dry scalps or thinning areas.
                </p>
                <a href={SHOP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex">
                  <ShoppingBag size={16} />
                  Get PCA Today
                </a>
              </div>
              <div className="flex justify-center">
                <img
                  src="/assets/PCA Flyer Male.jpg"
                  alt="PCA Moisture Retainer for men"
                  className="w-full max-w-xs rounded-2xl object-cover shadow-product"
                />
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

/* ─────────────────────────────── MAIN PAGE ─────────────────────────────── */
const TESTIMONIALS = [
  {
    name: 'Keisha T.', location: 'Atlanta, GA', rating: 5, handle: 'r/Naturalhair',
    text: "I've been using PCA since my mom had it in the cabinet. Finally found it online and my Type 4C hair has never been softer. It actually moisturises — I can feel the difference by the second day."
  },
  {
    name: 'David M.', location: 'Houston, TX', rating: 5, handle: 'r/BlackHair',
    text: "I have a short fade and my scalp was always dry and flaky. PCA fixed it in two weeks. I just apply a little to my scalp and hairline every morning. This stuff is real."
  },
  {
    name: 'Nadia B.', location: 'Chicago, IL', rating: 5, handle: 'r/CurlyHairCare',
    text: "The whole 'draws moisture from the air' thing is not marketing — it actually works. My 3C curls are defined, soft, and bouncy for 3+ days after a wash. Love this formula."
  },
]

const FAQS = [
  { question: 'What makes PCA different from regular leave-in conditioners?', answer: 'Most leave-ins deposit moisture temporarily but don\'t lock it in. PCA Moisture Retainer contains Sodium PCA — a hygroscopic ingredient that draws moisture from the air into the hair shaft and keeps it there. Most products dry out by day two; PCA keeps working.' },
  { question: 'Can I use it on chemically treated or relaxed hair?', answer: 'Absolutely. PCA Moisture Retainer was formulated for all hair types including relaxed, permed, texlaxed, and colour-treated hair. It\'s gentle enough for chemically processed strands and actually helps restore moisture lost during processing.' },
  { question: 'How often should I apply it?', answer: 'For best results, apply to freshly washed, towel-dried hair as part of your regular wash day routine. You can also apply small amounts to dry hair between wash days to refresh and maintain softness. Daily use is safe and beneficial.' },
  { question: 'Is it safe for children?', answer: 'Yes. PCA Moisture Retainer is gentle and free of harsh chemicals, making it safe for children\'s hair of all ages. Many families use it as their go-to daily moisturiser for the whole household.' },
  { question: 'Will it make my hair greasy?', answer: 'No. The formula is specifically designed to be non-greasy and lightweight. It absorbs quickly into the hair shaft without leaving residue. You can apply it in the morning before work or school without any oily feeling.' },
  { question: 'How do I apply the discount code SPRING2026?', answer: 'Add PCA Moisture Retainer to your cart at shop.dudleyq.com, then enter SPRING2026 in the discount code field at checkout. Your 15% will be automatically applied. Valid for first-time orders during the Spring 2026 promotional period.' },
]

export default function PCAMoistureRetainer() {
  return (
    <div className="min-h-screen">
      <Navbar accentColor={ACCENT} ctaUrl={SHOP_URL} />
      <WelcomePopup productName="PCA Moisture Retainer" accentColor={ACCENT} gradientFrom="#0D1B3E" shopUrl={SHOP_URL} />
      <ExitIntentPopup productName="PCA Moisture Retainer" accentColor={ACCENT} shopUrl={SHOP_URL} />
      <Hero />
      <Benefits />
      <Ingredients />
      <BeforeAfter />
      <SocialProof
        testimonials={TESTIMONIALS}
        overallRating={4.9}
        totalReviews={312}
        accentColor={ACCENT}
      />
      <OfferSection
        productName="PCA Moisture Retainer 16 oz"
        price="$18.99"
        originalPrice="$22.35"
        shopUrl={SHOP_URL}
        accentColor={ACCENT}
        gradientFrom="#08102A"
        features={[
          'Sodium PCA — air-activated moisture technology',
          'Biotin-strengthened formula for elasticity',
          'Works on all hair types — wet or dry',
          '100% non-greasy leave-in formula',
          'Family size 16oz — great value',
          'Trusted Dudley formula since 1967',
        ]}
      />
      <EmailCapture
        accentColor={ACCENT}
        gradientFrom="#0D1B3E"
        headline="Get Your Free Moisture-Retention Hair Guide"
        subline="Join 10,000+ in the Dudley community. Receive expert tips for your hair type, wash day guides, and an exclusive first-order discount."
      />
      <FAQ faqs={FAQS} accentColor={ACCENT} bgColor="#F9F5EF" />
      <Footer />
      <StickyMobileCTA
        productName="PCA Moisture Retainer"
        price="$18.99"
        shopUrl={SHOP_URL}
        accentColor={ACCENT}
      />
    </div>
  )
}
