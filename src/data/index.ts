// ===================== GERÇEK MEKANLAR - İZMİR 2026 =====================
// Tüm mekanlar web araştırması sonucu bulunan, İzmir'de aktif hizmet veren gerçek mekanlardır.

// ===================== TRENDING / ANA SAYFA KARTLARI (6) =====================
export interface TrendingCard {
  id: string;
  image: string;
  category: string;
  title: string;
  subtitle: string;
  location: string;
  href: string;
}

export const trendingCards: TrendingCard[] = [
  {
    id: '1',
    image: '/images/1888-bar.jpg',
    category: '🍸 Bar',
    title: '1888 Bar & Lounge',
    subtitle: 'Tarihi binada modern kokteyl deneyimi',
    location: '📍 Alsancak, İzmir',
    href: '/guides/alsancak-gece-hayati-barlar',
  },
  {
    id: '2',
    image: '/images/poka-coffee.jpg',
    category: '☕ Kafe',
    title: 'Poka Coffee Roasters',
    subtitle: 'Kendi çekirdeklerini kavuran, üçüncü dalga kahve',
    location: '📍 Alsancak, İzmir',
    href: '/guides/alsancak-en-iyi-kahvalti',
  },
  {
    id: '3',
    image: '/images/sole-mare-beach.jpg',
    category: '🌅 Beach',
    title: 'Sole Mare Beach Club',
    subtitle: "Aya Yorgi Koyu'nun en popüler beach'i",
    location: '📍 Çeşme, İzmir',
    href: '/guides/cesme-beach-club-eglence',
  },
  {
    id: '4',
    image: '/images/ahmed-adnan-concert.jpg',
    category: '🎭 Etkinlik',
    title: 'Ahmed Adnan Saygun GSÖ',
    subtitle: 'Dünya standartlarında senfoni konserleri',
    location: '📍 Güzelyalı, İzmir',
    href: '/guides/izmir-tiyatro-kultur-sanat',
  },
  {
    id: '5',
    image: '/images/asma-yapragi.jpg',
    category: '🍽 Restoran',
    title: 'Asma Yaprağı',
    subtitle: 'Michelin Bib Gourmand ödüllü Ege mutfağı',
    location: '📍 Alaçatı, Çeşme',
    href: '/best-places',
  },
  {
    id: '6',
    image: '/images/kulturpark-izmir.jpg',
    category: '📍 Gezi',
    title: 'Kültürpark İzmir Fuarı',
    subtitle: "İzmir'in kalbinde yeşilin ve kültürün adresi",
    location: '📍 Konak, İzmir',
    href: '/guides/izmir-fuar-konser-takvimi',
  },
];

// ===================== KEŞİF / DISCOVERY KARTLARI (8) =====================
export interface DiscoveryCard {
  id: string;
  image: string;
  category: string;
  title: string;
  subtitle: string;
  location: string;
  href: string;
}

export const discoveryCards: DiscoveryCard[] = [
  {
    id: 'd1',
    image: '/images/tarihi-asansor.jpg',
    category: '📍 Gezi',
    title: 'Tarihi Asansör',
    subtitle: "Tarihî Asansör'den İzmir Körfezi manzarası",
    location: '📍 Karataş, İzmir',
    href: '/guides/tarihi-asansor-karatas',
  },
  {
    id: 'd2',
    image: '/images/yuzu-beach-concert.jpg',
    category: '🎵 Müzik',
    title: 'Monolink — Yuzu Beach',
    subtitle: 'Elektronik müzik ve Ege’nin buluştuğu an',
    location: '📍 Çeşme, İzmir',
    href: '/guides/cesme-beach-club-eglence',
  },
  {
    id: 'd3',
    image: '/images/bewater-coffee.jpg',
    category: '☕ Kafe',
    title: 'BeWater Coffee & Bookstore',
    subtitle: 'Kitap ve kahvenin buluştuğu mekan',
    location: '📍 Alsancak, İzmir',
    href: '/guides/alsancak-en-iyi-kahvalti',
  },
  {
    id: 'd4',
    image: '/images/alacati-streets.jpg',
    category: '📖 Rehber',
    title: "Alaçatı'nın En İyi Kafeleri",
    subtitle: 'Rüzgar sörfünün başkentinde keşif rotası',
    location: '📍 Alaçatı, Çeşme',
    href: '/districts/alacati',
  },
  {
    id: 'd5',
    image: '/images/refik-anadol-sergi.jpg',
    category: '🎨 Sergi',
    title: 'Refik Anadol — İzmir Serüveni',
    subtitle: '295 bin ziyaretçiyle dijital sanatın zirvesi',
    location: '📍 Konak, İzmir',
    href: '/guides/izmir-tiyatro-kultur-sanat',
  },
  {
    id: 'd6',
    image: '/images/bostanli-sunset.jpg',
    category: '📍 Gezi',
    title: 'Bostanlı Gün Batımı',
    subtitle: 'Günü kapatmanın en güzel yolu',
    location: '📍 Karşıyaka, İzmir',
    href: '/districts/karsiyaka',
  },
  {
    id: 'd7',
    image: '/images/narimor-restaurant.jpg',
    category: '🍽 Restoran',
    title: 'Narımor',
    subtitle: 'Alsancakın Michelin Yıldızlı şef restoranı',
    location: '📍 Alsancak, İzmir',
    href: '/best-places',
  },
  {
    id: 'd8',
    image: '/images/agora-izmir.jpg',
    category: '📍 Gezi',
    title: 'Smyrna Antik Agora',
    subtitle: 'İzmirin 2000 yıllık tarihine yolculuk',
    location: '📍 Namazgah, İzmir',
    href: '/guides/agora-oren-yeri-izmir',
  },
];

// ===================== POPÜLER LİSTELER / REHBERLER (5) =====================
export interface PopularList {
  id: string;
  image: string;
  category: string;
  title: string;
  subtitle: string;
  readTime: string;
  href: string;
}

export const popularLists: PopularList[] = [
  {
    id: 'p1',
    image: '/images/morisi-kahvalti.jpg',
    category: '🍽 Rehber',
    title: "İzmir'de En İyi 10 Kahvaltı Mekanı",
    subtitle: 'Morisi, Zahide Alaçatı, Magro ve daha fazlası',
    readTime: '8 dk okuma',
    href: '/guides/alsancak-en-iyi-kahvalti',
  },
  {
    id: 'p2',
    image: '/images/alacati-gece.jpg',
    category: '🌃 Rehber',
    title: 'Alaçatı Gece Hayatı Rehberi 2026',
    subtitle: 'Asma Yaprağı, Fava, Sota ve yazın en iyi adresleri',
    readTime: '6 dk okuma',
    href: '/guides/alsancak-gece-hayati-barlar',
  },
  {
    id: 'p3',
    image: '/images/gizli-koylar.jpg',
    category: '🏖 Rehber',
    title: "İzmir'in Gizli Koyları",
    subtitle: 'Kalabalıktan uzak, cennetten köşeler',
    readTime: '10 dk okuma',
    href: '/guides/dikili-gizli-koylar',
  },
  {
    id: 'p4',
    image: '/images/vino-locale.jpg',
    category: '🍷 Rehber',
    title: "İzmir'in Michelin Yıldızlı Restoranları",
    subtitle: 'Narımor, OD Urla, Vino Locale, Teruar',
    readTime: '7 dk okuma',
    href: '/best-places',
  },
  {
    id: 'p5',
    image: '/images/duman-konser.jpg',
    category: '🎵 Rehber',
    title: '2026 İzmir Konser Takvimi',
    subtitle: 'Duman, Sıla, Yaşar, Monolink ve daha fazlası',
    readTime: '5 dk okuma',
    href: '/guides/izmir-fuar-konser-takvimi',
  },
];

// ===================== HABERLER (17) =====================
export interface NewsCard {
  id: string;
  image: string;
  category: string;
  title: string;
  description: string;
  date: string;
  href: string;
}

export const newsCards: NewsCard[] = [
  {
    id: 'n1',
    image: '/images/vino-locale.jpg',
    category: '🍽 Gastronomi',
    title: 'İzmir\'e 3 Yeni Michelin Yıldızlı Restoran',
    description: '2024 yılında İzmir mutfağı uluslararası gastronomi sahnesinde tarihi bir başarıya imza attı. OD Urla şef Osman Sezener yönetiminde, Teruar Urla şef Osman Serdaroğlu liderliğinde ve Vino Locale Ozan-Se',
    date: '2 saat önce',
    href: '/best-places',
  },
  {
    id: 'n2',
    image: '/images/izmir-fuar.jpg',
    category: '📰 Gündem',
    title: 'İzmir Fuarı 2026 Programı Açıklandı',
    description: 'İzmir Enternasyonal Fuarı\'nın 2025 yılı programı büyük bir coşkuyla açıklandı. 92. kez düzenlenecek olan fuar, Agustos-Eylül aylarında Kültürpark\'ta kapılarını açacak. Bu yıl uluslararası konuk ülke s',
    date: '5 saat önce',
    href: '/guides/izmir-fuar-konser-takvimi',
  },
  {
    id: 'n3',
    image: '/images/alsancak-street.jpg',
    category: '📰 Gündem',
    title: 'Alsancak Kıbrıs Şehitleri Caddesi Yenileme Projesi',
    description: 'İzmir\'in gece hayatının kalbi Alsancak Kıbrıs Şehitleri Caddesi, kapsamlı bir yenileme projesine alındı. Belediye tarafından başlatılan proje kapsamında cadde boyunca yaya alanları genişletilecek, ayd',
    date: '8 saat önce',
    href: '/districts/alsancak-ve-kordon',
  },
  {
    id: 'n4',
    image: '/images/cesme-marina.jpg',
    category: '🏖 Tatil',
    title: 'Çeşme\'de Yeni Beach Club Açılışları',
    description: '2025 yaz sezonu öncesinde Çeşme\'de birçok yeni beach club kapılarını açtı. Alaçatı ve Çeşme sahil şeridinde hizmete giren yeni işletmeler, dünya çapında DJ performansları, lüks konsept partiler ve öze',
    date: '1 gün önce',
    href: '/guides/cesme-beach-club-eglence',
  },
  {
    id: 'n5',
    image: '/images/urla-vineyards.jpg',
    category: '📰 Gündem',
    title: 'Urla Bağ Yolu Turizm Projesi Genişliyor',
    description: 'Urla\'nın ünlü Bağ Yolu, yeni turizm projeleriyle daha da cazip hale getiriliyor. Şarap tadım evleri, zeytinyağı atölyeleri, butik oteller ve yürüyüş parkurlarıyla zenginleştirilen bağ yolu, 2025 sezon',
    date: '1 gün önce',
    href: '/districts/urla',
  },
  {
    id: 'n6',
    image: '/images/ephesus-beach-listing.jpg',
    category: '🏛 Arkeoloji',
    title: 'Efes Antik Kenti\'nde Yeni Kazı Alanları Açıldı',
    description: 'UNESCO Dünya Mirası Listesi\'ndeki Efes Antik Kenti\'nde 2024 kazı sezonunda yeni alanlar ziyarete açıldı. Yenilenen ziyaretçi merkezi, artırılan aydınlatma sistemi ve yeni arkeolojik buluntuların sergi',
    date: '2 gün önce',
    href: '/guides/efes-antik-kenti-rehberi',
  },
  {
    id: 'n7',
    image: '/images/konak-meydan.jpg',
    category: '🚌 Ulaşım',
    title: 'İzmir\'de Elektrikli Otobüs Filosu Genişliyor',
    description: 'İzmir Büyükşehir Belediyesi, toplu ulaşımda çevre dostu araç filosunu genişletmeye devam ediyor. 2025 yılı içinde 100 yeni elektrikli otobüsün daha hizmete girmesi planlanıyor. ESHOT tarafından işleti',
    date: '2 gün önce',
    href: '/districts/konak',
  },
  {
    id: 'n8',
    image: '/images/konak-meydan.jpg',
    category: '🚌 Ulaşım',
    title: 'Konak Tramvay Hattı Yenileme Çalışmaları',
    description: 'İzmir\'in tarihi Konak tramvay hattı, kapsamlı bir yenileme çalışmasından geçiyor. 2025 yılı içinde tamamlanması planlanan proje kapsamında, hat boyunca yeni duraklar ekleniyor, raylar yenileniyor ve v',
    date: '3 gün önce',
    href: '/districts/konak',
  },
  {
    id: 'n9',
    image: '/images/bostanli-sunset.jpg',
    category: '📰 Gündem',
    title: 'Karşıyaka Bostanlı Günbatımı Terası Yenilendi',
    description: 'İzmir\'in en romantik mekanlarından biri olan Bostanlı Günbatımı Terası, kapsamlı bir renovasyondan geçti. Yeni aydınlatma sistemi, genişletilmiş oturma alanları ve estetik peyzaj düzenlemesiyle daha d',
    date: '3 gün önce',
    href: '/districts/karsiyaka',
  },
  {
    id: 'n10',
    image: '/images/kulturpark-izmir.jpg',
    category: '🌿 Çevre',
    title: 'İzmir Doğal Yaşam Parkı Yeni Hayvan Türleriyle Zenginleşti',
    description: 'Sasalı\'daki İzmir Doğal Yaşam Parkı, yeni hayvan türlerinin kazandırılmasıyla daha da çeşitli hale geldi. 2024 yılında parka getirilen zebra, zürafa ve antilop türleri, özellikle çocuklu ailelerin ilg',
    date: '4 gün önce',
    href: '/guides/izmir-hayvanat-bahcesi-sasali',
  },
  {
    id: 'n11',
    image: '/images/konak-meydan.jpg',
    category: '🚌 Ulaşım',
    title: 'İzmir\'de Yeni Bisiklet Yolları Açıldı',
    description: 'İzmir Büyükşehir Belediyesi\'nin bisikletli ulaşımı teşvik etmek amacıyla başlattığı proje kapsamında, 2024-2025 döneminde 50 kilometre yeni bisiklet yolu daha hizmete açıldı. Kordon\'dan Bostanlı\'ya, G',
    date: '4 gün önce',
    href: '/districts/konak',
  },
  {
    id: 'n12',
    image: '/images/gizli-koylar.jpg',
    category: '⛵ Turizm',
    title: 'Foça Deniz Foku Popülasyonunda Artış',
    description: 'Nesli tehlike altında olan Akdeniz foku (Monachus monachus), Foça\'nın koylarında gözlemlenen popülasyon artışıyla umut verici bir gelişme kaydediyor. 2024 yılında yapılan sayımlarda, Foça Adaları ve S',
    date: '5 gün önce',
    href: '/districts/foca',
  },
  {
    id: 'n13',
    image: '/images/konak-meydan.jpg',
    category: '🚌 Ulaşım',
    title: 'İzmir-Adnan Menderes Havalimanı Yeni Terminal Açılışı',
    description: 'İzmir-Adnan Menderes Havalimanı\'nda yapılan genişletme çalışmaları kapsamında yeni bir iç hatlar terminal binası hizmete açıldı. Modern mimarisi, artırılmış kapasitesi ve gelişmiş teknolojik altyapısı',
    date: '5 gün önce',
    href: '/districts/gaziemir',
  },
  {
    id: 'n14',
    image: '/images/agora-izmir.jpg',
    category: '📰 Gündem',
    title: 'Menemen\'e Yeni Sanayi ve Lojistik Merkezi',
    description: 'İzmir\'in ekonomik potansiyelini artırmak amacıyla Menemen\'de yeni bir sanayi ve lojistik merkezi kuruluyor. Ege Serbest Bölgesi\'ne komşu olarak inşa edilecek merkez, uluslararası ticaret ve lojistik f',
    date: '6 gün önce',
    href: '/districts/menemen',
  },
  {
    id: 'n15',
    image: '/images/gizli-koylar.jpg',
    category: '📰 Gündem',
    title: 'Seferihisar Sığacık Kalesi Restorasyonu Tamamlandı',
    description: 'Türkiye\'nin ilk Cittaslow (yavaş şehir) ünvanlı ilçesi Seferihisar\'daki tarihi Sığacık Kalesi\'nin restorasyon çalışmaları tamamlandı. Osmanlı dönemine ait kalenin surları, kapıları ve iç mekanları öze',
    date: '1 hafta önce',
    href: '/districts/seferihisar-ve-sigacik',
  },
  {
    id: 'n16',
    image: '/images/alacati-streets.jpg',
    category: '🏖 Tatil',
    title: 'Alaçatı\'da Rüzgar Sörfü Dünya Kupası Düzenlendi',
    description: 'Alaçatı, 2024 yılında PWA Dünya Rüzgar Sörfü Kupası\'na ev sahipliği yaptı. Dünyanın dört bir yanından gelen profesyonel sörfçülerin katıldığı yarışmalar, Alaçatı\'nın uluslararası spor turizmindeki öne',
    date: '1 hafta önce',
    href: '/districts/alacati',
  },
  {
    id: 'n17',
    image: '/images/cesme-marina.jpg',
    category: '🚌 Ulaşım',
    title: 'İzmir Körfezi\'nde Deniz Otobüsü Seferleri Artırıldı',
    description: 'İzmir Büyükşehir Belediyesi İZDENİZ, deniz ulaşımında hizmet kalitesini artırıyor. 2025 yılı itibarıyla Karşıyaka-Konak, Bostanlı-Konak ve Üçkuyular-Alsancak hatlarında sefer sayıları artırıldı. Yeni',
    date: '1 hafta önce',
    href: '/districts/konak',
  },
  {
    id: 'n18',
    image: '/images/agora-izmir.jpg',
    category: '📰 Gündem',
    title: 'Tire Salı Pazarı UNESCO Yaratıcı Şehirler Ağı\'na Başvurdu',
    description: '500 yılı aşkın tarihiyle Tire Salı Pazarı, UNESCO Yaratıcı Şehirler Ağı\'na dahil olmak için resmi başvuruda bulundu. Organik ürünleri, geleneksel el sanatları ve yöresel lezzetleriyle dünya çapında ta',
    date: '1 hafta önce',
    href: '/districts/tire',
  },
  {
    id: 'n19',
    image: '/images/izmir-fuar.jpg',
    category: '📰 Gündem',
    title: 'İzmir\'de Akıllı Durak Sistemine Geçiş',
    description: 'İzmir\'deki otobüs durakları, akıllı durak sistemiyle donatılmaya başlandı. Dijital ekranlar, gerçek zamanlı otobüs takibi ve QR kodlu ödeme sistemleriyle donatılan yeni duraklar, İzmirli\'nin toplu ula',
    date: '2 hafta önce',
    href: '/districts/konak',
  },
  {
    id: 'n20',
    image: '/images/agora-izmir.jpg',
    category: '📰 Gündem',
    title: 'Bergama Zeus Sunagi Alanı Yeniden Düzenlendi',
    description: 'Bergama Akropol\'ündeki antik Zeus Sunagi\'nin bulunduğu alan, kapsamlı bir düzenlemeden geçti. Yeni ziyaretçi platformları, bilgilendirici tabelalar ve arttırılmış güvenlik önlemleriyle alan, ziyaretçi',
    date: '2 hafta önce',
    href: '/districts/bergama',
  },
  {
    id: 'n21',
    image: '/images/izmir-fuar.jpg',
    category: '📰 Gündem',
    title: 'İzmir\'de Yeni Bir Stadyum Projesi Gündemde',
    description: 'İzmir\'in spor altyapısını güçlendirmek amacıyla yeni bir çok amaçlı stadyum projesi gündeme geldi. 40.000 kişi kapasiteli olarak planlanan yeni stadyum, hem futbol hem de atletizm müsabakalarına ev sa',
    date: '2 hafta önce',
    href: '/districts/bornova',
  },
  {
    id: 'n22',
    image: '/images/gizli-koylar.jpg',
    category: '📰 Gündem',
    title: 'Dikili\'de Yeni Termal Tesis Açıldı',
    description: 'Dikili\'nin ünlü termal sularından yararlanan yeni bir termal tesis kapılarını açtı. Şifalı çamur banyoları, termal havuzları ve spa merkeziyle donatılan tesis, sağlık turizmi açısından önemli bir kaza',
    date: '3 hafta önce',
    href: '/districts/dikili',
  },
  {
    id: 'n23',
    image: '/images/tarihi-asansor.jpg',
    category: '📰 Gündem',
    title: 'İzmir Tarihi Asansör\'de Yenileme Çalışmaları',
    description: '1907 yılından bu yana hizmet veren Tarihi Asansör, kapsamlı bir restorasyon ve renovasyondan geçti. Yenilenen asansör kabini, restore edilen teras alanı ve modernize edilen güvenlik sistemleriyle tari',
    date: '3 hafta önce',
    href: '/guides/tarihi-asansor-karatas',
  },
  {
    id: 'n24',
    image: '/images/kulturpark-izmir.jpg',
    category: '💻 Teknoloji',
    title: 'Çiğli\'de Yeni Teknoloji Vadisi Kuruluyor',
    description: 'İzmir\'in teknoloji ve inovasyon merkezi olma hedefi doğrultusunda Çiğli\'de yeni bir teknoloji vadisi kuruluyor. Ege Üniversitesi ve Dokuz Eylül Üniversitesi işbirliğiyle hayata geçirilecek proje, yazı',
    date: '3 hafta önce',
    href: '/districts/cigli',
  },
  {
    id: 'n25',
    image: '/images/cesme-marina.jpg',
    category: '📰 Gündem',
    title: 'Karaburun\'da Rüzgar Enerjisi Santrali Kapasitesi Artırıldı',
    description: 'Karaburun yarımadasında faaliyet gösteren rüzgar enerjisi santrallerinin kapasitesi, yeni kurulan türbinlerle birlikte önemli ölçüde artırıldı. Ege Denizi\'nin güçlü rüzgarlarından yararlanan santralle',
    date: '1 ay önce',
    href: '/districts/karaburun',
  },
  {
    id: 'n26',
    image: '/images/urla-vineyards.jpg',
    category: '📰 Gündem',
    title: 'Ödemiş Gölcük\'te Yeni Bungalov Evler Hizmete Açıldı',
    description: 'Bozdağlar\'ın eteklerindeki Gölcük Tabiat Parkı\'nda yeni bungalov evler misafirlerini ağırlamaya başladı. Göl manzaralı, ahşap bungalovlar, doğayla iç içe konaklama deneyimi arayanlar için ideal. Yeni',
    date: '1 ay önce',
    href: '/guides/golcuk-tabiat-parki',
  },
  {
    id: 'n27',
    image: '/images/agora-izmir.jpg',
    category: '🎭 Kültür',
    title: 'İzmir\'de Yeni Bir Arkeoloji Müzesi Açılıyor',
    description: 'İzmir\'in arkeolojik zenginliklerini daha iyi sergilemek amacıyla yeni bir arkeoloji müzesi projesi hayata geçiriliyor. Konak ilçesinde yapılması planlanan yeni müze, Efes, Bergama, Teos ve Claros gibi',
    date: '1 ay önce',
    href: '/guides/agora-oren-yeri-izmir',
  },
  {
    id: 'n28',
    image: '/images/kulturpark-izmir.jpg',
    category: '⚽ Spor',
    title: 'Kemalpaşa\'da Yeni Spor Kompleksi Açıldı',
    description: 'Yamanlar Dağı eteklerindeki Kemalpaşa\'da yeni bir spor kompleksi hizmete açıldı. Yüzme havuzu, spor salonları, tenis kortları ve atletizm pistiyle donatılan kompleks, bölge halkına ve İzmir\'e kaliteli',
    date: '1 ay önce',
    href: '/districts/kemalpasa',
  },
  {
    id: 'n29',
    image: '/images/izmir-tiyatro.jpg',
    category: '🎵 Müzik',
    title: 'İzmir Tiyatro Festivali 2026 Programı Belli Oldu',
    description: 'İzmir Büyükşehir Belediyesi tarafından düzenlenen İzmir Tiyatro Festivali\'nin 2025 yılı programı açıklandı. Türkiye\'nin dört bir yanından ve yurt dışından gelen tiyatro gruplarının sahne alacağı festi',
    date: '1 ay önce',
    href: '/guides/izmir-tiyatro-kultur-sanat',
  },
  {
    id: 'n30',
    image: '/images/konak-meydan.jpg',
    category: '🚌 Ulaşım',
    title: 'Buca\'da Yeni Metro Hattı Çalışmaları Başladı',
    description: 'İzmir metrosunun Buca hattında inşaat çalışmaları resmen başladı. Üçyol\'dan Buca Koop\'a kadar uzanacak 13 kilometrelik hat, İzmir metrosunun en önemli genişletme projelerinden biri. Yapımı planlanan 1',
    date: '1 ay önce',
    href: '/districts/buca',
  },
  {
    id: 'n31',
    image: '/images/urla-vineyards.jpg',
    category: '🎭 Kültür',
    title: 'Urla\'da Yeni Zeytinyağı Müzesi Açıldı',
    description: 'Urla\'nın zeytinyağı kültürünü tanıtmak amacıyla yeni bir zeytinyağı müzesi açıldı. Tarihi bir taş binada hizmet veren müze, zeytinyağı üretiminin tarihçesini, geleneksel üretim yöntemlerini ve modern',
    date: '2 ay önce',
    href: '/districts/urla',
  },
  {
    id: 'n32',
    image: '/images/cesme-marina.jpg',
    category: '🏖 Tatil',
    title: 'Çeşme Ilıca Plajı\'nda Yeni Düzenleme',
    description: 'Çeşme\'nin simgesi Ilıca Plajı, kapsamlı bir düzenlemeden geçti. Yeni duş alanları, şezlong alanları, engelli dostu erişim noktaları ve artırılmış güvenlik önlemleriyle plaj, ziyaretçilere daha konforl',
    date: '2 ay önce',
    href: '/districts/cesme',
  },
  {
    id: 'n33',
    image: '/images/asma-yapragi.jpg',
    category: '📰 Gündem',
    title: 'İzmir\'de Gıda Atölyeleri ve Mutfak Kursları Yaygınlaşıyor',
    description: 'İzmir\'de son yıllarda gastronomi eğitimine ilgi büyük artış gösterdi. Şehirde açılan yeni gıda atölyeleri ve mutfak kursları, amatör şeflere ve gastronomi tutkunlarına profesyonel eğitim imkanı sunuyo',
    date: '2 ay önce',
    href: '/guides/kemeralti-boyoz-kumru',
  },
  {
    id: 'n34',
    image: '/images/kulturpark-izmir.jpg',
    category: '📰 Gündem',
    title: 'Bornova\'da Yeni Bilim Merkezi ve Planetaryum Açıldı',
    description: 'Bornova\'da Ege Üniversitesi kampüsü yakınlarında yeni bir bilim merkezi ve planetaryum hizmete açıldı. Modern teknolojilerle donatılan merkez, öğrencilere ve halka interaktif bilim sergileri, uzay gös',
    date: '2 ay önce',
    href: '/districts/bornova',
  },
  {
    id: 'n35',
    image: '/images/izmir-fuar.jpg',
    category: '📰 Gündem',
    title: 'İzmir\'de Yeni Bir Kongre ve Fuar Merkezi Planlanıyor',
    description: 'İzmir\'in kongre turizmini geliştirmek amacıyla Gaziemir bölgesinde yeni bir kongre ve fuar merkezi planlanıyor. 10.000 kişi kapasiteli olarak tasarlanan merkez, uluslararası konferanslara, fuarlara ve',
    date: '2 ay önce',
    href: '/guides/izmir-fuar-konser-takvimi',
  },
  {
    id: 'n36',
    image: '/images/urla-vineyards.jpg',
    category: '📰 Gündem',
    title: 'Kınık\'ta Yenilenebilir Enerji Çiftlikleri Kuruluyor',
    description: 'Kınık ilçesinde güneş enerjisi panelleriyle donatılacak yenilenebilir enerji çiftlikleri kuruluyor. Tarım arazileri üzerine kurulacak güneş panelleri, hem elektrik üretimi hem de tarımsal faaliyetlere',
    date: '2 ay önce',
    href: '/districts/kinik',
  },
  {
    id: 'n37',
    image: '/images/narimor-restaurant.jpg',
    category: '🍽 Gastronomi',
    title: 'İzmirli Şefler Türkiye\'nin En İyi 50\'si Arasında',
    description: 'İzmirli şefler, Türkiye\'nin en iyi 50 şefi listesinde önemli başarılar elde etti. Şef Osman Sezener (OD Urla), Şef Osman Serdaroğlu (Teruar Urla) ve Şef Ahmet Güzelyağdöken (Balmumu) gibi isimler, İzm',
    date: '2 ay önce',
    href: '/best-places',
  },
  {
    id: 'n38',
    image: '/images/agora-izmir.jpg',
    category: '🎭 Kültür',
    title: 'Gaziemir\'de Yeni Havacılık ve Uzay Müzesi',
    description: 'Gaziemir\'deki İzmir Havacılık Müzesi, genişletme çalışmalarıyla daha kapsamlı bir hale getirildi. Yeni eklenen uzay bölümü, Türkiye\'nin uzay çalışmalarına dair interaktif sergiler sunuyor. Özellikle ç',
    date: '3 ay önce',
    href: '/districts/gaziemir',
  },
  {
    id: 'n39',
    image: '/images/cesme-marina.jpg',
    category: '⛵ Turizm',
    title: 'İzmir Körfezi\'nde Deniz Temizlik Hareketi',
    description: 'İzmir Büyükşehir Belediyesi ve sivil toplum kuruluşlarının ortaklaşa başlattığı Körfez Temizlik Hareketi, 2024-2025 döneminde önemli sonuçlar elde etti. Deniz dibinden toplanan atıklar, deniz canlılar',
    date: '3 ay önce',
    href: '/districts/karsiyaka',
  },
  {
    id: 'n40',
    image: '/images/ephesus-beach-listing.jpg',
    category: '🎵 Müzik',
    title: 'Selçuk\'ta Efes Antik Tiyatrosu\'nda Yeni Konserler',
    description: 'UNESCO Dünya Mirası Listesi\'ndeki Efes Antik Tiyatrosu, 2025 yaz sezonunda dünya çapında sanatçıların konserlerine ev sahipliği yapacak. 25.000 kişi kapasiteli antik tiyatro, akustiği ve tarihi atmosf',
    date: '3 ay önce',
    href: '/guides/efes-antik-kenti-rehberi',
  },
  {
    id: 'n41',
    image: '/images/kulturpark-izmir.jpg',
    category: '⚽ Spor',
    title: 'İzmir\'de E-Spor Arena Projesi',
    description: 'Genç nüfusu ve teknoloji altyapısıyla öne çıkan İzmir, e-spor alanında da iddialı projelere imza atıyor. Bornova\'da yapılması planlanan yeni e-spor arena, ulusal ve uluslararası turnuvalara ev sahipli',
    date: '3 ay önce',
    href: '/districts/bornova',
  },
  {
    id: 'n42',
    image: '/images/urla-vineyards.jpg',
    category: '📰 Gündem',
    title: 'Bayındır\'da Şarap Turizmi Gelişiyor',
    description: 'Üzüm bağlarıyla ünlü Bayındır\'da şarap turizmi hızla gelişiyor. Yeni açılan şarap evleri, bağ gezileri ve tadım atölyeleri, bölgeyi Ege\'nin yeni şarap rotası haline getiriyor. Bayındır Belediyesi\'nin',
    date: '3 ay önce',
    href: '/districts/bayindir',
  },
  {
    id: 'n43',
    image: '/images/fotograf-sergisi.jpg',
    category: '🎭 Kültür',
    title: 'İzmir\'de Yeni Kütüphane ve Kültür Merkezleri Açılıyor',
    description: 'İzmir\'in kültür ve eğitim altyapısını güçlendirmek amacıyla her ilçede yeni kütüphane ve kültür merkezleri açılıyor. Dijital kütüphane hizmetleri, atölye çalışmaları ve kültürel etkinliklerle donatıla',
    date: '3 ay önce',
    href: '/guides/izmir-tiyatro-kultur-sanat',
  },
  {
    id: 'n44',
    image: '/images/urla-vineyards.jpg',
    category: '🌿 Çevre',
    title: 'Kiraz\'da Organik Tarım Projesi Büyüyor',
    description: 'Kiraz ilçesinde belediye destekli organik tarım projesi, çiftçilerin katılımıyla hızla büyüyor. Kiraz, elma ve sebze üretiminde organik sertifikalı ürün sayısı her geçen gün artıyor. Proje kapsamında',
    date: '4 ay önce',
    href: '/districts/kiraz',
  },
  {
    id: 'n45',
    image: '/images/cesme-marina.jpg',
    category: '🎭 Kültür',
    title: 'İzmir\'de Yeni Bir Deniz Müzesi Planlanıyor',
    description: 'İzmir\'in denizcilik tarihini sergilemek amacıyla Konak\'ta yeni bir deniz müzesi projesi gündeme geldi. Tarihi İskele binasının restorasyonuyla hayata geçirilecek müze, Ege Denizi\'nin denizcilik kültür',
    date: '4 ay önce',
    href: '/districts/konak',
  },
  {
    id: 'n46',
    image: '/images/cesme-marina.jpg',
    category: '⛵ Turizm',
    title: 'Aliağa\'da Yeni Bir Marina Projesi',
    description: 'Aliağa ilçesinde yeni bir marina ve yat limanı projesi hayata geçiriliyor. 500 yat kapasiteli olarak planlanan marina, yat turizmi ve mavi yolculuk rotalarına ev sahipliği yapacak. Modern tesisleri ve',
    date: '4 ay önce',
    href: '/districts/aliaga',
  },
  {
    id: 'n47',
    image: '/images/kulturpark-izmir.jpg',
    category: '🌿 Çevre',
    title: 'Torbalı\'da Tarım Teknolojileri Merkezi Kuruldu',
    description: 'Torbalı\'da modern tarım teknolojilerinin tanıtıldığı yeni bir merkez hizmete açıldı. Drone ile tarım, akıllı sulama sistemleri ve dijital tarım uygulamalarının sergilendiği merkez, bölge çiftçilerine',
    date: '4 ay önce',
    href: '/districts/torbali',
  },
  {
    id: 'n48',
    image: '/images/izmir-tiyatro.jpg',
    category: '🎵 Müzik',
    title: 'İzmir\'de Sokak Sanatı Festivali Büyük İlgi Gördü',
    description: 'İzmir sokaklarında düzenlenen sokak sanatı festivali, rekor katılımla gerçekleşti. Alsancak, Karşıyaka ve Konak\'taki duvarlarda gerçekleştirilen mural çalışmaları, şehri açık hava sanat galerisine dön',
    date: '5 ay önce',
    href: '/districts/alsancak-ve-kordon',
  },
  {
    id: 'n49',
    image: '/images/izmir-tiyatro.jpg',
    category: '🎵 Müzik',
    title: 'Beydağ\'da Yamaç Paraşütü Festivali Düzenlendi',
    description: 'Nif Dağı\'nda yamaç paraşütü tutkunlarının bir araya geldiği festival, büyük bir coşkuyla gerçekleşti. 1295 metre yükseklikten yapılan uçuşlar, İzmir Körfezi ve çevre koyların panoramik manzarası eşliğ',
    date: '5 ay önce',
    href: '/districts/beydag',
  },
  {
    id: 'n50',
    image: '/images/konak-meydan.jpg',
    category: '📰 Gündem',
    title: 'İzmir 2026\'da Dünya Şehirleri Zirvesi\'ne Ev Sahipliği Yapacak',
    description: 'İzmir, 2026 yılında Uluslararası Dünya Şehirleri Zirvesi\'ne ev sahipliği yapacak. Sürdürülebilir kentleşme, iklim değişikliği ve akıllı şehir teknolojileri konularında dünya çapında uzmanların katılac',
    date: '6 ay önce',
    href: '/districts/konak',
  }
];

// ===================== MAHALLE KARTLARI (6) =====================
export interface NeighborhoodCard {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  href: string;
}

export const neighborhoodCards: NeighborhoodCard[] = [
  {
    id: 'nh1',
    image: '/images/alsancak-street.jpg',
    title: 'Alsancak',
    subtitle: "Kordon'dan kültüre, İzmir'in kalbi",
    href: '/districts/alsancak-ve-kordon',
  },
  {
    id: 'nh2',
    image: '/images/karsiyaka-bostanli.jpg',
    title: 'Karşıyaka',
    subtitle: 'Anadolu yakasının renkli yüzü',
    href: '/districts/karsiyaka',
  },
  {
    id: 'nh3',
    image: '/images/cesme-marina.jpg',
    title: 'Çeşme',
    subtitle: "Ege'nin incisi, yazın başkenti",
    href: '/districts/cesme',
  },
  {
    id: 'nh4',
    image: '/images/urla-vineyards.jpg',
    title: 'Urla',
    subtitle: 'Şarap rotaları ve Ege lezzetleri',
    href: '/districts/urla',
  },
  {
    id: 'nh5',
    image: '/images/bostanli-sunset.jpg',
    title: 'Bostanlı',
    subtitle: 'Gün batımının en güzel izlendiği semt',
    href: '/districts/karsiyaka',
  },
  {
    id: 'nh6',
    image: '/images/tarihi-asansor.jpg',
    title: 'Karataş',
    subtitle: 'Tarihî Asansör ve eşsiz manzara',
    href: '/guides/tarihi-asansor-karatas',
  },
];

// ===================== MARQUEE ÖGELERİ =====================
export const marqueeItems = [
  '500+ GERÇEK MEKAN',
  '📍 ALSANCAK • KARŞIYAKA • ÇEŞME • URLA',
  '🎭 HAFTALIK ETKİNLİK TAKVİMİ',
  '☕ EN İYİ KAFELER',
  '🍽 EDİTÖR ONAYLI RESTORANLAR',
  '🌅 AEGEAN BEACH GUIDE',
  '📰 GÜNLÜK İZMİR HABERLERİ',
  '📱 INSTAGRAM @IZMIRILDE',
];

// ===================== MEKANLAR SAYFASI KARTLARI (24 GERÇEK) =====================
export interface PlaceCard {
  id: string;
  image: string;
  category: string;
  title: string;
  subtitle: string;
  location: string;
  price: string;
  rating: string;
}

export const placeCards: PlaceCard[] = [
  // KAFELER
  {
    id: 'pl1',
    image: '/images/poka-coffee.jpg',
    category: '☕ Kafe',
    title: 'Poka Coffee Roasters',
    subtitle: 'Kendi çekirdeklerini kavuran, üçüncü dalga kahve',
    location: '📍 Alsancak, İzmir',
    price: '₺₺',
    rating: '⭐ 4.9',
  },
  {
    id: 'pl2',
    image: '/images/bewater-coffee.jpg',
    category: '☕ Kafe',
    title: 'BeWater Coffee & Bookstore',
    subtitle: 'Kitap ve kahvenin buluştuğu mekan',
    location: '📍 Alsancak, İzmir',
    price: '₺₺',
    rating: '⭐ 4.8',
  },
  {
    id: 'pl3',
    image: '/images/monas-art-coffee.jpg',
    category: '☕ Kafe',
    title: 'Monas Art Coffee Bakery',
    subtitle: 'Sanat galerisi ve kahve bir arada',
    location: '📍 Karşıyaka, İzmir',
    price: '₺₺',
    rating: '⭐ 4.7',
  },
  {
    id: 'pl4',
    image: '/images/baree-brunch.jpg',
    category: '☕ Kafe',
    title: "Ba'ree",
    subtitle: 'Modern kahvaltı ve brunch deneyimi',
    location: '📍 Bayraklı, İzmir',
    price: '₺₺',
    rating: '⭐ 4.7',
  },
  {
    id: 'pl5',
    image: '/images/magro-brunch.jpg',
    category: '☕ Kafe',
    title: 'Magro',
    subtitle: 'Trend kahvaltı ve brunch mekanı',
    location: '📍 Alsancak, İzmir',
    price: '₺₺',
    rating: '⭐ 4.6',
  },
  // RESTORANLAR
  {
    id: 'pl6',
    image: '/images/asma-yapragi.jpg',
    category: '🍽 Restoran',
    title: 'Asma Yaprağı',
    subtitle: 'Michelin Bib Gourmand ödüllü Ege mutfağı',
    location: '📍 Alaçatı, Çeşme',
    price: '₺₺₺₺',
    rating: '⭐ 4.9',
  },
  {
    id: 'pl7',
    image: '/images/sota-alacati.jpg',
    category: '🍽 Restoran',
    title: 'Sota Alaçatı',
    subtitle: 'Viento Otel içinde, deniz ürünleri ve ödüllü mutfak',
    location: '📍 Alaçatı, Çeşme',
    price: '₺₺₺₺',
    rating: '⭐ 4.9',
  },
  {
    id: 'pl8',
    image: '/images/narimor-restaurant.jpg',
    category: '🍽 Restoran',
    title: 'Narımor',
    subtitle: 'Alsancakın Michelin Yıldızlı şef restoranı',
    location: '📍 Alsancak, İzmir',
    price: '₺₺₺₺',
    rating: '⭐ 4.9',
  },
  {
    id: 'pl9',
    image: '/images/vino-locale.jpg',
    category: '🍽 Restoran',
    title: 'Vino Locale',
    subtitle: 'Şarap odaklı İtalyan mutfağı, Michelin seçkisi',
    location: '📍 Konak, İzmir',
    price: '₺₺₺',
    rating: '⭐ 4.8',
  },
  {
    id: 'pl10',
    image: '/images/scappi-restaurant.jpg',
    category: '🍽 Restoran',
    title: 'Scappi',
    subtitle: 'Napoli usulü odun fırını pizza ve taze makarna',
    location: '📍 Alsancak, İzmir',
    price: '₺₺₺',
    rating: '⭐ 4.8',
  },
  {
    id: 'pl11',
    image: '/images/levan-urla.jpg',
    category: '🍽 Restoran',
    title: 'Levan',
    subtitle: 'Urlanın farm-to-table meyve bahçesi restoranı',
    location: '📍 Urla, İzmir',
    price: '₺₺₺',
    rating: '⭐ 4.8',
  },
  {
    id: 'pl12',
    image: '/images/gumus-balik.jpg',
    category: '🍽 Restoran',
    title: 'Gümüş Balık',
    subtitle: 'Deniz kenarında taze balık ve meze',
    location: '📍 Karşıyaka, İzmir',
    price: '₺₺₺',
    rating: '⭐ 4.7',
  },
  {
    id: 'pl13',
    image: '/images/fava-alacati.jpg',
    category: '🍽 Restoran',
    title: 'Fava',
    subtitle: 'Alaçatının meşhur taş bahçe restoranı',
    location: '📍 Alaçatı, Çeşme',
    price: '₺₺₺',
    rating: '⭐ 4.7',
  },
  {
    id: 'pl14',
    image: '/images/zahide-alacati.jpg',
    category: '🍽 Restoran',
    title: 'Zahide Alaçatı',
    subtitle: 'Ege kahvaltısının en doğal hali',
    location: '📍 Alaçatı, Çeşme',
    price: '₺₺',
    rating: '⭐ 4.8',
  },
  {
    id: 'pl15',
    image: '/images/oca-soyali.jpg',
    category: '🍽 Restoran',
    title: 'Oca Soyalı',
    subtitle: 'Deniz manzaralı modern deniz ürünleri',
    location: '📍 Bayraklı, İzmir',
    price: '₺₺₺',
    rating: '⭐ 4.7',
  },
  // BAR
  {
    id: 'pl16',
    image: '/images/1888-bar.jpg',
    category: '🍸 Bar',
    title: '1888 Bar & Lounge',
    subtitle: 'Tarihi binada modern kokteyl deneyimi',
    location: '📍 Alsancak, İzmir',
    price: '₺₺₺',
    rating: '⭐ 4.8',
  },
  {
    id: 'pl17',
    image: '/images/endulus-meyhane.jpg',
    category: '🍸 Bar',
    title: 'Meyhane Endülüs',
    subtitle: 'Canlı fasıl müzik, meze ve rakı geceleri',
    location: '📍 Alsancak, İzmir',
    price: '₺₺₺',
    rating: '⭐ 4.6',
  },
  {
    id: 'pl18',
    image: '/images/improvement-bar.jpg',
    category: '🍸 Bar',
    title: 'Improvement',
    subtitle: 'Kokteyl kültürünün merkezi Alsancakta',
    location: '📍 Alsancak, İzmir',
    price: '₺₺₺',
    rating: '⭐ 4.7',
  },
  {
    id: 'pl19',
    image: '/images/hayyam-meyhane.jpg',
    category: '🍸 Bar',
    title: 'Hayyam Meyhane',
    subtitle: 'Geleneksel meyhane kültürü ve fasıl',
    location: '📍 Alsancak, İzmir',
    price: '₺₺',
    rating: '⭐ 4.6',
  },
  // BEACH
  {
    id: 'pl20',
    image: '/images/before-sunset-beach.jpg',
    category: '🌅 Beach',
    title: 'Before Sunset Beach Club',
    subtitle: 'Ovacık Koyunda huzurlu beach deneyimi',
    location: '📍 Çeşme, İzmir',
    price: '₺₺₺',
    rating: '⭐ 4.7',
  },
  {
    id: 'pl21',
    image: '/images/sole-mare-beach.jpg',
    category: '🌅 Beach',
    title: 'Sole Mare Beach Club',
    subtitle: "Aya Yorgi Koyu'nun en popüler beach'i",
    location: '📍 Çeşme, İzmir',
    price: '₺₺₺',
    rating: '⭐ 4.9',
  },
  {
    id: 'pl22',
    image: '/images/flyinn-beach.jpg',
    category: '🌅 Beach',
    title: 'Fly-Inn Beach Club',
    subtitle: 'Altınkumda 40.000 m² alanda dev beach',
    location: '📍 Çeşme, İzmir',
    price: '₺₺₺',
    rating: '⭐ 4.8',
  },
  {
    id: 'pl23',
    image: '/images/ephesus-beach-listing.jpg',
    category: '🌅 Beach',
    title: 'Pamucak Beach',
    subtitle: 'Efes Antik Kentine yakın geniş kumsal',
    location: '📍 Selçuk, İzmir',
    price: '₺',
    rating: '⭐ 4.3',
  },
  {
    id: 'pl24',
    image: '/images/kiyi-beach-listing.jpg',
    category: '🌅 Beach',
    title: 'Kıyı Beach Club',
    subtitle: 'Çeşmenin gözde plaj deneyimi',
    location: '📍 Çeşme, İzmir',
    price: '₺₺₺',
    rating: '⭐ 4.7',
  },
];

// ===================== ETKİNLİKLER (12 GERÇEK) =====================
export interface EventCard {
  id: string;
  day: string;
  month: string;
  dayName: string;
  image: string;
  category: string;
  title: string;
  venue: string;
  time: string;
}

export const eventCards: EventCard[] = [
  {
    id: 'e1',
    day: '15',
    month: 'AĞUSTOS',
    dayName: 'Cuma',
    image: '/images/izmir-fuar-konser.jpg',
    category: '🎵 KONSER',
    title: 'İzmir Avrupa Caz Festivali — Açılış Gecesi',
    venue: '📍 Ahmed Adnan Saygun Sanat Merkezi',
    time: '🕐 20:30',
  },
  {
    id: 'e2',
    day: '20',
    month: 'AĞUSTOS',
    dayName: 'Çarşamba',
    image: '/images/izmir-fuar-event.jpg',
    category: '🎭 FESTİVAL',
    title: '93. İzmir Enternasyonal Fuarı',
    venue: '📍 Kültürpark, İzmir',
    time: '🕐 10:00 - 23:00',
  },
  {
    id: 'e3',
    day: '22',
    month: 'AĞUSTOS',
    dayName: 'Cuma',
    image: '/images/tiyatro-event.jpg',
    category: '🎭 TİYATRO',
    title: 'İzmir Devlet Tiyatrosu — Yeni Sezon Prömiyeri',
    venue: '📍 İzmir Devlet Tiyatrosu',
    time: '🕐 20:00',
  },
  {
    id: 'e4',
    day: '30',
    month: 'AĞUSTOS',
    dayName: 'Cumartesi',
    image: '/images/kahve-festivali.jpg',
    category: '☕ FESTİVAL',
    title: 'İzmir Kahve Festivali 2026',
    venue: '📍 Alsancak, İzmir',
    time: '🕐 09:00 - 21:00',
  },
  {
    id: 'e5',
    day: '5',
    month: 'EYLÜL',
    dayName: 'Cuma',
    image: '/images/jazz-gecesi.jpg',
    category: '🎵 KONSER',
    title: 'Kordon Jazz Geceleri — Özel Performans',
    venue: '📍 Kordon, İzmir',
    time: '🕐 21:00',
  },
  {
    id: 'e6',
    day: '12',
    month: 'EYLÜL',
    dayName: 'Cuma',
    image: '/images/fotograf-sergisi.jpg',
    category: '🖼 SERGİ',
    title: "Ege'nin Işığı Fotoğraf Sergisi",
    venue: '📍 Arkas Sanat Merkezi',
    time: '🕐 10:00 - 18:00',
  },
  {
    id: 'e7',
    day: '14',
    month: 'HAZİRAN',
    dayName: 'Cumartesi',
    image: '/images/yuzu-beach-concert.jpg',
    category: '🎵 KONSER',
    title: 'Monolink — Yuzu Beach Aya Yorgi',
    venue: '📍 Yuzu Beach, Çeşme',
    time: '🕐 22:00',
  },
  {
    id: 'e8',
    day: '12',
    month: 'TEMMUZ',
    dayName: 'Cumartesi',
    image: '/images/duman-konser.jpg',
    category: '🎵 KONSER',
    title: 'Duman — OM Paparazzi',
    venue: '📍 OM Paparazzi, Çeşme',
    time: '🕐 22:00',
  },
  {
    id: 'e9',
    day: '8',
    month: 'MAYIS',
    dayName: 'Perşembe',
    image: '/images/ahmed-adnan-concert.jpg',
    category: '🎵 KONSER',
    title: 'Sertab Erener — İzmir Arena',
    venue: '📍 İzmir Arena',
    time: '🕐 20:30',
  },
  {
    id: 'e10',
    day: '23',
    month: 'MAYIS',
    dayName: 'Cuma',
    image: '/images/jazz-gecesi.jpg',
    category: '🎵 KONSER',
    title: 'Sıla — İzmir Arena',
    venue: '📍 İzmir Arena',
    time: '🕐 20:30',
  },
  {
    id: 'e11',
    day: '27',
    month: 'MART',
    dayName: 'Perşembe',
    image: '/images/refik-anadol-sergi.jpg',
    category: '🎨 SERGİ',
    title: 'Refik Anadol — İzmir Serüveni (Son Gün)',
    venue: '📍 Konak, İzmir',
    time: '🕐 10:00 - 20:00',
  },
  {
    id: 'e12',
    day: '2',
    month: 'HAZİRAN',
    dayName: 'Pazartesi',
    image: '/images/duman-konser.jpg',
    category: '🎵 KONSER',
    title: 'Yaşar — İzmir Arena',
    venue: '📍 İzmir Arena',
    time: '🕐 20:30',
  },
];

// ===================== KEŞİF REHBERLERİ (10) =====================
export interface GuideCard {
  id: string;
  image: string;
  category: string;
  title: string;
  subtitle: string;
  readTime: string;
  author: string;
}

export const guideCards: GuideCard[] = [
  {
    id: 'g1',
    image: '/images/morisi-kahvalti.jpg',
    category: '🍽 YEMEK',
    title: "İzmir'de En İyi 10 Kahvaltı Mekanı",
    subtitle: 'Morisi, Zahide Alaçatı, Magro ve daha fazlası',
    readTime: '8 dk okuma',
    author: 'Editör — 3 gün önce',
  },
  {
    id: 'g2',
    image: '/images/alacati-gece.jpg',
    category: '🌃 GECE HAYATI',
    title: 'Alaçatı Gece Hayatı Rehberi 2026',
    subtitle: 'Asma Yaprağı, Fava, Sota ve yazın en iyi adresleri',
    readTime: '6 dk okuma',
    author: 'Editör — 1 hafta önce',
  },
  {
    id: 'g3',
    image: '/images/gizli-koylar.jpg',
    category: '🏖 SAHİL',
    title: "İzmir'in Gizli Koyları",
    subtitle: 'Kalabalıktan uzak, cennetten köşeler',
    readTime: '10 dk okuma',
    author: 'Editör — 2 hafta önce',
  },
  {
    id: 'g4',
    image: '/images/karsiyaka-guide.jpg',
    category: '📍 GEZİ',
    title: "Karşıyaka'yı Baştanbaşa Keşif",
    subtitle: 'Anadolu yakasının saklı hazineleri',
    readTime: '12 dk okuma',
    author: 'Editör — 3 hafta önce',
  },
  {
    id: 'g5',
    image: '/images/kafe-kulturu.jpg',
    category: '☕ KÜLTÜR',
    title: "İzmir Kafe Kültürü: Bir Kentin Hikayesi",
    subtitle: 'Poka, BeWater, Monas ve İzmirin kahve devrimi',
    readTime: '7 dk okuma',
    author: 'Editör — 1 ay önce',
  },
  {
    id: 'g6',
    image: '/images/tekne-turlari.jpg',
    category: '⛵ GEZİ',
    title: 'İzmir Körfezi Tekne Turları',
    subtitle: "Denizden İzmir'i keşfetmenin en güzel yolu",
    readTime: '9 dk okuma',
    author: 'Editör — 1 ay önce',
  },
  {
    id: 'g7',
    image: '/images/levan-urla.jpg',
    category: '🍽 YEMEK',
    title: 'Urla Lezzet Rotası: 10 Durak',
    subtitle: 'Levan, Teruar, Zahide ve Urlanın en iyi adresleri',
    readTime: '11 dk okuma',
    author: 'Editör — 2 hafta önce',
  },
  {
    id: 'g8',
    image: '/images/1888-bar.jpg',
    category: '🌃 GECE HAYATI',
    title: "İzmir'in En İyi Kokteyl Barları",
    subtitle: '1888, Improvement, Endülüs ve gece hayatının zirvesi',
    readTime: '6 dk okuma',
    author: 'Editör — 4 gün önce',
  },
  {
    id: 'g9',
    image: '/images/cesme-marina.jpg',
    category: '🏖 SAHİL',
    title: 'Çeşme-Alaçatı Beach Rehberi 2026',
    subtitle: 'Sole Mare, Fly-Inn, Before Sunset ve en iyi beachler',
    readTime: '8 dk okuma',
    author: 'Editör — 5 gün önce',
  },
  {
    id: 'g10',
    image: '/images/narimor-restaurant.jpg',
    category: '🍽 YEMEK',
    title: "İzmir'in Michelin Ödüllü Restoranları",
    subtitle: 'Narımor, OD Urla, Vino Locale, Asma Yaprağı, Teruar',
    readTime: '9 dk okuma',
    author: 'Editör — 1 hafta önce',
  },
];

// ===================== FİLTRE TABLARI =====================
export const filterTabs = ['Tümü', 'Kafe', 'Restoran', 'Bar', 'Beach', 'Etkinlik', 'Gezi'];
export const guideFilterTabs = ['Tümü', 'Yemek', 'Gezi', 'Gece Hayatı', 'Kültür', 'Sahil'];
export const eventFilterTabs = ['Bu Hafta', 'Bu Ay', 'Gelecek Ay'];

// ===================== NAV LİNKLERİ =====================
export const navLinks = [
  { label: 'Keşfet', href: '/guides' },
  { label: 'Mekanlar', href: '/places' },
  { label: 'Etkinlikler', href: '/events' },
  { label: 'Rehberler', href: '/guides' },
  { label: 'Hakkımızda', href: '/about' },
];

export const footerExploreLinks = [
  'Popüler Mekanlar',
  'Yeni Açılanlar',
  'Trend Etkinlikler',
  'Mahalle Rehberleri',
];

export const footerCategoryLinks = [
  'Kafeler',
  'Restoranlar',
  'Beach & Bar',
  'Gece Hayatı',
  'Sanat',
];
