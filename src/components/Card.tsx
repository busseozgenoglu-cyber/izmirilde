interface CardProps {
  image: string
  category: string
  title: string
  subtitle: string
  location?: string
  readTime?: string
  rating?: string
  price?: string
  aspect?: 'portrait' | 'landscape'
  index?: number
}

export default function Card({
  image,
  category,
  title,
  subtitle,
  location,
  readTime,
  rating,
  price,
  aspect = 'portrait',
  index = 0,
}: CardProps) {
  const imgAspect = aspect === 'landscape' ? 'aspect-[16/10]' : 'aspect-[3/2]'

  return (
    <div
      className="group cursor-pointer card-hover rounded-2xl overflow-hidden bg-white reveal"
      style={{
        transitionDelay: `${index * 0.1}s`,
        boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
      }}
    >
      {/* Image */}
      <div className={`relative ${imgAspect} overflow-hidden`}>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover card-image-zoom"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Category */}
        <span className="inline-block px-3 py-1 rounded-full text-[10px] font-medium text-white gradient-sunset mb-3">
          {category}
        </span>

        {/* Title */}
        <h3 className="font-semibold text-lg leading-[1.3] line-clamp-2 mb-1">
          {title}
        </h3>

        {/* Subtitle */}
        <p className="text-sm text-black/50 line-clamp-1 mb-2">{subtitle}</p>

        {/* Meta */}
        <div className="flex items-center justify-between text-xs text-black/50 mt-2">
          <div className="flex items-center gap-2">
            {location && <span>{location}</span>}
            {readTime && <span>{readTime}</span>}
          </div>
          <div className="flex items-center gap-2">
            {rating && <span>{rating}</span>}
            {price && <span>{price}</span>}
          </div>
        </div>
      </div>
    </div>
  )
}
