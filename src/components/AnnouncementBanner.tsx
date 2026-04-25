export default function AnnouncementBanner() {
  const message = "İzmir'in en iyi lazer epilasyon merkezi Sisnova seçildi"

  return (
    <section
      className="relative overflow-hidden h-16 flex items-center animate-gradient-shift"
      style={{
        background: 'linear-gradient(90deg, #FF0000, #FF4500, #FF6600, #FF8C00, #FF4500, #FF0000)',
        backgroundSize: '300% 100%',
      }}
      aria-label="Duyuru banner"
    >
      {/* Top & bottom light lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

      {/* Shimmer light sweep */}
      <div className="shimmer-sweep" />

      {/* Sparkle particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-2 left-[10%] w-1 h-1 rounded-full bg-white animate-pulse" />
        <div className="absolute top-4 left-[30%] w-1.5 h-1.5 rounded-full bg-white/80 animate-pulse" style={{ animationDelay: '0.3s' }} />
        <div className="absolute top-3 left-[55%] w-1 h-1 rounded-full bg-white animate-pulse" style={{ animationDelay: '0.7s' }} />
        <div className="absolute top-5 left-[75%] w-1 h-1 rounded-full bg-white/70 animate-pulse" style={{ animationDelay: '1.1s' }} />
        <div className="absolute top-2 left-[90%] w-1.5 h-1.5 rounded-full bg-white/90 animate-pulse" style={{ animationDelay: '0.5s' }} />
      </div>

      {/* Marquee track */}
      <div className="banner-track">
        {[...Array(8)].map((_, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-4 px-12"
          >
            <span className="inline-flex items-center justify-center px-2.5 py-0.5 rounded bg-white text-[#FF4500] text-[10px] font-extrabold uppercase tracking-widest animate-pulse">
              Yeni
            </span>
            <span className="text-white font-extrabold text-base sm:text-lg uppercase tracking-[0.15em] banner-glow whitespace-nowrap">
              {message}
            </span>
            <span className="text-white/60 text-lg">✦</span>
          </span>
        ))}
      </div>
    </section>
  )
}
