import { useState, useEffect, useRef, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Search, X } from 'lucide-react'
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
  placeCards,
  eventCards,
  guideCards,
} from '../data'

// ===================== ARAMA TİPLERİ =====================
type SearchItem = {
  id: string
  title: string
  subtitle: string
  category: string
  location?: string
  image: string
  type: 'mekan' | 'etkinlik' | 'rehber'
}

// Tüm içerikleri birleştir
function getAllSearchItems(): SearchItem[] {
  const places: SearchItem[] = placeCards.map((p) => ({
    id: `p-${p.id}`,
    title: p.title,
    subtitle: p.subtitle,
    category: p.category,
    location: p.location,
    image: p.image,
    type: 'mekan' as const,
  }))
  const events: SearchItem[] = eventCards.map((e) => ({
    id: `e-${e.id}`,
    title: e.title,
    subtitle: `${e.day} ${e.month} — ${e.venue}`,
    category: e.category,
    location: e.venue,
    image: e.image,
    type: 'etkinlik' as const,
  }))
  const guides: SearchItem[] = guideCards.map((g) => ({
    id: `g-${g.id}`,
    title: g.title,
    subtitle: g.subtitle,
    category: g.category,
    image: g.image,
    type: 'rehber' as const,
  }))
  return [...places, ...events, ...guides]
}

// ===================== HERO SECTION =====================
function HeroSection({ onSearch }: { onSearch: (q: string) => void }) {
  const [loaded, setLoaded] = useState(false)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 300)
    return () => clearTimeout(timer)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) onSearch(query.trim())
  }

  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/izmir-hero-still.jpg"
          alt="İzmir"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Glass Panel */}
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <div
          className={`glass-panel rounded-3xl p-8 sm:p-12 max-w-[720px] w-full text-center shadow-[0_8px_40px_rgba(0,0,0,0.15)] transition-all duration-1000 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Logo */}
          <div className="flex justify-center mb-5">
            <img
              src="/izmirilde-logo.png"
              alt="izmirilde"
              className="h-8 w-auto"
            />
          </div>
          <div className="w-16 h-px bg-black/10 mx-auto mb-8" />

          {/* Search Bar */}
          <form
            onSubmit={handleSubmit}
            className={`flex items-center gap-3 bg-black/[0.04] rounded-xl px-5 py-4 transition-all duration-600 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '0.3s' }}
          >
            <Search className="w-5 h-5 text-black/40 shrink-0" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Mekan, etkinlik veya mahalle ara..."
              className="flex-1 bg-transparent text-base text-black placeholder:text-black/40 min-w-0"
            />
            <button
              type="submit"
              className="shrink-0 px-6 py-2.5 bg-black text-white rounded-lg text-sm font-medium hover:bg-black/90 transition-colors"
            >
              Ara
            </button>
          </form>

          {/* Quick Tags */}
          <div
            className={`flex flex-wrap items-center justify-center gap-2 mt-5 transition-all duration-500 ${
              loaded ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ transitionDelay: '0.5s' }}
          >
            {[
              { label: '☕ Kafeler', query: 'kafe' },
              { label: '🍽 Restoranlar', query: 'restoran' },
              { label: '🌅 Beach', query: 'beach' },
              { label: '🎭 Etkinlikler', query: 'konser' },
              { label: '📍 Alsancak', query: 'alsancak' },
              { label: '📍 Çeşme', query: 'çeşme' },
            ].map((tag, i) => (
              <span
                key={tag.label}
                onClick={() => onSearch(tag.query)}
                className="px-4 py-1.5 bg-black/[0.04] rounded-full text-[13px] text-black/60 hover:bg-black/[0.08] transition-colors cursor-pointer"
                style={{
                  opacity: loaded ? 1 : 0,
                  transition: `opacity 0.4s ease ${0.6 + i * 0.05}s`,
                }}
              >
                {tag.label}
              </span>
            ))}
          </div>
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

// ===================== ARAMA SONUÇLARI =====================
function SearchResultsSection({
  query,
  onClear,
}: {
  query: string
  onClear: () => void
}) {
  const allItems = useMemo(() => getAllSearchItems(), [])
  const results = useMemo(() => {
    if (!query) return []
    const q = query.toLowerCase()
    return allItems.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.subtitle.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        (item.location && item.location.toLowerCase().includes(q))
    )
  }, [query, allItems])

  const mekanlar = results.filter((r) => r.type === 'mekan')
  const etkinlikler = results.filter((r) => r.type === 'etkinlik')
  const rehberler = results.filter((r) => r.type === 'rehber')

  if (!query) return null

  return (
    <section className="bg-white py-16 lg:py-20 border-b border-black/5">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-[4vw]">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-black/50 mb-2">
              ARAMA SONUÇLARI
            </p>
            <h2 className="text-h3 font-semibold leading-[1.2] tracking-[-0.02em]">
              &quot;{query}&quot; için {results.length} sonuç
            </h2>
          </div>
          <button
            onClick={onClear}
            className="flex items-center gap-2 px-4 py-2 border border-black/10 rounded-lg text-sm text-black/60 hover:bg-black/5 transition-colors"
          >
            <X className="w-4 h-4" />
            Temizle
          </button>
        </div>

        {results.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-lg text-black/40">
              Aramanızla eşleşen sonuç bulunamadı.
            </p>
            <p className="text-sm text-black/30 mt-2">
              Farklı bir kelime deneyin veya quick tags&apos;leri kullanın.
            </p>
          </div>
        ) : (
          <>
            {/* Mekanlar */}
            {mekanlar.length > 0 && (
              <div className="mb-10">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full gradient-sunset" />
                  Mekanlar ({mekanlar.length})
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {mekanlar.map((item, i) => (
                    <Link to="/places" key={item.id}>
                      <div
                        className="card-hover rounded-2xl overflow-hidden bg-white"
                        style={{
                          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                          animationDelay: `${i * 0.08}s`,
                        }}
                      >
                        <div className="aspect-[3/2] overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover card-image-zoom"
                            loading="lazy"
                          />
                        </div>
                        <div className="p-5">
                          <span className="inline-block px-3 py-1 rounded-full text-[10px] font-medium text-white gradient-sunset mb-2">
                            {item.category}
                          </span>
                          <h4 className="font-semibold text-base leading-snug mb-1">
                            {item.title}
                          </h4>
                          <p className="text-sm text-black/50 line-clamp-1">
                            {item.subtitle}
                          </p>
                          {item.location && (
                            <p className="text-xs text-black/40 mt-1">
                              {item.location}
                            </p>
                          )}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Etkinlikler */}
            {etkinlikler.length > 0 && (
              <div className="mb-10">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full gradient-sunset" />
                  Etkinlikler ({etkinlikler.length})
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {etkinlikler.map((item, i) => (
                    <Link to="/events" key={item.id}>
                      <div
                        className="card-hover rounded-2xl overflow-hidden bg-white"
                        style={{
                          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                          animationDelay: `${i * 0.08}s`,
                        }}
                      >
                        <div className="aspect-[3/2] overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover card-image-zoom"
                            loading="lazy"
                          />
                        </div>
                        <div className="p-5">
                          <span className="inline-block px-3 py-1 rounded-full text-[10px] font-medium text-white gradient-sunset mb-2">
                            {item.category}
                          </span>
                          <h4 className="font-semibold text-base leading-snug mb-1">
                            {item.title}
                          </h4>
                          <p className="text-sm text-black/50 line-clamp-1">
                            {item.subtitle}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Rehberler */}
            {rehberler.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full gradient-sunset" />
                  Rehberler ({rehberler.length})
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {rehberler.map((item, i) => (
                    <Link to="/guides" key={item.id}>
                      <div
                        className="card-hover rounded-2xl overflow-hidden bg-white"
                        style={{
                          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                          animationDelay: `${i * 0.08}s`,
                        }}
                      >
                        <div className="aspect-[3/2] overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover card-image-zoom"
                            loading="lazy"
                          />
                        </div>
                        <div className="p-5">
                          <span className="inline-block px-3 py-1 rounded-full text-[10px] font-medium text-white gradient-sunset mb-2">
                            {item.category}
                          </span>
                          <h4 className="font-semibold text-base leading-snug mb-1">
                            {item.title}
                          </h4>
                          <p className="text-sm text-black/50 line-clamp-1">
                            {item.subtitle}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
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
          <Link
            to="#"
            className="text-sm font-medium text-black/70 hover:text-black transition-colors reveal reveal-delay-1 shrink-0"
          >
            Tüm Haberler →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {newsCards.map((card, i) => (
            <div
              key={card.id}
              className="group cursor-pointer flex gap-4 items-start reveal"
              style={{ transitionDelay: `${i * 0.08}s` }}
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

// ===================== CTA SECTION — İZMİR'DE BUGÜN NE YAPSAM? =====================
function CTASection() {
  return (
    <section className="relative py-28 lg:py-40 overflow-hidden">
      {/* Background */}
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
  const [searchQuery, setSearchQuery] = useState('')
  useScrollReveal()

  return (
    <main>
      <HeroSection onSearch={setSearchQuery} />

      {/* Arama sonuçları varsa göster */}
      {searchQuery && (
        <SearchResultsSection
          query={searchQuery}
          onClear={() => setSearchQuery('')}
        />
      )}

      <TrendingSection />
      <DiscoverySection />
      <PopularListsSection />
      <NewsSection />
      <NeighborhoodSection />
      <MarqueeSection />
      <CTASection />
    </main>
  )
}
