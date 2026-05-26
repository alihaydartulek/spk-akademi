import SinavSayfasi, { type SinavConfig } from "../_shared/SinavSayfasi";

const config: SinavConfig = {
  sinavKodu: "D3",
  sinavAdi: "Düzey 3",
  tamAd: "Düzey 3 SPL Sınavı",
  aciklama: "Sermaye Piyasası Faaliyetleri Düzey 3 Lisanslama Sınavı'nın gerçek formatında 100 soruluk tam simülasyon.",
  soruSayisi: 100,
  sureDakika: 150,
  gecmeEsigi: 60,
  modulIds: ["m1002", "m1003", "m1004", "m1005", "m1006", "m1007", "m1008", "m1009", "m1010", "m1012", "m1013", "m1016"],
  konular: [
    { pdf: "1002", ad: "Geniş Kapsamlı Mevzuat ve Meslek Kuralları", icerik: "SPK Kanunu, Özel Durumlar (II-15.1), Kurumsal Yönetim (II-17.1), kolektif yatırım kuruluşları (GYO, MKYO, PYŞ, YF, BYF, GSYF, GYF), TSPB meslek kuralları ve etik ilkeler" },
    { pdf: "1003", ad: "Sermaye Piyasası Araçları 1", icerik: "Paylar ve pay benzeri menkul kıymetler (VII-128.1), borçlanma araçları (VII-128.8), yatırım fonu katılma payları (III-52.1), türev araçlar, kamu borçlanma araçları" },
    { pdf: "1004", ad: "Sermaye Piyasası Araçları 2", icerik: "İzahname ve ihraç belgesi (II-5.1/5.2), varlığa/ipoteğe dayalı menkul kıymetler (III-58.1), kira sertifikaları (III-61.1), varantlar (VII-128.3), gayrimenkul sertifikaları (VII-128.2), yabancı SPA ve depo sertifikaları (VII-128.4)" },
    { pdf: "1005", ad: "Yatırım Kuruluşları", icerik: "Yatırım hizmetleri ve faaliyetleri (III-37.1), kuruluş ve faaliyet esasları (III-39.1), belge ve kayıt düzeni (III-45.1), kredili alım ve açığa satış (Seri V/65), kitle fonlaması (III-35/A.2), uzaktan kimlik tespiti (III-42.1)" },
    { pdf: "1006", ad: "Finansal Piyasalar", icerik: "BİAŞ hukuki yapısı, Pay Piyasası, Borçlanma Araçları Piyasası, VİOP, TEFAS, Takasbank ve para piyasaları, tezgahüstü (OTC) piyasalar, TCMB ve bankalararası piyasalar, EFP" },
    { pdf: "1007", ad: "Finansal Yönetim ve Mali Analiz", icerik: "Finansal planlama, başabaş analizi, kaldıraç, sermaye maliyeti ve yapısı (WACC), yatırım projesi değerleme (NPV, IRR), işletme sermayesi, birleşme ve devir, leasing ve faktöring" },
    { pdf: "1008", ad: "Genel Ekonomi", icerik: "Makroekonomik kavramlar, GSYH ve büyüme, enflasyon ve faiz teorisi, para politikası, maliye politikası, döviz kuru sistemleri, uluslararası finans ve dış ticaret" },
    { pdf: "1009", ad: "Temel Finans Matematiği ve Değerleme", icerik: "Paranın zaman değeri ve faiz hesaplamaları, getiri ve risk, portföy teorisi, CAPM ve APT, temel analiz, teknik analiz, sermaye piyasası araçlarının değerlemesi, portföy performans ölçümü (Sharpe, Treynor, Jensen)" },
    { pdf: "1010", ad: "Ticaret Hukuku", icerik: "TTK temel kavramlar, ticaret şirketi türleri, anonim şirket yapısı, yönetim ve temsil, genel kurul, pay sahipliği ve devri, limited şirket, borçlar hukuku temelleri" },
    { pdf: "1012", ad: "Takas, Saklama ve Operasyon İşlemleri", icerik: "Takasbank işleyişi, MKK ve merkezi saklama, teminat yönetimi, borsa para piyasası, ödünç pay piyasası, operasyonel süreçler" },
    { pdf: "1013", ad: "Vergilendirme", icerik: "Vergi hukukuna ilişkin temel kavramlar, kurumlar vergisi kanunu, sermaye piyasası kurumlarının vergilendirilmesi, sermaye piyasası araçlarının vergilendirilmesi (GVK, stopaj, yabancı yatırımcı)" },
    { pdf: "1016", ad: "Muhasebe ve Finansal Raporlama", icerik: "TFRS/TMS uygulamaları, finansal tablolar (bilanço, gelir tablosu, nakit akış), oran analizi, konsolidasyon, değer düşüklüğü testleri, gerçeğe uygun değer ölçümü" },
  ],
};

export default function Duzey3Page() {
  return <SinavSayfasi config={config} />;
}
