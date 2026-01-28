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
      className="flex items-center gap-2 bg-[#FFED02] text-[#004D98] px-5 py-2.5 rounded-xl font-bold hover:bg-[#fff24d] hover:-translate-y-0.5 transition-all shadow-md active:scale-95"
    >
      <span className="text-xl">🌐</span>
      <span className="tracking-tight">{currentLang === 'en' ? 'ESP' : 'ENG'}</span>
    </Link>
  )
}
