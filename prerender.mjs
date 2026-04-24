/**
 * izmirilde SSG Prerender Script
 * Railway / Alpine Docker uyumlu — Chromium gerektirmez
 * Vite build'den sonra: node prerender.mjs
 *
 * Strateji: dist/index.html'i her route için kopyalar,
 * ardından react-helmet-async'in server-side renderını
 * simüle etmek yerine route'a özgü meta tag'leri doğrudan
 * enjekte eder (data dosyalarından okuyarak).
 * Gerçek HTML shell = JS yüklenene kadar crawlable içerik.
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const DIST = path.join(__dirname, 'dist')

// ── Route verisi (data dosyalarından parse et) ────────────────────────────────

function parseBlogsTs() {
  const content = fs.readFileSync(path.join(__dirname, 'src/data/blogs.ts'), 'utf8')
  const entries = content.split(/\n  \{\n    id: '/g).slice(1)
  return entries.map(e => {
    const slug = e.match(/slug: '([^']+)'/)?.[1] ?? ''
    const title = e.match(/title: "([^"]+)"/)?.[1] ?? ''
    // excerpt uses single quotes with escaped apostrophes
    const excerptRaw = e.match(/excerpt: '((?:[^'\\]|\\.)+)'/)?.[1] ?? e.match(/excerpt: "([^"]+)"/)?.[1] ?? ''
    const excerpt = excerptRaw.replace(/\\'/g, "'").replace(/\\"/g, '"').slice(0, 160)
    const image = e.match(/image: '(\/images\/[^']+)'/)?.[1] ?? '/izmirilde-og.png'
    const category = e.match(/category: '([^']+)'/)?.[1] ?? ''
    const author = e.match(/author: '([^']+)'/)?.[1] ?? 'izmirilde Editörleri'
    const publishDate = e.match(/publishDate: '([^']+)'/)?.[1] ?? '2026-04-24'
    return { slug, title, excerpt, image, category, author, publishDate }
  }).filter(b => b.slug)
}

function parseDistrictsTs() {
  const content = fs.readFileSync(path.join(__dirname, 'src/data/districts.ts'), 'utf8')
  const entries = content.split(/\n  \{\n    id: '/g).slice(1)
  return entries.map(e => {
    const slug = e.match(/slug: '([^']+)'/)?.[1] ?? ''
    const name = e.match(/name: '([^']+)'/)?.[1] ?? ''
    const intro = e.match(/intro: '([^']+)'/)?.[1] ?? e.match(/intro: `([^`]+)`/)?.[1] ?? ''
    const image = e.match(/image: '(\/images\/[^']+)'/)?.[1] ?? '/izmirilde-og.png'
    return { slug, name, intro, image }
  }).filter(d => d.slug)
}

const blogs = parseBlogsTs()
const districts = parseDistrictsTs()

console.log(`📖 Parsed: ${blogs.length} blogs, ${districts.length} districts`)

// ── Route → Meta mapping ──────────────────────────────────────────────────────

const staticRoutes = [
  {
    path: '/',
    title: 'İzmir Rehberi 2026 | Gezilecek Yerler, Mekanlar, Etkinlikler — izmirilde',
    description: "İzmir'de gezilecek en iyi 50 yer, 32 ilçe rehberi, Michelin restoranlar, gizli koylar ve etkinlikler. Efes, Alaçatı, Çeşme, Kordon için güncel editör rehberi.",
    image: 'https://izmirilde.com/izmirilde-og.png',
    type: 'website',
  },
  {
    path: '/guides',
    title: 'İzmir Rehberleri — 90+ Editör Yazısı | izmirilde',
    description: "İzmir'in dört bir yanını kapsayan 90+ detaylı rehber. Tarih, yemek, plaj, doğa ve kültür kategorilerinde uzman editör yazıları.",
    image: 'https://izmirilde.com/izmirilde-og.png',
    type: 'website',
  },
  {
    path: '/districts',
    title: 'İzmir 32 İlçe Rehberi — Konak, Karşıyaka, Çeşme ve Daha Fazlası | izmirilde',
    description: "İzmir'in 32 ilçesi için detaylı rehber. Her ilçede kahvaltı, öğle ve akşam yemeği mekanları, gezilecek yerler.",
    image: 'https://izmirilde.com/izmirilde-og.png',
    type: 'website',
  },
  {
    path: '/best-places',
    title: "İzmir'in En İyi 30 Mekanı — Editör Seçimi | izmirilde",
    description: "izmirilde editörlerinin İzmir'in en iyi 30 mekanını seçti. Restoranlar, kafeler, tarihi mekânlar ve gizli noktalarda en iyiler.",
    image: 'https://izmirilde.com/izmirilde-og.png',
    type: 'website',
  },
  {
    path: '/hidden-places',
    title: "İzmir'in Gizli Yerleri — 50 Keşfedilmemiş Nokta | izmirilde",
    description: "Turistlerin bilmediği İzmir: 50 gizli koy, saklı köy, az bilinen antik kent ve yerel sırlar.",
    image: 'https://izmirilde.com/izmirilde-og.png',
    type: 'website',
  },
  {
    path: '/events',
    title: "İzmir Etkinlikler 2026 — Konser, Festival, Fuar | izmirilde",
    description: "İzmir'deki güncel etkinlikler: konserler, festivaller, fuarlar ve kültürel etkinlikler.",
    image: 'https://izmirilde.com/izmirilde-og.png',
    type: 'website',
  },
  {
    path: '/about',
    title: 'Hakkımızda — izmirilde',
    description: "izmirilde, İzmir'i seven editörler tarafından hazırlanan bağımsız bir şehir rehberidir.",
    image: 'https://izmirilde.com/izmirilde-og.png',
    type: 'website',
  },
  {
    path: '/contact',
    title: 'İletişim — izmirilde',
    description: "izmirilde ile iletişime geçin. İşbirliği, öneri ve geri bildirimler için.",
    image: 'https://izmirilde.com/izmirilde-og.png',
    type: 'website',
  },
]

const blogRoutes = blogs.map(b => ({
  path: `/guides/${b.slug}`,
  title: `${b.title} | izmirilde`,
  description: b.excerpt.slice(0, 160),
  image: `https://izmirilde.com${b.image}`,
  type: 'article',
  canonical: `https://izmirilde.com/guides/${b.slug}`,
  author: b.author,
  publishDate: b.publishDate,
  breadcrumb: [
    { name: 'Ana Sayfa', url: 'https://izmirilde.com/' },
    { name: 'Rehberler', url: 'https://izmirilde.com/guides' },
    { name: b.title, url: `https://izmirilde.com/guides/${b.slug}` },
  ],
}))

const districtRoutes = districts.map(d => ({
  path: `/districts/${d.slug}`,
  title: `İzmir ${d.name} Rehberi — Gezilecek Yerler ve Mekanlar | izmirilde`,
  description: `İzmir ${d.name} ilçesinde gezilecek yerler, kahvaltı, öğle ve akşam yemeği mekanları. Detaylı rehber.`,
  image: `https://izmirilde.com${d.image}`,
  type: 'article',
  canonical: `https://izmirilde.com/districts/${d.slug}`,
  breadcrumb: [
    { name: 'Ana Sayfa', url: 'https://izmirilde.com/' },
    { name: 'İlçeler', url: 'https://izmirilde.com/districts' },
    { name: `İzmir ${d.name}`, url: `https://izmirilde.com/districts/${d.slug}` },
  ],
}))

const allRoutes = [...staticRoutes, ...blogRoutes, ...districtRoutes]

// ── HTML injection ────────────────────────────────────────────────────────────

const baseHtml = fs.readFileSync(path.join(DIST, 'index.html'), 'utf8')

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

function buildMetaTags(route) {
  const url = `https://izmirilde.com${route.path}`
  const canonical = route.canonical ?? url
  const tags = []

  // Override title
  tags.push(`<title>${escapeHtml(route.title)}</title>`)
  tags.push(`<meta name="description" content="${escapeHtml(route.description)}" />`)
  tags.push(`<link rel="canonical" href="${canonical}" />`)

  // OG
  tags.push(`<meta property="og:title" content="${escapeHtml(route.title)}" />`)
  tags.push(`<meta property="og:description" content="${escapeHtml(route.description)}" />`)
  tags.push(`<meta property="og:url" content="${canonical}" />`)
  tags.push(`<meta property="og:type" content="${route.type}" />`)
  tags.push(`<meta property="og:image" content="${route.image}" />`)
  tags.push(`<meta property="og:image:width" content="1200" />`)
  tags.push(`<meta property="og:image:height" content="630" />`)
  tags.push(`<meta property="og:locale" content="tr_TR" />`)
  tags.push(`<meta property="og:site_name" content="izmirilde" />`)

  // Twitter
  tags.push(`<meta name="twitter:card" content="summary_large_image" />`)
  tags.push(`<meta name="twitter:title" content="${escapeHtml(route.title)}" />`)
  tags.push(`<meta name="twitter:description" content="${escapeHtml(route.description)}" />`)
  tags.push(`<meta name="twitter:image" content="${route.image}" />`)

  // Article specific
  if (route.type === 'article' && route.author) {
    tags.push(`<meta property="article:author" content="${escapeHtml(route.author)}" />`)
    tags.push(`<meta property="article:published_time" content="${route.publishDate}" />`)
  }

  // BreadcrumbList JSON-LD
  if (route.breadcrumb) {
    const breadcrumbLd = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: route.breadcrumb.map((item, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: item.name,
        item: item.url,
      })),
    }
    tags.push(`<script type="application/ld+json">${JSON.stringify(breadcrumbLd)}</script>`)
  }

  return tags.join('\n    ')
}

function injectMeta(html, route) {
  const metaTags = buildMetaTags(route)

  // Replace <title> tag
  let result = html.replace(
    /<title>[^<]*<\/title>/,
    `<title>${escapeHtml(route.title)}</title>`
  )

  // Replace meta description
  result = result.replace(
    /<meta\s+name="description"\s+content="[^"]*"\s*\/>/,
    `<meta name="description" content="${escapeHtml(route.description)}" />`
  )

  // Replace canonical
  const canonical = route.canonical ?? `https://izmirilde.com${route.path}`
  result = result.replace(
    /<link\s+rel="canonical"\s+href="[^"]*"\s*\/>/,
    `<link rel="canonical" href="${canonical}" />`
  )

  // Replace OG tags
  result = result.replace(/<meta\s+property="og:title"[^>]*\/>/g, `<meta property="og:title" content="${escapeHtml(route.title)}" />`)
  result = result.replace(/<meta\s+property="og:description"[^>]*\/>/g, `<meta property="og:description" content="${escapeHtml(route.description)}" />`)
  result = result.replace(/<meta\s+property="og:url"[^>]*\/>/g, `<meta property="og:url" content="${canonical}" />`)
  result = result.replace(/<meta\s+property="og:image"[^>]*content="[^"]*"[^>]*\/>/g, `<meta property="og:image" content="${route.image}" />`)
  result = result.replace(/<meta\s+property="og:image:secure_url"[^>]*\/>/g, `<meta property="og:image:secure_url" content="${route.image}" />`)
  result = result.replace(/<meta\s+property="og:image:alt"[^>]*\/>/g, `<meta property="og:image:alt" content="${escapeHtml(route.title)}" />`)
  result = result.replace(/<meta\s+property="og:type"[^>]*\/>/g, `<meta property="og:type" content="${route.type}" />`)

  // Replace Twitter tags
  result = result.replace(/<meta\s+name="twitter:title"[^>]*\/>/g, `<meta name="twitter:title" content="${escapeHtml(route.title)}" />`)
  result = result.replace(/<meta\s+name="twitter:description"[^>]*\/>/g, `<meta name="twitter:description" content="${escapeHtml(route.description)}" />`)
  result = result.replace(/<meta\s+name="twitter:image"[^>]*\/>/g, `<meta name="twitter:image" content="${route.image}" />`)
  result = result.replace(/<meta\s+name="twitter:url"[^>]*\/>/g, `<meta name="twitter:url" content="${canonical}" />`)

  // Inject BreadcrumbList before </head>
  if (route.breadcrumb) {
    const breadcrumbLd = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: route.breadcrumb.map((item, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: item.name,
        item: item.url,
      })),
    }
    const scriptTag = `\n    <script type="application/ld+json">${JSON.stringify(breadcrumbLd)}</script>`
    result = result.replace('</head>', scriptTag + '\n  </head>')
  }

  return result
}

// ── Write files ───────────────────────────────────────────────────────────────

let written = 0
let errors = 0

for (const route of allRoutes) {
  try {
    const html = injectMeta(baseHtml, route)

    // Determine output path
    let outPath
    if (route.path === '/') {
      outPath = path.join(DIST, 'index.html')
      // Overwrite root index.html in place
      fs.writeFileSync(outPath, html, 'utf8')
    } else {
      const dir = path.join(DIST, route.path)
      fs.mkdirSync(dir, { recursive: true })
      outPath = path.join(dir, 'index.html')
      fs.writeFileSync(outPath, html, 'utf8')
    }

    written++
  } catch (err) {
    console.error(`❌ Error for ${route.path}:`, err.message)
    errors++
  }
}

console.log(`\n✅ Prerender tamamlandı: ${written} sayfa yazıldı, ${errors} hata`)
console.log(`📁 Output: ${DIST}`)
