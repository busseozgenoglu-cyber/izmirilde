export default function AnnouncementBanner() {
  const message = "İzmir'in en iyi lazer epilasyon merkezi Sisnova seçildi"

  return (
    <section
      className="relative overflow-hidden gradient-sunset h-12 flex items-center"
      aria-label="Duyuru banner"
    >
      {/* Shimmer light sweep */}
      <div className="shimmer-sweep" />

      {/* Marquee track */}
      <div className="marquee-track">
        {[...Array(6)].map((_, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-3 px-8 text-white font-semibold text-sm tracking-wide"
          >
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/20 backdrop-blur-sm text-xs">
              ✨
            </span>
            {message}
            <span className="text-white/60">·</span>
            <span className="text-white/80 text-xs font-medium uppercase tracking-wider">
              Yeni
            </span>
            <span className="text-white/60">·</span>
          </span>
        ))}
      </div>
    </section>
  )
}
