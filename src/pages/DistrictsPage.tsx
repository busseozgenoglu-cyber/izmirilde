import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Search, MapPin, ArrowRight, Utensils } from 'lucide-react'
import useScrollReveal from '../hooks/useScrollReveal'
import { districts } from '../data/districts'

const groupFilters = [
  { label: 'Tümü', value: 'all' },
  { label: '🌊 Sahil İlçeleri', value: 'coastal' },
  { label: '🏛 Tarihi İlçeler', value: 'historic' },
  { label: '🏙 Merkez İlçeler', value: 'central' },
  { label: '🌾 İç Kesim', value: 'inland' },
]

const groupMap: Record<string, string[]> = {
  coastal: ['🌊'],
  historic: ['🏛'],
  central: ['🏙'],
  inland: ['🌾'],
}

export default function DistrictsPage() {
  const [activeGroup, setActiveGroup] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  useScrollReveal()

  const filtered = useMemo(() => {
    let result = districts
    if (activeGroup !== 'all') {
      const emojis = groupMap[activeGroup] || []
      result = result.filter((d) => emojis.includes(d.emoji))
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase()
      result = result.filter(
        (d) =>
          d.name.toLowerCase().includes(q) ||
          d.intro.toLowerCase().includes(q)
      )
    }
    return result
  }, [activeGroup, searchQuery])

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: "İzmir İlçeleri Rehberi — 32 İlçe",
    description: "İzmir'in 32 ilçesi için gezilecek yerler, kahvaltı, öğle ve akşam yemeği mekanları.",
    url: 'https://izmirilde.com/districts',
    inLanguage: 'tr-TR',
    hasPart: districts.slice(0, 10).map((d) => ({
      '@type': 'Place',
      name: `İzmir ${d.name}`,
      url: `https://izmirilde.com/districts/${d.slug}`,
    })),
  }

  return (
    <>
      <Helmet>
        <title>İzmir İlçeleri Rehberi — 32 İlçede Yapılacaklar ve Mekan Önerileri | izmirilde</title>
        <meta
          name="description"
          content="İzmir'in 32 ilçesi için detaylı rehber: Konak, Karşıyaka, Bornova, Çeşme, Alaçatı, Urla, Foça, Bergama, Selçuk ve daha fazlası. Her ilçe için kahvaltı, öğle, akşam yemeği mekanları."
        />
        <meta
          name="keywords"
          content="İzmir ilçeleri, Konak, Karşıyaka, Bornova, Çeşme, Alaçatı, Urla, Foça, Bergama, Selçuk, İzmir mekanlar, İzmir kahvaltı, İzmir öğle yemeği, İzmir akşam yemeği"
        />
        <link rel="canonical" href="https://izmirilde.com/districts" />
        <meta property="og:title" content="İzmir İlçeleri Rehberi — 32 İlçe Detaylı" />
        <meta property="og:description" content="İzmir'in 32 ilçesi için gezilecek yerler ve 270+ mekan önerisi." />
        <meta property="og:url" content="https://izmirilde.com/districts" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <main>
        {/* HERO with sparkle animation */}
        <section className="relative h-[55vh] min-h-[420px] flex items-center justify-center overflow-hidden">
          <img
            src="/images/kulturpark-izmir.jpg"
            alt="İzmir İlçeleri"
            className="absolute inset-0 w-full h-full object-cover scale-110 animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/55 to-black/70" />

          {/* Sparkle overlay */}
          <div className="absolute inset-0 sparkle-overlay pointer-events-none" />

          <div className="relative z-10 text-center px-4 max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 text-white text-xs font-semibold uppercase tracking-[0.2em] mb-6 reveal">
              32 İlçe · 270+ Mekan · 2025
            </span>
            <h1
              className="font-bold text-white leading-[0.95] tracking-[-0.03em] reveal reveal-delay-1"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(40px, 6vw, 72px)' }}
            >
              İzmir <em className="gradient-text-sunset not-italic">İlçe İlçe</em> Rehberi
            </h1>
            <p className="mt-6 text-white/90 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed reveal reveal-delay-2">
              Konak'tan Çeşme'ye, Bergama'dan Ödemiş'e — İzmir'in 32 ilçesinde yapılacaklar, kahvaltı, öğle ve akşam yemeği önerileri.
            </p>
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-xs uppercase tracking-[0.2em] animate-fade-in scroll-indicator-line">
            İlçeleri Keşfet
          </div>
        </section>

        {/* FILTER & SEARCH */}
        <section className="py-8 bg-white border-b border-black/5 sticky top-[72px] z-30 backdrop-blur-md bg-white/95">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
            <div className="flex flex-col lg:flex-row lg:items-center gap-6 justify-between">
              <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
                {groupFilters.map((f) => (
                  <button
                    key={f.value}
                    onClick={() => setActiveGroup(f.value)}
                    className={`shrink-0 px-5 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${
                      activeGroup === f.value
                        ? 'gradient-sunset text-white shadow-md scale-105'
                        : 'bg-black/5 text-black/70 hover:bg-black/10'
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>

              <div className="relative lg:w-80 shrink-0">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-black/40" />
                <input
                  type="text"
                  placeholder="İlçe ara..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-2.5 rounded-full border border-black/15 text-sm focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition-all"
                />
              </div>
            </div>
            <p className="mt-4 text-sm text-black/60">
              <strong className="gradient-text-sunset">{filtered.length}</strong> ilçe gösteriliyor
            </p>
          </div>
        </section>

        {/* GRID */}
        <section className="bg-white pt-10 pb-20 lg:pb-28">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <Search className="w-12 h-12 text-black/20 mx-auto mb-4" />
                <p className="text-xl font-semibold mb-2">İlçe bulunamadı</p>
                <button
                  onClick={() => { setSearchQuery(''); setActiveGroup('all') }}
                  className="mt-4 inline-flex items-center gap-2 px-6 py-2.5 rounded-full gradient-sunset text-white font-semibold text-sm hover:scale-105 transition-transform"
                >
                  Filtreleri Temizle
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filtered.map((d, i) => {
                  const totalVenues = d.breakfast.length + d.lunch.length + d.dinner.length
                  return (
                    <Link
                      to={`/districts/${d.slug}`}
                      key={d.id}
                      className="group block rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-500 card-hover reveal"
                      style={{ transitionDelay: `${Math.min(i * 0.04, 0.5)}s` }}
                    >
                      <div className="relative aspect-[4/3] overflow-hidden bg-black/5">
                        <img
                          src={d.image}
                          alt={d.name}
                          className="w-full h-full object-cover card-image-zoom"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                        <div className="absolute top-4 left-4">
                          <span className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold text-white gradient-sunset">
                            {d.emoji} İlçe
                          </span>
                        </div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3
                            className="text-white font-bold text-2xl leading-tight mb-1"
                            style={{ fontFamily: "'Playfair Display', serif" }}
                          >
                            {d.name}
                          </h3>
                          <div className="flex items-center gap-3 text-white/85 text-xs">
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3 h-3" />
                              İzmir
                            </span>
                            <span className="flex items-center gap-1">
                              <Utensils className="w-3 h-3" />
                              {totalVenues} mekan
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="p-5">
                        <p className="text-sm text-black/65 line-clamp-3 leading-relaxed mb-3">
                          {d.intro}
                        </p>
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-orange-600 group-hover:gap-3 transition-all">
                          Rehberi Oku
                          <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </Link>
                  )
                })}
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  )
}
