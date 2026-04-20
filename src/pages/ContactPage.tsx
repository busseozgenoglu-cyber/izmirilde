import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Mail, Plus } from 'lucide-react'
import useScrollReveal from '../hooks/useScrollReveal'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: 'Mekan Ekle', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Placeholder for form submission
    alert('Mesajınız gönderildi! (Demo)')
  }

  useScrollReveal()

  return (
    <main>
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[320px] flex items-center justify-center overflow-hidden">
        <img
          src="/images/contact-hero.jpg"
          alt="İletişim"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 text-center px-4">
          <h1
            className="text-h1 font-bold text-white leading-[0.95] tracking-[-0.04em] reveal"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            İletişim
          </h1>
          <p className="mt-4 text-white/85 text-lg max-w-[480px] mx-auto reveal reveal-delay-1">
            Mekan eklemek, iş birliği yapmak veya bir soru sormak için bize ulaş
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-[4vw]">
          <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12">
            {/* Form */}
            <div className="reveal">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-[13px] font-medium text-black/50 mb-1.5">
                    Adınız
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3.5 border border-black/12 rounded-lg text-base focus:border-black transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-[13px] font-medium text-black/50 mb-1.5">
                    E-posta
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3.5 border border-black/12 rounded-lg text-base focus:border-black transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-[13px] font-medium text-black/50 mb-1.5">
                    Konu
                  </label>
                  <select
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full px-4 py-3.5 border border-black/12 rounded-lg text-base focus:border-black transition-colors bg-white"
                  >
                    <option>Mekan Ekle</option>
                    <option>İş Birliği</option>
                    <option>Soru / Öneri</option>
                    <option>Diğer</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[13px] font-medium text-black/50 mb-1.5">
                    Mesajınız
                  </label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={6}
                    className="w-full px-4 py-3.5 border border-black/12 rounded-lg text-base focus:border-black transition-colors resize-none"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 gradient-sunset text-white rounded-lg font-semibold text-base hover:brightness-110 transition-all duration-300"
                >
                  Gönder
                </button>
              </form>
            </div>

            {/* Info Card */}
            <div className="reveal reveal-delay-1">
              <div className="bg-[#FFF5EE] rounded-2xl p-8 space-y-8">
                {/* Mekan Ekle */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg gradient-sunset flex items-center justify-center">
                      <Plus className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-semibold text-xl">Mekanını Ekle</h3>
                  </div>
                  <p className="text-sm text-black/60 leading-relaxed mb-3">
                    İşletmenizi izmirilde&apos;de listelemek ister misiniz? Formu doldurun, ekibimiz
                    48 saat içinde size dönüş yapsın.
                  </p>
                  <Link
                    to="#"
                    className="text-sm font-medium text-black hover:underline"
                  >
                    Mekan Ekle →
                  </Link>
                </div>

                {/* Email */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg gradient-sunset flex items-center justify-center">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-semibold text-xl">E-posta</h3>
                  </div>
                  <a
                    href="mailto:hello@izmirilde.com"
                    className="text-sm text-black hover:underline"
                  >
                    hello@izmirilde.com
                  </a>
                </div>

                {/* Sosyal Medya */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg gradient-sunset flex items-center justify-center">
                      <Instagram className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-semibold text-xl">Sosyal Medya</h3>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-black">Instagram: @izmirilde</p>
                    <p className="text-sm text-black">Twitter: @izmirilde</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
