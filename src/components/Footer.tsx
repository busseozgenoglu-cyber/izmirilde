import { Link } from 'react-router-dom'
import { Instagram } from 'lucide-react'
import { footerExploreLinks, footerCategoryLinks } from '../data'

export default function Footer() {
  return (
    <footer className="gradient-footer rounded-t-3xl text-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-[4vw] pt-20 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <img
                src="/izmirilde-icon-256.png"
                alt="izmirilde logo"
                className="h-12 w-12 object-contain"
              />
              <span
                className="font-bold text-2xl text-white tracking-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                izmirilde
              </span>
            </div>
            <p className="text-sm text-white/80 leading-relaxed">
              İzmir&apos;in en iyi mekanlarını, rehberlerini ve 32 ilçesini keşfet
            </p>
            <div className="flex items-center gap-4 mt-5">
              <a
                href="https://instagram.com/izmirilde"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-opacity"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/izmirilde"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-opacity text-sm font-medium"
                aria-label="Twitter"
              >
                𝕏
              </a>
            </div>
          </div>

          {/* Explore Column */}
          <div>
            <h4 className="font-semibold text-base mb-4">Keşfet</h4>
            <ul className="space-y-3">
              {footerExploreLinks.map((link) => (
                <li key={link}>
                  <span className="text-sm text-white/70 hover:text-white transition-colors cursor-pointer leading-relaxed">
                    {link}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories Column */}
          <div>
            <h4 className="font-semibold text-base mb-4">Kategoriler</h4>
            <ul className="space-y-3">
              {footerCategoryLinks.map((link) => (
                <li key={link}>
                  <span className="text-sm text-white/70 hover:text-white transition-colors cursor-pointer leading-relaxed">
                    {link}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-semibold text-base mb-4">İletişim</h4>
            <a
              href="mailto:hello@izmirilde.com"
              className="text-sm text-white/70 hover:text-white transition-colors block mb-4"
            >
              hello@izmirilde.com
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center px-5 py-2.5 bg-white text-black rounded-lg text-sm font-medium hover:scale-[1.02] transition-transform"
            >
              Mekan Ekle
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/60">2026 izmirilde</p>
          <div className="flex items-center gap-6">
            <Link to="/gizlilik-politikasi" className="text-xs text-white/60 hover:text-white/80 transition-colors">
              Gizlilik Politikası
            </Link>
            <Link to="/hizmet-sartlari" className="text-xs text-white/60 hover:text-white/80 transition-colors">
              Hizmet Şartları
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
