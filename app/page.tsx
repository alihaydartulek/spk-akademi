"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import Link from "next/link";
import { modules } from "./index";
import { modulIlerlemesi, tamamlananDersSayisi, getTamamlananDersler } from "./lib/storage";
import { SINAV_MENUSU, SINAVLAR } from "./_constants/sinavlar";

const TESTIMONIALS = [
  { isim: "Mehmet K.", rol: "Yatırım Uzmanı, İstanbul", yorum: "Düzey 3 sınavına SPK Akademi ile hazırlandım. Konuların özet anlatımı ve sorular gerçek sınav formatına çok yakındı. İlk denememde geçtim.", sinav: "Düzey 3" },
  { isim: "Ayşe S.", rol: "Banka Müfettişi, Ankara", yorum: "BS Denetim sınavı için harika bir kaynak. COBIT, ISO 27001, ITIL gibi çerçeveleri en kolay şekilde özetlemiş.", sinav: "BS Denetim" },
  { isim: "Burak Y.", rol: "Portföy Yöneticisi, İstanbul", yorum: "Türev Araçlar sınavı için kullandım. Risk yönetimi ve türev araç değerleme konuları çok iyi anlatılmış.", sinav: "Türev Araçlar" },
  { isim: "Selin D.", rol: "Gayrimenkul Değerleme Uzmanı, İzmir", yorum: "GD sınavı için tam 75 soru ile pratik yapabildim. Mevzuat detayları çok kapsamlı.", sinav: "GD" },
  { isim: "Emre A.", rol: "Bağımsız Denetçi, Bursa", yorum: "Kredi Derecelendirme için harikaydı. Sorulardaki açıklamalar tek başına bir ders niteliğinde.", sinav: "KD" },
  { isim: "Zeynep T.", rol: "Stajyer Analist, İstanbul", yorum: "Düzey 1 sınavıma 1 ay kala başladım. Çok kapsamlı ama düzenli ilerleyince çok kolay oldu.", sinav: "Düzey 1" },
];

const TOPLAM_MODUL = modules.length;
const TOPLAM_DERS = modules.reduce((s, m) => s + m.lessons.length, 0);
const TOPLAM_SORU = modules.reduce((s, m) => s + m.lessons.reduce((s2, l) => s2 + l.questions.length, 0), 0);

function useCountUp(target: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration]);
  return mounted ? count : 0;
}

export default function HomePage() {
  const [aramaMetni, setAramaMetni] = useState("");
  const [sinavFiltre, setSinavFiltre] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const [sinavMenuAcik, setSinavMenuAcik] = useState(false);
  const [mobileMenuAcik, setMobileMenuAcik] = useState(false);
  const sinavMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => setMounted(true), []);

  /* Dropdown dışına tıklayınca kapat */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (sinavMenuRef.current && !sinavMenuRef.current.contains(e.target as Node)) {
        setSinavMenuAcik(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const animModul = useCountUp(TOPLAM_MODUL, 1500);
  const animDers = useCountUp(TOPLAM_DERS, 2000);
  const animSoru = useCountUp(TOPLAM_SORU, 2500);

  const filtrelenmisModuller = useMemo(() => {
    let sonuc = modules;
    if (sinavFiltre) {
      const sinav = SINAVLAR.find((s) => s.kod === sinavFiltre);
      if (sinav) {
        sonuc = sonuc.filter((m) =>
          sinav.pdfler.some((pdf) => m.id.includes(pdf) || (pdf === "1001" && m.id === "m1") || (pdf === "1002" && m.id === "m1002"))
        );
      }
    }
    if (aramaMetni.trim()) {
      const q = aramaMetni.toLowerCase();
      sonuc = sonuc.filter((m) => m.title.toLowerCase().includes(q) || m.lessons.some((l) => l.title.toLowerCase().includes(q)));
    }
    return sonuc;
  }, [aramaMetni, sinavFiltre]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-indigo-950 to-slate-900 relative">
      <div className="fixed top-1/4 right-0 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none animate-orb-pulse" />
      <div className="fixed bottom-1/4 left-0 w-[600px] h-[600px] bg-cyan-600/8 rounded-full blur-3xl pointer-events-none animate-orb-pulse" style={{ animationDelay: "3s" }} />

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-slate-900/80 glass border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
            <div className="w-11 h-11 bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-indigo-500/40">
              SPK
            </div>
            <div>
              <div className="font-bold text-white text-lg leading-none">SPK Akademi</div>
              <div className="text-[11px] text-indigo-300 mt-1 tracking-wider uppercase">Lisanslama Platformu</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
            <a href="#moduller" className="hover:text-indigo-400 transition">Modüller</a>
            <Link href="/sinav" className="hover:text-indigo-400 transition">Hızlı Pratik</Link>

            {/* ── Sınavlar Dropdown ── */}
            <div
              ref={sinavMenuRef}
              className="relative"
              onMouseEnter={() => setSinavMenuAcik(true)}
              onMouseLeave={() => setSinavMenuAcik(false)}
            >
              <button
                onClick={() => setSinavMenuAcik((v) => !v)}
                className={`flex items-center gap-1.5 font-semibold transition ${sinavMenuAcik ? "text-indigo-400" : "text-slate-300 hover:text-indigo-400"}`}
              >
                Sınavlar
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${sinavMenuAcik ? "rotate-180 text-indigo-400" : ""}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Panel */}
              <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[520px] transition-all duration-200 origin-top ${
                sinavMenuAcik ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"
              }`}>
                {/* Ok işareti */}
                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-slate-800 border-l border-t border-slate-600/60 rotate-45" />

                <div className="bg-slate-900 border border-slate-700/70 rounded-2xl shadow-2xl shadow-indigo-900/40 overflow-hidden">
                  {/* Başlık */}
                  <div className="px-5 py-3.5 border-b border-slate-700/60 flex items-center gap-2">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">SPK Lisanslama Sınavları</span>
                    <span className="ml-auto px-2 py-0.5 text-[10px] font-bold bg-indigo-500/15 text-indigo-400 rounded-full border border-indigo-500/25">8 Sınav Türü</span>
                  </div>

                  {/* 2 sütun grid */}
                  <div className="grid grid-cols-2 gap-px bg-slate-800/40 p-1">
                    {SINAV_MENUSU.map((sinav) => (
                      <Link
                        key={sinav.href}
                        href={sinav.href}
                        onClick={() => setSinavMenuAcik(false)}
                        className="group flex items-start gap-3 px-4 py-3.5 rounded-xl bg-slate-900 hover:bg-indigo-500/8 transition-all"
                      >
                        <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/50 mt-1.5 flex-shrink-0" />
                        <div className="min-w-0">
                          <div className="text-sm font-semibold text-white group-hover:text-indigo-300 transition leading-tight">
                            {sinav.ad}
                          </div>
                          <div className="text-xs text-slate-400 mt-0.5">{sinav.aciklama}</div>
                        </div>
                        <svg className="w-4 h-4 text-indigo-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all ml-auto flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    ))}
                  </div>

                  {/* Alt banner */}
                  <div className="px-5 py-3 border-t border-slate-700/60 flex items-center justify-between">
                    <span className="text-xs text-slate-500">Tüm sınav türlerine tek platformdan erişin</span>
                    <Link
                      href="/sinav"
                      onClick={() => setSinavMenuAcik(false)}
                      className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition flex items-center gap-1"
                    >
                      Hızlı Pratik →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* ── / Dropdown ── */}

            <Link href="/favoriler" className="hover:text-indigo-400 transition">Favoriler</Link>
            <Link href="/istatistikler" className="hover:text-indigo-400 transition">İstatistikler</Link>
            <Link href="/dashboard" className="bg-gradient-to-br from-indigo-500 to-indigo-700 hover:from-indigo-600 hover:to-indigo-800 text-white px-5 py-2.5 rounded-lg font-semibold shadow-lg shadow-indigo-500/40 transition-all hover:scale-105">
              Çalışmaya Başla
            </Link>
          </div>

          {/* Mobil: hamburger + CTA */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={() => setMobileMenuAcik((v) => !v)}
              className="w-9 h-9 flex flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-slate-800 transition"
              aria-label="Menüyü aç"
            >
              <span className={`w-5 h-0.5 bg-slate-300 rounded transition-all duration-200 ${mobileMenuAcik ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`w-5 h-0.5 bg-slate-300 rounded transition-all duration-200 ${mobileMenuAcik ? "opacity-0" : ""}`} />
              <span className={`w-5 h-0.5 bg-slate-300 rounded transition-all duration-200 ${mobileMenuAcik ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
            <Link href="/dashboard" className="bg-gradient-to-br from-indigo-500 to-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-semibold">Başla</Link>
          </div>
        </div>

        {/* Mobil menü paneli */}
        {mobileMenuAcik && (
          <div className="md:hidden border-t border-slate-700/50 bg-slate-900/98 backdrop-blur-xl">
            <div className="px-5 py-4 space-y-1">
              <a href="#moduller" onClick={() => setMobileMenuAcik(false)} className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-slate-800 text-slate-300 hover:text-white transition text-sm font-medium">Modüller</a>
              <Link href="/sinav" onClick={() => setMobileMenuAcik(false)} className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-slate-800 text-slate-300 hover:text-white transition text-sm font-medium">Hızlı Pratik</Link>
              <Link href="/favoriler" onClick={() => setMobileMenuAcik(false)} className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-slate-800 text-slate-300 hover:text-white transition text-sm font-medium">Favoriler</Link>
              <Link href="/istatistikler" onClick={() => setMobileMenuAcik(false)} className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-slate-800 text-slate-300 hover:text-white transition text-sm font-medium">İstatistikler</Link>

              {/* Mobil sınav listesi */}
              <div className="pt-3 mt-2 border-t border-slate-700/60">
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest px-3 mb-2">Sınavlar</div>
                {SINAV_MENUSU.map((sinav) => (
                  <Link
                    key={sinav.href}
                    href={sinav.href}
                    onClick={() => setMobileMenuAcik(false)}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-indigo-500/8 border border-indigo-500/20 mb-1 hover:bg-indigo-500/15 transition"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                    <span className="text-sm font-semibold text-indigo-300">{sinav.ad}</span>
                    <span className="ml-auto text-xs text-slate-400">{sinav.aciklama}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-orb-pulse" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-indigo-600/12 rounded-full blur-3xl animate-orb-pulse" style={{ animationDelay: "2s" }} />
        <div className="relative max-w-7xl mx-auto px-6 py-28 lg:py-36">
          <div className="text-center max-w-4xl mx-auto">
            <div className="animate-hero-1 inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-400/30 rounded-full px-4 py-2 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="text-sm text-indigo-100 font-medium">SPK Sermaye Piyasası Lisanslama · Tüm Sınavlar</span>
            </div>
            <h1 className="animate-hero-1 text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.05] tracking-tight">
              Türkiye'nin<br />
              <span className="bg-gradient-to-r from-indigo-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">En Kapsamlı</span>{" "}
              <span className="text-white">SPL Platformu</span>
            </h1>
            <p className="animate-hero-2 text-lg md:text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
              SPK Lisanslama Sınavları için <span className="text-white font-semibold">{TOPLAM_MODUL} modül</span>, <span className="text-white font-semibold">{TOPLAM_DERS} ders</span> ve <span className="text-white font-semibold">{TOPLAM_SORU} soru</span> ile sınava bir adım önde başlayın.
            </p>
            <div className="animate-hero-3 flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                href="/dashboard"
                className="group relative overflow-hidden bg-gradient-to-br from-indigo-500 via-indigo-600 to-indigo-700 hover:from-indigo-400 hover:to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-2xl shadow-indigo-500/40 transition-all duration-250 hover:scale-105 hover:shadow-cyan-500/20 flex items-center justify-center gap-2"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Ücretsiz Başla <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                </span>
                {/* Shimmer overlay */}
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              </Link>
              <Link
                href="/sinav"
                className="bg-slate-800/60 hover:bg-slate-800 border border-slate-600/60 hover:border-indigo-400/50 text-slate-200 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-250 hover:scale-105 flex items-center justify-center gap-2"
              >
                Sınav Simülasyonu
              </Link>
            </div>
            <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-3xl mx-auto pt-10 border-t border-slate-700/50">
              <div className="text-center">
                <div className="text-4xl md:text-6xl font-bold bg-gradient-to-b from-white to-indigo-200 bg-clip-text text-transparent mb-2">{animModul}</div>
                <div className="text-xs md:text-sm text-indigo-300 uppercase tracking-[0.2em] font-medium">Modül</div>
              </div>
              <div className="text-center border-x border-slate-700/50">
                <div className="text-4xl md:text-6xl font-bold bg-gradient-to-b from-white to-indigo-200 bg-clip-text text-transparent mb-2">{animDers}</div>
                <div className="text-xs md:text-sm text-indigo-300 uppercase tracking-[0.2em] font-medium">Ders</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-6xl font-bold bg-gradient-to-b from-white to-indigo-200 bg-clip-text text-transparent mb-2">{animSoru}</div>
                <div className="text-xs md:text-sm text-indigo-300 uppercase tracking-[0.2em] font-medium">Soru</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KİŞİSEL İLERLEME ŞERIDI — localStorage'da veri varsa göster */}
      {mounted && (() => {
        const tamamlanan = getTamamlananDersler().length;
        const toplamDers = modules.reduce((s, m) => s + m.lessons.length, 0);
        if (tamamlanan === 0) return null;
        const yuzde = Math.round((tamamlanan / toplamDers) * 100);
        return (
          <div className="max-w-7xl mx-auto px-6 -mt-8 mb-4 relative z-10">
            <div className="bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-2xl px-6 py-4 flex items-center gap-4 shadow-xl shadow-indigo-900/20">
              <div className="w-10 h-10 bg-emerald-500/20 border border-emerald-400/40 rounded-xl flex items-center justify-center text-xl flex-shrink-0">📈</div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-sm font-semibold text-white">Toplam İlerleme</span>
                  <span className="text-sm font-bold text-emerald-400">%{yuzde}</span>
                </div>
                <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full transition-all duration-700" style={{ width: `${yuzde}%` }} />
                </div>
                <div className="text-xs text-slate-400 mt-1">{tamamlanan} / {toplamDers} ders tamamlandı</div>
              </div>
              <Link href="/dashboard" className="flex-shrink-0 bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-semibold px-3 py-2 rounded-lg transition whitespace-nowrap">
                Devam Et →
              </Link>
            </div>
          </div>
        );
      })()}

      {/* MODÜLLER — İLERLEME BARLARI İLE */}
      <section id="moduller" className="py-24 relative">
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-500/10 text-indigo-300 rounded-full text-xs font-bold tracking-wider uppercase mb-4 border border-indigo-400/30">
              Çalışma Modülleri
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              {TOPLAM_MODUL} Kapsamlı Modül
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto mb-8">
              Her modül 5+ ders, detaylı konu özetleri ve açıklamalı sorularla dolu.
            </p>
            <div className="max-w-2xl mx-auto">
              <div className="relative mb-4">
                <input
                  type="text"
                  value={aramaMetni}
                  onChange={(e) => setAramaMetni(e.target.value)}
                  placeholder="Modül veya konu ara..."
                  className="w-full px-6 py-4 pl-14 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-indigo-400 focus:ring-4 focus:ring-indigo-500/20 transition-all shadow-xl shadow-indigo-900/30"
                />
                <svg className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                {aramaMetni && (
                  <button onClick={() => setAramaMetni("")} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white w-8 h-8 flex items-center justify-center rounded-md hover:bg-slate-700">✕</button>
                )}
              </div>

              {/* Sınav filtre pilleri */}
              <div className="flex flex-wrap gap-2 justify-center">
                <button
                  onClick={() => setSinavFiltre(null)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                    !sinavFiltre
                      ? "bg-indigo-500 text-white border-indigo-500 shadow-lg shadow-indigo-500/30"
                      : "bg-slate-800 text-slate-400 border-slate-700 hover:border-indigo-400/50 hover:text-slate-200"
                  }`}
                >
                  Tümü
                </button>
                {SINAVLAR.map((s) => (
                  <button
                    key={s.kod}
                    onClick={() => setSinavFiltre(sinavFiltre === s.kod ? null : s.kod)}
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                      sinavFiltre === s.kod
                        ? "bg-indigo-500 text-white border-indigo-500 shadow-lg shadow-indigo-500/30"
                        : "bg-slate-800 text-slate-400 border-slate-700 hover:border-indigo-400/50 hover:text-slate-200"
                    }`}
                  >
                    {s.pilAd}
                  </button>
                ))}
              </div>

              {(aramaMetni || sinavFiltre) && (
                <div className="mt-4 text-sm text-slate-300 text-center">
                  <span className="font-semibold text-white">{filtrelenmisModuller.length}</span> modül
                  {sinavFiltre && <span> · <span className="font-semibold text-indigo-300">{SINAVLAR.find((s) => s.kod === sinavFiltre)?.ad}</span> sınavı için</span>}
                </div>
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtrelenmisModuller.map((modul, idx) => {
              const toplamSoruSayisi = modul.lessons.reduce((s, l) => s + l.questions.length, 0);
              const ilerleme = mounted ? modulIlerlemesi(modul.id, modul.lessons.length) : 0;
              const tamamlanan = mounted ? tamamlananDersSayisi(modul.id) : 0;
              const staggerMs = Math.min(idx * 50, 400);
              return (
                <Link
                  key={modul.id}
                  href={`/dashboard?modul=${modul.id}`}
                  className="animate-card-stagger group relative bg-slate-800 rounded-2xl p-6 border border-slate-700 hover:border-indigo-500/50 shadow-xl shadow-indigo-900/30 hover:shadow-2xl hover:shadow-indigo-500/30 transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.01]"
                  style={{ "--stagger-delay": `${staggerMs}ms` } as React.CSSProperties}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-11 h-11 bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-indigo-500/50">
                      {String(idx + 1).padStart(2, "0")}
                    </div>
                    <span className="px-2.5 py-1 bg-indigo-500/10 text-indigo-300 text-xs font-semibold rounded-md border border-indigo-400/30">
                      {modul.lessons.length} Ders
                    </span>
                  </div>
                  <h3 className="font-bold text-white text-lg mb-3 leading-tight group-hover:text-indigo-300 transition line-clamp-2 min-h-[56px]">
                    {modul.title.replace("Modül · ", "")}
                  </h3>

                  {/* İLERLEME BARI */}
                  {mounted && (
                    <div className="mb-4">
                      <div className="flex items-center justify-between text-xs mb-1.5">
                        <span className="text-slate-400">İlerleme</span>
                        <span className={`font-bold ${ilerleme === 100 ? "text-emerald-400" : "text-indigo-400"}`}>
                          {tamamlanan}/{modul.lessons.length} · %{ilerleme}
                        </span>
                      </div>
                      <div className="h-2 bg-slate-900 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-500 ${
                            ilerleme === 100
                              ? "bg-gradient-to-r from-emerald-500 to-emerald-400"
                              : "bg-gradient-to-r from-indigo-500 to-cyan-400"
                          }`}
                          style={{ width: `${ilerleme}%` }}
                        />
                      </div>
                    </div>
                  )}

                  <div className="space-y-1.5 mb-5">
                    {modul.lessons.slice(0, 2).map((ders) => (
                      <div key={ders.id} className="flex items-center gap-2 text-sm text-slate-400">
                        <span className="w-1 h-1 bg-indigo-400 rounded-full flex-shrink-0" />
                        <span className="line-clamp-1">{ders.title}</span>
                      </div>
                    ))}
                    {modul.lessons.length > 2 && (
                      <div className="text-xs text-indigo-400 pl-3 font-medium">+ {modul.lessons.length - 2} ders daha</div>
                    )}
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-700/70">
                    <div className="flex items-baseline gap-1.5 text-sm">
                      <span className="text-lg font-bold text-indigo-400">{toplamSoruSayisi}</span>
                      <span className="text-slate-400">soru</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 group-hover:text-indigo-400 transition-colors">
                      <span className="hidden group-hover:inline font-medium">Başla</span>
                      <svg className="w-5 h-5 text-indigo-400 group-hover:text-indigo-300 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
          {filtrelenmisModuller.length === 0 && (
            <div className="text-center py-16 bg-slate-800 rounded-2xl border border-slate-700 shadow-xl shadow-indigo-900/30">
              <div className="text-5xl mb-4">🔍</div>
              <p className="text-slate-300 text-lg mb-2">Sonuç bulunamadı</p>
            </div>
          )}
        </div>
      </section>

      {/* SINAVLAR */}
      <section id="sinavlar" className="py-24 relative">
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-500/10 text-indigo-300 rounded-full text-xs font-bold tracking-wider uppercase mb-4 border border-indigo-400/30">
              🎓 Sınav Simülasyonları
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              Tüm SPL Sınavları Tek Platformda
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Gerçek sınav formatında, süre sayacıyla tam simülasyon. Her sınav farklı soru sırası.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SINAVLAR.map((sinav, idx) => {
              const renkler: Record<string, { badge: string; dot: string; hover: string }> = {
                blue:    { badge: "bg-indigo-500/20 text-indigo-300 border-indigo-400/40",    dot: "bg-indigo-400",    hover: "hover:border-indigo-400/60" },
                cyan:    { badge: "bg-cyan-500/20 text-cyan-300 border-cyan-400/40",    dot: "bg-cyan-400",    hover: "hover:border-cyan-400/60" },
                indigo:  { badge: "bg-indigo-500/20 text-indigo-300 border-indigo-400/40", dot: "bg-indigo-400", hover: "hover:border-indigo-400/60" },
                purple:  { badge: "bg-indigo-500/20 text-indigo-300 border-indigo-400/40", dot: "bg-indigo-400", hover: "hover:border-indigo-400/60" },
                emerald: { badge: "bg-emerald-500/20 text-emerald-300 border-emerald-400/40", dot: "bg-emerald-400", hover: "hover:border-emerald-400/60" },
                amber:   { badge: "bg-amber-500/20 text-amber-300 border-amber-400/40",  dot: "bg-amber-400",  hover: "hover:border-amber-400/60" },
                orange:  { badge: "bg-orange-500/20 text-orange-300 border-orange-400/40", dot: "bg-orange-400", hover: "hover:border-orange-400/60" },
                rose:    { badge: "bg-rose-500/20 text-rose-300 border-rose-400/40",    dot: "bg-rose-400",    hover: "hover:border-rose-400/60" },
              };
              const r = renkler[sinav.renk] ?? renkler.blue;
              return (
                <Link
                  key={sinav.kod}
                  href={sinav.href}
                  className={`animate-card-stagger group bg-slate-800 border border-slate-700 ${r.hover} rounded-2xl p-5 transition-all duration-200 hover:shadow-xl hover:shadow-indigo-900/40 hover:-translate-y-1 hover:scale-[1.01] flex flex-col`}
                  style={{ "--stagger-delay": `${idx * 50}ms` } as React.CSSProperties}
                >
                  {/* Üst: kod badge + aktif gösterge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-2.5 py-1 rounded-lg text-xs font-bold border ${r.badge}`}>
                      {sinav.kod}
                    </span>
                    <span className={`w-2 h-2 rounded-full ${r.dot} shadow-lg`} />
                  </div>
                  {/* Sınav adı */}
                  <h3 className="font-bold text-white text-base leading-snug mb-2 group-hover:text-indigo-200 transition">
                    {sinav.ad}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4 flex-1">{sinav.aciklama}</p>
                  {/* Alt: bilgi + ok */}
                  <div className="flex items-center justify-between pt-3 border-t border-slate-700/60">
                    <div className="flex items-center gap-3 text-xs text-slate-400">
                      <span className="font-bold text-white">{sinav.soruSayisi}</span> soru
                      <span>·</span>
                      <span className="font-bold text-white">{sinav.sureDakika}</span> dk
                    </div>
                    <span className="text-indigo-400 group-hover:translate-x-1 transition-transform text-sm font-bold">→</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* YORUMLAR */}
      <section id="yorumlar" className="py-24 relative">
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-500/10 text-indigo-300 rounded-full text-xs font-bold tracking-wider uppercase mb-4 border border-indigo-400/30">
              Kullanıcı Yorumları
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Sınavları Geçenler Ne Diyor?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="bg-slate-800 rounded-2xl p-6 border border-slate-700 hover:border-indigo-500/40 shadow-xl shadow-indigo-900/30 hover:shadow-indigo-500/20 transition-all duration-300">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-300 leading-relaxed mb-6 text-[15px]">"{t.yorum}"</p>
                <div className="flex items-center justify-between pt-4 border-t border-slate-700">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-full flex items-center justify-center text-white font-semibold">{t.isim.charAt(0)}</div>
                    <div>
                      <div className="font-semibold text-white text-sm">{t.isim}</div>
                      <div className="text-xs text-slate-400">{t.rol}</div>
                    </div>
                  </div>
                  <span className="px-2 py-1 bg-indigo-500/10 text-indigo-300 rounded-md text-xs font-semibold border border-indigo-400/30">{t.sinav}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-700/50 text-slate-400 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Marka */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-xl flex items-center justify-center text-white font-bold text-sm">SPK</div>
                <div>
                  <div className="font-bold text-white text-lg">SPK Akademi</div>
                  <div className="text-[11px] text-indigo-300 tracking-wider uppercase">Lisanslama Platformu</div>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-slate-400">Türkiye'nin en kapsamlı SPK Sermaye Piyasası Lisanslama hazırlık platformu.</p>
            </div>

            {/* Platform */}
            <div>
              <div className="font-semibold text-white mb-4 text-sm tracking-wider uppercase">Platform</div>
              <ul className="space-y-2 text-sm">
                <li><Link href="/dashboard" className="hover:text-indigo-400 transition">Çalışma Paneli</Link></li>
                <li><Link href="/sinav" className="hover:text-indigo-400 transition">Hızlı Pratik</Link></li>
                <li><Link href="/favoriler" className="hover:text-indigo-400 transition">Favoriler</Link></li>
                <li><Link href="/istatistikler" className="hover:text-indigo-400 transition">İstatistikler</Link></li>
              </ul>
            </div>

            {/* Sınavlar */}
            <div>
              <div className="font-semibold text-white mb-4 text-sm tracking-wider uppercase">Sınavlar</div>
              <ul className="space-y-2 text-sm">
                {SINAV_MENUSU.map((sinav) => (
                  <li key={sinav.href}>
                    <Link href={sinav.href} className="flex items-center gap-2 text-indigo-300 hover:text-indigo-200 font-medium transition">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                      {sinav.ad}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sayılar */}
            <div>
              <div className="font-semibold text-white mb-4 text-sm tracking-wider uppercase">Sayılar</div>
              <ul className="space-y-2 text-sm">
                <li>{TOPLAM_MODUL} Modül</li>
                <li>{TOPLAM_DERS} Ders</li>
                <li>{TOPLAM_SORU} Soru</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-700/50 text-center text-sm">© 2026 SPK Akademi · Tüm hakları saklıdır</div>
        </div>
      </footer>
    </div>
  );
}