import SinavSayfasi, { type SinavConfig } from "../_shared/SinavSayfasi";

const config: SinavConfig = {
  sinavKodu: "KD",
  sinavAdi: "Kredi Derecelendirme",
  tamAd: "Kredi Derecelendirme Lisanslama Sınavı",
  aciklama: "SPK Kredi Derecelendirme Lisanslama Sınavı'nın gerçek formatında 100 soruluk tam simülasyon.",
  soruSayisi: 100,
  sureDakika: 150,
  gecmeEsigi: 60,
  modulIds: ["m1009", "m1010", "m1014", "m1016", "m1017"],
  konular: [
    { pdf: "1009", ad: "Risk Yönetimi", icerik: "Piyasa riski, kredi riski, operasyonel risk, VaR, stres testleri" },
    { pdf: "1010", ad: "Kurumsal Yönetim İlkeleri", icerik: "Yönetim kurulu, pay sahipleri, şeffaflık, kamuyu aydınlatma" },
    { pdf: "1014", ad: "Gayrimenkul ve Değerleme", icerik: "Taşınmaz değerleme, gelir yaklaşımı, maliyet yaklaşımı, pazar karşılaştırma" },
    { pdf: "1016", ad: "Takas ve Operasyon", icerik: "Takasbank, MKK, saklama, teminat yönetimi, operasyonel süreçler" },
    { pdf: "1017", ad: "Kredi Derecelendirme Metodolojisi", icerik: "Rating metodolojisi, finansal analiz, sektör analizi, derecelendirme komitesi" },
  ],
};

export default function KrediDerecelendirmePage() {
  return <SinavSayfasi config={config} />;
}
