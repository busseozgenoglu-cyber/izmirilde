import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import FilterTabs from '../components/FilterTabs'
import useScrollReveal from '../hooks/useScrollReveal'
import { eventCards, eventFilterTabs } from '../data'

// Venue string → district slug mapping for events
function venueToHref(venue: string): string {
  const v = venue.toLowerCase()
  if (v.includes('kültürpark') || v.includes('fuar')) return '/guides/izmir-fuar-konser-takvimi'
  if (v.includes('ahmed adnan saygun') || v.includes('opera')) return '/guides/izmir-tiyatro-kultur-sanat'
  if (v.includes('alsancak') || v.includes('kordon')) return '/districts/alsancak-ve-kordon'
  if (v.includes('karşıyaka') || v.includes('bostanlı')) return '/districts/karsiyaka'
  if (v.includes('çeşme') || v.includes('aya yorgi') || v.includes('paparazzi')) return '/districts/cesme'
  if (v.includes('alaçatı')) return '/districts/alacati'
  if (v.includes('urla')) return '/districts/urla'
  if (v.includes('konak')) return '/districts/konak'
  if (v.includes('bornova')) return '/districts/bornova'
  if (v.includes('güzelyalı')) return '/districts/konak'
  if (v.includes('selçuk') || v.includes('efes')) return '/guides/efes-antik-kenti-rehberi'
  return '/guides/izmir-fuar-konser-takvimi'
}

function EventCardComp({
  day,
  month,
  dayName,
  image,
  category,
  title,
  venue,
  time,
  index,
}: {
  day: string
  month: string
  dayName: string
  image: string
  category: string
  title: string
  venue: string
  time: string
  index: number
}) {
  return (
    <Link
      to={venueToHref(venue)}
      className="group flex flex-col sm:flex-row gap-5 bg-white border border-black/[0.06] rounded-2xl p-5 hover:border-black/[0.12] hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all duration-300 cursor-pointer reveal"
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      {/* Date Block */}
      <div className="flex sm:flex-col items-center sm:items-center gap-2 sm:gap-0 sm:w-[80px] shrink-0 sm:border-r sm:border-black/[0.08] sm:pr-5 pb-3 sm:pb-0 border-b sm:border-b-0 border-black/[0.08]">
        <span
          className="text-4xl sm:text-5xl font-bold gradient-text-sunset leading-none"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {day}
        </span>
        <div className="sm:mt-1 text-center">
          <p className="text-[11px] font-medium uppercase tracking-wider text-black/50">
            {month}
          </p>
          <p className="text-[11px] text-black/40">{dayName}</p>
        </div>
      </div>

      {/* Image */}
      <div className="shrink-0 w-full sm:w-[200px] md:w-[240px] h-[160px] sm:h-[140px] rounded-xl overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0 flex flex-col justify-center">
        <span className="inline-block self-start px-3 py-1 rounded-full text-[10px] font-medium text-white gradient-sunset mb-2">
          {category}
        </span>
        <h3 className="font-semibold text-lg sm:text-xl leading-snug mb-2 group-hover:text-black/80 transition-colors">
          {title}
        </h3>
        <p className="text-sm text-black/50 mb-1">{venue}</p>
        <p className="text-sm text-black/50 mb-3">{time}</p>
        <span className="inline-flex items-center gap-1 text-sm font-medium text-black group-hover:underline">
          Detaylar <ArrowRight className="w-3.5 h-3.5" />
        </span>
      </div>
    </Link>
  )
}

export default function EventsPage() {
  const [activeFilter, setActiveFilter] = useState('Bu Hafta')

  useScrollReveal()

  return (
    <main>
      {/* Hero */}
      <section className="relative h-[45vh] min-h-[360px] flex items-center justify-center overflow-hidden">
        <img
          src="/images/enrico-macias-event.jpg"
          alt="Etkinlikler"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-4">
          <h1
            className="text-h1 font-bold text-white leading-[0.95] tracking-[-0.04em] reveal"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Etkinlikler
          </h1>
          <p className="mt-4 text-white/85 text-lg max-w-[520px] mx-auto reveal reveal-delay-1">
            İzmir&apos;de bu hafta ve ayda yapılacak konserler, sergiler, festivaller ve daha fazlası
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-[4vw]">
          <div className="mb-8">
            <FilterTabs
              tabs={eventFilterTabs}
              active={activeFilter}
              onChange={setActiveFilter}
            />
          </div>

          <div className="space-y-4">
            {eventCards.map((card, i) => (
              <EventCardComp
                key={card.id}
                day={card.day}
                month={card.month}
                dayName={card.dayName}
                image={card.image}
                category={card.category}
                title={card.title}
                venue={card.venue}
                time={card.time}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
