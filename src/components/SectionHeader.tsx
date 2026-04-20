import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

interface SectionHeaderProps {
  label: string
  title: string
  description?: string
  linkText?: string
  linkHref?: string
}

export default function SectionHeader({
  label,
  title,
  description,
  linkText,
  linkHref = '#',
}: SectionHeaderProps) {
  return (
    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-8">
      <div>
        <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-black/50 mb-3 reveal">
          {label}
        </p>
        <h2 className="text-h2 font-semibold leading-[1.1] tracking-[-0.03em] reveal reveal-delay-1">
          {title}
        </h2>
        {description && (
          <p className="mt-3 text-lg text-black/50 max-w-[500px] leading-relaxed reveal reveal-delay-2">
            {description}
          </p>
        )}
      </div>
      {linkText && (
        <Link
          to={linkHref}
          className="group inline-flex items-center gap-2 text-sm font-medium text-black/70 hover:text-black transition-colors reveal reveal-delay-2 shrink-0"
        >
          {linkText}
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      )}
    </div>
  )
}
