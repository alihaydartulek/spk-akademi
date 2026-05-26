import SinavSayfasi, { type SinavConfig } from "../_shared/SinavSayfasi";

const config: SinavConfig = {
  sinavKodu: "KV",
  sinavAdi: "Konut Değerleme",
  tamAd: "Konut Değerleme Lisanslama Sınavı",
  aciklama: "Konut Değerleme Lisanslama Sınavı'nın gerçek formatında 50 soruluk tam simülasyon.",
  soruSayisi: 50,
  sureDakika: 90,
  gecmeEsigi: 60,
  modulIds: ["m1001", "m1014"],
  konular: [
    { pdf: "1001", ad: "Dar Kapsamlı Mevzuat ve Meslek Kuralları", icerik: "Sermaye piyasası mevzuatı, değerleme kuruluşları, meslek etiği, SPK düzenlemeleri" },
    { pdf: "1014", ad: "Gayrimenkul Değerleme Esasları", icerik: "Değerleme yaklaşımları, konut değerleme yöntemleri, pazar karşılaştırma, değerleme raporu" },
  ],
};

export default function KonutDegerleme() {
  return <SinavSayfasi config={config} />;
}
