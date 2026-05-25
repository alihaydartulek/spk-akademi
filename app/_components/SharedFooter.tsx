import Link from "next/link";
import { SINAV_MENUSU } from "../_constants/sinavlar";
import { modules } from "../index";
import LogoMark from "./LogoMark";

const TOPLAM_MODUL = modules.length;
const TOPLAM_DERS  = modules.reduce((s, m) => s + m.lessons.length, 0);
const TOPLAM_SORU  = modules.reduce((s, m) => s + m.lessons.reduce((s2, l) => s2 + l.questions.length, 0), 0);

export default function SharedFooter() {
  return (
    <footer className="border-t border-[var(--border-base)] text-[var(--text-muted)] py-16 mt-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

          {/* Marka */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <LogoMark size={44} />
              <div>
                <div className="font-bold text-[var(--text-primary)] text-lg">LisansPro</div>
                <div className="text-[11px] text-indigo-400 tracking-wider uppercase">Lisanslama Platformu</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-[var(--text-muted)]">
              Türkiye&apos;nin en kapsamlı Sermaye Piyasası Lisanslama hazırlık platformu.
            </p>
          </div>

          {/* Platform */}
          <div>
            <div className="font-semibold text-[var(--text-primary)] mb-4 text-sm tracking-wider uppercase">Platform</div>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/dashboard"    className="hover:text-indigo-400 transition">Çalışma Paneli</Link></li>
              <li><Link href="/sinav"        className="hover:text-indigo-400 transition">Hızlı Pratik</Link></li>
              <li><Link href="/favoriler"    className="hover:text-indigo-400 transition">Favoriler</Link></li>
              <li><Link href="/istatistikler" className="hover:text-indigo-400 transition">İstatistikler</Link></li>
            </ul>
          </div>

          {/* Sınavlar */}
          <div>
            <div className="font-semibold text-[var(--text-primary)] mb-4 text-sm tracking-wider uppercase">Sınavlar</div>
            <ul className="space-y-2.5 text-sm">
              {SINAV_MENUSU.map((sinav) => (
                <li key={sinav.href}>
                  <Link
                    href={sinav.href}
                    className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-medium transition"
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
            <div className="font-semibold text-[var(--text-primary)] mb-4 text-sm tracking-wider uppercase">Platform İstatistikleri</div>
            <ul className="space-y-4">
              <li>
                <div className="text-2xl font-bold text-[var(--text-primary)]">{TOPLAM_MODUL}</div>
                <div className="text-xs text-[var(--text-faint)] uppercase tracking-wider mt-0.5">Modül</div>
              </li>
              <li>
                <div className="text-2xl font-bold text-[var(--text-primary)]">{TOPLAM_DERS}</div>
                <div className="text-xs text-[var(--text-faint)] uppercase tracking-wider mt-0.5">Ders</div>
              </li>
              <li>
                <div className="text-2xl font-bold text-[var(--text-primary)]">{TOPLAM_SORU}</div>
                <div className="text-xs text-[var(--text-faint)] uppercase tracking-wider mt-0.5">Soru</div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[var(--border-base)] text-center text-sm">
          © 2026 LisansPro · Tüm hakları saklıdır
        </div>
      </div>
    </footer>
  );
}
