import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Keşfet', href: '/guides' },
  { label: 'Mekanlar', href: '/places' },
  { label: 'Etkinlikler', href: '/events' },
  { label: 'Rehberler', href: '/guides' },
  { label: 'Hakkımızda', href: '/about' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.8)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  const isHome = location.pathname === '/'
  const isOverHero = isHome && !scrolled

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          isOverHero
            ? 'bg-transparent text-white'
            : 'bg-white/95 backdrop-blur-[12px] text-black border-b border-black/5'
        }`}
        style={{ height: 72 }}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-[4vw] h-full flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <img
              src="/izmirilde-logo.png"
              alt="izmirilde"
              className={`h-7 w-auto transition-all duration-400 ${
                isOverHero ? 'brightness-0 invert' : ''
              }`}
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href + link.label}
                to={link.href}
                className={`relative text-sm font-medium uppercase tracking-[0.08em] transition-colors duration-300 group ${
                  location.pathname === link.href
                    ? 'opacity-100'
                    : 'opacity-80 hover:opacity-100'
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-current transition-all duration-300 ease-out ${
                    location.pathname === link.href
                      ? 'w-full'
                      : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              className={`hidden md:inline-flex items-center px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                isOverHero
                  ? 'bg-white text-black hover:bg-white/90'
                  : 'bg-black text-white hover:bg-black/90'
              }`}
            >
              Listele
            </Link>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2"
              aria-label="Menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[100] bg-white flex flex-col">
          <div className="flex items-center justify-between px-6 h-[72px] border-b border-black/5">
            <Link to="/" onClick={() => setMobileOpen(false)}>
              <img src="/izmirilde-logo.png" alt="izmirilde" className="h-7 w-auto" />
            </Link>
            <button onClick={() => setMobileOpen(false)} aria-label="Close">
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="flex-1 flex flex-col justify-center px-6 gap-6">
            {navLinks.map((link, i) => (
              <Link
                key={link.href + link.label}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-3xl font-medium tracking-tight opacity-0 animate-fade-in-up"
                style={{
                  animationDelay: `${i * 0.05}s`,
                  animationFillMode: 'forwards',
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-6 inline-flex items-center justify-center px-6 py-3 bg-black text-white rounded-lg text-lg font-medium opacity-0 animate-fade-in-up"
              style={{
                animationDelay: `${navLinks.length * 0.05}s`,
                animationFillMode: 'forwards',
              }}
            >
              Listele
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
