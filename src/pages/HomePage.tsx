import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import SectionHeader from '../components/SectionHeader'
import Card from '../components/Card'
import FilterTabs from '../components/FilterTabs'
import BlogArchiveSection from '../components/BlogArchiveSection'
import AnnouncementBanner from '../components/AnnouncementBanner'
import useScrollReveal from '../hooks/useScrollReveal'
import {
  trendingCards,
  discoveryCards,
  popularLists,
  newsCards,
  neighborhoodCards,
  marqueeItems,
  filterTabs,
} from '../data'
import { hiddenPlaces } from '../data/hiddenPlaces'

// ===================== HERO SLIDER DATA =====================
const heroSlides = [
  {
    image: '/images/izmir-hero-still.jpg',
    badge: 'İzmir Rehberi · 2026 Güncel',
    title: 'İzmir\'de Gezilecek',
    highlight: 'En İyi Yerler',
    titleEnd: '— 2026 Rehberi',
    desc: 'Efes\'ten Alaçatı\'ya, Kordon\'dan Kemeraltı\'na — editörlerimizin hazırladığı 60 detaylı rehberle İzmir\'i yaşayın.',
    cta1: { label: 'İzmir Rehberini İncele', href: '/guides/izmir-gezilecek-yerler-tam-rehber' },
    cta2: { label: '32 İlçeyi Gör', href: '/districts' },
    accent: 'from-orange-600 via-red-500 to-orange-400',
  },
  {
    image: '/images/alacati-hero.jpg',
    badge: 'Alaçatı Rehberi · 2026 Sezonu',
    title: 'Alaçatı\'da',
    highlight: 'Gezilecek Yerler',
    titleEnd: 've Mekanlar',
    desc: 'Taş sokaklardan butik otellere, surf okullarından ünlü restoranlarına — Alaçatı\'nın tam rehberi burada.',
    cta1: { label: 'Alaçatı Rehberi', href: '/guides/alacati-gezi-rehberi-2026' },
    cta2: { label: 'Çeşme Plajları', href: '/guides/cesme-plajlari-rehberi-2026' },
    accent: 'from-amber-500 via-orange-500 to-red-500',
  },
  {
    image: '/images/cesme-hero.jpg',
    badge: 'Çeşme Plajları · Yaz 2026',
    title: 'Çeşme\'nin',
    highlight: 'En İyi Plajları',
    titleEnd: 've Beach Club\'ları',
    desc: 'Altın kumları, kristal suları ve eşsiz beach club\'larıyla Çeşme — İzmir\'in en gözde tatil cenneti.',
    cta1: { label: 'Çeşme Plaj Rehberi', href: '/guides/cesme-plajlari-rehberi-2026' },
    cta2: { label: 'Çeşme İlçesi', href: '/districts/cesme' },
    accent: 'from-orange-500 via-amber-400 to-yellow-400',
  },
  {
    image: '/images/kordon-hero.jpg',
    badge: 'İzmir Kordon · 2026',
    title: 'İzmir\'de',
    highlight: 'Yapılacak Şeyler',
    titleEnd: 've Rotalar',
    desc: 'Ege kıyısında akşam yürüyüşü, deniz ürünleri ve İzmir\'in muhteşem silueti — İzmir\'i 3 günde keşfedin.',
    cta1: { label: 'İzmir 3 Günlük Rota', href: '/guides/izmir-3-gunluk-rota' },
    cta2: { label: 'Mekanları Gör', href: '/places' },
    accent: 'from-red-600 via-orange-500 to-amber-400',
  },
]

// ===================== HERO SECTION =====================
function HeroSection() {
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const goTo = (idx: number) => {
    if (animating || idx === current) return
    setAnimating(true)
    setTimeout(() => {
      setCurrent(idx)
      setAnimating(false)
    }, 400)
  }

  const next = () => goTo((current + 1) % heroSlides.length)
  const prev = () => goTo((current - 1 + heroSlides.length) % heroSlides.length)

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrent(c => (c + 1) % heroSlides.length)
    }, 5500)
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [])

  const slide = heroSlides[current]

  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden hero-slider-root">
      {/* Slide backgrounds — crossfade */}
      {heroSlides.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: i === current ? 1 : 0, zIndex: 0 }}
        >
          <img
            src={s.image}
            alt="İzmir"
            className="w-full h-full object-cover scale-[1.06] animate-slow-zoom"
            loading={i === 0 ? 'eager' : 'lazy'}
            onError={(e) => { (e.target as HTMLImageElement).src = '/images/izmir-hero-still.jpg' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/45 to-black/75" />
        </div>
      ))}

      {/* Sparkle overlay */}
      <div className="absolute inset-0 sparkle-overlay pointer-events-none z-[1]" />

      {/* Orange sparkle stars */}
      {[
        { top: '15%', left: '12%', delay: '0s', size: 'large' },
        { top: '25%', left: '85%', delay: '0.7s', size: 'medium' },
        { top: '45%', left: '6%', delay: '1.2s', size: 'small' },
        { top: '60%', left: '93%', delay: '0.4s', size: 'large' },
        { top: '35%', left: '52%', delay: '1.8s', size: 'small' },
        { top: '78%', left: '28%', delay: '0.9s', size: 'medium' },
        { top: '18%', left: '68%', delay: '1.5s', size: 'small' },
        { top: '82%', left: '72%', delay: '2.1s', size: 'large' },
        { top: '50%', left: '40%', delay: '0.3s', size: 'small' },
        { top: '10%', left: '45%', delay: '1.0s', size: 'medium' },
      ].map((star, i) => (
        <div
          key={i}
          className={`hero-sparkle-star hero-sparkle-${star.size}`}
          style={{ top: star.top, left: star.left, animationDelay: star.delay, zIndex: 2 }}
        />
      ))}

      {/* Shimmer sweep */}
      <div className="shimmer-sweep z-[2]" />

      {/* Orange glow orbs */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full blur-[120px] opacity-20 z-[1]" style={{ background: 'radial-gradient(circle, #FF6600, transparent)' }} />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full blur-[100px] opacity-15 z-[1]" style={{ background: 'radial-gradient(circle, #FF4500, transparent)' }} />

      {/* Content */}
      <div
        className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center"
        style={{ opacity: animating ? 0 : 1, transform: animating ? 'translateY(12px)' : 'translateY(0)', transition: 'opacity 0.4s ease, transform 0.4s ease' }}
      >
        <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/25 text-white text-xs font-semibold uppercase tracking-[0.22em] mb-8 animate-fade-in hero-badge-glow">
          {slide.badge}
        </span>

        <h1
          className="text-white font-bold text-center mb-6 px-4 animate-fade-in-up"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(38px, 7.5vw, 90px)',
            lineHeight: 0.95,
            letterSpacing: '-0.03em',
            color: '#ffffff',
            textShadow: '0 2px 32px rgba(0,0,0,0.4)',
          }}
        >
          {slide.title}
          <br />
          <em
            className="not-italic"
            style={{
              background: `linear-gradient(135deg, #FF8C00, #FF4500, #FF6600, #FFB347)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 20px rgba(255,102,0,0.6))',
            }}
          >
            {slide.highlight}
          </em>{' '}
          {slide.titleEnd}
        </h1>

        <p
          className="text-lg sm:text-xl max-w-2xl leading-relaxed mb-10 animate-fade-in-up hero-desc-text"
          style={{
            animationDelay: '0.15s',
            color: 'rgba(255,255,255,0.92)',
            textShadow: '0 1px 12px rgba(0,0,0,0.6), 0 0 30px rgba(255,102,0,0.2)',
            fontWeight: 500,
          }}
        >
          {slide.desc}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <Link
            to={slide.cta1.href}
            className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-white font-semibold shadow-2xl hover:scale-[1.04] transition-all duration-300 hero-cta-primary"
            style={{ background: 'linear-gradient(135deg, #FF4500, #FF6600, #FF8C00)', boxShadow: '0 0 30px rgba(255,102,0,0.5), 0 4px 20px rgba(0,0,0,0.3)' }}
          >
            {slide.cta1.label}
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link
            to={slide.cta2.href}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white/12 backdrop-blur-md border border-white/30 text-white font-semibold hover:bg-white/22 hover:border-white/50 transition-all duration-300"
          >
            {slide.cta2.label}
          </Link>
        </div>
      </div>

      {/* Slider Controls */}
      {/* Prev / Next arrows */}
      <button
        onClick={prev}
        aria-label="Önceki"
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/30 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-orange-500/70 hover:border-orange-400 transition-all duration-300 hover:scale-110"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={next}
        aria-label="Sonraki"
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/30 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-orange-500/70 hover:border-orange-400 transition-all duration-300 hover:scale-110"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Slayt ${i + 1}`}
            className="transition-all duration-400 rounded-full"
            style={{
              width: i === current ? '32px' : '8px',
              height: '8px',
              background: i === current
                ? 'linear-gradient(90deg, #FF4500, #FF8C00)'
                : 'rgba(255,255,255,0.4)',
              boxShadow: i === current ? '0 0 12px rgba(255,102,0,0.7)' : 'none',
            }}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 z-20 bg-white/10">
        <div
          className="h-full hero-progress-bar"
          style={{ background: 'linear-gradient(90deg, #FF4500, #FF8C00)' }}
        />
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <div className="w-px h-8 bg-white/50 scroll-indicator-line" />
        <span className="text-[10px] text-white/70 uppercase tracking-[0.15em]">Keşfet</span>
      </div>
    </section>
  )
}


// ===================== TRENDING SECTION =====================
function TrendingSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-[4vw]">
        <SectionHeader
          label="01 — Keşfet"
          title="İzmir'de Şu An Trend"
          description="İzmir'de şu an en çok ziyaret edilen mekanlar, koylar ve etkinlikler"
          linkText="Tümünü Gör"
          linkHref="/places"
        />
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto no-scrollbar scroll-snap-x px-4 sm:px-[4vw] pb-4"
      >
        {trendingCards.map((card, i) => (
          <div
            key={card.id}
            className="shrink-0 w-[280px] sm:w-[320px] scroll-snap-start"
          >
            <Link to={card.href}>
              <Card
                image={card.image}
                category={card.category}
                title={card.title}
                subtitle={card.subtitle}
                location={card.location}
                index={i}
              />
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}

// ===================== DISCOVERY SECTION =====================
function DiscoverySection() {
  const [activeFilter, setActiveFilter] = useState('Tümü')

  const filtered =
    activeFilter === 'Tümü'
      ? discoveryCards
      : discoveryCards.filter((c) =>
          c.category.toLowerCase().includes(activeFilter.toLowerCase())
        )

  return (
    <section className="gradient-warm py-20 lg:py-28">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-[4vw]">
        <SectionHeader
          label="02 — Keşfet"
          title="İzmir'de Ne Yapılır?"
          description="İzmir'de yapılacak şeyler: mekanlar, gezilecek yerler ve editör rehberleri"
          linkText="Tümünü Gör"
          linkHref="/guides"
        />

        <div className="mt-6">
          <FilterTabs
            tabs={filterTabs}
            active={activeFilter}
            onChange={setActiveFilter}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {filtered.map((card, i) => (
            <Link to={card.href} key={card.id}>
              <Card
                image={card.image}
                category={card.category}
                title={card.title}
                subtitle={card.subtitle}
                location={card.location}
                index={i}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

// ===================== POPULAR LISTS SECTION =====================
function PopularListsSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-[4vw]">
        <SectionHeader
          label="03 — Popüler Listeler"
          title="İzmir'in En İyi Mekanları"
          description="Editörlerimizin seçtiği İzmir'in en iyi kahvaltı, restoran ve gece hayatı mekanları"
          linkText="Tüm Rehberler"
          linkHref="/guides"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularLists.map((card, i) => (
            <Link to={card.href} key={card.id}>
              <Card
                image={card.image}
                category={card.category}
                title={card.title}
                subtitle={card.subtitle}
                readTime={card.readTime}
                aspect="landscape"
                index={i}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

// ===================== NEWS SECTION =====================
function NewsSection() {
  return (
    <section className="bg-white pb-16 lg:pb-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-[4vw]">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-black/50 mb-2 reveal">
              04 — İzmir Haberleri
            </p>
            <h2 className="text-h3 font-semibold leading-[1.2] tracking-[-0.02em] reveal reveal-delay-1">
              İzmir Güncel Haberler
            </h2>
          </div>
          <span className="text-sm text-black/40 reveal reveal-delay-1 shrink-0">
            {newsCards.length} haber
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {newsCards.map((card, i) => (
            <Link
              to={card.href}
              key={card.id}
              className="group cursor-pointer flex gap-4 items-start reveal"
              style={{ transitionDelay: `${i * 0.05}s` }}
            >
              <div className="shrink-0 w-[100px] h-[100px] rounded-xl overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-[10px] font-medium text-black/50 uppercase tracking-wide">
                  {card.category}
                </span>
                <h4 className="font-medium text-sm leading-snug mt-1 line-clamp-2 group-hover:text-black/80 transition-colors">
                  {card.title}
                </h4>
                <p className="text-xs text-black/40 mt-1">{card.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

// ===================== NEIGHBORHOOD SECTION =====================
function NeighborhoodSection() {
  return (
    <section className="gradient-warm py-20 lg:py-28">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-[4vw]">
        <div className="mb-10">
          <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-black/50 mb-3 reveal">
            05 — Mahalleler
          </p>
          <h2 className="text-h2 font-semibold leading-[1.1] tracking-[-0.03em] reveal reveal-delay-1">
            İzmir'de Gezilecek Semtler
          </h2>
          <p className="mt-3 text-lg text-black/50 max-w-[500px] leading-relaxed reveal reveal-delay-2">
            İzmir'in en güzel semtleri: Alsancak, Karşıyaka, Çeşme, Urla ve daha fazlası
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          {neighborhoodCards.map((card, i) => (
            <Link
              to={card.href}
              key={card.id}
              className="group relative aspect-[3/4] rounded-2xl overflow-hidden reveal"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white font-semibold text-2xl mb-1">
                  {card.title}
                </h3>
                <p className="text-white/80 text-sm">{card.subtitle}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

// ===================== MARQUEE SECTION =====================
function MarqueeSection() {
  const doubled = [...marqueeItems, ...marqueeItems]

  return (
    <section className="bg-black py-10 sm:py-12 overflow-hidden reveal">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center text-white/80 text-xs sm:text-sm font-medium uppercase tracking-[0.08em] whitespace-nowrap px-4"
          >
            <span className="w-2 h-2 rounded-full bg-white/30 mr-4" />
            {item}
          </span>
        ))}
      </div>
    </section>
  )
}

// ===================== HIDDEN PLACES SECTION =====================
function HiddenPlacesSection() {
  // Take 6 randomly selected, but stable ones
  const featuredHidden = [
    hiddenPlaces[0],   // Saklı Cennet Koyu - Foça
    hiddenPlaces[1],   // Dolungaz Koyu - Karaburun
    hiddenPlaces[10],  // Erythrai Antik Kenti
    hiddenPlaces[17],  // Ayaz Şelalesi
    hiddenPlaces[25],  // Doğanbey Köyü
    hiddenPlaces[40],  // Kalanoros Tepesi
  ].filter(Boolean)

  return (
    <section className="relative py-20 lg:py-28 bg-gradient-to-b from-white via-orange-50/20 to-white overflow-hidden">
      {/* Sparkle decoration */}
      <div className="sparkle-star" style={{ top: '10%', left: '5%', animationDelay: '0s' }} />
      <div className="sparkle-star" style={{ top: '25%', left: '95%', animationDelay: '0.5s' }} />
      <div className="sparkle-star" style={{ top: '70%', left: '8%', animationDelay: '1s' }} />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 reveal">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-0.5 gradient-sunset" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-black/60">
                04 — Saklı Cennetler
              </span>
            </div>
            <h2
              className="text-4xl sm:text-5xl font-bold leading-[0.95] tracking-[-0.02em] max-w-3xl"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              İzmir&apos;de <em className="gradient-text-sunset not-italic">Keşfedilmemiş</em><br />
              50 Gizli Yer
            </h2>
            <p className="mt-4 text-black/60 text-lg max-w-2xl">
              Foça'nın bilinmeyen koylarından, Bergama'nın antik hazinelerine. Yerel halkın yıllardır gittiği saklı cennetler.
            </p>
          </div>
          <Link
            to="/hidden-places"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full gradient-sunset text-white font-semibold hover:scale-105 transition-transform whitespace-nowrap"
          >
            50 Yerin Tümünü Gör →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredHidden.map((p, i) => (
            <Link
              to="/hidden-places"
              key={p.id}
              className="group block rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-500 card-hover reveal"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover card-image-zoom"
                  loading="lazy"
                  onError={(e) => {
                    const t = e.target as HTMLImageElement
                    t.onerror = null
                    t.src = '/images/kulturpark-izmir.jpg'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold text-white gradient-sunset shadow-md">
                    🌟 Gizli
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-3 py-1 rounded-full text-[10px] font-semibold text-white bg-black/60 backdrop-blur-sm">
                    📍 {p.district}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg leading-tight mb-2 group-hover:gradient-text-sunset transition-all" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {p.name}
                </h3>
                <p className="text-sm text-black/60 line-clamp-2 leading-relaxed">
                  {p.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

// ===================== CTA SECTION =====================
function CTASection() {
  return (
    <section className="relative py-28 lg:py-40 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/izmir-hero-still.jpg"
          alt="İzmir Körfezi manzarası — izmirilde İzmir rehberi"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 max-w-[900px] mx-auto px-4 sm:px-[4vw] text-center">
        <img
          src="/izmirilde-icon-256.png"
          alt="izmirilde — İzmir şehir rehberi logosu"
          className="h-24 w-24 mx-auto mb-6 drop-shadow-2xl animate-parallax-float"
        />
        <h2
          className="font-bold text-white leading-[0.95] tracking-[-0.04em] mb-6"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(40px, 8vw, 80px)',
          }}
        >
          İZMİR&apos;DE GEZILECEK
          <br />
          EN İYİ YERLER
        </h2>
        <p className="text-white/85 text-lg mb-10 max-w-[500px] mx-auto">
          İzmir'in en iyi mekanları, gezilecek yerleri, etkinlikleri ve gizli köşeleri — editör rehberiyle keşfet.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/guides/izmir-gezilecek-yerler-tam-rehber"
            className="px-8 py-3.5 bg-white text-black rounded-lg font-semibold text-base hover:scale-[1.02] transition-all duration-300"
          >
            İzmir Rehberini İncele
          </Link>
          <Link
            to="/guides/izmir-3-gunluk-rota"
            className="px-8 py-3.5 border border-white/40 text-white rounded-lg font-semibold text-base hover:bg-white/10 transition-all duration-300"
          >
            3 Günlük Rota
          </Link>
        </div>
      </div>
    </section>
  )
}

// ===================== HOMEPAGE =====================
export default function HomePage() {
  useScrollReveal()

  return (
    <>
      <Helmet>
        <title>İzmir Rehberi 2026 — Gezilecek Yerler, Mekanlar, Etkinlikler | izmirilde</title>
        <meta
          name="description"
          content="İzmir'de gezilecek en iyi yerler, mekanlar ve etkinlikler. Efes, Alaçatı, Çeşme, Kordon, Kemeraltı için 60 detaylı editör rehberi. İzmir'in gizli köşeleri burada."
        />
        <meta
          name="keywords"
          content="İzmir, İzmir gezilecek yerler, İzmir yapılacak şeyler, İzmir rehberi, Efes, Alaçatı, Çeşme, Kordon, Kemeraltı, İzmir mekanlar, İzmir etkinlikler, izmirilde"
        />
        <link rel="canonical" href="https://izmirilde.com/" />
        <meta property="og:title" content="izmirilde — İzmir Rehberi, Mekanlar, Etkinlikler" />
        <meta property="og:description" content="İzmir'de ne yapılır, nereye gidilir? 60 detaylı rehberle Ege'nin incisini keşfedin." />
        <meta property="og:url" content="https://izmirilde.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://izmirilde.com/images/izmir-hero-still.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="izmirilde" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@izmirilde" />
        <meta name="twitter:title" content="izmirilde — İzmir Rehberi | 60 Blog, 32 İlçe" />
        <meta name="twitter:description" content="İzmir'de ne yapılır, nereye gidilir? 60 detaylı rehberle Ege'nin incisini keşfedin." />
        <meta name="twitter:image" content="https://izmirilde.com/images/izmir-hero-still.jpg" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'izmirilde',
            url: 'https://izmirilde.com/',
            description: "İzmir rehberi, mekanlar, etkinlikler ve 60 detaylı keşif yazısı",
            inLanguage: 'tr-TR',
            potentialAction: {
              '@type': 'SearchAction',
              target: 'https://izmirilde.com/guides?q={search_term_string}',
              'query-input': 'required name=search_term_string',
            },
          })}
        </script>
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: 'https://izmirilde.com/' },
          ],
        })}</script>
      </Helmet>
      <main>
        <HeroSection />
        <AnnouncementBanner />
        <TrendingSection />
        <BlogArchiveSection />
        <DiscoverySection />
        <PopularListsSection />
        <NewsSection />
        <NeighborhoodSection />
        <HiddenPlacesSection />
        <MarqueeSection />
        <CTASection />
      </main>
    </>
  )
}
