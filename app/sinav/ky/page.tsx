import SinavSayfasi, { type SinavConfig } from "../_shared/SinavSayfasi";

const config: SinavConfig = {
  sinavKodu: "KY",
  sinavAdi: "Kurumsal Yönetim",
  tamAd: "Kurumsal Yönetim Derecelendirme Lisanslama Sınavı",
  aciklama: "Kurumsal Yönetim Derecelendirme Lisanslama Sınavı'nın gerçek formatında 100 soruluk tam simülasyon.",
  soruSayisi: 100,
  sureDakika: 150,
  gecmeEsigi: 60,
  modulIds: ["m1002", "m1009", "m1010", "m1016", "m1018"],
  konular: [
    { pdf: "1002", ad: "Geniş Kapsamlı Mevzuat ve Meslek Kuralları", icerik: "SPK Kanunu, Özel Durumlar (II-15.1), Kurumsal Yönetim Tebliği (II-17.1), kolektif yatırım kuruluşları (GYO, MKYO, PYŞ, YF, BYF, GSYF), TSPB meslek kuralları ve etik ilkeler" },
    { pdf: "1009", ad: "Temel Finans Matematiği ve Değerleme", icerik: "Paranın zaman değeri, getiri ve risk, portföy teorisi, CAPM ve APT, temel analiz, teknik analiz, şirket değerleme yöntemleri, portföy performans ölçümü" },
    { pdf: "1010", ad: "Ticaret Hukuku", icerik: "TTK temel kavramlar, ticaret şirketi türleri, anonim şirket yapısı, yönetim kurulu, genel kurul, azınlık hakları, pay sahipliği ve devri" },
    { pdf: "1016", ad: "Muhasebe ve Finansal Raporlama", icerik: "TFRS/TMS uygulamaları, finansal tablolar analizi, şeffaflık ve kamuyu aydınlatma yükümlülükleri, konsolidasyon, bağımsız denetim" },
    { pdf: "1018", ad: "Kurumsal Yönetim Derecelendirme", icerik: "Kurumsal yönetim ilkeleri (OECD ve SPK), derecelendirme metodolojisi, pay sahipleri hakları, kamuyu aydınlatma ve şeffaflık, menfaat sahipleri, yönetim kurulu uygulamaları" },
  ],
};

export default function KurumusalYonetimPage() {
  return <SinavSayfasi config={config} />;
}
