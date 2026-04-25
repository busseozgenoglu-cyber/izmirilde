import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Copy, Check, Instagram, Percent, Ticket, Sparkles } from 'lucide-react'

interface Coupon {
  id: string
  venue: string
  discount: string
  description: string
  code: string
  instagram: string
  instagramHandle: string
  color: string
  accentColor: string
}

const coupons: Coupon[] = [
  {
    id: 'sisnova',
    venue: 'Sisnova',
    discount: '%15',
    description: 'Tüm işlemlerde geçerli indirim fırsatı. Saç bakımından güzellik uygulamalarına kadar.',
    code: 'izmirilde2026sis',
    instagram: 'https://www.instagram.com/sisnovaizmir',
    instagramHandle: '@sisnovaizmir',
    color: 'from-rose-500 via-pink-500 to-purple-500',
    accentColor: '#ec4899',
  },
]

function CouponCard({ coupon }: { coupon: Coupon }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(coupon.code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Fallback
      const ta = document.createElement('textarea')
      ta.value = coupon.code
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      document.body.removeChild(ta)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <div className="group relative rounded-2xl overflow-hidden bg-white border border-black/5 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
      {/* Top accent bar */}
      <div className={`h-1.5 w-full bg-gradient-to-r ${coupon.color}`} />

      <div className="p-6 sm:p-7">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-5">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black text-white text-[10px] font-bold uppercase tracking-wider">
                <Sparkles className="w-3 h-3" />
                İndirim
              </span>
            </div>
            <h3 className="text-xl font-bold tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              {coupon.venue}
            </h3>
            <p className="text-sm text-black/50 mt-1 leading-relaxed">
              {coupon.description}
            </p>
          </div>
          <div
            className="shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg"
            style={{ background: `linear-gradient(135deg, ${coupon.accentColor}, #FF4500)` }}
          >
            <Percent className="w-7 h-7" />
          </div>
        </div>

        {/* Discount badge */}
        <div className="mb-5">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-100">
            <Ticket className="w-4 h-4 text-orange-500" />
            <span className="text-sm font-semibold text-orange-700">
              Tüm İşlemlerde {coupon.discount} İndirim
            </span>
          </div>
        </div>

        {/* Code box */}
        <div className="relative mb-4">
          <div className="flex items-center gap-2 rounded-xl border-2 border-dashed border-black/10 bg-black/[0.02] px-4 py-3 group-hover:border-orange-300 transition-colors">
            <span className="text-xs font-medium text-black/40 uppercase tracking-wider shrink-0">Kodu:</span>
            <code className="flex-1 font-mono text-base font-semibold tracking-wide text-black/80 truncate">
              {coupon.code}
            </code>
            <button
              onClick={handleCopy}
              className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 hover:scale-105"
              style={{
                background: copied ? '#22c55e' : `linear-gradient(135deg, ${coupon.accentColor}, #FF4500)`,
                color: 'white',
              }}
              aria-label={copied ? 'Kopyalandı' : 'Kodu kopyala'}
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  Kopyalandı
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  Kopyala
                </>
              )}
            </button>
          </div>
        </div>

        {/* Instagram CTA */}
        <a
          href={coupon.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-black/60 hover:text-pink-600 transition-colors"
        >
          <Instagram className="w-4 h-4" />
          <span>Kuponu kullanmak için DM at — {coupon.instagramHandle}</span>
        </a>
      </div>

      {/* Decorative corner */}
      <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full opacity-[0.06]" style={{ background: coupon.accentColor }} />
    </div>
  )
}

export default function CouponSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-[4vw]">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-0.5 bg-gradient-to-r from-orange-500 to-red-500" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-black/50">
                İzmir İndirim Kuponları
              </span>
            </div>
            <h2
              className="text-4xl sm:text-5xl font-bold leading-[0.95] tracking-[-0.02em]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Mekanlara Özel <em className="gradient-text-sunset not-italic">İndirim Kodları</em>
            </h2>
            <p className="mt-3 text-lg text-black/50 max-w-xl leading-relaxed">
              İzmir'in en iyi mekanlarında geçerli özel indirim kuponları. Kodu kopyala, Instagram'dan DM at, indirimi kap.
            </p>
          </div>
          <Link
            to="/contact"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold hover:scale-105 transition-transform whitespace-nowrap"
          >
            Mekanını Eklemek İçin Başvur →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coupons.map((c) => (
            <CouponCard key={c.id} coupon={c} />
          ))}

          {/* Placeholder card for future coupons */}
          <div className="relative rounded-2xl border-2 border-dashed border-black/10 bg-black/[0.015] flex flex-col items-center justify-center p-8 text-center min-h-[300px]">
            <div className="w-14 h-14 rounded-2xl bg-black/5 flex items-center justify-center mb-4">
              <Ticket className="w-7 h-7 text-black/30" />
            </div>
            <h4 className="font-semibold text-black/60 mb-1">Yakında Daha Fazla Kupon</h4>
            <p className="text-sm text-black/40 max-w-[220px]">
              İzmir'in en iyi mekanlarından özel indirim kodları çok yakında burada olacak.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
