import { useEffect, useRef, useState } from 'react'
import { Helmet } from 'react-helmet-async'
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
    <>
      <Helmet>
        <title>Hakkımızda — izmirilde Kimdir? | İzmir Rehberi</title>
        <meta name="description" content="izmirilde, İzmir'i seven bir ekip tarafından hazırlanan bağımsız şehir rehberidir. 50+ editör yazısı, 270+ mekan önerisi ve 32 ilçe rehberiyle İzmir'i keşfedin." />
        <link rel="canonical" href="https://izmirilde.com/about" />
        <meta property="og:title" content="Hakkımızda — izmirilde | İzmir Rehberi" />
        <meta property="og:description" content="İzmir'i seven bir ekip tarafından hazırlanan bağımsız şehir rehberi. 50+ yazı, 270+ mekan, 32 ilçe." />
        <meta property="og:url" content="https://izmirilde.com/about" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://izmirilde.com/izmirilde-og.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hakkımızda — izmirilde | İzmir Rehberi" />
        <meta name="twitter:description" content="İzmir'i seven bir ekip tarafından hazırlanan bağımsız şehir rehberi." />
        <meta name="twitter:image" content="https://izmirilde.com/izmirilde-og.png" />
      </Helmet>
    <main>
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[440px] flex items-center justify-center overflow-hidden">
        <img
          src="/images/about-hero.jpg"
          alt="Hakkımızda"
          className="absolute inset-0 w-full h-full object-cover scale-110 animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70" />

        {/* Sparkle overlay */}
        <div className="absolute inset-0 sparkle-overlay pointer-events-none" />
        <div className="sparkle-star" style={{ top: '20%', left: '18%', animationDelay: '0s' }} />
        <div className="sparkle-star" style={{ top: '35%', left: '78%', animationDelay: '0.5s' }} />
        <div className="sparkle-star" style={{ top: '65%', left: '25%', animationDelay: '1.1s' }} />
        <div className="shimmer-sweep" />

        <div className="relative z-10 text-center px-4">
          <img
            src="/izmirilde-icon-256.png"
            alt="izmirilde"
            className="h-20 w-20 mx-auto mb-6 drop-shadow-2xl animate-parallax-float reveal"
          />
          <h1
            className="text-h1 font-bold text-white leading-[0.95] tracking-[-0.04em] reveal reveal-delay-1"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Hakkımızda
          </h1>
          <p className="mt-4 text-white/85 text-lg reveal reveal-delay-2">
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
                  2026 yılında, İzmir&apos;in zengin kültürünü, lezzetlerini ve enerjisini dünyaya
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
    </>
  )
}
