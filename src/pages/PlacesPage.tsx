import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Search } from 'lucide-react'
import Card from '../components/Card'
import useScrollReveal from '../hooks/useScrollReveal'
import { placeCards } from '../data'

// Location string → district slug mapping
function locationToSlug(location: string): string {
  const loc = location.toLowerCase()
  if (loc.includes('alsancak') || loc.includes('kordon')) return '/districts/alsancak-ve-kordon'
  if (loc.includes('karşıyaka') || loc.includes('bostanlı')) return '/districts/karsiyaka'
  if (loc.includes('çeşme')) return '/districts/cesme'
  if (loc.includes('alaçatı')) return '/districts/alacati'
  if (loc.includes('urla')) return '/districts/urla'
  if (loc.includes('konak') || loc.includes('kemeraltı')) return '/districts/konak'
  if (loc.includes('karataş')) return '/guides/tarihi-asansor-karatas'
  if (loc.includes('bornova')) return '/districts/bornova'
  if (loc.includes('foça')) return '/districts/foca'
  if (loc.includes('selçuk')) return '/districts/selcuk'
  if (loc.includes('seferihisar') || loc.includes('sığacık')) return '/districts/seferihisar-ve-sigacik'
  if (loc.includes('güzelyalı')) return '/districts/konak'
  if (loc.includes('balçova')) return '/districts/balcova'
  if (loc.includes('narlıdere')) return '/districts/narlidere'
  if (loc.includes('aliağa')) return '/districts/aliaga'
  if (loc.includes('dikili')) return '/districts/dikili'
  if (loc.includes('bergama')) return '/districts/bergama'
  if (loc.includes('buca')) return '/districts/buca'
  if (loc.includes('menemen')) return '/districts/menemen'
  if (loc.includes('kemalpaşa')) return '/districts/kemalpasa'
  if (loc.includes('gaziemir')) return '/districts/gaziemir'
  if (loc.includes('bayraklı')) return '/districts/bayrakli'
  if (loc.includes('çiğli')) return '/districts/cigli'
  if (loc.includes('karabağlar')) return '/districts/karabaglar'
  if (loc.includes('karaburun')) return '/districts/karaburun'
  if (loc.includes('menderes')) return '/districts/menderes'
  if (loc.includes('güzelbahçe')) return '/districts/guzelbahce'
  if (loc.includes('ödemiş')) return '/districts/odemis'
  if (loc.includes('tire')) return '/districts/tire'
  if (loc.includes('torbalı')) return '/districts/torbali'
  return '/districts'
}

const categories = [
  { name: 'Tümü', count: 248 },
  { name: 'Kafe', count: 64 },
  { name: 'Restoran', count: 82 },
  { name: 'Bar', count: 45 },
  { name: 'Beach', count: 28 },
  { name: 'Kültür & Sanat', count: 29 },
]

const districts = [
  { name: 'Alsancak', count: 68 },
  { name: 'Karşıyaka', count: 42 },
  { name: 'Çeşme', count: 35 },
  { name: 'Konak', count: 31 },
  { name: 'Urla', count: 24 },
  { name: 'Güzelyalı', count: 18 },
  { name: 'Diğer', count: 30 },
]

const priceLevels = ['₺', '₺₺', '₺₺₺', '₺₺₺₺']

const features = ['Manzara', 'Teras', 'Vale', 'Engelsiz', 'Evcil Hayvan', 'Canlı Müzik']

export default function PlacesPage() {
  const [activeCategory, setActiveCategory] = useState('Tümü')
  const [activeDistricts, setActiveDistricts] = useState<string[]>([])
  const [activePrice, setActivePrice] = useState<string | null>(null)
  const [activeFeatures, setActiveFeatures] = useState<string[]>([])
  const [visibleCount, setVisibleCount] = useState(9)

  const toggleDistrict = (d: string) => {
    setActiveDistricts((prev) =>
      prev.includes(d) ? prev.filter((x) => x !== d) : [...prev, d]
    )
  }

  const toggleFeature = (f: string) => {
    setActiveFeatures((prev) =>
      prev.includes(f) ? prev.filter((x) => x !== f) : [...prev, f]
    )
  }

  const visibleCards = placeCards.slice(0, visibleCount)

  useScrollReveal()

  return (
    <>
      <Helmet>
        <title>İzmir Mekanları — Kahvaltı, Restoran, Kafe ve Daha Fazlası | izmirilde</title>
        <meta name="description" content="İzmir'in en iyi mekanları: kahvaltı yerleri, restoranlar, kafeler, barlar ve gece hayatı. 270+ gerçek mekan önerisi izmirilde editörlerinden." />
        <link rel="canonical" href="https://izmirilde.com/places" />
        <meta property="og:title" content="İzmir Mekanları — 270+ Editör Önerisi | izmirilde" />
        <meta property="og:description" content="İzmir'in en iyi mekanları: kahvaltı, restoran, kafe, bar ve gece hayatı için editör seçimleri." />
        <meta property="og:url" content="https://izmirilde.com/places" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://izmirilde.com/izmirilde-og.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="İzmir Mekanları — 270+ Editör Önerisi | izmirilde" />
        <meta name="twitter:description" content="İzmir'in en iyi mekanları: kahvaltı, restoran, kafe ve bar önerileri." />
        <meta name="twitter:image" content="https://izmirilde.com/izmirilde-og.png" />
      </Helmet>
      <main>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <img
          src="/images/places-hero.jpg"
          alt="Mekanlar"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-4">
          <h1
            className="text-h1 font-bold text-white leading-[0.95] tracking-[-0.04em] reveal"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Mekanlar
          </h1>
          <p className="mt-4 text-white/85 text-lg max-w-[500px] mx-auto reveal reveal-delay-1">
            İzmir&apos;in en iyi kafeleri, restoranları, barları ve beach club&apos;ları
          </p>

          {/* Search */}
          <div
            className="mt-8 flex items-center gap-3 bg-white/15 border border-white/30 rounded-xl px-5 py-3.5 max-w-lg mx-auto reveal reveal-delay-2"
          >
            <Search className="w-5 h-5 text-white/60 shrink-0" />
            <input
              type="text"
              placeholder="Bir mekan ara..."
              className="flex-1 bg-transparent text-white placeholder:text-white/50 text-base min-w-0"
            />
            <button className="shrink-0 px-5 py-2 bg-white text-black rounded-lg text-sm font-medium">
              Ara
            </button>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-[4vw]">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Sidebar - Desktop */}
            <aside className="hidden lg:block w-[280px] shrink-0">
              <div className="sticky top-24 bg-[#FFF5EE] rounded-2xl p-6">
                {/* Category Filter */}
                <div className="mb-8">
                  <h4 className="font-semibold text-sm mb-4">Kategori</h4>
                  <div className="space-y-2.5">
                    {categories.map((cat) => (
                      <label
                        key={cat.name}
                        className="flex items-center gap-3 cursor-pointer group"
                      >
                        <div
                          className={`w-4 h-4 rounded border-2 flex items-center justify-center transition-colors ${
                            activeCategory === cat.name
                              ? 'bg-black border-black'
                              : 'border-black/20 group-hover:border-black/40'
                          }`}
                          onClick={() => setActiveCategory(cat.name)}
                        >
                          {activeCategory === cat.name && (
                            <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                              <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          )}
                        </div>
                        <span className="text-sm text-black/80 flex-1">{cat.name}</span>
                        <span className="text-xs text-black/40">({cat.count})</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* District Filter */}
                <div className="mb-8">
                  <h4 className="font-semibold text-sm mb-4">İlçe</h4>
                  <div className="space-y-2.5">
                    {districts.map((d) => (
                      <label
                        key={d.name}
                        className="flex items-center gap-3 cursor-pointer group"
                      >
                        <div
                          className={`w-4 h-4 rounded border-2 flex items-center justify-center transition-colors ${
                            activeDistricts.includes(d.name)
                              ? 'bg-black border-black'
                              : 'border-black/20 group-hover:border-black/40'
                          }`}
                          onClick={() => toggleDistrict(d.name)}
                        >
                          {activeDistricts.includes(d.name) && (
                            <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                              <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          )}
                        </div>
                        <span className="text-sm text-black/80 flex-1">{d.name}</span>
                        <span className="text-xs text-black/40">({d.count})</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Filter */}
                <div className="mb-8">
                  <h4 className="font-semibold text-sm mb-4">Fiyat</h4>
                  <div className="flex gap-2">
                    {priceLevels.map((p) => (
                      <button
                        key={p}
                        onClick={() => setActivePrice(activePrice === p ? null : p)}
                        className={`w-10 h-10 rounded-lg text-sm font-medium border transition-all ${
                          activePrice === p
                            ? 'bg-black text-white border-black'
                            : 'bg-transparent text-black/60 border-black/10 hover:border-black/20'
                        }`}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Features Filter */}
                <div>
                  <h4 className="font-semibold text-sm mb-4">Özellikler</h4>
                  <div className="flex flex-wrap gap-2">
                    {features.map((f) => (
                      <button
                        key={f}
                        onClick={() => toggleFeature(f)}
                        className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
                          activeFeatures.includes(f)
                            ? 'gradient-sunset text-white border-transparent'
                            : 'bg-transparent text-black/60 border-black/10 hover:bg-black/[0.04]'
                        }`}
                      >
                        {f}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            {/* Mobile Filter Bar */}
            <div className="lg:hidden flex gap-2 overflow-x-auto no-scrollbar pb-2">
              {['Tümü', 'Kafe', 'Restoran', 'Bar', 'Beach'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveCategory(tab)}
                  className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                    activeCategory === tab
                      ? 'gradient-sunset text-white border-transparent'
                      : 'bg-transparent text-black/50 border-black/10'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Grid */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-6">
                <p className="text-sm text-black/50">{placeCards.length} mekan bulundu</p>
                <select className="text-sm text-black/50 bg-transparent border-none cursor-pointer">
                  <option>Sırala: Popülerlik</option>
                  <option>Sırala: En Yeni</option>
                  <option>Sırala: Puan</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {visibleCards.map((card, i) => (
                  <Link to={locationToSlug(card.location)} key={card.id}>
                    <Card
                      image={card.image}
                      category={card.category}
                      title={card.title}
                      subtitle={card.subtitle}
                      location={card.location}
                      price={card.price}
                      rating={card.rating}
                      index={i}
                    />
                  </Link>
                ))}
              </div>

              {visibleCount < placeCards.length && (
                <div className="mt-10 flex justify-center">
                  <button
                    onClick={() => setVisibleCount((c) => c + 6)}
                    className="px-8 py-3 border border-black/20 rounded-lg text-sm font-medium text-black hover:bg-black hover:text-white transition-all duration-300"
                  >
                    Daha Fazla Göster
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  )
}
