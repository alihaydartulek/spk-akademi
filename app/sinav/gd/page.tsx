import SinavSayfasi, { type SinavConfig } from "../_shared/SinavSayfasi";

const config: SinavConfig = {
  sinavKodu: "GD",
  sinavAdi: "Gayrimenkul De�erleme",
  tamAd: "Gayrimenkul De�erleme Lisanslama S�nav�",
  aciklama: "SPK Gayrimenkul De�erleme Lisanslama S�nav�'n�n ger�ek format�nda 75 soruluk tam sim�lasyon.",
  soruSayisi: 75,
  sureDakika: 120,
  gecmeEsigi: 60,
  modulIds: ["m1014", "m1015", "m1019"],
  konular: [
    { pdf: "1014", ad: "Gayrimenkul ve De�erleme", icerik: "Ta��nmaz de�erleme, gelir yakla��m�, maliyet yakla��m�, pazar kar��la�t�rma" },
    { pdf: "1015", ad: "�n�aat ve Teknik Bilgiler", icerik: "Yap� tekni�i, imar mevzuat�, in�aat maliyeti, teknik raporlama" },
    { pdf: "1019", ad: "Gayrimenkul Mevzuat�", icerik: "Tapu-kadastro, kat m�lkiyeti, kira hukuku, de�erleme standartlar�" },
  ],
};

export default function GayrimenkulDegerleme() {
  return <SinavSayfasi config={config} />;
}
