// SSR-only App wrapper — lazy() yerine eager import'lar kullanır
// renderToString, dynamic import()'ları resolve edemez
import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import ErrorBoundary from './components/ErrorBoundary'

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
    if (typeof window !== 'undefined') window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function AppSSR() {
  return (
    <>
      <ScrollToTop />
      <Navigation />
      <ErrorBoundary>
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
      </ErrorBoundary>
      <Footer />
    </>
  )
}
