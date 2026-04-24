import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import fs from 'fs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const PORT = parseInt(process.env.PORT) || 3000

const CLIENT_DIST = path.join(__dirname, 'dist/client')
const SERVER_DIST = path.join(__dirname, 'dist/server')

// ── Meta map: build-time serialized JSON ─────────────────────────────────────
const metaMapPath = path.join(SERVER_DIST, 'meta-map.json')
const META_MAP = JSON.parse(fs.readFileSync(metaMapPath, 'utf-8'))
console.log(`📋 Meta map: ${Object.keys(META_MAP).length} routes`)

// ── Express ───────────────────────────────────────────────────────────────────
const app = express()

app.use(express.static(CLIENT_DIST, {
  index: false,
  maxAge: '1y',
  immutable: true,
}))

// ── HTML injection ────────────────────────────────────────────────────────────
const templatePath = path.join(CLIENT_DIST, 'index.html')

function esc(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

function injectMeta(template, appHtml, meta, pathname, helmet = null) {
  let html = template

  // React app into root (support both empty root and ssr-outlet comment)
  html = html.replace(/<div id="root">[\s\S]*?<\/div>/, `<div id="root">${appHtml}</div>`)

  if (!meta) return html

  const canonical = meta.canonical ?? `https://izmirilde.com${pathname}`
  const img = meta.image ?? 'https://izmirilde.com/izmirilde-og.png'
  const title = meta.title ?? ''

  // Title & meta title (use helmet title if available)
  html = html.replace(/<title>[^<]*<\/title>/, helmet?.title ? helmet.title.toString() : `<title>${esc(title)}</title>`)
  html = html.replace(/<meta\s+name="title"\s+content="[^"]*"\s*\/?>/, `<meta name="title" content="${esc(title)}" />`)
  html = html.replace(/<meta\s+name="description"\s+content="[^"]*"\s*\/?>/, `<meta name="description" content="${esc(meta.description)}" />`)
  html = html.replace(/<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/, `<link rel="canonical" href="${canonical}" />`)

  // OG / Twitter
  html = html.replace(/<meta\s+property="og:title"[^>]*\/?>/, `<meta property="og:title" content="${esc(title)}" />`)
  html = html.replace(/<meta\s+property="og:description"[^>]*\/?>/, `<meta property="og:description" content="${esc(meta.description)}" />`)
  html = html.replace(/<meta\s+property="og:url"[^>]*\/?>/, `<meta property="og:url" content="${canonical}" />`)
  html = html.replace(/<meta\s+property="og:type"[^>]*\/?>/, `<meta property="og:type" content="${meta.type}" />`)
  html = html.replace(/<meta\s+property="og:image"[^>]*content="[^"]*"[^>]*\/?>/, `<meta property="og:image" content="${img}" />`)
  html = html.replace(/<meta\s+property="og:image:secure_url"[^>]*\/?>/, `<meta property="og:image:secure_url" content="${img}" />`)
  html = html.replace(/<meta\s+property="og:image:alt"[^>]*\/?>/, `<meta property="og:image:alt" content="${esc(title)}" />`)

  html = html.replace(/<meta\s+name="twitter:title"[^>]*\/?>/, `<meta name="twitter:title" content="${esc(title)}" />`)
  html = html.replace(/<meta\s+name="twitter:description"[^>]*\/?>/, `<meta name="twitter:description" content="${esc(meta.description)}" />`)
  html = html.replace(/<meta\s+name="twitter:image"[^>]*\/?>/, `<meta name="twitter:image" content="${img}" />`)
  html = html.replace(/<meta\s+name="twitter:url"[^>]*\/?>/, `<meta name="twitter:url" content="${canonical}" />`)

  let extraHead = ''

  if (meta.type === 'article' && meta.author) {
    extraHead += `\n    <meta property="article:author" content="${esc(meta.author)}" />`
    if (meta.publishDate) {
      extraHead += `\n    <meta property="article:published_time" content="${esc(meta.publishDate)}" />`
    }
  }

  if (meta.breadcrumb) {
    const ld = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: meta.breadcrumb.map((b, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: b.name,
        item: b.item,
      })),
    })
    extraHead += `\n    <script type="application/ld+json">${ld}</script>`
  }

  // Inject helmet script tags (JSON-LD schemas from pages like BlogPosting, FAQPage, HowTo)
  if (helmet?.script) {
    extraHead += `\n    ${helmet.script.toString()}`
  }

  if (extraHead) {
    html = html.replace('</head>', `${extraHead}\n  </head>`)
  }

  return html
}

// ── SSR renderer (lazy load, cached) ─────────────────────────────────────────
let renderFn = null
async function getRenderer() {
  if (!renderFn) {
    const mod = await import(path.join(SERVER_DIST, 'entry-server.js'))
    renderFn = mod.render
  }
  return renderFn
}

// ── Route handler ─────────────────────────────────────────────────────────────
app.get('*', async (req, res) => {
  const url = req.originalUrl
  const pathname = url.split('?')[0]

  try {
    const template = fs.readFileSync(templatePath, 'utf-8')
    const render = await getRenderer()
    const { html: appHtml, helmet } = render(url)
    const meta = META_MAP[pathname]
    const fullHtml = injectMeta(template, appHtml, meta, pathname, helmet)

    res
      .status(200)
      .set('Content-Type', 'text/html')
      .set('Cache-Control', meta
        ? 'public, max-age=300, stale-while-revalidate=3600'
        : 'no-cache')
      .send(fullHtml)
  } catch (err) {
    console.error('SSR Error:', url, err.message)
    try {
      res.status(200).set('Content-Type', 'text/html').send(
        fs.readFileSync(templatePath, 'utf-8')
      )
    } catch {
      res.status(500).send('Server Error')
    }
  }
})

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 izmirilde SSR on port ${PORT}`)
})
