"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { modules } from "../index";
import type { Question } from "../mevzuat";
import {
  dersTamamlandiMi,
  dersiTamamla,
  dersTamamlamasiniGeriAl,
  modulIlerlemesi,
  tamamlananDersSayisi,
  favoriMi,
  favoriToggle,
  cevapKaydet,
  soruCevabiAl,
} from "../lib/storage";
import SharedNavbar from "../_components/SharedNavbar";
import SharedFooter from "../_components/SharedFooter";

export default function DashboardPage() {
  const [secilenModulId, setSecilenModulId] = useState<string>(modules[0]?.id || "");
  const [secilenDersId, setSecilenDersId] = useState<string>(modules[0]?.lessons[0]?.id || "");
  const [aramaMetni, setAramaMetni] = useState("");
  const [sidebarAcik, setSidebarAcik] = useState(true);
  const [aktifTab, setAktifTab] = useState<"ozet" | "sorular">("ozet");
  const [mounted, setMounted] = useState(false);
  const [refresh, setRefresh] = useState(0);
  const [tamamlaToast, setTamamlaToast] = useState(false);

  useEffect(() => {
    // URL'de ?modul=XXX varsa o modülü seç
    const params = new URLSearchParams(window.location.search);
    const modulParam = params.get("modul");
    if (modulParam) {
      const hedefModul = modules.find((m) => m.id === modulParam);
      if (hedefModul) {
        setSecilenModulId(hedefModul.id);
        setSecilenDersId(hedefModul.lessons[0]?.id || "");
      }
    }
    setMounted(true);
  }, []);

  const secilenModul = useMemo(() => modules.find((m) => m.id === secilenModulId), [secilenModulId]);
  const secilenDers = useMemo(() => secilenModul?.lessons.find((l) => l.id === secilenDersId), [secilenModul, secilenDersId]);

  const dersTamamlanmis = mounted && secilenDers ? dersTamamlandiMi(secilenDers.id) : false;

  // İlk kez mi? Hiç ders tamamlanmamışsa onboarding göster
  const ilkKullanici = mounted && modules.every((m) => modulIlerlemesi(m.id, m.lessons.length) === 0);

  function handleTamamla() {
    if (!secilenDers || !secilenModul) return;
    if (dersTamamlanmis) {
      dersTamamlamasiniGeriAl(secilenDers.id);
    } else {
      dersiTamamla(secilenDers.id, secilenModul.id);
      setTamamlaToast(true);
      setTimeout(() => setTamamlaToast(false), 2500);
    }
    setRefresh((r) => r + 1);
  }

  const filtrelenmisModuller = useMemo(() => {
    if (!aramaMetni.trim()) return modules;
    const q = aramaMetni.toLowerCase();
    return modules.filter((m) => m.title.toLowerCase().includes(q) || m.lessons.some((l) => l.title.toLowerCase().includes(q)));
  }, [aramaMetni]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-violet-950 to-slate-900 relative">
      <div className="fixed top-1/4 right-0 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-1/4 left-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <SharedNavbar
        subtitle="Çalışma Paneli"
        activeHref="/dashboard"
        extraMobileAction={
          <button
            onClick={() => setSidebarAcik((v) => !v)}
            className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-slate-800 transition text-slate-300 hover:text-white"
            aria-label="Modüller listesini aç/kapat"
          >
            {/* Sidebar panel ikonu — navbar hamburgerundan ayırt etmek için */}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3H5a2 2 0 00-2 2v14a2 2 0 002 2h4M9 3v18M9 3h10a2 2 0 012 2v14a2 2 0 01-2 2H9" />
            </svg>
          </button>
        }
      />

      <div className="relative max-w-[1600px] mx-auto flex flex-col lg:flex-row gap-6 p-6">
        {/* SIDEBAR */}
        <aside className={`${sidebarAcik ? "block" : "hidden"} lg:block w-full lg:w-80 flex-shrink-0`}>
          <div className="bg-slate-800 rounded-2xl border border-slate-700 shadow-xl shadow-violet-900/30 lg:sticky lg:top-24 max-h-[70vh] lg:max-h-[calc(100vh-120px)] flex flex-col overflow-hidden">
            <div className="p-5 border-b border-slate-700">
              <div className="flex items-center justify-between mb-3">
                <h2 className="font-bold text-white tracking-tight">Modüller</h2>
                <span className="px-2.5 py-1 bg-violet-500/10 text-violet-300 text-xs font-bold rounded-md border border-violet-400/30">{modules.length}</span>
              </div>
              <div className="relative">
                <input
                  type="text"
                  value={aramaMetni}
                  onChange={(e) => setAramaMetni(e.target.value)}
                  placeholder="Modül ara..."
                  className="w-full px-3 py-2.5 pl-9 bg-slate-900 border border-slate-700 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-violet-400 transition"
                />
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto p-3">
              {filtrelenmisModuller.length === 0 ? (
                <div className="text-center py-8 text-sm text-slate-500">Sonuç bulunamadı</div>
              ) : (
                filtrelenmisModuller.map((modul, idx) => {
                  const acikMi = secilenModulId === modul.id;
                  const toplamSoru = modul.lessons.reduce((s, l) => s + l.questions.length, 0);
                  const ilerleme = mounted ? modulIlerlemesi(modul.id, modul.lessons.length) : 0;
                  return (
                    <div key={modul.id} className="mb-1">
                      <button
                        onClick={() => {
                          setSecilenModulId(modul.id);
                          setSecilenDersId(modul.lessons[0]?.id || "");
                          // Mobilden modül seçilince ders listesi açılsın ama içerik için kapanmasın
                        }}
                        className={`w-full text-left p-3 rounded-lg transition-all ${
                          acikMi
                            ? "bg-violet-500/10 border border-violet-400/30 shadow-md shadow-violet-500/20"
                            : "hover:bg-slate-700/50 border border-transparent"
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div className={`w-8 h-8 rounded-md flex items-center justify-center font-bold text-xs flex-shrink-0 transition ${
                            acikMi
                              ? "bg-gradient-to-br from-violet-500 to-violet-700 text-white shadow-lg shadow-violet-500/50"
                              : "bg-slate-700 text-slate-300"
                          }`}>
                            {String(idx + 1).padStart(2, "0")}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className={`font-semibold text-sm leading-tight mb-1 ${acikMi ? "text-violet-300" : "text-slate-200"}`}>
                              {modul.title.replace("Modül · ", "")}
                            </div>
                            <div className="flex items-center gap-2 text-xs text-slate-400 mb-1.5">
                              <span>{modul.lessons.length} ders</span>
                              <span>·</span>
                              <span>{toplamSoru} soru</span>
                            </div>
                            {/* MİNİ İLERLEME BARI */}
                            {mounted && ilerleme > 0 && (
                              <div className="h-1 bg-slate-900 rounded-full overflow-hidden">
                                <div
                                  className={`h-full ${ilerleme === 100 ? "bg-emerald-500" : "bg-violet-500"}`}
                                  style={{ width: `${ilerleme}%` }}
                                />
                              </div>
                            )}
                          </div>
                        </div>
                      </button>
                      {acikMi && (
                        <div className="mt-1 ml-3 pl-3 border-l-2 border-violet-400/30 space-y-0.5">
                          {modul.lessons.map((ders) => {
                            const dersSecili = secilenDersId === ders.id;
                            const tamam = mounted && dersTamamlandiMi(ders.id);
                            return (
                              <button
                                key={ders.id}
                                onClick={() => {
                                  setSecilenDersId(ders.id);
                                  // Mobilden ders seçilince sidebar'ı kapat, içerik görünsün
                                  if (window.innerWidth < 1024) setSidebarAcik(false);
                                }}
                                className={`w-full text-left px-3 py-2 rounded-md text-xs transition-all flex items-center gap-2 ${
                                  dersSecili
                                    ? "bg-gradient-to-br from-violet-500 to-violet-700 text-white font-semibold shadow-lg shadow-violet-500/50"
                                    : "text-slate-400 hover:bg-slate-700/50 hover:text-white"
                                }`}
                              >
                                {tamam && <span className="text-emerald-400 flex-shrink-0">✓</span>}
                                <span className="line-clamp-1">{ders.title}</span>
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </aside>

        {/* İÇERİK */}
        <main className="flex-1 min-w-0">

          {/* Mobil: Modüllere Dön butonu */}
          {!sidebarAcik && (
            <button
              onClick={() => setSidebarAcik(true)}
              className="lg:hidden flex items-center gap-2 text-sm text-violet-400 hover:text-violet-300 font-semibold mb-4 px-1 transition"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Modüller
            </button>
          )}

          {/* ─── Onboarding — sadece ilk kullanımda ─── */}
          {ilkKullanici && (
            <div className="bg-gradient-to-br from-violet-900/40 to-violet-800/20 border border-violet-500/30 rounded-2xl p-6 mb-6 shadow-xl shadow-violet-500/10">
              <div className="flex items-start gap-4">
                <div className="text-3xl flex-shrink-0">👋</div>
                <div className="flex-1 min-w-0">
                  <h2 className="font-bold text-white text-lg mb-1">Hoş geldin! Nereden başlamalısın?</h2>
                  <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                    Sol panelden bir modül seçerek çalışmaya başlayabilirsin. Hangi sınava hazırlandığını biliyorsan aşağıdan doğrudan tam sınav simülasyonuna geçebilirsin.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Link href="/sinav/duzey1" className="inline-flex items-center gap-2 bg-violet-500 hover:bg-violet-600 text-white text-sm font-semibold px-4 py-2 rounded-xl transition shadow-lg shadow-violet-500/30">
                      🎓 Düzey 1 Sınavına Hazırlan
                    </Link>
                    <Link href="/sinav" className="inline-flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-slate-200 text-sm font-semibold px-4 py-2 rounded-xl border border-slate-600 transition">
                      ⏱️ Tüm Sınavlar
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
          {secilenDers && secilenModul ? (
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-sm text-slate-400 flex-wrap">
                <Link href="/" className="hover:text-violet-400">Ana Sayfa</Link>
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-slate-300">{secilenModul.title.replace("Modül · ", "")}</span>
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-white font-medium">{secilenDers.title}</span>
              </div>

              <div className="bg-slate-800 rounded-2xl p-5 md:p-8 border border-slate-700 shadow-xl shadow-violet-900/30">
                <div className="mb-5">
                  {/* Modül etiketi — truncate ile taşmayı önle */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2.5 py-1 bg-violet-500/10 text-violet-300 rounded-full text-[11px] font-bold tracking-wider uppercase border border-violet-400/30 truncate max-w-[calc(100%-2rem)]">
                      {secilenModul.title.replace("Modül · ", "")}
                    </span>
                  </div>
                  {/* Başlık */}
                  <h1 className="text-xl md:text-3xl font-bold text-white leading-tight tracking-tight mb-4">
                    {secilenDers.title}
                  </h1>
                  {/* Tamamla + Süre — mobilden yan yana, küçük */}
                  <div className="flex items-center gap-2 flex-wrap">
                    {mounted && (
                      <button
                        onClick={handleTamamla}
                        className={`px-4 py-2 rounded-xl font-semibold text-sm transition-all flex items-center gap-2 ${
                          dersTamamlanmis
                            ? "bg-emerald-500/20 border border-emerald-400/50 text-emerald-300 hover:bg-emerald-500/30"
                            : "bg-slate-700 border border-slate-600 text-slate-300 hover:bg-slate-600 hover:border-emerald-500/50"
                        }`}
                      >
                        {dersTamamlanmis ? (
                          <><span>✓</span><span>Tamamlandı</span></>
                        ) : (
                          <><span>○</span><span>Tamamla</span></>
                        )}
                      </button>
                    )}
                    <div className="flex items-center gap-2 px-4 py-2 bg-slate-900 rounded-xl border border-slate-700 text-sm">
                      <span className="text-violet-300 font-semibold">⏱️</span>
                      <span className="font-bold text-white">{secilenDers.duration}</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 pt-6 border-t border-slate-700">
                  <button
                    onClick={() => setAktifTab("ozet")}
                    className={`px-5 py-2.5 rounded-lg font-semibold text-sm transition-all ${
                      aktifTab === "ozet"
                        ? "bg-gradient-to-br from-violet-500 to-violet-700 text-white shadow-lg shadow-violet-500/40"
                        : "bg-slate-700 text-slate-300 hover:bg-slate-600"
                    }`}
                  >
                    📖 Konu Özeti
                  </button>
                  <button
                    onClick={() => setAktifTab("sorular")}
                    className={`px-5 py-2.5 rounded-lg font-semibold text-sm transition-all ${
                      aktifTab === "sorular"
                        ? "bg-gradient-to-br from-violet-500 to-violet-700 text-white shadow-lg shadow-violet-500/40"
                        : "bg-slate-700 text-slate-300 hover:bg-slate-600"
                    }`}
                  >
                    📝 Sorular ({secilenDers.questions.length})
                  </button>
                </div>
              </div>

              {aktifTab === "ozet" && (
                <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 shadow-xl shadow-violet-900/30 animate-fade-in">
                  <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">{secilenDers.summary.title}</h2>
                  <p className="text-slate-300 leading-relaxed text-base mb-8">{secilenDers.summary.intro}</p>
                  <div className="space-y-8">
                    {secilenDers.summary.sections.map((section, idx) => (
                      <div key={idx}>
                        <div className="flex items-center gap-3 mb-5">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-white shadow-lg ${
                            section.icon === "shield"
                              ? "bg-gradient-to-br from-violet-500 to-violet-700 shadow-violet-500/40"
                              : "bg-gradient-to-br from-emerald-500 to-emerald-700 shadow-emerald-500/40"
                          }`}>
                            {idx + 1}
                          </div>
                          <h3 className="text-xl font-bold text-white tracking-tight">{section.heading}</h3>
                        </div>
                        <div className="space-y-2.5">
                          {section.items.map((item, i) => (
                            <div key={i} className="flex gap-3 p-4 bg-slate-900/50 rounded-xl border-l-4 border-violet-400">
                              <div>
                                <span className="font-bold text-white">{item.strong}</span>{" "}
                                <span className="text-slate-300 leading-relaxed">{item.text}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 p-6 bg-gradient-to-br from-amber-500/10 to-orange-500/10 border-l-4 border-amber-500 rounded-r-xl">
                    <div className="flex items-start gap-3">
                      <div className="text-2xl flex-shrink-0">💡</div>
                      <div>
                        <div className="font-bold text-amber-300 mb-2 tracking-tight">Püf Noktası</div>
                        <p className="text-amber-100 leading-relaxed">{secilenDers.summary.tip}</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 pt-8 border-t border-slate-700 flex items-center justify-between flex-wrap gap-4">
                    <div className="text-sm text-slate-300">Konuyu bitirdiniz mi? Şimdi soruları çözün.</div>
                    <button
                      onClick={() => setAktifTab("sorular")}
                      className="bg-gradient-to-br from-violet-500 to-violet-700 hover:from-violet-600 hover:to-violet-800 text-white px-6 py-3 rounded-lg font-semibold shadow-lg shadow-violet-500/40 transition-all hover:scale-105 flex items-center gap-2"
                    >
                      Sorulara Geç →
                    </button>
                  </div>
                </div>
              )}

              {aktifTab === "sorular" && secilenModul && (
                <SorularBolumu
                  sorular={secilenDers.questions}
                  dersBasligi={secilenDers.title}
                  modulId={secilenModul.id}
                  dersId={secilenDers.id}
                />
              )}
            </div>
          ) : (
            <div className="bg-slate-800 rounded-2xl p-12 text-center border border-slate-700">
              <div className="text-5xl mb-4">📚</div>
              <p className="text-slate-300 text-lg">Lütfen bir ders seçin</p>
            </div>
          )}
        </main>
      </div>
      <SharedFooter />

      {/* Tamamlama toast */}
      {tamamlaToast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[200] flex items-center gap-3 bg-emerald-500 text-white px-6 py-3 rounded-2xl shadow-2xl shadow-emerald-500/40 animate-bounce-in font-semibold text-sm">
          <span className="text-xl">✓</span>
          Ders tamamlandı! 🎉
        </div>
      )}
    </div>
  );
}

function SorularBolumu({ sorular, dersBasligi, modulId, dersId }: { sorular: Question[]; dersBasligi: string; modulId: string; dersId: string }) {
  return (
    <div className="space-y-4 animate-fade-in">
      <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700 shadow-xl shadow-violet-900/30">
        <h2 className="text-xl font-bold text-white mb-2 tracking-tight">📝 {dersBasligi} — Sorular</h2>
        <p className="text-sm text-slate-300">Her sorunun altındaki "Cevabı Göster" butonuna tıklayarak doğru cevabı ve açıklamasını görüntüleyebilirsiniz. Zor soruları ⭐ ile favorilere ekleyin.</p>
      </div>
      {sorular.map((soru, idx) => (
        <SoruKarti key={idx} soru={soru} numara={idx + 1} modulId={modulId} dersId={dersId} soruIndex={idx} />
      ))}
    </div>
  );
}

function SoruKarti({ soru, numara, modulId, dersId, soruIndex }: { soru: Question; numara: number; modulId: string; dersId: string; soruIndex: number }) {
  const [secilenCevap, setSecilenCevap] = useState<string | null>(null);
  const [cevapGosterildi, setCevapGosterildi] = useState(false);
  const [favori, setFavori] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Önceki cevabı ve favori durumunu yükle
  useEffect(() => {
    setMounted(true);
    const oncekiCevap = soruCevabiAl(modulId, dersId, soruIndex);
    if (oncekiCevap) {
      setSecilenCevap(oncekiCevap.secilenCevap);
      setCevapGosterildi(true);
    }
    setFavori(favoriMi(modulId, dersId, soruIndex));
  }, [modulId, dersId, soruIndex]);

  const dogruMu = secilenCevap === soru.correct;

  function handleCevapGoster() {
    if (!secilenCevap) return;
    setCevapGosterildi(true);
    // Kaydet
    cevapKaydet({
      modulId,
      dersId,
      soruIndex,
      secilenCevap,
      dogruCevap: soru.correct,
      dogruMu: secilenCevap === soru.correct,
    });
  }

  function handleFavori() {
    const yeniDurum = favoriToggle(modulId, dersId, soruIndex);
    setFavori(yeniDurum);
  }

  return (
    <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700 shadow-xl shadow-violet-900/30">
      <div className="flex items-start gap-4 mb-5">
        <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-violet-700 rounded-xl flex items-center justify-center text-white font-bold text-sm flex-shrink-0 shadow-lg shadow-violet-500/40">
          {numara}
        </div>
        <div className="flex-1">
          <p className="text-white font-medium leading-relaxed">{soru.text}</p>
        </div>
        {/* FAVORİ BUTONU */}
        {mounted && (
          <button
            onClick={handleFavori}
            className={`p-2 rounded-lg transition-all flex-shrink-0 ${
              favori ? "text-amber-400 hover:text-amber-300" : "text-slate-500 hover:text-amber-400"
            }`}
            title={favori ? "Favorilerden çıkar" : "Favorilere ekle"}
          >
            <svg className="w-6 h-6" fill={favori ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
          </button>
        )}
      </div>

      <div className="space-y-2 ml-14">
        {soru.options.map((opt) => {
          const buSecili = secilenCevap === opt.id;
          const buDogru = opt.id === soru.correct;
          const renkSinifi = cevapGosterildi
            ? buDogru
              ? "bg-emerald-500/10 border-emerald-500/50 text-emerald-100"
              : buSecili
              ? "bg-red-500/10 border-red-500/50 text-red-100"
              : "bg-slate-900/50 border-slate-700 text-slate-400"
            : buSecili
            ? "bg-violet-500/10 border-violet-400/50 text-violet-100"
            : "bg-slate-900/50 border-slate-700 hover:border-violet-400/50 hover:bg-violet-500/5 text-slate-300";

          return (
            <button
              key={opt.id}
              onClick={() => !cevapGosterildi && setSecilenCevap(opt.id)}
              disabled={cevapGosterildi}
              className={`w-full text-left p-4 rounded-xl border-2 transition flex items-start gap-3 ${renkSinifi} ${cevapGosterildi ? "cursor-default" : "cursor-pointer"}`}
            >
              <div className={`w-7 h-7 rounded-md flex items-center justify-center font-bold text-sm flex-shrink-0 ${
                cevapGosterildi
                  ? buDogru
                    ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/40"
                    : buSecili
                    ? "bg-red-500 text-white shadow-lg shadow-red-500/40"
                    : "bg-slate-700 text-slate-400"
                  : buSecili
                  ? "bg-gradient-to-br from-violet-500 to-violet-700 text-white shadow-lg shadow-violet-500/40"
                  : "bg-slate-700 text-slate-300"
              }`}>
                {opt.id}
              </div>
              <span className="leading-relaxed pt-0.5 flex-1">{opt.text}</span>
              {cevapGosterildi && buDogru && <span className="text-emerald-400 font-bold flex-shrink-0">✓</span>}
              {cevapGosterildi && buSecili && !buDogru && <span className="text-red-400 font-bold flex-shrink-0">✕</span>}
            </button>
          );
        })}
      </div>

      {!cevapGosterildi && (
        <div className="ml-14 mt-4 flex items-center gap-3">
          <button
            onClick={handleCevapGoster}
            disabled={!secilenCevap}
            className={`px-5 py-2.5 rounded-lg font-semibold text-sm transition-all ${
              secilenCevap
                ? "bg-gradient-to-br from-violet-500 to-violet-700 hover:from-violet-600 hover:to-violet-800 text-white shadow-lg shadow-violet-500/40 hover:scale-105"
                : "bg-slate-700 text-slate-500 cursor-not-allowed"
            }`}
          >
            Cevabı Göster
          </button>
          {!secilenCevap && <span className="text-sm text-slate-400">Önce bir şık seçin</span>}
        </div>
      )}

      {cevapGosterildi && (
        <div className="ml-14 mt-5 space-y-3 animate-fade-in">
          <div className={`p-4 rounded-xl border-l-4 ${dogruMu ? "bg-emerald-500/10 border-emerald-500" : "bg-red-500/10 border-red-500"}`}>
            <div className="flex items-center gap-2 font-bold">
              {dogruMu ? (
                <>
                  <span className="text-emerald-400 text-xl">✓</span>
                  <span className="text-emerald-300">Doğru Cevap!</span>
                </>
              ) : (
                <>
                  <span className="text-red-400 text-xl">✕</span>
                  <span className="text-red-300">Yanlış · Doğru cevap: {soru.correct}</span>
                </>
              )}
            </div>
          </div>
          <div className="p-5 bg-slate-900/50 rounded-xl border border-slate-700">
            <div className="flex items-center gap-2 font-bold text-white mb-2 tracking-tight">
              <span>📖</span>
              <span>Açıklama</span>
            </div>
            <p className="text-slate-300 leading-relaxed">{soru.explanation}</p>
          </div>
          <button
            onClick={() => {
              setSecilenCevap(null);
              setCevapGosterildi(false);
            }}
            className="text-sm text-violet-400 hover:text-violet-300 font-semibold flex items-center gap-1.5"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Tekrar Dene
          </button>
        </div>
      )}
    </div>
  );
}