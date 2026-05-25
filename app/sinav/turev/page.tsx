import SinavSayfasi, { type SinavConfig } from "../_shared/SinavSayfasi";

const config: SinavConfig = {
  sinavKodu: "T",
  sinavAdi: "Türev Araçlar",
  tamAd: "Türev Araçlar Lisanslama Sınavı",
  aciklama: "SPK Türev Araçlar Lisanslama Sınavı'nın gerçek formatında 100 soruluk tam simülasyon.",
  soruSayisi: 100,
  sureDakika: 150,
  gecmeEsigi: 60,
  modulIds: ["m1003", "m1004", "m1005", "m1006", "m1009", "m1011", "m1013"],
  konular: [
    { pdf: "1003", ad: "Piyasalar ve İşlemler", icerik: "Pay piyasası, borçlanma araçları, birincil & ikincil piyasalar, halka arz" },
    { pdf: "1004", ad: "Muhasebe ve Mali Analiz", icerik: "Finansal tablolar, oran analizi, nakit akışı, konsolidasyon" },
    { pdf: "1005", ad: "Finansal Analiz", icerik: "Temel ve teknik analiz, portföy yönetimi, risk-getiri, değerleme yöntemleri" },
    { pdf: "1006", ad: "Ekonomi", icerik: "Makroekonomi, para politikası, döviz kuru, uluslararası finans" },
    { pdf: "1009", ad: "Risk Yönetimi", icerik: "Piyasa riski, kredi riski, operasyonel risk, VaR, stres testleri" },
    { pdf: "1011", ad: "Türev Araçlar Mevzuatı", icerik: "VOB mevzuatı, VIOP, türev araç düzenlemeleri, teminat sistemi" },
    { pdf: "1013", ad: "İleri Türev Stratejiler", icerik: "Opsiyon stratejileri, delta hedging, egzotik türevler, yapılandırılmış ürünler" },
  ],
};

export default function TurevPage() {
  return <SinavSayfasi config={config} />;
}
