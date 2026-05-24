import SinavSayfasi, { type SinavConfig } from "../_shared/SinavSayfasi";

const config: SinavConfig = {
  sinavKodu: "D1",
  sinavAdi: "Düzey 1",
  tamAd: "Düzey 1 SPL Sınavı",
  aciklama: "SPK Sermaye Piyasası Faaliyetleri Düzey 1 Lisanslama Sınavı'nın gerçek formatında 100 soruluk tam simülasyon.",
  soruSayisi: 100,
  sureDakika: 150,
  gecmeEsigi: 60,
  modulIds: ["m1", "m2", "m3", "m4", "m1003", "m1005", "m1012"],
  konular: [
    { pdf: "1001", ad: "Dar Kapsamlı Mevzuat", icerik: "Sermaye Piyasası Kanunu, Özel Durumlar Tebliği, Kurumsal Yönetim, TSPB Etik İlkeleri" },
    { pdf: "1003", ad: "Piyasalar ve İşlemler", icerik: "Pay piyasası, borçlanma araçları, birincil & ikincil piyasalar, halka arz" },
    { pdf: "1005", ad: "Finansal Analiz", icerik: "Temel ve teknik analiz, portföy yönetimi, risk-getiri, değerleme yöntemleri" },
    { pdf: "1012", ad: "Vergi Mevzuatı", icerik: "Sermaye piyasası araçlarında vergilendirme, GVK, BSMV, yabancı yatırımcı" },
  ],
};

export default function Duzey1Page() {
  return <SinavSayfasi config={config} />;
}
