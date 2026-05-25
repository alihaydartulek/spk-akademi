// ============================================
// LisansPro - Veri Yönetimi (localStorage)
// ============================================

// Tipler
export type DersIlerleme = {
  dersId: string;
  modulId: string;
  tamamlanmaTarihi: string;
};

export type SoruCevap = {
  modulId: string;
  dersId: string;
  soruIndex: number;
  secilenCevap: string;
  dogruCevap: string;
  dogruMu: boolean;
  tarih: string;
};

export type FavoriSoru = {
  modulId: string;
  dersId: string;
  soruIndex: number;
  tarih: string;
};

export type SinavSonuc = {
  id: string;
  sinavKodu: string;
  sinavAdi: string;
  toplamSoru: number;
  dogruSayisi: number;
  yanlisSayisi: number;
  bosSayisi: number;
  puan: number;
  sureSaniye: number;
  tarih: string;
};

export type GunlukIstatistik = {
  tarih: string; // YYYY-MM-DD
  soruSayisi: number;
  dogruSayisi: number;
  yanlisSayisi: number;
  dersTamamlandi: number;
};

// ============================================
// YARDIMCI: localStorage erişimi (SSR-safe)
// ============================================
const isClient = typeof window !== "undefined";

function get<T>(key: string, defaultValue: T): T {
  if (!isClient) return defaultValue;
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return defaultValue;
    return JSON.parse(raw) as T;
  } catch {
    return defaultValue;
  }
}

function set<T>(key: string, value: T): void {
  if (!isClient) return;
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error("localStorage hatası:", e);
  }
}

// ============================================
// 1. DERS İLERLEMESİ
// ============================================
const KEY_ILERLEME = "spk_ilerleme";

export function getTamamlananDersler(): DersIlerleme[] {
  return get<DersIlerleme[]>(KEY_ILERLEME, []);
}

export function dersTamamlandiMi(dersId: string): boolean {
  return getTamamlananDersler().some((d) => d.dersId === dersId);
}

export function dersiTamamla(dersId: string, modulId: string): void {
  const liste = getTamamlananDersler();
  if (liste.some((d) => d.dersId === dersId)) return;
  liste.push({
    dersId,
    modulId,
    tamamlanmaTarihi: new Date().toISOString(),
  });
  set(KEY_ILERLEME, liste);
  // Günlük istatistiği güncelle
  bugunIstatistikGuncelle({ dersTamamlandi: 1 });
}

export function dersTamamlamasiniGeriAl(dersId: string): void {
  const liste = getTamamlananDersler().filter((d) => d.dersId !== dersId);
  set(KEY_ILERLEME, liste);
}

export function modulIlerlemesi(modulId: string, toplamDers: number): number {
  if (toplamDers === 0) return 0;
  const tamamlanan = getTamamlananDersler().filter((d) => d.modulId === modulId).length;
  return Math.round((tamamlanan / toplamDers) * 100);
}

export function tamamlananDersSayisi(modulId: string): number {
  return getTamamlananDersler().filter((d) => d.modulId === modulId).length;
}

// ============================================
// 2. SORU CEVAPLARI
// ============================================
const KEY_CEVAPLAR = "spk_cevaplar";

export function getCevaplar(): SoruCevap[] {
  return get<SoruCevap[]>(KEY_CEVAPLAR, []);
}

export function cevapKaydet(cevap: Omit<SoruCevap, "tarih">): void {
  const liste = getCevaplar();
  // Aynı soruya eski cevap varsa sil
  const filtered = liste.filter(
    (c) => !(c.modulId === cevap.modulId && c.dersId === cevap.dersId && c.soruIndex === cevap.soruIndex)
  );
  filtered.push({ ...cevap, tarih: new Date().toISOString() });
  set(KEY_CEVAPLAR, filtered);
  // Günlük istatistiği güncelle
  bugunIstatistikGuncelle({
    soruSayisi: 1,
    dogruSayisi: cevap.dogruMu ? 1 : 0,
    yanlisSayisi: cevap.dogruMu ? 0 : 1,
  });
}

export function getYanlislar(): SoruCevap[] {
  return getCevaplar().filter((c) => !c.dogruMu);
}

export function yanlisSil(modulId: string, dersId: string, soruIndex: number): void {
  const liste = getCevaplar().filter(
    (c) => !(c.modulId === modulId && c.dersId === dersId && c.soruIndex === soruIndex)
  );
  set(KEY_CEVAPLAR, liste);
}

export function getDogruSayisi(): number {
  return getCevaplar().filter((c) => c.dogruMu).length;
}

export function getYanlisSayisi(): number {
  return getCevaplar().filter((c) => !c.dogruMu).length;
}

// Bir sorunun mevcut cevabını al (önceden cevaplanmış mı?)
export function soruCevabiAl(modulId: string, dersId: string, soruIndex: number): SoruCevap | null {
  const cevap = getCevaplar().find(
    (c) => c.modulId === modulId && c.dersId === dersId && c.soruIndex === soruIndex
  );
  return cevap || null;
}

// ============================================
// 3. FAVORİLER
// ============================================
const KEY_FAVORILER = "spk_favoriler";

export function getFavoriler(): FavoriSoru[] {
  return get<FavoriSoru[]>(KEY_FAVORILER, []);
}

export function favoriMi(modulId: string, dersId: string, soruIndex: number): boolean {
  return getFavoriler().some(
    (f) => f.modulId === modulId && f.dersId === dersId && f.soruIndex === soruIndex
  );
}

export function favoriEkle(modulId: string, dersId: string, soruIndex: number): void {
  const liste = getFavoriler();
  if (favoriMi(modulId, dersId, soruIndex)) return;
  liste.push({
    modulId,
    dersId,
    soruIndex,
    tarih: new Date().toISOString(),
  });
  set(KEY_FAVORILER, liste);
}

export function favoriCikar(modulId: string, dersId: string, soruIndex: number): void {
  const liste = getFavoriler().filter(
    (f) => !(f.modulId === modulId && f.dersId === dersId && f.soruIndex === soruIndex)
  );
  set(KEY_FAVORILER, liste);
}

export function favoriToggle(modulId: string, dersId: string, soruIndex: number): boolean {
  if (favoriMi(modulId, dersId, soruIndex)) {
    favoriCikar(modulId, dersId, soruIndex);
    return false;
  } else {
    favoriEkle(modulId, dersId, soruIndex);
    return true;
  }
}

// ============================================
// 4. SINAV SONUÇLARI
// ============================================
const KEY_SINAVLAR = "spk_sinavlar";

export function getSinavSonuclari(): SinavSonuc[] {
  return get<SinavSonuc[]>(KEY_SINAVLAR, []);
}

export function sinavSonucuKaydet(sonuc: Omit<SinavSonuc, "id" | "tarih">): SinavSonuc {
  const yeniSonuc: SinavSonuc = {
    ...sonuc,
    id: Date.now().toString(),
    tarih: new Date().toISOString(),
  };
  const liste = getSinavSonuclari();
  liste.unshift(yeniSonuc); // En yeni en başta
  // Son 50 sınavı tut
  if (liste.length > 50) liste.length = 50;
  set(KEY_SINAVLAR, liste);
  return yeniSonuc;
}

// ============================================
// 5. GÜNLÜK İSTATİSTİKLER
// ============================================
const KEY_ISTATISTIKLER = "spk_istatistikler";

function bugunTarih(): string {
  return new Date().toISOString().split("T")[0]; // YYYY-MM-DD
}

export function getIstatistikler(): GunlukIstatistik[] {
  return get<GunlukIstatistik[]>(KEY_ISTATISTIKLER, []);
}

export function bugunIstatistikGuncelle(delta: Partial<Omit<GunlukIstatistik, "tarih">>): void {
  const tarih = bugunTarih();
  const liste = getIstatistikler();
  const idx = liste.findIndex((g) => g.tarih === tarih);

  if (idx >= 0) {
    liste[idx] = {
      tarih,
      soruSayisi: (liste[idx].soruSayisi || 0) + (delta.soruSayisi || 0),
      dogruSayisi: (liste[idx].dogruSayisi || 0) + (delta.dogruSayisi || 0),
      yanlisSayisi: (liste[idx].yanlisSayisi || 0) + (delta.yanlisSayisi || 0),
      dersTamamlandi: (liste[idx].dersTamamlandi || 0) + (delta.dersTamamlandi || 0),
    };
  } else {
    liste.push({
      tarih,
      soruSayisi: delta.soruSayisi || 0,
      dogruSayisi: delta.dogruSayisi || 0,
      yanlisSayisi: delta.yanlisSayisi || 0,
      dersTamamlandi: delta.dersTamamlandi || 0,
    });
  }

  // Son 90 günü tut
  liste.sort((a, b) => b.tarih.localeCompare(a.tarih));
  if (liste.length > 90) liste.length = 90;
  set(KEY_ISTATISTIKLER, liste);
}

// Streak hesapla (kaç gün üst üste çalışılmış?)
export function getStreak(): number {
  const liste = getIstatistikler()
    .filter((g) => g.soruSayisi > 0 || g.dersTamamlandi > 0)
    .map((g) => g.tarih)
    .sort()
    .reverse();

  if (liste.length === 0) return 0;

  const bugun = bugunTarih();
  const dun = new Date(Date.now() - 86400000).toISOString().split("T")[0];

  // Bugün veya dün çalışılmış olmalı
  if (liste[0] !== bugun && liste[0] !== dun) return 0;

  let streak = 1;
  for (let i = 1; i < liste.length; i++) {
    const oncekiTarih = new Date(liste[i - 1]);
    const buTarih = new Date(liste[i]);
    const diff = Math.round((oncekiTarih.getTime() - buTarih.getTime()) / 86400000);
    if (diff === 1) {
      streak++;
    } else {
      break;
    }
  }
  return streak;
}

// Modül başarı oranı (zayıf alan analizi için)
export function modulBasariOrani(modulId: string): { dogru: number; yanlis: number; oran: number } {
  const cevaplar = getCevaplar().filter((c) => c.modulId === modulId);
  const dogru = cevaplar.filter((c) => c.dogruMu).length;
  const yanlis = cevaplar.length - dogru;
  const oran = cevaplar.length > 0 ? Math.round((dogru / cevaplar.length) * 100) : 0;
  return { dogru, yanlis, oran };
}

// ============================================
// 6. TÜM VERİLERİ SİL (sıfırlama)
// ============================================
export function tumVerileriSil(): void {
  if (!isClient) return;
  localStorage.removeItem(KEY_ILERLEME);
  localStorage.removeItem(KEY_CEVAPLAR);
  localStorage.removeItem(KEY_FAVORILER);
  localStorage.removeItem(KEY_SINAVLAR);
  localStorage.removeItem(KEY_ISTATISTIKLER);
}