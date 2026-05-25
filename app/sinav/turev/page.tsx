import SinavSayfasi, { type SinavConfig } from "../_shared/SinavSayfasi";

const config: SinavConfig = {
  sinavKodu: "T",
  sinavAdi: "T�rev Ara�lar",
  tamAd: "T�rev Ara�lar Lisanslama S�nav�",
  aciklama: "SPK T�rev Ara�lar Lisanslama S�nav�'n�n ger�ek format�nda 100 soruluk tam sim�lasyon.",
  soruSayisi: 100,
  sureDakika: 150,
  gecmeEsigi: 60,
  modulIds: ["m1003", "m1004", "m1005", "m1006", "m1009", "m1011", "m1013"],
  konular: [
    { pdf: "1003", ad: "Piyasalar ve ��lemler", icerik: "Pay piyasas�, bor�lanma ara�lar�, birincil & ikincil piyasalar, halka arz" },
    { pdf: "1004", ad: "Muhasebe ve Mali Analiz", icerik: "Finansal tablolar, oran analizi, nakit ak���, konsolidasyon" },
    { pdf: "1005", ad: "Finansal Analiz", icerik: "Temel ve teknik analiz, portf�y y�netimi, risk-getiri, de�erleme y�ntemleri" },
    { pdf: "1006", ad: "Ekonomi", icerik: "Makroekonomi, para politikas�, d�viz kuru, uluslararas� finans" },
    { pdf: "1009", ad: "Risk Y�netimi", icerik: "Piyasa riski, kredi riski, operasyonel risk, VaR, stres testleri" },
    { pdf: "1011", ad: "T�rev Ara�lar Mevzuat�", icerik: "VOB mevzuat�, VIOP, t�rev ara� d�zenlemeleri, teminat sistemi" },
    { pdf: "1013", ad: "�leri T�rev Stratejiler", icerik: "Opsiyon stratejileri, delta hedging, egzotik t�revler, yap�land�r�lm�� �r�nler" },
  ],
};

export default function TurevPage() {
  return <SinavSayfasi config={config} />;
}
