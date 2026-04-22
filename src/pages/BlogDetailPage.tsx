import { useParams, Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Clock, Calendar, User, Tag, Share2, BookOpen, ChevronRight } from 'lucide-react'
import { blogPosts } from '../data/blogs'
import useScrollReveal from '../hooks/useScrollReveal'
import Breadcrumbs from '../components/Breadcrumbs'

export default function BlogDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const post = blogPosts.find((p) => p.slug === slug)

  useScrollReveal()

  useEffect(() => {
    if (!post) {
      navigate('/guides', { replace: true })
    }
  }, [post, navigate])

  if (!post) return null

  const related = (post.relatedIds || [])
    .map((id) => blogPosts.find((p) => p.id === id))
    .filter((p): p is NonNullable<typeof p> => !!p)

  // JSON-LD structured data for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: `https://izmirilde.com${post.image}`,
    datePublished: post.publishDate,
    dateModified: post.publishDate,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'izmirilde',
      logo: {
        '@type': 'ImageObject',
        url: 'https://izmirilde.com/izmirilde-icon-256.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://izmirilde.com/guides/${post.slug}`,
    },
    keywords: post.tags.join(', '),
    articleSection: post.category,
  }

  // FAQPage schema if FAQs exist
  const faqJsonLd = post.faqs && post.faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: post.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  } : null

  return (
    <>
      <Helmet>
        <title>{post.title} | izmirilde</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={post.tags.join(', ')} />
        <link rel="canonical" href={`https://izmirilde.com/guides/${post.slug}`} />
        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={`https://izmirilde.com${post.image}`} />
        <meta property="og:url" content={`https://izmirilde.com/guides/${post.slug}`} />
        <meta property="article:published_time" content={post.publishDate} />
        <meta property="article:author" content={post.author} />
        <meta property="article:section" content={post.category} />
        {post.tags.map((tag) => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta name="twitter:image" content={`https://izmirilde.com${post.image}`} />
        {/* JSON-LD */}
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        {faqJsonLd && (
          <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
        )}
      </Helmet>

      <main className="bg-white">
        {/* Reading Progress Bar */}
        <div
          id="reading-progress"
          className="fixed top-[72px] left-0 h-[3px] gradient-sunset z-40 transition-[width] duration-150"
          style={{ width: '0%' }}
        />

        {/* HERO with parallax image */}
        <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={post.image}
              alt={post.title}
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
          <div className="sparkle-star" style={{ top: '25%', left: '20%', animationDelay: '0s' }} />
          <div className="sparkle-star" style={{ top: '40%', left: '75%', animationDelay: '0.6s' }} />
          <div className="sparkle-star" style={{ top: '65%', left: '15%', animationDelay: '1.1s' }} />
          <div className="shimmer-sweep" />

          <div className="relative z-10 h-full flex flex-col justify-end max-w-[900px] mx-auto px-4 sm:px-8 pb-16">
            <div className="mb-6 reveal">
              <Breadcrumbs
                theme="dark"
                items={[
                  { label: 'Rehberler', href: '/guides' },
                  { label: post.title },
                ]}
              />
            </div>

            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold text-white gradient-sunset mb-4 w-fit reveal">
              {post.category}
            </span>

            <h1
              className="text-white font-bold leading-[1.05] tracking-[-0.02em] mb-6 reveal reveal-delay-1"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(32px, 5vw, 56px)',
              }}
            >
              {post.title}
            </h1>

            <p className="text-white/90 text-lg max-w-[680px] leading-relaxed mb-6 reveal reveal-delay-2">
              {post.subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-white/80 text-sm reveal reveal-delay-3">
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {post.author}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {post.displayDate}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>
          </div>

          {/* Scroll hint */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-xs uppercase tracking-[0.2em] animate-fade-in scroll-indicator-line">
            Okumaya Başlayın
          </div>
        </section>

        {/* ARTICLE BODY */}
        <article className="max-w-[760px] mx-auto px-4 sm:px-8 py-16">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8 reveal">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 text-xs px-3 py-1.5 rounded-full bg-orange-50 text-orange-700 font-medium"
              >
                <Tag className="w-3 h-3" />
                {tag}
              </span>
            ))}
          </div>

          {/* INTRO */}
          <div className="prose prose-lg max-w-none mb-12 reveal reveal-delay-1">
            <p
              className="text-xl leading-[1.7] text-black/80 first-letter:text-6xl first-letter:font-bold first-letter:mr-3 first-letter:float-left first-letter:leading-none first-letter:gradient-text-sunset"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {post.intro}
            </p>
          </div>

          {/* SECTIONS */}
          <div className="space-y-12">
            {post.sections.map((section, idx) => (
              <section key={idx} className="reveal">
                <h2
                  className="text-3xl font-bold mb-5 leading-tight relative pl-5 before:absolute before:left-0 before:top-1 before:bottom-1 before:w-1.5 before:gradient-sunset before:rounded-full"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {section.heading}
                </h2>

                {section.content && (
                  <p className="text-lg leading-[1.8] text-black/75 mb-5 whitespace-pre-line">
                    {section.content}
                  </p>
                )}

                {section.image && (
                  <div className="my-8 rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src={section.image}
                      alt={section.heading}
                      className="w-full h-auto card-image-zoom"
                      loading="lazy"
                    />
                  </div>
                )}

                {section.list && section.list.length > 0 && (
                  <ul className="my-6 space-y-3">
                    {section.list.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-lg text-black/75 leading-relaxed pl-4 border-l-2 border-orange-200 hover:border-orange-500 transition-colors"
                      >
                        <ChevronRight className="w-5 h-5 text-orange-500 mt-1 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {section.tip && (
                  <div className="my-6 p-5 rounded-2xl bg-gradient-to-br from-orange-50 to-red-50 border-l-4 border-orange-500">
                    <div className="flex gap-3">
                      <span className="text-2xl">💡</span>
                      <p className="text-black/80 leading-relaxed italic">
                        <strong className="gradient-text-sunset not-italic font-bold">İpucu: </strong>
                        {section.tip.replace(/^İpucu:\s*/, '')}
                      </p>
                    </div>
                  </div>
                )}

                {section.quote && (
                  <blockquote className="my-8 pl-6 border-l-4 border-orange-500 italic text-xl text-black/70 leading-relaxed">
                    "{section.quote}"
                  </blockquote>
                )}
              </section>
            ))}
          </div>

          {/* FAQ SECTION */}
          {post.faqs && post.faqs.length > 0 && (
            <section className="mt-16 pt-12 border-t border-black/10 reveal">
              <h2
                className="text-3xl font-bold mb-8 leading-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Sıkça Sorulan Sorular
              </h2>
              <div className="space-y-4">
                {post.faqs.map((faq, i) => (
                  <details
                    key={i}
                    className="group rounded-xl border border-black/10 bg-white hover:border-orange-300 transition-colors overflow-hidden"
                  >
                    <summary className="cursor-pointer p-5 font-semibold text-lg flex items-center justify-between list-none">
                      <span className="flex-1 pr-4">{faq.q}</span>
                      <span className="w-8 h-8 rounded-full gradient-sunset flex items-center justify-center text-white shrink-0 group-open:rotate-45 transition-transform">
                        +
                      </span>
                    </summary>
                    <div className="px-5 pb-5 text-black/70 leading-relaxed">
                      {faq.a}
                    </div>
                  </details>
                ))}
              </div>
            </section>
          )}

          {/* SHARE */}
          <div className="mt-16 pt-8 border-t border-black/10 flex items-center justify-between flex-wrap gap-4 reveal">
            <div className="flex items-center gap-2 text-sm text-black/60">
              <BookOpen className="w-4 h-4" />
              <span>{post.category} · {post.readTime}</span>
            </div>
            <button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: post.title,
                    text: post.excerpt,
                    url: window.location.href,
                  }).catch(() => {})
                } else {
                  navigator.clipboard?.writeText(window.location.href)
                }
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-black text-white text-sm font-medium hover:bg-black/90 transition-colors"
            >
              <Share2 className="w-4 h-4" />
              Paylaş
            </button>
          </div>
        </article>

        {/* RELATED POSTS */}
        {related.length > 0 && (
          <section className="bg-gradient-to-b from-white to-orange-50/30 py-16 lg:py-20">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-8">
              <h2
                className="text-3xl sm:text-4xl font-bold mb-2 text-center reveal"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                İlgili <span className="gradient-text-sunset">Rehberler</span>
              </h2>
              <p className="text-center text-black/60 mb-12 reveal reveal-delay-1">
                Bu içeriği beğenen okuyucularımız bunlara da göz attı
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {related.map((r, i) => (
                  <Link
                    to={`/guides/${r.slug}`}
                    key={r.id}
                    className="group block rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-500 card-hover reveal"
                    style={{ transitionDelay: `${i * 0.1}s` }}
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={r.image}
                        alt={r.title}
                        className="w-full h-full object-cover card-image-zoom"
                        loading="lazy"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement
                          target.onerror = null
                          target.src = '/images/kulturpark-izmir.jpg'
                        }}
                      />
                      <div className="absolute top-4 left-4">
                        <span className="inline-block px-3 py-1 rounded-full text-[10px] font-semibold text-white gradient-sunset">
                          {r.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold text-lg leading-tight line-clamp-2 mb-2 group-hover:gradient-text-sunset transition-all">
                        {r.title}
                      </h3>
                      <p className="text-sm text-black/60 line-clamp-2 mb-3">
                        {r.subtitle}
                      </p>
                      <div className="flex items-center gap-3 text-xs text-black/50">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {r.readTime}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {r.displayDate}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="text-center mt-12 reveal">
                <Link
                  to="/guides"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full gradient-sunset text-white font-semibold hover:scale-[1.02] transition-transform"
                >
                  Tüm Rehberleri Görüntüle
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </section>
        )}
      </main>
    </>
  )
}
