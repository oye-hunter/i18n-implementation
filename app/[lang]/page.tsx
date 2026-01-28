import { getDictionary } from './dictionaries'
import LanguageSwitcher from './components/LanguageSwitcher';
import { GoogleAnalytics } from '@next/third-parties/google'

export default async function Page({
  params,
}: {
  params: Promise<{ lang: 'en' | 'es' }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  return (
    <>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID!} />
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Navbar */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#004D98]/95 backdrop-blur-md text-white px-6 py-4 shadow-lg">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#A50044] to-[#004D98] rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                ⚽
              </div>
              <span className="text-2xl font-bold tracking-tight">FC Barcelona</span>
            </div>
            <div className="flex items-center gap-8">
              <ul className="hidden md:flex gap-8">
                <li>
                  <a href="#home" className="relative py-2 hover:text-[#FFED02] transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#FFED02] after:transition-all after:duration-300 hover:after:w-full">
                    {dict.nav.home}
                  </a>
                </li>
                <li>
                  <a href="#about" className="relative py-2 hover:text-[#FFED02] transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#FFED02] after:transition-all after:duration-300 hover:after:w-full">
                    {dict.nav.about}
                  </a>
                </li>
                <li>
                  <a href="#team" className="relative py-2 hover:text-[#FFED02] transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#FFED02] after:transition-all after:duration-300 hover:after:w-full">
                    {dict.nav.team}
                  </a>
                </li>
                <li>
                  <a href="#contact" className="relative py-2 hover:text-[#FFED02] transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#FFED02] after:transition-all after:duration-300 hover:after:w-full">
                    {dict.nav.contact}
                  </a>
                </li>
              </ul>
              <LanguageSwitcher currentLang={lang} />
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background with gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#004D98] via-[#003366] to-[#A50044]">
            {/* Decorative elements */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-[#FFED02]/10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#A50044]/20 rounded-full blur-3xl animate-float delay-300"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white pt-20">
            <div className="animate-fade-in-up">
              <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6 border border-white/20">
                🏆 {lang === 'en' ? 'Champions of Europe' : 'Campeones de Europa'}
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in-up delay-100">
              <span className="gradient-text">{dict.hero.title}</span>
            </h1>
            <p className="text-2xl md:text-4xl font-light mb-6 animate-fade-in-up delay-200 text-[#FFED02]">
              {dict.hero.motto}
            </p>
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-white/80 animate-fade-in-up delay-300">
              {dict.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-400">
              <button className="btn-shine bg-[#FFED02] text-[#004D98] px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-300 transition-all duration-300 hover:shadow-lg hover:shadow-[#FFED02]/30 hover:scale-105">
                {dict.hero.button}
              </button>
              <button className="glass px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all duration-300">
                {lang === 'en' ? 'Watch Highlights' : 'Ver Destacados'} ▶
              </button>
            </div>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gradient-to-r from-[#004D98] to-[#003366] text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NCAwLTE4IDguMDYtMTggMThzOC4wNiAxOCAxOCAxOCAxOC04LjA2IDE4LTE4LTguMDYtMTgtMTgtMTh6bTAgMzJjLTcuNzMyIDAtMTQtNi4yNjgtMTQtMTRzNi4yNjgtMTQgMTQtMTQgMTQgNi4yNjggMTQgMTQtNi4yNjggMTQtMTQgMTR6IiBmaWxsPSIjZmZmIi8+PC9nPjwvc3ZnPg==')]"></div>
          </div>
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#FFED02] mb-2">27</div>
                <div className="text-sm md:text-base text-white/80">{lang === 'en' ? 'La Liga Titles' : 'Títulos de La Liga'}</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#FFED02] mb-2">5</div>
                <div className="text-sm md:text-base text-white/80">{lang === 'en' ? 'Champions League' : 'Champions League'}</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#FFED02] mb-2">31</div>
                <div className="text-sm md:text-base text-white/80">{lang === 'en' ? 'Copa del Rey' : 'Copa del Rey'}</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#FFED02] mb-2">125+</div>
                <div className="text-sm md:text-base text-white/80">{lang === 'en' ? 'Years of History' : 'Años de Historia'}</div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-[#004D98]/10 text-[#004D98] rounded-full text-sm font-medium mb-4">
                {lang === 'en' ? 'Our Story' : 'Nuestra Historia'}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#004D98]">{dict.about.title}</h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="animate-slide-in-left">
                <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-[#A50044] flex items-center gap-3">
                  <span className="w-12 h-12 bg-[#A50044]/10 rounded-xl flex items-center justify-center">📖</span>
                  {dict.about.history.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                  {dict.about.history.paragraph1}
                </p>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {dict.about.history.paragraph2}
                </p>
                <div className="mt-8 flex gap-4">
                  <div className="flex items-center gap-2 text-[#004D98]">
                    <span className="w-2 h-2 bg-[#004D98] rounded-full"></span>
                    <span className="font-medium">{lang === 'en' ? 'Founded 1899' : 'Fundado 1899'}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#A50044]">
                    <span className="w-2 h-2 bg-[#A50044] rounded-full"></span>
                    <span className="font-medium">{lang === 'en' ? 'Camp Nou' : 'Camp Nou'}</span>
                  </div>
                </div>
              </div>
              
              <div className="animate-slide-in-right">
                <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-[#A50044] flex items-center gap-3">
                  <span className="w-12 h-12 bg-[#A50044]/10 rounded-xl flex items-center justify-center">💎</span>
                  {dict.about.values.title}
                </h3>
                <div className="space-y-6">
                  <div className="card-hover p-6 bg-gradient-to-r from-slate-50 to-white rounded-2xl border border-slate-100 shadow-sm">
                    <div className="flex items-start gap-4">
                      <span className="text-3xl animate-float">⚽</span>
                      <div>
                        <h4 className="font-semibold text-lg text-[#004D98] mb-1">{dict.about.values.excellence.title}</h4>
                        <p className="text-gray-600">{dict.about.values.excellence.description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="card-hover p-6 bg-gradient-to-r from-slate-50 to-white rounded-2xl border border-slate-100 shadow-sm">
                    <div className="flex items-start gap-4">
                      <span className="text-3xl animate-float delay-100">🤝</span>
                      <div>
                        <h4 className="font-semibold text-lg text-[#004D98] mb-1">{dict.about.values.respect.title}</h4>
                        <p className="text-gray-600">{dict.about.values.respect.description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="card-hover p-6 bg-gradient-to-r from-slate-50 to-white rounded-2xl border border-slate-100 shadow-sm">
                    <div className="flex items-start gap-4">
                      <span className="text-3xl animate-float delay-200">❤️</span>
                      <div>
                        <h4 className="font-semibold text-lg text-[#004D98] mb-1">{dict.about.values.passion.title}</h4>
                        <p className="text-gray-600">{dict.about.values.passion.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 bg-gradient-to-br from-[#A50044] to-[#7a0033] text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFED02]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#004D98]/20 rounded-full blur-3xl"></div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {lang === 'en' ? 'Join the Blaugrana Family' : 'Únete a la Familia Blaugrana'}
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              {lang === 'en' 
                ? 'Become a member and get exclusive access to matches, merchandise, and unforgettable experiences.' 
                : 'Conviértete en socio y obtén acceso exclusivo a partidos, merchandising y experiencias inolvidables.'}
            </p>
            <button className="btn-shine bg-[#FFED02] text-[#A50044] px-10 py-5 rounded-full text-lg font-bold hover:bg-yellow-300 transition-all duration-300 hover:shadow-xl hover:shadow-[#FFED02]/30 hover:scale-105">
              {lang === 'en' ? 'Become a Member' : 'Hazte Socio'} →
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#0a1628] text-white py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-12 mb-12">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#A50044] to-[#004D98] rounded-full flex items-center justify-center text-xl font-bold">
                    ⚽
                  </div>
                  <span className="text-xl font-bold">FC Barcelona</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {lang === 'en' 
                    ? 'More than a club. A symbol of excellence, passion, and Catalan pride since 1899.' 
                    : 'Más que un club. Un símbolo de excelencia, pasión y orgullo catalán desde 1899.'}
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-[#FFED02]">{lang === 'en' ? 'Quick Links' : 'Enlaces Rápidos'}</h4>
                <ul className="space-y-3 text-gray-400">
                  <li><a href="#home" className="hover:text-white transition-colors">{dict.nav.home}</a></li>
                  <li><a href="#about" className="hover:text-white transition-colors">{dict.nav.about}</a></li>
                  <li><a href="#team" className="hover:text-white transition-colors">{dict.nav.team}</a></li>
                  <li><a href="#contact" className="hover:text-white transition-colors">{dict.nav.contact}</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-[#FFED02]">{lang === 'en' ? 'Follow Us' : 'Síguenos'}</h4>
                <ul className="space-y-3 text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2">📘 Facebook</a></li>
                  <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2">📸 Instagram</a></li>
                  <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2">🐦 Twitter</a></li>
                  <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2">📺 YouTube</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-[#FFED02]">{lang === 'en' ? 'Contact' : 'Contacto'}</h4>
                <ul className="space-y-3 text-gray-400 text-sm">
                  <li>Camp Nou, Barcelona</li>
                  <li>08028 Spain</li>
                  <li>info@fcbarcelona.com</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-500 text-sm">
                © 2026 FC Barcelona. {lang === 'en' ? 'All rights reserved.' : 'Todos los derechos reservados.'}
              </p>
              <div className="flex gap-6 text-gray-500 text-sm">
                <a href="#" className="hover:text-white transition-colors">{lang === 'en' ? 'Privacy Policy' : 'Política de Privacidad'}</a>
                <a href="#" className="hover:text-white transition-colors">{lang === 'en' ? 'Terms of Service' : 'Términos de Servicio'}</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
