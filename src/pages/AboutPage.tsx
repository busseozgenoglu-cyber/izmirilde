import { useEffect, useRef, useState } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'

function useCountUp(end: number, duration: number = 1500) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return
    let startTime: number | null = null
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * end))
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [started, end, duration])

  return { count, ref }
}

function StatItem({ value, label, suffix = '' }: { value: number; label: string; suffix?: string }) {
  const { count, ref } = useCountUp(value)
  return (
    <div ref={ref} className="text-center reveal">
      <span
        className="text-4xl sm:text-5xl font-bold gradient-text-sunset"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        {count}
        {suffix}
      </span>
      <p className="mt-2 text-sm text-black/50">{label}</p>
    </div>
  )
}

const values = [
  {
    title: 'Yerel',
    description:
      "İzmir'in yerel değerlerini ön planda tutuyoruz. Zincir değil, özgün mekanlar.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="16" r="8" stroke="url(#g1)" strokeWidth="2" />
        <path d="M20 24V34" stroke="url(#g1)" strokeWidth="2" strokeLinecap="round" />
        <defs>
          <linearGradient id="g1" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF0000" />
            <stop offset="1" stopColor="#FF6600" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    title: 'Tarafsız',
    description:
      'Hiçbir mekandan sponsorluk almadan, tarafsız editoryal anlayışla içerik üretiyoruz.',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path
          d="M20 6L23.5 16.5H35L25.5 23L29 34L20 27L11 34L14.5 23L5 16.5H16.5L20 6Z"
          stroke="url(#g2)"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient id="g2" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF0000" />
            <stop offset="1" stopColor="#FF6600" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    title: 'Güncel',
    description:
      'Her gün yeni mekanlar, etkinlikler ve haberlerle içeriğimizi güncel tutuyoruz.',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="14" stroke="url(#g3)" strokeWidth="2" />
        <path d="M20 12V20L26 24" stroke="url(#g3)" strokeWidth="2" strokeLinecap="round" />
        <defs>
          <linearGradient id="g3" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF0000" />
            <stop offset="1" stopColor="#FF6600" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
]

export default function AboutPage() {
  useScrollReveal()

  return (
    <main>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <img
          src="/images/about-hero.jpg"
          alt="Hakkımızda"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 text-center px-4">
          <h1
            className="text-h1 font-bold text-white leading-[0.95] tracking-[-0.04em] reveal"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Hakkımızda
          </h1>
          <p className="mt-4 text-white/85 text-lg reveal reveal-delay-1">
            İzmir&apos;i dijitalde keşfetmenin en iyi yolu
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-[4vw]">
          <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 items-center">
            <div className="reveal">
              <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-black/50 mb-4">
                BİZ KİMİZ?
              </p>
              <h2 className="text-h2 font-semibold leading-[1.1] tracking-[-0.03em] mb-6">
                İzmir&apos;in Dijital Rehberi
              </h2>
              <div className="space-y-4 text-black/60 leading-[1.7]">
                <p>
                  izmirilde, İzmir&apos;in en iyi mekanlarını, etkinliklerini ve gizli köşelerini
                  keşfetmeni sağlayan bir dijital platform.
                </p>
                <p>
                  2025 yılında, İzmir&apos;in zengin kültürünü, lezzetlerini ve enerjisini dünyaya
                  duyurmak için yola çıktık. Editörlerimiz şehrin her semtini adım adım dolaşıyor,
                  en iyi adresleri seçiyor ve senin için derliyor.
                </p>
                <p>Misyonumuz basit: İzmir&apos;de ne yapsam diye düşünen herkese ilham vermek.</p>
              </div>
            </div>
            <div className="reveal reveal-delay-1">
              <img
                src="/images/izmir-team.jpg"
                alt="izmirilde Ekibi"
                className="w-full rounded-2xl object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="gradient-warm py-16 lg:py-20">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-[4vw]">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <StatItem value={500} label="Mekan" suffix="+" />
            <StatItem value={50} label="Etkinlik / Ay" suffix="+" />
            <StatItem value={30} label="Rehber" suffix="+" />
            <StatItem value={100} label="Aylık Ziyaretçi" suffix="K+" />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-[4vw]">
          <div className="text-center mb-12">
            <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-black/50 mb-3 reveal">
              DEĞERLERİMİZ
            </p>
            <h2 className="text-h2 font-semibold leading-[1.1] tracking-[-0.03em] reveal reveal-delay-1">
              Neleri Önemsiyoruz?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="bg-[#FFF5EE] rounded-2xl p-10 text-center reveal"
                style={{ transitionDelay: `${i * 0.12}s` }}
              >
                <div className="flex justify-center mb-5">{v.icon}</div>
                <h3 className="font-semibold text-xl mb-3">{v.title}</h3>
                <p className="text-sm text-black/60 leading-[1.6]">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
