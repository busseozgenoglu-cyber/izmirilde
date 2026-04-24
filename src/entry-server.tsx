import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import { HelmetProvider } from 'react-helmet-async'
import AppSSR from './AppSSR'

export interface RenderResult {
  html: string
  helmet: {
    title: string
    meta: string
    link: string
    script: string
  }
}

export function render(url: string): RenderResult {
  const helmetContext: Record<string, unknown> = {}

  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <AppSSR />
      </StaticRouter>
    </HelmetProvider>
  )

  const { helmet } = helmetContext as any

  return {
    html,
    helmet: {
      title: helmet?.title?.toString() ?? '',
      meta: helmet?.meta?.toString() ?? '',
      link: helmet?.link?.toString() ?? '',
      script: helmet?.script?.toString() ?? '',
    },
  }
}
