import { useState } from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/Card'
import FilterTabs from '../components/FilterTabs'
import useScrollReveal from '../hooks/useScrollReveal'
import { guideCards, guideFilterTabs } from '../data'

export default function GuidesPage() {
  const [activeFilter, setActiveFilter] = useState('Tümü')

  const filtered =
    activeFilter === 'Tümü'
      ? guideCards
      : guideCards.filter((c) =>
          c.category.toLowerCase().includes(activeFilter.toLowerCase())
        )

  useScrollReveal()

  return (
    <main>
      {/* Hero */}
      <section className="relative h-[45vh] min-h-[360px] flex items-center justify-center overflow-hidden">
        <img
          src="/images/kafe-kulturu.jpg"
          alt="Keşif Rehberleri"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-4">
          <h1
            className="text-h1 font-bold text-white leading-[0.95] tracking-[-0.04em] reveal"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Keşif Rehberleri
          </h1>
          <p className="mt-4 text-white/85 text-lg max-w-[500px] mx-auto reveal reveal-delay-1">
            İzmir&apos;i derinlemesine keşfetmek için editörlerimizin hazırladığı rehberler
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-[4vw]">
          <div className="mb-6">
            <FilterTabs
              tabs={guideFilterTabs}
              active={activeFilter}
              onChange={setActiveFilter}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((card, i) => (
              <Link to={`/guides`} key={card.id}>
                <Card
                  image={card.image}
                  category={card.category}
                  title={card.title}
                  subtitle={card.subtitle}
                  readTime={card.readTime}
                  aspect="landscape"
                  index={i}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
