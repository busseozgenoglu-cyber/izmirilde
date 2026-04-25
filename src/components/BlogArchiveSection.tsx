import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Clock, ArrowRight } from 'lucide-react'
import useScrollReveal from '../hooks/useScrollReveal'
import { allBlogPosts } from '../data/blogs'
import { stripEmoji } from '../lib/slug'

const categories = [
  'Tümü',
  'Tarih',
  'Plaj',
  'Yemek',
  'Doğa',
  'Gece',
  'Kültür',
  'Alışveriş',
  'Rehber',
]

export default function BlogArchiveSection() {
  const [activeCategory, setActiveCategory] = useState('Tümü')
  useScrollReveal()

  const filtered = useMemo(() => {
    if (activeCategory === 'Tümü') return allBlogPosts
    return allBlogPosts.filter((p) => {
      const cat = stripEmoji(p.category).trim()
      return cat.includes(activeCategory)
    })
  }, [activeCategory])

  return (
    <section className="bg-white py-20 lg:py-28 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-[4vw]">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-0.5 gradient-sunset" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-black/60">
                06 — Arşiv
              </span>
            </div>
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[0.95] tracking-[-0.02em] max-w-3xl"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Tüm İzmir{' '}
              <em className="gradient-text-sunset not-italic">Rehberleri</em>
            </h2>
            <p className="mt-4 text-black/60 text-lg max-w-2xl">
              Efes&apos;ten Alaçatı&apos;ya, Kordon&apos;dan Kemeraltı&apos;na —{' '}
              <strong>{allBlogPosts.length} detaylı editör yazısı</strong> tek bir arşivde.
            </p>
          </div>
          <Link
            to="/guides"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full gradient-sunset text-white font-semibold hover:scale-105 transition-transform whitespace-nowrap"
          >
            Tüm Rehberler <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Category Filter */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-4 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`shrink-0 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? 'gradient-sunset text-white shadow-lg shadow-orange-500/25'
                  : 'bg-black/5 text-black/70 hover:bg-black/10 hover:text-black'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((post, i) => (
            <Link
              key={post.id}
              to={`/guides/${post.slug}`}
              className="group block rounded-2xl overflow-hidden bg-white border border-black/5 shadow-sm hover:shadow-xl hover:shadow-orange-500/10 hover:border-orange-200/50 transition-all duration-500 reveal"
              style={{ transitionDelay: `${(i % 12) * 0.05}s` }}
              title={post.title}
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={post.image}
                  alt={`${post.title} — İzmir ${stripEmoji(post.category)} rehberi | izmirilde`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  onError={(e) => {
                    const t = e.target as HTMLImageElement
                    t.onerror = null
                    t.src = '/images/kulturpark-izmir.jpg'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold text-white bg-black/60 backdrop-blur-sm border border-white/10">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3
                  className="font-semibold text-base leading-snug mb-2 group-hover:text-orange-600 transition-colors duration-300 line-clamp-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {post.title}
                </h3>
                <div className="flex items-center gap-3 text-xs text-black/40">
                  <span className="inline-flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                  <span>·</span>
                  <span>{post.displayDate || post.publishDate}</span>
                </div>
              </div>

              {/* Hover gradient line */}
              <div className="h-1 w-0 group-hover:w-full gradient-sunset transition-all duration-500 ease-out" />
            </Link>
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-black/40 text-lg">Bu kategoride henüz rehber yok.</p>
          </div>
        )}
      </div>
    </section>
  )
}
