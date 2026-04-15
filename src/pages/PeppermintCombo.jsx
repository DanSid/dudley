import { useState, useEffect, useRef } from 'react'
import { ShoppingBag, Wind, Leaf, Droplets, Sparkles, ArrowRight, Star, Check, RefreshCw, Shield } from 'lucide-react'
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

const ACCENT = '#2D7D5A'
const ACCENT2 = '#4CAF7D'
const SHOP_URL = 'https://shop.dudleyq.com/products/peppermint-soothe-shampoo-cond-combo'

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
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-mint">
      {/* BG circles */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-20 -translate-y-1/2 translate-x-1/2"
        style={{ background: 'radial-gradient(circle, #4CAF7D, transparent 70%)' }} />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full opacity-15 translate-y-1/4 -translate-x-1/4"
        style={{ background: 'radial-gradient(circle, #C9A445, transparent 70%)' }} />
      {/* Pattern */}
      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />

      <div className="container-pad relative z-10 pt-24 pb-16 md:pb-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase mb-6 bg-white/15 border border-white/25 text-white/80">
              <Leaf size={12} className="text-green-300" />
              Natural Peppermint + Green Tea + Avocado
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-5">
              Wake Up Your<br />
              <span style={{ color: '#A8E6C3' }}>Scalp.</span> Feed<br />
              Your Hair.
            </h1>

            <p className="text-white/75 text-lg leading-relaxed mb-8 max-w-lg">
              The Peppermint Soothe Shampoo + Conditioner Combo is your complete wash-day reset. Deep cleanse, scalp soothe, moisture restore — all in one powerful pair. You'll feel the difference from the first tingle.
            </p>

            <div className="flex items-center gap-3 mb-8">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#A8E6C3" stroke="none" />)}
              </div>
              <span className="text-white/60 text-sm">4.9 · 185+ reviews</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href={SHOP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ background: 'linear-gradient(135deg, #C9A445, #DDB95A)', color: '#0D1B3E' }}>
                <ShoppingBag size={18} />
                Get the Combo — Save 15%
                <ArrowRight size={16} />
              </a>
              <button
                onClick={() => document.getElementById('benefits')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-white"
              >
                How It Works
              </button>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <div className="discount-badge">SPRING2026</div>
              <span className="text-white/60 text-sm">= 15% off at checkout</span>
            </div>
          </div>

          {/* Right: product duo */}
          <div className="flex justify-center">
  <InteractiveProductDisplay
    imageSrc=""
    alt="Peppermint Soothe Combo"
    accent={ACCENT}
    accent2={ACCENT2}
    topBadge="🌿 DHT Blocker Formula"
    bottomBadge="✓ Cleanse + Condition Duo"
    title="Peppermint Soothe Shampoo + Conditioner"
    description="A cooling cleanse-and-condition duo built for irritated, tender, or buildup-heavy scalps. The key product notes now sit directly under the hero image so shoppers understand the combo before they scroll."
    bullets={[
      'Peppermint cooling relief',
      'Green tea antioxidant support',
      'Avocado moisture balance',
      'Better value as a duo',
    ]}
    imageClassName="w-64 md:w-80 object-contain"
  >
    {/* VIDEO */}
    <div className="product-hero-image animate-float w-80 md:w-[32rem] flex flex-col items-center gap-4">
      <div
        className="w-80 md:w-[32rem] h-96 md:h-[40rem] rounded-3xl flex flex-col items-center justify-center text-center p-6 border-2 relative overflow-hidden"
        style={{ 
          background: 'linear-gradient(135deg, #267151, #267151)', 
          borderColor: `${ACCENT}40`, 
          filter: 'drop-shadow(0 30px 50px rgba(0,0,0,0.4))' 
        }}
      >
        <video
          src="/assets/DUDLEYS_Peppermint_Soothe_Shampoo_&_Conditioner_Motion.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover rounded-3xl"
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-col items-center justify-center bg-black/40 rounded-b-3xl">
          <p className="text-white/60 font-semibold text-sm">Peppermint Soothe Shampoo + Conditioner</p>
        </div>
      </div>
    </div>
  </InteractiveProductDisplay>
</div>
        </div>

        {/* Stats */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-white/10 pt-10">
          {[
            { n: '2-in-1', label: 'Complete System' },
            { n: '3', label: 'Natural Ingredients' },
            { n: '100%', label: 'Scalp-Safe' },
            { n: 'Combo', label: 'Best Value' },
          ].map(item => (
            <div key={item.label} className="text-center">
              <p className="font-display text-2xl md:text-3xl font-bold" style={{ color: '#A8E6C3' }}>{item.n}</p>
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
  { icon: <Wind size={26} />, title: 'Cooling Peppermint Tingle', desc: 'Natural menthol stimulates blood flow to the scalp, delivering an invigorating cooling sensation that signals deep cleansing is happening.' },
  { icon: <Leaf size={26} />, title: 'Green Tea Antioxidants', desc: 'Fights free radicals and oxidative damage on the scalp. Antioxidant protection for your follicles means a healthier growth environment.' },
  { icon: <Droplets size={26} />, title: 'Avocado Moisture Seal', desc: 'Avocado is a biotin-rich superfood for hair. It prevents dry scalp, seals the cuticle, and adds a natural shine after conditioning.' },
  { icon: <Shield size={26} />, title: 'DHT Blocker Properties', desc: 'Natural antiseptic compounds help inhibit DHT — the hormone linked to hair thinning — while promoting a clean, growth-ready scalp environment.' },
]

function Benefits() {
  return (
    <section id="benefits" className="section-pad bg-white">
      <div className="container-pad">
        <AnimatedSection className="text-center mb-12">
          <p className="section-label" style={{ color: ACCENT }}>
            <span className="w-8 h-px inline-block" style={{ background: ACCENT }} />
            The Combo Advantage
            <span className="w-8 h-px inline-block" style={{ background: ACCENT }} />
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-dudley-navy mb-4">
            Cleanse. Soothe. Restore. All in One Wash Day.
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Each product is powerful alone. Together, they're a complete scalp therapy system designed for your best wash day ever.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {BENEFITS.map((b, i) => (
            <AnimatedSection key={i}>
              <div className="card h-full border border-mint-pale">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 text-white"
                  style={{ background: `linear-gradient(135deg, ${ACCENT}, ${ACCENT2})` }}>
                  {b.icon}
                </div>
                <div className="w-8 h-0.5 rounded mb-3" style={{ background: ACCENT }} />
                <h3 className="font-semibold text-dudley-navy text-base mb-2">{b.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* 2-step system */}
        <AnimatedSection>
          <div className="rounded-3xl overflow-hidden shadow-card">
            <div className="grid md:grid-cols-2">
              {/* Shampoo step */}
              <div className="p-8 md:p-10" style={{ background: `linear-gradient(135deg, ${ACCENT}, ${ACCENT2})` }}>
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center font-bold text-white mb-5">1</div>
                <h3 className="font-display text-2xl font-bold text-white mb-3">Peppermint Soothe Shampoo</h3>
                <p className="text-white/80 text-sm leading-relaxed mb-5">
                  Start with a deep follicle-stimulating cleanse. The natural peppermint tingle tells you it's working — clearing buildup, calming irritation, and preparing your scalp for maximum moisture absorption.
                </p>
                <ul className="space-y-2">
                  {['Deep follicle cleansing', 'Removes buildup + excess oil', 'Stimulates scalp circulation', 'Natural DHT blocker properties'].map(f => (
                    <li key={f} className="flex items-center gap-2 text-white/80 text-xs">
                      <Check size={13} className="text-green-200 shrink-0" />{f}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Conditioner step */}
              <div className="p-8 md:p-10 bg-mint-pale">
                <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white mb-5"
                  style={{ background: ACCENT }}>2</div>
                <h3 className="font-display text-2xl font-bold text-dudley-navy mb-3">Peppermint Soothe Conditioner</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                  Follow with the conditioner to restore moisture balance. Avocado and peppermint work together to soften, detangle, and seal the cuticle — leaving hair smooth, manageable, and fresh.
                </p>
                <ul className="space-y-2">
                  {['Restores moisture balance', 'Softens and detangles', 'Seals cuticle for shine', 'Post-wash comfort and freshness'].map(f => (
                    <li key={f} className="flex items-center gap-2 text-gray-600 text-xs">
                      <Check size={13} style={{ color: ACCENT }} className="shrink-0" />{f}
                    </li>
                  ))}
                </ul>
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
    <section id="ingredients" className="section-pad" style={{ background: `linear-gradient(135deg, ${ACCENT} 0%, #1A5C42 100%)` }}>
      <div className="container-pad">
        <AnimatedSection className="text-center mb-12">
          <p className="section-label text-white/50">
            <span className="w-8 h-px inline-block bg-white/30" />
            Nature's Pharmacy
            <span className="w-8 h-px inline-block bg-white/30" />
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Three Plants. One Powerful System.
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              emoji: '🌿', name: 'Peppermint', latin: 'Mentha × piperita', color: '#A8E6C3',
              points: ['Menthol for cooling + soothing', 'Natural antiseptic properties', 'Stimulates scalp circulation', 'Controls dandruff-causing bacteria'],
              desc: 'The signature ingredient. Peppermint menthol creates the cooling tingle that tells you the scalp is being refreshed and blood flow is being stimulated.',
            },
            {
              emoji: '🍵', name: 'Green Tea', latin: 'Camellia sinensis', color: '#C8E6C9',
              points: ['Rich in EGCG antioxidants', 'Fights oxidative scalp damage', 'Anti-inflammatory action', 'Strengthens follicle health'],
              desc: 'Green tea brings powerful antioxidants that protect your scalp and follicles from environmental stress and oxidative damage that causes premature hair loss.',
            },
            {
              emoji: '🥑', name: 'Avocado', latin: 'Persea americana', color: '#DCEDC8',
              points: ['Biotin-rich for strength', 'Prevents dry scalp', 'Seals cuticles for shine', 'Deep moisture penetration'],
              desc: 'Rich in biotin (the "hair vitamin"), healthy fats, and vitamins A, D, and E — avocado is the moisture backbone of the conditioner step.',
            },
          ].map((ing, i) => (
            <AnimatedSection key={i}>
              <div className="rounded-3xl p-7 border border-white/15 h-full" style={{ background: 'rgba(255,255,255,0.07)' }}>
                <div className="text-4xl mb-4">{ing.emoji}</div>
                <p className="text-xs font-bold tracking-widest mb-1" style={{ color: ing.color }}>Key Ingredient</p>
                <h3 className="text-white font-display text-xl font-bold mb-0.5">{ing.name}</h3>
                <p className="text-white/40 text-xs mb-4 italic">{ing.latin}</p>
                <p className="text-white/65 text-sm leading-relaxed mb-5">{ing.desc}</p>
                <div className="space-y-2">
                  {ing.points.map(p => (
                    <div key={p} className="flex items-center gap-2 text-xs text-white/60">
                      <Check size={12} style={{ color: ing.color }} className="shrink-0" />
                      {p}
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Combo CTA banner */}
        <AnimatedSection className="mt-10">
          <div className="rounded-3xl p-7 md:p-10 border border-white/15 text-center" style={{ background: 'rgba(201,164,69,0.1)' }}>
            <p className="text-xs font-bold tracking-widest text-dudley-gold uppercase mb-2">Best Value</p>
            <h3 className="font-display text-2xl font-bold text-white mb-3">
              Get Both — Save More with the Combo
            </h3>
            <p className="text-white/65 text-sm mb-6 max-w-md mx-auto">
              The Peppermint Soothe Shampoo + Conditioner Combo gives you the complete two-step system at a better price. Your scalp will thank you on the first wash day.
            </p>
            <a href={SHOP_URL} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-dudley-navy transition-all hover:brightness-110"
              style={{ background: 'linear-gradient(135deg, #C9A445, #DDB95A)' }}>
              <ShoppingBag size={18} />
              Shop the Combo — Use SPRING2026
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

/* ─────────────────────────────── WASH DAY RITUAL ─────────────────────────────── */
function WashDayRitual() {
  return (
    <section className="section-pad bg-white">
      <div className="container-pad">
        <AnimatedSection className="text-center mb-12">
          <p className="section-label" style={{ color: ACCENT }}>
            <span className="w-8 h-px inline-block" style={{ background: ACCENT }} />
            Your New Wash Day
            <span className="w-8 h-px inline-block" style={{ background: ACCENT }} />
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-dudley-navy mb-4">
            Wash Day Just Became the Best Part of Your Week
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            The sensory experience of peppermint cooling + avocado softness turns a chore into a ritual.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            { phase: 'During', feeling: 'The Cooling Tingle', desc: 'The moment peppermint hits your scalp, you feel it working. That cooling sensation means your circulation is being stimulated and buildup is being lifted.', icon: '❄️', color: ACCENT },
            { phase: 'After Rinsing', feeling: 'Fresh, Clean Scalp', desc: 'No itch. No flake. Just a clean scalp that feels refreshed, not stripped. Your hair will feel lighter and your scalp will breathe freely.', icon: '✨', color: '#1A6B6B' },
            { phase: 'After Conditioning', feeling: 'Soft, Manageable Hair', desc: 'The conditioner seals what the shampoo opened. Silky, detangled strands with a fresh peppermint scent that lingers.', icon: '💚', color: '#2D7D5A' },
          ].map((p, i) => (
            <AnimatedSection key={i}>
              <div className="card text-center">
                <div className="text-4xl mb-4">{p.icon}</div>
                <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: p.color }}>{p.phase}</p>
                <h3 className="font-semibold text-dudley-navy text-base mb-3">{p.feeling}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Who it's for */}
        <AnimatedSection>
          <div className="bg-mint-pale rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="font-display text-2xl font-bold text-dudley-navy mb-4">Who This Is For</h3>
                <div className="space-y-3">
                  {[
                    'Anyone with an itchy, irritated, or tender scalp',
                    'Women dealing with scalp buildup from braids or weaves',
                    'Men struggling with dandruff or flaking',
                    'Anyone who wants their wash day to feel like a spa reset',
                    'Curl types 2A through 4C — works for all textures',
                  ].map(w => (
                    <div key={w} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                        style={{ background: ACCENT }}>
                        <Check size={11} className="text-white" />
                      </div>
                      <p className="text-gray-700 text-sm">{w}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-center">
                <img
                  src="/assets/IMG_9300 Scalp & Skin Relief.png"
                  alt="Peppermint Soothe — scalp care — PLACEHOLDER: Replace with Peppermint combo lifestyle image"
                  className="w-full max-w-xs rounded-2xl mx-auto object-cover shadow-product"
                />
                <p className="text-xs text-gray-400 mt-2">📌 Placeholder — Replace with Peppermint Combo lifestyle image</p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

const TESTIMONIALS = [
  {
    name: 'Shayla W.', location: 'Dallas, TX', rating: 5, handle: 'r/blackladies',
    text: "The TINGLE. I was not expecting that but I love it. My scalp has been itchy for months and after my first wash with this combo it was completely soothed. The conditioner leaves my hair so soft. Best wash day I've had."
  },
  {
    name: 'DeShawn P.', location: 'Memphis, TN', rating: 5, handle: 'r/CrownCare',
    text: "I have been dealing with dandruff and scalp buildup my whole life. Three weeks using this shampoo and conditioner combo and my scalp is clear. The cooling sensation is amazing and my barber even noticed a difference."
  },
  {
    name: 'Aaliyah M.', location: 'Brooklyn, NY', rating: 5, handle: 'r/Naturalhair',
    text: "I take my wash days seriously and this combo elevated the whole experience. Peppermint shampoo cleanses without stripping, conditioner leaves my 4C hair detangled and smooth. This is officially part of my permanent routine."
  },
]

const FAQS = [
  { question: 'Why should I buy the combo instead of just one product?', answer: 'The shampoo opens the cuticle for deep cleansing while the conditioner seals it back with moisture and smoothness. They\'re formulated to work together — the shampoo prepares your scalp for maximum absorption of the conditioner. Together, they deliver a more complete result than either product alone.' },
  { question: 'Is the peppermint tingle safe for sensitive scalps?', answer: 'Yes. The peppermint in this formula is carefully balanced to stimulate and soothe — not irritate. In fact, it\'s specifically formulated for sensitive scalps. The cooling sensation indicates blood flow stimulation and antibacterial action. If you have an open wound or cut on your scalp, wait until it heals before use.' },
  { question: 'How often should I use the shampoo and conditioner?', answer: 'For best results, use 1-2 times per week as your regular wash day routine. The shampoo is thorough enough for weekly use without over-stripping. Between wash days, you can pair this routine with PCA Moisture Retainer for daily moisture maintenance.' },
  { question: 'Will this work on braids and protective styles?', answer: 'The shampoo is excellent for scalp maintenance with braids. Dilute it slightly and apply directly to the scalp using a nozzle bottle for targeted cleaning. The conditioner is best used on loose hair after removal of protective styles.' },
  { question: 'What does DHT blocker mean for my hair?', answer: 'DHT (dihydrotestosterone) is a hormone linked to hair miniaturisation and thinning. Certain natural compounds in peppermint have shown ability to inhibit DHT activity at the scalp level, creating a healthier environment for growth — similar to some clinical hair loss treatments, but naturally.' },
  { question: 'How do I use the SPRING2026 discount code?', answer: 'Add the Peppermint Soothe Combo to your cart at shop.dudleyq.com, then enter SPRING2026 at checkout for 15% off. The code applies to your first order during the Spring 2026 promotional period.' },
]

export default function PeppermintCombo() {
  return (
    <div className="min-h-screen">
      <Navbar accentColor={ACCENT} ctaUrl={SHOP_URL} />
      <WelcomePopup productName="Peppermint Soothe Combo" accentColor={ACCENT} gradientFrom={ACCENT} shopUrl={SHOP_URL} />
      <ExitIntentPopup productName="Peppermint Soothe Combo" accentColor={ACCENT} shopUrl={SHOP_URL} />
      <Hero />
      <Benefits />
      <Ingredients />
      <WashDayRitual />
      <SocialProof
        testimonials={TESTIMONIALS}
        overallRating={4.9}
        totalReviews={185}
        accentColor={ACCENT}
      />
      <OfferSection
        productName="Peppermint Soothe Shampoo + Conditioner Combo"
        price="$22.99"
        originalPrice="$27.05"
        shopUrl={SHOP_URL}
        accentColor={ACCENT}
        gradientFrom={ACCENT}
        features={[
          'Complete 2-step wash day system',
          'Natural peppermint, green tea & avocado',
          'DHT blocker properties for scalp health',
          'Works for all curl types and textures',
          'Deep cleanse + moisture restore in one routine',
          'Save vs. buying separately',
        ]}
      />
      <EmailCapture
        accentColor={ACCENT}
        gradientFrom={ACCENT}
        headline="Get Your Free Scalp Health + Wash Day Guide"
        subline="Learn how to optimise your wash day routine for scalp health and hair growth. Tips from the Dudley community, delivered to your inbox."
      />
      <FAQ faqs={FAQS} accentColor={ACCENT} bgColor="#E8F5EE" />
      <Footer />
      <StickyMobileCTA
        productName="Peppermint Combo"
        price="$22.99"
        shopUrl={SHOP_URL}
        accentColor={ACCENT}
      />
    </div>
  )
}
