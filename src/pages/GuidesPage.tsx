import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Search, Clock, ArrowRight, SlidersHorizontal } from 'lucide-react'
import useScrollReveal from '../hooks/useScrollReveal'
import { allBlogPosts as blogPosts } from '../data/blogs'
import Breadcrumbs from '../components/Breadcrumbs'

// Her blogun detay skoru — bölüm × SSS × içerik uzunluğu
function detailScore(p: typeof blogPosts[0]) {
  const sectionCount = p.sections?.length || 0
  const faqCount = p.faqs?.length || 0
  const introLen = p.intro?.length || 0
  const contentLen = p.sections?.reduce((acc, s) => acc + (s.content?.length || 0), 0) || 0
  return sectionCount * 200 + faqCount * 150 + introLen + contentLen
}

// En detaylıdan en aza sıralanmış tüm bloglar
const sortedByDetail = [...blogPosts].sort((a, b) => detailScore(b) - detailScore(a))

const categoryFilters = [
  { label: 'Tümü', value: 'all', emoji: '🗺' },
  { label: 'Tarih', value: 'Tarih', emoji: '🏛' },
  { label: 'Plaj', value: 'Plaj', emoji: '🏖' },
  { label: 'Yemek', value: 'Yemek', emoji: '🍽' },
  { label: 'Doğa', value: 'Doğa', emoji: '🌿' },
  { label: 'Gece', value: 'Gece Hayatı', emoji: '🌙' },
  { label: 'Kültür', value: 'Kültür', emoji: '🎭' },
  { label: 'Alışveriş', value: 'Alışveriş', emoji: '🛍' },
  { label: 'Aile', value: 'Aile', emoji: '👨‍👩‍👧' },
  { label: 'Fotoğraf', value: 'Fotoğraf', emoji: '📸' },
  { label: 'Turizm', value: 'Turizm', emoji: '⛵' },
  { label: 'Bütçe', value: 'Bütçe', emoji: '💰' },
  { label: 'Rehber', value: 'Rehber', emoji: '🗺' },
]

type SortMode = 'detail' | 'alpha' | 'newest'

export default function GuidesPage() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [sortMode, setSortMode] = useState<SortMode>('detail')

  useScrollReveal()

  const filtered = useMemo(() => {
    let result = [...sortedByDetail]

    // Kategori filtresi
    if (activeFilter !== 'all') {
      result = result.filter((p) => p.category.includes(activeFilter))
    }

    // Arama filtresi
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase()
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.subtitle?.toLowerCase().includes(q) ||
          p.tags?.some((t) => t.toLowerCase().includes(q)) ||
          p.excerpt?.toLowerCase().includes(q)
      )
    }

    // Sıralama
    if (sortMode === 'alpha') {
      result.sort((a, b) => a.title.localeCompare(b.title, 'tr'))
    } else if (sortMode === 'newest') {
      result.sort((a, b) => b.publishDate.localeCompare(a.publishDate))
    }
    // 'detail' zaten sortedByDetail sırasında

    return result
  }, [activeFilter, searchQuery, sortMode])

  // Featured: her zaman en detaylı blog
  const featured = sortedByDetail[0]
  // Grid: featured hariç tümü (arama/filtre yoksa), ya da tüm filtered
  const showFeatured = activeFilter === 'all' && !searchQuery && sortMode === 'detail'
  const displayPosts = showFeatured ? filtered.slice(1) : filtered

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'İzmir Gezilecek Yerler Rehberi',
    description: "İzmir'de gezilecek en iyi yerler, mekanlar ve rotalar. 70 detaylı editör rehberi.",
    url: 'https://izmirilde.com/guides',
    inLanguage: 'tr-TR',
    hasPart: blogPosts.slice(0, 20).map((p) => ({
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
        <title>İzmir Gezilecek Yerler Rehberi — 70 Detaylı İzmir Rehberi | izmirilde</title>
        <meta name="description" content="İzmir'de gezilecek en iyi yerler. Efes, Alaçatı, Çeşme, Kordon, Kemeraltı için 70 detaylı editör rehberi. Plajlar, antik kentler, gastronomi, gece hayatı." />
        <link rel="canonical" href="https://izmirilde.com/guides" />
        <meta property="og:title" content="İzmir Gezilecek Yerler Rehberi — 70 Detaylı Rehber" />
        <meta property="og:description" content="İzmir'de gezilecek en iyi yerler için 70 detaylı editör rehberi." />
        <meta property="og:url" content="https://izmirilde.com/guides" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://izmirilde.com/izmirilde-og.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="izmirilde" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@izmirilde" />
        <meta name="twitter:title" content="İzmir Gezilecek Yerler Rehberi — 70 Detaylı Rehber | izmirilde" />
        <meta name="twitter:description" content="İzmir'de gezilecek en iyi yerler için 70 detaylı editör rehberi." />
        <meta name="twitter:image" content="https://izmirilde.com/izmirilde-og.png" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: 'https://izmirilde.com/' },
            { '@type': 'ListItem', position: 2, name: 'Rehberler', item: 'https://izmirilde.com/guides' },
          ],
        })}</script>
      </Helmet>

      {/* HERO */}
      <section className="relative h-[50vh] min-h-[380px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/izmir-hero-still.jpg"
            alt="İzmir gezilecek yerler rehberi — izmirilde"
            className="w-full h-full object-cover scale-110 animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
        </div>
        <div className="relative text-center px-4 max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-semibold uppercase tracking-wider mb-6 reveal">
            70 Rehber · Editör Seçimi · 2026
          </span>
          <h1
            className="font-bold text-white leading-[0.95] tracking-[-0.03em] reveal reveal-delay-1"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(36px, 6vw, 68px)' }}
          >
            İzmir <em className="gradient-text-sunset not-italic">Gezilecek Yerler</em> Rehberi
          </h1>
          <p className="mt-6 text-white/90 text-lg max-w-2xl mx-auto leading-relaxed reveal reveal-delay-2">
            Efes'ten Alaçatı'ya, Kordon'dan Kemeraltı'na — İzmir'de gezilecek en iyi yerler, mekanlar ve rotalar için 70 detaylı editör rehberi.
          </p>
        </div>
      </section>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-12">
        <Breadcrumbs items={[{ label: 'Ana Sayfa', href: '/' }, { label: 'Rehberler' }]} />

        {/* ARAMA + SIRALAMA */}
        <div className="flex flex-col sm:flex-row gap-3 mt-8 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-black/40" />
            <input
              type="search"
              placeholder="Rehber ara... (Efes, kahvaltı, plaj...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-black/10 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-orange-400/50 focus:border-orange-400"
            />
          </div>
          <div className="flex items-center gap-2 bg-white border border-black/10 rounded-xl px-3 py-2">
            <SlidersHorizontal className="w-4 h-4 text-black/40 shrink-0" />
            <select
              value={sortMode}
              onChange={(e) => setSortMode(e.target.value as SortMode)}
              className="text-sm text-black/70 bg-transparent focus:outline-none cursor-pointer"
            >
              <option value="detail">En Kapsamlı</option>
              <option value="newest">En Yeni</option>
              <option value="alpha">A-Z</option>
            </select>
          </div>
        </div>

        {/* KATEGORİ FİLTRELER */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categoryFilters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === f.value
                  ? 'bg-orange-500 text-white shadow-md'
                  : 'bg-white border border-black/10 text-black/60 hover:border-orange-300 hover:text-orange-500'
              }`}
            >
              {f.emoji} {f.label}
            </button>
          ))}
        </div>

        {/* SONUÇ SAYISI */}
        <p className="text-sm text-black/50 mb-6">
          <strong className="gradient-text-sunset text-base">{filtered.length}</strong> rehber {searchQuery && `"${searchQuery}" için`}
        </p>

        {/* FEATURED — sadece filtre/arama yoksa ve detail sıralamasında */}
        {showFeatured && featured && (
          <Link
            to={`/guides/${featured.slug}`}
            className="group block mb-10 rounded-2xl overflow-hidden shadow-lg border border-black/5 hover:shadow-xl transition-all duration-300 reveal"
          >
            <div className="grid md:grid-cols-2">
              <div className="relative h-64 md:h-auto overflow-hidden">
                <img
                  src={featured.image}
                  alt={`${featured.title} — İzmir rehberi izmirilde`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-orange-500 text-white text-xs font-bold uppercase tracking-wide">
                  ⭐ En Kapsamlı Rehber
                </span>
              </div>
              <div className="p-8 flex flex-col justify-center bg-white">
                <span className="text-xs text-orange-500 font-semibold uppercase tracking-wider mb-3">{featured.category}</span>
                <h2
                  className="text-2xl sm:text-3xl font-bold leading-tight mb-4 group-hover:gradient-text-sunset transition-all"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {featured.title}
                </h2>
                <p className="text-black/60 text-sm leading-relaxed mb-6 line-clamp-3">{featured.excerpt}</p>
                <div className="flex items-center gap-4 text-xs text-black/40 mb-6">
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{featured.readTime}</span>
                  <span>{featured.displayDate}</span>
                  <span>{featured.sections?.length || 0} bölüm · {featured.faqs?.length || 0} SSS</span>
                </div>
                <span className="inline-flex items-center gap-2 text-orange-500 font-semibold text-sm group-hover:gap-3 transition-all">
                  Rehberi Oku <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </Link>
        )}

        {/* GRID — TÜM BLOGLAR */}
        {displayPosts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-4xl mb-4">🔍</p>
            <p className="text-black/50">"{searchQuery}" için sonuç bulunamadı.</p>
            <button onClick={() => { setSearchQuery(''); setActiveFilter('all') }} className="mt-4 text-orange-500 text-sm underline">
              Tüm rehberlere dön
            </button>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayPosts.map((p, i) => (
              <Link
                key={p.id}
                to={`/guides/${p.slug}`}
                className="group block bg-white rounded-2xl overflow-hidden border border-black/5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 reveal"
                style={{ animationDelay: `${(i % 9) * 0.05}s` }}
              >
                {/* Görsel */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={p.image}
                    alt={`${p.title} — İzmir rehberi izmirilde`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <span className="absolute bottom-3 left-3 text-xs text-white/90 font-medium bg-black/30 backdrop-blur-sm px-2 py-1 rounded-full">
                    {p.category}
                  </span>
                  {/* Detay seviyesi rozeti */}
                  {(p.sections?.length || 0) >= 4 && (
                    <span className="absolute top-3 right-3 text-xs text-white font-bold bg-orange-500 px-2 py-0.5 rounded-full">
                      Detaylı
                    </span>
                  )}
                </div>

                {/* İçerik */}
                <div className="p-5">
                  <h2
                    className="font-bold text-base leading-snug mb-2 line-clamp-2 group-hover:text-orange-500 transition-colors"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {p.title}
                  </h2>
                  <p className="text-black/50 text-xs leading-relaxed line-clamp-2 mb-4">{p.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-black/35">
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{p.readTime}</span>
                    <span>{p.sections?.length || 0} bölüm · {p.faqs?.length || 0} SSS</span>
                    <ArrowRight className="w-3.5 h-3.5 text-orange-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  )
}
