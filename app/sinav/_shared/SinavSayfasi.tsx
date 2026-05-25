"use client";

/* ─────────────────────────────────────────────────────────────────────────────
 * SPK Akademi — Ortak Sınav Sayfası Bileşeni
 *
 * Tüm sınav sayfaları (Düzey 1-3, Türev, KY, KD, GD, BS) bu bileşeni kullanır.
 * Her sayfa yalnızca `config` nesnesini geçirir; tüm mantık burada yaşar.
 * ─────────────────────────────────────────────────────────────────────────── */

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { modules } from "../../index";
import type { Question } from "../../mevzuat";
import { sinavSonucuKaydet, favoriEkle } from "../../lib/storage";

/* ─── Yardımcı hook ─── */

function useCountUpFloat(target: number, duration = 1500) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(parseFloat((progress * target).toFixed(1)));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration]);
  return count;
}

/* ─── Tip Tanımları ─── */

export type Konu = {
  pdf: string;
  ad: string;
  icerik: string;
};

export type SinavConfig = {
  sinavKodu: string;   // "D1", "D2", "KY" …
  sinavAdi: string;    // "Düzey 1"
  tamAd: string;       // "Düzey 1 SPL Sınavı"
  aciklama: string;    // kısa açıklama
  soruSayisi: number;  // 100 veya 75
  sureDakika: number;  // 150 veya 120
  gecmeEsigi: number;  // 60
  modulIds: string[];  // ["m1","m2","m1003", …]
  konular: Konu[];     // hazırlık ekranında gösterilecek konu listesi
};

/* ─── Yardımcı fonksiyonlar ─── */

type SinavSoru = Question & {
  modulId: string;
  modulBaslik: string;
  dersId: string;
  dersBaslik: string;
  soruIndex: number; // orijinal ders.questions[] içindeki indeks
};

/* ─── Draft (ilerleme kaydı) yardımcıları ─── */

type SinavDraft = {
  sorular: SinavSoru[];
  cevaplar: Record<number, string>;
  isaretliler: number[];
  aktifIdx: number;
  bitis: number; // epoch ms — sınavın biteceği an
};

function draftKey(kod: string) {
  return `sinav_draft_${kod}`;
}

function draftKaydet(
  kod: string,
  sorular: SinavSoru[],
  cevaplar: Record<number, string>,
  isaretliler: Set<number>,
  aktifIdx: number,
  kalanSaniye: number
) {
  if (typeof window === "undefined") return;
  const draft: SinavDraft = {
    sorular,
    cevaplar,
    isaretliler: Array.from(isaretliler),
    aktifIdx,
    bitis: Date.now() + kalanSaniye * 1000,
  };
  try {
    localStorage.setItem(draftKey(kod), JSON.stringify(draft));
  } catch { /* localStorage dolu olabilir */ }
}

function draftYukle(kod: string): SinavDraft | null {
  if (typeof window === "undefined") return null;
  const raw = localStorage.getItem(draftKey(kod));
  if (!raw) return null;
  try {
    const draft: SinavDraft = JSON.parse(raw);
    if (draft.bitis <= Date.now()) {
      localStorage.removeItem(draftKey(kod));
      return null;
    }
    return draft;
  } catch {
    return null;
  }
}

function draftTemizle(kod: string) {
  if (typeof window === "undefined") return;
  localStorage.removeItem(draftKey(kod));
}

function karistir<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function sorularHazirla(config: SinavConfig): SinavSoru[] {
  const tumSorular: SinavSoru[] = [];
  modules.forEach((modul) => {
    if (!config.modulIds.includes(modul.id)) return;
    modul.lessons.forEach((ders) => {
      ders.questions.forEach((soru, soruIndex) => {
        tumSorular.push({
          ...soru,
          modulId: modul.id,
          modulBaslik: modul.title,
          dersId: ders.id,
          dersBaslik: ders.title,
          soruIndex,
        });
      });
    });
  });
  return karistir(tumSorular).slice(0, config.soruSayisi);
}

/* ─── Ana Bileşen ─── */

type Asama = "hazirlik" | "sinav" | "sonuc";

export default function SinavSayfasi({ config }: { config: SinavConfig }) {
  const [asama, setAsama] = useState<Asama>("hazirlik");
  const [sorular, setSorular] = useState<SinavSoru[]>([]);
  const [aktifIdx, setAktifIdx] = useState(0);
  const [cevaplar, setCevaplar] = useState<Record<number, string>>({});
  const [isaretliler, setIsaretliler] = useState<Set<number>>(new Set());
  const [kalanSaniye, setKalanSaniye] = useState(config.sureDakika * 60);
  const [baslangicMs, setBaslangicMs] = useState(0);
  const [sonucData, setSonucData] = useState<ReturnType<typeof hesaplaSonuc> | null>(null);
  const [gozlemModu, setGozlemModu] = useState(false);
  const [draft, setDraft] = useState<SinavDraft | null>(null);
  const [onayModal, setOnayModal] = useState<{ mesaj: string; onEvet: () => void } | null>(null);
  const [mobilHaritaAcik, setMobilHaritaAcik] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const sorularRef = useRef<HTMLDivElement | null>(null);

  /* Draft kontrolü — mount'ta bir kez */
  useEffect(() => {
    setDraft(draftYukle(config.sinavKodu));
  }, [config.sinavKodu]);

  /* Süre sayacı */
  useEffect(() => {
    if (asama !== "sinav") return;
    timerRef.current = setInterval(() => {
      setKalanSaniye((s) => {
        if (s <= 1) {
          clearInterval(timerRef.current!);
          bitirSinav();
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(timerRef.current!);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [asama]);

  /* Klavye kısayolları */
  useEffect(() => {
    if (asama !== "sinav") return;
    const handler = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement;
      if (t.tagName === "INPUT" || t.tagName === "TEXTAREA") return;
      if (e.key === "ArrowLeft")  setAktifIdx((i) => Math.max(0, i - 1));
      if (e.key === "ArrowRight") setAktifIdx((i) => Math.min(sorular.length - 1, i + 1));
      if (e.key === "a" || e.key === "A") setCevaplar((p) => ({ ...p, [aktifIdx]: "A" }));
      if (e.key === "b" || e.key === "B") setCevaplar((p) => ({ ...p, [aktifIdx]: "B" }));
      if (e.key === "c" || e.key === "C") setCevaplar((p) => ({ ...p, [aktifIdx]: "C" }));
      if (e.key === "d" || e.key === "D") setCevaplar((p) => ({ ...p, [aktifIdx]: "D" }));
      if (e.key === "m" || e.key === "M") {
        setIsaretliler((prev) => {
          const next = new Set(prev);
          next.has(aktifIdx) ? next.delete(aktifIdx) : next.add(aktifIdx);
          return next;
        });
      }
      if (e.key === "Enter") {
        setAktifIdx((i) => Math.min(sorular.length - 1, i + 1));
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [asama, aktifIdx, sorular.length]);

  /* Soru haritası otomatik kaydır */
  useEffect(() => {
    if (!sorularRef.current) return;
    const btn = sorularRef.current.querySelector(`[data-idx="${aktifIdx}"]`);
    btn?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [aktifIdx]);

  /* Otomatik draft kayıt — soru değişince ve işaretleyince */
  useEffect(() => {
    if (asama !== "sinav" || sorular.length === 0) return;
    draftKaydet(config.sinavKodu, sorular, cevaplar, isaretliler, aktifIdx, kalanSaniye);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [aktifIdx, isaretliler.size, asama]);

  /* ─── İşlemler ─── */

  function sinaviBaslat() {
    const hazir = sorularHazirla(config);
    if (hazir.length === 0) {
      alert("Bu sınav için yeterli soru bulunamadı.");
      return;
    }
    draftTemizle(config.sinavKodu); // eski draft'ı sil
    setSorular(hazir);
    setCevaplar({});
    setIsaretliler(new Set());
    setAktifIdx(0);
    setKalanSaniye(config.sureDakika * 60);
    setBaslangicMs(Date.now());
    setDraft(null);
    setAsama("sinav");
  }

  function devamEt(savedDraft: SinavDraft) {
    const kalanMs = savedDraft.bitis - Date.now();
    const kalanSn = Math.max(0, Math.floor(kalanMs / 1000));
    setSorular(savedDraft.sorular);
    setCevaplar(savedDraft.cevaplar);
    setIsaretliler(new Set(savedDraft.isaretliler));
    setAktifIdx(savedDraft.aktifIdx);
    setKalanSaniye(kalanSn);
    setBaslangicMs(Date.now() - ((config.sureDakika * 60 - kalanSn) * 1000));
    setDraft(null);
    setAsama("sinav");
  }

  function cevapla(idx: number, opt: string) {
    setCevaplar((p) => {
      const yeni = { ...p, [idx]: opt };
      // Her cevapta draft kaydet
      draftKaydet(config.sinavKodu, sorular, yeni, isaretliler, kalanSaniye, kalanSaniye);
      return yeni;
    });
  }

  function isaretToggle(idx: number) {
    setIsaretliler((prev) => {
      const next = new Set(prev);
      next.has(idx) ? next.delete(idx) : next.add(idx);
      return next;
    });
  }

  function hesaplaSonuc(sorularParam: SinavSoru[], cevaplarParam: Record<number, string>) {
    let dogru = 0, yanlis = 0, bos = 0;
    const detaylar = sorularParam.map((soru, idx) => {
      const verilen = cevaplarParam[idx];
      if (!verilen) { bos++; return { soru, verilen: null as string | null, dogru: false }; }
      if (verilen === soru.correct) { dogru++; return { soru, verilen, dogru: true }; }
      yanlis++;
      return { soru, verilen, dogru: false };
    });
    const puan = parseFloat(((dogru / sorularParam.length) * 100).toFixed(2));
    const sureSaniye = Math.round((Date.now() - baslangicMs) / 1000);
    const gecti = puan >= config.gecmeEsigi;

    const konuHaritasi: Record<string, { baslik: string; toplam: number; dogru: number }> = {};
    detaylar.forEach(({ soru, dogru: d }) => {
      const key = soru.modulId;
      if (!konuHaritasi[key]) konuHaritasi[key] = { baslik: soru.modulBaslik, toplam: 0, dogru: 0 };
      konuHaritasi[key].toplam++;
      if (d) konuHaritasi[key].dogru++;
    });

    return { dogru, yanlis, bos, puan, sureSaniye, gecti, detaylar, konuHaritasi };
  }

  const bitirSinav = useCallback(() => {
    clearInterval(timerRef.current!);
    draftTemizle(config.sinavKodu); // bitti, draft'ı temizle
    const sc = hesaplaSonuc(sorular, cevaplar);
    setSonucData(sc);
    sinavSonucuKaydet({
      sinavKodu: config.sinavKodu,
      sinavAdi: config.tamAd,
      toplamSoru: sorular.length,
      dogruSayisi: sc.dogru,
      yanlisSayisi: sc.yanlis,
      bosSayisi: sc.bos,
      puan: sc.puan,
      sureSaniye: sc.sureSaniye,
    });
    setAsama("sonuc");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sorular, cevaplar, baslangicMs, config.sinavKodu, config.tamAd]);

  /* ════════════════════════════════════════════
   * HAZIRLIK EKRANI
   * ════════════════════════════════════════════ */
  if (asama === "hazirlik") {
    return (
      <div className="min-h-screen bg-[var(--bg-base)]">
        <SinavNavbar config={config} asama="hazirlik" />
        <div className="max-w-3xl mx-auto px-6 py-16">

          {/* Başlık */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-500/10 text-indigo-300 rounded-full text-xs font-bold tracking-wider uppercase mb-5 border border-indigo-400/30">
              🎓 Gerçek Sınav Formatı
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4 tracking-tight">
              {config.tamAd}
            </h1>
            <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
              {config.aciklama}
            </p>
          </div>

          {/* Sınav bilgileri */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {[
              { ikon: "📝", deger: config.soruSayisi.toString(), etiket: "Soru" },
              { ikon: "⏱️", deger: `${config.sureDakika} dk`, etiket: "Süre" },
              { ikon: "✅", deger: `%${config.gecmeEsigi}`, etiket: "Geçme Notu" },
              { ikon: "🎯", deger: "A/B/C/D", etiket: "Şık Sayısı" },
            ].map((k) => (
              <div key={k.etiket} className="bg-[var(--bg-surface-2)] border border-[var(--border-base)] rounded-2xl p-5 text-center shadow-xl shadow-indigo-900/20">
                <div className="text-3xl mb-2">{k.ikon}</div>
                <div className="text-2xl font-bold text-[var(--text-primary)] mb-1">{k.deger}</div>
                <div className="text-xs text-[var(--text-muted)] uppercase tracking-wider">{k.etiket}</div>
              </div>
            ))}
          </div>

          {/* Konu dağılımı */}
          <div className="bg-[var(--bg-surface-2)] border border-[var(--border-base)] rounded-2xl p-6 mb-10 shadow-xl shadow-indigo-900/20">
            <h3 className="font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
              <span className="w-6 h-6 bg-indigo-500/20 rounded-md flex items-center justify-center text-indigo-400 text-sm">📚</span>
              Konu Dağılımı
            </h3>
            <div className="space-y-2 text-sm">
              {config.konular.map((k) => (
                <div key={k.pdf} className="flex items-start gap-3 p-3 bg-[var(--bg-surface)]/40 rounded-xl border border-[var(--border-base)]">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0 mt-2" />
                  <div>
                    <div className="font-semibold text-[var(--text-primary)]">{k.ad}</div>
                    <div className="text-[var(--text-muted)] text-xs mt-0.5">{k.icerik}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Klavye kısayolları */}
          <div className="bg-[var(--bg-surface-2)]/50 border border-[var(--border-base)] rounded-2xl p-5 mb-10">
            <h3 className="text-sm font-bold text-[var(--text-secondary)] mb-3 uppercase tracking-wider">⌨️ Klavye Kısayolları</h3>
            <div className="grid grid-cols-2 gap-2 text-xs text-[var(--text-muted)]">
              <div><kbd className="bg-[var(--bg-surface-3)] text-[var(--text-secondary)] px-1.5 py-0.5 rounded text-xs font-mono">A/B/C/D</kbd> — Şık seç</div>
              <div><kbd className="bg-[var(--bg-surface-3)] text-[var(--text-secondary)] px-1.5 py-0.5 rounded text-xs font-mono">← →</kbd> — Soru geç</div>
              <div><kbd className="bg-[var(--bg-surface-3)] text-[var(--text-secondary)] px-1.5 py-0.5 rounded text-xs font-mono">Enter</kbd> — Sonraki soru</div>
              <div><kbd className="bg-[var(--bg-surface-3)] text-[var(--text-secondary)] px-1.5 py-0.5 rounded text-xs font-mono">M</kbd> — İşaretle / kaldır</div>
            </div>
          </div>

          {/* Devam Et (draft varsa) */}
          {draft && (
            <div className="mb-8 bg-amber-500/10 border border-amber-500/30 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="text-3xl">⏸️</div>
              <div className="flex-1 min-w-0">
                <div className="font-bold text-amber-300 mb-1">Yarım bırakılan sınav bulundu</div>
                <div className="text-sm text-[var(--text-muted)]">
                  {Object.keys(draft.cevaplar).length} soru cevaplandı ·{" "}
                  {Math.floor(Math.max(0, draft.bitis - Date.now()) / 60000)} dk kalan süre
                </div>
              </div>
              <div className="flex gap-3 flex-shrink-0">
                <button
                  onClick={() => devamEt(draft)}
                  className="bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-5 py-2.5 rounded-xl text-sm shadow-lg shadow-amber-500/30 transition"
                >
                  Devam Et →
                </button>
                <button
                  onClick={() => { draftTemizle(config.sinavKodu); setDraft(null); }}
                  className="bg-[var(--bg-surface-3)] hover:bg-[var(--bg-surface-2)] text-[var(--text-secondary)] font-semibold px-4 py-2.5 rounded-xl text-sm transition"
                >
                  Sil
                </button>
              </div>
            </div>
          )}

          {/* Başlat butonu */}
          <div className="text-center pb-24 lg:pb-0">
            <button
              onClick={sinaviBaslat}
              className="group bg-gradient-to-br from-indigo-500 to-indigo-700 hover:from-indigo-600 hover:to-indigo-800 text-white px-12 py-5 rounded-2xl font-bold text-xl shadow-2xl shadow-indigo-500/40 transition-all hover:scale-105 hover:shadow-indigo-500/60"
            >
              🚀 {draft ? "Yeni Sınav Başlat" : "Sınavı Başlat"}
              <span className="block text-sm font-normal text-indigo-200 mt-1">
                {config.soruSayisi} soru · {config.sureDakika} dakika
              </span>
            </button>
            <p className="text-[var(--text-muted)] text-sm mt-5">
              Sorular rastgele seçilir ve karıştırılır. Her sınav farklı sırayla gelir.
            </p>
          </div>
        </div>

        {/* Mobil: Sticky başlat barı */}
        <div className="fixed bottom-0 left-0 right-0 lg:hidden bg-[var(--bg-base)]/95 backdrop-blur-xl border-t border-[var(--border-base)] px-4 py-3 z-50">
          <button
            onClick={draft ? () => devamEt(draft) : sinaviBaslat}
            className="w-full bg-gradient-to-br from-indigo-500 to-indigo-700 hover:from-indigo-600 hover:to-indigo-800 text-white py-3.5 rounded-xl font-bold text-base shadow-lg shadow-indigo-500/40 transition flex items-center justify-center gap-2"
          >
            🚀 {draft ? "Devam Et" : "Sınavı Başlat"}
            <span className="text-indigo-200 font-normal text-sm">· {config.soruSayisi} soru</span>
          </button>
        </div>
      </div>
    );
  }

  /* ════════════════════════════════════════════
   * SINAV EKRANI
   * ════════════════════════════════════════════ */
  if (asama === "sinav" && sorular.length > 0) {
    const soru = sorular[aktifIdx];
    const dakika = Math.floor(kalanSaniye / 60);
    const saniye = kalanSaniye % 60;
    const sureAcil   = kalanSaniye < 15 * 60;
    const sureKritik = kalanSaniye < 5 * 60;
    const cevaplanan  = Object.keys(cevaplar).length;
    const bos         = sorular.length - cevaplanan;
    const isaretliSayisi = isaretliler.size;

    return (
      <div className="min-h-screen bg-[var(--bg-base)] flex flex-col">

        {/* Üst bar */}
        <header className="sticky top-0 z-50 bg-[var(--bg-base)]/95 backdrop-blur-xl border-b border-[var(--border-base)]">
          <div className="max-w-[1400px] mx-auto px-4 py-3 flex items-center justify-between gap-3">

            {/* Sol: logo + bilgi */}
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-9 h-9 bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-lg flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                SPK
              </div>
              <div className="min-w-0">
                <div className="font-bold text-[var(--text-primary)] text-sm leading-none">{config.tamAd}</div>
                <div className="text-xs text-indigo-300 mt-0.5">
                  {cevaplanan}/{sorular.length} cevaplandı
                  {isaretliSayisi > 0 && ` · ${isaretliSayisi} işaretli`}
                  {` · ${bos} boş`}
                </div>
              </div>
            </div>

            {/* Orta: sayaç */}
            <div className={`flex items-center gap-2 px-4 py-2 rounded-xl font-bold tabular-nums text-lg border transition ${
              sureKritik
                ? "bg-red-500/20 text-red-300 border-red-500/50 animate-pulse"
                : sureAcil
                ? "bg-amber-500/15 text-amber-300 border-amber-500/40"
                : "bg-indigo-500/15 text-indigo-300 border-indigo-500/30"
            }`}>
              ⏱️ {String(dakika).padStart(2, "0")}:{String(saniye).padStart(2, "0")}
            </div>

            {/* Sağ: bitir */}
            <button
              onClick={() => setOnayModal({
                mesaj: bos > 0 ? `${bos} soru boş kalacak. Sınavı bitirmek istediğinize emin misiniz?` : "Sınavı bitirmek istediğinize emin misiniz?",
                onEvet: bitirSinav,
              })}
              className="bg-red-500/10 hover:bg-red-500/20 text-red-300 border border-red-500/30 px-4 py-2 rounded-lg text-sm font-semibold transition flex-shrink-0"
            >
              🏁 Sınavı Bitir
            </button>
          </div>
          {/* İlerleme barı */}
          <div className="h-1 bg-[var(--bg-surface-2)]">
            <div
              className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400 transition-all duration-500 ease-out"
              style={{ width: `${(cevaplanan / sorular.length) * 100}%` }}
            />
          </div>
        </header>

        {/* İçerik */}
        <div className="flex flex-1 max-w-[1400px] mx-auto w-full px-4 py-6 gap-6 pb-24 lg:pb-6">

          {/* Sol: soru haritası (desktop) */}
          <aside className="w-56 flex-shrink-0 hidden lg:block">
            <div className="sticky top-28 bg-[var(--bg-surface-2)] border border-[var(--border-base)] rounded-2xl p-4 shadow-xl shadow-indigo-900/20">
              <div className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider mb-3">Soru Haritası</div>
              <div className="flex flex-wrap gap-1.5 text-xs text-[var(--text-faint)] mb-3">
                <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-indigo-500 inline-block" /> Aktif</span>
                <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-emerald-500/30 border border-emerald-500/50 inline-block" /> Cevaplı</span>
                <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-amber-500/20 border border-amber-500/40 inline-block" /> İşaretli</span>
              </div>
              <div ref={sorularRef} className="grid grid-cols-5 gap-1 max-h-[420px] overflow-y-auto pr-1">
                {sorular.map((_, idx) => {
                  const cevaplandi = !!cevaplar[idx];
                  const isaretli  = isaretliler.has(idx);
                  const aktif     = aktifIdx === idx;
                  return (
                    <button
                      key={idx}
                      data-idx={idx}
                      onClick={() => setAktifIdx(idx)}
                      className={`w-8 h-8 rounded-md text-xs font-bold transition relative ${
                        aktif
                          ? "bg-gradient-to-br from-indigo-500 to-indigo-700 text-white shadow-lg shadow-indigo-500/40"
                          : isaretli
                          ? "bg-amber-500/20 text-amber-300 border border-amber-500/40"
                          : cevaplandi
                          ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                          : "bg-[var(--bg-surface-3)] text-[var(--text-muted)] hover:bg-[var(--bg-surface-3)] border border-[var(--border-subtle)]"
                      }`}
                    >
                      {idx + 1}
                      {isaretli && !aktif && (
                        <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-amber-400 rounded-full" />
                      )}
                    </button>
                  );
                })}
              </div>
              {/* Özet */}
              <div className="mt-4 pt-4 border-t border-[var(--border-base)] space-y-1.5 text-xs">
                <div className="flex justify-between text-[var(--text-muted)]"><span>Cevaplanan</span><span className="font-bold text-emerald-400">{cevaplanan}</span></div>
                <div className="flex justify-between text-[var(--text-muted)]"><span>Boş</span><span className="font-bold text-[var(--text-secondary)]">{bos}</span></div>
                {isaretliSayisi > 0 && <div className="flex justify-between text-[var(--text-muted)]"><span>İşaretli</span><span className="font-bold text-amber-400">{isaretliSayisi}</span></div>}
              </div>
            </div>
          </aside>

          {/* Orta: soru kartı */}
          <main className="flex-1 min-w-0">
            <div className="bg-[var(--bg-surface-2)] border border-[var(--border-base)] rounded-2xl p-6 md:p-8 shadow-xl shadow-indigo-900/20 mb-4">
              {/* Soru başlığı */}
              <div className="flex items-start justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-indigo-500/40 flex-shrink-0">
                    {aktifIdx + 1}
                  </div>
                  <div>
                    <div className="text-xs text-indigo-300 uppercase tracking-wider font-semibold">
                      Soru {aktifIdx + 1} / {sorular.length}
                    </div>
                    <div className="text-xs text-[var(--text-faint)] mt-0.5 line-clamp-1">{soru.dersBaslik}</div>
                  </div>
                </div>
                <button
                  onClick={() => isaretToggle(aktifIdx)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition flex-shrink-0 ${
                    isaretliler.has(aktifIdx)
                      ? "bg-amber-500/20 text-amber-300 border-amber-500/40"
                      : "bg-[var(--bg-surface-3)]/50 text-[var(--text-muted)] border-[var(--border-subtle)] hover:bg-[var(--bg-surface-3)]"
                  }`}
                >
                  {isaretliler.has(aktifIdx) ? "🔖 İşaretli" : "📌 İşaretle"}
                </button>
              </div>

              {/* Soru metni */}
              <p className="text-[var(--text-primary)] text-base md:text-lg font-medium leading-relaxed mb-7">{soru.text}</p>

              {/* Şıklar */}
              <div className="space-y-2.5">
                {soru.options.map((opt) => {
                  const secili = cevaplar[aktifIdx] === opt.id;
                  return (
                    <button
                      key={opt.id}
                      onClick={() => cevapla(aktifIdx, opt.id)}
                      className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 flex items-start gap-3 group ${
                        secili
                          ? "bg-indigo-500/12 border-indigo-400/60 shadow-lg shadow-indigo-500/20 scale-[1.01]"
                          : "bg-[var(--bg-surface)]/50 border-[var(--border-base)] hover:border-indigo-400/40 hover:bg-indigo-500/5 hover:scale-[1.005]"
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm flex-shrink-0 transition ${
                        secili ? "bg-gradient-to-br from-indigo-500 to-indigo-700 text-white shadow-lg shadow-indigo-500/40" : "bg-[var(--bg-surface-3)] text-[var(--text-secondary)] group-hover:bg-[var(--bg-surface-2)]"
                      }`}>
                        {opt.id}
                      </div>
                      <span className={`leading-relaxed pt-0.5 flex-1 text-sm md:text-base ${secili ? "text-indigo-100" : "text-[var(--text-secondary)]"}`}>
                        {opt.text}
                      </span>
                      {secili && (
                        <div className="w-5 h-5 bg-indigo-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Navigasyon — masaüstü, mobilde sticky bar kullanılır */}
            <div className="hidden lg:flex items-center justify-between gap-3">
              <button
                onClick={() => setAktifIdx((i) => Math.max(0, i - 1))}
                disabled={aktifIdx === 0}
                className="flex items-center gap-2 bg-[var(--bg-surface-2)] hover:bg-[var(--bg-surface-3)] disabled:opacity-40 disabled:cursor-not-allowed text-[var(--text-primary)] px-5 py-3 rounded-xl font-semibold border border-[var(--border-base)] transition"
              >← Önceki</button>

              {/* Mobil: komşu sorular */}
              <div className="flex items-center gap-1.5 flex-wrap justify-center lg:hidden">
                {sorular.slice(Math.max(0, aktifIdx - 3), aktifIdx + 4).map((_, relIdx) => {
                  const idx = Math.max(0, aktifIdx - 3) + relIdx;
                  const aktif = aktifIdx === idx;
                  return (
                    <button key={idx} onClick={() => setAktifIdx(idx)}
                      className={`w-8 h-8 rounded-md text-xs font-bold transition ${
                        aktif ? "bg-gradient-to-br from-indigo-500 to-indigo-700 text-white"
                        : cevaplar[idx] ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                        : "bg-[var(--bg-surface-2)] text-[var(--text-muted)] border border-[var(--border-base)]"
                      }`}
                    >{idx + 1}</button>
                  );
                })}
              </div>

              <button
                onClick={() => {
                  if (aktifIdx === sorular.length - 1) {
                    setOnayModal({
                      mesaj: bos > 0 ? `${bos} soru boş kalacak. Sınavı bitirmek istediğinize emin misiniz?` : "Sınavı bitirmek istediğinize emin misiniz?",
                      onEvet: bitirSinav,
                    });
                  } else {
                    setAktifIdx((i) => Math.min(sorular.length - 1, i + 1));
                  }
                }}
                className="flex items-center gap-2 bg-gradient-to-br from-indigo-500 to-indigo-700 hover:from-indigo-600 hover:to-indigo-800 text-white px-5 py-3 rounded-xl font-semibold shadow-lg shadow-indigo-500/30 transition"
              >
                {aktifIdx === sorular.length - 1 ? "Sınavı Bitir 🏁" : "Sonraki →"}
              </button>
            </div>
          </main>
        </div>

        {/* ── Mobil: Soru Haritası Overlay ── */}
        {mobilHaritaAcik && (
          <div className="fixed inset-0 z-[90] lg:hidden flex flex-col justify-end">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setMobilHaritaAcik(false)} />
            <div className="relative bg-[var(--bg-surface-2)] border-t border-[var(--border-base)] rounded-t-2xl p-6 max-h-[70vh] overflow-y-auto">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-[var(--text-primary)]">Soru Haritası</h3>
                <button onClick={() => setMobilHaritaAcik(false)} className="w-8 h-8 flex items-center justify-center rounded-lg bg-[var(--bg-surface-3)] hover:bg-[var(--bg-surface)] text-[var(--text-secondary)] transition">✕</button>
              </div>
              {/* Açıklama */}
              <div className="flex items-center gap-4 text-xs text-[var(--text-muted)] mb-4">
                <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-indigo-500 inline-block" /> Aktif</span>
                <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-emerald-500/40 border border-emerald-500/50 inline-block" /> Cevaplı</span>
                <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-amber-500/30 border border-amber-500/40 inline-block" /> İşaretli</span>
              </div>
              <div className="grid grid-cols-8 gap-2">
                {sorular.map((_, idx) => {
                  const cevaplandi = !!cevaplar[idx];
                  const isaretli  = isaretliler.has(idx);
                  const aktif     = aktifIdx === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => { setAktifIdx(idx); setMobilHaritaAcik(false); }}
                      className={`aspect-square rounded-md text-xs font-bold transition relative ${
                        aktif
                          ? "bg-gradient-to-br from-indigo-500 to-indigo-700 text-white shadow-lg shadow-indigo-500/40"
                          : isaretli
                          ? "bg-amber-500/20 text-amber-300 border border-amber-500/40"
                          : cevaplandi
                          ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                          : "bg-[var(--bg-surface-3)] text-[var(--text-muted)] border border-[var(--border-subtle)]"
                      }`}
                    >
                      {idx + 1}
                      {isaretli && !aktif && <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-amber-400 rounded-full" />}
                    </button>
                  );
                })}
              </div>
              {/* Özet */}
              <div className="mt-5 pt-4 border-t border-[var(--border-base)] grid grid-cols-3 gap-4 text-center text-sm">
                <div><div className="font-bold text-emerald-400">{Object.keys(cevaplar).length}</div><div className="text-xs text-[var(--text-muted)] mt-0.5">Cevaplı</div></div>
                <div><div className="font-bold text-[var(--text-secondary)]">{sorular.length - Object.keys(cevaplar).length}</div><div className="text-xs text-[var(--text-muted)] mt-0.5">Boş</div></div>
                <div><div className="font-bold text-amber-400">{isaretliler.size}</div><div className="text-xs text-[var(--text-muted)] mt-0.5">İşaretli</div></div>
              </div>
            </div>
          </div>
        )}

        {/* ── Mobil: Sticky Bottom Bar ── */}
        <div className="fixed bottom-0 left-0 right-0 lg:hidden bg-[var(--bg-base)]/95 backdrop-blur-xl border-t border-[var(--border-base)] px-4 py-3 flex items-center gap-2 z-50">
          <button
            onClick={() => setAktifIdx((i) => Math.max(0, i - 1))}
            disabled={aktifIdx === 0}
            className="flex-1 bg-[var(--bg-surface-2)] hover:bg-[var(--bg-surface-3)] disabled:opacity-40 text-[var(--text-primary)] py-2.5 rounded-xl font-semibold border border-[var(--border-base)] transition text-sm"
          >← Önceki</button>
          <button
            onClick={() => setMobilHaritaAcik(true)}
            className="flex-[1.4] bg-[var(--bg-surface-2)] hover:bg-[var(--bg-surface-3)] text-[var(--text-primary)] py-2.5 rounded-xl font-semibold border border-[var(--border-base)] transition text-sm flex items-center justify-center gap-2"
          >
            <span>📋</span>
            <span className="tabular-nums text-indigo-400 font-bold">{aktifIdx + 1}/{sorular.length}</span>
          </button>
          <button
            onClick={() => {
              if (aktifIdx === sorular.length - 1) {
                setOnayModal({ mesaj: bos > 0 ? `${bos} soru boş kalacak. Bitirmek istediğinize emin misiniz?` : "Sınavı bitirmek istiyor musunuz?", onEvet: bitirSinav });
              } else {
                setAktifIdx((i) => Math.min(sorular.length - 1, i + 1));
              }
            }}
            className="flex-1 bg-gradient-to-br from-indigo-500 to-indigo-700 text-white py-2.5 rounded-xl font-semibold shadow-lg transition text-sm"
          >
            {aktifIdx === sorular.length - 1 ? "Bitir 🏁" : "Sonraki →"}
          </button>
        </div>

        {/* ── Custom Onay Modalı ── */}
        {onayModal && (
          <ConfirmModal mesaj={onayModal.mesaj} onEvet={() => { setOnayModal(null); onayModal.onEvet(); }} onHayir={() => setOnayModal(null)} />
        )}
      </div>
    );
  }

  /* ════════════════════════════════════════════
   * SONUÇ EKRANI
   * ════════════════════════════════════════════ */
  if (asama === "sonuc" && sonucData) {
    const { dogru, yanlis, bos, puan, sureSaniye, gecti, detaylar, konuHaritasi } = sonucData;

    function yanlilariFavoriyeEkle() {
      detaylar.forEach(({ soru, dogru: d }) => {
        if (!d) {
          favoriEkle(soru.modulId, soru.dersId, soru.soruIndex);
        }
      });
    }
    const suDakika = Math.floor(sureSaniye / 60);
    const suSaniye = sureSaniye % 60;

    return (
      <div className="min-h-screen bg-[var(--bg-base)] animate-page-in">
        <SinavNavbar config={config} asama="sonuc" />
        <div className="max-w-5xl mx-auto px-4 py-10">

          {/* Ana kart */}
          <SonucKart
            puan={puan}
            gecti={gecti}
            config={config}
            suDakika={suDakika}
            suSaniye={suSaniye}
            dogru={dogru}
            yanlis={yanlis}
            bos={bos}
            sorularLength={sorular.length}
          />

          {/* Konu analizi */}
          <div className="bg-[var(--bg-surface-2)] border border-[var(--border-base)] rounded-2xl p-6 mb-8 shadow-xl shadow-indigo-900/20">
            <h2 className="font-bold text-[var(--text-primary)] text-xl mb-5 flex items-center gap-2">
              <span className="w-8 h-8 bg-indigo-500/20 rounded-lg flex items-center justify-center text-indigo-400">📊</span>
              Konu Bazında Analiz
            </h2>
            <div className="space-y-4">
              {Object.entries(konuHaritasi).map(([key, konu]) => {
                const oran = konu.toplam > 0 ? Math.round((konu.dogru / konu.toplam) * 100) : 0;
                const iyi   = oran >= 70;
                const orta  = oran >= 50 && oran < 70;
                return (
                  <div key={key}>
                    <div className="flex items-center justify-between mb-1.5 text-sm">
                      <span className="text-[var(--text-secondary)] font-medium line-clamp-1 flex-1 mr-3">
                        {konu.baslik.replace(/^Modül \d+ · /, "").replace(/^Modül · /, "")}
                      </span>
                      <span className={`font-bold flex-shrink-0 ${iyi ? "text-emerald-400" : orta ? "text-amber-400" : "text-red-400"}`}>
                        {konu.dogru}/{konu.toplam} · %{oran}
                      </span>
                    </div>
                    <div className="h-2.5 bg-[var(--bg-surface)] rounded-full overflow-hidden">
                      <div className={`h-full rounded-full animate-progress ${
                        iyi ? "bg-gradient-to-r from-emerald-500 to-emerald-400"
                        : orta ? "bg-gradient-to-r from-amber-500 to-amber-400"
                        : "bg-gradient-to-r from-red-500 to-red-400"
                      }`} style={{ width: `${oran}%` }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Soru çözümleri (açılır) */}
          <div className="bg-[var(--bg-surface-2)] border border-[var(--border-base)] rounded-2xl overflow-hidden shadow-xl shadow-indigo-900/20 mb-8">
            <button
              onClick={() => setGozlemModu((g) => !g)}
              className="w-full p-5 flex items-center justify-between text-left hover:bg-[var(--bg-surface-3)]/40 transition"
            >
              <h2 className="font-bold text-[var(--text-primary)] text-lg flex items-center gap-2">
                <span className="w-8 h-8 bg-indigo-500/20 rounded-lg flex items-center justify-center text-indigo-400">🔍</span>
                Soru Çözümleri ve Açıklamalar
              </h2>
              <span className={`text-indigo-400 transition-transform duration-300 ${gozlemModu ? "rotate-180" : ""}`}>▼</span>
            </button>

            {gozlemModu && (
              <div className="border-t border-[var(--border-base)] divide-y divide-[var(--border-base)]">
                {detaylar.map(({ soru, verilen, dogru: d }, idx) => (
                  <div key={idx} className={`p-5 ${d ? "" : "bg-red-500/5"}`}>
                    <div className="flex items-start gap-3 mb-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm flex-shrink-0 ${
                        d ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                          : "bg-red-500/20 text-red-400 border border-red-500/30"
                      }`}>{d ? "✓" : "✗"}</div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs text-[var(--text-faint)] mb-1 font-medium">Soru {idx + 1} · {soru.dersBaslik}</div>
                        <p className="text-[var(--text-primary)] text-sm font-medium leading-relaxed">{soru.text}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 mb-3 ml-11">
                      {soru.options.map((opt) => (
                        <div key={opt.id} className={`flex items-start gap-2 p-2.5 rounded-lg border text-xs ${
                          opt.id === soru.correct
                            ? "bg-emerald-500/10 border-emerald-500/40 text-emerald-300"
                            : opt.id === verilen && !d
                            ? "bg-red-500/10 border-red-500/40 text-red-300"
                            : "border-[var(--border-base)] text-[var(--text-muted)]"
                        }`}>
                          <span className="font-bold flex-shrink-0">{opt.id}.</span>
                          <span className="leading-relaxed">{opt.text}</span>
                        </div>
                      ))}
                    </div>
                    <div className="ml-11 bg-[var(--bg-surface)]/50 border border-[var(--border-base)] rounded-xl p-3 text-xs text-[var(--text-secondary)] leading-relaxed">
                      <span className="font-bold text-indigo-400 mr-1">Açıklama:</span>
                      {soru.explanation}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Yanlışları favorilere ekle — yanlış varsa göster */}
          {yanlis > 0 && (
            <div className="mb-4 flex items-center justify-between bg-amber-500/10 border border-amber-400/30 rounded-2xl px-5 py-3.5">
              <div className="flex items-center gap-3">
                <span className="text-xl">⭐</span>
                <div>
                  <div className="text-white font-semibold text-sm">{yanlis} yanlış soru favorilere eklenebilir</div>
                  <div className="text-xs text-amber-300 mt-0.5">Favoriler &gt; Mini Sınav ile tekrar çalış</div>
                </div>
              </div>
              <button
                onClick={yanlilariFavoriyeEkle}
                className="bg-amber-500/20 hover:bg-amber-500/30 border border-amber-400/40 text-amber-300 text-xs font-bold px-4 py-2 rounded-xl transition whitespace-nowrap ml-3"
              >
                ⭐ Ekle
              </button>
            </div>
          )}

          {/* Aksiyonlar — mobilden 2x2 grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <button
              onClick={() => { setAsama("hazirlik"); setSonucData(null); setGozlemModu(false); }}
              className="col-span-2 sm:col-span-1 bg-gradient-to-br from-indigo-500 to-indigo-700 hover:from-indigo-600 hover:to-indigo-800 text-white px-4 py-4 rounded-xl font-semibold shadow-lg shadow-indigo-500/40 transition flex items-center justify-center gap-2"
            >🔄 Yeni Sınav</button>
            <button
              onClick={() => {
                const metin = `SPK Akademi'de ${config.tamAd} sınavını tamamladım!\n\nSonuç: %${puan.toFixed(1)} ${gecti ? "✅ Geçti" : "❌ Kaldı"}\nDoğru: ${dogru} · Yanlış: ${yanlis} · Boş: ${bos}\n\n🎓 spk-akademi.vercel.app`;
                if (navigator.share) {
                  navigator.share({ text: metin });
                } else {
                  navigator.clipboard.writeText(metin).then(() => alert("Sonuç panoya kopyalandı!"));
                }
              }}
              className="bg-[var(--bg-surface-2)] hover:bg-[var(--bg-surface-3)] text-[var(--text-primary)] px-4 py-4 rounded-xl font-semibold border border-[var(--border-base)] transition flex items-center justify-center gap-2"
            >📤 Paylaş</button>
            <Link href="/istatistikler" className="bg-[var(--bg-surface-2)] hover:bg-[var(--bg-surface-3)] text-[var(--text-primary)] px-4 py-4 rounded-xl font-semibold border border-[var(--border-base)] transition flex items-center justify-center gap-2">
              📊 İstatistikler
            </Link>
            <Link href="/sinav" className="bg-[var(--bg-surface-2)] hover:bg-[var(--bg-surface-3)] text-[var(--text-primary)] px-4 py-4 rounded-xl font-semibold border border-[var(--border-base)] transition flex items-center justify-center gap-2">
              ← Sınavlar
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return null;
}

/* ─── Sonuç Ana Kart (hook kullanabilmek için ayrı bileşen) ─── */
function SonucKart({
  puan, gecti, config, suDakika, suSaniye, dogru, yanlis, bos, sorularLength,
}: {
  puan: number;
  gecti: boolean;
  config: SinavConfig;
  suDakika: number;
  suSaniye: number;
  dogru: number;
  yanlis: number;
  bos: number;
  sorularLength: number;
}) {
  const animPuan = useCountUpFloat(puan, 1500);
  return (
    <div className={`rounded-3xl p-8 md:p-12 border-2 shadow-2xl text-center mb-8 bg-[var(--bg-surface-2)] animate-fade-up ${
      gecti ? "border-emerald-500/40 shadow-emerald-500/15" : "border-amber-500/40 shadow-amber-500/15"
    }`}>
      <div className="text-6xl mb-4">{gecti ? "🎉" : "💪"}</div>
      <h1 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-2">
        {gecti ? "Tebrikler! Sınavı Geçtiniz!" : "Biraz Daha Çalışmanız Gerekiyor"}
      </h1>
      <p className="text-[var(--text-muted)] mb-8">{config.tamAd} · {suDakika} dk {suSaniye} sn</p>

      <div className="inline-flex flex-col items-center mb-8">
        <div className={`text-7xl md:text-8xl font-bold mb-2 tabular-nums ${gecti ? "text-emerald-400" : "text-amber-400"}`}>
          %{animPuan.toFixed(1)}
        </div>
        <div className={`text-sm font-semibold px-4 py-1.5 rounded-full border ${
          gecti ? "bg-emerald-500/15 text-emerald-300 border-emerald-500/30"
                : "bg-amber-500/15 text-amber-300 border-amber-500/30"
        }`}>
          {gecti ? `✓ Geçti (%${config.gecmeEsigi} eşiğinin üzerinde)` : `✗ Kaldı (%${config.gecmeEsigi} eşiğinin altında)`}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
        <div className="bg-emerald-500/10 border border-emerald-500/25 rounded-2xl p-4">
          <div className="text-4xl font-bold text-emerald-400">{dogru}</div>
          <div className="text-xs text-emerald-300 mt-1 uppercase tracking-wider font-semibold">Doğru</div>
        </div>
        <div className="bg-red-500/10 border border-red-500/25 rounded-2xl p-4">
          <div className="text-4xl font-bold text-red-400">{yanlis}</div>
          <div className="text-xs text-red-300 mt-1 uppercase tracking-wider font-semibold">Yanlış</div>
        </div>
        <div className="bg-[var(--bg-surface-3)]/50 border border-[var(--border-subtle)] rounded-2xl p-4">
          <div className="text-4xl font-bold text-[var(--text-secondary)]">{bos}</div>
          <div className="text-xs text-[var(--text-muted)] mt-1 uppercase tracking-wider font-semibold">Boş</div>
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-[var(--border-base)] text-sm text-[var(--text-muted)]">
        Süre: {suDakika} dk {suSaniye} sn · Toplam {sorularLength} soru
      </div>
    </div>
  );
}

/* ─── Custom Onay Modalı ─── */
function ConfirmModal({
  mesaj,
  onEvet,
  onHayir,
}: {
  mesaj: string;
  onEvet: () => void;
  onHayir: () => void;
}) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
      <div className="bg-[var(--bg-surface-2)] border border-[var(--border-base)] rounded-2xl p-8 shadow-2xl w-full max-w-sm">
        <div className="text-4xl text-center mb-4">⚠️</div>
        <p className="text-[var(--text-primary)] text-center font-medium leading-relaxed mb-6">{mesaj}</p>
        <div className="flex gap-3">
          <button
            onClick={onHayir}
            className="flex-1 bg-[var(--bg-surface-3)] hover:bg-[var(--bg-surface)] text-[var(--text-primary)] px-4 py-3 rounded-xl font-semibold transition border border-[var(--border-base)]"
          >
            İptal
          </button>
          <button
            onClick={onEvet}
            className="flex-1 bg-red-500 hover:bg-red-600 text-white px-4 py-3 rounded-xl font-semibold transition shadow-lg shadow-red-500/30"
          >
            Sınavı Bitir
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─── Navbar ─── */
function SinavNavbar({ config, asama }: { config: SinavConfig; asama: Asama }) {
  return (
    <nav className="sticky top-0 z-50 bg-[var(--bg-base)]/85 backdrop-blur-xl border-b border-[var(--border-base)]">
      <div className="max-w-[1400px] mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-xl flex items-center justify-center text-white font-bold text-xs shadow-lg shadow-indigo-500/30">SPK</div>
          <div>
            <div className="font-bold text-[var(--text-primary)] text-base leading-none">SPK Akademi</div>
            <div className="text-[10px] text-indigo-300 mt-0.5 tracking-wider uppercase">{config.sinavAdi} Simülasyonu</div>
          </div>
        </Link>
        <div className="flex items-center gap-3 text-sm">
          {asama === "hazirlik" && (
            <Link href="/sinav" className="text-[var(--text-secondary)] hover:text-indigo-400 transition font-medium px-3 py-2 rounded-lg hover:bg-[var(--bg-surface-2)]">← Diğer Sınavlar</Link>
          )}
          {asama === "sonuc" && (
            <Link href="/" className="text-[var(--text-secondary)] hover:text-indigo-400 transition font-medium px-3 py-2 rounded-lg hover:bg-[var(--bg-surface-2)]">🏠 Ana Sayfa</Link>
          )}
        </div>
      </div>
    </nav>
  );
}
