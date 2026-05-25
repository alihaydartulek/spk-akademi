import SinavSayfasi, { type SinavConfig } from "../_shared/SinavSayfasi";

const config: SinavConfig = {
  sinavKodu: "GD",
  sinavAdi: "Gayrimenkul Değerleme",
  tamAd: "Gayrimenkul Değerleme Lisanslama Sınavı",
  aciklama: "Gayrimenkul Değerleme Lisanslama Sınavı'nın gerçek formatında 75 soruluk tam simülasyon.",
  soruSayisi: 75,
  sureDakika: 120,
  gecmeEsigi: 60,
  modulIds: ["m1014", "m1015", "m1019"],
  konular: [
    { pdf: "1014", ad: "Gayrimenkul ve Değerleme", icerik: "Taşınmaz değerleme, gelir yaklaşımı, maliyet yaklaşımı, pazar karşılaştırma" },
    { pdf: "1015", ad: "İnşaat ve Teknik Bilgiler", icerik: "Yapı tekniği, imar mevzuatı, inşaat maliyeti, teknik raporlama" },
    { pdf: "1019", ad: "Gayrimenkul Mevzuatı", icerik: "Tapu-kadastro, kat mülkiyeti, kira hukuku, değerleme standartları" },
  ],
};

export default function GayrimenkulDegerleme() {
  return <SinavSayfasi config={config} />;
}
