import { Component, type ErrorInfo, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { AlertTriangle, Home, RefreshCw } from 'lucide-react'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error: Error | null
}

/**
 * Error Boundary — yakalar render sırasında oluşan JavaScript hatalarını,
 * kullanıcıya beyaz ekran yerine anlamlı bir fallback UI gösterir.
 * Production'da Railway log'larına hata detayını yazar.
 */
export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Production'da server log'u / analytics için
    console.error('[ErrorBoundary]', error, errorInfo)
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null })
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) return this.props.fallback

      return (
        <main className="min-h-[80vh] flex items-center justify-center px-4 py-20 bg-gradient-to-b from-white to-orange-50/30">
          <div className="max-w-xl text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-orange-100 mb-6">
              <AlertTriangle className="w-10 h-10 text-orange-600" />
            </div>

            <h1
              className="text-3xl sm:text-4xl font-bold mb-4 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Beklenmeyen bir hata oluştu
            </h1>

            <p className="text-black/70 mb-8 leading-relaxed">
              Sayfa yüklenirken bir sorun çıktı. Sayfayı yenilemeyi deneyebilir ya da
              ana sayfaya dönebilirsiniz. Sorun devam ederse bize{' '}
              <Link to="/contact" className="underline font-medium">iletişim sayfasından</Link>{' '}
              ulaşabilirsiniz.
            </p>

            {import.meta.env.DEV && this.state.error && (
              <pre className="text-left bg-black/5 border border-black/10 rounded-lg p-4 mb-8 text-xs overflow-auto max-h-48">
                {this.state.error.message}
                {'\n'}
                {this.state.error.stack}
              </pre>
            )}

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                type="button"
                onClick={this.handleReset}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full gradient-sunset text-white font-semibold hover:scale-[1.02] transition-transform"
              >
                <RefreshCw className="w-4 h-4" />
                Tekrar Dene
              </button>
              <Link
                to="/"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border-2 border-black text-black font-semibold hover:bg-black hover:text-white transition-all"
                onClick={this.handleReset}
              >
                <Home className="w-4 h-4" />
                Ana Sayfa
              </Link>
            </div>
          </div>
        </main>
      )
    }

    return this.props.children
  }
}
