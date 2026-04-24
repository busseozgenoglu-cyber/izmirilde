/**
 * build-meta.mjs
 * Build-time: src/data/*.ts dosyalarını parse edip
 * dist/server/meta-map.json olarak serialize eder.
 * server.js bu JSON'ı okur — runtime'da .ts dosyası gerekmez.
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const OUT = path.join(__dirname, 'dist/server/meta-map.json')

const map = {}

// ── Blogs ─────────────────────────────────────────────────────────────────────
const blogsTs = fs.readFileSync(path.join(__dirname, 'src/data/blogs.ts'), 'utf8')
const blogEntries = blogsTs.split(/\n  \{\n    id: '/g).slice(1)
let blogCount = 0

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

  if (!slug || !title) continue

  map[`/guides/${slug}`] = {
    title: `${title} | izmirilde`,
    description: excerpt,
    image: `https://izmirilde.com${image}`,
    type: 'article',
    canonical: `https://izmirilde.com/guides/${slug}`,
    author,
    publishDate,
    breadcrumb: [
      { name: 'Ana Sayfa', item: 'https://izmirilde.com/' },
      { name: 'Rehberler', item: 'https://izmirilde.com/guides' },
      { name: title, item: `https://izmirilde.com/guides/${slug}` },
    ],
  }
  blogCount++
}

// ── Districts ─────────────────────────────────────────────────────────────────
const districtsTs = fs.readFileSync(path.join(__dirname, 'src/data/districts.ts'), 'utf8')
const distEntries = districtsTs.split(/\n  \{\n    id: '/g).slice(1)
let distCount = 0

for (const e of distEntries) {
  const slug = e.match(/slug: '([^']+)'/)?.[1]
  const name = e.match(/name: '([^']+)'/)?.[1]
  const image = e.match(/image: '(\/images\/[^']+)'/)?.[1] ?? '/izmirilde-og.png'

  if (!slug || !name) continue

  const title = `İzmir ${name} Rehberi — Gezilecek Yerler ve Mekanlar | izmirilde`
  map[`/districts/${slug}`] = {
    title,
    description: `İzmir ${name} ilçesinde gezilecek yerler, kahvaltı, öğle ve akşam yemeği mekanları. Detaylı rehber.`,
    image: `https://izmirilde.com${image}`,
    type: 'article',
    canonical: `https://izmirilde.com/districts/${slug}`,
    breadcrumb: [
      { name: 'Ana Sayfa', item: 'https://izmirilde.com/' },
      { name: 'İlçeler', item: 'https://izmirilde.com/districts' },
      { name: `İzmir ${name}`, item: `https://izmirilde.com/districts/${slug}` },
    ],
  }
  distCount++
}

// ── Static pages ──────────────────────────────────────────────────────────────
const statics = [
  ['/', 'İzmir Rehberi 2026 | Gezilecek Yerler, Mekanlar, Etkinlikler — izmirilde', "İzmir'de gezilecek en iyi yerler, 32 ilçe rehberi, Michelin restoranlar ve etkinlikler.", 'website'],
  ['/guides', 'İzmir Rehberleri — 90+ Editör Yazısı | izmirilde', "İzmir'in dört bir yanını kapsayan 90+ detaylı rehber.", 'website'],
  ['/districts', 'İzmir 32 İlçe Rehberi | izmirilde', "İzmir'in 32 ilçesi için detaylı gezilecek yer ve mekan rehberi.", 'website'],
  ['/best-places', "İzmir'in En İyi 30 Mekanı | izmirilde", "izmirilde editörlerinin seçtiği İzmir'in en iyi 30 mekanı.", 'website'],
  ['/hidden-places', "İzmir'in Gizli Yerleri | izmirilde", "Turistlerin bilmediği 50 gizli koy, saklı köy ve az bilinen nokta.", 'website'],
  ['/events', 'İzmir Etkinlikler 2026 | izmirilde', "İzmir'deki güncel konserler, festivaller ve kültürel etkinlikler.", 'website'],
  ['/about', 'Hakkımızda | izmirilde', "izmirilde, İzmir'i seven editörler tarafından hazırlanan bağımsız şehir rehberidir.", 'website'],
  ['/contact', 'İletişim | izmirilde', 'izmirilde ile iletişime geçin.', 'website'],
  ['/gizlilik-politikasi', 'Gizlilik Politikası | izmirilde', 'izmirilde gizlilik politikası.', 'website'],
  ['/hizmet-sartlari', 'Hizmet Şartları | izmirilde', 'izmirilde hizmet şartları.', 'website'],
]

for (const [p, title, description, type] of statics) {
  map[p] = {
    title,
    description,
    image: 'https://izmirilde.com/izmirilde-og.png',
    type,
    canonical: `https://izmirilde.com${p}`,
  }
}

fs.writeFileSync(OUT, JSON.stringify(map, null, 0), 'utf8')

const total = Object.keys(map).length
console.log(`✅ meta-map.json: ${total} routes (${blogCount} blog, ${distCount} district, ${statics.length} static)`)
