"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { modules } from "../index";
import type { Question } from "../mevzuat";
import { getFavoriler, favoriCikar, getYanlislar, yanlisSil, type FavoriSoru, type SoruCevap } from "../lib/storage";
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
    modulBaslik: modul.title.replace("ModÃ¼l Â· ", ""),
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

  // Mini sÄ±nav state
  const [miniMod, setMiniMod]   = useState(false);
  const [miniSorular, setMiniSorular] = useState<FavoriDetay[]>([]);
  const [miniIdx, setMiniIdx]   = useState(0);
  const [miniSecim, setMiniSecim] = useState<string | null>(null);
  const [miniGoster, setMiniGoster] = useState(false);
  const [miniDogru, setMiniDogru] = useState(0);
  const [miniBitti, setMiniBitti] = useState(false);

  useEffect(() => setMounted(true), []);

  const favoriler = mounted ? getFavoriler().map(favoriDetay).filter((f): f is FavoriDetay => f !== null) : [];
  const yanlislar = mounted ? getYanlislar() : [];

  function miniBaslat(kaynak: FavoriDetay[]) {
    const karisik = karistir(kaynak);
    setMiniSorular(karisik);
    setMiniIdx(0);
    setMiniSecim(null);
    setMiniGoster(false);
    setMiniDogru(0);
    setMiniBitti(false);
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

  // â”€â”€â”€ Mini sÄ±nav ekranÄ± â”€â”€â”€
  if (miniMod) {
    if (miniBitti) {
      const puan = Math.round((miniDogru / miniSorular.length) * 100);
      return (
        <div className="min-h-screen bg-gradient-to-b from-slate-900 via-violet-950 to-slate-900 flex flex-col">
          <SharedNavbar subtitle="Favoriler & YanlÄ±ÅŸlar" activeHref="/favoriler" />
          <div className="flex-1 flex items-center justify-center px-6 py-16">
            <div className="bg-slate-800 rounded-3xl p-10 border border-slate-700 shadow-2xl text-center max-w-md w-full">
              <div className="text-6xl mb-4">{puan >= 70 ? "ğŸ‰" : puan >= 50 ? "ğŸ’ª" : "ğŸ“š"}</div>
              <h2 className="text-3xl font-bold text-white mb-2">Mini SÄ±nav TamamlandÄ±</h2>
              <p className="text-slate-400 mb-8">{miniSorular.length} soru Â· Favorilerimden</p>
              <div className={`text-6xl font-bold mb-2 ${puan >= 70 ? "text-emerald-400" : puan >= 50 ? "text-amber-400" : "text-red-400"}`}>
                %{puan}
              </div>
              <div className="grid grid-cols-2 gap-4 mt-6 mb-8">
                <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4">
                  <div className="text-2xl font-bold text-emerald-400">{miniDogru}</div>
                  <div className="text-xs text-emerald-300 mt-1 uppercase tracking-wider">DoÄŸru</div>
                </div>
                <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4">
                  <div className="text-2xl font-bold text-red-400">{miniSorular.length - miniDogru}</div>
                  <div className="text-xs text-red-300 mt-1 uppercase tracking-wider">YanlÄ±ÅŸ</div>
                </div>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => miniBaslat(favoriler)}
                  className="flex-1 bg-gradient-to-br from-violet-500 to-violet-700 hover:from-violet-600 hover:to-violet-800 text-white px-4 py-3 rounded-xl font-semibold shadow-lg transition"
                >
                  ğŸ”„ Tekrar
                </button>
                <button
                  onClick={() => setMiniMod(false)}
                  className="flex-1 bg-slate-700 hover:bg-slate-600 text-white px-4 py-3 rounded-xl font-semibold border border-slate-600 transition"
                >
                  â† Favoriler
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
        {/* Mini sÄ±nav navbar */}
        <nav className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-xl border-b border-slate-700/50">
          <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-700 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-amber-500/30">â­</div>
              <div>
                <div className="font-bold text-white text-sm leading-none">Favori Mini SÄ±nav</div>
                <div className="text-xs text-amber-300 mt-0.5">Soru {miniIdx + 1} / {miniSorular.length}</div>
              </div>
            </div>
            <button onClick={() => setMiniMod(false)} className="text-slate-400 hover:text-white text-sm font-medium px-3 py-2 rounded-lg hover:bg-slate-800 transition">
              âœ• Ã‡Ä±kÄ±ÅŸ
            </button>
          </div>
          {/* Progress bar */}
          <div className="h-1 bg-slate-800">
            <div className="h-full bg-gradient-to-r from-amber-500 to-amber-400 transition-all duration-300" style={{ width: `${((miniIdx) / miniSorular.length) * 100}%` }} />
          </div>
        </nav>

        <div className="flex-1 max-w-3xl mx-auto px-6 py-10 w-full">
          {/* ModÃ¼l etiketi */}
          <div className="text-xs text-amber-300 font-medium mb-4 uppercase tracking-wider">
            {soru.modulBaslik.replace("ModÃ¼l Â· ", "")} Â· {soru.dersBaslik}
          </div>

          {/* Soru kartÄ± */}
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
                    {gosterDogru && <span className="text-emerald-400 font-bold flex-shrink-0 mt-0.5">âœ“</span>}
                    {gosterYanlis && <span className="text-red-400 font-bold flex-shrink-0 mt-0.5">âœ•</span>}
                  </button>
                );
              })}
            </div>
          </div>

          {/* AÃ§Ä±klama */}
          {miniGoster && (
            <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-5 mb-6 animate-fade-in">
              <div className={`flex items-center gap-2 font-bold mb-3 ${miniSecim === dogruId ? "text-emerald-300" : "text-red-300"}`}>
                {miniSecim === dogruId ? "âœ“ DoÄŸru!" : `âœ• YanlÄ±ÅŸ â€” DoÄŸru cevap: ${dogruId}`}
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">{soru.soru.explanation}</p>
            </div>
          )}

          {/* Aksiyonlar */}
          <div className="flex justify-between items-center">
            <div className="text-sm text-slate-400">
              {miniDogru} doÄŸru Â· {miniIdx - miniDogru + (miniGoster && miniSecim !== dogruId ? 1 : 0)} yanlÄ±ÅŸ
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
              {!miniGoster ? "CevabÄ± GÃ¶r" : miniIdx + 1 >= miniSorular.length ? "SonuÃ§larÄ± GÃ¶r ğŸ" : "Sonraki â†’"}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-violet-950 to-slate-900 relative">
      <div className="fixed top-1/4 right-0 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-1/4 left-0 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <SharedNavbar subtitle="Favoriler & YanlÄ±ÅŸlar" activeHref="/favoriler" />

      <div className="relative max-w-5xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-violet-500/10 text-violet-300 rounded-full text-xs font-bold tracking-wider uppercase mb-4 border border-violet-400/30">
            â­ Tekrar Listesi
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Favorilerim & YanlÄ±ÅŸlarÄ±m</h1>
          <p className="text-lg text-slate-300">Zor sorularÄ± ve hata yaptÄ±klarÄ±nÄ± tek yerde tekrar et.</p>
        </div>

        {/* Tab seÃ§ici */}
        <div className="flex gap-2 mb-6 justify-center">
          <button
            onClick={() => setAktifTab("favoriler")}
            className={`px-6 py-3 rounded-xl font-semibold transition-all ${
              aktifTab === "favoriler"
                ? "bg-gradient-to-br from-violet-500 to-violet-700 text-white shadow-lg shadow-violet-500/40"
                : "bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700"
            }`}
          >
            â­ Favoriler ({favoriler.length})
          </button>
          <button
            onClick={() => setAktifTab("yanlislar")}
            className={`px-6 py-3 rounded-xl font-semibold transition-all ${
              aktifTab === "yanlislar"
                ? "bg-gradient-to-br from-red-500 to-red-700 text-white shadow-lg shadow-red-500/40"
                : "bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700"
            }`}
          >
            âŒ YanlÄ±ÅŸlarÄ±m ({yanlislar.length})
          </button>
        </div>

        {/* Liste */}
        {aktifTab === "favoriler" && (
          <div className="space-y-4">
            {favoriler.length === 0 ? (
              <div className="bg-slate-800 rounded-2xl p-12 text-center border border-slate-700">
                <div className="text-6xl mb-4">â­</div>
                <h3 className="text-xl font-bold text-white mb-2">HenÃ¼z favori eklemediniz</h3>
                <p className="text-slate-400 mb-6">Sorulardaki yÄ±ldÄ±z ikonuna tÄ±klayarak zor sorularÄ± kaydedin.</p>
                <Link href="/dashboard" className="inline-block bg-gradient-to-br from-violet-500 to-violet-700 hover:from-violet-600 hover:to-violet-800 text-white px-6 py-3 rounded-lg font-semibold shadow-lg shadow-violet-500/40 transition">
                  Ã‡alÄ±ÅŸmaya BaÅŸla
                </Link>
              </div>
            ) : (
              <>
                {/* Mini sÄ±nav baÅŸlat butonu */}
                <div className="flex items-center justify-between bg-amber-500/10 border border-amber-400/30 rounded-2xl px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-amber-500/20 border border-amber-400/40 rounded-xl flex items-center justify-center text-xl">â­</div>
                    <div>
                      <div className="text-white font-semibold text-sm">{favoriler.length} favori soru hazÄ±r</div>
                      <div className="text-amber-300 text-xs mt-0.5">SÄ±ralarÄ± karÄ±ÅŸtÄ±rÄ±larak quiz baÅŸlatÄ±lÄ±r</div>
                    </div>
                  </div>
                  <button
                    onClick={() => miniBaslat(favoriler)}
                    className="bg-gradient-to-br from-amber-500 to-amber-700 hover:from-amber-600 hover:to-amber-800 text-white px-5 py-2.5 rounded-xl font-semibold text-sm shadow-lg shadow-amber-500/30 transition hover:scale-105 whitespace-nowrap"
                  >
                    â–¶ Mini SÄ±nav BaÅŸlat
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
          <div className="space-y-4">
            {yanlislar.length === 0 ? (
              <div className="bg-slate-800 rounded-2xl p-12 text-center border border-slate-700">
                <div className="text-6xl mb-4">ğŸ¯</div>
                <h3 className="text-xl font-bold text-white mb-2">HenÃ¼z yanlÄ±ÅŸÄ±nÄ±z yok!</h3>
                <p className="text-slate-400 mb-6">Soru Ã§Ã¶zmeye baÅŸlayÄ±n, yanlÄ±ÅŸ cevapladÄ±klarÄ±nÄ±z burada birikecek.</p>
                <Link href="/dashboard" className="inline-block bg-gradient-to-br from-violet-500 to-violet-700 hover:from-violet-600 hover:to-violet-800 text-white px-6 py-3 rounded-lg font-semibold shadow-lg shadow-violet-500/40 transition">
                  Soru Ã‡Ã¶z
                </Link>
              </div>
            ) : (
              yanlislar.map((y, idx) => (
                <YanlisKart
                  key={idx}
                  yanlis={y}
                  numara={idx + 1}
                  onSil={() => {
                    yanlisSil(y.modulId, y.dersId, y.soruIndex);
                    setRefresh((r) => r + 1);
                  }}
                />
              ))
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
          <div className="text-xs text-violet-300 mb-1 font-medium">{favori.modulBaslik} Â· {favori.dersBaslik}</div>
          <p className="text-white font-medium leading-relaxed">{favori.soru.text}</p>
        </div>
        <button
          onClick={onSil}
          className="p-2 text-amber-400 hover:text-amber-300 transition flex-shrink-0"
          title="Favorilerden Ã§Ä±kar"
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
              {gosterCevap && dogru && <span className="text-emerald-400">âœ“</span>}
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
            CevabÄ± GÃ¶ster
          </button>
        ) : (
          <div className="p-4 bg-slate-900/50 rounded-lg border border-slate-700">
            <div className="font-bold text-white mb-2 text-sm">ğŸ“– AÃ§Ä±klama</div>
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
          <div className="text-xs text-red-300 mb-1 font-medium">{modul.title.replace("ModÃ¼l Â· ", "")} Â· {ders.title}</div>
          <p className="text-white font-medium leading-relaxed">{soru.text}</p>
        </div>
        <button
          onClick={onSil}
          className="p-2 text-slate-500 hover:text-red-400 transition flex-shrink-0"
          title="YanlÄ±ÅŸlardan Ã§Ä±kar"
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
              {dogru && <span className="text-emerald-400">âœ“ DoÄŸru</span>}
              {senSectin && !dogru && <span className="text-red-400">âœ• Senin cevabÄ±n</span>}
            </div>
          );
        })}
      </div>
      <div className="ml-14 mt-4 p-4 bg-slate-900/50 rounded-lg border border-slate-700">
        <div className="font-bold text-white mb-2 text-sm">ğŸ“– AÃ§Ä±klama</div>
        <p className="text-slate-300 text-sm leading-relaxed">{soru.explanation}</p>
      </div>
    </div>
  );
}