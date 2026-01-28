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

  return (<>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID!} />
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-[#004D98]/90 backdrop-blur-md text-white px-6 py-4 shadow-lg transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#FFED02] rounded-lg flex items-center justify-center text-[#004D98] font-bold text-xl">FCB</div>
            <div className="text-2xl font-bold tracking-tight hidden sm:block">FC Barcelona</div>
          </div>
          <div className="flex items-center gap-8">
            <ul className="hidden md:flex gap-8 font-medium">
              <li><a href="#home" className="hover:text-[#FFED02] transition-colors relative group">
                {dict.nav.home}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FFED02] transition-all group-hover:w-full"></span>
              </a></li>
              <li><a href="#about" className="hover:text-[#FFED02] transition-colors relative group">
                {dict.nav.about}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FFED02] transition-all group-hover:w-full"></span>
              </a></li>
              <li><a href="#team" className="hover:text-[#FFED02] transition-colors relative group">
                {dict.nav.team}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FFED02] transition-all group-hover:w-full"></span>
              </a></li>
              <li><a href="#contact" className="hover:text-[#FFED02] transition-colors relative group">
                {dict.nav.contact}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FFED02] transition-all group-hover:w-full"></span>
              </a></li>
            </ul>
            <LanguageSwitcher currentLang={lang} />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#004D98] via-[#004D98] to-[#A50044] opacity-95"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.fcbarcelona.com/fcbarcelona/photo/2022/08/02/ae06227a-9357-4f40-97e3-0c46b1c0907e/Camp-Nou-stadium.jpg')] bg-cover bg-center mix-blend-overlay"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-[#FFED02] uppercase bg-[#FFED02]/10 rounded-full backdrop-blur-sm border border-[#FFED02]/20">
            {dict.hero.motto}
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 text-white tracking-tighter">
            {dict.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-12 leading-relaxed">
            {dict.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-[#FFED02] text-[#004D98] px-10 py-4 rounded-xl text-lg font-bold hover:bg-[#fff24d] hover:-translate-y-1 transition-all shadow-xl hover:shadow-[#FFED02]/20">
              {dict.hero.button}
            </button>
            <button className="w-full sm:w-auto bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-4 rounded-xl text-lg font-bold hover:bg-white/20 transition-all">
              {dict.nav.team}
            </button>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#FFED02]/10 rounded-full blur-3xl"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#A50044]/20 rounded-full blur-3xl"></div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-[#004D98] mb-4">{dict.about.title}</h2>
            <div className="w-24 h-1.5 bg-[#A50044] mx-auto rounded-full"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-2xl font-bold mb-4 text-[#A50044] flex items-center gap-3">
                  <span className="p-2 bg-[#A50044]/10 rounded-lg">📜</span>
                  {dict.about.history.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                  {dict.about.history.paragraph1}
                </p>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {dict.about.history.paragraph2}
                </p>
              </div>
            </div>

            <div className="grid gap-6">
              <h3 className="text-2xl font-bold text-[#A50044] mb-2 px-2">{dict.about.values.title}</h3>
              
              <div className="group p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:border-[#FFED02] hover:shadow-lg transition-all duration-300">
                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-14 h-14 bg-[#FFED02]/20 rounded-xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">⚽</div>
                  <div>
                    <h4 className="font-bold text-xl text-[#004D98] mb-1">{dict.about.values.excellence.title}</h4>
                    <p className="text-gray-500">{dict.about.values.excellence.description}</p>
                  </div>
                </div>
              </div>

              <div className="group p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:border-[#FFED02] hover:shadow-lg transition-all duration-300">
                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-14 h-14 bg-[#FFED02]/20 rounded-xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">🤝</div>
                  <div>
                    <h4 className="font-bold text-xl text-[#004D98] mb-1">{dict.about.values.respect.title}</h4>
                    <p className="text-gray-500">{dict.about.values.respect.description}</p>
                  </div>
                </div>
              </div>

              <div className="group p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:border-[#FFED02] hover:shadow-lg transition-all duration-300">
                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-14 h-14 bg-[#FFED02]/20 rounded-xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">❤️</div>
                  <div>
                    <h4 className="font-bold text-xl text-[#004D98] mb-1">{dict.about.values.passion.title}</h4>
                    <p className="text-gray-500">{dict.about.values.passion.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-[#004D98] mb-4">{dict.team.title}</h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">{dict.team.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { id: 'lewandowski', emoji: '9️⃣' },
              { id: 'pedri', emoji: '8️⃣' },
              { id: 'gavi', emoji: '6️⃣' },
              { id: 'lamine', emoji: '3️⃣0️⃣' }
            ].map((player) => (
              <div key={player.id} className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="aspect-[4/5] bg-gradient-to-b from-gray-100 to-gray-200 flex items-center justify-center text-8xl relative overflow-hidden">
                  <span className="z-10 group-hover:scale-110 transition-transform duration-500">{player.emoji}</span>
                  <div className="absolute inset-0 bg-[#004D98]/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-6 text-center">
                  <h4 className="font-bold text-xl text-[#004D98] mb-1">
                    {dict.team.players[player.id as keyof typeof dict.team.players]}
                  </h4>
                  <p className="text-[#A50044] font-semibold text-sm uppercase tracking-wider">
                    {dict.team.players[`${player.id}_pos` as keyof typeof dict.team.players]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-[#004D98] mb-6">{dict.contact.title}</h2>
              <p className="text-xl text-gray-500 mb-10">{dict.contact.subtitle}</p>
              
              <div className="space-y-8">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-[#004D98]/5 rounded-xl flex items-center justify-center text-[#004D98] text-xl">📍</div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-900">Address</h4>
                    <p className="text-gray-500">{dict.contact.info.address}</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-[#004D98]/5 rounded-xl flex items-center justify-center text-[#004D98] text-xl">📧</div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-900">Email</h4>
                    <p className="text-gray-500">{dict.contact.info.email}</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-[#004D98]/5 rounded-xl flex items-center justify-center text-[#004D98] text-xl">📞</div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-900">Phone</h4>
                    <p className="text-gray-500">{dict.contact.info.phone}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 md:p-10 rounded-[2rem] border border-gray-100">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">{dict.contact.form.name}</label>
                    <input type="text" className="w-full px-5 py-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#004D98] focus:border-transparent outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">{dict.contact.form.email}</label>
                    <input type="email" className="w-full px-5 py-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#004D98] focus:border-transparent outline-none transition-all" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">{dict.contact.form.message}</label>
                  <textarea rows={4} className="w-full px-5 py-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#004D98] focus:border-transparent outline-none transition-all resize-none"></textarea>
                </div>
                <button type="button" className="w-full bg-[#004D98] text-white py-5 rounded-xl font-bold text-lg hover:bg-[#003a73] transition-all shadow-lg shadow-blue-900/10">
                  {dict.contact.form.send}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#004D98] text-white py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 border-t border-white/10 pt-12">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[#FFED02] rounded-xl flex items-center justify-center text-[#004D98] font-black text-2xl shadow-inner">FCB</div>
            <span className="text-xl font-bold">FC Barcelona</span>
          </div>
          
          <div className="flex gap-8 text-sm font-medium text-blue-100">
            <a href="#" className="hover:text-[#FFED02] transition-colors">{dict.footer.links.privacy}</a>
            <a href="#" className="hover:text-[#FFED02] transition-colors">{dict.footer.links.terms}</a>
          </div>
          
          <p className="text-blue-200/60 text-sm">
            © {new Date().getFullYear()} FC Barcelona. {dict.footer.rights}
          </p>
        </div>
      </footer>
    </div>
    </>
  )
}
