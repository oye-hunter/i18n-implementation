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
      className="flex items-center gap-2 bg-[#FFED02] text-[#004D98] px-4 py-2 rounded-full font-semibold hover:bg-yellow-300 transition"
    >
      <span className="text-lg">🌐</span>
      <span>{currentLang === 'en' ? 'ES' : 'EN'}</span>
    </Link>
  )
}
