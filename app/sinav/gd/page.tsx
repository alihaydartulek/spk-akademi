import SinavSayfasi, { type SinavConfig } from "../_shared/SinavSayfasi";

const config: SinavConfig = {
  sinavKodu: "GD",
  sinavAdi: "Gayrimenkul Değerleme",
  tamAd: "Gayrimenkul Değerleme Lisanslama Sınavı",
  aciklama: "Gayrimenkul Değerleme Lisanslama Sınavı'nın gerçek formatında 75 soruluk tam simülasyon.",
  soruSayisi: 75,
  sureDakika: 120,
  gecmeEsigi: 60,
  modulIds: ["m1", "m2", "m3", "m4", "m1014", "m1015", "m1019"],
  konular: [
    { pdf: "1001", ad: "Dar Kapsamlı Mevzuat ve Meslek Kuralları", icerik: "Sermaye Piyasası Kanunu (6362), değerleme kuruluşları ile lisanslama mevzuatı, Özel Durumlar Tebliği (II-15.1), TSPB meslek kuralları ve etik ilkeler" },
    { pdf: "1014", ad: "Gayrimenkul Değerleme Esasları", icerik: "Değerleme yaklaşımları (pazar karşılaştırma, gelir, maliyet), konut ve ticari gayrimenkul değerleme yöntemleri, değerleme raporu standartları" },
    { pdf: "1015", ad: "İnşaat ve Teknik Bilgiler", icerik: "Yapı tekniği ve yapı elemanları, imar mevzuatı ve plan kademeleri, inşaat maliyet hesaplama, teknik raporlama ve proje okuma" },
    { pdf: "1019", ad: "Gayrimenkul Mevzuatı", icerik: "Tapu ve kadastro mevzuatı, kat mülkiyeti kanunu, kira hukuku, değerleme standartları (UDS, EVS, TDT), SPK değerleme tebliğleri" },
  ],
};

export default function GayrimenkulDegerleme() {
  return <SinavSayfasi config={config} />;
}
