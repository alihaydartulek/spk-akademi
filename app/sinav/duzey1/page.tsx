import SinavSayfasi, { type SinavConfig } from "../_shared/SinavSayfasi";

const config: SinavConfig = {
  sinavKodu: "D1",
  sinavAdi: "Düzey 1",
  tamAd: "Düzey 1 SPL Sınavı",
  aciklama: "Sermaye Piyasası Faaliyetleri Düzey 1 Lisanslama Sınavı'nın gerçek formatında 100 soruluk tam simülasyon.",
  soruSayisi: 100,
  sureDakika: 150,
  gecmeEsigi: 60,
  modulIds: ["m1", "m2", "m3", "m4", "m1003", "m1005", "m1012"],
  konular: [
    { pdf: "1001", ad: "Dar Kapsamlı Mevzuat ve Meslek Kuralları", icerik: "Sermaye Piyasası Kanunu (6362), Özel Durumlar Tebliği (II-15.1), Kurumsal Yönetim Tebliği (II-17.1), TSPB meslek kuralları ve sermaye piyasası çalışanları etik ilkeleri" },
    { pdf: "1003", ad: "Sermaye Piyasası Araçları 1", icerik: "Paylar ve pay benzeri menkul kıymetler (VII-128.1), borçlanma araçları (VII-128.8), yatırım fonu katılma payları (III-52.1), türev araçlar, kamu borçlanma araçları (hazine bonosu, devlet tahvili)" },
    { pdf: "1005", ad: "Yatırım Kuruluşları", icerik: "Yatırım hizmetleri ve faaliyetleri (III-37.1), kuruluş ve faaliyet esasları (III-39.1), belge ve kayıt düzeni (III-45.1), kredili alım ve açığa satış (Seri V/65), kitle fonlaması (III-35/A.2), uzaktan kimlik tespiti (III-42.1)" },
    { pdf: "1012", ad: "Takas, Saklama ve Operasyon İşlemleri", icerik: "Takasbank işleyişi, MKK ve merkezi saklama sistemi, teminat yönetimi, hesap açılışı ve transferi, operasyonel süreçler ve uzlaşma" },
  ],
};

export default function Duzey1Page() {
  return <SinavSayfasi config={config} />;
}
