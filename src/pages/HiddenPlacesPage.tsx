import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Search, MapPin, Navigation, Compass, Sparkles } from 'lucide-react'
import useScrollReveal from '../hooks/useScrollReveal'
import { hiddenPlaces, hiddenCategories } from '../data/hiddenPlaces'
import Breadcrumbs from '../components/Breadcrumbs'

export default function HiddenPlacesPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState('')

  useScrollReveal()

  const filtered = useMemo(() => {
    let result = hiddenPlaces
    if (activeCategory !== 'all') {
      result = result.filter((p) => p.categoryId === activeCategory)
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase()
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.district.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.seoKeywords.toLowerCase().includes(q)
      )
    }
    return result
  }, [activeCategory, searchQuery])

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: "İzmir'in Keşfedilmemiş 50 Yeri",
    description: "Turistlerin bilmediği ama yerel halkın yıllardır gittiği İzmir'in 50 gizli yeri",
    itemListElement: hiddenPlaces.slice(0, 50).map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'TouristAttraction',
        name: p.name,
        description: p.description.slice(0, 160),
        image: `https://izmirilde.com${p.image}`,
        address: {
          '@type': 'PostalAddress',
          addressLocality: p.district,
          addressRegion: 'İzmir',
          addressCountry: 'TR',
        },
      },
    })),
  }

  return (
    <>
      <Helmet>
        <title>İzmir'de Keşfedilmemiş 50 Yer — Gizli Koylar, Antik Kalıntılar, Saklı Köyler | izmirilde</title>
        <meta
          name="description"
          content="İzmir'in turistlerin bilmediği 50 gizli yeri: işletmesiz koylar, bilinmeyen antik kalıntılar, saklı şelaleler, lokallerin köyleri, gizli manzara noktaları ve mağaralar."
        />
        <meta
          name="keywords"
          content="İzmir gizli yerler, İzmir keşfedilmemiş yerler, Foça gizli koylar, Karaburun saklı plajlar, Bergama antik kalıntılar, Urla şelale, İzmir manzara noktaları, İzmir mağaralar, İzmir köy turu, Saklı Cennet Koyu, Dolungaz Koyu, Mersinaki Koyu"
        />
        <link rel="canonical" href="https://izmirilde.com/hidden-places" />
        <meta property="og:title" content="İzmir'de Keşfedilmemiş 50 Yer — Gizli Cennetler" />
        <meta property="og:description" content="Ege'nin saklı cennetleri: 50 gizli nokta, 7 kategori" />
        <meta property="og:url" content="https://izmirilde.com/hidden-places" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://izmirilde.com/izmirilde-og.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="İzmir'de Keşfedilmemiş 50 Yer | izmirilde" />
        <meta name="twitter:description" content="Ege'nin saklı cennetleri: gizli koylar, antik kalıntılar ve saklı köyler." />
        <meta name="twitter:image" content="https://izmirilde.com/izmirilde-og.png" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <main>
        {/* HERO with sparkle */}
        <section className="relative h-[65vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <img
            src="/images/gizli-koylar.jpg"
            alt="İzmir Keşfedilmemiş Yerler"
            className="absolute inset-0 w-full h-full object-cover scale-110 animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/80" />

          <div className="absolute inset-0 sparkle-overlay pointer-events-none" />
          <div className="sparkle-star" style={{ top: '20%', left: '12%', animationDelay: '0s' }} />
          <div className="sparkle-star" style={{ top: '35%', left: '78%', animationDelay: '0.5s' }} />
          <div className="sparkle-star" style={{ top: '55%', left: '25%', animationDelay: '1.1s' }} />
          <div className="sparkle-star" style={{ top: '70%', left: '65%', animationDelay: '1.5s' }} />
          <div className="shimmer-sweep" />

          <div className="relative z-10 text-center px-4 max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 text-white text-xs font-semibold uppercase tracking-[0.2em] mb-6 reveal">
              <Compass className="inline w-3 h-3 mr-1" />
              Editör Keşifleri · 50 Gizli Yer
            </span>
            <h1
              className="font-bold text-white leading-[0.95] tracking-[-0.03em] reveal reveal-delay-1"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(40px, 7vw, 80px)' }}
            >
              İzmir'in <em className="gradient-text-sunset not-italic">Saklı</em><br />Cennetleri
            </h1>
            <p className="mt-6 text-white/90 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed reveal reveal-delay-2">
              Turistlerin bilmediği ama yerel halkın yıllardır gittiği 50 gizli yer.
              <br />Koylar, antik kalıntılar, şelaleler, saklı köyler ve daha fazlası.
            </p>
          </div>
        </section>

        {/* BREADCRUMBS */}
        <div className="bg-white border-b border-black/5">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-8 py-4">
            <Breadcrumbs items={[{ label: 'Gizli Yerler' }]} />
          </div>
        </div>

        {/* STATS BAR */}
        <section className="bg-gradient-to-r from-orange-50 via-red-50 to-orange-50 border-y border-orange-100 py-8">
          <div className="max-w-[1200px] mx-auto px-4 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { num: '50', label: 'Gizli Yer' },
              { num: '7', label: 'Kategori' },
              { num: '32', label: 'İlçe' },
              { num: '100%', label: 'Editör Test' },
            ].map((stat, i) => (
              <div key={i} className="reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="text-3xl sm:text-4xl font-bold gradient-text-sunset mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {stat.num}
                </div>
                <div className="text-xs uppercase tracking-wider text-black/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CATEGORY FILTER */}
        <section className="py-8 bg-white border-b border-black/5 sticky top-[72px] z-30 backdrop-blur-md bg-white/95">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
            <div className="flex flex-col lg:flex-row lg:items-center gap-6 justify-between">
              <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
                <button
                  onClick={() => setActiveCategory('all')}
                  className={`shrink-0 px-5 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${
                    activeCategory === 'all'
                      ? 'gradient-sunset text-white shadow-md scale-105'
                      : 'bg-black/5 text-black/70 hover:bg-black/10'
                  }`}
                >
                  ✨ Tümü ({hiddenPlaces.length})
                </button>
                {hiddenCategories.map((c) => {
                  const count = hiddenPlaces.filter((p) => p.categoryId === c.id).length
                  return (
                    <button
                      key={c.id}
                      onClick={() => setActiveCategory(c.id)}
                      className={`shrink-0 px-5 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${
                        activeCategory === c.id
                          ? 'gradient-sunset text-white shadow-md scale-105'
                          : 'bg-black/5 text-black/70 hover:bg-black/10'
                      }`}
                    >
                      {c.emoji} {c.name} ({count})
                    </button>
                  )
                })}
              </div>

              <div className="relative lg:w-80 shrink-0">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-black/40" />
                <input
                  type="text"
                  placeholder="İlçe veya yer ara..."
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
                <p className="text-xl font-semibold mb-2">Yer bulunamadı</p>
                <button
                  onClick={() => {
                    setSearchQuery('')
                    setActiveCategory('all')
                  }}
                  className="mt-4 inline-flex items-center gap-2 px-6 py-2.5 rounded-full gradient-sunset text-white font-semibold text-sm hover:scale-105 transition-transform"
                >
                  Filtreleri Temizle
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filtered.map((p, i) => {
                  const cat = hiddenCategories.find((c) => c.id === p.categoryId)
                  return (
                    <article
                      key={p.id}
                      className="group rounded-3xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-500 reveal"
                      style={{ transitionDelay: `${Math.min(i * 0.03, 0.5)}s` }}
                    >
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
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                        <div className="absolute top-4 left-4 flex gap-2">
                          <span className={`inline-block px-3 py-1 rounded-full text-[11px] font-semibold text-white bg-gradient-to-r ${cat?.color || 'from-orange-500 to-red-500'} shadow-md`}>
                            {cat?.emoji} {p.district}
                          </span>
                        </div>
                        <div className="absolute top-4 right-4">
                          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/95 backdrop-blur-sm text-black font-bold shadow-lg">
                            #{p.rank}
                          </span>
                        </div>
                      </div>

                      <div className="p-6">
                        <div className="flex items-start gap-2 mb-2">
                          <Sparkles className="w-4 h-4 text-orange-500 mt-1 shrink-0" />
                          <h3
                            className="font-bold text-xl leading-tight group-hover:gradient-text-sunset transition-all"
                            style={{ fontFamily: "'Playfair Display', serif" }}
                          >
                            {p.name}
                          </h3>
                        </div>

                        <p className="text-sm text-black/65 leading-relaxed mb-4 line-clamp-4">
                          {p.description}
                        </p>

                        {p.directions && (
                          <div className="flex items-start gap-2 text-xs text-black/60 mb-3 pt-3 border-t border-black/5">
                            <Navigation className="w-3.5 h-3.5 shrink-0 mt-0.5 text-orange-500" />
                            <span className="leading-relaxed">{p.directions}</span>
                          </div>
                        )}

                        <div className="flex items-center gap-2 text-xs text-black/50">
                          <MapPin className="w-3.5 h-3.5 text-orange-500" />
                          <span>İzmir / {p.district}</span>
                        </div>
                      </div>
                    </article>
                  )
                })}
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-black text-white py-20">
          <div className="max-w-[900px] mx-auto px-4 text-center">
            <h2
              className="text-4xl sm:text-5xl font-bold mb-6 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Daha Fazlasını <span className="gradient-text-sunset">Keşfet</span>
            </h2>
            <p className="text-lg text-white/70 mb-8 leading-relaxed">
              50 gizli yer yetmez. İzmir'in 32 ilçesini, 60 detaylı blog yazısını ve 30 en iyi mekanını da keşfedin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/districts"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full gradient-sunset text-white font-semibold shadow-xl hover:scale-[1.03] transition-transform"
              >
                32 İlçeyi Görüntüle
              </Link>
              <Link
                to="/best-places"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold hover:bg-white/20 transition-colors"
              >
                En İyi 30 Mekan
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
