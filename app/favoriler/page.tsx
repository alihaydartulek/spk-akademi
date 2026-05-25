"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { modules } from "../index";
import type { Question } from "../mevzuat";
import { getFavoriler, favoriCikar, favoriEkle, favoriMi, getYanlislar, yanlisSil, type FavoriSoru, type SoruCevap } from "../lib/storage";
import SharedNavbar from "../_components/SharedNavbar";
import SharedFooter from "../_components/SharedFooter";

type FavoriDetay = {
  soru: Question;
  modulId: string;
  modulBaslik: string;
  dersId: string;
  dersBaslik: string;
  soruIndex: number;
};

function yanlisFavoriDetay(yanlis: SoruCevap): FavoriDetay | null {
  const modul = modules.find((m) => m.id === yanlis.modulId);
  if (!modul) return null;
  const ders = modul.lessons.find((l) => l.id === yanlis.dersId);
  if (!ders) return null;
  const soru = ders.questions[yanlis.soruIndex];
  if (!soru) return null;
  return {
    soru,
    modulId: modul.id,
    modulBaslik: modul.title.replace("Modül · ", ""),
    dersId: ders.id,
    dersBaslik: ders.title,
    soruIndex: yanlis.soruIndex,
  };
}

function favoriDetay(fav: FavoriSoru): FavoriDetay | null {
  const modul = modules.find((m) => m.id === fav.modulId);
  if (!modul) return null;
  const ders = modul.lessons.find((l) => l.id === fav.dersId);
  if (!ders) return null;
  const soru = ders.questions[fav.soruIndex];
  if (!soru) return null;
  return {
    soru,
    modulId: modul.id,
    modulBaslik: modul.title.replace("Modül · ", ""),
    dersId: ders.id,
    dersBaslik: ders.title,
    soruIndex: fav.soruIndex,
  };
}

function karistir<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function FavorilerPage() {
  const [aktifTab, setAktifTab] = useState<"favoriler" | "yanlislar">("favoriler");
  const [mounted, setMounted] = useState(false);
  const [refresh, setRefresh] = useState(0);

  // Mini sınav state
  const [miniMod, setMiniMod]   = useState(false);
  const [miniKaynak, setMiniKaynak] = useState<"favoriler" | "yanlislar">("favoriler");
  const [miniSorular, setMiniSorular] = useState<FavoriDetay[]>([]);
  const [miniIdx, setMiniIdx]   = useState(0);
  const [miniSecim, setMiniSecim] = useState<string | null>(null);
  const [miniGoster, setMiniGoster] = useState(false);
  const [miniDogru, setMiniDogru] = useState(0);
  const [miniBitti, setMiniBitti] = useState(false);

  useEffect(() => setMounted(true), []);

  // Mini sınav klavye kısayolları (A/B/C/D şık seç, Enter ilerle)
  useEffect(() => {
    if (!miniMod || miniBitti) return;
    const handler = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement;
      if (t.tagName === "INPUT" || t.tagName === "TEXTAREA") return;
      const optMap: Record<string, string> = { a: "A", b: "B", c: "C", d: "D", A: "A", B: "B", C: "C", D: "D" };
      if (optMap[e.key] && !miniGoster) { setMiniSecim(optMap[e.key]); return; }
      if (e.key === "Enter" && miniSecim) miniIleri();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [miniMod, miniBitti, miniGoster, miniSecim, miniIdx, miniSorular]);

  const favoriler = mounted ? getFavoriler().map(favoriDetay).filter((f): f is FavoriDetay => f !== null) : [];
  const yanlislar = mounted ? getYanlislar() : [];

  function miniBaslat(kaynak: FavoriDetay[], tip: "favoriler" | "yanlislar" = "favoriler") {
    const karisik = karistir(kaynak);
    setMiniSorular(karisik);
    setMiniIdx(0);
    setMiniSecim(null);
    setMiniGoster(false);
    setMiniDogru(0);
    setMiniBitti(false);
    setMiniKaynak(tip);
    setMiniMod(true);
  }

  function miniCevapla(optId: string) {
    if (miniGoster) return;
    setMiniSecim(optId);
  }

  function miniIleri() {
    const soru = miniSorular[miniIdx];
    const dogru = miniSecim === soru.soru.correct;
    if (!miniGoster) {
      setMiniGoster(true);
      if (dogru) setMiniDogru((d) => d + 1);
      return;
    }
    if (miniIdx + 1 >= miniSorular.length) {
      setMiniBitti(true);
    } else {
      setMiniIdx((i) => i + 1);
      setMiniSecim(null);
      setMiniGoster(false);
    }
  }

  // ─── Mini sınav ekranı ───
  if (miniMod) {
    if (miniBitti) {
      const puan = Math.round((miniDogru / miniSorular.length) * 100);
      return (
        <div className="min-h-screen bg-gradient-to-b from-slate-900 via-violet-950 to-slate-900 flex flex-col">
          <SharedNavbar subtitle="Favoriler & Yanlışlar" activeHref="/favoriler" />
          <div className="flex-1 flex items-center justify-center px-6 py-16">
            <div className="bg-slate-800 rounded-3xl p-10 border border-slate-700 shadow-2xl text-center max-w-md w-full">
              <div className="text-6xl mb-4">{puan >= 70 ? "🎉" : puan >= 50 ? "💪" : "📚"}</div>
              <h2 className="text-3xl font-bold text-white mb-2">Mini Sınav Tamamlandı</h2>
              <p className="text-slate-400 mb-8">{miniSorular.length} soru · {miniKaynak === "yanlislar" ? "Yanlışlarımdan" : "Favorilerimden"}</p>
              <div className={`text-6xl font-bold mb-2 ${puan >= 70 ? "text-emerald-400" : puan >= 50 ? "text-amber-400" : "text-red-400"}`}>
                %{puan}
              </div>
              <div className="grid grid-cols-2 gap-4 mt-6 mb-8">
                <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4">
                  <div className="text-2xl font-bold text-emerald-400">{miniDogru}</div>
                  <div className="text-xs text-emerald-300 mt-1 uppercase tracking-wider">Doğru</div>
                </div>
                <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4">
                  <div className="text-2xl font-bold text-red-400">{miniSorular.length - miniDogru}</div>
                  <div className="text-xs text-red-300 mt-1 uppercase tracking-wider">Yanlış</div>
                </div>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => {
                    if (miniKaynak === "yanlislar") {
                      const detaylar = yanlislar.map(yanlisFavoriDetay).filter((d): d is FavoriDetay => d !== null);
                      miniBaslat(detaylar, "yanlislar");
                    } else {
                      miniBaslat(favoriler, "favoriler");
                    }
                  }}
                  className="flex-1 bg-gradient-to-br from-violet-500 to-violet-700 hover:from-violet-600 hover:to-violet-800 text-white px-4 py-3 rounded-xl font-semibold shadow-lg transition"
                >
                  🔄 Tekrar
                </button>
                <button
                  onClick={() => setMiniMod(false)}
                  className="flex-1 bg-slate-700 hover:bg-slate-600 text-white px-4 py-3 rounded-xl font-semibold border border-slate-600 transition"
                >
                  ← {miniKaynak === "yanlislar" ? "Yanlışlar" : "Favoriler"}
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }

    const soru = miniSorular[miniIdx];
    const dogruId = soru.soru.correct;
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-violet-950 to-slate-900 flex flex-col">
        {/* Mini sınav navbar */}
        <nav className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-xl border-b border-slate-700/50">
          <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-lg ${miniKaynak === "yanlislar" ? "bg-gradient-to-br from-red-500 to-red-700 shadow-red-500/30" : "bg-gradient-to-br from-amber-500 to-amber-700 shadow-amber-500/30"}`}>
                {miniKaynak === "yanlislar" ? "❌" : "⭐"}
              </div>
              <div>
                <div className="font-bold text-white text-sm leading-none">{miniKaynak === "yanlislar" ? "Yanlış Mini Sınav" : "Favori Mini Sınav"}</div>
                <div className={`text-xs mt-0.5 ${miniKaynak === "yanlislar" ? "text-red-300" : "text-amber-300"}`}>Soru {miniIdx + 1} / {miniSorular.length}</div>
              </div>
            </div>
            <button onClick={() => setMiniMod(false)} className="text-slate-400 hover:text-white text-sm font-medium px-3 py-2 rounded-lg hover:bg-slate-800 transition">
              ✕ Çıkış
            </button>
          </div>
          {/* Progress bar */}
          <div className="h-1 bg-slate-800">
            <div className={`h-full transition-all duration-300 ${miniKaynak === "yanlislar" ? "bg-gradient-to-r from-red-500 to-red-400" : "bg-gradient-to-r from-amber-500 to-amber-400"}`} style={{ width: `${((miniIdx) / miniSorular.length) * 100}%` }} />
          </div>
        </nav>

        <div className="flex-1 max-w-3xl mx-auto px-6 py-10 w-full">
          {/* Modül etiketi */}
          <div className="text-xs text-amber-300 font-medium mb-4 uppercase tracking-wider">
            {soru.modulBaslik.replace("Modül · ", "")} · {soru.dersBaslik}
          </div>

          {/* Soru kartı */}
          <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 shadow-xl shadow-violet-900/20 mb-6">
            <p className="text-white text-lg font-medium leading-relaxed mb-6">{soru.soru.text}</p>
            <div className="space-y-2.5">
              {soru.soru.options.map((opt) => {
                const secili = miniSecim === opt.id;
                const gosterDogru = miniGoster && opt.id === dogruId;
                const gosterYanlis = miniGoster && secili && opt.id !== dogruId;
                return (
                  <button
                    key={opt.id}
                    onClick={() => miniCevapla(opt.id)}
                    disabled={miniGoster}
                    className={`w-full text-left p-4 rounded-xl border-2 transition flex items-start gap-3 ${
                      gosterDogru
                        ? "bg-emerald-500/10 border-emerald-400/60 text-emerald-100"
                        : gosterYanlis
                        ? "bg-red-500/10 border-red-400/60 text-red-100"
                        : secili
                        ? "bg-violet-500/10 border-violet-400/60 text-violet-100"
                        : "bg-slate-900/50 border-slate-700 hover:border-violet-400/40 hover:bg-violet-500/5 text-slate-300"
                    } ${miniGoster ? "cursor-default" : "cursor-pointer"}`}
                  >
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm flex-shrink-0 ${
                      gosterDogru ? "bg-emerald-500 text-white" : gosterYanlis ? "bg-red-500 text-white" : secili ? "bg-violet-500 text-white" : "bg-slate-700 text-slate-300"
                    }`}>
                      {opt.id}
                    </div>
                    <span className="leading-relaxed pt-0.5 flex-1">{opt.text}</span>
                    {gosterDogru && <span className="text-emerald-400 font-bold flex-shrink-0 mt-0.5">✓</span>}
                    {gosterYanlis && <span className="text-red-400 font-bold flex-shrink-0 mt-0.5">✕</span>}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Açıklama */}
          {miniGoster && (
            <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-5 mb-6 animate-fade-in">
              <div className={`flex items-center gap-2 font-bold mb-3 ${miniSecim === dogruId ? "text-emerald-300" : "text-red-300"}`}>
                {miniSecim === dogruId ? "✓ Doğru!" : `✕ Yanlış — Doğru cevap: ${dogruId}`}
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">{soru.soru.explanation}</p>
            </div>
          )}

          {/* Aksiyonlar */}
          <div className="flex justify-between items-center">
            <div>
              <div className="text-sm text-slate-400">{miniDogru} doğru · {miniIdx - miniDogru + (miniGoster && miniSecim !== dogruId ? 1 : 0)} yanlış</div>
              <div className="text-xs text-slate-600 mt-0.5 hidden sm:block">
                <kbd className="bg-slate-800 px-1 rounded text-[10px]">A/B/C/D</kbd> seç · <kbd className="bg-slate-800 px-1 rounded text-[10px]">Enter</kbd> ilerle
              </div>
            </div>
            <button
              onClick={miniIleri}
              disabled={!miniSecim}
              className={`px-6 py-3 rounded-xl font-semibold transition shadow-lg ${
                miniSecim
                  ? "bg-gradient-to-br from-violet-500 to-violet-700 hover:from-violet-600 hover:to-violet-800 text-white shadow-violet-500/30 hover:scale-105"
                  : "bg-slate-700 text-slate-500 cursor-not-allowed"
              }`}
            >
              {!miniGoster ? "Cevabı Gör" : miniIdx + 1 >= miniSorular.length ? "Sonuçları Gör 🏁" : "Sonraki →"}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-violet-950 to-slate-900 relative animate-page-in">
      <div className="fixed top-1/4 right-0 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-1/4 left-0 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <SharedNavbar subtitle="Favoriler & Yanlışlar" activeHref="/favoriler" />

      <div className="relative max-w-5xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-violet-500/10 text-violet-300 rounded-full text-xs font-bold tracking-wider uppercase mb-4 border border-violet-400/30">
            ⭐ Tekrar Listesi
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Favorilerim & Yanlışlarım</h1>
          <p className="text-lg text-slate-300">Zor soruları ve hata yaptıklarını tek yerde tekrar et.</p>
        </div>

        {/* Tab seçici */}
        <div className="flex gap-2 mb-6 justify-center">
          <button
            onClick={() => setAktifTab("favoriler")}
            className={`px-6 py-3 rounded-xl font-semibold transition-all ${
              aktifTab === "favoriler"
                ? "bg-gradient-to-br from-violet-500 to-violet-700 text-white shadow-lg shadow-violet-500/40"
                : "bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700"
            }`}
          >
            ⭐ Favoriler ({favoriler.length})
          </button>
          <button
            onClick={() => setAktifTab("yanlislar")}
            className={`px-6 py-3 rounded-xl font-semibold transition-all ${
              aktifTab === "yanlislar"
                ? "bg-gradient-to-br from-red-500 to-red-700 text-white shadow-lg shadow-red-500/40"
                : "bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700"
            }`}
          >
            ❌ Yanlışlarım ({yanlislar.length})
          </button>
        </div>

        {/* Liste */}
        {aktifTab === "favoriler" && (
          <div className="animate-fade-in space-y-4">
            {favoriler.length === 0 ? (
              <div className="bg-slate-800 rounded-2xl p-12 text-center border border-slate-700">
                <div className="text-6xl mb-4 animate-star-bounce inline-block">⭐</div>
                <h3 className="text-xl font-bold text-white mb-2">Henüz favori eklemediniz</h3>
                <p className="text-slate-400 mb-6">Sorulardaki yıldız ikonuna tıklayarak zor soruları kaydedin.</p>
                <Link href="/dashboard" className="inline-block bg-gradient-to-br from-violet-500 to-violet-700 hover:from-violet-600 hover:to-violet-800 text-white px-6 py-3 rounded-lg font-semibold shadow-lg shadow-violet-500/40 transition">
                  Çalışmaya Başla
                </Link>
              </div>
            ) : (
              <>
                {/* Mini sınav başlat butonu */}
                <div className="flex items-center justify-between bg-amber-500/10 border border-amber-400/30 rounded-2xl px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-amber-500/20 border border-amber-400/40 rounded-xl flex items-center justify-center text-xl">⭐</div>
                    <div>
                      <div className="text-white font-semibold text-sm">{favoriler.length} favori soru hazır</div>
                      <div className="text-amber-300 text-xs mt-0.5">Sıraları karıştırılarak quiz başlatılır</div>
                    </div>
                  </div>
                  <button
                    onClick={() => miniBaslat(favoriler, "favoriler")}
                    className="bg-gradient-to-br from-amber-500 to-amber-700 hover:from-amber-600 hover:to-amber-800 text-white px-5 py-2.5 rounded-xl font-semibold text-sm shadow-lg shadow-amber-500/30 transition hover:scale-105 whitespace-nowrap"
                  >
                    ▶ Mini Sınav Başlat
                  </button>
                </div>

                {favoriler.map((fav, idx) => (
                  <FavoriKart
                    key={`${fav.modulId}-${fav.dersId}-${fav.soruIndex}`}
                    favori={fav}
                    numara={idx + 1}
                    onSil={() => {
                      favoriCikar(fav.modulId, fav.dersId, fav.soruIndex);
                      setRefresh((r) => r + 1);
                    }}
                  />
                ))}
              </>
            )}
          </div>
        )}

        {aktifTab === "yanlislar" && (
          <div className="animate-fade-in space-y-4">
            {yanlislar.length === 0 ? (
              <div className="bg-slate-800 rounded-2xl p-12 text-center border border-slate-700">
                <div className="text-6xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-white mb-2">Henüz yanlışınız yok!</h3>
                <p className="text-slate-400 mb-6">Soru çözmeye başlayın, yanlış cevapladıklarınız burada birikecek.</p>
                <Link href="/dashboard" className="inline-block bg-gradient-to-br from-violet-500 to-violet-700 hover:from-violet-600 hover:to-violet-800 text-white px-6 py-3 rounded-lg font-semibold shadow-lg shadow-violet-500/40 transition">
                  Soru Çöz
                </Link>
              </div>
            ) : (
              <>
                {/* Aksiyonlar */}
                <div className="flex flex-col sm:flex-row gap-3">
                  {/* Mini sınav */}
                  <div className="flex-1 flex items-center justify-between bg-red-500/10 border border-red-400/30 rounded-2xl px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-red-500/20 border border-red-400/40 rounded-xl flex items-center justify-center text-xl">❌</div>
                      <div>
                        <div className="text-white font-semibold text-sm">{yanlislar.length} yanlış soru hazır</div>
                        <div className="text-red-300 text-xs mt-0.5">Sadece hata yaptıklarınla çalış</div>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        const detaylar = yanlislar.map(yanlisFavoriDetay).filter((d): d is FavoriDetay => d !== null);
                        miniBaslat(detaylar, "yanlislar");
                      }}
                      className="bg-gradient-to-br from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white px-5 py-2.5 rounded-xl font-semibold text-sm shadow-lg shadow-red-500/30 transition hover:scale-105 whitespace-nowrap ml-3"
                    >
                      ▶ Mini Sınav
                    </button>
                  </div>

                  {/* Tümünü favorilere ekle */}
                  <button
                    onClick={() => {
                      yanlislar.forEach((y) => favoriEkle(y.modulId, y.dersId, y.soruIndex));
                      setRefresh((r) => r + 1);
                    }}
                    className="sm:w-auto flex items-center justify-center gap-2 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-400/30 text-amber-300 px-5 py-3 rounded-2xl font-semibold text-sm transition whitespace-nowrap"
                  >
                    ⭐ Tümünü Favorilere Ekle
                  </button>
                </div>

                {yanlislar.map((y, idx) => (
                  <YanlisKart
                    key={idx}
                    yanlis={y}
                    numara={idx + 1}
                    onSil={() => {
                      yanlisSil(y.modulId, y.dersId, y.soruIndex);
                      setRefresh((r) => r + 1);
                    }}
                  />
                ))}
              </>
            )}
          </div>
        )}
      </div>
      <SharedFooter />
    </div>
  );
}

function FavoriKart({ favori, numara, onSil }: { favori: FavoriDetay; numara: number; onSil: () => void }) {
  const [gosterCevap, setGosterCevap] = useState(false);
  return (
    <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700 shadow-xl shadow-violet-900/30">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-10 h-10 bg-amber-500/20 border border-amber-400/50 rounded-xl flex items-center justify-center text-amber-300 font-bold text-sm flex-shrink-0">
          {numara}
        </div>
        <div className="flex-1">
          <div className="text-xs text-violet-300 mb-1 font-medium">{favori.modulBaslik} · {favori.dersBaslik}</div>
          <p className="text-white font-medium leading-relaxed">{favori.soru.text}</p>
        </div>
        <button
          onClick={onSil}
          className="p-2 text-amber-400 hover:text-amber-300 transition flex-shrink-0"
          title="Favorilerden çıkar"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </svg>
        </button>
      </div>
      <div className="ml-14 space-y-2">
        {favori.soru.options.map((opt) => {
          const dogru = opt.id === favori.soru.correct;
          return (
            <div
              key={opt.id}
              className={`p-3 rounded-lg border flex items-start gap-3 text-sm ${
                gosterCevap && dogru
                  ? "bg-emerald-500/10 border-emerald-500/50 text-emerald-100"
                  : "bg-slate-900/50 border-slate-700 text-slate-300"
              }`}
            >
              <div className={`w-6 h-6 rounded flex items-center justify-center font-bold text-xs flex-shrink-0 ${
                gosterCevap && dogru ? "bg-emerald-500 text-white" : "bg-slate-700 text-slate-300"
              }`}>
                {opt.id}
              </div>
              <span className="flex-1">{opt.text}</span>
              {gosterCevap && dogru && <span className="text-emerald-400">✓</span>}
            </div>
          );
        })}
      </div>
      <div className="ml-14 mt-4">
        {!gosterCevap ? (
          <button
            onClick={() => setGosterCevap(true)}
            className="bg-gradient-to-br from-violet-500 to-violet-700 hover:from-violet-600 hover:to-violet-800 text-white px-4 py-2 rounded-lg text-sm font-semibold transition"
          >
            Cevabı Göster
          </button>
        ) : (
          <div className="p-4 bg-slate-900/50 rounded-lg border border-slate-700">
            <div className="font-bold text-white mb-2 text-sm">📖 Açıklama</div>
            <p className="text-slate-300 text-sm leading-relaxed">{favori.soru.explanation}</p>
          </div>
        )}
      </div>
    </div>
  );
}

function YanlisKart({ yanlis, numara, onSil }: { yanlis: SoruCevap; numara: number; onSil: () => void }) {
  const modul = modules.find((m) => m.id === yanlis.modulId);
  const ders = modul?.lessons.find((l) => l.id === yanlis.dersId);
  const soru = ders?.questions[yanlis.soruIndex];
  if (!soru || !modul || !ders) return null;

  return (
    <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700 shadow-xl shadow-violet-900/30">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-10 h-10 bg-red-500/20 border border-red-400/50 rounded-xl flex items-center justify-center text-red-300 font-bold text-sm flex-shrink-0">
          {numara}
        </div>
        <div className="flex-1">
          <div className="text-xs text-red-300 mb-1 font-medium">{modul.title.replace("Modül · ", "")} · {ders.title}</div>
          <p className="text-white font-medium leading-relaxed">{soru.text}</p>
        </div>
        <button
          onClick={onSil}
          className="p-2 text-slate-500 hover:text-red-400 transition flex-shrink-0"
          title="Yanlışlardan çıkar"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="ml-14 space-y-2">
        {soru.options.map((opt) => {
          const dogru = opt.id === soru.correct;
          const senSectin = opt.id === yanlis.secilenCevap;
          return (
            <div
              key={opt.id}
              className={`p-3 rounded-lg border flex items-start gap-3 text-sm ${
                dogru
                  ? "bg-emerald-500/10 border-emerald-500/50 text-emerald-100"
                  : senSectin
                  ? "bg-red-500/10 border-red-500/50 text-red-100"
                  : "bg-slate-900/50 border-slate-700 text-slate-400"
              }`}
            >
              <div className={`w-6 h-6 rounded flex items-center justify-center font-bold text-xs flex-shrink-0 ${
                dogru ? "bg-emerald-500 text-white" : senSectin ? "bg-red-500 text-white" : "bg-slate-700 text-slate-400"
              }`}>
                {opt.id}
              </div>
              <span className="flex-1">{opt.text}</span>
              {dogru && <span className="text-emerald-400">✓ Doğru</span>}
              {senSectin && !dogru && <span className="text-red-400">✕ Senin cevabın</span>}
            </div>
          );
        })}
      </div>
      <div className="ml-14 mt-4 p-4 bg-slate-900/50 rounded-lg border border-slate-700">
        <div className="font-bold text-white mb-2 text-sm">📖 Açıklama</div>
        <p className="text-slate-300 text-sm leading-relaxed">{soru.explanation}</p>
      </div>
    </div>
  );
}