import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Search, MapPin, Phone, Instagram, Trophy, Star } from 'lucide-react'
import useScrollReveal from '../hooks/useScrollReveal'
import { bestPlaces } from '../data/bestPlaces'
import Breadcrumbs from '../components/Breadcrumbs'

const mealFilters = [
  { label: 'Tümü', value: 'all', emoji: '✨' },
  { label: 'Kahvaltı', value: 'Kahvaltı', emoji: '☀️' },
  { label: 'Öğle Yemeği', value: 'Öğle Yemeği', emoji: '🍽️' },
  { label: 'Akşam Yemeği', value: 'Akşam Yemeği', emoji: '🌙' },
]

export default function BestPlacesPage() {
  const [activeFilter, setActiveFilter] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState('')

  useScrollReveal()

  const filtered = useMemo(() => {
    let result = bestPlaces
    if (activeFilter !== 'all') {
      result = result.filter((p) => p.category === activeFilter)
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase()
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.subtitle.toLowerCase().includes(q) ||
          p.districtName.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      )
    }
    return result
  }, [activeFilter, searchQuery])

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: "İzmir'in En İyi 30 Mekanı — 2025",
    description: "10 Kahvaltı, 10 Öğle ve 10 Akşam yemeği için editörlerin seçtiği 30 mekan",
    itemListElement: bestPlaces.slice(0, 30).map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: p.name,
      url: `https://izmirilde.com${p.href}`,
    })),
  }

  return (
    <>
      <Helmet>
        <title>İzmir'in En İyi 30 Mekanı — Kahvaltı, Öğle ve Akşam Yemeği Rehberi 2025 | izmirilde</title>
        <meta
          name="description"
          content="İzmir'in en iyi 30 mekanı: 10 Kahvaltı, 10 Öğle, 10 Akşam yemeği. Michelin yıldızlı Urla restoranları, Bib Gourmand ödüllü esnaf lokantaları ve daha fazlası."
        />
        <meta
          name="keywords"
          content="İzmir en iyi kahvaltı, İzmir en iyi öğle yemeği, İzmir en iyi akşam yemeği, İzmir Michelin, Urla restoran, Morisi, Magro, OD Urla, Teruar, Vino Locale, Asma Yaprağı"
        />
        <link rel="canonical" href="https://izmirilde.com/best-places" />
        <meta property="og:title" content="İzmir'in En İyi 30 Mekanı — 2025 Rehberi" />
        <meta property="og:description" content="Editörlerin seçtiği: 10 Kahvaltı + 10 Öğle + 10 Akşam" />
        <meta property="og:url" content="https://izmirilde.com/best-places" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <main>
        {/* HERO with sparkle */}
        <section className="relative h-[60vh] min-h-[440px] flex items-center justify-center overflow-hidden">
          <img
            src="/images/asma-yapragi.jpg"
            alt="İzmir'in En İyi Mekanları"
            className="absolute inset-0 w-full h-full object-cover scale-110 animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/80" />

          <div className="absolute inset-0 sparkle-overlay pointer-events-none" />
          <div className="sparkle-star" style={{ top: '25%', left: '18%', animationDelay: '0s' }} />
          <div className="sparkle-star" style={{ top: '45%', left: '82%', animationDelay: '0.7s' }} />
          <div className="sparkle-star" style={{ top: '65%', left: '30%', animationDelay: '1.3s' }} />
          <div className="shimmer-sweep" />

          <div className="relative z-10 text-center px-4 max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 text-white text-xs font-semibold uppercase tracking-[0.2em] mb-6 reveal">
              <Trophy className="inline w-3 h-3 mr-1" />
              Editör Seçimi · 2025
            </span>
            <h1
              className="font-bold text-white leading-[0.95] tracking-[-0.03em] reveal reveal-delay-1"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(40px, 6vw, 72px)' }}
            >
              İzmir'in En İyi <em className="gradient-text-sunset not-italic">30 Mekanı</em>
            </h1>
            <p className="mt-6 text-white/90 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed reveal reveal-delay-2">
              10 Kahvaltı ☀️ · 10 Öğle 🍽️ · 10 Akşam 🌙<br/>
              Michelin yıldızlı şef restoranlarından tarihi esnaf lokantalarına, İzmir'in en iyisi.
            </p>
          </div>
        </section>

        {/* BREADCRUMBS */}
        <div className="bg-white border-b border-black/5">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-8 py-4">
            <Breadcrumbs items={[{ label: 'En İyi 30 Mekan' }]} />
          </div>
        </div>

        {/* FILTER & SEARCH */}
        <section className="py-8 bg-white border-b border-black/5 sticky top-[72px] z-30 backdrop-blur-md bg-white/95">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
            <div className="flex flex-col lg:flex-row lg:items-center gap-6 justify-between">
              <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
                {mealFilters.map((f) => (
                  <button
                    key={f.value}
                    onClick={() => setActiveFilter(f.value)}
                    className={`shrink-0 px-5 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${
                      activeFilter === f.value
                        ? 'gradient-sunset text-white shadow-md scale-105'
                        : 'bg-black/5 text-black/70 hover:bg-black/10'
                    }`}
                  >
                    {f.emoji} {f.label}
                  </button>
                ))}
              </div>

              <div className="relative lg:w-80 shrink-0">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-black/40" />
                <input
                  type="text"
                  placeholder="Mekan ara..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-2.5 rounded-full border border-black/15 text-sm focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition-all"
                />
              </div>
            </div>
          </div>
        </section>

        {/* GRID */}
        <section className="bg-gradient-to-b from-white to-orange-50/20 py-16">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <Search className="w-12 h-12 text-black/20 mx-auto mb-4" />
                <p className="text-xl font-semibold mb-2">Mekan bulunamadı</p>
                <button
                  onClick={() => { setSearchQuery(''); setActiveFilter('all') }}
                  className="mt-4 inline-flex items-center gap-2 px-6 py-2.5 rounded-full gradient-sunset text-white font-semibold text-sm hover:scale-105 transition-transform"
                >
                  Filtreleri Temizle
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filtered.map((p, i) => (
                  <article
                    key={p.id}
                    className="group rounded-3xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-500 reveal"
                    style={{ transitionDelay: `${Math.min(i * 0.04, 0.5)}s` }}
                  >
                    <Link to={p.href} className="block">
                      <div className="relative aspect-[16/10] overflow-hidden bg-black/5">
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
                        <div className="absolute top-4 left-4 flex gap-2">
                          <span className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold text-white gradient-sunset shadow-md">
                            {p.emoji} {p.category}
                          </span>
                        </div>
                        <div className="absolute top-4 right-4">
                          <span className="inline-flex items-center gap-1 w-10 h-10 rounded-full bg-white/95 backdrop-blur-sm text-black font-bold shadow-lg justify-center">
                            #{p.rank}
                          </span>
                        </div>
                      </div>
                    </Link>

                    <div className="p-6">
                      <Link to={p.href}>
                        <h3
                          className="font-bold text-xl leading-tight mb-2 group-hover:gradient-text-sunset transition-all"
                          style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                          {p.name}
                        </h3>
                      </Link>
                      <p className="text-sm font-medium text-orange-600 mb-3">{p.subtitle}</p>
                      <p className="text-sm text-black/65 leading-relaxed mb-4 line-clamp-3">
                        {p.description}
                      </p>

                      <div className="space-y-2 pt-4 border-t border-black/5">
                        {p.address && (
                          <div className="flex items-start gap-2 text-xs text-black/60">
                            <MapPin className="w-3.5 h-3.5 shrink-0 mt-0.5 text-orange-500" />
                            <span className="line-clamp-2">{p.address}</span>
                          </div>
                        )}
                        <div className="flex flex-wrap items-center gap-3 text-xs text-black/60">
                          {p.phone && (
                            <a
                              href={`tel:${p.phone.replace(/\s/g, '')}`}
                              className="inline-flex items-center gap-1 hover:text-orange-600 transition-colors"
                            >
                              <Phone className="w-3.5 h-3.5 text-orange-500" />
                              <span>{p.phone}</span>
                            </a>
                          )}
                          {p.instagram && p.instagram.startsWith('@') && (
                            <a
                              href={`https://instagram.com/${p.instagram.replace('@', '')}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 hover:text-orange-600 transition-colors"
                            >
                              <Instagram className="w-3.5 h-3.5 text-orange-500" />
                              <span>{p.instagram}</span>
                            </a>
                          )}
                        </div>
                      </div>

                      <Link
                        to={p.href}
                        className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-orange-600 hover:gap-3 transition-all"
                      >
                        {p.districtName} Rehberini Gör
                        <Star className="w-3 h-3" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  )
}
