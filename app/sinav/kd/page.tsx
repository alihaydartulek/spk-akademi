import SinavSayfasi, { type SinavConfig } from "../_shared/SinavSayfasi";

const config: SinavConfig = {
  sinavKodu: "KD",
  sinavAdi: "Kredi Derecelendirme",
  tamAd: "Kredi Derecelendirme Lisanslama S�nav�",
  aciklama: "SPK Kredi Derecelendirme Lisanslama S�nav�'n�n ger�ek format�nda 100 soruluk tam sim�lasyon.",
  soruSayisi: 100,
  sureDakika: 150,
  gecmeEsigi: 60,
  modulIds: ["m1009", "m1010", "m1014", "m1016", "m1017"],
  konular: [
    { pdf: "1009", ad: "Risk Y�netimi", icerik: "Piyasa riski, kredi riski, operasyonel risk, VaR, stres testleri" },
    { pdf: "1010", ad: "Kurumsal Y�netim �lkeleri", icerik: "Y�netim kurulu, pay sahipleri, �effafl�k, kamuyu ayd�nlatma" },
    { pdf: "1014", ad: "Gayrimenkul ve De�erleme", icerik: "Ta��nmaz de�erleme, gelir yakla��m�, maliyet yakla��m�, pazar kar��la�t�rma" },
    { pdf: "1016", ad: "Takas ve Operasyon", icerik: "Takasbank, MKK, saklama, teminat y�netimi, operasyonel s�re�ler" },
    { pdf: "1017", ad: "Kredi Derecelendirme Metodolojisi", icerik: "Rating metodolojisi, finansal analiz, sekt�r analizi, derecelendirme komitesi" },
  ],
};

export default function KrediDerecelendirmePage() {
  return <SinavSayfasi config={config} />;
}
