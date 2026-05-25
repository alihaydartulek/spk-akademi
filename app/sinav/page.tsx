"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { modules } from "../index";
import type { Question } from "../mevzuat";
import { sinavSonucuKaydet, type SinavSonuc } from "../lib/storage";
import SharedNavbar from "../_components/SharedNavbar";
import SharedFooter from "../_components/SharedFooter";

/* â”€â”€â”€ Tam sÄ±nav tanÄ±mlarÄ± (dedicated pages) â”€â”€â”€ */
const TAM_SINAVLAR = [
  {
    kod: "D1", ad: "DÃ¼zey 1 SPL SÄ±navÄ±", href: "/sinav/duzey1",
    soruSayisi: 100, sureDakika: 150,
    aciklama: "Dar kapsamlÄ± mevzuat, piyasalar, finansal analiz, vergi",
    renk: "from-violet-500 to-violet-700",
  },
  {
    kod: "D2", ad: "DÃ¼zey 2 SPL SÄ±navÄ±", href: "/sinav/duzey2",
    soruSayisi: 100, sureDakika: 150,
    aciklama: "GeniÅŸ kapsamlÄ± mevzuat, muhasebe, ekonomi, portfÃ¶y",
    renk: "from-indigo-500 to-indigo-700",
  },
  {
    kod: "D3", ad: "DÃ¼zey 3 SPL SÄ±navÄ±", href: "/sinav/duzey3",
    soruSayisi: 100, sureDakika: 150,
    aciklama: "Tam yetki: tÃ¼rev, risk yÃ¶netimi, ileri portfÃ¶y teorisi",
    renk: "from-violet-500 to-violet-700",
  },
  {
    kod: "T", ad: "TÃ¼rev AraÃ§lar SÄ±navÄ±", href: "/sinav/turev",
    soruSayisi: 100, sureDakika: 150,
    aciklama: "Vadeli iÅŸlem, opsiyon, swap, VIOP mevzuatÄ±",
    renk: "from-purple-500 to-purple-700",
  },
  {
    kod: "KY", ad: "Kurumsal YÃ¶netim SÄ±navÄ±", href: "/sinav/ky",
    soruSayisi: 100, sureDakika: 150,
    aciklama: "OECD ilkeleri, risk yÃ¶netimi, takas, derecelendirme",
    renk: "from-emerald-500 to-emerald-700",
  },
  {
    kod: "KD", ad: "Kredi Derecelendirme SÄ±navÄ±", href: "/sinav/kd",
    soruSayisi: 100, sureDakika: 150,
    aciklama: "Rating metodolojisi, sektÃ¶r analizi, kredi riski",
    renk: "from-teal-500 to-teal-700",
  },
  {
    kod: "GD", ad: "Gayrimenkul DeÄŸerleme SÄ±navÄ±", href: "/sinav/gd",
    soruSayisi: 75, sureDakika: 120,
    aciklama: "TaÅŸÄ±nmaz deÄŸerleme, imar mevzuatÄ±, standartlar",
    renk: "from-amber-500 to-amber-700",
  },
  {
    kod: "BS", ad: "Bilgi Sistemleri Denetim SÄ±navÄ±", href: "/sinav/bs",
    soruSayisi: 100, sureDakika: 150,
    aciklama: "BT denetimi, COBIT, ISO 27001, KVKK, siber gÃ¼venlik",
    renk: "from-rose-500 to-rose-700",
  },
];

/* â”€â”€â”€ HÄ±zlÄ± pratik tanÄ±mlarÄ± (aynÄ± sayfa, kÄ±sa sÄ±nav) â”€â”€â”€ */
const SINAV_TANIMLARI = [
  { kod: "D1", ad: "DÃ¼zey 1", soruSayisi: 20, sureDakika: 30, pdfler: ["1001", "1003", "1005", "1012"] },
  { kod: "D2", ad: "DÃ¼zey 2", soruSayisi: 25, sureDakika: 40, pdfler: ["1002", "1003", "1004", "1005", "1006", "1007", "1010", "1012", "1016"] },
  { kod: "D3", ad: "DÃ¼zey 3", soruSayisi: 30, sureDakika: 50, pdfler: ["1002", "1003", "1004", "1005", "1006", "1007", "1008", "1009", "1010", "1012", "1013", "1016"] },
  { kod: "T", ad: "TÃ¼rev AraÃ§lar", soruSayisi: 25, sureDakika: 40, pdfler: ["1003", "1004", "1005", "1006", "1009", "1011", "1013"] },
  { kod: "KY", ad: "Kurumsal YÃ¶netim", soruSayisi: 20, sureDakika: 30, pdfler: ["1009", "1010", "1016", "1018"] },
  { kod: "KD", ad: "Kredi Derecelendirme", soruSayisi: 20, sureDakika: 30, pdfler: ["1009", "1010", "1014", "1016", "1017"] },
  { kod: "GD", ad: "Gayrimenkul DeÄŸerleme", soruSayisi: 15, sureDakika: 25, pdfler: ["1014", "1015", "1019"] },
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

  // SÃ¼re sayacÄ±
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
    if (hazir.length === 0) { alert("Bu sÄ±nav iÃ§in yeterli soru bulunamadÄ±."); return; }
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
      sinavAdi: tanim.ad + " (HÄ±zlÄ±)",
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

  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  //  SEÃ‡Ä°M EKRANI
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  if (asama === "secim") {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-violet-950 to-slate-900 flex flex-col">
        <div className="fixed top-1/4 right-0 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
        <SharedNavbar subtitle="SÄ±nav SimÃ¼lasyonu" activeHref="/sinav" />

        <div className="relative flex-1 max-w-6xl mx-auto px-6 py-12 w-full">

          {/* â”€â”€â”€ TAM SINAV â”€â”€â”€ */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-violet-500/10 text-violet-300 rounded-full text-xs font-bold tracking-wider uppercase mb-4 border border-violet-400/30">
              ğŸ“ GerÃ§ek SÄ±nav FormatÄ±
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              Hangi SÄ±nava HazÄ±rlanÄ±yorsun?
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Tam sÄ±nav formatÄ±nda 100 soru ve gerÃ§ek sÃ¼re ile kendini sÄ±na.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {TAM_SINAVLAR.map((sinav) => (
              <Link
                key={sinav.href}
                href={sinav.href}
                className="group relative bg-slate-800/80 border border-slate-700 hover:border-violet-500/50 rounded-2xl p-6 shadow-xl shadow-violet-900/20 hover:shadow-2xl hover:shadow-violet-500/20 transition-all hover:-translate-y-1"
              >
                {/* Kod badge */}
                <div className={`w-12 h-12 bg-gradient-to-br ${sinav.renk} rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-lg mb-4`}>
                  {sinav.kod}
                </div>
                <h3 className="font-bold text-white text-base leading-tight mb-2 group-hover:text-violet-300 transition">
                  {sinav.ad}
                </h3>
                <p className="text-xs text-slate-400 mb-4 leading-relaxed min-h-[40px]">{sinav.aciklama}</p>
                <div className="flex items-center justify-between pt-4 border-t border-slate-700/60">
                  <div className="flex items-center gap-3 text-xs text-slate-400">
                    <span className="font-bold text-white">{sinav.soruSayisi} soru</span>
                    <span>Â·</span>
                    <span>{sinav.sureDakika} dk</span>
                  </div>
                  <svg className="w-4 h-4 text-violet-400 group-hover:text-violet-300 group-hover:translate-x-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>

          {/* â”€â”€â”€ HIZLI PRATÄ°K â”€â”€â”€ */}
          <div className="border-t border-slate-700/50 pt-12">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-slate-700/50 text-slate-300 rounded-full text-xs font-bold tracking-wider uppercase mb-3 border border-slate-600/50">
                âš¡ HÄ±zlÄ± Pratik
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">KÄ±sa SÄ±nav Denemeleri</h2>
              <p className="text-slate-400">Vaktin az mÄ±? 15â€“30 dakikada hÄ±zlÄ± pratik yap.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              {SINAV_TANIMLARI.map((sinav) => (
                <button
                  key={sinav.kod}
                  onClick={() => baslat(sinav.kod)}
                  className="group text-left bg-slate-800/60 border border-slate-700/60 hover:border-violet-400/40 rounded-xl p-4 shadow-md hover:shadow-xl hover:shadow-violet-500/10 transition-all hover:-translate-y-0.5"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-bold text-base text-slate-200 group-hover:text-violet-300 transition">{sinav.ad}</h3>
                    <span className="text-lg">â±ï¸</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-slate-400">
                    <span className="font-bold text-slate-300">{sinav.soruSayisi} soru</span>
                    <span>Â·</span>
                    <span>{sinav.sureDakika} dk</span>
                  </div>
                  <div className="mt-3 text-xs text-violet-400 font-semibold group-hover:translate-x-0.5 transition">BaÅŸla â†’</div>
                </button>
              ))}
            </div>
          </div>
        </div>
        <SharedFooter />
      </div>
    );
  }

  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  //  SINAV EKRANI
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  if (asama === "sinav" && sorular.length > 0) {
    const soru = sorular[aktifSoru];
    const cevaplananSayi = Object.keys(cevaplar).length;
    const dakika = Math.floor(kalanSure / 60);
    const saniye = kalanSure % 60;
    const sureAcil = kalanSure < 300;

    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-violet-950 to-slate-900">
        <nav className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-xl border-b border-slate-700/50">
          <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-violet-700 rounded-xl flex items-center justify-center text-white font-bold text-sm">SPK</div>
              <div>
                <div className="font-bold text-white text-sm">{SINAV_TANIMLARI.find((s) => s.kod === secilenSinav)?.ad} Â· HÄ±zlÄ± Pratik</div>
                <div className="text-xs text-violet-300">Soru {aktifSoru + 1} / {sorular.length}</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <div className="text-xs text-slate-400 uppercase tracking-wider">Cevaplanan</div>
                <div className="text-sm font-bold text-white">{cevaplananSayi} / {sorular.length}</div>
              </div>
              <div className={`px-4 py-2 rounded-lg font-bold text-lg border ${
                sureAcil
                  ? "bg-red-500/20 text-red-300 border-red-500/50 animate-pulse"
                  : "bg-violet-500/20 text-violet-300 border-violet-500/50"
              }`}>
                â±ï¸ {String(dakika).padStart(2, "0")}:{String(saniye).padStart(2, "0")}
              </div>
              <button
                onClick={() => { if (confirm("SÄ±navÄ± bitirmek istediÄŸine emin misin?")) bitirSinav(); }}
                className="bg-red-500/10 hover:bg-red-500/20 text-red-300 border border-red-500/30 px-4 py-2 rounded-lg text-sm font-semibold transition"
              >
                Bitir
              </button>
            </div>
          </div>
          <div className="h-1 bg-slate-800">
            <div className="h-full bg-gradient-to-r from-violet-500 to-purple-400 transition-all" style={{ width: `${((aktifSoru + 1) / sorular.length) * 100}%` }} />
          </div>
        </nav>

        <div className="relative max-w-3xl mx-auto px-6 py-12">
          <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 shadow-xl shadow-violet-900/30 mb-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-violet-700 rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-violet-500/40">
                {aktifSoru + 1}
              </div>
              <div className="text-xs text-violet-300 uppercase tracking-wider font-semibold">Soru {aktifSoru + 1} / {sorular.length}</div>
            </div>
            <p className="text-white text-lg font-medium leading-relaxed mb-6">{soru.text}</p>
            <div className="space-y-2">
              {soru.options.map((opt) => {
                const buSecili = cevaplar[aktifSoru] === opt.id;
                return (
                  <button
                    key={opt.id}
                    onClick={() => cevapla(aktifSoru, opt.id)}
                    className={`w-full text-left p-4 rounded-xl border-2 transition flex items-start gap-3 ${
                      buSecili
                        ? "bg-violet-500/10 border-violet-400/50 text-violet-100"
                        : "bg-slate-900/50 border-slate-700 hover:border-violet-400/50 hover:bg-violet-500/5 text-slate-300"
                    }`}
                  >
                    <div className={`w-7 h-7 rounded-md flex items-center justify-center font-bold text-sm flex-shrink-0 ${
                      buSecili ? "bg-gradient-to-br from-violet-500 to-violet-700 text-white shadow-lg shadow-violet-500/40" : "bg-slate-700 text-slate-300"
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
              className="bg-slate-800 hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed text-white px-5 py-3 rounded-lg font-semibold border border-slate-700 transition"
            >â† Ã–nceki</button>

            <div className="flex items-center gap-1.5 flex-wrap justify-center">
              {sorular.map((_, idx) => {
                const cevap = cevaplar[idx];
                return (
                  <button key={idx} onClick={() => setAktifSoru(idx)}
                    className={`w-8 h-8 rounded-md text-xs font-bold transition ${
                      aktifSoru === idx
                        ? "bg-gradient-to-br from-violet-500 to-violet-700 text-white shadow-lg shadow-violet-500/40"
                        : cevap
                        ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                        : "bg-slate-800 text-slate-400 border border-slate-700 hover:bg-slate-700"
                    }`}
                  >{idx + 1}</button>
                );
              })}
            </div>

            <button
              onClick={() => {
                if (aktifSoru === sorular.length - 1) {
                  if (confirm("SÄ±navÄ± bitirmek istediÄŸine emin misin?")) bitirSinav();
                } else {
                  setAktifSoru(Math.min(sorular.length - 1, aktifSoru + 1));
                }
              }}
              className="bg-gradient-to-br from-violet-500 to-violet-700 hover:from-violet-600 hover:to-violet-800 text-white px-5 py-3 rounded-lg font-semibold shadow-lg shadow-violet-500/40 transition"
            >
              {aktifSoru === sorular.length - 1 ? "Bitir ğŸ" : "Sonraki â†’"}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  //  SONUÃ‡ EKRANI
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  if (asama === "sonuc" && sonuc) {
    const gecti = sonuc.puan >= 60;
    const dakika = Math.floor(sonuc.sureSaniye / 60);
    const saniye = sonuc.sureSaniye % 60;
    const tanim = SINAV_TANIMLARI.find((s) => s.kod === secilenSinav);

    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-violet-950 to-slate-900 flex flex-col">
        <SharedNavbar subtitle="SÄ±nav SimÃ¼lasyonu" activeHref="/sinav" />
        <div className="relative flex-1 max-w-3xl mx-auto px-6 py-12 w-full">

          {/* SonuÃ§ kartÄ± */}
          <div className={`relative bg-slate-800 rounded-3xl p-10 border-2 ${gecti ? "border-emerald-500/50" : "border-amber-500/50"} shadow-2xl ${gecti ? "shadow-emerald-500/20" : "shadow-amber-500/20"} text-center mb-8`}>
            <div className="text-7xl mb-4">{gecti ? "ğŸ‰" : "ğŸ’ª"}</div>
            <h1 className="text-4xl font-bold text-white mb-2">{gecti ? "Tebrikler!" : "Daha Ä°yisini Yapabilirsin!"}</h1>
            <p className="text-slate-300 mb-8">{sonuc.sinavAdi} Â· {dakika} dk {saniye} sn</p>

            <div className={`text-7xl font-bold mb-2 ${gecti ? "text-emerald-400" : "text-amber-400"}`}>
              %{sonuc.puan.toFixed(1)}
            </div>
            <div className="text-sm text-slate-400 uppercase tracking-wider mb-8">BaÅŸarÄ± PuanÄ±</div>

            <div className="grid grid-cols-3 gap-4">
              <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4">
                <div className="text-3xl font-bold text-emerald-400">{sonuc.dogruSayisi}</div>
                <div className="text-xs text-emerald-300 mt-1 uppercase tracking-wider">DoÄŸru</div>
              </div>
              <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4">
                <div className="text-3xl font-bold text-red-400">{sonuc.yanlisSayisi}</div>
                <div className="text-xs text-red-300 mt-1 uppercase tracking-wider">YanlÄ±ÅŸ</div>
              </div>
              <div className="bg-slate-700/50 border border-slate-600 rounded-xl p-4">
                <div className="text-3xl font-bold text-slate-300">{sonuc.bosSayisi}</div>
                <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider">BoÅŸ</div>
              </div>
            </div>
          </div>

          {/* Soru Ã§Ã¶zÃ¼mleri */}
          <div className="bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden shadow-xl shadow-violet-900/20 mb-6">
            <button
              onClick={() => setGosterCozumler((g) => !g)}
              className="w-full p-5 flex items-center justify-between text-left hover:bg-slate-700/40 transition"
            >
              <h2 className="font-bold text-white text-lg flex items-center gap-2">
                <span className="w-8 h-8 bg-violet-500/20 rounded-lg flex items-center justify-center text-violet-400">ğŸ”</span>
                Soru Ã‡Ã¶zÃ¼mleri ve AÃ§Ä±klamalar
              </h2>
              <span className={`text-violet-400 transition-transform duration-300 ${gosterCozumler ? "rotate-180" : ""}`}>â–¼</span>
            </button>
            {gosterCozumler && (
              <div className="border-t border-slate-700 divide-y divide-slate-700/50">
                {sorular.map((soru, idx) => {
                  const verilen = cevaplar[idx];
                  const dogru = verilen === soru.correct;
                  return (
                    <div key={idx} className={`p-5 ${!dogru ? "bg-red-500/5" : ""}`}>
                      <div className="flex items-start gap-3 mb-3">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm flex-shrink-0 ${
                          dogru ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30" : "bg-red-500/20 text-red-400 border border-red-500/30"
                        }`}>{dogru ? "âœ“" : "âœ—"}</div>
                        <p className="text-white text-sm font-medium leading-relaxed">{soru.text}</p>
                      </div>
                      <div className="grid grid-cols-2 gap-2 mb-3 ml-11">
                        {soru.options.map((opt) => (
                          <div key={opt.id} className={`flex items-start gap-2 p-2.5 rounded-lg border text-xs ${
                            opt.id === soru.correct
                              ? "bg-emerald-500/10 border-emerald-500/40 text-emerald-300"
                              : opt.id === verilen && !dogru
                              ? "bg-red-500/10 border-red-500/40 text-red-300"
                              : "border-slate-700/50 text-slate-400"
                          }`}>
                            <span className="font-bold flex-shrink-0">{opt.id}.</span>
                            <span className="leading-relaxed">{opt.text}</span>
                          </div>
                        ))}
                      </div>
                      <div className="ml-11 bg-slate-900/50 border border-slate-700/50 rounded-xl p-3 text-xs text-slate-300 leading-relaxed">
                        <span className="font-bold text-violet-400 mr-1">AÃ§Ä±klama:</span>{soru.explanation}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Tam sÄ±nav Ã¶nerisi */}
          {tanim && (
            <div className="bg-violet-500/8 border border-violet-500/25 rounded-2xl p-5 mb-6 flex items-center gap-4">
              <div className="text-3xl">ğŸ“</div>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-white mb-1">GerÃ§ek sÄ±nav formatÄ±nÄ± denedin mi?</div>
                <div className="text-sm text-slate-400">100 soru Â· 150 dakika Â· Tam sÄ±nav simÃ¼lasyonu</div>
              </div>
              <Link
                href={TAM_SINAVLAR.find((s) => s.kod === secilenSinav)?.href ?? "/sinav"}
                className="flex-shrink-0 bg-gradient-to-br from-violet-500 to-violet-700 hover:from-violet-600 hover:to-violet-800 text-white px-4 py-2.5 rounded-xl text-sm font-semibold shadow-lg shadow-violet-500/30 transition whitespace-nowrap"
              >
                Tam SÄ±nava Gir â†’
              </Link>
            </div>
          )}

          {/* Aksiyonlar */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={yenidenBaslat}
              className="flex-1 bg-gradient-to-br from-violet-500 to-violet-700 hover:from-violet-600 hover:to-violet-800 text-white px-6 py-4 rounded-xl font-semibold shadow-lg shadow-violet-500/40 transition flex items-center justify-center gap-2"
            >ğŸ”„ Yeni SÄ±nav</button>
            <Link href="/istatistikler" className="flex-1 bg-slate-800 hover:bg-slate-700 text-white px-6 py-4 rounded-xl font-semibold border border-slate-700 transition flex items-center justify-center gap-2">
              ğŸ“Š Ä°statistikler
            </Link>
            <Link href="/dashboard" className="flex-1 bg-slate-800 hover:bg-slate-700 text-white px-6 py-4 rounded-xl font-semibold border border-slate-700 transition flex items-center justify-center gap-2">
              ğŸ“š Ã‡alÄ±ÅŸmaya DÃ¶n
            </Link>
          </div>
        </div>
        <SharedFooter />
      </div>
    );
  }

  return null;
}
