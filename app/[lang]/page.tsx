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
    <div className="min-h-screen">
      {/* Navbar */}
      <nav className="bg-[#004D98] text-white px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-2xl font-bold">FC Barcelona</div>
          <div className="flex items-center gap-8">
            <ul className="flex gap-8">
              <li><a href="#home" className="hover:text-[#FFED02] transition">{dict.nav.home}</a></li>
              <li><a href="#about" className="hover:text-[#FFED02] transition">{dict.nav.about}</a></li>
              <li><a href="#team" className="hover:text-[#FFED02] transition">{dict.nav.team}</a></li>
              <li><a href="#contact" className="hover:text-[#FFED02] transition">{dict.nav.contact}</a></li>
            </ul>
            <LanguageSwitcher currentLang={lang} />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-[#004D98] to-[#A50044] text-white py-32 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl font-bold mb-6">{dict.hero.title}</h1>
          <p className="text-2xl mb-8">{dict.hero.motto}</p>
          <p className="text-xl max-w-2xl mx-auto mb-10">
            {dict.hero.subtitle}
          </p>
          <button className="bg-[#FFED02] text-[#004D98] px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-300 transition">
            {dict.hero.button}
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#004D98]">{dict.about.title}</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-[#A50044]">{dict.about.history.title}</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                {dict.about.history.paragraph1}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {dict.about.history.paragraph2}
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-[#A50044]">{dict.about.values.title}</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#FFED02] mr-3 text-2xl">⚽</span>
                  <span><strong>{dict.about.values.excellence.title}:</strong> {dict.about.values.excellence.description}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FFED02] mr-3 text-2xl">🤝</span>
                  <span><strong>{dict.about.values.respect.title}:</strong> {dict.about.values.respect.description}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FFED02] mr-3 text-2xl">❤️</span>
                  <span><strong>{dict.about.values.passion.title}:</strong> {dict.about.values.passion.description}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}
