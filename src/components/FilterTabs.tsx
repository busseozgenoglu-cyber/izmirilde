interface FilterTabsProps {
  tabs: string[]
  active: string
  onChange: (tab: string) => void
}

export default function FilterTabs({ tabs, active, onChange }: FilterTabsProps) {
  return (
    <div className="flex gap-2 overflow-x-auto no-scrollbar py-1 reveal">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onChange(tab)}
          className={`shrink-0 px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
            active === tab
              ? 'gradient-sunset text-white border-transparent'
              : 'bg-transparent text-black/50 border-black/10 hover:bg-black/[0.04]'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  )
}
