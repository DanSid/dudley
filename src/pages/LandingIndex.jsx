import { Link } from 'react-router-dom'
import { ArrowRight, Droplets, Wind, Zap, Leaf, Package, Star, Instagram, Facebook, Twitter, Youtube } from 'lucide-react'
import { useState, useRef } from 'react'
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  AnimatePresence,
} from 'framer-motion'

const BRAND_NAVY = '#0c0f3a'
const BRAND_GOLD = '#C9A445'
const BRAND_BLUE = '#0c0f3a'
const BRAND_WHITE = '#ffff'

const PAGES = [
  {
    path: '/pca-moisture-retainer',
    title: 'PCA Moisture Retainer 16 oz',
    tagline: 'Pulls moisture from the air itself.',
    accent: '#C9A445',
    bg: 'linear-gradient(145deg, #141852, #0c0f3a)',
    border: '#C9A44540',
    price: '$18.99',
    icon: <Droplets size={22} />,
    badge: 'Best Seller',
    badgeColor: '#C9A445',
    image: '/assets/IMG_9305 PCA 16 oz.png',
    rating: 4.9,
    reviews: 142,
  },
  {
    path: '/peppermint-combo',
    title: 'Peppermint Soothe Shampoo + Conditioner Combo',
    tagline: 'Wake up your scalp. Feed your hair.',
    accent: '#2D7D5A',
    bg: 'linear-gradient(145deg, #1A5C42, #0d3326)',
    border: '#2D7D5A40',
    price: '$22.99',
    icon: <Wind size={22} />,
    badge: 'Best Value',
    badgeColor: '#4CAF7D',
    image: '/assets/Scalp & Skin Relief 8 oz .png',
    rating: 4.8,
    reviews: 98,
  },
  {
    path: '/vitamin-power-leave-in',
    title: 'Vitamin Power Leave-In Conditioner 8 oz',
    tagline: 'Nourished hair. In 10 seconds.',
    accent: '#E8780A',
    bg: 'linear-gradient(145deg, #3D1A00, #1C0A00)',
    border: '#E8780A40',
    price: '$12.99',
    icon: <Zap size={22} />,
    badge: 'Daily Essential',
    badgeColor: '#E8780A',
    image: '/assets/IMG_9300 Scalp & Skin Relief.png',
    rating: 4.7,
    reviews: 76,
  },
  {
    path: '/scalp-and-skin',
    title: 'Scalp & Skin Relief 8 OZ',
    tagline: "The tingle means it's working.",
    accent: '#1A8B8B',
    bg: 'linear-gradient(145deg, #0A2E2E, #041A1A)',
    border: '#1A8B8B40',
    price: '$12.99',
    icon: <Leaf size={22} />,
    badge: 'Scalp Therapy',
    badgeColor: '#2AB8B8',
    image: '/assets/IMG_9301 Scalp & Skin Relief.png',
    rating: 4.8,
    reviews: 61,
  },
  {
    path: '/protein-boost-seal',
    title: 'Protein Boost Seal 8 oz',
    tagline: 'The softness your hair has been asking for.',
    accent: '#5B7B6A',
    bg: 'linear-gradient(145deg, #1C3028, #0F1F18)',
    border: '#5B7B6A40',
    price: '$12.99',
    icon: <Package size={22} />,
    badge: 'Post-Wash Comfort',
    badgeColor: '#7A9F8C',
    image: '/assets/IMG_9299 Scalp & Skin Relief.png',
    rating: 4.6,
    reviews: 54,
  },
]

const COLLECTIONS = [
  { name: 'Moisture Matters', count: 6, emoji: '💧', color: '#1A6B9A' },
  { name: 'Soothe & Calm', count: 6, emoji: '🌿', color: '#2D7D5A' },
  { name: 'Confident Coils', count: 10, emoji: '✨', color: '#8B5CF6' },
  { name: 'Revival', count: 9, emoji: '🔥', color: '#E8780A' },
  { name: 'Skin Care', count: 16, emoji: '🌸', color: '#E879A0' },
]

// ── Animation variants ──────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
}

const cardVariant = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.34, 1.56, 0.64, 1] } },
}

// ── Reusable section reveal wrapper ────────────────────────────────────────
function RevealSection({ children, delay = 0, style }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      variants={fadeUp}
      custom={delay}
      style={style}
    >
      {children}
    </motion.div>
  )
}

function StarRating({ rating }) {
  return (
    <div style={{ display: 'flex', gap: '2px' }}>
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          size={11}
          fill={s <= Math.floor(rating) ? BRAND_GOLD : 'none'}
          color={s <= Math.floor(rating) ? BRAND_GOLD : 'rgba(255,255,255,0.25)'}
        />
      ))}
    </div>
  )
}

export default function LandingIndex() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  // ── Parallax scroll tracking ─────────────────────────────────────────────
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })

  // Layer speeds — deeper layers move slower, text barely moves
  const deepOrbY    = useTransform(scrollYProgress, [0, 1], ['0%', '140%'])
  const midOrbY     = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
  const nearOrbY    = useTransform(scrollYProgress, [0, 1], ['0%', '70%'])
  const particleY   = useTransform(scrollYProgress, [0, 1], ['0%', '120%'])
  const particleY2  = useTransform(scrollYProgress, [0, 1], ['0%', '90%'])
  const textY       = useTransform(scrollYProgress, [0, 1], ['0%', '28%'])
  const textOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0])

  // Apply spring smoothing to each layer
  const deepOrbYSpring   = useSpring(deepOrbY,   { stiffness: 60, damping: 22 })
  const midOrbYSpring    = useSpring(midOrbY,     { stiffness: 70, damping: 24 })
  const nearOrbYSpring   = useSpring(nearOrbY,    { stiffness: 80, damping: 26 })
  const particleYSpring  = useSpring(particleY,   { stiffness: 65, damping: 20 })
  const particleY2Spring = useSpring(particleY2,  { stiffness: 75, damping: 22 })
  const textYSpring      = useSpring(textY,       { stiffness: 100, damping: 32 })

  return (
    <div style={{ background: BRAND_NAVY, minHeight: '100vh', fontFamily: "'Inter', sans-serif", color: '#fff' }}>

      {/* Announcement bar */}
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{ background: BRAND_GOLD, padding: '10px 20px', textAlign: 'center' }}
      >
        <p style={{ color: BRAND_NAVY, fontSize: '13px', fontWeight: 700, letterSpacing: '0.05em', margin: 0 }}>
          🎉 Use code <strong>SPRING2026</strong> for 15% off — Free shipping on orders $75+
        </p>
      </motion.div>

      {/* Navbar */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
        style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', padding: '0 32px' }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>
          <img src="/assets/New Dudley Logo Med.png" alt="Dudley Beauty"
            style={{ height: '42px', objectFit: 'contain', filter: 'brightness(0) invert(1)', opacity: 0.9 }} />
          <div style={{ display: 'flex', gap: '32px' }}>
            {['Products', 'Collections', 'About'].map((item) => (
              <motion.a
                key={item}
                href="https://shop.dudleyq.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ color: '#fff', y: -1 }}
                transition={{ duration: 0.2 }}
                style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px', fontWeight: 500, textDecoration: 'none' }}
              >
                {item}
              </motion.a>
            ))}
          </div>
          <motion.a
            href="https://shop.dudleyq.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: '0 6px 24px rgba(201,164,69,0.55)' }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 300, damping: 18 }}
            style={{ background: `linear-gradient(135deg, ${BRAND_GOLD}, #DDB95A)`, color: BRAND_NAVY, padding: '10px 22px', borderRadius: '100px', fontSize: '13px', fontWeight: 700, textDecoration: 'none', boxShadow: '0 4px 16px rgba(201,164,69,0.35)', display: 'inline-block' }}
          >
            Shop Now →
          </motion.a>
        </div>
      </motion.nav>

      {/* ══════════════════════════════════════════════════════
          HERO — Layered Parallax Scroll (TomIsLoading pattern)
      ══════════════════════════════════════════════════════ */}
      <header
        ref={heroRef}
        style={{ textAlign: 'center', padding: '90px 24px 110px', position: 'relative', overflow: 'hidden', minHeight: '520px' }}
      >

        {/* ── Parallax Layer 1 (deepest): wide radial background glow ── */}
        <motion.div
          style={{
            position: 'absolute', inset: 0,
            y: deepOrbYSpring,
            background: 'radial-gradient(ellipse 120% 90% at 50% -10%, rgba(201,164,69,0.28) 0%, rgba(201,164,69,0.06) 50%, transparent 72%)',
            pointerEvents: 'none',
          }}
        />

        {/* ── Parallax Layer 2: large gold orb — top right ── */}
        <motion.div
          style={{
            position: 'absolute',
            width: '560px', height: '560px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(201,164,69,0.32) 0%, rgba(201,164,69,0.12) 40%, transparent 70%)',
            boxShadow: '0 0 120px 40px rgba(201,164,69,0.12)',
            top: '-180px', right: '-160px',
            y: midOrbYSpring,
            pointerEvents: 'none',
          }}
        />

        {/* ── Parallax Layer 3: medium orb — bottom left ── */}
        <motion.div
          style={{
            position: 'absolute',
            width: '400px', height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(201,164,69,0.22) 0%, rgba(201,164,69,0.08) 45%, transparent 70%)',
            boxShadow: '0 0 80px 24px rgba(201,164,69,0.08)',
            bottom: '-100px', left: '-120px',
            y: nearOrbYSpring,
            pointerEvents: 'none',
          }}
        />

        {/* ── Parallax Layer 4a: fast-moving particles (top group) ── */}
        <motion.div
          style={{ position: 'absolute', inset: 0, y: particleYSpring, pointerEvents: 'none' }}
        >
          {/* Dot A — large glowing gold dot, top-right area */}
          <motion.div
            animate={{ y: [-18, 18, -18], opacity: [0.85, 1, 0.85] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              position: 'absolute', top: '16%', right: '13%',
              width: '20px', height: '20px', borderRadius: '50%',
              background: BRAND_GOLD,
              boxShadow: `0 0 24px 8px rgba(201,164,69,0.7), 0 0 48px 16px rgba(201,164,69,0.3)`,
            }}
          />
          {/* Dot B — medium dot, mid-left */}
          <motion.div
            animate={{ y: [14, -20, 14], opacity: [0.75, 1, 0.75] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1.0 }}
            style={{
              position: 'absolute', top: '38%', left: '10%',
              width: '14px', height: '14px', borderRadius: '50%',
              background: BRAND_GOLD,
              boxShadow: `0 0 18px 6px rgba(201,164,69,0.65), 0 0 36px 12px rgba(201,164,69,0.25)`,
            }}
          />
          {/* Dot F — bright dot, lower-right */}
          <motion.div
            animate={{ y: [-22, 14, -22], x: [-8, 8, -8], opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            style={{
              position: 'absolute', bottom: '28%', right: '16%',
              width: '16px', height: '16px', borderRadius: '50%',
              background: '#DDB95A',
              boxShadow: `0 0 20px 7px rgba(221,185,90,0.7), 0 0 42px 14px rgba(221,185,90,0.3)`,
            }}
          />
          {/* Ring C — large spinning ring, top-left */}
          <motion.div
            animate={{ rotate: 360, scale: [1, 1.12, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
            style={{
              position: 'absolute', top: '10%', left: '16%',
              width: '72px', height: '72px', borderRadius: '50%',
              border: '2px solid rgba(201,164,69,0.55)',
              boxShadow: 'inset 0 0 12px rgba(201,164,69,0.15), 0 0 12px rgba(201,164,69,0.2)',
            }}
          />
          {/* Ring D — counter-rotate, bottom-right */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
            style={{
              position: 'absolute', bottom: '20%', right: '19%',
              width: '90px', height: '90px', borderRadius: '50%',
              border: '1.5px solid rgba(201,164,69,0.45)',
              boxShadow: '0 0 16px rgba(201,164,69,0.18)',
            }}
          />
        </motion.div>

        {/* ── Parallax Layer 4b: slower second particle group ── */}
        <motion.div
          style={{ position: 'absolute', inset: 0, y: particleY2Spring, pointerEvents: 'none' }}
        >
          {/* Dot G — small bright dot, top-center-left */}
          <motion.div
            animate={{ y: [-12, 16, -12], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 5.8, repeat: Infinity, ease: 'easeInOut', delay: 1.8 }}
            style={{
              position: 'absolute', top: '22%', left: '28%',
              width: '12px', height: '12px', borderRadius: '50%',
              background: BRAND_GOLD,
              boxShadow: `0 0 16px 5px rgba(201,164,69,0.65)`,
            }}
          />
          {/* Dot H — tiny accent dot, mid-right */}
          <motion.div
            animate={{ y: [10, -18, 10], x: [6, -6, 6], opacity: [0.65, 1, 0.65] }}
            transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 2.4 }}
            style={{
              position: 'absolute', top: '50%', right: '10%',
              width: '10px', height: '10px', borderRadius: '50%',
              background: '#E8C96A',
              boxShadow: `0 0 14px 4px rgba(232,201,106,0.7)`,
            }}
          />
          {/* Ring E — large outer ring, bottom-left */}
          <motion.div
            animate={{ rotate: 180, scale: [0.95, 1.05, 0.95] }}
            transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              position: 'absolute', bottom: '10%', left: '8%',
              width: '110px', height: '110px', borderRadius: '50%',
              border: '1.5px solid rgba(201,164,69,0.35)',
              boxShadow: '0 0 20px rgba(201,164,69,0.12)',
            }}
          />
          {/* Ring F — dashed-style double ring, top-right */}
          <motion.div
            animate={{ rotate: -180 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            style={{
              position: 'absolute', top: '8%', right: '8%',
              width: '130px', height: '130px', borderRadius: '50%',
              border: '1px solid rgba(201,164,69,0.28)',
            }}
          />
        </motion.div>

        {/* ── Parallax Layer 5 (closest): text content — moves least ── */}
        <motion.div
          style={{ position: 'relative', y: textYSpring, opacity: textOpacity }}
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          {/* Heritage label */}
          <motion.div variants={fadeUp} custom={0}>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
              style={{
                display: 'inline-block',
                color: 'rgba(201,164,69,0.85)',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                marginBottom: '22px',
                padding: '6px 18px',
                borderRadius: '100px',
                border: '1px solid rgba(201,164,69,0.25)',
                background: 'rgba(201,164,69,0.07)',
              }}
            >
              Est. 1967 · Black Beauty Heritage
            </motion.div>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            variants={fadeUp}
            custom={1}
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(2.6rem, 6.5vw, 4.8rem)',
              fontWeight: 800,
              lineHeight: 1.08,
              marginBottom: '22px',
              marginTop: 0,
              color: BRAND_WHITE,
            }}
          >
            DUDLEY<br />
            <motion.span
              style={{ color: BRAND_GOLD, display: 'inline-block' }}
              animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
            >
              BEAUTY
            </motion.span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={fadeUp}
            custom={2}
            style={{ color: 'rgba(255,255,255,0.55)', fontSize: '18px', maxWidth: '480px', margin: '0 auto 42px', lineHeight: 1.65 }}
          >
            Premium haircare rooted in 59 years of Black beauty heritage — crafted for the way you live.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            custom={3}
            style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}
          >
            <motion.a
              href="#products"
              whileHover={{ scale: 1.06, boxShadow: '0 12px 40px rgba(201,164,69,0.55)' }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 300, damping: 18 }}
              style={{ background: `linear-gradient(135deg, ${BRAND_GOLD}, #DDB95A)`, color: BRAND_NAVY, padding: '14px 34px', borderRadius: '100px', fontSize: '15px', fontWeight: 700, textDecoration: 'none', boxShadow: '0 8px 32px rgba(201,164,69,0.4)', display: 'inline-block' }}
            >
              Explore Products
            </motion.a>
            <motion.a
              href="https://shop.dudleyq.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04, background: 'rgba(255,255,255,0.14)', borderColor: 'rgba(255,255,255,0.35)' }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
              style={{ background: 'rgba(255,255,255,0.08)', color: '#fff', padding: '14px 34px', borderRadius: '100px', fontSize: '15px', fontWeight: 600, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.15)', display: 'inline-block' }}
            >
              Visit Main Store →
            </motion.a>
          </motion.div>

          {/* Scroll hint */}
          <motion.div
            variants={fadeUp}
            custom={4}
            style={{ marginTop: '52px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}
          >
            <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
              style={{ width: '1.5px', height: '32px', background: 'linear-gradient(to bottom, rgba(201,164,69,0.6), transparent)', borderRadius: '2px' }}
            />
          </motion.div>
        </motion.div>
      </header>

      {/* Stats bar */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={stagger}
        style={{ borderTop: '1px solid rgba(255,255,255,0.07)', borderBottom: '1px solid rgba(255,255,255,0.07)', padding: '28px 32px', background: 'rgba(255,255,255,0.02)' }}
      >
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', textAlign: 'center' }}>
          {[['59+', 'Years of Heritage'], ['100+', 'Products'], ['50K+', 'Happy Customers'], ['4.8★', 'Avg. Rating']].map(([val, lbl], i) => (
            <motion.div key={lbl} variants={fadeUp} custom={i}>
              <motion.div
                whileInView={{ scale: [0.8, 1.08, 1] }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                style={{ color: BRAND_GOLD, fontWeight: 800, fontSize: '1.5rem', fontFamily: "'Playfair Display', serif" }}
              >
                {val}
              </motion.div>
              <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '12px', marginTop: '4px', letterSpacing: '0.05em' }}>{lbl}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Collections */}
      <section style={{ padding: '64px 32px 48px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <RevealSection>
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2rem', fontWeight: 700, color: '#fff', marginBottom: '8px', marginTop: 0 }}>Collections</h2>
              <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '15px', margin: 0 }}>Explore products based on your hair needs</p>
            </div>
          </RevealSection>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}
          >
            {COLLECTIONS.map((col) => (
              <motion.a
                key={col.name}
                href="https://shop.dudleyq.com"
                target="_blank"
                rel="noopener noreferrer"
                variants={cardVariant}
                whileHover={{ y: -6, scale: 1.04, boxShadow: `0 16px 40px ${col.color}28` }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', padding: '20px 24px', borderRadius: '20px', textDecoration: 'none', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', minWidth: '120px' }}
              >
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.12 }}
                  transition={{ duration: 0.4 }}
                  style={{ width: '52px', height: '52px', borderRadius: '50%', background: col.color + '25', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', border: `1px solid ${col.color}40` }}
                >
                  {col.emoji}
                </motion.div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ color: '#fff', fontSize: '13px', fontWeight: 600 }}>{col.name}</div>
                  <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '11px', marginTop: '3px' }}>{col.count} products</div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section id="products" style={{ padding: '32px 32px 80px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <RevealSection>
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <div style={{ color: 'rgba(201,164,69,0.8)', fontSize: '12px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '12px' }}>2026 Featured Products</div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.25rem', fontWeight: 700, color: '#fff', marginBottom: '10px', marginTop: 0 }}>Our Top Picks</h2>
              <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '15px', margin: 0 }}>Click any card to explore its full landing page</p>
            <div className="flex justify-center">
  <img
    src="/assets/DudleysAllProducts.png"
    alt="Dudley's Vitamin Power Ingredients"
    className="max-w-md h-auto rounded-2xl shadow-lg"
  />
</div>
       
            </div>
          </RevealSection>
   <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(310px, 1fr))', gap: '24px' }}
          >
            {PAGES.map((page, i) => (
                <motion.div
    key={page.path}
    variants={cardVariant}
    whileHover={{
      y: -10,
      scale: 1.025,
      boxShadow: `0 24px 64px rgba(0,0,0,0.55), 0 0 0 1px ${page.accent}30`,
    }}
    whileTap={{ scale: 0.98 }}
    transition={{ type: 'spring', stiffness: 280, damping: 22 }}
    style={{ borderRadius: '24px', overflow: 'hidden' }}
  >
    <a
      href={page.path}
      target="_blank"
      rel="noopener noreferrer"
      style={{ display: 'block', borderRadius: '24px', overflow: 'hidden', background: page.bg, border: `1px solid ${page.border}`, boxShadow: '0 12px 40px rgba(0,0,0,0.4)', textDecoration: 'none' }}
    >
                  <div style={{ padding: '24px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                      <motion.span
                        initial={{ scale: 0.7, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 + i * 0.05, type: 'spring', stiffness: 300 }}
                        style={{ padding: '5px 12px', borderRadius: '100px', fontSize: '11px', fontWeight: 700, background: `${page.badgeColor}20`, color: page.badgeColor, border: `1px solid ${page.badgeColor}40`, letterSpacing: '0.06em' }}
                      >
                        {page.badge}
                      </motion.span>
                      <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '11px', fontFamily: 'monospace' }}>0{i + 1}</span>
                    </div>

                    <div style={{ height: '160px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                      <motion.img
                        src={page.image}
                        alt={page.title}
                        whileHover={{ scale: 1.08, rotate: [-1, 1, -1, 0] }}
                        transition={{ duration: 0.4 }}
                        style={{ maxHeight: '155px', maxWidth: '100%', objectFit: 'contain', filter: 'drop-shadow(0 8px 24px rgba(0,0,0,0.5))' }}
                        onError={(e) => {
                          e.target.style.display = 'none'
                          const fb = e.target.parentNode.querySelector('.img-fallback')
                          if (fb) fb.style.display = 'flex'
                        }}
                      />
                      <div className="img-fallback" style={{ display: 'none', width: '90px', height: '120px', borderRadius: '16px', background: `${page.accent}15`, border: `1px solid ${page.accent}30`, alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '6px' }}>
                        <div style={{ color: page.accent }}>{page.icon}</div>
                        <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '10px', margin: 0 }}>Image TBD</p>
                      </div>
                    </div>

                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      style={{ width: '32px', height: '2px', borderRadius: '2px', background: page.accent, marginBottom: '12px', transformOrigin: 'left' }}
                    />
                    <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '17px', fontWeight: 700, color: '#fff', marginBottom: '8px', lineHeight: 1.3, margin: '0 0 8px' }}>{page.title}</h3>
                    <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px', marginBottom: '12px', lineHeight: 1.5, margin: '0 0 12px' }}>{page.tagline}</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                      <StarRating rating={page.rating} />
                      <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '11px' }}>{page.rating} ({page.reviews})</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '16px' }}>
                      <span style={{ color: page.accent, fontWeight: 800, fontSize: '20px', fontFamily: "'Playfair Display', serif" }}>{page.price}</span>
                      <motion.span
                        whileHover={{ x: 4 }}
                        transition={{ type: 'spring', stiffness: 400 }}
                        style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: 600, color: 'rgba(255,255,255,0.65)' }}
                      >
                        View Page <ArrowRight size={14} />
                      </motion.span>
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Brand Values */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={stagger}
        style={{ background: 'rgba(255,255,255,0.02)', borderTop: '1px solid rgba(255,255,255,0.07)', borderBottom: '1px solid rgba(255,255,255,0.07)', padding: '48px 32px' }}
      >
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '32px', textAlign: 'center' }}>
          {[
            { icon: '🔬', title: 'Scientifically Formulated', desc: 'Backed by decades of hair research' },
            { icon: '🌿', title: 'Clean Ingredients', desc: 'No harsh chemicals, ever' },
            { icon: '🏆', title: 'Quality Guarantee', desc: '100% money-back promise' },
            { icon: '🚚', title: 'Fast Shipping', desc: 'Ships in 2–3 business days' },
          ].map((v, i) => (
            <motion.div
              key={v.title}
              variants={scaleIn}
              custom={i}
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            >
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 3.5 + i * 0.4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
                style={{ fontSize: '2rem', marginBottom: '12px' }}
              >
                {v.icon}
              </motion.div>
              <div style={{ color: '#fff', fontWeight: 600, fontSize: '14px', marginBottom: '6px' }}>{v.title}</div>
              <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '13px' }}>{v.desc}</div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Newsletter */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        style={{ padding: '72px 32px', textAlign: 'center' }}
      >
        <div style={{ maxWidth: '520px', margin: '0 auto' }}>
          <motion.div
            animate={{ rotate: [0, 8, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            style={{ fontSize: '2rem', marginBottom: '16px' }}
          >
            ✉️
          </motion.div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.9rem', fontWeight: 700, color: '#fff', marginBottom: '12px', marginTop: 0 }}>Sign Up for News & Promos</h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '15px', marginBottom: '32px', lineHeight: 1.6 }}>
            Get new product alerts, special offers, and coupon codes straight to your inbox.
          </p>
          <AnimatePresence mode="wait">
            {subscribed ? (
              <motion.div
                key="success"
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.85, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                style={{ padding: '16px 32px', borderRadius: '16px', background: 'rgba(201,164,69,0.15)', border: '1px solid rgba(201,164,69,0.3)', color: BRAND_GOLD, fontWeight: 600 }}
              >
                🎉 You're subscribed! Check your inbox for a welcome gift.
              </motion.div>
            ) : (
              <motion.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{ display: 'flex', gap: '12px', maxWidth: '440px', margin: '0 auto' }}
              >
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ flex: 1, padding: '14px 20px', borderRadius: '100px', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', fontSize: '14px', outline: 'none' }}
                />
                <motion.button
                  onClick={() => email && setSubscribed(true)}
                  whileHover={{ scale: 1.05, boxShadow: '0 6px 24px rgba(201,164,69,0.5)' }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  style={{ padding: '14px 24px', borderRadius: '100px', border: 'none', background: `linear-gradient(135deg, ${BRAND_GOLD}, #DDB95A)`, color: BRAND_NAVY, fontWeight: 700, fontSize: '14px', cursor: 'pointer', whiteSpace: 'nowrap' }}
                >
                  Join
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        style={{ borderTop: '1px solid rgba(255,255,255,0.08)', padding: '48px 32px 32px' }}
      >
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', marginBottom: '48px' }}>
            <div>
              <img src="/assets/New Dudley Logo Med.png" alt="Dudley Beauty" style={{ height: '36px', objectFit: 'contain', filter: 'brightness(0) invert(1)', opacity: 0.8, marginBottom: '16px', display: 'block' }} />
              <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '13px', lineHeight: 1.7, margin: '0 0 20px' }}>
                59 years of premium haircare rooted in Black beauty heritage.
              </p>
              <div style={{ display: 'flex', gap: '10px' }}>
                {[Twitter, Facebook, Instagram, Youtube].map((Icon, idx) => (
                  <motion.a
                    key={idx}
                    href="https://shop.dudleyq.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, background: 'rgba(201,164,69,0.15)', borderColor: 'rgba(201,164,69,0.4)' }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}
                  >
                    <Icon size={15} />
                  </motion.a>
                ))}
              </div>
            </div>

            <div>
              <h4 style={{ color: '#fff', fontSize: '12px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '16px', marginTop: 0 }}>Quick Links</h4>
              {['Home', 'Products', 'Hair Collections', 'News & Events'].map((l) => (
                <motion.a
                  key={l}
                  href="https://shop.dudleyq.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 4, color: 'rgba(255,255,255,0.75)' }}
                  transition={{ duration: 0.2 }}
                  style={{ display: 'block', color: 'rgba(255,255,255,0.45)', fontSize: '13px', textDecoration: 'none', marginBottom: '10px' }}
                >
                  {l}
                </motion.a>
              ))}
            </div>

            <div>
              <h4 style={{ color: '#fff', fontSize: '12px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '16px', marginTop: 0 }}>Product Guarantee</h4>
              <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '13px', lineHeight: 1.7, margin: 0 }}>
                Dudley Beauty Corp, LLC stands behind our products. We offer a quality assurance money-back guarantee when products are purchased from an authorized seller.
              </p>
            </div>

            <div>
              <h4 style={{ color: '#fff', fontSize: '12px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '16px', marginTop: 0 }}>Contact Us</h4>
              <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '13px', lineHeight: 2.2 }}>
                <div>Dudley Beauty Corp, LLC</div>
                <div>P.O. Box 168 · High Point, NC 27261</div>
                <div>888-573-8210</div>
                <a href="mailto:admin@dudleyq.com" style={{ color: BRAND_GOLD, textDecoration: 'none' }}>admin@dudleyq.com</a>
              </div>
            </div>
          </div>

          <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
            <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '12px', margin: 0 }}>© 2026 Dudley Beauty </p>
             </div>
        </div>
      </motion.footer>
    </div>
  )
}
