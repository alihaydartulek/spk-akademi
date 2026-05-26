import SinavSayfasi, { type SinavConfig } from "../_shared/SinavSayfasi";

const config: SinavConfig = {
  sinavKodu: "T",
  sinavAdi: "Türev Araçlar",
  tamAd: "Türev Araçlar Lisanslama Sınavı",
  aciklama: "Türev Araçlar Lisanslama Sınavı'nın gerçek formatında 100 soruluk tam simülasyon.",
  soruSayisi: 100,
  sureDakika: 150,
  gecmeEsigi: 60,
  modulIds: ["m1002", "m1003", "m1004", "m1005", "m1006", "m1009", "m1011", "m1013"],
  konular: [
    { pdf: "1002", ad: "Geniş Kapsamlı Mevzuat ve Meslek Kuralları", icerik: "SPK Kanunu, Özel Durumlar Tebliği (II-15.1), Kurumsal Yönetim (II-17.1), kolektif yatırım kuruluşları (GYO, MKYO, YF, BYF, GSYF), TSPB meslek kuralları ve etik ilkeler" },
    { pdf: "1003", ad: "Sermaye Piyasası Araçları 1", icerik: "Paylar ve pay benzeri menkul kıymetler (VII-128.1), borçlanma araçları (VII-128.8), yatırım fonu katılma payları (III-52.1), türev araçlar, kamu borçlanma araçları" },
    { pdf: "1004", ad: "Sermaye Piyasası Araçları 2", icerik: "İzahname ve ihraç belgesi (II-5.1/5.2), varlığa/ipoteğe dayalı menkul kıymetler (III-58.1), kira sertifikaları (III-61.1), varantlar (VII-128.3), gayrimenkul sertifikaları, yabancı sermaye piyasası araçları (VII-128.4)" },
    { pdf: "1005", ad: "Yatırım Kuruluşları", icerik: "Yatırım hizmetleri ve faaliyetleri (III-37.1), kuruluş ve faaliyet esasları (III-39.1), belge ve kayıt düzeni (III-45.1), kredili alım ve açığa satış (Seri V/65), kitle fonlaması (III-35/A.2), uzaktan kimlik tespiti (III-42.1)" },
    { pdf: "1006", ad: "Finansal Piyasalar", icerik: "BİAŞ hukuki yapısı, Pay Piyasası, Borçlanma Araçları Piyasası, VİOP, TEFAS, Takasbank ve para piyasaları, tezgahüstü (OTC) piyasalar, TCMB ve bankalararası piyasalar, Bireysel Emeklilik Fon Platformu (EFP)" },
    { pdf: "1009", ad: "Temel Finans Matematiği ve Değerleme", icerik: "Paranın zaman değeri ve faiz hesaplamaları, getiri ve risk, portföy teorisi, CAPM ve APT, temel analiz, teknik analiz, sermaye piyasası araçlarının değerlemesi, portföy performans ölçümü (Sharpe, Treynor, Jensen)" },
    { pdf: "1011", ad: "Türev Araçlar, Piyasalar ve Risk Yönetimi", icerik: "Türev araçlarla ilgili temel kavramlar, türev araç piyasaları, vadeli işlem sözleşmeleri, opsiyonlar, swap anlaşmaları, diğer türev araçlar, risk yönetiminde kullanım, fiyatlama, türev stratejileri" },
    { pdf: "1013", ad: "Kurumlarda ve Sermaye Piyasasında Vergilendirme", icerik: "Vergi hukukuna ilişkin temel kavramlar, kurumlar vergisi kanunu, sermaye piyasası kurumlarının vergilendirilmesi, sermaye piyasası araçlarının vergilendirilmesi" },
  ],
};

export default function TurevPage() {
  return <SinavSayfasi config={config} />;
}
