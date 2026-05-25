import SinavSayfasi, { type SinavConfig } from "../_shared/SinavSayfasi";

const config: SinavConfig = {
  sinavKodu: "BS",
  sinavAdi: "Bilgi Sistemleri Denetim",
  tamAd: "Bilgi Sistemleri Denetim Lisanslama Sınavı",
  aciklama: "Bilgi Sistemleri Denetim Lisanslama Sınavı'nın gerçek formatında 100 soruluk tam simülasyon.",
  soruSayisi: 100,
  sureDakika: 150,
  gecmeEsigi: 60,
  modulIds: ["m1020", "m1021", "m1022", "m1023"],
  konular: [
    { pdf: "1020", ad: "Bilgi Sistemleri Temelleri", icerik: "BT altyapısı, ağ güvenliği, sistem mimarisi, veri tabanı yönetimi" },
    { pdf: "1021", ad: "Denetim Teknikleri", icerik: "BT denetim metodolojisi, kontrol çerçeveleri, COBIT, ISO 27001" },
    { pdf: "1022", ad: "Siber Güvenlik", icerik: "Güvenlik açıkları, sızma testleri, kriptografi, kimlik doğrulama" },
    { pdf: "1023", ad: "Mevzuat ve Uyum", icerik: "Kişisel verilerin korunması, KVKK, BTK düzenlemeleri, finansal BT mevzuatı" },
  ],
};

export default function BilgiSistemleriDenetimPage() {
  return <SinavSayfasi config={config} />;
}
