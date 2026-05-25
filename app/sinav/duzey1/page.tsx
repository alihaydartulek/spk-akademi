import SinavSayfasi, { type SinavConfig } from "../_shared/SinavSayfasi";

const config: SinavConfig = {
  sinavKodu: "D1",
  sinavAdi: "D�zey 1",
  tamAd: "D�zey 1 SPL S�nav�",
  aciklama: "SPK Sermaye Piyasas� Faaliyetleri D�zey 1 Lisanslama S�nav�'n�n ger�ek format�nda 100 soruluk tam sim�lasyon.",
  soruSayisi: 100,
  sureDakika: 150,
  gecmeEsigi: 60,
  modulIds: ["m1", "m2", "m3", "m4", "m1003", "m1005", "m1012"],
  konular: [
    { pdf: "1001", ad: "Dar Kapsaml� Mevzuat", icerik: "Sermaye Piyasas� Kanunu, �zel Durumlar Tebli�i, Kurumsal Y�netim, TSPB Etik �lkeleri" },
    { pdf: "1003", ad: "Piyasalar ve ��lemler", icerik: "Pay piyasas�, bor�lanma ara�lar�, birincil & ikincil piyasalar, halka arz" },
    { pdf: "1005", ad: "Finansal Analiz", icerik: "Temel ve teknik analiz, portf�y y�netimi, risk-getiri, de�erleme y�ntemleri" },
    { pdf: "1012", ad: "Vergi Mevzuat�", icerik: "Sermaye piyasas� ara�lar�nda vergilendirme, GVK, BSMV, yabanc� yat�r�mc�" },
  ],
};

export default function Duzey1Page() {
  return <SinavSayfasi config={config} />;
}
