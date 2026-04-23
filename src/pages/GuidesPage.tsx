import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Search, Calendar, Clock, User, ArrowRight } from 'lucide-react'
import useScrollReveal from '../hooks/useScrollReveal'
import { allBlogPosts as blogPosts } from '../data/blogs'
import Breadcrumbs from '../components/Breadcrumbs'

const categoryFilters = [
  { label: 'Tümü', value: 'all' },
  { label: 'Tarih', value: 'Tarih' },
  { label: 'Sahil', value: 'Sahil' },
  { label: 'Gezi', value: 'Gezi' },
  { label: 'Yemek', value: 'Yemek' },
  { label: 'Alışveriş', value: 'Alışveriş' },
  { label: 'Gece Hayatı', value: 'Gece Hayatı' },
  { label: 'Kültür', value: 'Kültür' },
  { label: 'Aile', value: 'Aile' },
]

export default function GuidesPage() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  useScrollReveal()

  const filtered = useMemo(() => {
    let result = blogPosts
    if (activeFilter !== 'all') {
      result = result.filter((p) => p.category.includes(activeFilter))
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase()
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.subtitle.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q))
      )
    }
    return result
  }, [activeFilter, searchQuery])

  const featured = blogPosts[0]
  const displayPosts = activeFilter === 'all' && !searchQuery ? blogPosts.slice(1) : filtered

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: "İzmir Keşif Rehberleri",
    description: "Efes'ten Alaçatı'ya, Kordon'dan Kemeraltı'na İzmir'i derinlemesine keşfetmek için 60 detaylı rehber",
    url: 'https://izmirilde.com/guides',
    inLanguage: 'tr-TR',
    hasPart: blogPosts.slice(0, 15).map((p) => ({
      '@type': 'BlogPosting',
      headline: p.title,
      url: `https://izmirilde.com/guides/${p.slug}`,
      datePublished: p.publishDate,
      image: `https://izmirilde.com${p.image}`,
    })),
  }

  return (
    <>
      <Helmet>
        <title>İzmir Rehberleri — 60 Detaylı Keşif Yazısı | izmirilde</title>
        <meta
          name="description"
          content="İzmir'de gezilecek yerler, yapılacak şeyler, yeme-içme, sahil ve tarih rehberleri. Efes, Alaçatı, Çeşme, Kordon, Kemeraltı ve daha fazlası için 60 detaylı yazı."
        />
        <meta
          name="keywords"
          content="İzmir gezilecek yerler, İzmir yapılacak şeyler, Efes, Alaçatı, Çeşme, Kordon, Kemeraltı, İzmir rehberi, İzmir tatil, İzmir blog"
        />
        <link rel="canonical" href="https://izmirilde.com/guides" />
        <meta property="og:title" content="İzmir Rehberleri — 60 Detaylı Keşif Yazısı" />
        <meta property="og:description" content="İzmir'de gezilecek yerler için editör rehberi. 60 editör rehberi." />
        <meta property="og:url" content="https://izmirilde.com/guides" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://izmirilde.com/izmirilde-og.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="İzmir Rehberleri — 60 Detaylı Keşif Yazısı | izmirilde" />
        <meta name="twitter:description" content="İzmir'de gezilecek yerler için editör rehberi. 60 editör rehberi." />
        <meta name="twitter:image" content="https://izmirilde.com/izmirilde-og.png" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Ana Sayfa", "item": "https://izmirilde.com/"}, {"@type": "ListItem", "position": 2, "name": "Rehberler", "item": "https://izmirilde.com/guides"}]})}</script>
      </Helmet>

      <main>
        {/* HERO */}
        <section className="relative h-[55vh] min-h-[420px] flex items-center justify-center overflow-hidden">
          <img
            src="/images/kulturpark-izmir.jpg"
            alt="İzmir Keşif Rehberleri"
            className="absolute inset-0 w-full h-full object-cover scale-110 animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/55 to-black/70" />

          {/* Sparkle overlay */}
          <div className="absolute inset-0 sparkle-overlay pointer-events-none" />
          <div className="sparkle-star" style={{ top: '20%', left: '15%', animationDelay: '0s' }} />
          <div className="sparkle-star" style={{ top: '30%', left: '80%', animationDelay: '0.7s' }} />
          <div className="sparkle-star" style={{ top: '60%', left: '25%', animationDelay: '1.3s' }} />
          <div className="sparkle-star" style={{ top: '40%', left: '60%', animationDelay: '0.4s' }} />
          <div className="shimmer-sweep" />

          <div className="relative z-10 text-center px-4 max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-semibold uppercase tracking-wider mb-6 reveal">
              60 Rehber · Editör Seçimi · 2026
            </span>
            <h1
              className="font-bold text-white leading-[0.95] tracking-[-0.03em] reveal reveal-delay-1"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(40px, 6vw, 72px)' }}
            >
              İzmir <em className="gradient-text-sunset not-italic">Keşif</em> Rehberleri
            </h1>
            <p className="mt-6 text-white/90 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed reveal reveal-delay-2">
              Efes'ten Alaçatı'ya, Kordon'dan Kemeraltı'na — İzmir'i derinlemesine keşfetmek için editörlerimizin hazırladığı 60 detaylı rehber.
            </p>
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-xs uppercase tracking-[0.2em] animate-fade-in scroll-indicator-line">
            Aşağı Kaydır
          </div>
        </section>

        {/* FEATURED */}
        {activeFilter === 'all' && !searchQuery && (
          <section className="py-16 lg:py-20 bg-gradient-to-b from-white to-orange-50/30">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-8">
              <div className="flex items-center gap-3 mb-8 reveal">
                <div className="w-10 h-0.5 gradient-sunset" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-black/60">
                  Öne Çıkan Rehber
                </span>
              </div>

              <Link
                to={`/guides/${featured.slug}`}
                className="group grid lg:grid-cols-2 gap-8 lg:gap-12 items-center reveal reveal-delay-1"
              >
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.onerror = null
                      target.src = '/images/kulturpark-izmir.jpg'
                    }}
                  />
                  <div className="absolute top-6 left-6">
                    <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold text-white gradient-sunset">
                      {featured.category}
                    </span>
                  </div>
                </div>

                <div>
                  <h2
                    className="text-3xl lg:text-5xl font-bold leading-[1.1] tracking-[-0.02em] mb-5 group-hover:gradient-text-sunset transition-all"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {featured.title}
                  </h2>
                  <p className="text-lg text-black/70 leading-relaxed mb-6 line-clamp-3">
                    {featured.intro}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-black/60 mb-6">
                    <span className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {featured.author}
                    </span>
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {featured.displayDate}
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {featured.readTime}
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-2 font-semibold text-black group-hover:gap-4 transition-all">
                    Okumaya Başla
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </div>
          </section>
        )}

        {/* BREADCRUMBS */}
        <div className="bg-white border-b border-black/5">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-8 py-4">
            <Breadcrumbs items={[{ label: 'Rehberler' }]} />
          </div>
        </div>

        {/* FILTER & SEARCH */}
        <section className="py-8 bg-white border-y border-black/5 sticky top-[72px] z-30 backdrop-blur-md bg-white/95">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
            <div className="flex flex-col lg:flex-row lg:items-center gap-6 justify-between">
              <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
                {categoryFilters.map((f) => (
                  <button
                    key={f.value}
                    onClick={() => setActiveFilter(f.value)}
                    className={`shrink-0 px-5 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${
                      activeFilter === f.value
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
                  placeholder="Rehberlerde ara..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-2.5 rounded-full border border-black/15 text-sm focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition-all"
                />
              </div>
            </div>

            {(searchQuery || activeFilter !== 'all') && (
              <p className="mt-4 text-sm text-black/60">
                <strong className="gradient-text-sunset">{filtered.length}</strong> rehber bulundu
              </p>
            )}
          </div>
        </section>

        {/* GRID */}
        <section className="bg-white pt-10 pb-20 lg:pb-28">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
            {displayPosts.length === 0 ? (
              <div className="text-center py-20">
                <Search className="w-12 h-12 text-black/20 mx-auto mb-4" />
                <p className="text-xl font-semibold mb-2">Sonuç bulunamadı</p>
                <p className="text-black/60 mb-6">Farklı bir arama veya filtre deneyin.</p>
                <button
                  onClick={() => {
                    setSearchQuery('')
                    setActiveFilter('all')
                  }}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full gradient-sunset text-white font-semibold text-sm hover:scale-105 transition-transform"
                >
                  Filtreleri Temizle
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {displayPosts.map((p, i) => (
                  <Link
                    to={`/guides/${p.slug}`}
                    key={p.id}
                    className="group block rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-500 card-hover reveal"
                    style={{ transitionDelay: `${Math.min(i * 0.05, 0.5)}s` }}
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-black/5">
                      <img
                        src={p.image}
                        alt={p.title}
                        className="w-full h-full object-cover card-image-zoom"
                        loading="lazy"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement
                          target.onerror = null
                          target.src = '/images/kulturpark-izmir.jpg'
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="absolute top-4 left-4">
                        <span className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold text-white gradient-sunset">
                          {p.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-5 lg:p-6">
                      <h3 className="font-bold text-xl leading-tight line-clamp-2 mb-2 group-hover:gradient-text-sunset transition-all">
                        {p.title}
                      </h3>
                      <p className="text-sm text-black/60 line-clamp-2 mb-4 leading-relaxed">
                        {p.subtitle}
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t border-black/5">
                        <div className="flex items-center gap-3 text-xs text-black/50">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {p.readTime}
                          </span>
                          <span>·</span>
                          <span>{p.displayDate}</span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-black/30 group-hover:text-orange-500 group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  )
}
