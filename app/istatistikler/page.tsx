"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { modules } from "../index";
import {
  getCevaplar,
  getDogruSayisi,
  getYanlisSayisi,
  getTamamlananDersler,
  getFavoriler,
  getSinavSonuclari,
  getStreak,
  getIstatistikler,
  modulBasariOrani,
  tumVerileriSil,
  type SinavSonuc,
} from "../lib/storage";
import SharedNavbar from "../_components/SharedNavbar";
import SharedFooter from "../_components/SharedFooter";

export default function IstatistiklerPage() {
  const [mounted, setMounted] = useState(false);
  const [refresh, setRefresh] = useState(0);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="min-h-screen bg-slate-900" />;

  const cevaplar = getCevaplar();
  const dogru = getDogruSayisi();
  const yanlis = getYanlisSayisi();
  const toplamCevap = cevaplar.length;
  const basariOrani = toplamCevap > 0 ? Math.round((dogru / toplamCevap) * 100) : 0;

  const tamamlananDersler = getTamamlananDersler();
  const favoriler = getFavoriler();
  const sinavlar = getSinavSonuclari();
  const streak = getStreak();
  const istatistikler = getIstatistikler();

  // Zayıf alan analizi - modüllere göre başarı oranı
  const modulAnalizi = modules
    .map((m) => {
      const oran = modulBasariOrani(m.id);
      return {
        id: m.id,
        baslik: m.title.replace("Modül · ", ""),
        ...oran,
        toplamSoru: oran.dogru + oran.yanlis,
      };
    })
    .filter((m) => m.toplamSoru > 0)
    .sort((a, b) => a.oran - b.oran); // En zayıftan en güçlüye

  // Son 7 gün
  const son7Gun = istatistikler.slice(0, 7).reverse();
  const maxSoru = Math.max(1, ...son7Gun.map((g) => g.soruSayisi));

  function handleSifirla() {
    if (confirm("⚠️ TÜM VERİLERİNİZ SİLİNECEK!\n\nİlerleme, favoriler, sınav sonuçları, cevaplar — hepsi gidecek.\n\nEmin misiniz?")) {
      if (confirm("Son uyarı! Bu işlem GERİ ALINAMAZ. Devam edilsin mi?")) {
        tumVerileriSil();
        setRefresh((r) => r + 1);
        alert("Tüm veriler silindi.");
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 relative">
      <div className="fixed top-1/4 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-1/4 left-0 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <SharedNavbar subtitle="İstatistikler" activeHref="/istatistikler" />

      <div className="relative max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-500/10 text-blue-300 rounded-full text-xs font-bold tracking-wider uppercase mb-4 border border-blue-400/30">
            📊 Genel Bakış
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">İlerleme & İstatistikler</h1>
          <p className="text-lg text-slate-300">Çalışmanın özetini ve zayıf alanlarını gör.</p>
        </div>

        {/* GENEL KARTLAR */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <StatKart icon="🎯" label="Başarı Oranı" value={`%${basariOrani}`} subtext={`${dogru}/${toplamCevap} doğru`} color="emerald" />
          <StatKart icon="✅" label="Tamamlanan Ders" value={tamamlananDersler.length.toString()} subtext={`/${modules.reduce((s, m) => s + m.lessons.length, 0)} ders`} color="blue" />
          <StatKart icon="⭐" label="Favori Soru" value={favoriler.length.toString()} subtext="Tekrar için" color="amber" />
          <StatKart icon="🔥" label="Streak" value={streak.toString()} subtext={streak === 0 ? "Bugün başla!" : streak === 1 ? "gün" : "gün üst üste"} color="orange" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* SON 7 GÜN GRAFİĞİ */}
          <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700 shadow-xl shadow-blue-900/30">
            <h2 className="text-xl font-bold text-white mb-4 tracking-tight">📅 Son 7 Gün</h2>
            {son7Gun.length === 0 ? (
              <div className="text-center py-12 text-slate-400">
                <div className="text-5xl mb-3">📅</div>
                <p>Henüz çalışma kaydı yok</p>
              </div>
            ) : (
              <div className="flex items-end justify-between gap-2 h-48 mt-6">
                {son7Gun.map((gun) => {
                  const gunFormat = new Date(gun.tarih).toLocaleDateString("tr-TR", { weekday: "short" });
                  const yukseklik = (gun.soruSayisi / maxSoru) * 100;
                  return (
                    <div key={gun.tarih} className="flex-1 flex flex-col items-center gap-2">
                      <div className="text-xs text-blue-300 font-bold">{gun.soruSayisi}</div>
                      <div className="w-full bg-slate-900 rounded-t-md relative" style={{ height: "75%" }}>
                        <div
                          className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-500 to-cyan-400 rounded-t-md transition-all"
                          style={{ height: `${yukseklik}%` }}
                        />
                      </div>
                      <div className="text-xs text-slate-400 capitalize">{gunFormat}</div>
                    </div>
                  );
                })}
              </div>
            )}
            <div className="mt-4 pt-4 border-t border-slate-700 text-center text-sm text-slate-400">
              Bu hafta toplam: <span className="text-white font-bold">{son7Gun.reduce((s, g) => s + g.soruSayisi, 0)}</span> soru
            </div>
          </div>

          {/* DAĞILIM */}
          <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700 shadow-xl shadow-blue-900/30">
            <h2 className="text-xl font-bold text-white mb-4 tracking-tight">📈 Cevap Dağılımı</h2>
            {toplamCevap === 0 ? (
              <div className="text-center py-12 text-slate-400">
                <div className="text-5xl mb-3">📈</div>
                <p>Henüz soru cevaplamadın</p>
              </div>
            ) : (
              <>
                <div className="relative h-8 bg-slate-900 rounded-full overflow-hidden mb-6">
                  <div
                    className="absolute left-0 top-0 h-full bg-gradient-to-r from-emerald-500 to-emerald-400 transition-all"
                    style={{ width: `${(dogru / toplamCevap) * 100}%` }}
                  />
                  <div
                    className="absolute top-0 h-full bg-gradient-to-r from-red-500 to-red-400 transition-all"
                    style={{
                      left: `${(dogru / toplamCevap) * 100}%`,
                      width: `${(yanlis / toplamCevap) * 100}%`,
                    }}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-emerald-300 text-sm font-semibold">Doğru</span>
                      <span className="text-2xl">✓</span>
                    </div>
                    <div className="text-3xl font-bold text-emerald-400">{dogru}</div>
                    <div className="text-xs text-emerald-300 mt-1">%{Math.round((dogru / toplamCevap) * 100)}</div>
                  </div>
                  <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-red-300 text-sm font-semibold">Yanlış</span>
                      <span className="text-2xl">✕</span>
                    </div>
                    <div className="text-3xl font-bold text-red-400">{yanlis}</div>
                    <div className="text-xs text-red-300 mt-1">%{Math.round((yanlis / toplamCevap) * 100)}</div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* ZAYIF ALAN ANALİZİ */}
        <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700 shadow-xl shadow-blue-900/30 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold text-white tracking-tight">🎯 Zayıf Alan Analizi</h2>
              <p className="text-sm text-slate-400 mt-1">En çok yanlış yaptığın modüller — bunlara tekrar bak</p>
            </div>
          </div>
          {modulAnalizi.length === 0 ? (
            <div className="text-center py-12 text-slate-400">
              <div className="text-5xl mb-3">🎯</div>
              <p>Henüz analiz için yeterli veri yok</p>
              <p className="text-sm mt-2">Soru çözmeye başlayın, hangi modülde zayıf olduğunuzu görelim</p>
            </div>
          ) : (
            <div className="space-y-3">
              {modulAnalizi.slice(0, 10).map((m, idx) => {
                const renkSinifi =
                  m.oran < 50
                    ? "from-red-500 to-red-400"
                    : m.oran < 75
                    ? "from-amber-500 to-amber-400"
                    : "from-emerald-500 to-emerald-400";
                const etiketRenk =
                  m.oran < 50 ? "text-red-300" : m.oran < 75 ? "text-amber-300" : "text-emerald-300";
                return (
                  <div key={m.id} className="bg-slate-900/50 rounded-xl p-4 border border-slate-700">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3 flex-1 min-w-0">
                        <div className="text-2xl flex-shrink-0">
                          {m.oran < 50 ? "🔴" : m.oran < 75 ? "🟡" : "🟢"}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-white text-sm leading-tight line-clamp-1">{m.baslik}</div>
                          <div className="text-xs text-slate-400 mt-0.5">
                            {m.dogru} doğru · {m.yanlis} yanlış · {m.toplamSoru} toplam
                          </div>
                        </div>
                      </div>
                      <div className={`text-2xl font-bold ${etiketRenk} ml-3`}>%{m.oran}</div>
                    </div>
                    <div className="h-2 bg-slate-900 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${renkSinifi} transition-all`}
                        style={{ width: `${m.oran}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* SINAV GEÇMİŞİ */}
        <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700 shadow-xl shadow-blue-900/30 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold text-white tracking-tight">⏱️ Sınav Geçmişi</h2>
              <p className="text-sm text-slate-400 mt-1">Daha önce yaptığın sınav denemeleri</p>
            </div>
            <Link
              href="/sinav"
              className="bg-gradient-to-br from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-lg shadow-blue-500/40 transition"
            >
              + Yeni Sınav
            </Link>
          </div>
          {sinavlar.length === 0 ? (
            <div className="text-center py-12 text-slate-400">
              <div className="text-5xl mb-3">⏱️</div>
              <p>Henüz sınav denemesi yok</p>
              <p className="text-sm mt-2">Sınav simülasyonu yaparak kendini ölç</p>
            </div>
          ) : (
            <div className="space-y-3">
              {sinavlar.slice(0, 10).map((s) => <SinavKart key={s.id} sinav={s} />)}
            </div>
          )}
        </div>

        {/* TEHLİKE BÖLGESİ */}
        <div className="bg-red-500/5 border border-red-500/30 rounded-2xl p-6">
          <h3 className="font-bold text-red-300 mb-2">⚠️ Tehlike Bölgesi</h3>
          <p className="text-sm text-slate-400 mb-4">Tüm ilerleme, favoriler, sınav sonuçları ve cevapları silebilirsin. Bu işlem geri alınamaz!</p>
          <button
            onClick={handleSifirla}
            className="bg-red-500/10 hover:bg-red-500/20 text-red-300 border border-red-500/30 px-4 py-2 rounded-lg text-sm font-semibold transition"
          >
            🗑️ Tüm Verileri Sıfırla
          </button>
        </div>
      </div>
      <SharedFooter />
    </div>
  );
}

function StatKart({ icon, label, value, subtext, color }: { icon: string; label: string; value: string; subtext: string; color: string }) {
  const renkSinifi: Record<string, string> = {
    emerald: "from-emerald-500 to-emerald-600 shadow-emerald-500/40",
    blue: "from-blue-500 to-blue-700 shadow-blue-500/40",
    amber: "from-amber-500 to-amber-600 shadow-amber-500/40",
    orange: "from-orange-500 to-orange-600 shadow-orange-500/40",
  };
  return (
    <div className="bg-slate-800 rounded-2xl p-5 border border-slate-700 shadow-xl shadow-blue-900/30">
      <div className="flex items-start justify-between mb-3">
        <div className="text-3xl">{icon}</div>
      </div>
      <div className={`text-3xl font-bold bg-gradient-to-br ${renkSinifi[color]} bg-clip-text text-transparent mb-1`}>
        {value}
      </div>
      <div className="text-sm text-white font-semibold mb-0.5">{label}</div>
      <div className="text-xs text-slate-400">{subtext}</div>
    </div>
  );
}

function SinavKart({ sinav }: { sinav: SinavSonuc }) {
  const gecti = sinav.puan >= 60;
  const dakika = Math.floor(sinav.sureSaniye / 60);
  const tarih = new Date(sinav.tarih).toLocaleDateString("tr-TR", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" });

  return (
    <div className={`bg-slate-900/50 rounded-xl p-4 border ${gecti ? "border-emerald-500/30" : "border-amber-500/30"} flex items-center justify-between gap-4`}>
      <div className="flex items-center gap-3 flex-1 min-w-0">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0 ${gecti ? "bg-emerald-500/20" : "bg-amber-500/20"}`}>
          {gecti ? "🎉" : "💪"}
        </div>
        <div className="min-w-0">
          <div className="font-semibold text-white text-sm">{sinav.sinavAdi}</div>
          <div className="text-xs text-slate-400 mt-0.5">
            {tarih} · {dakika} dk · {sinav.dogruSayisi}/{sinav.toplamSoru}
          </div>
        </div>
      </div>
      <div className={`text-2xl font-bold ${gecti ? "text-emerald-400" : "text-amber-400"}`}>
        %{sinav.puan.toFixed(1)}
      </div>
    </div>
  );
}