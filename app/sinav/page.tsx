"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { modules } from "../index";
import type { Question } from "../mevzuat";
import { sinavSonucuKaydet, type SinavSonuc } from "../lib/storage";
import SharedNavbar from "../_components/SharedNavbar";
import SharedFooter from "../_components/SharedFooter";

/* ─── Tam sınav tanımları (dedicated pages) ─── */
const TAM_SINAVLAR = [
  {
    kod: "D1", ad: "Düzey 1 SPL Sınavı", href: "/sinav/duzey1",
    soruSayisi: 100, sureDakika: 150,
    aciklama: "Dar kapsamlı mevzuat, piyasalar, finansal analiz, vergi",
    renk: "from-indigo-500 to-indigo-700",
  },
  {
    kod: "D2", ad: "Düzey 2 SPL Sınavı", href: "/sinav/duzey2",
    soruSayisi: 100, sureDakika: 150,
    aciklama: "Geniş kapsamlı mevzuat, muhasebe, ekonomi, portföy",
    renk: "from-indigo-500 to-indigo-700",
  },
  {
    kod: "D3", ad: "Düzey 3 SPL Sınavı", href: "/sinav/duzey3",
    soruSayisi: 100, sureDakika: 150,
    aciklama: "Tam yetki: türev, risk yönetimi, ileri portföy teorisi",
    renk: "from-indigo-500 to-indigo-700",
  },
  {
    kod: "T", ad: "Türev Araçlar Sınavı", href: "/sinav/turev",
    soruSayisi: 100, sureDakika: 150,
    aciklama: "Vadeli işlem, opsiyon, swap, VIOP mevzuatı",
    renk: "from-indigo-500 to-indigo-700",
  },
  {
    kod: "KY", ad: "Kurumsal Yönetim Sınavı", href: "/sinav/ky",
    soruSayisi: 100, sureDakika: 150,
    aciklama: "OECD ilkeleri, risk yönetimi, takas, derecelendirme",
    renk: "from-emerald-500 to-emerald-700",
  },
  {
    kod: "KD", ad: "Kredi Derecelendirme Sınavı", href: "/sinav/kd",
    soruSayisi: 100, sureDakika: 150,
    aciklama: "Rating metodolojisi, sektör analizi, kredi riski",
    renk: "from-teal-500 to-teal-700",
  },
  {
    kod: "GD", ad: "Gayrimenkul Değerleme Sınavı", href: "/sinav/gd",
    soruSayisi: 75, sureDakika: 120,
    aciklama: "Taşınmaz değerleme, imar mevzuatı, standartlar",
    renk: "from-amber-500 to-amber-700",
  },
  {
    kod: "BS", ad: "Bilgi Sistemleri Denetim Sınavı", href: "/sinav/bs",
    soruSayisi: 100, sureDakika: 150,
    aciklama: "BT denetimi, COBIT, ISO 27001, KVKK, siber güvenlik",
    renk: "from-rose-500 to-rose-700",
  },
];

/* ─── Hızlı pratik tanımları (aynı sayfa, kısa sınav) ─── */
const SINAV_TANIMLARI = [
  { kod: "D1", ad: "Düzey 1", soruSayisi: 20, sureDakika: 30, pdfler: ["1001", "1003", "1005", "1012"] },
  { kod: "D2", ad: "Düzey 2", soruSayisi: 25, sureDakika: 40, pdfler: ["1002", "1003", "1004", "1005", "1006", "1007", "1010", "1012", "1016"] },
  { kod: "D3", ad: "Düzey 3", soruSayisi: 30, sureDakika: 50, pdfler: ["1002", "1003", "1004", "1005", "1006", "1007", "1008", "1009", "1010", "1012", "1013", "1016"] },
  { kod: "T", ad: "Türev Araçlar", soruSayisi: 25, sureDakika: 40, pdfler: ["1003", "1004", "1005", "1006", "1009", "1011", "1013"] },
  { kod: "KY", ad: "Kurumsal Yönetim", soruSayisi: 20, sureDakika: 30, pdfler: ["1009", "1010", "1016", "1018"] },
  { kod: "KD", ad: "Kredi Derecelendirme", soruSayisi: 20, sureDakika: 30, pdfler: ["1009", "1010", "1014", "1016", "1017"] },
  { kod: "GD", ad: "Gayrimenkul Değerleme", soruSayisi: 15, sureDakika: 25, pdfler: ["1014", "1015", "1019"] },
  { kod: "BS", ad: "Bilgi Sistemleri Denetim", soruSayisi: 20, sureDakika: 30, pdfler: ["1020", "1021", "1022", "1023"] },
];

type SinavSoru = Question & { modulId: string; dersId: string };

function karistir<T>(arr: T[]): T[] {
  const sonuc = [...arr];
  for (let i = sonuc.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [sonuc[i], sonuc[j]] = [sonuc[j], sonuc[i]];
  }
  return sonuc;
}

function sinavSorulariniHazirla(sinavKodu: string, soruSayisi: number): SinavSoru[] {
  const tanim = SINAV_TANIMLARI.find((s) => s.kod === sinavKodu);
  if (!tanim) return [];
  const ilgiliModuller = modules.filter((m) =>
    tanim.pdfler.some((pdf) => m.id.includes(pdf) || (pdf === "1001" && m.id === "m1") || (pdf === "1002" && m.id === "m1002"))
  );
  const tumSorular: SinavSoru[] = [];
  ilgiliModuller.forEach((modul) => {
    modul.lessons.forEach((ders) => {
      ders.questions.forEach((soru) => {
        tumSorular.push({ ...soru, modulId: modul.id, dersId: ders.id });
      });
    });
  });
  return karistir(tumSorular).slice(0, soruSayisi);
}

export default function SinavPage() {
  const [asama, setAsama] = useState<"secim" | "sinav" | "sonuc">("secim");
  const [secilenSinav, setSecilenSinav] = useState<string | null>(null);
  const [sorular, setSorular] = useState<SinavSoru[]>([]);
  const [aktifSoru, setAktifSoru] = useState(0);
  const [cevaplar, setCevaplar] = useState<Record<number, string>>({});
  const [kalanSure, setKalanSure] = useState(0);
  const [baslangic, setBaslangic] = useState(0);
  const [sonuc, setSonuc] = useState<SinavSonuc | null>(null);
  const [gosterCozumler, setGosterCozumler] = useState(false);

  // Süre sayacı
  useEffect(() => {
    if (asama !== "sinav" || kalanSure <= 0) return;
    const interval = setInterval(() => {
      setKalanSure((s) => {
        if (s <= 1) { bitirSinav(); return 0; }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [asama, kalanSure]);

  function baslat(kod: string) {
    const tanim = SINAV_TANIMLARI.find((s) => s.kod === kod);
    if (!tanim) return;
    const hazir = sinavSorulariniHazirla(kod, tanim.soruSayisi);
    if (hazir.length === 0) { alert("Bu sınav için yeterli soru bulunamadı."); return; }
    setSecilenSinav(kod);
    setSorular(hazir);
    setAktifSoru(0);
    setCevaplar({});
    setKalanSure(tanim.sureDakika * 60);
    setBaslangic(Date.now());
    setAsama("sinav");
  }

  function cevapla(soruIdx: number, opt: string) {
    setCevaplar({ ...cevaplar, [soruIdx]: opt });
  }

  function bitirSinav() {
    if (!secilenSinav) return;
    const tanim = SINAV_TANIMLARI.find((s) => s.kod === secilenSinav);
    if (!tanim) return;
    let dogru = 0, yanlis = 0, bos = 0;
    sorular.forEach((soru, idx) => {
      const cevap = cevaplar[idx];
      if (!cevap) bos++;
      else if (cevap === soru.correct) dogru++;
      else yanlis++;
    });
    const puan = Math.round((dogru / sorular.length) * 100 * 100) / 100;
    const sureSaniye = Math.round((Date.now() - baslangic) / 1000);
    const yeniSonuc = sinavSonucuKaydet({
      sinavKodu: secilenSinav,
      sinavAdi: tanim.ad + " (Hızlı)",
      toplamSoru: sorular.length,
      dogruSayisi: dogru,
      yanlisSayisi: yanlis,
      bosSayisi: bos,
      puan,
      sureSaniye,
    });
    setSonuc(yeniSonuc);
    setGosterCozumler(false);
    setAsama("sonuc");
  }

  function yenidenBaslat() {
    setAsama("secim");
    setSecilenSinav(null);
    setSorular([]);
    setAktifSoru(0);
    setCevaplar({});
    setSonuc(null);
  }

  // ═══════════════════════════════════════════
  //  SEÇİM EKRANI
  // ═══════════════════════════════════════════
  if (asama === "secim") {
    return (
      <div className="min-h-screen bg-[var(--bg-base)] flex flex-col animate-page-in">
        <div className="fixed top-1/4 right-0 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
        <SharedNavbar subtitle="Sınav Simülasyonu" activeHref="/sinav" />

        <div className="relative flex-1 max-w-6xl mx-auto px-6 py-12 w-full">

          {/* ─── TAM SINAV ─── */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-500/10 text-indigo-400 rounded-full text-xs font-bold tracking-wider uppercase mb-4 border border-indigo-400/30">
              🎓 Gerçek Sınav Formatı
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4 tracking-tight">
              Hangi Sınava Hazırlanıyorsun?
            </h1>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Tam sınav formatında 100 soru ve gerçek süre ile kendini sına.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {TAM_SINAVLAR.map((sinav, idx) => (
              <Link
                key={sinav.href}
                href={sinav.href}
                className="animate-card-stagger group relative bg-[var(--bg-surface-2)]/80 border border-[var(--border-base)] hover:border-indigo-500/50 rounded-2xl p-6 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all hover:-translate-y-1.5 hover:scale-[1.01]"
                style={{ "--stagger-delay": `${idx * 50}ms` } as React.CSSProperties}
              >
                {/* Kod badge */}
                <div className={`w-12 h-12 bg-gradient-to-br ${sinav.renk} rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-lg mb-4`}>
                  {sinav.kod}
                </div>
                <h3 className="font-bold text-[var(--text-primary)] text-base leading-tight mb-2 group-hover:text-indigo-400 transition">
                  {sinav.ad}
                </h3>
                <p className="text-xs text-[var(--text-muted)] mb-4 leading-relaxed min-h-[40px]">{sinav.aciklama}</p>
                <div className="flex items-center justify-between pt-4 border-t border-[var(--border-base)]">
                  <div className="flex items-center gap-3 text-xs text-[var(--text-muted)]">
                    <span className="font-bold text-[var(--text-primary)]">{sinav.soruSayisi} soru</span>
                    <span>·</span>
                    <span>{sinav.sureDakika} dk</span>
                  </div>
                  <svg className="w-4 h-4 text-indigo-400 group-hover:text-indigo-300 group-hover:translate-x-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>

          {/* ─── HIZLI PRATİK ─── */}
          <div className="border-t border-[var(--border-base)] pt-12">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[var(--bg-surface-3)]/50 text-[var(--text-secondary)] rounded-full text-xs font-bold tracking-wider uppercase mb-3 border border-[var(--border-base)]">
                ⚡ Hızlı Pratik
              </div>
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-2">Kısa Sınav Denemeleri</h2>
              <p className="text-[var(--text-muted)]">Vaktin az mı? 15–30 dakikada hızlı pratik yap.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              {SINAV_TANIMLARI.map((sinav, idx) => (
                <button
                  key={sinav.kod}
                  onClick={() => baslat(sinav.kod)}
                  className="animate-card-stagger group text-left bg-[var(--bg-surface-2)]/60 border border-[var(--border-base)] hover:border-indigo-400/40 rounded-xl p-4 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all hover:-translate-y-1 hover:scale-[1.01]"
                  style={{ "--stagger-delay": `${idx * 40}ms` } as React.CSSProperties}
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-bold text-base text-[var(--text-secondary)] group-hover:text-indigo-400 transition">{sinav.ad}</h3>
                    <span className="text-lg">⏱️</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-[var(--text-muted)]">
                    <span className="font-bold text-[var(--text-secondary)]">{sinav.soruSayisi} soru</span>
                    <span>·</span>
                    <span>{sinav.sureDakika} dk</span>
                  </div>
                  <div className="mt-3 text-xs text-indigo-400 font-semibold group-hover:translate-x-0.5 transition">Başla →</div>
                </button>
              ))}
            </div>
          </div>
        </div>
        <SharedFooter />
      </div>
    );
  }

  // ═══════════════════════════════════════════
  //  SINAV EKRANI
  // ═══════════════════════════════════════════
  if (asama === "sinav" && sorular.length > 0) {
    const soru = sorular[aktifSoru];
    const cevaplananSayi = Object.keys(cevaplar).length;
    const dakika = Math.floor(kalanSure / 60);
    const saniye = kalanSure % 60;
    const sureAcil = kalanSure < 300;

    return (
      <div className="min-h-screen bg-[var(--bg-base)]">
        <nav className="sticky top-0 z-50 bg-[var(--bg-base)]/95 backdrop-blur-xl border-b border-[var(--border-base)]">
          <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-xl flex items-center justify-center text-white font-bold text-sm">SPK</div>
              <div>
                <div className="font-bold text-[var(--text-primary)] text-sm">{SINAV_TANIMLARI.find((s) => s.kod === secilenSinav)?.ad} · Hızlı Pratik</div>
                <div className="text-xs text-indigo-400">Soru {aktifSoru + 1} / {sorular.length}</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <div className="text-xs text-[var(--text-muted)] uppercase tracking-wider">Cevaplanan</div>
                <div className="text-sm font-bold text-[var(--text-primary)]">{cevaplananSayi} / {sorular.length}</div>
              </div>
              <div className={`px-4 py-2 rounded-lg font-bold text-lg border ${
                sureAcil
                  ? "bg-red-500/20 text-red-400 border-red-500/50 animate-pulse"
                  : "bg-indigo-500/20 text-indigo-400 border-indigo-500/50"
              }`}>
                ⏱️ {String(dakika).padStart(2, "0")}:{String(saniye).padStart(2, "0")}
              </div>
              <button
                onClick={() => { if (confirm("Sınavı bitirmek istediğine emin misin?")) bitirSinav(); }}
                className="bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30 px-4 py-2 rounded-lg text-sm font-semibold transition"
              >
                Bitir
              </button>
            </div>
          </div>
          <div className="h-1 bg-[var(--bg-surface-2)]">
            <div className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400 transition-all" style={{ width: `${((aktifSoru + 1) / sorular.length) * 100}%` }} />
          </div>
        </nav>

        <div className="relative max-w-3xl mx-auto px-6 py-12">
          <div className="bg-[var(--bg-surface-2)] rounded-2xl p-8 border border-[var(--border-base)] shadow-[var(--shadow-card)] mb-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-indigo-500/40">
                {aktifSoru + 1}
              </div>
              <div className="text-xs text-indigo-400 uppercase tracking-wider font-semibold">Soru {aktifSoru + 1} / {sorular.length}</div>
            </div>
            <p className="text-[var(--text-primary)] text-lg font-medium leading-relaxed mb-6">{soru.text}</p>
            <div className="space-y-2">
              {soru.options.map((opt) => {
                const buSecili = cevaplar[aktifSoru] === opt.id;
                return (
                  <button
                    key={opt.id}
                    onClick={() => cevapla(aktifSoru, opt.id)}
                    className={`w-full text-left p-4 rounded-xl border-2 transition flex items-start gap-3 ${
                      buSecili
                        ? "bg-indigo-500/10 border-indigo-400/50 text-indigo-300"
                        : "bg-[var(--bg-surface)]/50 border-[var(--border-base)] hover:border-indigo-400/50 hover:bg-indigo-500/5 text-[var(--text-secondary)]"
                    }`}
                  >
                    <div className={`w-7 h-7 rounded-md flex items-center justify-center font-bold text-sm flex-shrink-0 ${
                      buSecili ? "bg-gradient-to-br from-indigo-500 to-indigo-700 text-white shadow-lg shadow-indigo-500/40" : "bg-[var(--bg-surface-3)] text-[var(--text-secondary)]"
                    }`}>
                      {opt.id}
                    </div>
                    <span className="leading-relaxed pt-0.5 flex-1">{opt.text}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex items-center justify-between gap-4">
            <button
              onClick={() => setAktifSoru(Math.max(0, aktifSoru - 1))}
              disabled={aktifSoru === 0}
              className="bg-[var(--bg-surface-2)] hover:bg-[var(--bg-surface-3)] disabled:opacity-40 disabled:cursor-not-allowed text-[var(--text-primary)] px-5 py-3 rounded-lg font-semibold border border-[var(--border-base)] transition"
            >← Önceki</button>

            <div className="flex items-center gap-1.5 flex-wrap justify-center">
              {sorular.map((_, idx) => {
                const cevap = cevaplar[idx];
                return (
                  <button key={idx} onClick={() => setAktifSoru(idx)}
                    className={`w-8 h-8 rounded-md text-xs font-bold transition ${
                      aktifSoru === idx
                        ? "bg-gradient-to-br from-indigo-500 to-indigo-700 text-white shadow-lg shadow-indigo-500/40"
                        : cevap
                        ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                        : "bg-[var(--bg-surface-2)] text-[var(--text-muted)] border border-[var(--border-base)] hover:bg-[var(--bg-surface-3)]"
                    }`}
                  >{idx + 1}</button>
                );
              })}
            </div>

            <button
              onClick={() => {
                if (aktifSoru === sorular.length - 1) {
                  if (confirm("Sınavı bitirmek istediğine emin misin?")) bitirSinav();
                } else {
                  setAktifSoru(Math.min(sorular.length - 1, aktifSoru + 1));
                }
              }}
              className="bg-gradient-to-br from-indigo-500 to-indigo-700 hover:from-indigo-600 hover:to-indigo-800 text-white px-5 py-3 rounded-lg font-semibold shadow-lg shadow-indigo-500/40 transition"
            >
              {aktifSoru === sorular.length - 1 ? "Bitir 🏁" : "Sonraki →"}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════
  //  SONUÇ EKRANI
  // ═══════════════════════════════════════════
  if (asama === "sonuc" && sonuc) {
    const gecti = sonuc.puan >= 60;
    const dakika = Math.floor(sonuc.sureSaniye / 60);
    const saniye = sonuc.sureSaniye % 60;
    const tanim = SINAV_TANIMLARI.find((s) => s.kod === secilenSinav);

    return (
      <div className="min-h-screen bg-[var(--bg-base)] flex flex-col">
        <SharedNavbar subtitle="Sınav Simülasyonu" activeHref="/sinav" />
        <div className="relative flex-1 max-w-3xl mx-auto px-6 py-12 w-full">

          {/* Sonuç kartı */}
          <div className={`relative bg-[var(--bg-surface-2)] rounded-3xl p-10 border-2 ${gecti ? "border-emerald-500/50" : "border-amber-500/50"} shadow-2xl ${gecti ? "shadow-emerald-500/20" : "shadow-amber-500/20"} text-center mb-8`}>
            <div className="text-7xl mb-4">{gecti ? "🎉" : "💪"}</div>
            <h1 className="text-4xl font-bold text-[var(--text-primary)] mb-2">{gecti ? "Tebrikler!" : "Daha İyisini Yapabilirsin!"}</h1>
            <p className="text-[var(--text-secondary)] mb-8">{sonuc.sinavAdi} · {dakika} dk {saniye} sn</p>

            <div className={`text-7xl font-bold mb-2 ${gecti ? "text-emerald-400" : "text-amber-400"}`}>
              %{sonuc.puan.toFixed(1)}
            </div>
            <div className="text-sm text-[var(--text-muted)] uppercase tracking-wider mb-8">Başarı Puanı</div>

            <div className="grid grid-cols-3 gap-4">
              <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4">
                <div className="text-3xl font-bold text-emerald-400">{sonuc.dogruSayisi}</div>
                <div className="text-xs text-emerald-400 mt-1 uppercase tracking-wider">Doğru</div>
              </div>
              <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4">
                <div className="text-3xl font-bold text-red-400">{sonuc.yanlisSayisi}</div>
                <div className="text-xs text-red-400 mt-1 uppercase tracking-wider">Yanlış</div>
              </div>
              <div className="bg-[var(--bg-surface-3)]/50 border border-[var(--border-base)] rounded-xl p-4">
                <div className="text-3xl font-bold text-[var(--text-secondary)]">{sonuc.bosSayisi}</div>
                <div className="text-xs text-[var(--text-muted)] mt-1 uppercase tracking-wider">Boş</div>
              </div>
            </div>
          </div>

          {/* Soru çözümleri */}
          <div className="bg-[var(--bg-surface-2)] border border-[var(--border-base)] rounded-2xl overflow-hidden shadow-[var(--shadow-card)] mb-6">
            <button
              onClick={() => setGosterCozumler((g) => !g)}
              className="w-full p-5 flex items-center justify-between text-left hover:bg-[var(--bg-surface-3)]/40 transition"
            >
              <h2 className="font-bold text-[var(--text-primary)] text-lg flex items-center gap-2">
                <span className="w-8 h-8 bg-indigo-500/20 rounded-lg flex items-center justify-center text-indigo-400">🔍</span>
                Soru Çözümleri ve Açıklamalar
              </h2>
              <span className={`text-indigo-400 transition-transform duration-300 ${gosterCozumler ? "rotate-180" : ""}`}>▼</span>
            </button>
            {gosterCozumler && (
              <div className="border-t border-[var(--border-base)] divide-y divide-[var(--border-base)]">
                {sorular.map((soru, idx) => {
                  const verilen = cevaplar[idx];
                  const dogru = verilen === soru.correct;
                  return (
                    <div key={idx} className={`p-5 ${!dogru ? "bg-red-500/5" : ""}`}>
                      <div className="flex items-start gap-3 mb-3">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm flex-shrink-0 ${
                          dogru ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30" : "bg-red-500/20 text-red-400 border border-red-500/30"
                        }`}>{dogru ? "✓" : "✗"}</div>
                        <p className="text-[var(--text-primary)] text-sm font-medium leading-relaxed">{soru.text}</p>
                      </div>
                      <div className="grid grid-cols-2 gap-2 mb-3 ml-11">
                        {soru.options.map((opt) => (
                          <div key={opt.id} className={`flex items-start gap-2 p-2.5 rounded-lg border text-xs ${
                            opt.id === soru.correct
                              ? "bg-emerald-500/10 border-emerald-500/40 text-emerald-400"
                              : opt.id === verilen && !dogru
                              ? "bg-red-500/10 border-red-500/40 text-red-400"
                              : "border-[var(--border-base)] text-[var(--text-muted)]"
                          }`}>
                            <span className="font-bold flex-shrink-0">{opt.id}.</span>
                            <span className="leading-relaxed">{opt.text}</span>
                          </div>
                        ))}
                      </div>
                      <div className="ml-11 bg-[var(--bg-surface)]/50 border border-[var(--border-base)] rounded-xl p-3 text-xs text-[var(--text-secondary)] leading-relaxed">
                        <span className="font-bold text-indigo-400 mr-1">Açıklama:</span>{soru.explanation}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Tam sınav önerisi */}
          {tanim && (
            <div className="bg-indigo-500/8 border border-indigo-500/25 rounded-2xl p-5 mb-6 flex items-center gap-4">
              <div className="text-3xl">🎓</div>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-[var(--text-primary)] mb-1">Gerçek sınav formatını denedin mi?</div>
                <div className="text-sm text-[var(--text-muted)]">100 soru · 150 dakika · Tam sınav simülasyonu</div>
              </div>
              <Link
                href={TAM_SINAVLAR.find((s) => s.kod === secilenSinav)?.href ?? "/sinav"}
                className="flex-shrink-0 bg-gradient-to-br from-indigo-500 to-indigo-700 hover:from-indigo-600 hover:to-indigo-800 text-white px-4 py-2.5 rounded-xl text-sm font-semibold shadow-lg shadow-indigo-500/30 transition whitespace-nowrap"
              >
                Tam Sınava Gir →
              </Link>
            </div>
          )}

          {/* Aksiyonlar */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={yenidenBaslat}
              className="flex-1 bg-gradient-to-br from-indigo-500 to-indigo-700 hover:from-indigo-600 hover:to-indigo-800 text-white px-6 py-4 rounded-xl font-semibold shadow-lg shadow-indigo-500/40 transition flex items-center justify-center gap-2"
            >🔄 Yeni Sınav</button>
            <Link href="/istatistikler" className="flex-1 bg-[var(--bg-surface-2)] hover:bg-[var(--bg-surface-3)] text-[var(--text-primary)] px-6 py-4 rounded-xl font-semibold border border-[var(--border-base)] transition flex items-center justify-center gap-2">
              📊 İstatistikler
            </Link>
            <Link href="/dashboard" className="flex-1 bg-[var(--bg-surface-2)] hover:bg-[var(--bg-surface-3)] text-[var(--text-primary)] px-6 py-4 rounded-xl font-semibold border border-[var(--border-base)] transition flex items-center justify-center gap-2">
              📚 Çalışmaya Dön
            </Link>
          </div>
        </div>
        <SharedFooter />
      </div>
    );
  }

  return null;
}
