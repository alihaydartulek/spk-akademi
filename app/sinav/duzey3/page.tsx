import SinavSayfasi, { type SinavConfig } from "../_shared/SinavSayfasi";

const config: SinavConfig = {
  sinavKodu: "D3",
  sinavAdi: "Düzey 3",
  tamAd: "Düzey 3 SPL Sınavı",
  aciklama: "SPK Sermaye Piyasası Faaliyetleri Düzey 3 Lisanslama Sınavı'nın gerçek formatında 100 soruluk tam simülasyon.",
  soruSayisi: 100,
  sureDakika: 150,
  gecmeEsigi: 60,
  modulIds: ["m1002", "m1003", "m1004", "m1005", "m1006", "m1007", "m1008", "m1009", "m1010", "m1012", "m1013", "m1016"],
  konular: [
    { pdf: "1002", ad: "Geniş Kapsamlı Mevzuat", icerik: "GYO, MKYO, PYŞ, BYF, GSYO, etik ilkeleri, kurumsal yönetim" },
    { pdf: "1003", ad: "Piyasalar ve İşlemler", icerik: "Pay piyasası, borçlanma araçları, birincil & ikincil piyasalar, halka arz" },
    { pdf: "1004", ad: "Muhasebe ve Mali Analiz", icerik: "Finansal tablolar, oran analizi, nakit akışı, konsolidasyon" },
    { pdf: "1005", ad: "Finansal Analiz", icerik: "Temel ve teknik analiz, portföy yönetimi, risk-getiri, değerleme yöntemleri" },
    { pdf: "1006", ad: "Ekonomi", icerik: "Makroekonomi, para politikası, döviz kuru, uluslararası finans" },
    { pdf: "1007", ad: "Portföy Yönetimi", icerik: "Modern portföy teorisi, CAPM, etkin piyasalar, performans ölçümü" },
    { pdf: "1008", ad: "Türev Araçlar", icerik: "Vadeli işlem, opsiyon, swap, forward sözleşmeleri ve fiyatlama" },
    { pdf: "1009", ad: "Risk Yönetimi", icerik: "Piyasa riski, kredi riski, operasyonel risk, VaR, stres testleri" },
    { pdf: "1010", ad: "Kurumsal Yönetim İlkeleri", icerik: "Yönetim kurulu, pay sahipleri, şeffaflık, kamuyu aydınlatma" },
    { pdf: "1012", ad: "Vergi Mevzuatı", icerik: "Sermaye piyasası araçlarında vergilendirme, GVK, BSMV, yabancı yatırımcı" },
    { pdf: "1013", ad: "İleri Türev Stratejiler", icerik: "Opsiyon stratejileri, delta hedging, egzotik türevler, yapılandırılmış ürünler" },
    { pdf: "1016", ad: "Takas ve Operasyon", icerik: "Takasbank, MKK, saklama, teminat yönetimi, operasyonel süreçler" },
  ],
};

export default function Duzey3Page() {
  return <SinavSayfasi config={config} />;
}
