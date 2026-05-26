import SinavSayfasi, { type SinavConfig } from "../_shared/SinavSayfasi";

const config: SinavConfig = {
  sinavKodu: "KD",
  sinavAdi: "Kredi Derecelendirme",
  tamAd: "Kredi Derecelendirme Lisanslama Sınavı",
  aciklama: "Kredi Derecelendirme Lisanslama Sınavı'nın gerçek formatında 100 soruluk tam simülasyon.",
  soruSayisi: 100,
  sureDakika: 150,
  gecmeEsigi: 60,
  modulIds: ["m1002", "m1009", "m1010", "m1016", "m1017"],
  konular: [
    { pdf: "1002", ad: "Geniş Kapsamlı Mevzuat ve Meslek Kuralları", icerik: "SPK Kanunu, Özel Durumlar (II-15.1), Kurumsal Yönetim Tebliği (II-17.1), kolektif yatırım kuruluşları tebliğleri, TSPB meslek kuralları ve etik ilkeler" },
    { pdf: "1009", ad: "Temel Finans Matematiği ve Değerleme", icerik: "Paranın zaman değeri, getiri ve risk, portföy teorisi, CAPM ve APT, temel analiz, teknik analiz, şirket ve borç aracı değerlemesi, portföy performans ölçümü" },
    { pdf: "1010", ad: "Ticaret Hukuku", icerik: "TTK temel kavramlar, şirket türleri ve hukuki yapısı, borç ve iflas hukuku, teminat ve rehin, tahvil ihracı hukuku" },
    { pdf: "1016", ad: "Muhasebe ve Finansal Raporlama", icerik: "TFRS/TMS uygulamaları, finansal tablolar analizi, oran analizi (likidite, borçluluk, kârlılık), nakit akış analizi, konsolidasyon, karşılaştırmalı sektör analizi" },
    { pdf: "1017", ad: "Kredi Derecelendirme", icerik: "Rating metodolojisi ve derecelendirme süreci, finansal analiz ve sektör karşılaştırması, nitel ve nicel faktörler, kredi riski ölçümü, derecelendirme komitesi, not açıklamaları ve izleme" },
  ],
};

export default function KrediDerecelendirmePage() {
  return <SinavSayfasi config={config} />;
}
