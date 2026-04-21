import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import SectionHeader from '../components/SectionHeader'
import Card from '../components/Card'
import FilterTabs from '../components/FilterTabs'
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

// ===================== HERO SECTION (SADECE GÖRSEL) =====================
function HeroSection() {
  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
      {/* Background Image with slow zoom */}
      <div className="absolute inset-0">
        <img
          src="/images/izmir-hero-still.jpg"
          alt="İzmir"
          className="w-full h-full object-cover scale-110 animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/70" />
      </div>

      {/* Centered content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        <span className="inline-block px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold uppercase tracking-[0.2em] mb-8 animate-fade-in">
          Ege'nin İncisi · 2025 Rehberi
        </span>

        <h1
          className="text-white font-bold text-center mb-6 px-4 animate-fade-in-up"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(40px, 8vw, 88px)',
            lineHeight: 0.95,
            letterSpacing: '-0.03em',
            textShadow: '0 2px 20px rgba(0,0,0,0.3)',
          }}
        >
          İzmir'in En İyi
          <br />
          <em className="gradient-text-sunset not-italic">Mekanlarını</em> Keşfet
        </h1>

        <p
          className="text-white/90 text-lg sm:text-xl max-w-2xl leading-relaxed mb-10 animate-fade-in-up"
          style={{ animationDelay: '0.2s' }}
        >
          Efes'ten Alaçatı'ya, Kordon'dan Kemeraltı'na —
          <br className="hidden sm:block" />
          editörlerimizin hazırladığı 50 detaylı rehberle İzmir'i yaşayın.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 animate-fade-in-up"
          style={{ animationDelay: '0.4s' }}
        >
          <Link
            to="/guides"
            className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full gradient-sunset text-white font-semibold shadow-xl hover:scale-[1.03] transition-transform"
          >
            50 Rehberi Keşfet
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link
            to="/places"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white/15 backdrop-blur-md border border-white/30 text-white font-semibold hover:bg-white/25 transition-colors"
          >
            Mekanları Gör
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <div className="w-px h-10 bg-white scroll-indicator-line" />
        <span className="text-[11px] text-white uppercase tracking-[0.1em]">
          Keşfet
        </span>
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
          title="Şu An Trend"
          description="İzmir'de şu anda en çok konuşulan mekanlar ve etkinlikler"
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
            <Link to={`/places`}>
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
          title="Ne Yapsam?"
          description="İzmir'de keşfedilecek mekanlar, katılınacak etkinlikler ve ilham veren rehberler"
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
            <Link to={`/places`} key={card.id}>
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
          title="En İyiler"
          description="Editörlerimizin seçtiği, İzmir'in en iyileri"
          linkText="Tüm Rehberler"
          linkHref="/guides"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularLists.map((card, i) => (
            <Link to={`/guides`} key={card.id}>
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
              04 — Haberler
            </p>
            <h2 className="text-h3 font-semibold leading-[1.2] tracking-[-0.02em] reveal reveal-delay-1">
              Son Dakika
            </h2>
          </div>
          <span className="text-sm text-black/40 reveal reveal-delay-1 shrink-0">
            {newsCards.length} haber
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {newsCards.map((card, i) => (
            <div
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
            </div>
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
            Semt Semt İzmir
          </h2>
          <p className="mt-3 text-lg text-black/50 max-w-[500px] leading-relaxed reveal reveal-delay-2">
            Her semtin kendine özgü ritmi, mekanları ve hikayesi var
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          {neighborhoodCards.map((card, i) => (
            <Link
              to={`/places`}
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

// ===================== CTA SECTION =====================
function CTASection() {
  return (
    <section className="relative py-28 lg:py-40 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/izmir-hero-still.jpg"
          alt="İzmir"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 max-w-[900px] mx-auto px-4 sm:px-[4vw] text-center">
        <h2
          className="font-bold text-white leading-[0.95] tracking-[-0.04em] mb-6"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(40px, 8vw, 80px)',
          }}
        >
          İZMİR&apos;DE BUGÜN
          <br />
          NE YAPSAM?
        </h2>
        <p className="text-white/85 text-lg mb-10 max-w-[500px] mx-auto">
          Şehrin en iyi mekanlarını, etkinliklerini ve gizli köşelerini keşfet.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/places"
            className="px-8 py-3.5 bg-white text-black rounded-lg font-semibold text-base hover:scale-[1.02] transition-all duration-300"
          >
            Mekanları Keşfet
          </Link>
          <Link
            to="/events"
            className="px-8 py-3.5 border border-white/40 text-white rounded-lg font-semibold text-base hover:bg-white/10 transition-all duration-300"
          >
            Etkinlikleri Gör
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
        <title>izmirilde — İzmir Rehberi, Mekanlar, Etkinlikler ve Keşfedilecek 50 Yer</title>
        <meta
          name="description"
          content="İzmir'in en iyi mekanları, etkinlikleri ve gezilecek yerleri. Efes, Alaçatı, Çeşme, Kordon, Kemeraltı ve daha fazlası için editör rehberi. 50 detaylı blog yazısı."
        />
        <meta
          name="keywords"
          content="İzmir, İzmir gezilecek yerler, İzmir yapılacak şeyler, İzmir rehberi, Efes, Alaçatı, Çeşme, Kordon, Kemeraltı, İzmir mekanlar, İzmir etkinlikler, izmirilde"
        />
        <link rel="canonical" href="https://izmirilde.com/" />
        <meta property="og:title" content="izmirilde — İzmir Rehberi, Mekanlar, Etkinlikler" />
        <meta property="og:description" content="İzmir'de ne yapılır, nereye gidilir? 50 detaylı rehberle Ege'nin incisini keşfedin." />
        <meta property="og:url" content="https://izmirilde.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://izmirilde.com/images/izmir-hero-still.jpg" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'izmirilde',
            url: 'https://izmirilde.com/',
            description: "İzmir rehberi, mekanlar, etkinlikler ve 50 detaylı keşif yazısı",
            inLanguage: 'tr-TR',
            potentialAction: {
              '@type': 'SearchAction',
              target: 'https://izmirilde.com/guides?q={search_term_string}',
              'query-input': 'required name=search_term_string',
            },
          })}
        </script>
      </Helmet>
      <main>
        <HeroSection />
        <TrendingSection />
        <DiscoverySection />
        <PopularListsSection />
        <NewsSection />
        <NeighborhoodSection />
        <MarqueeSection />
        <CTASection />
      </main>
    </>
  )
}
