// ===================== 32 İZMİR İLÇESİ REHBERİ =====================
// İzmir'in tüm ilçeleri için gezilecek yerler, kahvaltı, öğle ve akşam yemeği rehberi.
// 270+ gerçek mekan önerisi.

export interface DistrictVenue {
  name: string
  description: string
}

export interface District {
  id: string
  slug: string
  name: string
  emoji: string
  image: string
  intro: string
  activities: string
  breakfast: DistrictVenue[]
  lunch: DistrictVenue[]
  dinner: DistrictVenue[]
}

export const districts: District[] = [
  {
    id: 'd1',
    slug: 'konak',
    name: 'Konak',
    emoji: '🏛',
    image: '/images/konak-meydan.jpg',
    intro: 'İzmir\'in merkez ilçesi Konak, şehrin kalbi olarak tarihi, kültürel ve gastronomik zenginliklerini bir arada sunar. Saat Kulesi, Konak Meydanı, Kemeraltı Çarşısı, Tarihi Asansör ve Kordonboyu gibi simgeler bu ilçededir.',
    activities: 'Konak\'ta Saat Kulesi\'ni görüntüleyin, Kemeraltı Çarşısı\'nda tarihi dokuda alışveriş yapın, Tarihi Asansör\'den şehir manzarası izleyin, Agora Ören Yeri\'nde antik döneme yolculuk yapın, Kordonboyu\'nda deniz esintisiyle yürüyüş yapın, Konak Pier\'de modern alışverişin tadını çıkarın ve Kızlarağası Hanı\'nda Osmanlı atmosferini soluyun.',
    breakfast: [
      { name: 'Konya Mandırası', description: 'İzmir\'in en köklü mandıra ürünleri satış noktalarından biri olan Konya Mandırası, taze peynirleri, kaymağı, balı ve tereyağıyla geleneksel bir kahvaltı deneyimi sunar. 70 yılı aşkın süredir hizmet veren mekan, Bergama tulumu, keçi peyniri, lor peyniri ve taze süt ürünleriyle İzmirlilerin sabah uğrak noktasıdır. Özellikle bal-kaymak ikilisi meşhurdur.' },
      { name: 'Meşhur Menemenci Akın', description: 'Menemen konusunda iddialı olan bu mekan, tereyağında sahanda yumurta, sucuklu menemen ve sıcak ekmekle pratik ama doyurucu bir kahvaltı sunar. Hızlı servisi ve uygun fiyatlarıyla öğrencilerin ve çalışanların favorisidir.' },
      { name: 'Magro Alsancak', description: 'Kordon\'da deniz manzarasına karşı kahvaltı yapma imkanı sunan Magro, zengin serpme kahvaltı menüsüyle öne çıkar. Kruvasanlı kahvaltı tabakları, ev yapımı reçeller ve taze sıkma meyve sularıyla güne keyifli bir başlangıç yapabilirsiniz.' }
    ],
    lunch: [
      { name: 'Lokanta Mahalle', description: 'Kendi çiftliklerinden gelen zeytinyağıyla yapılan Ege\'ye özgü nefis zeytinyağlıları, beğendili tavuk, pırasa köftesi ve havuçlu kerevizli kıymalı patates gibi orijinal lezzetleri sunan bir ev yemeği adresidir. Mahalle Tiramisusu da meşhurdur.' },
      { name: 'Mutfak Girit', description: 'Turp otu, radika, cibez, Girit kabağı, kabak sıyırma, karışık ot kavurma, zeytinyağlı dolma ve girit ezmesi gibi Ege ve Girit mutfağından lezzetler sunar. Ufak ama samimi mekan, öğle aralarında hızlı servisiyle tercih edilir.' },
      { name: 'Tokuşlar Mantı', description: 'İzmir\'in en eski ve en lezzetli mantıcılarından biri olan Tokuşlar, el açması mantısı, yoğurtlu ve tereyağlı sosuyla öğle yemekleri için idealdir. Yanında ayran ve salata ile doyurucu bir öğle molası sunar.' }
    ],
    dinner: [
      { name: 'Kıbrıs Şehitleri Caddesi Meyhaneleri', description: 'Alsancak\'ın ünlü Kıbrıs Şehitleri Caddesi üzerinde sıralanan meyhaneler, taze meze çeşitleri, rakı balık keyfi ve canlı müzikle İzmir gecelerinin vazgeçilmezidir. Deniz börülcesi, ahtapot, karides güveç ve günün balığı mutlaka denenmelidir.' },
      { name: 'Deniz Restaurant', description: 'Kordon\'da deniz manzaralı bir akşam yemeği için ideal olan Deniz Restaurant, taze balıkları, zengin meze tepsisi ve profesyonel servisiyle İzmir\'in en köklü balık restoranlarından biridir.' },
      { name: 'Balmumu Lokanta', description: 'Gastronomi ustası Ahmet Güzelyağdöken\'in işlettiği bu lokanta, lezzeti ve gustosuyla son derece rafine ev yemekleri sunar. Ege mutfağının yanı sıra Anadolu yöresel lezzetlerini de menüsüne dahil eder. Alaşehir kapama ve yuvalama gibi özgün lezzetleri vardır.' }
    ],
  },
  {
    id: 'd2',
    slug: 'karsiyaka',
    name: 'Karşıyaka',
    emoji: '🏙',
    image: '/images/karsiyaka-bostanli.jpg',
    intro: 'İzmir\'in Anadolu yakasındaki incisi Karşıyaka, Bostanlı sahil bandı, canlı çarşısı, nostaljik tramvayı ve lezzet duraklarıyla hem yerli halkın hem de ziyaretçilerin gözde mekanıdır.',
    activities: 'Bostanlı Günbatımı Terası\'nda gün batımı izleyin, Karşıyaka Çarşısı\'nda nostaljik bir yolculuk yapın, Bostanlı Pazarı\'nda taze ürünler keşfedin, Karşıyaka İskele\'den Kordon\'a vapur yolculuğu yapın, Yunuslar Heykeli önünde fotoğraf çekin ve Bostanlı sahilinde bisiklet sürün.',
    breakfast: [
      { name: 'Morisi Kahvaltı Bostanlı', description: 'Bostanlı\'nın en popüler kahvaltı mekanlarından biri olan Morisi, zengin serpme kahvaltısı, taze börekleri ve deniz manzaralı terasıyla hafta sonları sıraya girmeden yer bulmanın zor olduğu bir adres. Ev yapımı reçel çeşitleri ve taze peynirleriyle dikkat çeker.' },
      { name: 'Nuvia Bostanlı', description: 'Modern tasarımı ve zengin kahvaltı menüsüyle öne çıkan Nuvia, granolalı kaseleri, avokadolu tostları ve özel sunumlarıyla klasik kahvaltı anlayışına yenilik katıyor. Brunch konseptiyle de popülerdir.' },
      { name: 'Firuze Kahve', description: 'Samimi atmosferi ve lezzetli kahvaltı tabaklarıyla öne çıkan Firuze, özellikle ev yapımı reçelleri ve taze pişi servisiyle Karşıyakalıların sabah uğrak noktasıdır. Bahçe keyfi yapılabilecek huzurlu bir ortam sunar.' }
    ],
    lunch: [
      { name: 'Panko Şinitzel Evi', description: 'Avusturya usulü şinitzel uzmanı olan Panko, çıtır çıtır şinitzelleri, çeşitli sosları ve garnitürleriyle öğle yemekleri için idealdir. Patates püresi ve mantar soslu şinitzel en çok tercih edilen lezzetler arasındadır.' },
      { name: 'Lokanta Sümer', description: 'Karşıyaka\'nın en eski lokantalarından biri olan Sümer, geleneksel Ege ev yemekleri sunar. Zeytinyağlılar, et yemekleri ve tatlı çeşitleriyle öğle saatlerinde yoğun bir müşteri kitlesine hitap eder.' },
      { name: 'Bostanlı Balıkçılar Çarşısı', description: 'Bostanlı\'da balıkçılar çarşısı içinde yer alan küçük restoranlar, taze balık ve mezeleriyle öğle yemeği için ekonomik ve lezzetli seçenekler sunar. Meze çeşitliliği ve taze balıklarıyla deniz mahsulü tutkunlarının favorisidir.' }
    ],
    dinner: [
      { name: 'Sardalya Meyhanesi', description: 'Bostanlı sahilinde gün batımında keyfi daha da iyi çıkan bu mekan, mezeleri kadar balıklarıyla da ünlü. Sakin müzik eşliğinde sohbet edebileceğiniz samimi atmosferi, karides ve kalamar gibi ara sıcaklarıyla akşam yemekleri için idealdir.' },
      { name: 'Yengeç Restaurant', description: 'Karşıyaka\'nın en köklü deniz ürünü restoranlarından biri olan Yengeç, taze balıkları, özel meze çeşitleri ve profesyonel servisiyle akşam yemekleri için tercih edilen bir adres. Özellikle ahtapot ve çipura ızgarası meşhurdur.' },
      { name: 'Ege Restaurant', description: 'Geleneksel Ege mutfağından zeytinyağlılar, otlu yemekler ve taze balıkları bir arada sunan Ege Restaurant, Karşıyaka\'da akşam yemeği için güvenilir bir tercihtir. Meze çeşitliliği ve taze balık seçenekleriyle öne çıkar.' }
    ],
  },
  {
    id: 'd3',
    slug: 'bornova',
    name: 'Bornova',
    emoji: '🏙',
    image: '/images/kulturpark-izmir.jpg',
    intro: 'İzmir\'in eğitim ve kültür merkezi Bornova, Ege Üniversitesi kampüsü, tarihi evleri, geniş parkları ve genç nüfusa hitap eden canlı sosyal hayatıyla dikkat çeker.',
    activities: 'Bornova Büyük Park\'ta piknik yapın, Ege Üniversitesi Kampüsü\'nde yeşillikler arasında yürüyüş yapın, İzmir Doğal Tarih Müzesi\'ni ziyaret edin, Tarihi Bornova Evleri\'ni görün, Küçük Park\'ta kahve içip dinlenin ve İzmir Hayvanat Bahçesi\'ni gezin.',
    breakfast: [
      { name: 'Aktuğ Köy Kahvaltısı', description: 'Bornova\'da köy kahvaltısı denince akla gelen ilk adreslerden. Sıcacık ortamı, organik ürünleri ve bitince yenisi gelir anlayışıyla gönülleri fethediyor. Domates, salatalık, zeytin, tereyağı gibi ürünlerin tamamı yöresel üreticilerden geliyor.' },
      { name: 'Country Kahvaltı Restaurant', description: 'Doğayla iç içe geniş bahçesinde serpme kahvaltı sunan Country, köy yumurtası, ev yapımı reçeller, taze ekmek ve zeytinyağlılarıyla doyurucu bir kahvaltı deneyimi yaşatır. Hafta sonları yoğunluk yaşanır.' },
      { name: '80\'ler Kahvaltı', description: 'Nostaljik atmosferi ve zengin kahvaltı menüsüyle öne çıkan 80\'ler Kahvaltı, serpme kahvaltı tabakları, gözlemeler ve taze sıkma portakal suyuyla Bornova\'nın popüler kahvaltı duraklarından biridir.' }
    ],
    lunch: [
      { name: 'Oscar Burger', description: 'Bornova\'nın en popüler burger adreslerinden biri olan Oscar, özel yapım et köfteleri, taze malzemeleri ve geniş menüsüyle öğle yemeği için idealdir. Özellikle students dostu fiyatlarıyla gençlerin favorisidir.' },
      { name: 'Mekan Köfte', description: 'Bornova\'nın köfte ustalarından biri olan Mekan Köfte, ızgara köfte, piyaz ve salata ikilisiyle doyurucu ve lezzetli bir öğle yemeği sunar. Taze köftesi ve ekonomik fiyatlarıyla yoğun ilgi görür.' },
      { name: 'Lokanta Mahalle Bornova', description: 'Ege ev yemekleri sunan bu samimi lokanta, zeytinyağlılar, et yemekleri ve günlük değişen menüsüyle öğle yemeği için güvenilir bir adres. Ev yapımı tatlıları da tamamlayıcı lezzetler arasındadır.' }
    ],
    dinner: [
      { name: 'Kırmızı Bahçe', description: 'Bornova\'nın en köklü restoranlarından biri olan Kırmızı Bahçe, geniş bahçesi, canlı müzikleri ve zengin menüsüyle akşam yemekleri için idealdir. Izgara çeşitleri, mezeler ve özel kokteylleriyle tercih edilir.' },
      { name: 'Burger King Bornova', description: 'Genç nüfusun yoğun olduğu Bornova\'da hızlı ve pratik bir akşam yemeği için tercih edilebilecek ekonomik bir seçenektir.' },
      { name: 'Ege Üniversitesi Kampüs Lokantası Çevresi', description: 'Kampüs çevresindeki lokantalar ve kafeler, öğrenci dostu fiyatlarıyla akşam yemeği için ekonomik seçenekler sunar. Lahmacun, pide, döner ve ev yemekleri bulunabilir.' }
    ],
  },
  {
    id: 'd4',
    slug: 'buca',
    name: 'Buca',
    emoji: '🏙',
    image: '/images/alsancak-street.jpg',
    intro: 'İzmir\'in en kalabalık ilçelerinden biri olan Buca, tarihi dokusu, üniversite kampüsleri, parkları ve gelişen sosyal hayatıyla dikkat çeker. Tarihi Buca Evleri ve Kaynaklar bölgesi ilçenin öne çıkan yerlerindendir.',
    activities: 'Buca Golet\'te doğa yürüyüşü yapın, Tarihi Buca Evleri\'ni gezin, Şirinyer\'de alışveriş yapın, Buca Kaynakları\'nda piknik yapın, Buca Belediyesi Kültür Merkezi\'nde etkinliklere katılın ve Buca Levent Marina\'da deniz keyfi yapın.',
    breakfast: [
      { name: 'Buca Köy Kahvaltısı', description: 'Buca\'nın yeşillikler içindeki köy kahvaltısı mekanları, organik ürünleri, taze yumurta, köy peyniri ve ev yapımı reçelleriyle doyurucu bir kahvaltı deneyimi sunar. Geniş bahçeleri aileler için idealdir.' },
      { name: 'Kahve Deryası', description: 'Buca\'nın popüler kahve ve kahvaltı duraklarından biri olan Kahve Deryası, serpme kahvaltı tabakları, özel kahve çeşitleri ve tatlılarıyla güne keyifli bir başlangıç yapmanızı sağlar.' },
      { name: 'Simitçi Dünyası Buca', description: 'Taze simit, gevrek ve boyoz çeşitleriyle kahvaltı yapabileceğiniz ekonomik bir adres. Yanında tulum peyniri ve çayla klasik bir İzmir kahvaltısı sunar.' }
    ],
    lunch: [
      { name: 'Buca Ev Yemekleri Lokantası', description: 'Günlük değişen menüsüyle ev yemekleri sunan bu lokanta, zeytinyağlılar, et yemekleri ve çorbalarıyla öğle aralarında pratik ve lezzetli bir seçenek sunar.' },
      { name: 'Dönerci Hasan Usta', description: 'Buca\'nın en eski dönercilerinden biri olan Hasan Usta, taze et döneri, özel sosu ve ekonomik fiyatlarıyla öğle yemekleri için idealdir.' },
      { name: 'Pideci Rıza', description: 'Odun fırınında pişirilen pideleri, lahmacunları ve pide çeşitleriyle Buca\'nın sevilen adreslerinden biri olan Pideci Rıza, öğle yemekleri için doyurucu bir seçenek.' }
    ],
    dinner: [
      { name: 'Buca Balıkçısı', description: 'Taze balık ve mezeleriyle akşam yemekleri için güvenilir bir adres olan Buca Balıkçısı, günün balığı, karides ve ahtapot gibi deniz ürünleriyle hizmet verir.' },
      { name: 'Şirinyer Et Lokantası', description: 'Izgara et çeşitleri, özel marine sosları ve geniş meze seçenekleriyle akşam yemeği için ideal bir et restoranı.' },
      { name: 'Buca Meyhaneleri', description: 'Buca çarşısı çevresindeki meyhaneler, meze çeşitleri, rakı balık keyfi ve canlı müzikle akşam yemekleri için ekonomik seçenekler sunar.' }
    ],
  },
  {
    id: 'd5',
    slug: 'alsancak-ve-kordon',
    name: 'Alsancak ve Kordon',
    emoji: '🏙',
    image: '/images/alsancak-street.jpg',
    intro: 'İzmir\'in en canlı, en renkli ve en sosyal semti Alsancak, Kordonboyu ile birlikte şehrin en önemli buluşma noktasıdır. Tarihi yapıları, moda caddeleri, lezzet durakları ve eğlence mekanlarıyla İzmir\'in vitrinidir.',
    activities: 'Kordonboyu\'nda gün batımı yürüyüşü yapın, Konak İskele\'den vapura binin, Alsancak çarşısında butik dükkanları gezin, Kıbrıs Şehitleri Caddesi\'nde eğlenceye katılın, Tarihi Havra Sokağı\'nda fotoğraf çekin, Pasaport İskele\'de martıları besleyin ve Cumhuriyet Meydanı\'nda soluklanın.',
    breakfast: [
      { name: 'Leone Patisserie Alsancak', description: 'Hem Türk hem Fransız kimliği taşıyan Leone, 2011\'den beri İzmir\'in en zarif kahvaltı adreslerinden biri. Tereyağlı kruvasanları, ev yapımı reçelleri, bademli kruvasanı ve özenli sunumuyla Alsancak\'ta Paris esintileri taşır.' },
      { name: 'Tuzu Biberi Kordon', description: 'Deniz manzarasına karşı serpme kahvaltı keyfi sunan Tuzu Biberi, Kordon\'un en popüler kahvaltı mekanlarından biri. Taze pişileri, zengin peynir çeşitleri ve bal-kaymak ikilisiyle güne mükemmel bir başlangıç yapabilirsiniz.' },
      { name: 'Zeynel Ergin Gevrek Fırını', description: '145 yıllık kara fırında İzmir\'in dillere destan gevreğini pişiren bu tarihi fırın, gevrek ve tulum peyniri kombinasyonuyla İzmir kahvaltısının en otantik halini sunar. 1962\'den bu yana aynı lezzeti korur.' }
    ],
    lunch: [
      { name: 'Uwawi', description: 'Somon gravlax eşliğinde hazırlanan ekmek üstü lezzetleri, poşe yumurta çeşitleri ve ciabatta sandviçleriyle Uwavi, Alsancak\'ın en sevilen öğle yemeği duraklarından biridir.' },
      { name: 'Un Posto', description: 'Focaccia ekmeği arasında enfes İtalyan sandviçleri sunan Un Posto, Meksika Sokağı\'nda hızlı ve lezzetli bir öğle yemeği için idealdir.' },
      { name: 'Alsancak Dostlar Fırını', description: '1983\'ten beri hizmet veren Dostlar Fırını, ıspanaklı boyozu, lorlu kurabiyesi ve taze simitleriyle öğle aralarında pratik ve lezzetli bir seçenek sunar.' }
    ],
    dinner: [
      { name: 'Balmumu Lokanta', description: 'Ege ve Anadolu mutfağından ev yemekleri sunan bu şık lokanta, Alaşehir kapama ve yuvalama gibi özgün lezzetleriyle akşam yemekleri için eşsiz bir deneyim sunar.' },
      { name: 'Lokanta Mahalle', description: 'Kendi çiftliklerinden gelen zeytinyağıyla hazırlanan zeytinyağlıları, begendili tavuk ve pırasa köftesiyle samimi bir akşam yemeği adresidir.' },
      { name: 'Kordon Meyhaneleri', description: 'Kordon boyunca sıralanan meyhaneler, taze mezeleri, rakı balık keyfi ve canlı müzikleriyle İzmir gecelerinin vazgeçilmez adreslerindendir. Deniz börülcesi ve ahtapot ızgarası meşhurdur.' }
    ],
  },
  {
    id: 'd6',
    slug: 'cesme',
    name: 'Çeşme',
    emoji: '🌊',
    image: '/images/cesme-marina.jpg',
    intro: 'Ege\'nin en gözde tatil beldelerinden Çeşme, berrak denizi, altın kumlu plajları, termal suları ve zengin gece hayatıyla hem yerli hem yabancı turistlerin cennetidir.',
    activities: 'Ilıca Plajı\'nda termal deniz keyfi yapın, Çeşme Kalesi\'ni ziyaret edin, Alaçatı yel değirmenlerini görün, Ildırı Koyu\'nda antik kent atmosferi yaşayın, Dalyan\'da tekne turuna katılın, Çeşme Marina\'da yürüyüş yapın ve gece beach clublarda eğlenin.',
    breakfast: [
      { name: 'Kumrucu Hikmet', description: 'Çeşme\'nin meşhur kumrusunu tadabileceğiniz en bilinen adreslerden biri. Susamlı gevrek ekmek arasına konan sucuk, salam ve kaşar peyniriyle yapılan kumru, sabah kahvaltısının vazgeçilmezi.' },
      { name: 'Tokmak Hasan\'ın Yeri', description: 'Çeşme\'nin en iyi dönerinin burada olduğu söylenir. Sahibi Hasan Bey etini komşusu Reisdere\'deki hayvancıdan bizzat alır. Bamyası ve sulu yemekleriyle sabah-öğle arası kahvaltı ve öğle yemeği için idealdir.' },
      { name: 'Noni\'s House', description: 'Butik otel konseptindeki Noni\'s House, serpme kahvaltısı, ev yapımı reçelleri ve huzurlu bahçesiyle Çeşme\'de kahvaltı için özel bir adres.' }
    ],
    lunch: [
      { name: 'İmren Lokantası', description: 'Gastronomi yazarlarının Türkiye\'nin en iyi esnaf lokantaları arasında gösterdiği İmren, ızgara çeşitleri ve meşhur ekmeğiyle öğle yemeği için harika bir adres. Ayasaranda şubesi manzarasıyla da ünlü.' },
      { name: 'Horasan Balık', description: 'Portakallı karides, deniz mahsullü erişteli spesyalleri ve taze balıklarıyla öğle yemeğinde deniz lezzetleri sunan popüler bir balık restoranı.' },
      { name: 'Çeşme Merkez Esnaf Lokantaları', description: 'Çeşme merkezde bulunan esnaf lokantaları, ekonomik fiyatlarıyla zengin sulu yemek ve ızgara çeşitleri sunar. Öğle aralarında hızlı servis yaparlar.' }
    ],
    dinner: [
      { name: 'Ferdi Baba', description: 'Çeşme Marina\'nın en ünlü balık restoranlarından biri olan Ferdi Baba, taze balıkları, zengin meze çeşitleri ve deniz manzarasıyla akşam yemekleri için mükemmel bir seçenek.' },
      { name: 'Dünya Gözüyle', description: 'Çeşme\'nin en bilinen meyhanelerinden biri olan Dünya Gözüyle, meze çeşitliliği, taze balıkları ve canlı müzikleriyle akşam yemekleri için idealdir.' },
      { name: 'Kumrucu Şevki', description: 'Çeşme\'nin efsane kumrucusu, gece geç saatlere kadar açık olup akşam yemeği sonrası atıştırmalık için mükemmel bir adres.' }
    ],
  },
  {
    id: 'd7',
    slug: 'alacati',
    name: 'Alaçatı',
    emoji: '🌊',
    image: '/images/alacati-streets.jpg',
    intro: 'Rüzgar sörfüyle dünya çapında ün yapmış, taş evleri, begonvilli sokakları, şık butikleri ve lezzet duraklarıyla Alaçatı, Ege\'nin en şık tatil beldelerinden biridir.',
    activities: 'Rüzgar sörfü yapın, taş sokaklarda butik turu yapın, yel değirmenlerini görün, Alaçatı Pazarı\'nda organik ürünler keşfedin, Kum Plajı\'nda güneşlenin, gece sokaklarında canlı müzik dinleyin ve şarap evlerinde tadım yapın.',
    breakfast: [
      { name: 'Alaçatı Kahve', description: 'Alaçatı\'nın en bilinen kahvaltı mekanlarından biri olan Alaçatı Kahve, geniş bahçesi, serpme kahvaltısı ve ev yapımı reçelleriyle güne keyifli bir başlangıç sunar.' },
      { name: 'Bumba Breakfast Club', description: 'Zengin kahvaltı menüsü, renkli sunumları ve huzurlu bahçesiyle Alaçatı\'da popüler bir kahvaltı adresi. Taze malzemeler ve özel hazırlanmış tabaklarıyla öne çıkar.' },
      { name: 'Köşe Kahve', description: 'Alaçatı\'nın taş sokaklarında gizli kalmış bu butik kahveci, taze kahve çeşitleri, simit ve poğaçalarıyla pratik bir kahvaltı seçeneği sunar.' }
    ],
    lunch: [
      { name: 'Sakız Restaurant', description: 'Ege mutfağından zeytinyağlılar, otlu yemekler ve taze balıkları bir arada sunan Sakız, Alaçatı\'nın en köklü restoranlarından biridir.' },
      { name: 'Köyüm Alaçatı', description: 'Köy kahvaltısı ve öğle yemekleriyle ünlü olan Köyüm, organik ürünleri ve geleneksel Ege lezzetleriyle öğle yemekleri için idealdir.' },
      { name: 'Alaçatı Balıkçısı', description: 'Taze balık ve mezeleriyle öğle yemeğinde hafif bir seçenek sunan Alaçatı Balıkçısı, deniz mahsullü makarna ve ızgara çipura ile öne çıkar.' }
    ],
    dinner: [
      { name: 'Agrilia', description: 'Alaçatı\'nın en ünlü restoranlarından biri olan Agrilia, Ege mutfağından modern yorumlar, geniş şarap menüsü ve romantik bahçesiyle akşam yemekleri için mükemmel.' },
      { name: 'Kaptan\'ın Yeri', description: 'Taze balıkları, mezeleri ve samimi atmosferiyle akşam yemeği için tercih edilen bir balık restoranı. Deniz börülcesi ve ahtapot ızgarası meşhurdur.' },
      { name: 'Alancha', description: 'Şef Kemal Demirasal\'ın finesse mutfağıyla hizmet veren Alancha, Anadolu lezzetlerini modern tekniklerle sunar. Rezervasyon zorunludur.' }
    ],
  },
  {
    id: 'd8',
    slug: 'urla',
    name: 'Urla',
    emoji: '🌊',
    image: '/images/urla-vineyards.jpg',
    intro: 'Son yıllarda gastronomi turizminin merkezi haline gelen Urla, bağları, zeytinyağı üretimi, şarap evleri, şirin köyleri ve lezzet festivaliyle İzmir\'in en çok konuşulan ilçelerinden biridir.',
    activities: 'Urla Bağ Yolu\'nda şarap tadımı yapın, İskele\'de deniz kenarında yürüyüş yapın, Kazım Dirik Caddesi\'nde butik turu yapın, Demircili ve Uzunkuyu köylerini keşfedin, Urla Sanat Sokağı\'nda sergi gezin, zeytinyağı üreticilerini ziyaret edin ve Urla Port\'ta yemek yiyin.',
    breakfast: [
      { name: 'Leone Patisserie Urla', description: 'Fransız kahvaltı kültürünü Urla\'ya taşıyan Leone, kruvasan kahvaltı tabakları, ev yapımı reçelleri ve özenli sunumuyla ilçenin en zarif kahvaltı adreslerinden biri.' },
      { name: 'Urla Kadıköy Kahvaltı', description: 'Köy kahvaltısı konseptiyle hizmet veren bu mekan, organik ürünleri, taze peynirleri ve ev yapımı reçelleriyle doyurucu bir kahvaltı sunar.' },
      { name: 'Tuzu Biberi Urla', description: 'Urla merkezde hizmet veren Tuzu Biberi, serpme kahvaltısı, deniz manzarası ve taze ürünleriyle popüler bir kahvaltı adresidir.' }
    ],
    lunch: [
      { name: 'Oba Restaurant', description: 'Urla\'nın en köklü restoranlarından Oba, Ege mutfağından zeytinyağlılar, otlu yemekler ve taze balıkları bir arada sunar.' },
      { name: 'Zeytinler Kahvaltı ve Gözleme', description: 'Köy gözlemeleri, otlu börekleri ve zeytinyağlılarıyla öğle yemeği için hafif ve lezzetli bir seçenek.' },
      { name: 'Urlice Bağları', description: 'Şarap tadımı ve öğle yemeği bir arada sunan Urlice, bağlar arasında enfes bir yemek deneyimi yaşatır. Rezervasyon gereklidir.' }
    ],
    dinner: [
      { name: 'Yengeç Restaurant Urla', description: 'Deniz kenarında taze balık ve mezeler sunan Yengeç, Urla\'nın en bilinen akşam yemeği mekanlarından biridir.' },
      { name: 'Liman Restaurant', description: 'Urla İskele\'de bulunan Liman, deniz manzaralı terası, zengin meze çeşitleri ve taze balıklarıyla akşam yemekleri için idealdir.' },
      { name: 'USCA Şarap Evi', description: 'Kendi ürettikleri şaraplar eşliğinde akşam yemeği sunan USCA, Urla bağ yolunun en populer duraklarından biridir.' }
    ],
  },
  {
    id: 'd9',
    slug: 'seferihisar-ve-sigacik',
    name: 'Seferihisar ve Sığacık',
    emoji: '🏙',
    image: '/images/kulturpark-izmir.jpg',
    intro: 'Türkiye\'nin ilk Cittaslow (yavaş şehir) ünvanlı ilçesi Seferihisar, Sığacık Kalesi, mandalina bahçeleri, organik pazarı ve huzurlu atmosferiyle Ege\'nin saklı cennetlerindendir.',
    activities: 'Sığacık Kalesi\'nde kale duvarlarında yürüyün, Salı Pazarı\'nda organik ürünler alın, Teos Antik Kenti\'ni keşfedin, Akkum Plajı\'nda denize girin, mandalina bahçelerinde gezinin, sokak aralarında butik dükkanları keşfedin ve tekne turuyla saklı koyları görün.',
    breakfast: [
      { name: 'Teos Taxi Cafe', description: 'Sığacık\'ın en popüler kahvaltı mekanlarından biri olan Teos Taxi, zengin serpme kahvaltısıyla ünlü. Siyah zeytin, ev yapımı reçeller, Armola peyniri, sigara böreği, pişi ve sınırsız çay eşliğinde doyurucu bir kahvaltı sunar.' },
      { name: 'La\'Dude Art Cafe', description: 'Sanat galerisi ve cafe bir arada olan La\'Dude, kahvaltı yaparken sergi gezebileceğiniz, Ege\'nin sıcak sabahlarına uygun zengin bir menüyle hizmet verir. Tatlıları da meşhurdur.' },
      { name: 'Lavantalı Konak', description: 'Şirin atmosferiyle Lavantalı Konak, taze kahvaltılıklar eşliğinde güneşin hafif ışıklarıyla keyifli bir kahvaltı deneyimi sunar.' }
    ],
    lunch: [
      { name: 'Ermiş Balıkçılık', description: 'Sığacık\'ta öğle yemeği için mükemmel bir tercih olan Ermiş, taze levrek, kalamar ve karides gibi deniz ürünleriyle ünlü. Taze, lezzetli ve Ege\'nin hafif deniz havasını taşıyan yemekleriyle balık ziyafeti sunar.' },
      { name: 'Sefertası Lokantası', description: 'Köy pazarının yanıbaşında yer alan Sefertası, Seferihisar\'ın geleneksel lezzetlerini sunar. Odun fırınından çıkan mis gibi ekmekleriyle meşhurdur.' },
      { name: 'La\'Dude Bahçe', description: 'Deniz manzaralı bahçesi, tereyağlı kabak yatağında karidesi ve Ege otlarıyla hazırlanan yemekleriyle öğle yemeği için harika bir adres.' }
    ],
    dinner: [
      { name: 'No: 17 Sığacık', description: 'Zengin meze çeşitleri, taze balıklar ve canlı müzik eşliğinde harika bir akşam yemeği keyfi sunar. Samimi ve rahatlatıcı ortamıyla akşamın tadını çıkarırsınız.' },
      { name: 'Milos Restaurant', description: 'Ege mutfağının en lezzetli örneklerini sunan Milos, levrek marin ve fesleğenli mezgit gibi özel lezzetleriyle akşam yemekleri için tercih edilir.' },
      { name: 'Bekri Sığacık', description: 'Samimi ortamı ve uygun fiyatlarıyla dikkat çeken Bekri, taze balıkları, mezeleri ve kahvaltısıyla ünlü. Akşam yemeği için ekonomik bir seçenek.' }
    ],
  },
  {
    id: 'd10',
    slug: 'foca',
    name: 'Foça',
    emoji: '🌊',
    image: '/images/gizli-koylar.jpg',
    intro: 'Antik Phokaia\'nın izlerini taşıyan, deniz foklarının yaşadığı, taş evleri ve balıkçı limanıyla masalsı bir sahil kasabası olan Foça, Ege\'nin en romantik duraklarından biridir.',
    activities: 'Deniz foklarını gözlemleyin, antik Phokaia kalıntılarını keşfedin, Siren Kayalıkları\'na tekne turu yapın, Foça Kalesi\'ni görün, taş evler arasında yürüyüş yapın, Yeni Foça\'da gün batımı izleyin ve Aşk Kayalıkları\'nda fotoğraf çekin.',
    breakfast: [
      { name: 'Firuze Kahve', description: 'Eski Foça\'nın kalbinde, taş evlerin arasında yer alan Firuze, mürdüm eriği reçeli ve fırından yeni çıkmış sıcak pişisiyle samimi bir kahvaltı sunar.' },
      { name: 'Ağaçlı Ev', description: 'Kozbeyli Köyü\'nde dev ağaçların gölgesinde kuş sesleri arasında kahvaltı yapabileceğiniz doğal bir mekan. Köy fırınından çıkan sıcak ekmek ve sızma zeytinyağıyla kahvaltının tadına varırsınız.' },
      { name: 'Şakir\'in Dibek Kahvesi', description: 'Kozbeyli Köyü meydanında yer alan bu tarihi kahveci, dibek kahvesiyle ünlü olmasının yanında kahvaltı ve gözlemeleriyle de dikkat çeker. Zamanda yolculuk hissiyatı sunar.' }
    ],
    lunch: [
      { name: 'Fokai Balık Restoran', description: 'Eski Foça\'nın en köklü balık restoranlarından biri olan Fokai, denize nazır sofraları, marine edilmiş ahtapot ızgarası ve çıtır deniz börülcesiyle öğle yemeği için idealdir.' },
      { name: 'Sahil Lokantası', description: 'Deniz kenarında yer alan bu samimi lokanta, yoğurtlu semizotu, turp otu, patlıcan salatası, fava ve taze balıklarıyla Ege lezzetleri sunar.' },
      { name: 'Ege Restaurant', description: 'Yeni Foça\'da bulunan Ege Restaurant, taze balık ve meze çeşitleriyle yerel halkın tercih ettiği bir mekan. Foça yoğurduyla hazırlanan köpoğlu mezesi mutlaka denenmeli.' }
    ],
    dinner: [
      { name: 'Plage Soleil', description: 'Palmiye teması ve modern tasarımıyla dikkat çeken Plage Soleil, balık ve kırmızı et seçenekleri, canlı müzik ve DJ performanslarıyla akşam yemekleri için eğlenceli bir adres.' },
      { name: 'Aheste Volkan\'ın Yeri', description: 'Mavili beyazlı dekorasyonu ve samimi atmosferiyle öne çıkan Aheste, barbunu, midyesi ve kalamarıyla Foça\'nın en sevilen balıkçılarından biridir.' },
      { name: 'Kavala Cafe Wine House', description: 'Foça sahilinin ucunda yer alan Kavala, özel seçim yerli ve ithal şarapların yanı sıra el yapımı tatlılarıyla romantik bir akşam yemeği sunar.' }
    ],
  },
  {
    id: 'd11',
    slug: 'bergama',
    name: 'Bergama',
    emoji: '🏛',
    image: '/images/agora-izmir.jpg',
    intro: 'UNESCO Dünya Mirası Listesi\'ndeki Bergama Akropol\'ü, Asklepion\'u ve zengin tarihi mirasıyla İzmir\'in en önemli kültür turizmi merkezlerinden biridir. Bergama tulumu ve kestane şekeriyle de meşhurdur.',
    activities: 'Bergama Akropol\'ü ziyaret edin, Asklepion\'da antik sağlık merkezini keşfedin, Kızıl Avlu\'yu görün, Bergama Arkeoloji Müzesi\'ni gezin, tarihi çarşıda tulum peyniri alın, Zeus Sunagi kalıntılarını görün ve teleferikle Akropol\'e çıkın.',
    breakfast: [
      { name: 'Yenigün Kahvaltı Salonu', description: '70 yılı aşkın süredir hizmet veren bu tarihi salon, Bergama tulumu, keçi sütünden kaymak, bal, tereyağı ve köy yumurtasıyla geleneksel bir kahvaltı sunar. 90 yaşındaki Eşref Amca\'nın hazırladığı kahvaltılıklar unutulmazdır.' },
      { name: 'Akasya Park Coffee', description: 'Bergama merkezde hizmet veren Akasya Park, serpme kahvaltısı ve taze kahve çeşitleriyle güne keyifli bir başlangıç sunar.' },
      { name: 'Bobby Coffee', description: 'Bergama\'da kahve molası için ideal olan Bobby Coffee, kahvaltı tabakları ve özel kahve çeşitleriyle öne çıkan butik bir kafedir.' }
    ],
    lunch: [
      { name: 'Çiçeksever Kebap Salonu', description: '80 senelik tarihiyle Bergama\'nın eskimeyen lezzet adresi. Bergama köfte ve piyaz ikilisi meşhurdur. Ufak ve salaş mekan, en lezzetli tatların böyle yerlerden çıktığını kanıtlar.' },
      { name: 'Bergama Köftecileri', description: 'Bergama çarşısı içindeki köfteciler, ızgara köfte, piyaz ve salata ikilisiyle öğle yemeği için ekonomik ve lezzetli seçenekler sunar.' },
      { name: 'Bergama Ev Yemekleri', description: 'Çarşı içindeki lokantalar, günlük değişen menüsüyle ev yemekleri sunar. Zeytinyağlılar ve et yemekleri bulunabilir.' }
    ],
    dinner: [
      { name: 'Bergama Akropolis Restoran', description: 'Tarihi Domuz Alanı\'nda, Bergama\'nın en güzel manzarasına sahip olan bu restoran, çığırtma, sıcak ot kavurması, mezeler ve ızgara çeşitleri sunar.' },
      { name: 'Casa Regina', description: 'Aşağıkırıklar Köyü\'nde kurumsal hayatı bırakıp yerleşen bir çiftin evinde hizmet veren Casa Regina, İtalyan mutfağından pizza ve makarna sunar. Bahçelerinde yetiştirdikleri ürünlerle hazırlıyorlar. Rezervasyon şarttır.' },
      { name: 'Bergama Meyhaneleri', description: 'Bergama çarşısındaki meyhaneler, meze çeşitleri, rakı balık keyfi ve Bergama tulumuyle akşam yemekleri için ekonomik seçenekler sunar.' }
    ],
  },
  {
    id: 'd12',
    slug: 'selcuk',
    name: 'Selçuk',
    emoji: '🏛',
    image: '/images/ephesus-beach-listing.jpg',
    intro: 'Efes Antik Kenti, Meryem Ana Evi, St. Jean Bazilikası ve Şirince Köyü gibi dünya çapında tanınan tarihi ve kültürel zenginliklere ev sahipliği yapan Selçuk, İzmir\'in en çok ziyaret edilen ilçelerinden biridir.',
    activities: 'Efes Antik Kenti\'nde tarihi yolculuk yapın, Meryem Ana Evi\'ni ziyaret edin, Şirince\'de şarap tadımı yapın, St. Jean Bazilikası\'nı görün, Pamucak Plajı\'nda denize girin, Selçuk Efes Müzesi\'ni gezin ve Artemis Tapınağı kalıntılarını keşfedin.',
    breakfast: [
      { name: 'Şirince Panorama Restaurant', description: 'Şirince\'nin eşsiz manzarası eşliğinde serpme kahvaltı sunan Panorama, ev yapımı reçelleri, köy peyniri ve taze ekmekleriyle güne keyifli bir başlangıç yapmanızı sağlar.' },
      { name: 'Köylüm Kahvaltı', description: 'Seferihisar yolu üzerinde organik ürünlerle mükellef köy kahvaltıları sunan Köylüm, Selçuk bölgesinin popüler kahvaltı duraklarından biridir.' },
      { name: 'Selçuk Kahvaltı Evi', description: 'Efes\'e yürüme mesafesindeki bu kahvaltı evi, turistlere yönelik serpme kahvaltı ve geleneksel Ege kahvaltısı sunar.' }
    ],
    lunch: [
      { name: 'Selçuk Köftecileri', description: 'Selçuk merkezdeki köfteciler, ızgara köfte, piyaz ve salata ikilisiyle Efes ziyaretinden sonra hızlı ve ekonomik bir öğle yemeği sunar.' },
      { name: 'Şirince Restoranları', description: 'Şirince\'de ot kavurması, gözleme, köy tavuğu ve zeytinyağlıları sunan restoranlar, öğle yemeği için otantik bir seçenek.' },
      { name: 'Pamucak Plajı Restoranları', description: 'Pamucak sahilindeki restoranlar, balık ve ızgara çeşitleriyle öğle yemeği için plaj keyfiyle birleşen bir deneyim sunar.' }
    ],
    dinner: [
      { name: 'Selçuk Balıkçıları', description: 'Selçuk iskele civarındaki balıkçılar, taze balık, meze çeşitleri ve deniz manzarasıyla akşam yemeği için idealdir.' },
      { name: 'Şirince Şarap Evi', description: 'Şirince\'de ev yapımı şaraplar eşliğinde akşam yemeği yapabileceğiniz şarap evleri, romantik bir atmosfer sunar.' },
      { name: 'Efes Konakları Restoran', description: 'Tarihi konak atmosferinde Ege mutfağından lezzetler sunan bu restoran, özel günlerde akşam yemeği için tercih edilir.' }
    ],
  },
  {
    id: 'd13',
    slug: 'dikili',
    name: 'Dikili',
    emoji: '🌊',
    image: '/images/gizli-koylar.jpg',
    intro: 'Tarihi Candarlı Kalesi, termal suları, şifalı çamur banyoları, bozulmamış koyları ve zeytinciliğiyle Dikili, İzmir\'in kuzeyindeki huzurlu sahil ilçelerinden biridir.',
    activities: 'Candarlı Kalesi\'ni ziyaret edin, Nebiler Gölü\'nde piknik yapın, Garip Koyu\'nda yüzün, termal tesislerde şifalı çamur banyosu yapın, Çandarlı sahilinde yürüyüş yapın, zeytinyağı üreticilerini ziyaret edin ve tekne turuyla saklı koyları keşfedin.',
    breakfast: [
      { name: 'Dikili Kahvaltı Bahçeleri', description: 'Dikili\'nin yeşillikler içindeki kahvaltı bahçeleri, organik ürünleri, köy yumurtası ve ev yapımı reçelleriyle huzurlu bir kahvaltı deneyimi sunar.' },
      { name: 'Çandarlı Sahil Kahvaltıcıları', description: 'Çandarlı sahilinde deniz manzaralı küçük kafeler, gevrek, boyoz ve serpme kahvaltıyla güne başlamanızı sağlar.' },
      { name: 'Nebiler Gölü Piknik Alanı', description: 'Göl kenarında kahvaltı yapabileceğiniz piknik alanları, mangal imkanı ve doğa manzarasıyla köy kahvaltısı için idealdir.' }
    ],
    lunch: [
      { name: 'Dikili Balıkçıları', description: 'Sahil boyunca sıralanan balıkçılar, taze balık ve mezeleriyle öğle yemeği için ekonomik seçenekler sunar.' },
      { name: 'Çandarlı Lokantaları', description: 'Çandarlı merkezdeki lokantalar, ev yemekleri ve ızgara çeşitleriyle pratik bir öğle yemeği sunar.' },
      { name: 'Dikili Et Lokantaları', description: 'Izgara et ve köfte çeşitleriyle doyurucu bir öğle yemeği için tercih edilebilecek adresler.' }
    ],
    dinner: [
      { name: 'Deniz Kenarı Balıkçılar', description: 'Dikili ve Çandarlı sahilindeki balıkçılar, taze balık, meze çeşitleri ve rakı balık keyfiyle akşam yemeği için idealdir.' },
      { name: 'Dikili Meyhaneleri', description: 'Sahil boyunca yer alan meyhaneler, meze çeşitleri ve canlı müzikle akşam yemekleri için ekonomik seçenekler sunar.' },
      { name: 'Termal Otel Restoranları', description: 'Dikili\'deki termal otellerin restoranları, zengin menüleri ve şık ortamlarıyla akşam yemeği için tercih edilebilir.' }
    ],
  },
  {
    id: 'd14',
    slug: 'karaburun',
    name: 'Karaburun',
    emoji: '🌊',
    image: '/images/cesme-marina.jpg',
    intro: 'İzmir\'in en batı ucunda, Ege Denizi\'nin en temiz sularına sahip Karaburun yarımadası, dalış noktaları, bozulmamış koyları, zeytinciliği ve lavantalarıyla doğa severlerin cennetidir.',
    activities: 'Ildırı Antik Kenti\'ni keşfedin, Karaburun\'da dalış yapın, Mordoğan\'da tekne turuna katılın, Sarpıncık Burnu\'nda yürüyüş yapın, lavanta tarlalarında fotoğraf çekin, Balıklıova\'da yüzün ve köy pazarlarında organik ürünler alın.',
    breakfast: [
      { name: 'Melisa Kahvaltı Evi', description: 'Amberseki Köyü\'nde yer alan Melisa, Karaburun\'un yöresel tatlarını sunan kahvaltı evi. Organik ürünler, köy peyniri ve ev yapımı reçelleriyle doyurucu bir kahvaltı sunar.' },
      { name: 'Zeytindibi Kahvaltı', description: 'Zeytin ağaçları arasında kahvaltı yapabileceğiniz bu mekan, zeytinyağlı ürünleri ve taze otlarıyla öne çıkar.' },
      { name: 'Mordoğan Kahvaltı Mekanları', description: 'Mordoğan merkezdeki küçük kafeler, gevrek, boyoz ve serpme kahvaltıyla güne başlamanızı sağlar.' }
    ],
    lunch: [
      { name: 'Problem\'in Yeri', description: 'Mordoğan\'da Ödemiş köftesi ve çorbalarıyla ünlü olan Problem\'in Yeri, öğle yemeği için ekonomik ve lezzetli bir adres.' },
      { name: 'Ildırı İskele Balıkçısı', description: 'Ildırı iskelesinde gün batımında balık keyfi yapabileceğiniz samimi bir balıkçı. Güneşi batırırken yemek yemek en keyiflisidir.' },
      { name: 'Garip\'in Yeri Balıklıova', description: 'Balıklıova\'da taze balık ve mezeler sunan Garip\'in Yeri, manzarası ve lezzetleriyle öğle yemeği için idealdir.' }
    ],
    dinner: [
      { name: 'Kalyon Restaurant', description: 'Karaburun İskelesinde yer alan Kalyon, balıkseverlerin vazgeçemediği adreslerden biri. Taze balık ve mezeleriyle akşam yemekleri için idealdir.' },
      { name: 'Albatros Balık Restoran', description: 'Karaburun merkezde hizmet veren Albatros, deniz manzaralı terası ve taze deniz ürünleriyle akşam yemeği için güvenilir bir seçenek.' },
      { name: 'Taşada Otel Restoran', description: 'Taze balık, et ve meze çeşitleriyle iskele manzaralı keyifli bir akşam yemeği sunan butik otel restoranı.' }
    ],
  },
  {
    id: 'd15',
    slug: 'menderes',
    name: 'Menderes',
    emoji: '🌊',
    image: '/images/ephesus-beach-listing.jpg',
    intro: 'Gümüldür, Özdere ve Şaşal boğazı gibi tatil beldelerini barındıran Menderes, satsuma mandalinası, plajları, antik kentleri ve doğal güzellikleriyle İzmir\'in tatil cennetlerinden biridir.',
    activities: 'Gümüldür Plajı\'nda yüzün, Klaros Antik Kenti\'ni keşfedin, Özdere\'de deniz kenarında yürüyüş yapın, satsuma mandalina bahçelerini gezin, Kargacık Koyu\'nda gizli cenneti bulun ve Kolophon Antik Kenti\'ni görün.',
    breakfast: [
      { name: 'Gümüldür Sahil Kahvaltıcıları', description: 'Gümüldür sahilindeki kafe ve restoranlar, deniz manzarası eşliğinde gevrek, boyoz ve serpme kahvaltı sunar.' },
      { name: 'Menderes Köy Kahvaltıları', description: 'Şaşal Boğazı civarındaki köy kahvaltı mekanları, organik ürünler ve huzurlu doğa ortamıyla kahvaltı deneyimi sunar.' },
      { name: 'Özdere Kahvaltı Kafeleri', description: 'Özdere sahilindeki butik kafeler, taze kahve ve hafif kahvaltı seçenekleriyle güne başlamanızı sağlar.' }
    ],
    lunch: [
      { name: 'Gümüldür Balıkçıları', description: 'Sahil boyunca sıralanan balıkçılar, taze balık ve mezeleriyle öğle yemeği için ekonomik seçenekler sunar.' },
      { name: 'Özdere Restoranları', description: 'Özdere sahilindeki restoranlar, ızgara çeşitleri, pide ve zeytinyağlılarla öğle yemeği için idealdir.' },
      { name: 'Develi Restaurant', description: 'Menderes yolu üzerindeki Develi, kebap ve ızgara çeşitleriyle öğle yemeği için tercih edilen bir zincir restoran.' }
    ],
    dinner: [
      { name: 'Gümüldür Marina Restoranları', description: 'Gümüldür marinasında yer alan restoranlar, deniz manzaralı terasları ve taze balıklarıyla akşam yemeği için romantik bir atmosfer sunar.' },
      { name: 'Özdere Sahil Restoranları', description: 'Sahil boyunca sıralanan restoranlar, meze çeşitleri, rakı balık keyfi ve canlı müzikle akşam yemekleri için idealdir.' },
      { name: 'Menderes Et Lokantaları', description: 'Yol üzerindeki et lokantaları, ızgara ve kebap çeşitleriyle akşam yemeği için ekonomik seçenekler sunar.' }
    ],
  },
  {
    id: 'd16',
    slug: 'guzelbahce',
    name: 'Güzelbahçe',
    emoji: '🌊',
    image: '/images/gizli-koylar.jpg',
    intro: 'Urla yolu üzerinde, zeytinlikler ve bağlar içinde yer alan Güzelbahçe, sakin atmosferi, denizi, piknik alanları ve köy kahvaltılarıyla hafta sonu kaçamakları için ideal bir ilçedir.',
    activities: 'Yakakent Plajı\'nda yüzün, Güzelbahçe sahilinde yürüyüş yapın, piknik alanlarında mangal keyfi yapın, köy pazarlarında organik ürünler alın, zeytinlikler arasında yürüyüş yapın ve bağ evlerini ziyaret edin.',
    breakfast: [
      { name: 'Aktuğ Köy Kahvaltısı', description: 'Organik ürünleri, köy yumurtası, taze peynir ve ev yapımı reçelleriyle Güzelbahçe\'nin en popüler kahvaltı mekanlarından biri.' },
      { name: 'Nobili Park Güzelbahçe', description: 'Geniş park alanı içinde serpme kahvaltı sunan Nobili Park, aileler için ideal bir kahvaltı adresidir.' },
      { name: 'Güzelbahçe Kahvaltı Bahçeleri', description: 'İlçe merkezindeki kahvaltı bahçeleri, zeytin ağaçları arasında huzurlu bir kahvaltı deneyimi sunar.' }
    ],
    lunch: [
      { name: 'Güzelbahçe Balıkçıları', description: 'Sahil boyunca yer alan balıkçılar, taze balık ve mezeleriyle öğle yemeği için idealdir.' },
      { name: 'Yakakent Restoranları', description: 'Yakakent sahilindeki restoranlar, ızgara çeşitleri ve zeytinyağlılarıyla öğle yemeği için pratik seçenekler sunar.' },
      { name: 'Güzelbahçe Ev Yemekleri', description: 'İlçe merkezindeki lokantalar, günlük ev yemekleri ve zeytinyağlılarıyla ekonomik öğle yemeği sunar.' }
    ],
    dinner: [
      { name: 'Güzelbahçe Meyhaneleri', description: 'Sahil boyunca yer alan meyhaneler, meze çeşitleri ve rakı balık keyfiyle akşam yemekleri için idealdir.' },
      { name: 'Urla Yolu Restoranları', description: 'Urla yolu üzerindeki restoranlar, ızgara et ve balık çeşitleriyle akşam yemeği için seçenekler sunar.' },
      { name: 'Seferihisar Yolu Balıkçıları', description: 'Seferihisar yolu üzerindeki balıkçılar, taze balık ve mezeleriyle akşam yemeği için ekonomik seçenekler sunar.' }
    ],
  },
  {
    id: 'd17',
    slug: 'balcova',
    name: 'Balçova',
    emoji: '🏙',
    image: '/images/tarihi-asansor.jpg',
    intro: 'Teleferiği, termal tesisleri, alışveriş merkezleri ve üniversite kampüsleriyle Balçova, İzmir\'in hem eğlence hem de sağlık turizmi açısından önemli bir ilçesidir.',
    activities: 'Teleferikle zirveye çıkın, İzmir Doğal Yaşam Parkı\'nı gezin, Agora AVM\'de alışveriş yapın, İzmir Teleferik ve Tesisleri\'nde piknik yapın, Balçova Termal Tesisleri\'nde şifa arayın ve Kampüslerde yürüyüş yapın.',
    breakfast: [
      { name: 'Nobili Park Balçova', description: 'Geniş park alanı içinde serpme kahvaltı sunan Nobili Park, aileler için ideal bir kahvaltı adresidir. Taze ürünleri ve huzurlu ortamıyla öne çıkar.' },
      { name: 'Balçova Kahvaltı Salonları', description: 'İlçe merkezindeki kahvaltı salonları, gevrek, boyoz ve serpme kahvaltıyla ekonomik seçenekler sunar.' },
      { name: 'Teleferik Kafe', description: 'Teleferik zirvesindeki kafe, manzaralı kahvaltı seçenekleriyle güne keyifli bir başlangıç sunar.' }
    ],
    lunch: [
      { name: 'Agora AVM Yemek Katı', description: 'Agora AVM\'nin yemek katında, fast food, ev yemekleri ve uluslararası mutfaklardan geniş bir seçenek bulunur.' },
      { name: 'Balçova Lokantaları', description: 'İlçe merkezindeki lokantalar, ev yemekleri, ızgara çeşitleri ve ekonomik öğle yemeği seçenekleri sunar.' },
      { name: 'Üniversite Kafeteryaları', description: 'Balçova\'daki üniversite kafeteryaları, öğrenci dostu fiyatlarıyla ekonomik öğle yemeği imkanı sunar.' }
    ],
    dinner: [
      { name: 'Balçova Meyhaneleri', description: 'İlçe merkezindeki meyhaneler, meze çeşitleri ve rakı balık keyfiyle akşam yemekleri için seçenek sunar.' },
      { name: 'Agora AVM Restoranları', description: 'AVM içindeki restoranlar, uluslararası mutfaklardan seçeneklerle akşam yemeği için pratik bir alternatif.' },
      { name: 'Balçova Balıkçıları', description: 'İlçedeki balık restoranları, taze balık ve mezeleriyle akşam yemeği için seçenekler sunar.' }
    ],
  },
  {
    id: 'd18',
    slug: 'narlidere',
    name: 'Narlıdere',
    emoji: '🏙',
    image: '/images/bostanli-sunset.jpg',
    intro: 'İzmir\'in en yeşil ilçelerinden biri olan Narlıdere, üniversite kampüsleri, piknik alanları, termal tesisleri ve deniz kenarıyla hem eğitim hem de doğa turizmi için idealdir.',
    activities: 'İnciraltı Kent Ormanı\'nda piknik yapın, deniz kenarında yürüyüş yapın, piknik alanlarında mangal keyfi yapın, üniversite kampüslerini gezin ve Narlıdere sahilinde gün batımı izleyin.',
    breakfast: [
      { name: 'İnciraltı Kahvaltı Mekanları', description: 'İnciraltı civarındaki kahvaltı mekanları, serpme kahvaltı ve köy ürünleriyle güne başlamanızı sağlar.' },
      { name: 'Narlıdere Köy Kahvaltıları', description: 'İlçe sınırları içindeki köy kahvaltı mekanları, organik ürünler ve huzurlu ortamıyla kahvaltı deneyimi sunar.' },
      { name: 'Sahil Kafeleri', description: 'Narlıdere sahilindeki kafeler, gevrek ve çay eşliğinde pratik bir kahvaltı seçeneği sunar.' }
    ],
    lunch: [
      { name: 'Narlıdere Lokantaları', description: 'İlçe merkezindeki lokantalar, ev yemekleri ve ızgara çeşitleriyle pratik öğle yemeği sunar.' },
      { name: 'İnciraltı Restoranları', description: 'İnciraltı civarındaki restoranlar, balık ve et çeşitleriyle öğle yemeği için seçenekler sunar.' },
      { name: 'Üniversite Kafeteryaları', description: 'DEÜ kafeteryaları, öğrenci dostu fiyatlarıyla ekonomik öğle yemeği imkanı sunar.' }
    ],
    dinner: [
      { name: 'Narlıdere Balıkçıları', description: 'Sahil boyunca yer alan balıkçılar, taze balık ve mezeleriyle akşam yemeği için idealdir.' },
      { name: 'Narlıdere Et Lokantaları', description: 'Izgara ve kebap çeşitleri sunan et lokantaları, akşam yemeği için ekonomik seçenekler sunar.' },
      { name: 'İnciraltı Meyhaneleri', description: 'İnciraltı civarındaki meyhaneler, meze çeşitleriyle akşam yemekleri için seçenek sunar.' }
    ],
  },
  {
    id: 'd19',
    slug: 'gaziemir',
    name: 'Gaziemir',
    emoji: '🏙',
    image: '/images/kulturpark-izmir.jpg',
    intro: 'İzmir Adnan Menderes Havalimanı\'na ev sahipliği yapan Gaziemir, fuar alanları, alışveriş merkezleri ve iş dünyasının merkezi olarak önemli bir ilçedir.',
    activities: 'İzmir Fuar Alanı\'nda etkinliklere katılın, Gaziemir Outlet Center\'da alışveriş yapın, İzmir Havacılık Müzesi\'ni ziyaret edin, Sarnıç Göleti\'nde yürüyüş yapın ve Sarnıç Pazarı\'nda alışveriş yapın.',
    breakfast: [
      { name: 'Gaziemir Kahvaltı Salonları', description: 'İlçe merkezindeki kahvaltı salonları, serpme kahvaltı ve gevrek-boyoz seçenekleriyle güne başlamanızı sağlar.' },
      { name: 'Sarnıç Kafe ve Pastaneler', description: 'Sarnıç bölgesindeki kafeler, kruvasan, sandviç ve kahve seçenekleriyle pratik kahvaltı imkanı sunar.' },
      { name: 'Fuar Alanı Kafeteryaları', description: 'Fuar alanı civarındaki kafeteryalar, hızlı kahvaltı seçenekleriyle pratik bir alternatif sunar.' }
    ],
    lunch: [
      { name: 'Gaziemir Lokantaları', description: 'İlçe merkezindeki lokantalar, ev yemekleri ve ızgara çeşitleriyle pratik öğle yemeği sunar.' },
      { name: 'Outlet Center Yemek Katı', description: 'Outlet Center içindeki yemek katı, fast food ve restoran seçenekleriyle öğle yemeği için pratik bir alternatif.' },
      { name: 'Sarnıç Restoranları', description: 'Sarnıç bölgesindeki restoranlar, pide, lahmacun ve ızgara çeşitleriyle ekonomik öğle yemeği sunar.' }
    ],
    dinner: [
      { name: 'Gaziemir Meyhaneleri', description: 'İlçe merkezindeki meyhaneler, meze çeşitleri ve rakı balık keyfiyle akşam yemekleri için seçenek sunar.' },
      { name: 'Sarnıç Balıkçıları', description: 'Sarnıç bölgesindeki balıkçılar, taze balık ve mezeleriyle akşam yemeği için seçenekler sunar.' },
      { name: 'Gaziemir Et Lokantaları', description: 'Izgara ve kebap çeşitleri sunan et lokantaları, akşam yemeği için ekonomik seçenekler sunar.' }
    ],
  },
  {
    id: 'd20',
    slug: 'bayrakli',
    name: 'Bayraklı',
    emoji: '🏙',
    image: '/images/karsiyaka-bostanli.jpg',
    intro: 'İzmir\'in hızla gelişen iş ve ticaret merkezi Bayraklı, gökdelenleri, modern binaları, alışveriş merkezleri ve sahil bandıyla şehrin modern yüzünü temsil eder.',
    activities: 'Bayraklı sahilinde yürüyüş yapın, İzmir\'e panoramik manzaralı tepelere çıkın, modern alışveriş merkezlerini gezin, iş merkezlerindeki kafelerde soluklanın ve spor tesislerinde aktivite yapın.',
    breakfast: [
      { name: 'Bayraklı Kahvaltı Salonları', description: 'İlçe merkezindeki kahvaltı salonları, serpme kahvaltı ve gevrek-boyoz seçenekleriyle güne başlamanızı sağlar.' },
      { name: 'Smyrna Meydanı Kafeleri', description: 'Smyrna Meydanı civarındaki kafeler, modern kahvaltı tabakları ve kahve seçenekleriyle pratik kahvaltı imkanı sunar.' },
      { name: 'Bayraklı Pastaneleri', description: 'İlçedeki pastaneler, simit, poğaça ve kahve eşliğinde hızlı bir kahvaltı seçeneği sunar.' }
    ],
    lunch: [
      { name: 'Bayraklı Lokantaları', description: 'İş merkezleri civarındaki lokantalar, ev yemekleri ve ızgara çeşitleriyle pratik öğle yemeği sunar.' },
      { name: 'Avm Restoranları', description: 'İlçedeki alışveriş merkezlerinin restoranları, uluslararası mutfaklardan seçeneklerle öğle yemeği için pratik bir alternatif.' },
      { name: 'Sokak Lezzetleri', description: 'İş merkezleri civarındaki sokak lezzeti satıcıları, dürüm, döner ve tost gibi hızlı öğle yemeği seçenekleri sunar.' }
    ],
    dinner: [
      { name: 'Bayraklı Balıkçıları', description: 'Sahil boyunca yer alan balıkçılar, taze balık ve mezeleriyle akşam yemeği için idealdir.' },
      { name: 'Bayraklı Et Lokantaları', description: 'Izgara ve kebap çeşitleri sunan et lokantaları, akşam yemeği için seçenekler sunar.' },
      { name: 'Mansuroğlu Meyhaneleri', description: 'Mansuroğlu bölgesindeki meyhaneler, meze çeşitleriyle akşam yemekleri için seçenek sunar.' }
    ],
  },
  {
    id: 'd21',
    slug: 'aliaga',
    name: 'Aliağa',
    emoji: '🌊',
    image: '/images/gizli-koylar.jpg',
    intro: 'İzmir\'in kuzeyindeki endüstriyel merkez Aliağa, antik kentleri, doğal güzellikleri, petrol rafinerisi ve limanıyla hem tarih hem de sanayi turizmi açısından önemli bir ilçedir.',
    activities: 'Allianoi Antik Kenti\'ni keşfedin, Yortanlı Baraj Gölü\'nde piknik yapın, Ağaçlı Tabiat Parkı\'nda yürüyüş yapın, Aliağa sahilinde gezinin, antik Myrina kalıntılarını görün ve termal tesislerde dinlenin.',
    breakfast: [
      { name: 'Aliağa Kahvaltı Salonları', description: 'İlçe merkezindeki kahvaltı salonları, serpme kahvaltı ve gevrek-boyoz seçenekleriyle güne başlamanızı sağlar.' },
      { name: 'Ağaçlı Tabiat Parkı Piknik Alanı', description: 'Doğa içinde kahvaltı yapabileceğiniz piknik alanları, mangal imkanı ve huzurlu ortamıyla aileler için idealdir.' },
      { name: 'Yumurtalık Köy Kahvaltıları', description: 'Köy kahvaltı mekanları, organik ürünler ve köy peyniriyle doyurucu bir kahvaltı deneyimi sunar.' }
    ],
    lunch: [
      { name: 'Aliağa Lokantaları', description: 'İlçe merkezindeki lokantalar, ev yemekleri ve ızgara çeşitleriyle pratik öğle yemeği sunar.' },
      { name: 'Sahil Restoranları', description: 'Aliağa sahilindeki restoranlar, balık ve et çeşitleriyle öğle yemeği için seçenekler sunar.' },
      { name: 'Ağaçlı Piknik Alanı', description: 'Tabiat parkı içinde mangal ve piknik yaparak öğle yemeği keyfi yapabilirsiniz.' }
    ],
    dinner: [
      { name: 'Aliağa Balıkçıları', description: 'Sahil boyunca yer alan balıkçılar, taze balık ve mezeleriyle akşam yemeği için idealdir.' },
      { name: 'Aliağa Et Lokantaları', description: 'Izgara ve kebap çeşitleri sunan et lokantaları, akşam yemeği için ekonomik seçenekler sunar.' },
      { name: 'İlçe Merkezi Restoranları', description: 'Aliağa merkezdeki restoranlar, çeşitli mutfaklardan seçeneklerle akşam yemeği imkanı sunar.' }
    ],
  },
  {
    id: 'd22',
    slug: 'menemen',
    name: 'Menemen',
    emoji: '🌾',
    image: '/images/agora-izmir.jpg',
    intro: 'İzmir\'in en eski yerleşim yerlerinden biri olan Menemen, tarımı, tarım pazarı, termal tesisleri ve tarihi dokusuyla önemli bir ilçedir. Menemen yemeği de adını bu ilçeden alır.',
    activities: 'Menemen Tarım Pazarı\'nda organik ürünler alın, termal tesislerde dinlenin, Kara gölet\'te piknik yapın, Menemen sahilinde yürüyüş yapın, tarihi camileri görün ve Yakacık Çamlığı\'nda doğa yürüyüşü yapın.',
    breakfast: [
      { name: 'Meşhur Menemenci Akın', description: 'Adını ilçeden alan menemen yemeğinin en lezzetli adreslerinden biri. Tereyağında sahanda yumurta, sucuklu menemen ve sıcak ekmekle doyurucu bir kahvaltı sunar.' },
      { name: 'Menemen Kahvaltı Salonları', description: 'İlçe merkezindeki kahvaltı salonları, gevrek, boyoz ve serpme kahvaltıyla güne başlamanızı sağlar.' },
      { name: 'Köy Kahvaltıları', description: 'Menemen köylerindeki kahvaltı mekanları, organik ürünler ve huzurlu ortamıyla kahvaltı deneyimi sunar.' }
    ],
    lunch: [
      { name: 'Menemen Lokantaları', description: 'İlçe merkezindeki lokantalar, ev yemekleri ve ızgara çeşitleriyle pratik öğle yemeği sunar.' },
      { name: 'Sahil Restoranları', description: 'Menemen sahilindeki restoranlar, balık ve et çeşitleriyle öğle yemeği için seçenekler sunar.' },
      { name: 'Tarım Pazarı Civarı Lokantalar', description: 'Pazar civarındaki lokantalar, taze ürünlerle hazırlanan yemeklerle öğle yemeği sunar.' }
    ],
    dinner: [
      { name: 'Menemen Balıkçıları', description: 'Sahil boyunca yer alan balıkçılar, taze balık ve mezeleriyle akşam yemeği için idealdir.' },
      { name: 'Menemen Et Lokantaları', description: 'Izgara ve kebap çeşitleri sunan et lokantaları, akşam yemeği için ekonomik seçenekler sunar.' },
      { name: 'İlçe Merkezi Meyhaneleri', description: 'Menemen merkezdeki meyhaneler, meze çeşitleriyle akşam yemekleri için seçenek sunar.' }
    ],
  },
  {
    id: 'd23',
    slug: 'kemalpasa',
    name: 'Kemalpaşa',
    emoji: '🏛',
    image: '/images/kulturpark-izmir.jpg',
    intro: 'İzmir\'e sadece 30 km mesafedeki Kemalpaşa, Yamanlar Dağı, ormanları, piknik alanları, peyniri ve tatlısıyla doğa severlerin ve lezzet tutkunlarının uğrak noktasıdır.',
    activities: 'Yamanlar Dağı\'nda trekking yapın, Yamanlar Gölü\'nde piknik yapın, armutlu köylerinde doğa yürüyüşü yapın, Ulucami\'yi ziyaret edin, Ovacık\'ta kamp yapın ve Kemalpaşa peyniri alın.',
    breakfast: [
      { name: 'Kemalpaşa Peynircileri', description: 'Meşhur Kemalpaşa peyniriyle kahvaltı yapabileceğiniz peynir satış noktaları, taze peynir, bal ve kaymak ikilisiyle doyurucu bir kahvaltı sunar.' },
      { name: 'Yamanlar Gölü Kahvaltı Mekanları', description: 'Göl kenarındaki kahvaltı mekanları, manzaralı ve organik ürünlerle kahvaltı deneyimi sunar.' },
      { name: 'Köy Kahvaltıları', description: 'Yamanlar eteklerindeki köy kahvaltı mekanları, organik ürünler ve taze ekmekle huzurlu bir kahvaltı sunar.' }
    ],
    lunch: [
      { name: 'Kemalpaşa Lokantaları', description: 'İlçe merkezindeki lokantalar, ev yemekleri ve ızgara çeşitleriyle pratik öğle yemeği sunar.' },
      { name: 'Yamanlar Piknik Alanları', description: 'Orman içinde mangal ve piknik yaparak öğle yemeği keyfi yapabilirsiniz.' },
      { name: 'Köy Ev Yemekleri', description: 'Köylerdeki ev yemekleri lokantaları, günlük değişen menüsüyle öğle yemeği sunar.' }
    ],
    dinner: [
      { name: 'Kemalpaşa Et Lokantaları', description: 'Izgara ve kebap çeşitleri sunan et lokantaları, akşam yemeği için ekonomik seçenekler sunar.' },
      { name: 'Yamanlar Dağı Restoranları', description: 'Dağ eteklerindeki restoranlar, manzaralı terasları ve et yemekleriyle akşam yemeği için idealdir.' },
      { name: 'İlçe Merkezi Restoranları', description: 'Kemalpaşa merkezdeki restoranlar, çeşitli mutfaklardan seçeneklerle akşam yemeği imkanı sunar.' }
    ],
  },
  {
    id: 'd24',
    slug: 'tire',
    name: 'Tire',
    emoji: '🏛',
    image: '/images/agora-izmir.jpg',
    intro: 'Salı Pazarıyla ünlü, kapısız evleri, tarihi dokusu ve lezzetleriyle Tire, İzmir\'in en otantik ilçelerinden biridir. Tire köftesi ve cevizli sucuğu meşhurdur.',
    activities: 'Tire Salı Pazarı\'nda alışveriş yapın, Ödemiş yolu üzerindeki kapısız evleri görün, Tire Müzesi\'ni ziyaret edin, cevizli sucuk ve Tire köftesi tadın, Dümbüllü Dağı\'nda yürüyüş yapın ve tarihi camileri gezin.',
    breakfast: [
      { name: 'Dutlu Bahçe Kahvaltı Yeri', description: 'Tire\'nin doğayla iç içe atmosferinde yer alan Dutlu Bahçe, dut ağaçlarının gölgesinde ev yapımı reçeller, sıcak gözlemeler ve köy kahvaltısının tüm doğallığıyla huzurlu bir sabah sunar.' },
      { name: 'Tire Köy Kahvaltıları', description: 'Köy kahvaltı mekanları, organik ürünler, köy peyniri ve ev yapımı reçelleriyle doyurucu bir kahvaltı deneyimi sunar.' },
      { name: 'Salı Pazarı Kahvaltıcıları', description: 'Pazar günü açılan kahvaltıcılar, gevrek, boyoz ve serpme kahvaltıyla güne başlamanızı sağlar.' }
    ],
    lunch: [
      { name: 'Tire Köftecileri', description: 'Tire\'nin meşhur köftesi, piyaz ve salata ikilisiyle öğle yemeği için en ideal seçenek. Tarihi köfteciler ilçe merkezinde sıralanır.' },
      { name: 'Sucuklu Pideci Tire', description: 'Cevizli sucuklu pide Tire\'nin en özel lezzetlerinden biridir. Odun fırınında pişirilen pide öğle yemeği için idealdir.' },
      { name: 'Salı Pazarı Yemekçileri', description: 'Pazar içindeki yemekçiler, ev yemekleri ve ızgara çeşitleriyle ekonomik öğle yemeği sunar.' }
    ],
    dinner: [
      { name: 'Tire Et Lokantaları', description: 'Izgara ve kebap çeşitleri sunan et lokantaları, akşam yemeği için ekonomik seçenekler sunar.' },
      { name: 'Tire Meyhaneleri', description: 'İlçe merkezindeki meyhaneler, meze çeşitleri ve Tire köftesiyle akşam yemekleri için seçenek sunar.' },
      { name: 'Köy Restoranları', description: 'Köylerdeki restoranlar, organik ürünlerle hazırlanan yemeklerle akşam yemeği için huzurlu bir ortam sunar.' }
    ],
  },
  {
    id: 'd25',
    slug: 'odemis',
    name: 'Ödemiş',
    emoji: '🌾',
    image: '/images/urla-vineyards.jpg',
    intro: 'Bozdağlar\'ın eteklerinde, elması, kirazı, şarapları ve doğal güzellikleriyle Ödemiş, İzmir\'in en verimli ve en yeşil ilçelerinden biridir.',
    activities: 'Gölcük Tabiat Parkı\'nda göl kenarında yürüyüş yapın, Bozdağ\'da kış turizmi yapın, Birgi Köyü\'nde tarihi evleri görün, Ödemiş Müzesi\'ni ziyaret edin, çiçek seralarını gezin, elma bahçelerinde gezinin ve Çakırca\'da trekking yapın.',
    breakfast: [
      { name: 'Gölcük Tabiat Parkı Kahvaltı', description: 'Göl kenarında kahvaltı yapabileceğiniz işletmeler, organik ürünler ve manzaralı ortamıyla doyurucu bir kahvaltı sunar.' },
      { name: 'Birgi Köy Kahvaltısı', description: 'Tarihi Birgi Köyü\'nde organik ürünlerle kahvaltı yapabileceğiniz mekanlar, köy peyniri ve ev yapımı reçelleriyle huzurlu bir deneyim sunar.' },
      { name: 'Ödemiş Kahvaltı Salonları', description: 'İlçe merkezindeki kahvaltı salonları, gevrek, boyoz ve serpme kahvaltıyla güne başlamanızı sağlar.' }
    ],
    lunch: [
      { name: 'Ödemiş Köftecileri', description: 'Ödemiş\'in meşhur köftesi, piyaz ve salata ikilisiyle öğle yemeği için en ideal seçenek.' },
      { name: 'Birgi Ev Yemekleri', description: 'Tarihi Birgi Köyü\'nde ev yemekleri sunan lokantalar, zeytinyağlılar ve et yemekleriyle öğle yemeği için otantik bir seçenek.' },
      { name: 'Gölcük Piknik Alanı', description: 'Tabiat parkı içinde mangal ve piknik yaparak öğle yemeği keyfi yapabilirsiniz.' }
    ],
    dinner: [
      { name: 'Ödemiş Meyhaneleri', description: 'İlçe merkezindeki meyhaneler, meze çeşitleri ve Ödemiş köftesiyle akşam yemekleri için seçenek sunar.' },
      { name: 'Bozdağ Restoranları', description: 'Bozdağ eteklerindeki restoranlar, manzaralı terasları ve et yemekleriyle akşam yemeği için idealdir.' },
      { name: 'Ödemiş Şarap Evleri', description: 'Bölgedeki şarap evleri, ev yapımı şaraplar eşliğinde akşam yemeği sunar.' }
    ],
  },
  {
    id: 'd26',
    slug: 'torbali',
    name: 'Torbalı',
    emoji: '🌾',
    image: '/images/agora-izmir.jpg',
    intro: 'Antik Metropolis kentine ev sahipliği yapan Torbalı, tarımı, organize sanayi bölgesi, antik kentleri ve bağlarıyla İzmir\'in önemli ilçelerinden biridir.',
    activities: 'Metropolis Antik Kenti\'ni keşfedin, Lucien Arkas Bağları\'nda şarap tadımı yapın, Tire yolunda kapısız evleri görün, pazarlarda organik ürünler alın ve Torbalı sahilinde yürüyüş yapın.',
    breakfast: [
      { name: 'Torbalı Kahvaltı Salonları', description: 'İlçe merkezindeki kahvaltı salonları, serpme kahvaltı ve gevrek-boyoz seçenekleriyle güne başlamanızı sağlar.' },
      { name: 'Köy Kahvaltıları', description: 'Torbalı köylerindeki kahvaltı mekanları, organik ürünler ve huzurlu ortamıyla kahvaltı deneyimi sunar.' },
      { name: 'Lucien Arkas Bağları', description: 'Şarap tadımı ve kahvaltı bir arada sunan Lucien Arkas Bağları, bağlar arasında enfes bir kahvaltı deneyimi yaşatır.' }
    ],
    lunch: [
      { name: 'Torbalı Lokantaları', description: 'İlçe merkezindeki lokantalar, ev yemekleri ve ızgara çeşitleriyle pratik öğle yemeği sunar.' },
      { name: 'OSB Yemekleri', description: 'Organize sanayi bölgesindeki lokantalar, hızlı servisle öğle yemeği için ekonomik seçenekler sunar.' },
      { name: 'Lucien Arkas Restoran', description: 'Bağlar içindeki restoran, şarap eşliğinde öğle yemeği için özel bir adres.' }
    ],
    dinner: [
      { name: 'Torbalı Et Lokantaları', description: 'Izgara ve kebap çeşitleri sunan et lokantaları, akşam yemeği için ekonomik seçenekler sunar.' },
      { name: 'Lucien Arkas Şarap Evi', description: 'Kendi ürettikleri şaraplar eşliğinde akşam yemeği sunan Lucien Arkas, özel bir atmosfer sunar.' },
      { name: 'İlçe Merkezi Restoranları', description: 'Torbalı merkezdeki restoranlar, çeşitli mutfaklardan seçeneklerle akşam yemeği imkanı sunar.' }
    ],
  },
  {
    id: 'd27',
    slug: 'kinik',
    name: 'Kınık',
    emoji: '🌾',
    image: '/images/agora-izmir.jpg',
    intro: 'İzmir\'in kuzeydoğusundaki Kınık, tarımı, hayvancılığı, termal tesisleri ve Allianoi antik kentiyle önemli bir ilçedir.',
    activities: 'Allianoi Antik Kenti\'ni keşfedin, termal tesislerde şifa arayın, tarım pazarlarında organik ürünler alın, yaylalarda doğa yürüyüşü yapın ve köylerdeki geleneksel yaşamı gözlemleyin.',
    breakfast: [
      { name: 'Kınık Kahvaltı Salonları', description: 'İlçe merkezindeki kahvaltı salonları, serpme kahvaltı ve gevrek-boyoz seçenekleriyle güne başlamanızı sağlar.' },
      { name: 'Termal Otel Kahvaltıları', description: 'Termal otellerin kahvaltı salonları, zengin açık büfe seçenekleriyle doyurucu bir kahvaltı sunar.' },
      { name: 'Köy Kahvaltıları', description: 'Köy kahvaltı mekanları, organik ürünler ve huzurlu ortamıyla kahvaltı deneyimi sunar.' }
    ],
    lunch: [
      { name: 'Kınık Lokantaları', description: 'İlçe merkezindeki lokantalar, ev yemekleri ve ızgara çeşitleriyle pratik öğle yemeği sunar.' },
      { name: 'Termal Otel Restoranları', description: 'Termal otellerin restoranları, zengin menüleriyle öğle yemeği için pratik bir alternatif.' },
      { name: 'Pazar Yemekçileri', description: 'Pazar günleri açılan yemekçiler, ev yemekleriyle ekonomik öğle yemeği sunar.' }
    ],
    dinner: [
      { name: 'Kınık Et Lokantaları', description: 'Izgara ve kebap çeşitleri sunan et lokantaları, akşam yemeği için ekonomik seçenekler sunar.' },
      { name: 'Termal Otel Restoranları', description: 'Termal otellerin restoranları, şık ortamlarıyla akşam yemeği için seçenek sunar.' },
      { name: 'İlçe Merkezi Restoranları', description: 'Kınık merkezdeki restoranlar, çeşitli mutfaklardan seçeneklerle akşam yemeği imkanı sunar.' }
    ],
  },
  {
    id: 'd28',
    slug: 'kiraz',
    name: 'Kiraz',
    emoji: '🌾',
    image: '/images/urla-vineyards.jpg',
    intro: 'İzmir\'in doğusunda, kiraz bahçeleriyle ünlü Kiraz, tarımı, doğal güzellikleri ve yaylalarıyla huzurlu bir ilçedir.',
    activities: 'Kiraz bahçelerinde gezinin, Demircilik Yaylası\'nda piknik yapın, Kale Höyük\'te tarihi yolculuk yapın, yaylalarda yürüyüş yapın ve organik tarım ürünleri alın.',
    breakfast: [
      { name: 'Kiraz Kahvaltı Salonları', description: 'İlçe merkezindeki kahvaltı salonları, serpme kahvaltı ve gevrek-boyoz seçenekleriyle güne başlamanızı sağlar.' },
      { name: 'Yayla Kahvaltı Mekanları', description: 'Demircilik Yaylası\'ndaki kahvaltı mekanları, organik ürünler ve yayla havasıyla doyurucu bir kahvaltı sunar.' },
      { name: 'Köy Kahvaltıları', description: 'Kiraz köylerindeki kahvaltı mekanları, organik ürünler ve köy peyniriyle kahvaltı deneyimi sunar.' }
    ],
    lunch: [
      { name: 'Kiraz Lokantaları', description: 'İlçe merkezindeki lokantalar, ev yemekleri ve ızgara çeşitleriyle pratik öğle yemeği sunar.' },
      { name: 'Yayla Piknik Alanları', description: 'Yaylalarda mangal ve piknik yaparak öğle yemeği keyfi yapabilirsiniz.' },
      { name: 'Köy Ev Yemekleri', description: 'Köylerdeki ev yemekleri lokantaları, günlük menüsüyle öğle yemeği sunar.' }
    ],
    dinner: [
      { name: 'Kiraz Et Lokantaları', description: 'Izgara ve kebap çeşitleri sunan et lokantaları, akşam yemeği için ekonomik seçenekler sunar.' },
      { name: 'İlçe Merkezi Restoranları', description: 'Kiraz merkezdeki restoranlar, çeşitli mutfaklardan seçeneklerle akşam yemeği imkanı sunar.' },
      { name: 'Yayla Restoranları', description: 'Yaylalardaki restoranlar, manzaralı ortamlarıyla akşam yemeği için seçenek sunar.' }
    ],
  },
  {
    id: 'd29',
    slug: 'bayindir',
    name: 'Bayındır',
    emoji: '🌾',
    image: '/images/urla-vineyards.jpg',
    intro: 'İzmir\'in en eski yerleşim yerlerinden biri olan Bayındır, üzümü, şarabı, tarımı ve tarihi dokusuyla önemli bir ilçedir.',
    activities: 'Üzüm bağlarında gezinin, şarap evlerinde tadım yapın, tarım pazarlarında organik ürünler alın, tarihi çarşıyı gezin, Kaplancık Gölü\'nde piknik yapın ve yaylalarda yürüyüş yapın.',
    breakfast: [
      { name: 'Bayındır Kahvaltı Salonları', description: 'İlçe merkezindeki kahvaltı salonları, serpme kahvaltı ve gevrek-boyoz seçenekleriyle güne başlamanızı sağlar.' },
      { name: 'Bağ Kahvaltı Mekanları', description: 'Üzüm bağları arasındaki kahvaltı mekanları, organik ürünler ve bağ havasıyla doyurucu bir kahvaltı sunar.' },
      { name: 'Köy Kahvaltıları', description: 'Bayındır köylerindeki kahvaltı mekanları, organik ürünler ve köy peyniriyle kahvaltı deneyimi sunar.' }
    ],
    lunch: [
      { name: 'Bayındır Lokantaları', description: 'İlçe merkezindeki lokantalar, ev yemekleri ve ızgara çeşitleriyle pratik öğle yemeği sunar.' },
      { name: 'Bağ Evleri Restoranları', description: 'Bağ evlerindeki restoranlar, zeytinyağlılar ve et yemekleriyle öğle yemeği için seçenek sunar.' },
      { name: 'Pazar Yemekçileri', description: 'Pazar günleri açılan yemekçiler, ev yemekleriyle ekonomik öğle yemeği sunar.' }
    ],
    dinner: [
      { name: 'Bayındır Et Lokantaları', description: 'Izgara ve kebap çeşitleri sunan et lokantaları, akşam yemeği için ekonomik seçenekler sunar.' },
      { name: 'Şarap Evleri', description: 'Kendi ürettikleri şaraplar eşliğinde akşam yemeği sunan şarap evleri, özel bir atmosfer sunar.' },
      { name: 'İlçe Merkezi Restoranları', description: 'Bayındır merkezdeki restoranlar, çeşitli mutfaklardan seçeneklerle akşam yemeği imkanı sunar.' }
    ],
  },
  {
    id: 'd30',
    slug: 'beydag',
    name: 'Beydağ',
    emoji: '🌾',
    image: '/images/urla-vineyards.jpg',
    intro: 'İzmir\'in doğusundaki en küçük ilçelerinden biri olan Beydağ, Nif Dağı, doğal güzellikleri, tarımı ve yaylalarıyla doğa severler için saklı bir cennettir.',
    activities: 'Nif Dağı\'nda yamaç paraşütü yapın, yaylalarda kamp yapın, tarım ürünleri pazarlarından organik ürünler alın, köylerde geleneksel yaşamı gözlemleyin ve trekking parkurlarında yürüyüş yapın.',
    breakfast: [
      { name: 'Beydağ Kahvaltı Salonları', description: 'İlçe merkezindeki kahvaltı salonları, serpme kahvaltı ve gevrek-boyoz seçenekleriyle güne başlamanızı sağlar.' },
      { name: 'Yayla Kahvaltı Mekanları', description: 'Nif Dağı eteklerindeki kahvaltı mekanları, organik ürünler ve yayla havasıyla doyurucu bir kahvaltı sunar.' },
      { name: 'Köy Kahvaltıları', description: 'Beydağ köylerindeki kahvaltı mekanları, organik ürünler ve köy peyniriyle kahvaltı deneyimi sunar.' }
    ],
    lunch: [
      { name: 'Beydağ Lokantaları', description: 'İlçe merkezindeki lokantalar, ev yemekleri ve ızgara çeşitleriyle pratik öğle yemeği sunar.' },
      { name: 'Yayla Piknik Alanları', description: 'Yaylalarda mangal ve piknik yaparak öğle yemeği keyfi yapabilirsiniz.' },
      { name: 'Köy Ev Yemekleri', description: 'Köylerdeki ev yemekleri lokantaları, günlük menüsüyle öğle yemeği sunar.' }
    ],
    dinner: [
      { name: 'Beydağ Et Lokantaları', description: 'Izgara ve kebap çeşitleri sunan et lokantaları, akşam yemeği için ekonomik seçenekler sunar.' },
      { name: 'İlçe Merkezi Restoranları', description: 'Beydağ merkezdeki restoranlar, çeşitli mutfaklardan seçeneklerle akşam yemeği imkanı sunar.' },
      { name: 'Yayla Restoranları', description: 'Yaylalardaki restoranlar, manzaralı ortamlarıyla akşam yemeği için seçenek sunar.' }
    ],
  },
  {
    id: 'd31',
    slug: 'cigli',
    name: 'Çiğli',
    emoji: '🏙',
    image: '/images/kulturpark-izmir.jpg',
    intro: 'İzmir\'in hızla gelişen kuzey ilçesi Çiğli, Sasalı Doğal Yaşam Parkı, Atatürk Organize Sanayi Bölgesi, üniversite kampüsleri ve modern yerleşimleriyle önemli bir merkezdir.',
    activities: 'İzmir Doğal Yaşam Parkı\'nı gezin, Sasalı Rekreasyon Alanı\'nda piknik yapın, İzmir Hayvanat Bahçesi\'ni ziyaret edin, Ege Üniversitesi kampüsünde yürüyüş yapın, AOSB\'de iş gezisi yapın ve Çiğli sahilinde yürüyüş yapın.',
    breakfast: [
      { name: 'Sasalı Kahvaltı Mekanları', description: 'Sasalı rekreasyon alanındaki kahvaltı mekanları, organik ürünler ve doğa ortamıyla doyurucu bir kahvaltı sunar.' },
      { name: 'Çiğli Kahvaltı Salonları', description: 'İlçe merkezindeki kahvaltı salonları, serpme kahvaltı ve gevrek-boyoz seçenekleriyle güne başlamanızı sağlar.' },
      { name: 'Ege Üniversitesi Kafeteryaları', description: 'Kampüs içindeki kafeteryalar, öğrenci dostu fiyatlarıyla ekonomik kahvaltı imkanı sunar.' }
    ],
    lunch: [
      { name: 'Çiğli Lokantaları', description: 'İlçe merkezindeki lokantalar, ev yemekleri ve ızgara çeşitleriyle pratik öğle yemeği sunar.' },
      { name: 'AOSB Yemekleri', description: 'Organize sanayi bölgesindeki lokantalar, hızlı servisle öğle yemeği için ekonomik seçenekler sunar.' },
      { name: 'AVM Yemek Katları', description: 'Çiğli\'deki alışveriş merkezlerinin yemek katları, fast food seçenekleriyle pratik bir alternatif.' }
    ],
    dinner: [
      { name: 'Çiğli Meyhaneleri', description: 'İlçe merkezindeki meyhaneler, meze çeşitleriyle akşam yemekleri için seçenek sunar.' },
      { name: 'Çiğli Et Lokantaları', description: 'Izgara ve kebap çeşitleri sunan et lokantaları, akşam yemeği için ekonomik seçenekler sunar.' },
      { name: 'Sasalı Restoranları', description: 'Sasalı alanındaki restoranlar, doğa ortamında akşam yemeği için huzurlu bir seçenek.' }
    ],
  },
  {
    id: 'd32',
    slug: 'karabaglar',
    name: 'Karabağlar',
    emoji: '🏙',
    image: '/images/kulturpark-izmir.jpg',
    intro: 'İzmir\'in en kalabalık ilçelerinden biri olan Karabağlar, Yamanlar Dağı etekleri, piknik alanları, tarihi dokusu ve yerleşim alanlarıyla önemli bir ilçedir.',
    activities: 'Yamanlar Dağı\'nda doğa yürüyüşü yapın, Uzundere Mesire Alanı\'nda piknik yapın, tarihi çarşıda alışveriş yapın, Karabağlar\'da yerel lezzetleri keşfedin ve piknik alanlarında mangal keyfi yapın.',
    breakfast: [
      { name: 'Karabağlar Kahvaltı Salonları', description: 'İlçe merkezindeki kahvaltı salonları, serpme kahvaltı ve gevrek-boyoz seçenekleriyle güne başlamanızı sağlar.' },
      { name: 'Yamanlar Kahvaltı Mekanları', description: 'Yamanlar Dağı eteklerindeki kahvaltı mekanları, organik ürünler ve manzaralı ortamıyla doyurucu bir kahvaltı sunar.' },
      { name: 'Köy Kahvaltıları', description: 'Karabağlar köylerindeki kahvaltı mekanları, organik ürünler ve köy peyniriyle kahvaltı deneyimi sunar.' }
    ],
    lunch: [
      { name: 'Karabağlar Lokantaları', description: 'İlçe merkezindeki lokantalar, ev yemekleri ve ızgara çeşitleriyle pratik öğle yemeği sunar.' },
      { name: 'Uzundere Piknik Alanı', description: 'Mesire alanı içinde mangal ve piknik yaparak öğle yemeği keyfi yapabilirsiniz.' },
      { name: 'Yamanlar Lokantaları', description: 'Yamanlar eteklerindeki lokantalar, et yemekleri ve manzarasıyla öğle yemeği için idealdir.' }
    ],
    dinner: [
      { name: 'Karabağlar Meyhaneleri', description: 'İlçe merkezindeki meyhaneler, meze çeşitleriyle akşam yemekleri için seçenek sunar.' },
      { name: 'Karabağlar Et Lokantaları', description: 'Izgara ve kebap çeşitleri sunan et lokantaları, akşam yemeği için ekonomik seçenekler sunar.' },
      { name: 'İlçe Merkezi Restoranları', description: 'Karabağlar merkezdeki restoranlar, çeşitli mutfaklardan seçeneklerle akşam yemeği imkanı sunar.  **Ege\'nin İncisi\'nde Lezzet ve Keşif**  İzmir\'in 30 İlçesinde 270\'den Fazla Mekan Önerisi  2026 İzmir İlçe Rehberi | Tüm Hakları Saklıdır  1 / 1' }
    ],
  }
];
