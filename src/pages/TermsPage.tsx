import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

export default function TermsPage() {
  return (
    <>
      <Helmet>
        <title>Hizmet Şartları | izmirilde</title>
        <meta name="description" content="izmirilde.com kullanım şartları ve hizmet koşulları." />
        <link rel="canonical" href="https://izmirilde.com/hizmet-sartlari" />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <main className="max-w-[760px] mx-auto px-4 sm:px-8 py-20">
        <div className="mb-12">
          <Link to="/" className="text-sm text-black/50 hover:text-orange-500 transition-colors mb-6 inline-block">
            ← Ana Sayfa
          </Link>
          <h1 className="text-4xl font-bold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
            Hizmet Şartları
          </h1>
          <p className="text-black/50 text-sm">Son güncelleme: 22 Nisan 2026</p>
        </div>

        <div className="prose prose-lg max-w-none space-y-8 text-black/75 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-black mb-3">1. Kabul</h2>
            <p>
              izmirilde.com'u ("Site") ziyaret ederek aşağıdaki hizmet şartlarını kabul etmiş sayılırsınız.
              Şartları kabul etmiyorsanız lütfen siteyi kullanmayınız.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-3">2. Hizmetin Tanımı</h2>
            <p>
              izmirilde, İzmir iline ait editöryal içerik, gezi rehberleri, mekan önerileri ve yerel haberler
              yayınlayan bağımsız bir dijital yayın platformudur. Yayınlanan tüm içerikler bilgilendirme
              amaçlıdır.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-3">3. İçerik ve Telif Hakkı</h2>
            <p>
              Sitede yayınlanan tüm metin, görsel, grafik ve diğer içerikler izmirilde'nin mülkiyetindedir
              veya kullanım hakkı alınmıştır. İzinsiz kopyalanması, çoğaltılması veya dağıtılması yasaktır.
              Alıntı yapılması halinde kaynak gösterilmesi zorunludur.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-3">4. Kullanıcı Sorumluluğu</h2>
            <p>Siteyi kullanırken:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Yasalara aykırı faaliyetlerde bulunmamayı,</li>
              <li>Başkalarının haklarına zarar vermemeyi,</li>
              <li>Site altyapısını bozmaya yönelik girişimlerde bulunmamayı</li>
            </ul>
            <p className="mt-3">kabul etmiş sayılırsınız.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-3">5. Bilgilerin Doğruluğu</h2>
            <p>
              Sitede yer alan mekan bilgileri, fiyatlar, saatler ve diğer pratik veriler değişkenlik
              gösterebilir. izmirilde bu bilgilerin güncelliğini garanti etmez. Ziyaret öncesi ilgili
              mekanı doğrulamanızı öneririz.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-3">6. Sponsorlu İçerik</h2>
            <p>
              Sitede yer alan bazı içerikler sponsorlu veya reklam niteliği taşıyabilir. Bu tür içerikler
              açıkça "Sponsorlu" veya "Reklam" etiketi ile işaretlenir. Editöryal bağımsızlığımız
              korunmakta olup sponsorluk ilişkileri içerik kalitesini etkilemez.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-3">7. Bağlantılı Siteler</h2>
            <p>
              Sitemiz üçüncü taraf web sitelerine bağlantılar içerebilir. Bu sitelerin içerik ve
              gizlilik uygulamalarından sorumlu değiliz.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-3">8. Değişiklikler</h2>
            <p>
              Bu hizmet şartları önceden bildirimde bulunulmaksızın değiştirilebilir.
              Güncel versiyona her zaman bu sayfadan ulaşabilirsiniz.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-3">9. İletişim</h2>
            <p>
              Sorularınız için{' '}
              <Link to="/contact" className="text-orange-500 hover:underline">iletişim sayfamızı</Link>{' '}
              kullanabilirsiniz.
            </p>
          </section>

        </div>
      </main>
    </>
  )
}
