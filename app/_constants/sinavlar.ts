/* ─────────────────────────────────────────────────────────────
 * Merkezi sınav sabitleri — tüm sayfalar buradan import eder.
 * ───────────────────────────────────────────────────────────── */

export const SINAV_MENUSU = [
  { ad: "Düzey 1 SPL Sınavı",           href: "/sinav/duzey1", aciklama: "100 soru · 150 dk" },
  { ad: "Düzey 2 SPL Sınavı",           href: "/sinav/duzey2", aciklama: "100 soru · 150 dk" },
  { ad: "Düzey 3 SPL Sınavı",           href: "/sinav/duzey3", aciklama: "100 soru · 150 dk" },
  { ad: "Türev Araçlar Sınavı",         href: "/sinav/turev",  aciklama: "100 soru · 150 dk" },
  { ad: "Kurumsal Yönetim Sınavı",      href: "/sinav/ky",     aciklama: "100 soru · 150 dk" },
  { ad: "Kredi Derecelendirme Sınavı",  href: "/sinav/kd",     aciklama: "100 soru · 150 dk" },
  { ad: "Gayrimenkul Değerleme Sınavı", href: "/sinav/gd",     aciklama: "75 soru · 120 dk"  },
  { ad: "Bilgi Sistemleri Denetim",     href: "/sinav/bs",     aciklama: "100 soru · 150 dk" },
] as const;

export const SINAVLAR = [
  {
    kod: "D1", ad: "Düzey 1",               pilAd: "Düzey 1",    renk: "blue",
    soruSayisi: 100, sureDakika: 150,
    href: "/sinav/duzey1",
    aciklama: "Temel sermaye piyasası faaliyetleri lisansı",
    pdfler: ["1001", "1003", "1005", "1012"],
  },
  {
    kod: "D2", ad: "Düzey 2",               pilAd: "Düzey 2",    renk: "cyan",
    soruSayisi: 100, sureDakika: 150,
    href: "/sinav/duzey2",
    aciklama: "İleri düzey sermaye piyasası faaliyetleri lisansı",
    pdfler: ["1002", "1003", "1004", "1005", "1006", "1007", "1010", "1012", "1016"],
  },
  {
    kod: "D3", ad: "Düzey 3",               pilAd: "Düzey 3",    renk: "indigo",
    soruSayisi: 100, sureDakika: 150,
    href: "/sinav/duzey3",
    aciklama: "Üst düzey sermaye piyasası faaliyetleri lisansı",
    pdfler: ["1002", "1003", "1004", "1005", "1006", "1007", "1008", "1009", "1010", "1012", "1013", "1016"],
  },
  {
    kod: "T",  ad: "Türev Araçlar",         pilAd: "Türev",      renk: "purple",
    soruSayisi: 100, sureDakika: 150,
    href: "/sinav/turev",
    aciklama: "Türev araçlar ve risk yönetimi lisansı",
    pdfler: ["1003", "1004", "1005", "1006", "1009", "1011", "1013"],
  },
  {
    kod: "KY", ad: "Kurumsal Yönetim",      pilAd: "Kur. Yön.",  renk: "emerald",
    soruSayisi: 100, sureDakika: 150,
    href: "/sinav/ky",
    aciklama: "Kurumsal yönetim derecelendirme lisansı",
    pdfler: ["1009", "1010", "1016", "1018"],
  },
  {
    kod: "KD", ad: "Kredi Derecl.",         pilAd: "Kredi Der.", renk: "amber",
    soruSayisi: 100, sureDakika: 150,
    href: "/sinav/kd",
    aciklama: "Kredi derecelendirme uzmanlığı lisansı",
    pdfler: ["1009", "1010", "1014", "1016", "1017"],
  },
  {
    kod: "GD", ad: "Gayrimenkul",           pilAd: "Gayrimenkul",renk: "orange",
    soruSayisi: 75,  sureDakika: 120,
    href: "/sinav/gd",
    aciklama: "Gayrimenkul değerleme uzmanlığı lisansı",
    pdfler: ["1014", "1015", "1019"],
  },
  {
    kod: "BS", ad: "Bilgi Sistemleri",      pilAd: "Bilgi Sis.", renk: "rose",
    soruSayisi: 100, sureDakika: 150,
    href: "/sinav/bs",
    aciklama: "Bilgi sistemleri bağımsız denetim lisansı",
    pdfler: ["1020", "1021", "1022", "1023"],
  },
] as const;

export type SinavMenuItem = typeof SINAV_MENUSU[number];
export type Sinav = typeof SINAVLAR[number];
