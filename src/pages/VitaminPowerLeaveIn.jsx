import { useState, useEffect, useRef } from 'react'
import { ShoppingBag, Zap, Clock, Wind, Heart, ArrowRight, Star, Check, Layers } from 'lucide-react'
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

const ACCENT = '#E8780A'
const ACCENT2 = '#F59B1C'
const SHOP_URL = 'https://shop.dudleyq.com/products/vitamin-power-leave-in-conditioner-8-oz'

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
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: 'linear-gradient(135deg, #1C0A00 0%, #3D1A00 50%, #2A1000 100%)' }}>
      {/* Warm glow orbs */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl"
        style={{ background: 'radial-gradient(circle, #F59B1C, transparent 70%)' }} />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-15 blur-2xl"
        style={{ background: 'radial-gradient(circle, #E8780A, transparent 70%)' }} />
      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.8) 1px, transparent 0)', backgroundSize: '36px 36px' }} />

      <div className="container-pad relative z-10 pt-24 pb-16 md:pb-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase mb-6 border text-orange-200/80"
              style={{ background: 'rgba(232,120,10,0.15)', borderColor: 'rgba(232,120,10,0.3)' }}>
              <Zap size={12} className="text-orange-300" />
              Spray-and-Go · Daily Leave-In · All Hair Types
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-5">
              Your Hair.<br />
              <span style={{ color: ACCENT2 }}>Nourished.</span><br />
              In 10 Seconds.
            </h1>

            <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-lg">
              Vitamin Power Leave-In is the one product that fits every routine. Spray it. Go. No rinsing. No waiting. A lightweight vitamin-rich formula that conditions, detangles, and softens — all without weighing your hair down.
            </p>

            <div className="flex items-center gap-3 mb-8">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill={ACCENT2} stroke="none" />)}
              </div>
              <span className="text-white/60 text-sm">4.8 · 220+ reviews</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href={SHOP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary"
                style={{ background: `linear-gradient(135deg, ${ACCENT}, ${ACCENT2})` }}>
                <ShoppingBag size={18} />
                Shop Now — 15% Off
                <ArrowRight size={16} />
              </a>
              <button
                onClick={() => document.getElementById('benefits')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-white"
              >
                See Why It Works
              </button>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <div className="discount-badge">SPRING2026</div>
              <span className="text-white/60 text-sm">= 15% off your first order</span>
            </div>
          </div>

          {/* Right */}
        <div className="flex justify-center">
  <InteractiveProductDisplay
    imageSrc=""
    alt="Vitamin Power Leave-In Conditioner 8 oz"
    accent={ACCENT}
    accent2={ACCENT2}
    topBadge="⚡ Spray-and-Go Formula"
    bottomBadge="✓ Zero Rinse Required"
    title="Vitamin Power Leave-In Conditioner 8 oz"
    description="A fast daily leave-in for people who want moisture, softness, and protection without adding another rinse step. The product summary now lives directly under the hero visual."
    bullets={[
      'Quick spray application',
      'Lightweight daily moisture',
      'Great between wash days',
      'Family-friendly convenience',
    ]}
    imageClassName="w-64 md:w-80 object-contain"
  >
    {/* IMAGE */}
    <div className="product-hero-image animate-float w-80 md:w-[32rem] flex flex-col items-center gap-4">
      <div
        className="w-80 md:w-[32rem] h-96 md:h-[40rem] rounded-3xl flex flex-col items-center justify-center text-center p-6 border-2 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #2A1200, #3D1A00)', borderColor: `${ACCENT}40`, filter: 'drop-shadow(0 30px 50px rgba(0,0,0,0.4))' }}
      >
        <video
          src="/assets/Vitamin Power Leave in Conditioner.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover rounded-3xl"
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-col items-center justify-center bg-black/40 rounded-b-3xl">
          <p className="text-white/60 font-semibold text-sm">Vitamin Power Leave-In Conditioner 8 oz</p>
        </div>
      </div>
    </div>
  </InteractiveProductDisplay>
        </div>
        </div>

        {/* Stats */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-white/10 pt-10">
          {[
            { n: '10s', label: 'Application Time' },
            { n: '8oz', label: 'Perfect Daily Size' },
            { n: '0', label: 'Rinse Required' },
            { n: 'All', label: 'Hair Types & Ages' },
          ].map(item => (
            <div key={item.label} className="text-center">
              <p className="font-display text-2xl md:text-3xl font-bold" style={{ color: ACCENT2 }}>{item.n}</p>
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
  { icon: <Clock size={26} />, title: 'Spray-and-Go Convenience', desc: 'No rinsing, no sitting time, no fuss. Apply, style, leave. Vitamin Power was built for real life — tight schedules and on-the-go routines.' },
  { icon: <Wind size={26} />, title: 'Feather-Light Formula', desc: 'Specially formulated softeners that nourish without coating. Your hair feels conditioned, not weighed down. No buildup over time.' },
  { icon: <Heart size={26} />, title: 'Daily Use — Safe', desc: 'Gentle enough to use every single day. No harsh chemicals. No sulfates. Just consistent, reliable moisture that builds up positively over time.' },
  { icon: <Layers size={26} />, title: 'Instant Detangling', desc: 'The vitamin-rich blend slips through tangles and knots without tearing. Works on wash days and dry days — a true daily tool.' },
]

function Benefits() {
  return (
    <section id="benefits" className="section-pad bg-white">
      <div className="container-pad">
        <AnimatedSection className="text-center mb-12">
          <p className="section-label" style={{ color: ACCENT }}>
            <span className="w-8 h-px inline-block" style={{ background: ACCENT }} />
            Why Vitamin Power Works
            <span className="w-8 h-px inline-block" style={{ background: ACCENT }} />
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-dudley-navy mb-4">
            The Daily Leave-In That Actually Does the Work
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            No elaborate routine required. Vitamin Power Leave-In was designed for the woman (or man) who refuses to let their hair suffer — even on their busiest days.
          </p>
          <div className="mt-8 flex justify-center">
            <img
              src="/assets/DudleysVitaminsPower.png"
              alt="Dudley's Vitamin Power Ingredients"
              className="max-w-md h-auto rounded-2xl shadow-lg"
            />
          </div>
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

        {/* For the busy woman */}
        <AnimatedSection>
          <div className="rounded-3xl p-8 md:p-12" style={{ background: 'linear-gradient(135deg, #FFF3E0, #FFF8EE)' }}>
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <p className="section-label mb-3" style={{ color: ACCENT }}>Built for Real Life</p>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-dudley-navy mb-4">
                  No Time for a 10-Step Routine? This Is Your Answer.
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                  You have a job. Kids. A life. Vitamin Power Leave-In respects your schedule. Spray it over damp or dry hair, run your fingers through, and go. Your hair is soft, manageable, and protected — without the extra steps.
                </p>
                <div className="space-y-3">
                  {[
                    'Morning routine in minutes, not hours',
                    'Great for refreshing styles on non-wash days',
                    'Kids love it — no more tears from detangling',
                    'Works under any styling product',
                    'Protects from daily environmental damage',
                  ].map(b => (
                    <div key={b} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                        style={{ background: ACCENT }}>
                        <Check size={11} className="text-white" />
                      </div>
                      <p className="text-gray-700 text-sm">{b}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                {/* Daily routine timeline */}
                <div className="bg-white rounded-2xl p-6 shadow-card">
                  <p className="font-semibold text-dudley-navy mb-4 text-sm uppercase tracking-wider">Your New Morning Routine</p>
                  {[
                    { time: '6:55 AM', action: 'Spray Vitamin Power on damp hair', seconds: '5 sec' },
                    { time: '6:55 AM', action: 'Run fingers or wide tooth comb through', seconds: '5 sec' },
                    { time: '6:56 AM', action: 'Style as usual', seconds: 'Done' },
                  ].map((step, i) => (
                    <div key={i} className="flex items-center gap-4 py-3 border-b border-gray-50 last:border-0">
                      <div className="text-xs text-gray-400 w-16 shrink-0 font-mono">{step.time}</div>
                      <div className="flex-1 text-sm text-gray-700">{step.action}</div>
                      <div className="text-xs font-bold px-2 py-1 rounded-full"
                        style={{ background: `${ACCENT}15`, color: ACCENT }}>{step.seconds}</div>
                    </div>
                  ))}
                  <div className="mt-4 p-3 rounded-xl text-center text-sm font-semibold text-dudley-navy"
                    style={{ background: `${ACCENT2}20` }}>
                    ✓ Total extra time: &lt;60 seconds
                  </div>
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
      style={{ background: 'linear-gradient(135deg, #1C0A00 0%, #3D1A00 100%)' }}>
      <div className="container-pad">
        <AnimatedSection className="text-center mb-12">
          <p className="section-label text-white/50">
            <span className="w-8 h-px inline-block bg-white/30" />
            Inside the Formula
            <span className="w-8 h-px inline-block bg-white/30" />
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Lightweight by Design. Powerful by Nature.
          </h2>
          <p className="text-white/60 max-w-xl mx-auto">
            A unique blend of softeners and vitamins formulated specifically to target dryness and damage — without weighing hair down.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {[
            {
              emoji: '💊', name: 'Vitamin Complex', color: ACCENT2,
              desc: 'A proprietary blend of vitamins that replenish nutrients lost from heat styling, chemical treatment, and environmental stress. Rebuilds from within.',
              tags: ['Vitamin-enriched', 'Nutrient replenishment', 'Daily protection'],
            },
            {
              emoji: '🧴', name: 'Softening Complex', color: '#FFC87A',
              desc: 'Unique blend of lightweight softeners that target dryness without coating or buildup. Conditions the strand structure for lasting smoothness.',
              tags: ['Zero buildup', 'Long-lasting softness', 'No heavy residue'],
            },
            {
              emoji: '🌊', name: 'Moisture Retention Blend', color: '#FFE0A3',
              desc: 'Helps lock in and distribute moisture evenly across every strand — from root to tip. Works in minutes, maintains all day.',
              tags: ['All-day hydration', 'Even distribution', 'Roots to ends'],
            },
          ].map((ing, i) => (
            <AnimatedSection key={i}>
              <div className="rounded-3xl p-7 border border-white/10 h-full" style={{ background: 'rgba(255,255,255,0.06)' }}>
                <div className="text-4xl mb-4">{ing.emoji}</div>
                <h3 className="text-white font-display text-xl font-bold mb-3" style={{ color: ing.color }}>{ing.name}</h3>
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

        <AnimatedSection>
          <div className="rounded-3xl p-7 md:p-10 text-center border border-white/10"
            style={{ background: 'rgba(232,120,10,0.08)' }}>
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: ACCENT2 }}>
              The Promise
            </p>
            <h3 className="font-display text-2xl font-bold text-white mb-3">
              Formulated to Be Your Daily Essential
            </h3>
            <p className="text-white/60 text-sm max-w-lg mx-auto mb-6">
              Vitamin Power Leave-In was developed with one person in mind: you. Busy, intentional, and refusing to compromise on the health of your hair. Spray. Go. Glow.
            </p>
            <a href={SHOP_URL} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white transition-all hover:brightness-110"
              style={{ background: `linear-gradient(135deg, ${ACCENT}, ${ACCENT2})` }}>
              <ShoppingBag size={18} />
              Shop Vitamin Power Leave-In
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

const TESTIMONIALS = [
  {
    name: 'Brianna L.', location: 'Nashville, TN', rating: 5, handle: 'r/blackgirls',
    text: "I'm a mom of three and I do NOT have time for long hair routines. Vitamin Power is the one bottle I grab every morning. My daughters use it too. The spray makes it so easy and our hair has never been softer."
  },
  {
    name: 'Monique F.', location: 'Charlotte, NC', rating: 5, handle: 'r/Naturalhair',
    text: "I was skeptical of leave-ins because most feel heavy or leave residue. This one is DIFFERENT. Completely lightweight. My 4B hair drinks it up and stays soft between wash days. Can't go without it now."
  },
  {
    name: 'Tony R.', location: 'Detroit, MI', rating: 5, handle: 'r/BlackWomenOver30',
    text: "My daughter put me on to this for my short natural. It's the quickest part of my morning now — two sprays, finger comb, done. My barber asked what I was using because my scalp and hairline look so much healthier."
  },
]

const FAQS = [
  { question: 'Can I use Vitamin Power Leave-In every day?', answer: 'Absolutely — that\'s exactly what it was designed for. The formula is lightweight and non-accumulating, meaning daily use won\'t lead to buildup or weigh your hair down. It\'s a true daily maintenance product.' },
  { question: 'How much should I use per application?', answer: 'For short hair: 2-3 sprays. For medium-length hair: 4-5 sprays. For long or thick hair: 6-8 sprays, focusing on the ends. Start with less — you can always add more. The lightweight formula means you can layer it without heaviness.' },
  { question: 'Is it safe for children?', answer: 'Yes. The gentle vitamin-based formula is perfect for children\'s hair. It makes detangling faster and easier, reducing morning stress for both parents and kids. Safe for all ages.' },
  { question: 'Can I use it under other styling products?', answer: 'Yes. Apply Vitamin Power Leave-In first as a base conditioning layer, then proceed with your regular styling products. It creates an ideal base that helps hold moisture while allowing other products to perform better.' },
  { question: 'Does it work on heat-styled hair?', answer: 'Yes. Apply before heat styling to provide a conditioning layer that helps minimise heat damage. It\'s compatible with blow dryers, flat irons, and curling wands. It does not replace a dedicated heat protectant but adds additional care.' },
  { question: 'How do I apply the SPRING2026 discount?', answer: 'Head to shop.dudleyq.com, add Vitamin Power Leave-In Conditioner 8oz to your cart, and enter SPRING2026 at checkout for 15% off. Valid for first-time orders in the Spring 2026 promotional period.' },
]

export default function VitaminPowerLeaveIn() {
  return (
    <div className="min-h-screen">
      <Navbar accentColor={ACCENT} ctaUrl={SHOP_URL} />
      <WelcomePopup productName="Vitamin Power Leave-In" accentColor={ACCENT} gradientFrom="#1C0A00" shopUrl={SHOP_URL} />
      <ExitIntentPopup productName="Vitamin Power Leave-In" accentColor={ACCENT} shopUrl={SHOP_URL} />
      <Hero />
      <Benefits />
      <Ingredients />
      <SocialProof
        testimonials={TESTIMONIALS}
        overallRating={4.8}
        totalReviews={224}
        accentColor={ACCENT}
      />
      <OfferSection
        productName="Vitamin Power Leave-In Conditioner 8 oz"
        price="$12.99"
        originalPrice="$15.28"
        shopUrl={SHOP_URL}
        accentColor={ACCENT}
        gradientFrom="#1C0A00"
        features={[
          'Spray-and-go — no rinse required',
          'Lightweight vitamin-rich formula',
          'Instant detangling and softening',
          'Daily use safe — no buildup',
          'Works for all hair types and textures',
          'Perfect size for daily use or travel',
        ]}
      />
      <EmailCapture
        accentColor={ACCENT}
        gradientFrom="#1C0A00"
        headline="Get Your Free Quick Hair Nourishment Guide"
        subline="We'll send you a personalised guide on building a quick, effective daily hair routine — no matter how busy your schedule is. Plus 15% off your first order."
      />
      <FAQ faqs={FAQS} accentColor={ACCENT} bgColor="#FFF8F0" />
      <Footer />
      <StickyMobileCTA
        productName="Vitamin Power Leave-In"
        price="$12.99"
        shopUrl={SHOP_URL}
        accentColor={ACCENT}
      />
    </div>
  )
}