import SinavSayfasi, { type SinavConfig } from "../_shared/SinavSayfasi";

const config: SinavConfig = {
  sinavKodu: "BS",
  sinavAdi: "Bilgi Sistemleri Denetim",
  tamAd: "Bilgi Sistemleri Denetim Lisanslama Sınavı",
  aciklama: "Bilgi Sistemleri Denetim Lisanslama Sınavı'nın gerçek formatında 100 soruluk tam simülasyon.",
  soruSayisi: 100,
  sureDakika: 150,
  gecmeEsigi: 60,
  modulIds: ["m1", "m2", "m3", "m4", "m1020", "m1021", "m1022", "m1023"],
  konular: [
    { pdf: "1001", ad: "Dar Kapsamlı Mevzuat ve Meslek Kuralları", icerik: "Sermaye Piyasası Kanunu (6362), bilgi sistemleri denetimine ilişkin SPK düzenlemeleri, TSPB meslek kuralları ve etik ilkeler, bağımsız denetim mevzuatı" },
    { pdf: "1020", ad: "Bilgi Sistemleri Denetimi Temelleri", icerik: "BT denetimi kavramı ve türleri, denetim kontrolleri (uygulama, genel, önleyici, tespit edici, düzeltici), CIA üçgeni, sistem güvenilirliği, denetim standardları" },
    { pdf: "1021", ad: "Yazılım Geliştirme ve BT Mimarisi", icerik: "Yazılım geliştirme yaşam döngüsü (SDLC), programlama paradigmaları, veritabanı yönetim sistemleri, ağ mimarisi, bulut bilişim" },
    { pdf: "1022", ad: "BT Yönetişimi ve Süreç Yönetimi", icerik: "COBIT, ITIL, ISO 27001, değişiklik yönetimi, olay ve sorun yönetimi, iş sürekliliği ve felaket kurtarma planlaması" },
    { pdf: "1023", ad: "Siber Güvenlik ve Mevzuat Uyum", icerik: "Siber güvenlik tehditleri ve saldırı türleri, kriptografi ve kimlik doğrulama, KVKK ve kişisel veri koruması, BTK düzenlemeleri, finansal kurumlar BT mevzuatı" },
  ],
};

export default function BilgiSistemleriDenetimPage() {
  return <SinavSayfasi config={config} />;
}
