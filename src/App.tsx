import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

// ===================== INSTAGRAM FLOAT BUTTON =====================
function InstagramFloatButton() {
  const [visible, setVisible] = useState(false)
  const [pulse, setPulse] = useState(false)

  useEffect(() => {
    // Show after 2 seconds
    const t = setTimeout(() => setVisible(true), 2000)
    // Pulse every 4 seconds
    const p = setInterval(() => {
      setPulse(true)
      setTimeout(() => setPulse(false), 1200)
    }, 4000)
    return () => { clearTimeout(t); clearInterval(p) }
  }, [])

  return (
    <a
      href="instagram://user?username=izmirilde"
      onClick={(e) => {
        // Mobilde app'i dene, açılmazsa web'e düş
        e.preventDefault()
        const appUrl = 'instagram://user?username=izmirilde'
        const webUrl = 'https://www.instagram.com/izmirilde'
        const start = Date.now()
        window.location.href = appUrl
        setTimeout(() => {
          // Eğer uygulama açıldıysa sayfa hâlâ burada olur ama odak gider
          // 1.5sn içinde hâlâ buradaysak web'e yönlendir
          if (Date.now() - start < 2000) {
            window.open(webUrl, '_blank')
          }
        }, 1500)
      }}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram'da bizi takip edin @izmirilde"
      className="ig-float-btn"
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        padding: '10px 18px 10px 12px',
        borderRadius: '50px',
        background: 'linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)',
        boxShadow: pulse
          ? '0 0 0 8px rgba(253,29,29,0.18), 0 0 0 16px rgba(253,29,29,0.08), 0 8px 32px rgba(131,58,180,0.5)'
          : '0 4px 24px rgba(131,58,180,0.4)',
        transform: visible
          ? (pulse ? 'scale(1.08)' : 'scale(1)')
          : 'translateY(120px)',
        opacity: visible ? 1 : 0,
        transition: 'transform 0.4s cubic-bezier(0.34,1.56,0.64,1), opacity 0.5s ease, box-shadow 0.4s ease',
        textDecoration: 'none',
        cursor: 'pointer',
        userSelect: 'none',
      }}
    >
      {/* Shine sweep */}
      <span style={{
        position: 'absolute', inset: 0, borderRadius: '50px', overflow: 'hidden', pointerEvents: 'none',
      }}>
        <span className="ig-shine" />
      </span>

      {/* Instagram icon */}
      <span style={{
        width: '34px', height: '34px', borderRadius: '50%',
        background: 'rgba(255,255,255,0.18)', backdropFilter: 'blur(4px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
      }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="2" width="20" height="20" rx="5.5" stroke="white" strokeWidth="2"/>
          <circle cx="12" cy="12" r="4.5" stroke="white" strokeWidth="2"/>
          <circle cx="17.5" cy="6.5" r="1.2" fill="white"/>
        </svg>
      </span>

      {/* Text */}
      <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.2 }}>
        <span style={{ color: 'white', fontWeight: 700, fontSize: '13px', letterSpacing: '0.02em', whiteSpace: 'nowrap' }}>
          Bizi Takip Et ✨
        </span>
        <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: '11px', fontWeight: 500 }}>
          @izmirilde
        </span>
      </span>
    </a>
  )
}
import HomePage from './pages/HomePage'
import PlacesPage from './pages/PlacesPage'
import EventsPage from './pages/EventsPage'
import GuidesPage from './pages/GuidesPage'
import BlogDetailPage from './pages/BlogDetailPage'
import DistrictsPage from './pages/DistrictsPage'
import DistrictDetailPage from './pages/DistrictDetailPage'
import BestPlacesPage from './pages/BestPlacesPage'
import HiddenPlacesPage from './pages/HiddenPlacesPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import NotFoundPage from './pages/NotFoundPage'
import PrivacyPage from './pages/PrivacyPage'
import TermsPage from './pages/TermsPage'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/places" element={<PlacesPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/guides" element={<GuidesPage />} />
        <Route path="/guides/:slug" element={<BlogDetailPage />} />
        <Route path="/districts" element={<DistrictsPage />} />
        <Route path="/districts/:slug" element={<DistrictDetailPage />} />
        <Route path="/best-places" element={<BestPlacesPage />} />
        <Route path="/hidden-places" element={<HiddenPlacesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/gizlilik-politikasi" element={<PrivacyPage />} />
        <Route path="/hizmet-sartlari" element={<TermsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
      <InstagramFloatButton />
    </>
  )
}

export default App
