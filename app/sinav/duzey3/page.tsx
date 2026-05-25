import SinavSayfasi, { type SinavConfig } from "../_shared/SinavSayfasi";

const config: SinavConfig = {
  sinavKodu: "D3",
  sinavAdi: "D�zey 3",
  tamAd: "D�zey 3 SPL S�nav�",
  aciklama: "SPK Sermaye Piyasas� Faaliyetleri D�zey 3 Lisanslama S�nav�'n�n ger�ek format�nda 100 soruluk tam sim�lasyon.",
  soruSayisi: 100,
  sureDakika: 150,
  gecmeEsigi: 60,
  modulIds: ["m1002", "m1003", "m1004", "m1005", "m1006", "m1007", "m1008", "m1009", "m1010", "m1012", "m1013", "m1016"],
  konular: [
    { pdf: "1002", ad: "Geni� Kapsaml� Mevzuat", icerik: "GYO, MKYO, PY�, BYF, GSYO, etik ilkeleri, kurumsal y�netim" },
    { pdf: "1003", ad: "Piyasalar ve ��lemler", icerik: "Pay piyasas�, bor�lanma ara�lar�, birincil & ikincil piyasalar, halka arz" },
    { pdf: "1004", ad: "Muhasebe ve Mali Analiz", icerik: "Finansal tablolar, oran analizi, nakit ak���, konsolidasyon" },
    { pdf: "1005", ad: "Finansal Analiz", icerik: "Temel ve teknik analiz, portf�y y�netimi, risk-getiri, de�erleme y�ntemleri" },
    { pdf: "1006", ad: "Ekonomi", icerik: "Makroekonomi, para politikas�, d�viz kuru, uluslararas� finans" },
    { pdf: "1007", ad: "Portf�y Y�netimi", icerik: "Modern portf�y teorisi, CAPM, etkin piyasalar, performans �l��m�" },
    { pdf: "1008", ad: "T�rev Ara�lar", icerik: "Vadeli i�lem, opsiyon, swap, forward s�zle�meleri ve fiyatlama" },
    { pdf: "1009", ad: "Risk Y�netimi", icerik: "Piyasa riski, kredi riski, operasyonel risk, VaR, stres testleri" },
    { pdf: "1010", ad: "Kurumsal Y�netim �lkeleri", icerik: "Y�netim kurulu, pay sahipleri, �effafl�k, kamuyu ayd�nlatma" },
    { pdf: "1012", ad: "Vergi Mevzuat�", icerik: "Sermaye piyasas� ara�lar�nda vergilendirme, GVK, BSMV, yabanc� yat�r�mc�" },
    { pdf: "1013", ad: "�leri T�rev Stratejiler", icerik: "Opsiyon stratejileri, delta hedging, egzotik t�revler, yap�land�r�lm�� �r�nler" },
    { pdf: "1016", ad: "Takas ve Operasyon", icerik: "Takasbank, MKK, saklama, teminat y�netimi, operasyonel s�re�ler" },
  ],
};

export default function Duzey3Page() {
  return <SinavSayfasi config={config} />;
}
