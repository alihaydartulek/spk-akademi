"use client";

/* ─────────────────────────────────────────────────────────────────────────────
 * LisansPro — Konu Odaklı Pratik Modu
 *
 * Kullanıcı modül/ders seçer → soru sayısı belirler → sorular tek tek gelir
 * → cevaptan hemen sonra ✅/❌ + açıklama gösterilir → sonuç özeti
 * ─────────────────────────────────────────────────────────────────────────── */

import { useState, useMemo, useCallback } from "react";
import Link from "next/link";
import { modules } from "../index";
import type { Question } from "../mevzuat";
import SharedNavbar from "../_components/SharedNavbar";
import SharedFooter from "../_components/SharedFooter";

/* ── Tipler ── */
interface PratikSoru {
  modulBaslik: string;
  dersBaslik:  string;
  dersId:      string;
  modulId:     string;
  soru:        Question;
}
type Asama = "secim" | "pratik" | "sonuc";

/* ── Fisher-Yates karıştırma ── */
function karistir<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const ADET_SECENEK = [5, 10, 20, 50, 9999] as const;

/* ══════════════════════════════════════════════════════════════════════════ */
export default function PratikPage() {
  /* ── state ── */
  const [asama,          setAsama]          = useState<Asama>("secim");
  const [seciliDersler,  setSeciliDersler]  = useState<Set<string>>(new Set());
  const [soruAdeti,      setSoruAdeti]      = useState(10);
  const [sorular,        setSorular]        = useState<PratikSoru[]>([]);
  const [aktifIdx,       setAktifIdx]       = useState(0);
  const [secilenCevap,   setSecilenCevap]   = useState<string | null>(null);
  const [cevaplar,       setCevaplar]       = useState<Record<number, string>>({});
  const [aramaMetni,     setAramaMetni]     = useState("");
  const [acikModuller,   setAcikModuller]   = useState<Set<string>>(new Set());

  /* ── Modül/ders listesi (arama filtreli) ── */
  const filtreliModuller = useMemo(() => {
    if (!aramaMetni.trim()) return modules;
    const q = aramaMetni.toLowerCase();
    return modules.filter(
      (m) =>
        m.title.toLowerCase().includes(q) ||
        m.lessons.some((l) => l.title.toLowerCase().includes(q)),
    );
  }, [aramaMetni]);

  /* ── Seçili derslerdeki toplam soru sayısı ── */
  const seciliSoruSayisi = useMemo(
    () =>
      modules.reduce(
        (t, m) =>
          t +
          m.lessons.reduce(
            (lt, l) => lt + (seciliDersler.has(l.id) ? l.questions.length : 0),
            0,
          ),
        0,
      ),
    [seciliDersler],
  );

  /* ── Ders seç / kaldır ── */
  const dersSec = useCallback((dersId: string) => {
    setSeciliDersler((prev) => {
      const next = new Set(prev);
      next.has(dersId) ? next.delete(dersId) : next.add(dersId);
      return next;
    });
  }, []);

  /* ── Tüm modülü seç / kaldır ── */
  const modulSecToggle = useCallback(
    (modulId: string) => {
      const modul = modules.find((m) => m.id === modulId);
      if (!modul) return;
      const ids   = modul.lessons.map((l) => l.id);
      const tamam = ids.every((id) => seciliDersler.has(id));
      setSeciliDersler((prev) => {
        const next = new Set(prev);
        tamam ? ids.forEach((id) => next.delete(id)) : ids.forEach((id) => next.add(id));
        return next;
      });
    },
    [seciliDersler],
  );

  /* ── Modül aç / kapat ── */
  const modulToggle = useCallback((modulId: string) => {
    setAcikModuller((prev) => {
      const next = new Set(prev);
      next.has(modulId) ? next.delete(modulId) : next.add(modulId);
      return next;
    });
  }, []);

  /* ── Pratiği başlat ── */
  const pratigiBaslat = useCallback(() => {
    const havuz: PratikSoru[] = [];
    modules.forEach((m) =>
      m.lessons.forEach((l) => {
        if (!seciliDersler.has(l.id)) return;
        l.questions.forEach((q) =>
          havuz.push({
            modulBaslik: m.title,
            dersBaslik:  l.title,
            dersId:      l.id,
            modulId:     m.id,
            soru:        q,
          }),
        );
      }),
    );
    const karisik = karistir(havuz);
    setSorular(soruAdeti >= 9999 ? karisik : karisik.slice(0, soruAdeti));
    setAktifIdx(0);
    setSecilenCevap(null);
    setCevaplar({});
    setAsama("pratik");
  }, [seciliDersler, soruAdeti]);

  /* ── Cevap seç ── */
  const cevapSec = useCallback(
    (optId: string) => {
      if (secilenCevap !== null) return;
      setSecilenCevap(optId);
      setCevaplar((prev) => ({ ...prev, [aktifIdx]: optId }));
    },
    [secilenCevap, aktifIdx],
  );

  /* ── Sonraki soru ── */
  const sonraki = useCallback(() => {
    if (aktifIdx + 1 >= sorular.length) {
      setAsama("sonuc");
    } else {
      setAktifIdx((i) => i + 1);
      setSecilenCevap(null);
    }
  }, [aktifIdx, sorular.length]);

  /* ── Sonuçlar ── */
  const sonuclar = useMemo(() => {
    const dogru = sorular.filter((ps, i) => cevaplar[i] === ps.soru.correct).length;
    return { dogru, yanlis: sorular.length - dogru, toplam: sorular.length };
  }, [sorular, cevaplar]);

  const mevcutSoru = sorular[aktifIdx];
  const dogru      = secilenCevap === mevcutSoru?.soru.correct;

  /* ══════════════════════════════ RENDER ═══════════════════════════════════ */
  return (
    <div className="min-h-screen bg-[var(--bg-base)]">
      <SharedNavbar activeHref="/pratik" />

      {/* ────────────────── SEÇİM EKRANI ────────────────── */}
      {asama === "secim" && (
        <div className="max-w-4xl mx-auto px-4 py-12">

          {/* Başlık */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/25 rounded-full px-4 py-1.5 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-4">
              🎯 Konu Odaklı Pratik
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-3">
              Hangi konuyu çalışmak istiyorsun?
            </h1>
            <p className="text-[var(--text-muted)] text-sm max-w-md mx-auto">
              Modül ve dersleri seç, istediğin sayıda soru çöz.
              Her cevaptan hemen sonra açıklama göreceksin.
            </p>
          </div>

          {/* Seçim özet + başlat */}
          {seciliDersler.size > 0 && (
            <div className="bg-indigo-500/10 border border-indigo-500/25 rounded-2xl p-4 mb-6 space-y-3">
              <div className="flex items-center gap-3 flex-wrap">
                <span className="flex items-center gap-2 text-sm text-[var(--text-primary)] font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  {seciliDersler.size} ders seçildi
                </span>
                <span className="text-sm text-[var(--text-muted)]">· {seciliSoruSayisi} soru mevcut</span>
              </div>

              {/* Soru adedi */}
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs text-[var(--text-muted)] font-medium">Kaç soru:</span>
                {ADET_SECENEK.map((n) => {
                  const etiket   = n >= 9999 ? "Tümü" : String(n);
                  const disabled = n > seciliSoruSayisi && n < 9999;
                  return (
                    <button
                      key={n}
                      onClick={() => setSoruAdeti(n)}
                      disabled={disabled}
                      className={`px-3 py-1 rounded-lg text-xs font-bold transition ${
                        soruAdeti === n
                          ? "bg-indigo-500 text-white shadow shadow-indigo-500/40"
                          : disabled
                          ? "bg-[var(--bg-surface-2)] text-[var(--text-faint)] opacity-40 cursor-not-allowed"
                          : "bg-[var(--bg-surface-2)] text-[var(--text-secondary)] hover:bg-indigo-500/20 hover:text-indigo-300"
                      }`}
                    >
                      {etiket}
                    </button>
                  );
                })}
              </div>

              <button
                onClick={pratigiBaslat}
                className="w-full bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-bold px-6 py-3 rounded-xl shadow-lg shadow-indigo-500/30 hover:scale-[1.02] active:scale-100 transition-transform text-sm"
              >
                🚀 Pratiğe Başla ({Math.min(soruAdeti >= 9999 ? seciliSoruSayisi : soruAdeti, seciliSoruSayisi)} soru)
              </button>
            </div>
          )}

          {/* Arama */}
          <div className="relative mb-4">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-faint)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Modül veya ders ara..."
              value={aramaMetni}
              onChange={(e) => setAramaMetni(e.target.value)}
              className="w-full bg-[var(--bg-surface)] border border-[var(--border-base)] rounded-xl px-4 py-3 pl-10 text-[var(--text-primary)] placeholder:text-[var(--text-faint)] text-sm outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 transition"
            />
            {aramaMetni && (
              <button
                onClick={() => setAramaMetni("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--text-faint)] hover:text-[var(--text-muted)] transition"
              >
                ✕
              </button>
            )}
          </div>

          {/* Modül listesi */}
          <div className="space-y-2">
            {filtreliModuller.map((modul) => {
              const dersIds   = modul.lessons.map((l) => l.id);
              const tamSecili = dersIds.length > 0 && dersIds.every((id) => seciliDersler.has(id));
              const kisSecili = dersIds.some((id) => seciliDersler.has(id));
              const acik      = acikModuller.has(modul.id) || aramaMetni.length > 0;
              const modulSoru = modul.lessons.reduce((s, l) => s + l.questions.length, 0);

              return (
                <div key={modul.id} className="bg-[var(--bg-surface)] border border-[var(--border-base)] rounded-2xl overflow-hidden transition">

                  {/* Modül başlığı */}
                  <div className="flex items-center gap-3 p-4">
                    {/* Modül checkbox */}
                    <button
                      onClick={() => modulSecToggle(modul.id)}
                      className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 transition ${
                        tamSecili
                          ? "bg-indigo-500 border-indigo-500"
                          : kisSecili
                          ? "border-indigo-500 bg-indigo-500/25"
                          : "border-[var(--border-base)] hover:border-indigo-400"
                      }`}
                    >
                      {tamSecili && (
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                      {kisSecili && !tamSecili && (
                        <div className="w-2 h-0.5 bg-indigo-400 rounded-full" />
                      )}
                    </button>

                    {/* Modül adı + aç/kapa */}
                    <button
                      onClick={() => modulToggle(modul.id)}
                      className="flex-1 flex items-center gap-3 text-left group"
                    >
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-[var(--text-primary)] text-sm group-hover:text-indigo-300 transition">
                          {modul.title}
                        </div>
                        <div className="text-xs text-[var(--text-faint)] mt-0.5">
                          {modul.lessons.length} ders · {modulSoru} soru
                        </div>
                      </div>
                      <svg
                        className={`w-4 h-4 text-[var(--text-faint)] transition-transform duration-200 flex-shrink-0 ${acik ? "rotate-180" : ""}`}
                        fill="none" viewBox="0 0 24 24" stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>

                  {/* Ders listesi */}
                  {acik && (
                    <div className="border-t border-[var(--border-base)] divide-y divide-[var(--border-base)]/40">
                      {modul.lessons.map((ders) => {
                        const secili = seciliDersler.has(ders.id);
                        return (
                          <button
                            key={ders.id}
                            onClick={() => dersSec(ders.id)}
                            className={`w-full flex items-center gap-3 px-4 py-3 text-left transition ${
                              secili ? "bg-indigo-500/8" : "hover:bg-[var(--bg-surface-2)]"
                            }`}
                          >
                            <div
                              className={`w-4 h-4 rounded border flex items-center justify-center flex-shrink-0 transition ${
                                secili ? "bg-indigo-500 border-indigo-500" : "border-[var(--border-base)]"
                              }`}
                            >
                              {secili && (
                                <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                              )}
                            </div>
                            <span
                              className={`flex-1 text-sm transition ${
                                secili ? "text-indigo-300 font-medium" : "text-[var(--text-secondary)]"
                              }`}
                            >
                              {ders.title}
                            </span>
                            <span className="text-xs text-[var(--text-faint)] flex-shrink-0">
                              {ders.questions.length} soru
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ────────────────── PRATİK EKRANI ────────────────── */}
      {asama === "pratik" && mevcutSoru && (
        <div className="max-w-2xl mx-auto px-4 py-8">

          {/* Üst bar: çıkış + ilerleme */}
          <div className="flex items-center gap-4 mb-6">
            <button
              onClick={() => { setAsama("secim"); }}
              className="text-[var(--text-faint)] hover:text-[var(--text-muted)] transition text-sm"
            >
              ← Çıkış
            </button>
            <div className="flex-1">
              <div className="flex justify-between text-xs text-[var(--text-muted)] mb-1.5">
                <span>Soru {aktifIdx + 1} / {sorular.length}</span>
                <span className="font-semibold">
                  {Object.values(cevaplar).filter((v, i) => v === sorular[i]?.soru.correct).length} doğru
                </span>
              </div>
              <div className="h-1.5 bg-[var(--bg-surface-2)] rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full transition-all duration-500"
                  style={{ width: `${((aktifIdx + (secilenCevap !== null ? 1 : 0)) / sorular.length) * 100}%` }}
                />
              </div>
            </div>
          </div>

          {/* Soru kartı */}
          <div className="bg-[var(--bg-surface)] border border-[var(--border-base)] rounded-2xl p-6 mb-4 shadow-xl shadow-indigo-900/10">
            <div className="text-xs text-indigo-300 font-semibold uppercase tracking-wider mb-0.5">
              {mevcutSoru.dersBaslik}
            </div>
            <div className="text-[11px] text-[var(--text-faint)] mb-4">{mevcutSoru.modulBaslik}</div>
            <p className="text-[var(--text-primary)] font-medium leading-relaxed text-base">
              {mevcutSoru.soru.text}
            </p>
          </div>

          {/* Seçenekler */}
          <div className="space-y-2.5 mb-4">
            {mevcutSoru.soru.options.map((opt) => {
              const cevaplandi  = secilenCevap !== null;
              const buSecildi   = secilenCevap === opt.id;
              const dogruCevap  = opt.id === mevcutSoru.soru.correct;

              let cls = "";
              if (cevaplandi) {
                if (dogruCevap)         cls = "bg-emerald-500/12 border-emerald-500/50 text-emerald-300";
                else if (buSecildi)     cls = "bg-red-500/12 border-red-500/50 text-red-300";
                else                    cls = "border-[var(--border-base)] text-[var(--text-muted)] opacity-40";
              } else {
                cls = "border-[var(--border-base)] text-[var(--text-secondary)] hover:border-indigo-500/50 hover:bg-indigo-500/8 hover:text-indigo-300 cursor-pointer";
              }

              return (
                <button
                  key={opt.id}
                  onClick={() => cevapSec(opt.id)}
                  disabled={cevaplandi}
                  className={`w-full flex items-start gap-3 p-4 rounded-xl border text-left transition-all duration-200 ${cls}`}
                >
                  <span
                    className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5 ${
                      cevaplandi && dogruCevap ? "bg-emerald-500/25 text-emerald-300"
                      : cevaplandi && buSecildi ? "bg-red-500/25 text-red-300"
                      : "bg-[var(--bg-surface-2)] text-[var(--text-muted)]"
                    }`}
                  >
                    {opt.id}
                  </span>
                  <span className="text-sm leading-relaxed flex-1">{opt.text}</span>
                  {cevaplandi && dogruCevap && (
                    <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                  {cevaplandi && buSecildi && !dogruCevap && (
                    <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  )}
                </button>
              );
            })}
          </div>

          {/* Açıklama — cevaplandıktan hemen sonra */}
          {secilenCevap !== null && (
            <div
              className={`rounded-2xl p-5 mb-4 border animate-card-in ${
                dogru
                  ? "bg-emerald-500/8 border-emerald-500/25"
                  : "bg-amber-500/8 border-amber-500/25"
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">{dogru ? "✅" : "💡"}</span>
                <span className={`font-bold text-sm ${dogru ? "text-emerald-400" : "text-amber-400"}`}>
                  {dogru
                    ? "Doğru!"
                    : `Yanlış — Doğru cevap: ${mevcutSoru.soru.correct}`}
                </span>
              </div>
              {mevcutSoru.soru.explanation ? (
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  <span className="font-semibold text-indigo-400">Açıklama: </span>
                  {mevcutSoru.soru.explanation}
                </p>
              ) : (
                <p className="text-xs text-[var(--text-faint)] italic">Bu soru için açıklama henüz eklenmedi.</p>
              )}
            </div>
          )}

          {/* Sonraki */}
          {secilenCevap !== null ? (
            <button
              onClick={sonraki}
              className="w-full bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-indigo-500/30 hover:scale-[1.02] active:scale-100 transition-transform text-sm"
            >
              {aktifIdx + 1 >= sorular.length ? "Sonuçları Gör →" : "Sonraki Soru →"}
            </button>
          ) : (
            <button
              onClick={sonraki}
              className="w-full text-[var(--text-faint)] text-xs py-2 hover:text-[var(--text-muted)] transition"
            >
              Bu soruyu geç →
            </button>
          )}
        </div>
      )}

      {/* ────────────────── SONUÇ EKRANI ────────────────── */}
      {asama === "sonuc" && (
        <div className="max-w-2xl mx-auto px-4 py-12">

          {/* Emoji + başlık */}
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">
              {sonuclar.dogru / sonuclar.toplam >= 0.8
                ? "🎉"
                : sonuclar.dogru / sonuclar.toplam >= 0.6
                ? "💪"
                : "📚"}
            </div>
            <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-2">
              Pratik Tamamlandı!
            </h2>
            <p className="text-[var(--text-muted)] text-sm">
              {sonuclar.toplam} sorudan {sonuclar.dogru} doğru cevapladın.
            </p>
          </div>

          {/* Skor kartı */}
          <div className="bg-[var(--bg-surface)] border border-[var(--border-base)] rounded-2xl p-6 mb-6">
            <div className="grid grid-cols-3 gap-4 text-center mb-5">
              <div>
                <div className="text-3xl font-bold text-emerald-400">{sonuclar.dogru}</div>
                <div className="text-[10px] text-[var(--text-faint)] uppercase tracking-wider mt-1">Doğru</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-400">{sonuclar.yanlis}</div>
                <div className="text-[10px] text-[var(--text-faint)] uppercase tracking-wider mt-1">Yanlış</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-indigo-400">
                  %{Math.round((sonuclar.dogru / sonuclar.toplam) * 100)}
                </div>
                <div className="text-[10px] text-[var(--text-faint)] uppercase tracking-wider mt-1">Başarı</div>
              </div>
            </div>
            <div className="h-2 bg-[var(--bg-surface-2)] rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full transition-all duration-1000"
                style={{ width: `${(sonuclar.dogru / sonuclar.toplam) * 100}%` }}
              />
            </div>
          </div>

          {/* Eylemler */}
          <div className="grid grid-cols-2 gap-3 mb-8">
            <button
              onClick={() => { setAsama("secim"); setSeciliDersler(new Set()); }}
              className="bg-[var(--bg-surface)] border border-[var(--border-base)] text-[var(--text-primary)] font-semibold py-3 rounded-xl hover:bg-[var(--bg-surface-2)] transition text-sm"
            >
              ← Yeni Seçim
            </button>
            <button
              onClick={pratigiBaslat}
              className="bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-bold py-3 rounded-xl shadow-lg shadow-indigo-500/30 hover:scale-[1.02] active:scale-100 transition-transform text-sm"
            >
              🔄 Tekrar Çöz
            </button>
          </div>

          {/* Yanlış cevaplar */}
          {sonuclar.yanlis > 0 && (
            <div className="bg-[var(--bg-surface)] border border-[var(--border-base)] rounded-2xl overflow-hidden">
              <div className="p-4 border-b border-[var(--border-base)]">
                <h3 className="font-bold text-[var(--text-primary)] flex items-center gap-2 text-sm">
                  <span className="w-7 h-7 bg-red-500/20 rounded-lg flex items-center justify-center text-red-400 text-sm">✗</span>
                  Yanlış Cevaplar ({sonuclar.yanlis})
                </h3>
              </div>
              <div className="divide-y divide-[var(--border-base)]">
                {sorular.map((ps, i) => {
                  if (cevaplar[i] === ps.soru.correct) return null;
                  const verilen = cevaplar[i];
                  return (
                    <div key={i} className="p-4 bg-red-500/3">
                      <div className="text-[10px] text-[var(--text-faint)] mb-1 uppercase tracking-wider">
                        {ps.dersBaslik}
                      </div>
                      <p className="text-sm text-[var(--text-primary)] font-medium mb-2 leading-relaxed">
                        {ps.soru.text}
                      </p>
                      <div className="flex gap-2 text-xs mb-2 flex-wrap">
                        <span className="bg-red-500/15 border border-red-500/30 text-red-300 px-2 py-0.5 rounded-full">
                          Senin: {verilen ?? "Geçildi"}
                        </span>
                        <span className="bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 px-2 py-0.5 rounded-full">
                          Doğru: {ps.soru.correct}
                        </span>
                      </div>
                      {ps.soru.explanation && (
                        <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                          <span className="text-indigo-400 font-semibold">Açıklama: </span>
                          {ps.soru.explanation}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}

      {asama === "secim" && <SharedFooter />}
    </div>
  );
}
