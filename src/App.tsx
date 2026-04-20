import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import PlacesPage from './pages/PlacesPage'
import EventsPage from './pages/EventsPage'
import GuidesPage from './pages/GuidesPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'

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
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
