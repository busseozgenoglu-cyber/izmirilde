import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

export default function PrivacyPage() {
  return (
    <>
      <Helmet>
        <title>Gizlilik Politikası | izmirilde</title>
        <meta name="description" content="izmirilde.com gizlilik politikası. Kişisel verilerinizin nasıl toplandığı, kullanıldığı ve korunduğu hakkında bilgi." />
        <link rel="canonical" href="https://izmirilde.com/gizlilik-politikasi" />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <main className="max-w-[760px] mx-auto px-4 sm:px-8 py-20">
        {/* Başlık */}
        <div className="mb-12">
          <Link to="/" className="text-sm text-black/50 hover:text-orange-500 transition-colors mb-6 inline-block">
            ← Ana Sayfa
          </Link>
          <h1 className="text-4xl font-bold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
            Gizlilik Politikası
          </h1>
          <p className="text-black/50 text-sm">Son güncelleme: 22 Nisan 2026</p>
        </div>

        <div className="prose prose-lg max-w-none space-y-8 text-black/75 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-black mb-3">1. Genel Bilgiler</h2>
            <p>
              izmirilde.com ("Site"), İzmir şehrine ait içerik, rehber ve haber yayınlayan bağımsız bir dijital yayın platformudur.
              Bu gizlilik politikası, sitemizi ziyaret ettiğinizde hangi bilgilerin toplandığını, nasıl kullanıldığını ve korunduğunu açıklamaktadır.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-3">2. Toplanan Bilgiler</h2>
            <p>Sitemiz aşağıdaki bilgileri otomatik olarak toplayabilir:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>IP adresi ve tarayıcı bilgileri (anonim olarak)</li>
              <li>Ziyaret edilen sayfalar ve geçirilen süre</li>
              <li>Tıklama ve gezinme davranışları</li>
              <li>Cihaz türü ve işletim sistemi</li>
            </ul>
            <p className="mt-3">
              İletişim formu üzerinden gönüllü olarak paylaştığınız isim ve e-posta adresi yalnızca iletişim amacıyla kullanılır
              ve üçüncü taraflarla paylaşılmaz.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-3">3. Çerezler (Cookies)</h2>
            <p>
              Sitemiz Google Analytics, Google Tag Manager ve benzeri analitik araçlar aracılığıyla çerez kullanmaktadır.
              Bu çerezler, sitenin nasıl kullanıldığını anlamamıza yardımcı olur.
              Tarayıcı ayarlarınızdan çerezleri devre dışı bırakabilirsiniz.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-3">4. Üçüncü Taraf Hizmetler</h2>
            <p>Sitemiz aşağıdaki üçüncü taraf hizmetleri kullanmaktadır:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li><strong>Google Analytics:</strong> Ziyaretçi istatistikleri için</li>
              <li><strong>Google Tag Manager:</strong> Etiket yönetimi için</li>
              <li><strong>Google Reader Revenue Manager:</strong> İçerik yönetimi için</li>
            </ul>
            <p className="mt-3">
              Bu hizmetlerin gizlilik politikalarına ilgili şirketlerin web sitelerinden ulaşabilirsiniz.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-3">5. Verilerinizin Güvenliği</h2>
            <p>
              Kişisel verileriniz HTTPS şifrelemesiyle korunmaktadır. Verileriniz asla satılmaz, kiralanmaz veya
              üçüncü taraflarla ticari amaçla paylaşılmaz.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-3">6. Haklarınız (KVKK)</h2>
            <p>6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında aşağıdaki haklara sahipsiniz:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
              <li>Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme</li>
              <li>Kişisel verilerinizin silinmesini veya yok edilmesini isteme</li>
              <li>İşlenen verilerin yalnızca otomatik sistemler vasıtasıyla analiz edilmesine itiraz etme</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-3">7. İletişim</h2>
            <p>
              Gizlilik politikamızla ilgili sorularınız için{' '}
              <Link to="/contact" className="text-orange-500 hover:underline">iletişim sayfamızı</Link>{' '}
              kullanabilirsiniz.
            </p>
          </section>

        </div>
      </main>
    </>
  )
}
