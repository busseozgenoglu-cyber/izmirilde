#!/usr/bin/env node
/**
 * scripts/prerender.mjs
 *
 * react-snap'i programatik olarak çalıştırır. Include listesini src/data'dan
 * dinamik üretir — blog / ilçe ekledikçe manuel liste güncellemek gerekmez.
 *
 * `vite build`'den sonra çalışır (package.json'daki postbuild script'i ile).
 * Çıktı: dist/ içinde her route için ayrı index.html (örn. dist/guides/<slug>/index.html).
 */

import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'
import { execSync } from 'node:child_process'
import { run } from 'react-snap'

// PUPPETEER_EXECUTABLE_PATH set değilse sistem chromium'unu bulmaya çalış
// (Nixpacks `chromium` binary'sini PATH'e koyar, Alpine `chromium-browser`).
if (!process.env.PUPPETEER_EXECUTABLE_PATH) {
  for (const cmd of ['chromium', 'chromium-browser', 'google-chrome']) {
    try {
      const path = execSync(`command -v ${cmd}`, { stdio: ['pipe', 'pipe', 'ignore'] })
        .toString()
        .trim()
      if (path) {
        process.env.PUPPETEER_EXECUTABLE_PATH = path
        console.log(`[prerender] chromium bulundu: ${path}`)
        break
      }
    } catch {
      // devam et
    }
  }
}

const __dirname = dirname(fileURLToPath(import.meta.url))
const projectRoot = resolve(__dirname, '..')

/**
 * TS source'tan slug'ları regex ile çeker. Data dosyaları TS transpile
 * gerektirdiği için import yerine metinsel parse yapıyoruz (build step'ten kaçmak için).
 * `slug: 'xxx-yyy'` veya `slug: "xxx-yyy"` pattern'ini yakalar.
 */
function extractSlugs(filePath) {
  const src = readFileSync(filePath, 'utf8')
  const slugs = []
  // slug: 'something-here' veya slug: "something-here"
  const re = /\bslug\s*:\s*['"]([a-z0-9]+(?:-[a-z0-9]+)*)['"]/g
  let match
  while ((match = re.exec(src)) !== null) {
    slugs.push(match[1])
  }
  // Duplicate'leri temizle
  return [...new Set(slugs)]
}

const blogSlugs = extractSlugs(resolve(projectRoot, 'src/data/blogs.ts'))
const districtSlugs = extractSlugs(resolve(projectRoot, 'src/data/districts.ts'))

// Statik route'lar — App.tsx'teki Routes ile eşleşmeli
const staticRoutes = [
  '/',
  '/places',
  '/events',
  '/guides',
  '/districts',
  '/best-places',
  '/hidden-places',
  '/about',
  '/contact',
  '/gizlilik-politikasi',
  '/hizmet-sartlari',
]

const dynamicRoutes = [
  ...blogSlugs.map((s) => `/guides/${s}`),
  ...districtSlugs.map((s) => `/districts/${s}`),
]

const include = [...staticRoutes, ...dynamicRoutes]

console.log(`[prerender] ${staticRoutes.length} static + ${dynamicRoutes.length} dynamic (${blogSlugs.length} blog + ${districtSlugs.length} ilçe) = ${include.length} route`)

// react-snap options
// Referans: https://github.com/stereobooster/react-snap#options
const options = {
  source: 'dist',
  include,
  // Puppeteer Chromium download'u Railway'de sorun yaşıyorsa
  // PUPPETEER_EXECUTABLE_PATH env var set edilebilir (Dockerfile'a eklenmeli).
  puppeteerArgs: [
    '--no-sandbox',
    '--disable-setuid-sandbox',
    '--disable-dev-shm-usage',
  ],
  // 404 URL'i için fallback. NotFoundPage zaten noindex döndürüyor.
  fixInsertRule: false,
  // Link sıralamasını değiştirmesin (bizim flag'lerle karışmasın)
  sortClassNames: false,
  // Inline <style> koymasın — ayrı CSS dosyası daha iyi cache
  inlineCss: false,
  // Farklı route'larda aynı output race condition'a girmesin
  concurrency: 4,
  skipThirdPartyRequests: true,
  cacheAjaxRequests: false,
  // Helmet'in her sayfaya özel <title>, <meta> yazabilmesi için
  // tam render'dan sonra snapshot alınmalı
  waitFor: 500,
}

try {
  await run(options)
  console.log('[prerender] tamamlandı ✓')
} catch (err) {
  console.error('[prerender] hata:', err)
  process.exit(1)
}
