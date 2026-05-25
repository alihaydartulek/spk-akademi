import SinavSayfasi, { type SinavConfig } from "../_shared/SinavSayfasi";

const config: SinavConfig = {
  sinavKodu: "BS",
  sinavAdi: "Bilgi Sistemleri Denetim",
  tamAd: "Bilgi Sistemleri Denetim Lisanslama S�nav�",
  aciklama: "SPK Bilgi Sistemleri Denetim Lisanslama S�nav�'n�n ger�ek format�nda 100 soruluk tam sim�lasyon.",
  soruSayisi: 100,
  sureDakika: 150,
  gecmeEsigi: 60,
  modulIds: ["m1020", "m1021", "m1022", "m1023"],
  konular: [
    { pdf: "1020", ad: "Bilgi Sistemleri Temelleri", icerik: "BT altyap�s�, a� g�venli�i, sistem mimarisi, veri taban� y�netimi" },
    { pdf: "1021", ad: "Denetim Teknikleri", icerik: "BT denetim metodolojisi, kontrol �er�eveleri, COBIT, ISO 27001" },
    { pdf: "1022", ad: "Siber G�venlik", icerik: "G�venlik a��klar�, s�zma testleri, kriptografi, kimlik do�rulama" },
    { pdf: "1023", ad: "Mevzuat ve Uyum", icerik: "Ki�isel verilerin korunmas�, KVKK, BTK d�zenlemeleri, finansal BT mevzuat�" },
  ],
};

export default function BilgiSistemleriDenetimPage() {
  return <SinavSayfasi config={config} />;
}
