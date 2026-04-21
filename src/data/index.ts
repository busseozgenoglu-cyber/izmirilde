// ===================== GERÇEK MEKANLAR - İZMİR 2025 =====================
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
    href: '/districts/alsancak-ve-kordon',
  },
  {
    id: '2',
    image: '/images/poka-coffee.jpg',
    category: '☕ Kafe',
    title: 'Poka Coffee Roasters',
    subtitle: 'Kendi çekirdeklerini kavuran, üçüncü dalga kahve',
    location: '📍 Alsancak, İzmir',
    href: '/districts/alsancak-ve-kordon',
  },
  {
    id: '3',
    image: '/images/sole-mare-beach.jpg',
    category: '🌅 Beach',
    title: 'Sole Mare Beach Club',
    subtitle: "Aya Yorgi Koyu'nun en popüler beach'i",
    location: '📍 Çeşme, İzmir',
    href: '/districts/cesme',
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
    href: '/districts/alacati',
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
    href: '/districts/cesme',
  },
  {
    id: 'd3',
    image: '/images/bewater-coffee.jpg',
    category: '☕ Kafe',
    title: 'BeWater Coffee & Bookstore',
    subtitle: 'Kitap ve kahvenin buluştuğu mekan',
    location: '📍 Alsancak, İzmir',
    href: '/districts/alsancak-ve-kordon',
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
    href: '/districts/alsancak-ve-kordon',
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
    title: 'Alaçatı Gece Hayatı Rehberi 2025',
    subtitle: 'Asma Yaprağı, Fava, Sota ve yazın en iyi adresleri',
    readTime: '6 dk okuma',
    href: '/districts/alacati',
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
    href: '/guides/urla-deniz-kenari-yemek',
  },
  {
    id: 'p5',
    image: '/images/duman-konser.jpg',
    category: '🎵 Rehber',
    title: '2025 İzmir Konser Takvimi',
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
  date: string;
  href: string;
}

export const newsCards: NewsCard[] = [
  {
    id: 'n1',
    image: '/images/izmir-fuar.jpg',
    category: '📰 Gündem',
    title: '93. İzmir Enternasyonal Fuarı Açıldı — 80 Ülke Katılıyor',
    date: '2 saat önce',
    href: '/guides/izmir-fuar-konser-takvimi',
  },
  {
    id: 'n2',
    image: '/images/refik-anadol-sergi.jpg',
    category: '🎨 Kültür',
    title: 'Refik Anadol Sergisi İzmirde 295 Bin Ziyaretçiyi Ağırladı',
    date: '5 saat önce',
    href: '/guides/izmir-tiyatro-kultur-sanat',
  },
  {
    id: 'n3',
    image: '/images/kulturpark-yenileme.jpg',
    category: '🏙 Gündem',
    title: 'Kültürpark Yenileme Projesi Tüm Hızıyla Devam Ediyor',
    date: '1 gün önce',
    href: '/districts/konak',
  },
  {
    id: 'n4',
    image: '/images/narimor-restaurant.jpg',
    category: '🍽 Gündem',
    title: 'Narımor Alsancak Michelin Yıldızı Aldı',
    date: '1 gün önce',
    href: '/districts/alsancak-ve-kordon',
  },
  {
    id: 'n5',
    image: '/images/konak-meydan.jpg',
    category: '🏛 Gündem',
    title: 'Konak Meydanı Düzenlemesi Tamamlandı',
    date: '2 gün önce',
    href: '/guides/izmir-saat-kulesi-konak-meydani',
  },
  {
    id: 'n6',
    image: '/images/izmir-fuar-konser.jpg',
    category: '🎵 Kültür',
    title: 'İzmirde 2025te 1780 Konser ve Müzik Etkinliği Düzenlenecek',
    date: '2 gün önce',
    href: '/guides/izmir-fuar-konser-takvimi',
  },
  {
    id: 'n7',
    image: '/images/agora-izmir.jpg',
    category: '🏛 Kültür',
    title: 'Smyrna Antik Agora 2025te UNESCO Dünya Mirası Listesine Aday',
    date: '3 gün önce',
    href: '/guides/agora-oren-yeri-izmir',
  },
  {
    id: 'n8',
    image: '/images/hayyam-meyhane.jpg',
    category: '🍽 Gündem',
    title: 'Hayyam Meyhane 2025 Sofralarında Yeni Lezzetler Sunuyor',
    date: '3 gün önce',
    href: '/districts/alsancak-ve-kordon',
  },
  {
    id: 'n9',
    image: '/images/duman-konser.jpg',
    category: '🎵 Müzik',
    title: 'Duman 12 Temmuzda OM Paparazzide İzmirde',
    date: '4 gün önce',
    href: '/guides/izmir-fuar-konser-takvimi',
  },
  {
    id: 'n10',
    image: '/images/oca-soyali.jpg',
    category: '🍽 Gündem',
    title: 'Oca Soyalı Bayraklının En Yeni Deniz Ürünleri Restoranı',
    date: '5 gün önce',
    href: '/districts/bayrakli',
  },
  {
    id: 'n11',
    image: '/images/scappi-restaurant.jpg',
    category: '🍽 Gündem',
    title: 'Scappi Alsancakta Napoli Pizzasıyla Açıldı',
    date: '6 gün önce',
    href: '/districts/alsancak-ve-kordon',
  },
  {
    id: 'n12',
    image: '/images/monas-art-coffee.jpg',
    category: '☕ Kültür',
    title: 'Monas Art Coffee Bakery Karşıyakada Sanat ve Kahveyi Buluşturdu',
    date: '1 hafta önce',
    href: '/districts/karsiyaka',
  },
  {
    id: 'n13',
    image: '/images/1888-bar.jpg',
    category: '🍸 Gece Hayatı',
    title: '1888 Bar Alsancakta Yeni Kokteyl Menüsünü Tanıttı',
    date: '1 hafta önce',
    href: '/guides/alsancak-gece-hayati-barlar',
  },
  {
    id: 'n14',
    image: '/images/asma-yapragi.jpg',
    category: '🍽 Gastronomi',
    title: 'Asma Yaprağı Michelin Bib Gourmand Ödülünü İkinci Kez Kazandı',
    date: '1 hafta önce',
    href: '/districts/alacati',
  },
  {
    id: 'n15',
    image: '/images/before-sunset-beach.jpg',
    category: '🌅 Tatil',
    title: 'Before Sunset Beach Club 2025 Sezonuna Hazır',
    date: '2 hafta önce',
    href: '/guides/cesme-beach-club-eglence',
  },
  {
    id: 'n16',
    image: '/images/bostanli-sunset.jpg',
    category: '📍 Yaşam',
    title: 'Bostanlı İskele Yenileme Projesi Tamamlandı',
    date: '2 hafta önce',
    href: '/districts/karsiyaka',
  },
  {
    id: 'n17',
    image: '/images/cesme-marina.jpg',
    category: '⛵ Turizm',
    title: 'Çeşme Marina 2025 Yaz Sezonuna 500 Yatla Başladı',
    date: '2 hafta önce',
    href: '/districts/cesme',
  },
  {
    id: 'n18',
    image: '/images/deniz-restaurant-listing.jpg',
    category: '🍽 Gastronomi',
    title: 'İzmirde 8 Yeni Balık Restoranı Açıldı — 2025 Rehberi',
    date: '2 hafta önce',
    href: '/districts/alsancak-ve-kordon',
  },
  {
    id: 'n19',
    image: '/images/enrico-macias.jpg',
    category: '🎵 Müzik',
    title: 'Kordon Jazz Festivali 2025 Programı Açıklandı',
    date: '3 hafta önce',
    href: '/districts/alsancak-ve-kordon',
  },
  {
    id: 'n20',
    image: '/images/ephesus-beach-listing.jpg',
    category: '🏛 Turizm',
    title: 'Efes Antik Kenti 2025te 2 Milyon Ziyaretçi Hedefliyor',
    date: '3 hafta önce',
    href: '/districts/selcuk',
  },
  {
    id: 'n21',
    image: '/images/fava-alacati.jpg',
    category: '🍽 Gastronomi',
    title: 'Fava Restoranı 2025 Yaz Menüsünü Gün Yüzüne Çıkardı',
    date: '3 hafta önce',
    href: '/districts/alacati',
  },
  {
    id: 'n22',
    image: '/images/flyinn-beach.jpg',
    category: '🌅 Tatil',
    title: 'Fly-Inn Beach Club 2025 Sezon Açılış Partisi Düzenliyor',
    date: '3 hafta önce',
    href: '/guides/cesme-beach-club-eglence',
  },
  {
    id: 'n23',
    image: '/images/gizli-koylar.jpg',
    category: '🏖 Seyahat',
    title: 'İzmirin Gizli Koyları Listesi — 2025 Güncel Rehber',
    date: '4 hafta önce',
    href: '/guides/dikili-gizli-koylar',
  },
  {
    id: 'n24',
    image: '/images/gumus-balik.jpg',
    category: '🍽 Gastronomi',
    title: 'Gümüş Balık Karşıyakada Yeni Şubesini Açtı',
    date: '4 hafta önce',
    href: '/districts/karsiyaka',
  },
  {
    id: 'n25',
    image: '/images/hayyam-meyhane.jpg',
    category: '🎵 Müzik',
    title: 'Hayyam Meyhanede Fasıl Geceleri Başladı',
    date: '4 hafta önce',
    href: '/districts/alsancak-ve-kordon',
  },
  {
    id: 'n26',
    image: '/images/izmir-fuar-event.jpg',
    category: '🎭 Kültür',
    title: '93. İzmir Enternasyonal Fuarında 500 Etkinlik Yer Alacak',
    date: '1 ay önce',
    href: '/guides/izmir-fuar-konser-takvimi',
  },
  {
    id: 'n27',
    image: '/images/izmir-kahvalti.jpg',
    category: '🍽 Gastronomi',
    title: 'İzmir Kahvaltı Festivali 2025 Tarihleri Belli Oldu',
    date: '1 ay önce',
    href: '/guides/alsancak-en-iyi-kahvalti',
  },
  {
    id: 'n28',
    image: '/images/izmir-tiyatro.jpg',
    category: '🎭 Kültür',
    title: 'İzmir Devlet Tiyatrosu 2025 Sezonunu Açtı',
    date: '1 ay önce',
    href: '/guides/izmir-tiyatro-kultur-sanat',
  },
  {
    id: 'n29',
    image: '/images/jazz-gecesi.jpg',
    category: '🎵 Müzik',
    title: 'Ahmed Adnan Saygun GSÖde Bu Sezon 40 Konser Var',
    date: '1 ay önce',
    href: '/guides/izmir-fuar-konser-takvimi',
  },
  {
    id: 'n30',
    image: '/images/kafe-kulturu.jpg',
    category: '☕ Kültür',
    title: 'İzmir Kahve Kültürü Kitabı Yayımlandı',
    date: '1 ay önce',
    href: '/guides/izmir-tiyatro-kultur-sanat',
  },
  {
    id: 'n31',
    image: '/images/kahve-festivali.jpg',
    category: '☕ Etkinlik',
    title: '3. Uluslararası İzmir Kahve Festivali Başvuruları Açıldı',
    date: '1 ay önce',
    href: '/districts',
  },
  {
    id: 'n32',
    image: '/images/karsiyaka-bostanli.jpg',
    category: '🏙 Gündem',
    title: 'Karşıyaka İskele Yenileme Projesi Başlıyor',
    date: '1 ay önce',
    href: '/districts/karsiyaka',
  },
  {
    id: 'n33',
    image: '/images/karsiyaka-guide.jpg',
    category: '📍 Yaşam',
    title: 'Karşıyaka Çarşısı Yaya Alanı Projesi Onaylandı',
    date: '1 ay önce',
    href: '/districts/karsiyaka',
  },
  {
    id: 'n34',
    image: '/images/kiyi-beach.jpg',
    category: '🌅 Tatil',
    title: 'Kıyı Beach Club Çeşmede Yeni Sezonunu Açtı',
    date: '1 ay önce',
    href: '/districts/cesme',
  },
  {
    id: 'n35',
    image: '/images/konak-meydan.jpg',
    category: '🏛 Gündem',
    title: 'Konak Saat Kulesi Restorasyonu Tamamlandı',
    date: '1 ay önce',
    href: '/districts/konak',
  },
  {
    id: 'n36',
    image: '/images/kulturpark-izmir.jpg',
    category: '🌳 Yaşam',
    title: 'Kültürparkta Yeni Bisiklet Yolları Açıldı',
    date: '1 ay önce',
    href: '/districts/konak',
  },
  {
    id: 'n37',
    image: '/images/kulturpark-yenileme.jpg',
    category: '🏙 Gündem',
    title: 'Kültürpark İzmir Fuar Alanı Genişletiliyor',
    date: '1 ay önce',
    href: '/districts/konak',
  },
  {
    id: 'n38',
    image: '/images/levan-urla.jpg',
    category: '🍽 Gastronomi',
    title: 'Levan Urla 2025 Michelin Rehberine Girdi',
    date: '1 ay önce',
    href: '/districts/urla',
  },
  {
    id: 'n39',
    image: '/images/magro-brunch.jpg',
    category: '🍽 Gastronomi',
    title: 'Magro Alsancakta Yeni Brunch Menüsü Tanıttı',
    date: '1 ay önce',
    href: '/districts/alsancak-ve-kordon',
  },
  {
    id: 'n40',
    image: '/images/mavibar-interior.jpg',
    category: '🍸 Gece Hayatı',
    title: 'Alsancakta 5 Yeni Kokteyl Barı Açıldı',
    date: '1 ay önce',
    href: '/districts/alsancak-ve-kordon',
  },
  {
    id: 'n41',
    image: '/images/monas-art-coffee.jpg',
    category: '☕ Kültür',
    title: 'Karşıyaka Sanat Sokağı Projesi Hayata Geçiyor',
    date: '1 ay önce',
    href: '/districts/karsiyaka',
  },
  {
    id: 'n42',
    image: '/images/morisi-kahvalti.jpg',
    category: '🍽 Gastronomi',
    title: 'Morisi Bostanlıda Kahvaltı Menüsünü Yeniledi',
    date: '1 ay önce',
    href: '/districts/karsiyaka',
  },
  {
    id: 'n43',
    image: '/images/narimor-restaurant.jpg',
    category: '🍽 Gastronomi',
    title: 'OD Urla Michelin Yıldızını Korudu — 2025',
    date: '1 ay önce',
    href: '/districts/urla',
  },
  {
    id: 'n44',
    image: '/images/oca-soyali.jpg',
    category: '🍽 Gastronomi',
    title: 'Bayraklıda Yeni Gastronomi Caddesi Oluşturuluyor',
    date: '1 ay önce',
    href: '/districts/bayrakli',
  },
  {
    id: 'n45',
    image: '/images/poka-coffee.jpg',
    category: '☕ Kültür',
    title: 'Poka Coffee Roasters 3. Şubesini Açtı',
    date: '2 ay önce',
    href: '/districts/alsancak-ve-kordon',
  },
  {
    id: 'n46',
    image: '/images/refik-anadol-sergi.jpg',
    category: '🎨 Kültür',
    title: 'Arkas Sanat Merkezinde Yeni Sergi Sezonu Başladı',
    date: '2 ay önce',
    href: '/guides/izmir-tiyatro-kultur-sanat',
  },
  {
    id: 'n47',
    image: '/images/sakli-bahce.jpg',
    category: '📍 Yaşam',
    title: 'Alsancakta Gizli Bahçe Konseptli 3 Yeni Mekan',
    date: '2 ay önce',
    href: '/districts/alsancak-ve-kordon',
  },
  {
    id: 'n48',
    image: '/images/scappi-restaurant.jpg',
    category: '🍽 Gastronomi',
    title: 'İzmirde Napoli Pizzası Trendi — En İyi 5 Adres',
    date: '2 ay önce',
    href: '/districts/alsancak-ve-kordon',
  },
  {
    id: 'n49',
    image: '/images/smyrna-cafe-listing.jpg',
    category: '☕ Kültür',
    title: 'Smyrna Cafe Tarihi Binada Yeniden Açıldı',
    date: '2 ay önce',
    href: '/districts',
  },
  {
    id: 'n50',
    image: '/images/sole-mare-beach.jpg',
    category: '🌅 Tatil',
    title: 'Çeşme Plajları 2025 Mavi Bayrak Listesinde',
    date: '2 ay önce',
    href: '/districts/cesme',
  },
  {
    id: 'n51',
    image: '/images/sota-alacati.jpg',
    category: '🍽 Gastronomi',
    title: 'Sota Alaçatı Dünya 50 Best Restaurants Listesine Girdi',
    date: '2 ay önce',
    href: '/districts/alacati',
  },
  {
    id: 'n52',
    image: '/images/tarihi-asansor.jpg',
    category: '📍 Yaşam',
    title: 'Tarihi Asansörde Akşam Yemeği Etkinlikleri Başlıyor',
    date: '2 ay önce',
    href: '/guides/tarihi-asansor-karatas',
  },
  {
    id: 'n53',
    image: '/images/tekne-turlari.jpg',
    category: '⛵ Turizm',
    title: 'İzmir Körfezi Tekne Turları 2025 Sezonu Açıldı',
    date: '2 ay önce',
    href: '/districts/urla',
  },
  {
    id: 'n54',
    image: '/images/tiyatro-event.jpg',
    category: '🎭 Kültür',
    title: 'İzmir Tiyatro Festivali 2025 Programı Açıklandı',
    date: '2 ay önce',
    href: '/guides/izmir-tiyatro-kultur-sanat',
  },
  {
    id: 'n55',
    image: '/images/urla-vineyards.jpg',
    category: '🍷 Turizm',
    title: 'Urla Şarap Rotası 2025 Rehberi Yayımlandı',
    date: '2 ay önce',
    href: '/districts/urla',
  },
  {
    id: 'n56',
    image: '/images/vino-locale.jpg',
    category: '🍽 Gastronomi',
    title: 'Vino Locale Michelin Rehberinde Yıldız Aldı',
    date: '2 ay önce',
    href: '/districts/alsancak-ve-kordon',
  },
  {
    id: 'n57',
    image: '/images/yuzu-beach-concert.jpg',
    category: '🎵 Müzik',
    title: 'Çeşme Aya Yorgi Koyu 2025 Konser Takvimi',
    date: '2 ay önce',
    href: '/districts/cesme',
  },
  {
    id: 'n58',
    image: '/images/zahide-alacati.jpg',
    category: '🍽 Gastronomi',
    title: 'Zahide Alaçatı Ege Kahvaltısıyla Büyüyor',
    date: '2 ay önce',
    href: '/districts/alacati',
  },
  {
    id: 'n59',
    image: '/images/alacati-streets.jpg',
    category: '📍 Yaşam',
    title: 'Alaçatı Sokakları 2025 Yaz Sezonuna Hazırlanıyor',
    date: '3 ay önce',
    href: '/districts/alacati',
  },
  {
    id: 'n60',
    image: '/images/bewater-coffee.jpg',
    category: '☕ Kültür',
    title: 'İzmirde 15 Yeni Third Wave Kafe Açıldı',
    date: '3 ay önce',
    href: '/districts/alsancak-ve-kordon',
  },
  {
    id: 'n61',
    image: '/images/endulus-meyhane.jpg',
    category: '🎵 Müzik',
    title: 'Endülüs Meyhanede Yeni Sezon Fasıl Programı',
    date: '3 ay önce',
    href: '/districts/alsancak-ve-kordon',
  },
  {
    id: 'n62',
    image: '/images/improvement-bar.jpg',
    category: '🍸 Gece Hayatı',
    title: 'Improvement Bar Alsancakta Yeni Konseptini Tanıttı',
    date: '3 ay önce',
    href: '/districts/alsancak-ve-kordon',
  },
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
    title: 'İzmir Kahve Festivali 2025',
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
    title: 'Alaçatı Gece Hayatı Rehberi 2025',
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
    title: 'Çeşme-Alaçatı Beach Rehberi 2025',
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
