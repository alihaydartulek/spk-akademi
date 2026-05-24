import Link from "next/link";
import { SINAV_MENUSU } from "../_constants/sinavlar";
import { modules } from "../index";

const TOPLAM_MODUL = modules.length;
const TOPLAM_DERS  = modules.reduce((s, m) => s + m.lessons.length, 0);
const TOPLAM_SORU  = modules.reduce((s, m) => s + m.lessons.reduce((s2, l) => s2 + l.questions.length, 0), 0);

export default function SharedFooter() {
  return (
    <footer className="border-t border-slate-700/50 text-slate-400 py-16 mt-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

          {/* Marka */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center text-white font-bold text-sm">
                SPK
              </div>
              <div>
                <div className="font-bold text-white text-lg">SPK Akademi</div>
                <div className="text-[11px] text-blue-300 tracking-wider uppercase">Lisanslama Platformu</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Türkiye'nin en kapsamlı SPK Sermaye Piyasası Lisanslama hazırlık platformu.
            </p>
          </div>

          {/* Platform */}
          <div>
            <div className="font-semibold text-white mb-4 text-sm tracking-wider uppercase">Platform</div>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/dashboard"    className="hover:text-blue-400 transition">Çalışma Paneli</Link></li>
              <li><Link href="/sinav"        className="hover:text-blue-400 transition">Hızlı Pratik</Link></li>
              <li><Link href="/favoriler"    className="hover:text-blue-400 transition">Favoriler</Link></li>
              <li><Link href="/istatistikler" className="hover:text-blue-400 transition">İstatistikler</Link></li>
            </ul>
          </div>

          {/* Sınavlar */}
          <div>
            <div className="font-semibold text-white mb-4 text-sm tracking-wider uppercase">Sınavlar</div>
            <ul className="space-y-2.5 text-sm">
              {SINAV_MENUSU.map((sinav) => (
                <li key={sinav.href}>
                  <Link
                    href={sinav.href}
                    className="flex items-center gap-2 text-blue-300 hover:text-blue-200 font-medium transition"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                    {sinav.ad}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sayılar */}
          <div>
            <div className="font-semibold text-white mb-4 text-sm tracking-wider uppercase">Platform İstatistikleri</div>
            <ul className="space-y-4">
              <li>
                <div className="text-2xl font-bold text-white">{TOPLAM_MODUL}</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider mt-0.5">Modül</div>
              </li>
              <li>
                <div className="text-2xl font-bold text-white">{TOPLAM_DERS}</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider mt-0.5">Ders</div>
              </li>
              <li>
                <div className="text-2xl font-bold text-white">{TOPLAM_SORU}</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider mt-0.5">Soru</div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-700/50 text-center text-sm">
          © 2026 SPK Akademi · Tüm hakları saklıdır
        </div>
      </div>
    </footer>
  );
}
