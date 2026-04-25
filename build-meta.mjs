/**
 * build-meta.mjs
 * Build-time: src/data/*.ts dosyalarını parse edip
 * dist/server/meta-map.json olarak serialize eder.
 * server.js bu JSON'ı okur — runtime'da .ts dosyası gerekmez.
 * Ayrıca otomatik sitemap.xml / news-sitemap.xml / sitemap-index.xml üretir.
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const OUT = path.join(__dirname, 'dist/server/meta-map.json')
const CLIENT_DIST = path.join(__dirname, 'dist/client')

const map = {}
const today = new Date().toISOString().split('T')[0]

// ── Helpers ───────────────────────────────────────────────────────────────────
function escXml(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

// ── Blogs ─────────────────────────────────────────────────────────────────────
const blogsTs = fs.readFileSync(path.join(__dirname, 'src/data/blogs.ts'), 'utf8')
const blogEntries = blogsTs.split(/\n  \{\n    id: '/g).slice(1)
let blogCount = 0
const blogUrls = []

for (const e of blogEntries) {
  const slug = e.match(/slug: '([^']+)'/)?.[1]
  const title = e.match(/title: "([^"]+)"/)?.[1]
  const excerptRaw =
    e.match(/excerpt: '((?:[^'\\]|\\.)+)'/)?.[1] ??
    e.match(/excerpt: "([^"]+)"/)?.[1] ?? ''
  const excerpt = excerptRaw.replace(/\\'/g, "'").replace(/\\"/g, '"').slice(0, 160)
  const image = e.match(/image: '(\/images\/[^']+)'/)?.[1] ?? '/izmirilde-og.png'
  const author = e.match(/author: '([^']+)'/)?.[1] ?? 'izmirilde Editörleri'
  const publishDate = e.match(/publishDate: '([^']+)'/)?.[1] ?? '2026-04-24'

  // Parse tags array
  const tagsMatch = e.match(/tags: \[([^\]]+)\]/)
  let keywords = ''
  if (tagsMatch) {
    keywords = tagsMatch[1]
      .split(',')
      .map(t => t.trim().replace(/^['"]|['"]$/g, ''))
      .filter(Boolean)
      .join(', ')
  }

  if (!slug || !title) continue

  map[`/guides/${slug}`] = {
    title: `${title} | izmirilde`,
    description: excerpt,
    image: `https://izmirilde.com${image}`,
    type: 'article',
    canonical: `https://izmirilde.com/guides/${slug}`,
    author,
    publishDate,
    keywords,
    breadcrumb: [
      { name: 'Ana Sayfa', item: 'https://izmirilde.com/' },
      { name: 'Rehberler', item: 'https://izmirilde.com/guides' },
      { name: title, item: `https://izmirilde.com/guides/${slug}` },
    ],
  }
  blogUrls.push({ slug, title, image, publishDate, priority: '0.8' })
  blogCount++
}

// ── Districts ─────────────────────────────────────────────────────────────────
const districtsTs = fs.readFileSync(path.join(__dirname, 'src/data/districts.ts'), 'utf8')
const distEntries = districtsTs.split(/\n  \{\n    id: '/g).slice(1)
let distCount = 0
const districtUrls = []

for (const e of distEntries) {
  const slug = e.match(/slug: '([^']+)'/)?.[1]
  const name = e.match(/name: '([^']+)'/)?.[1]
  const image = e.match(/image: '(\/images\/[^']+)'/)?.[1] ?? '/izmirilde-og.png'

  if (!slug || !name) continue

  const title = `İzmir ${name} Rehberi — Gezilecek Yerler ve Mekanlar | izmirilde`
  const keywords = `${name}, İzmir ${name}, ${name} gezilecek yerler, ${name} kahvaltı, ${name} restoran, ${name} mekanlar`

  map[`/districts/${slug}`] = {
    title,
    description: `İzmir ${name} ilçesinde gezilecek yerler, kahvaltı, öğle ve akşam yemeği mekanları. Detaylı rehber.`,
    image: `https://izmirilde.com${image}`,
    type: 'article',
    canonical: `https://izmirilde.com/districts/${slug}`,
    keywords,
    breadcrumb: [
      { name: 'Ana Sayfa', item: 'https://izmirilde.com/' },
      { name: 'İlçeler', item: 'https://izmirilde.com/districts' },
      { name: `İzmir ${name}`, item: `https://izmirilde.com/districts/${slug}` },
    ],
  }
  districtUrls.push({ slug, name, image, priority: '0.7' })
  distCount++
}

// ── Static pages ──────────────────────────────────────────────────────────────
const statics = [
  ['/', 'İzmir Rehberi 2026 | Gezilecek Yerler, Mekanlar, Etkinlikler — izmirilde', "İzmir'de gezilecek en iyi yerler, 32 ilçe rehberi, Michelin restoranlar ve etkinlikler.", 'website', '1.0', 'daily', 'İzmir, İzmir gezilecek yerler, İzmir rehberi, İzmir mekanlar, Efes, Alaçatı, Çeşme, Kordon'],
  ['/guides', 'İzmir Rehberleri — 90+ Editör Yazısı | izmirilde', "İzmir'in dört bir yanını kapsayan 90+ detaylı rehber.", 'website', '0.95', 'daily', 'İzmir rehberi, İzmir gezilecek yerler, İzmir blog, Ege gezi rehberi'],
  ['/districts', 'İzmir 32 İlçe Rehberi | izmirilde', "İzmir'in 32 ilçesi için detaylı gezilecek yer ve mekan rehberi.", 'website', '0.95', 'weekly', 'İzmir ilçeleri, İzmir 32 ilçe, İzmir gezi rehberi'],
  ['/best-places', "İzmir'in En İyi 30 Mekanı | izmirilde", "izmirilde editörlerinin seçtiği İzmir'in en iyi 30 mekanı.", 'website', '0.9', 'weekly', 'İzmir en iyi mekanlar, İzmir restoran, İzmir kahvaltı, İzmir gece hayatı'],
  ['/hidden-places', "İzmir'in Gizli Yerleri | izmirilde", "Turistlerin bilmediği 50 gizli koy, saklı köy ve az bilinen nokta.", 'website', '0.9', 'weekly', 'İzmir gizli yerler, İzmir saklı koylar, İzmir az bilinen yerler'],
  ['/events', 'İzmir Etkinlikler 2026 | izmirilde', "İzmir'deki güncel konserler, festivaller ve kültürel etkinlikler.", 'website', '0.85', 'daily', 'İzmir etkinlikler, İzmir konser, İzmir festival 2026'],
  ['/places', 'İzmir Mekanları | izmirilde', "İzmir'in en iyi mekanları ve gezilecek yerleri.", 'website', '0.85', 'weekly', 'İzmir mekanları, İzmir gezilecek yerler, İzmir restoran'],
  ['/about', 'Hakkımızda | izmirilde', "izmirilde, İzmir'i seven editörler tarafından hazırlanan bağımsız şehir rehberidir.", 'website', '0.6', 'monthly', 'izmirilde, İzmir rehberi, İzmir blog'],
  ['/contact', 'İletişim | izmirilde', 'izmirilde ile iletişime geçin.', 'website', '0.5', 'monthly', 'izmirilde iletişim, İzmir rehberi iletişim'],
  ['/gizlilik-politikasi', 'Gizlilik Politikası | izmirilde', 'izmirilde gizlilik politikası.', 'website', '0.3', 'yearly', ''],
  ['/hizmet-sartlari', 'Hizmet Şartları | izmirilde', 'izmirilde hizmet şartları.', 'website', '0.3', 'yearly', ''],
]

const staticUrls = []
for (const [p, title, description, type, priority, changefreq, keywords] of statics) {
  map[p] = {
    title,
    description,
    image: 'https://izmirilde.com/izmirilde-og.png',
    type,
    canonical: `https://izmirilde.com${p}`,
    keywords,
  }
  staticUrls.push({ loc: p, priority, changefreq, image: '/izmirilde-og.png', title })
}

fs.writeFileSync(OUT, JSON.stringify(map, null, 0), 'utf8')

// ── Sitemap Generation ────────────────────────────────────────────────────────
fs.mkdirSync(CLIENT_DIST, { recursive: true })

// Main sitemap.xml
let sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n`

for (const u of staticUrls) {
  const imgTitle = escXml(u.title)
  sitemapXml += `  <url>\n    <loc>https://izmirilde.com${u.loc}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${u.changefreq}</changefreq>\n    <priority>${u.priority}</priority>\n`
  if (u.image) {
    sitemapXml += `    <image:image>\n      <image:loc>https://izmirilde.com${u.image}</image:loc>\n      <image:title>${imgTitle}</image:title>\n    </image:image>\n`
  }
  sitemapXml += `  </url>\n`
}

for (const b of blogUrls) {
  const imgTitle = escXml(b.title)
  sitemapXml += `  <url>\n    <loc>https://izmirilde.com/guides/${b.slug}</loc>\n    <lastmod>${b.publishDate}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>${b.priority}</priority>\n    <image:image>\n      <image:loc>https://izmirilde.com${b.image}</image:loc>\n      <image:title>${imgTitle}</image:title>\n      <image:caption>${imgTitle} — izmirilde rehberi</image:caption>\n    </image:image>\n  </url>\n`
}

for (const d of districtUrls) {
  const imgTitle = escXml(`İzmir ${d.name} Rehberi`)
  sitemapXml += `  <url>\n    <loc>https://izmirilde.com/districts/${d.slug}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${d.priority}</priority>\n    <image:image>\n      <image:loc>https://izmirilde.com${d.image}</image:loc>\n      <image:title>${imgTitle}</image:title>\n      <image:caption>${imgTitle} — izmirilde rehberi</image:caption>\n    </image:image>\n  </url>\n`
}

sitemapXml += '</urlset>\n'
fs.writeFileSync(path.join(CLIENT_DIST, 'sitemap.xml'), sitemapXml, 'utf8')

// News sitemap.xml (Google News compatible — last 2 days + last 30 days articles)
const newsCutoff = new Date()
newsCutoff.setDate(newsCutoff.getDate() - 30)
let newsXml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">\n`

for (const b of blogUrls) {
  const pubDate = new Date(b.publishDate)
  if (pubDate >= newsCutoff) {
    newsXml += `  <url>\n    <loc>https://izmirilde.com/guides/${b.slug}</loc>\n    <news:news>\n      <news:publication>\n        <news:name>izmirilde</news:name>\n        <news:language>tr</news:language>\n      </news:publication>\n      <news:publication_date>${b.publishDate}</news:publication_date>\n      <news:title>${escXml(b.title)}</news:title>\n    </news:news>\n  </url>\n`
  }
}

newsXml += '</urlset>\n'
fs.writeFileSync(path.join(CLIENT_DIST, 'news-sitemap.xml'), newsXml, 'utf8')

// Sitemap index
const sitemapIndexXml = `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <sitemap>\n    <loc>https://izmirilde.com/sitemap.xml</loc>\n    <lastmod>${today}</lastmod>\n  </sitemap>\n  <sitemap>\n    <loc>https://izmirilde.com/news-sitemap.xml</loc>\n    <lastmod>${today}</lastmod>\n  </sitemap>\n</sitemapindex>\n`
fs.writeFileSync(path.join(CLIENT_DIST, 'sitemap-index.xml'), sitemapIndexXml, 'utf8')

const total = Object.keys(map).length
console.log(`✅ meta-map.json: ${total} routes (${blogCount} blog, ${distCount} district, ${statics.length} static)`)
console.log(`✅ sitemap.xml: ${staticUrls.length + blogUrls.length + districtUrls.length} URLs`)
console.log(`✅ news-sitemap.xml: ${blogUrls.filter(b => new Date(b.publishDate) >= newsCutoff).length} articles (last 30 days)`)
console.log(`✅ sitemap-index.xml: 2 sitemaps`)
