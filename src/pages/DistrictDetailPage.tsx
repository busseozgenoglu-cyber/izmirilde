import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { MapPin, Utensils, Coffee, Sun, Moon, Sparkles, BookOpen } from 'lucide-react'
import { districts } from '../data/districts'
import { allBlogPosts } from '../data/blogs'
import useScrollReveal from '../hooks/useScrollReveal'
import Breadcrumbs from '../components/Breadcrumbs'
import NotFoundPage from './NotFoundPage'
import { isValidSlug } from '../lib/slug'

export default function DistrictDetailPage() {
  const { slug } = useParams<{ slug: string }>()

  useScrollReveal()

  // Slug validation — data lookup'tan önce
  if (!isValidSlug(slug)) {
    return <NotFoundPage />
  }

  const district = districts.find((d) => d.slug === slug)

  // Sessiz redirect yerine gerçek 404 render
  if (!district) {
    return <NotFoundPage />
  }

  const totalVenues = district.breakfast.length + district.lunch.length + district.dinner.length

  // Related: show 3 other districts
  const related = districts
    .filter((d) => d.id !== district.id)
    .filter((d) => d.emoji === district.emoji)
    .slice(0, 4)

  // Related blogs: match by district name in slug or tags
  const districtNameLower = district.name.toLowerCase()
  const relatedBlogs = allBlogPosts
    .filter(b =>
      b.slug.includes(districtNameLower) ||
      b.tags.some(t => t.toLowerCase().includes(districtNameLower))
    )
    .slice(0, 4)

  // JSON-LD for district as TouristDestination
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TouristDestination',
    '@id': `https://izmirilde.com/districts/${district.slug}`,
    name: `İzmir ${district.name}`,
    description: district.intro,
    image: `https://izmirilde.com${district.image}`,
    url: `https://izmirilde.com/districts/${district.slug}`,
    inLanguage: 'tr-TR',
    address: {
      '@type': 'PostalAddress',
      addressLocality: district.name,
      addressRegion: 'İzmir',
      addressCountry: 'TR',
    },
    containedInPlace: {
      '@type': 'City',
      name: 'İzmir',
      '@id': 'https://izmirilde.com/#destination',
    },
    touristType: ['Gastronomi Turizmi', 'Kültür Turizmi', 'Şehir Turizmi'],
  }

  // WebPage schema for the guide page itself
  const webPageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `https://izmirilde.com/districts/${district.slug}`,
    name: `İzmir ${district.name} Rehberi — Gezilecek Yerler ve Mekanlar`,
    description: `İzmir ${district.name} ilçesinde gezilecek yerler, kahvaltı, öğle ve akşam yemeği mekanları. ${totalVenues} gerçek mekan önerisi ile detaylı rehber.`,
    url: `https://izmirilde.com/districts/${district.slug}`,
    inLanguage: 'tr-TR',
    publisher: {
      '@type': 'Organization',
      '@id': 'https://izmirilde.com/#organization',
    },
    about: { '@id': `https://izmirilde.com/districts/${district.slug}` },
  }

  // Meal sections metadata
  const mealSections = [
    { key: 'breakfast', title: 'Kahvaltı Mekanları', venues: district.breakfast, icon: Coffee, color: 'from-amber-50 to-orange-50', iconColor: 'text-amber-600' },
    { key: 'lunch', title: 'Öğle Yemeği Mekanları', venues: district.lunch, icon: Sun, color: 'from-orange-50 to-red-50', iconColor: 'text-orange-600' },
    { key: 'dinner', title: 'Akşam Yemeği Mekanları', venues: district.dinner, icon: Moon, color: 'from-red-50 to-rose-50', iconColor: 'text-red-600' },
  ] as const

  return (
    <>
      <Helmet>
        <title>İzmir {district.name} Rehberi — Gezilecek Yerler ve Mekanlar | izmirilde</title>
        <meta
          name="description"
          content={`İzmir ${district.name} ilçesinde gezilecek yerler, kahvaltı, öğle ve akşam yemeği mekanları. ${totalVenues} gerçek mekan önerisi ile detaylı rehber.`}
        />
        <meta
          name="keywords"
          content={`${district.name}, İzmir ${district.name}, ${district.name} gezilecek yerler, ${district.name} kahvaltı, ${district.name} restoran, ${district.name} mekanlar`}
        />
        <link rel="canonical" href={`https://izmirilde.com/districts/${district.slug}`} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={`İzmir ${district.name} Rehberi`} />
        <meta property="og:description" content={district.intro} />
        <meta property="og:image" content={`https://izmirilde.com${district.image}`} />
        <meta property="og:url" content={`https://izmirilde.com/districts/${district.slug}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@izmirilde" />
        <meta name="twitter:title" content={`İzmir ${district.name} Rehberi`} />
        <meta name="twitter:description" content={district.intro} />
        <meta name="twitter:image" content={`https://izmirilde.com${district.image}`} />
        <meta property="og:site_name" content="izmirilde" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={`İzmir ${district.name} — izmirilde rehberi`} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(webPageJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: 'https://izmirilde.com/' },
            { '@type': 'ListItem', position: 2, name: 'İlçeler', item: 'https://izmirilde.com/districts' },
            { '@type': 'ListItem', position: 3, name: `İzmir ${district.name}`, item: `https://izmirilde.com/districts/${district.slug}` },
          ],
        })}</script>
      </Helmet>

      <main className="bg-white">
        {/* HERO with sparkle */}
        <section className="relative h-[65vh] min-h-[460px] overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={district.image}
              alt={`İzmir ${district.name} — gezilecek yerler, mekanlar ve rehber | izmirilde`}
              className="w-full h-full object-cover scale-110 animate-slow-zoom"
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.onerror = null
                target.src = '/images/kulturpark-izmir.jpg'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/80" />
          </div>

          {/* Sparkle overlay */}
          <div className="absolute inset-0 sparkle-overlay pointer-events-none" />

          <div className="relative z-10 h-full flex flex-col justify-end max-w-[1000px] mx-auto px-4 sm:px-8 pb-16">
            <div className="mb-6 reveal">
              <Breadcrumbs
                theme="dark"
                items={[
                  { label: 'İlçeler', href: '/districts' },
                  { label: district.name },
                ]}
              />
            </div>

            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold text-white gradient-sunset mb-4 w-fit reveal">
              {district.emoji} İzmir İlçesi
            </span>

            <h1
              className="text-white font-bold leading-[0.95] tracking-[-0.02em] mb-5 reveal reveal-delay-1"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(44px, 7vw, 88px)' }}
            >
              {district.name}
            </h1>

            <p className="text-white/90 text-lg sm:text-xl max-w-[720px] leading-relaxed mb-6 reveal reveal-delay-2">
              {district.intro}
            </p>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-white/80 text-sm reveal reveal-delay-3">
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                İzmir, Türkiye
              </span>
              <span className="flex items-center gap-2">
                <Utensils className="w-4 h-4" />
                {totalVenues} Mekan Önerisi
              </span>
              <span className="flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Editör Seçimi
              </span>
            </div>
          </div>
        </section>

        {/* ACTIVITIES - What to do */}
        {district.activities && (
          <section className="py-16 lg:py-20 bg-gradient-to-b from-white to-orange-50/30">
            <div className="max-w-[900px] mx-auto px-4 sm:px-8">
              <div className="flex items-center gap-3 mb-6 reveal">
                <div className="w-10 h-0.5 gradient-sunset" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-black/60">
                  Gezilecek Yerler
                </span>
              </div>
              <h2
                className="text-3xl lg:text-5xl font-bold mb-6 leading-[1.1] tracking-[-0.02em] reveal reveal-delay-1"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {district.name}'da <span className="gradient-text-sunset">Yapılacaklar</span>
              </h2>
              <p className="text-lg leading-[1.8] text-black/75 whitespace-pre-line reveal reveal-delay-2">
                {district.activities}
              </p>
            </div>
          </section>
        )}

        {/* MEAL SECTIONS */}
        {mealSections.map((section, sectionIdx) => {
          if (section.venues.length === 0) return null
          const Icon = section.icon

          return (
            <section
              key={section.key}
              className={`py-16 lg:py-20 ${sectionIdx % 2 === 0 ? 'bg-white' : 'bg-gradient-to-b from-orange-50/30 to-white'}`}
            >
              <div className="max-w-[1200px] mx-auto px-4 sm:px-8">
                <div className="flex items-center gap-4 mb-10 reveal">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${section.color} flex items-center justify-center`}>
                    <Icon className={`w-7 h-7 ${section.iconColor}`} />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-black/60 block mb-1">
                      {district.name} · {section.venues.length} mekan
                    </span>
                    <h2
                      className="text-3xl lg:text-4xl font-bold leading-tight"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {section.title}
                    </h2>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {section.venues.map((v, i) => (
                    <div
                      key={i}
                      className="group rounded-2xl bg-white border border-black/5 p-6 hover:shadow-xl hover:border-orange-200 transition-all duration-300 reveal"
                      style={{ transitionDelay: `${i * 0.05}s` }}
                    >
                      <div className="flex items-start gap-3 mb-3">
                        <span className="shrink-0 w-8 h-8 rounded-full gradient-sunset text-white flex items-center justify-center text-sm font-bold">
                          {i + 1}
                        </span>
                        <h3 className="font-bold text-lg leading-tight group-hover:gradient-text-sunset transition-all">
                          {v.name}
                        </h3>
                      </div>
                      <p className="text-sm text-black/70 leading-relaxed pl-11">
                        {v.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )
        })}

        {/* RELATED BLOGS */}
        {relatedBlogs.length > 0 && (
          <section className="py-14 lg:py-18 bg-orange-50/40 border-t border-orange-100">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-8">
              <div className="flex items-center gap-3 mb-8">
                <BookOpen className="w-5 h-5 text-orange-500" />
                <h2
                  className="text-2xl sm:text-3xl font-bold"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {district.name} <span className="gradient-text-sunset">Rehberleri</span>
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {relatedBlogs.map((b) => (
                  <Link
                    key={b.id}
                    to={`/guides/${b.slug}`}
                    className="group block rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-400 border border-orange-100"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={b.image}
                        alt={b.title}
                        className="w-full h-full object-cover card-image-zoom"
                        loading="lazy"
                        onError={(e) => {
                          const t = e.target as HTMLImageElement
                          t.onerror = null
                          t.src = '/images/kulturpark-izmir.jpg'
                        }}
                      />
                    </div>
                    <div className="p-4">
                      <span className="text-xs font-semibold text-orange-500 uppercase tracking-wide">{b.category.replace(/^[^\s]+ /, '')}</span>
                      <h3 className="font-semibold text-base leading-snug mt-1 line-clamp-2 group-hover:text-orange-600 transition-colors">
                        {b.title}
                      </h3>
                      <p className="text-xs text-black/50 mt-2">{b.readTime}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* RELATED DISTRICTS */}
        {related.length > 0 && (
          <section className="py-16 lg:py-20 bg-white border-t border-black/5">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-8">
              <h2
                className="text-3xl sm:text-4xl font-bold mb-2 text-center reveal"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Benzer <span className="gradient-text-sunset">İlçeler</span>
              </h2>
              <p className="text-center text-black/60 mb-12 reveal reveal-delay-1">
                {district.name}'a benzer atmosferdeki diğer ilçeler
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {related.map((r, i) => (
                  <Link
                    to={`/districts/${r.slug}`}
                    key={r.id}
                    className="group block rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-500 card-hover reveal"
                    style={{ transitionDelay: `${i * 0.1}s` }}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={r.image}
                        alt={r.name}
                        className="w-full h-full object-cover card-image-zoom"
                        loading="lazy"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement
                          target.onerror = null
                          target.src = '/images/kulturpark-izmir.jpg'
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3">
                        <h3
                          className="text-white font-bold text-xl leading-tight"
                          style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                          {r.emoji} {r.name}
                        </h3>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </>
  )
}
