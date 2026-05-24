import SinavSayfasi, { type SinavConfig } from "../_shared/SinavSayfasi";

const config: SinavConfig = {
  sinavKodu: "KY",
  sinavAdi: "Kurumsal Yönetim",
  tamAd: "Kurumsal Yönetim Derecelendirme Lisanslama Sınavı",
  aciklama: "SPK Kurumsal Yönetim Derecelendirme Lisanslama Sınavı'nın gerçek formatında 100 soruluk tam simülasyon.",
  soruSayisi: 100,
  sureDakika: 150,
  gecmeEsigi: 60,
  modulIds: ["m1009", "m1010", "m1016", "m1018"],
  konular: [
    { pdf: "1009", ad: "Risk Yönetimi", icerik: "Piyasa riski, kredi riski, operasyonel risk, VaR, stres testleri" },
    { pdf: "1010", ad: "Kurumsal Yönetim İlkeleri", icerik: "Yönetim kurulu, pay sahipleri, şeffaflık, kamuyu aydınlatma" },
    { pdf: "1016", ad: "Takas ve Operasyon", icerik: "Takasbank, MKK, saklama, teminat yönetimi, operasyonel süreçler" },
    { pdf: "1018", ad: "Kurumsal Yönetim Derecelendirme", icerik: "Derecelendirme metodolojisi, OECD ilkeleri, Türkiye uygulamaları, raporlama" },
  ],
};

export default function KurumusalYonetimPage() {
  return <SinavSayfasi config={config} />;
}
