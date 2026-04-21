import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Home, Search, ArrowRight } from 'lucide-react'

export default function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>Sayfa Bulunamadı | izmirilde</title>
        <meta name="description" content="Aradığınız sayfayı bulamadık. İzmir'i keşfetmeye ana sayfadan başlayın." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <main className="min-h-[80vh] flex items-center justify-center px-4 py-20 bg-gradient-to-b from-white to-orange-50/30">
        <div className="max-w-2xl text-center">
          <div
            className="text-[120px] sm:text-[180px] font-bold leading-none mb-4 gradient-text-sunset"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            404
          </div>

          <h1
            className="text-3xl sm:text-5xl font-bold mb-6 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Bu yol haritada yok
          </h1>

          <p className="text-lg text-black/70 mb-10 leading-relaxed">
            Aradığınız sayfayı bulamadık. Belki de bambaşka bir İzmir rotası keşfetmenin vaktidir — Efes'ten Alaçatı'ya, Kordon'dan Kemeraltı'na...
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full gradient-sunset text-white font-semibold hover:scale-[1.02] transition-transform"
            >
              <Home className="w-4 h-4" />
              Ana Sayfa
            </Link>
            <Link
              to="/guides"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border-2 border-black text-black font-semibold hover:bg-black hover:text-white transition-all"
            >
              <Search className="w-4 h-4" />
              Rehberleri Keşfet
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
