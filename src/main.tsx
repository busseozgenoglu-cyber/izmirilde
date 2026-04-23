import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import App from './App'

const rootElement = document.getElementById('root')!

const tree = (
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
)

// react-snap pre-render'dan sonra #root'ta HTML var → hydrate et.
// Normal dev / first paint'te boş → yeni root oluştur.
// React 19'da `hydrate` kaldırıldı, sadece hydrateRoot / createRoot kullanılabilir.
if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, tree)
} else {
  createRoot(rootElement).render(tree)
}

