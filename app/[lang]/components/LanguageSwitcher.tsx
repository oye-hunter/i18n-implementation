'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function LanguageSwitcher({ currentLang }: { currentLang: 'en' | 'es' }) {
  const pathname = usePathname()
  
  // Get the path without the locale prefix
  const pathWithoutLocale = pathname.replace(/^\/(en|es)/, '') || '/'
  
  // Toggle between languages
  const newLang = currentLang === 'en' ? 'es' : 'en'
  const newPath = `/${newLang}${pathWithoutLocale}`

  return (
    <Link 
      href={newPath}
      className="group relative flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full font-medium border border-white/20 hover:bg-[#FFED02] hover:text-[#004D98] hover:border-[#FFED02] transition-all duration-300"
    >
      <span className="text-lg group-hover:rotate-180 transition-transform duration-500">🌐</span>
      <span className="text-sm font-semibold">{currentLang.toUpperCase()}</span>
      <span className="text-white/50 group-hover:text-[#004D98]/50">|</span>
      <span className="text-sm opacity-60 group-hover:opacity-100">{newLang.toUpperCase()}</span>
    </Link>
  )
}
