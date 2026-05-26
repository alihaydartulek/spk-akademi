import SinavSayfasi, { type SinavConfig } from "../_shared/SinavSayfasi";

const config: SinavConfig = {
  sinavKodu: "KV",
  sinavAdi: "Konut Değerleme",
  tamAd: "Konut Değerleme Lisanslama Sınavı",
  aciklama: "Konut Değerleme Lisanslama Sınavı'nın gerçek formatında 50 soruluk tam simülasyon.",
  soruSayisi: 50,
  sureDakika: 90,
  gecmeEsigi: 60,
  modulIds: ["m1", "m2", "m3", "m4", "m1014"],
  konular: [
    { pdf: "1001", ad: "Dar Kapsamlı Mevzuat ve Meslek Kuralları", icerik: "Sermaye Piyasası Kanunu (6362), değerleme kuruluşları ile lisanslama mevzuatı, Özel Durumlar Tebliği (II-15.1), TSPB meslek kuralları ve etik ilkeler" },
    { pdf: "1014", ad: "Gayrimenkul Değerleme Esasları", icerik: "Değerleme yaklaşımları (pazar karşılaştırma, gelir, maliyet), konut değerleme yöntemleri, konut pazar analizi, değerleme raporu hazırlama standartları" },
  ],
};

export default function KonutDegerleme() {
  return <SinavSayfasi config={config} />;
}
