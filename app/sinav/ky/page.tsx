import SinavSayfasi, { type SinavConfig } from "../_shared/SinavSayfasi";

const config: SinavConfig = {
  sinavKodu: "KY",
  sinavAdi: "Kurumsal Y�netim",
  tamAd: "Kurumsal Y�netim Derecelendirme Lisanslama S�nav�",
  aciklama: "SPK Kurumsal Y�netim Derecelendirme Lisanslama S�nav�'n�n ger�ek format�nda 100 soruluk tam sim�lasyon.",
  soruSayisi: 100,
  sureDakika: 150,
  gecmeEsigi: 60,
  modulIds: ["m1009", "m1010", "m1016", "m1018"],
  konular: [
    { pdf: "1009", ad: "Risk Y�netimi", icerik: "Piyasa riski, kredi riski, operasyonel risk, VaR, stres testleri" },
    { pdf: "1010", ad: "Kurumsal Y�netim �lkeleri", icerik: "Y�netim kurulu, pay sahipleri, �effafl�k, kamuyu ayd�nlatma" },
    { pdf: "1016", ad: "Takas ve Operasyon", icerik: "Takasbank, MKK, saklama, teminat y�netimi, operasyonel s�re�ler" },
    { pdf: "1018", ad: "Kurumsal Y�netim Derecelendirme", icerik: "Derecelendirme metodolojisi, OECD ilkeleri, T�rkiye uygulamalar�, raporlama" },
  ],
};

export default function KurumusalYonetimPage() {
  return <SinavSayfasi config={config} />;
}
