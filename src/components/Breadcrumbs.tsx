import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ChevronRight, Home } from 'lucide-react'

export interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
  theme?: 'light' | 'dark'
}

/**
 * Accessible breadcrumb navigation with Schema.org JSON-LD.
 * Last item (without href) is rendered as the current page.
 */
export default function Breadcrumbs({ items, theme = 'light' }: BreadcrumbsProps) {
  // Always include home as first item
  const allItems: BreadcrumbItem[] = [{ label: 'Ana Sayfa', href: '/' }, ...items]

  // JSON-LD for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: allItems.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.label,
      ...(item.href ? { item: `https://izmirilde.com${item.href}` } : {}),
    })),
  }

  const textColor = theme === 'dark' ? 'text-white/80' : 'text-black/60'
  const hoverColor = theme === 'dark' ? 'hover:text-white' : 'hover:text-black'
  const separatorColor = theme === 'dark' ? 'text-white/40' : 'text-black/30'
  const currentColor = theme === 'dark' ? 'text-white' : 'text-black'

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <nav
        aria-label="Breadcrumb"
        className={`flex items-center flex-wrap gap-x-2 gap-y-1 text-sm ${textColor}`}
      >
        {allItems.map((item, i) => {
          const isLast = i === allItems.length - 1
          return (
            <div key={i} className="flex items-center gap-2">
              {i === 0 && <Home className="w-3.5 h-3.5 shrink-0" />}
              {isLast || !item.href ? (
                <span
                  className={`font-medium ${currentColor}`}
                  aria-current="page"
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.href}
                  className={`${hoverColor} transition-colors`}
                >
                  {item.label}
                </Link>
              )}
              {!isLast && (
                <ChevronRight className={`w-3.5 h-3.5 shrink-0 ${separatorColor}`} />
              )}
            </div>
          )
        })}
      </nav>
    </>
  )
}
