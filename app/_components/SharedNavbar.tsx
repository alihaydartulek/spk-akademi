"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { SINAV_MENUSU } from "../_constants/sinavlar";
import ThemeToggle from "./ThemeToggle";
import LogoMark from "./LogoMark";

export default function SharedNavbar({
  subtitle = "Lisanslama Platformu",
  activeHref,
  extraMobileAction,
}: {
  subtitle?: string;
  activeHref?: string;
  extraMobileAction?: React.ReactNode;
}) {
  const [sinavMenuAcik, setSinavMenuAcik] = useState(false);
  const [mobileMenuAcik, setMobileMenuAcik] = useState(false);
  const sinavMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (sinavMenuRef.current && !sinavMenuRef.current.contains(e.target as Node)) {
        setSinavMenuAcik(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const navLink = (href: string, label: string) => (
    <Link
      href={href}
      className={`relative px-2.5 py-1.5 rounded-lg transition-all duration-200 ${
        activeHref === href
          ? "text-indigo-300 font-semibold bg-indigo-500/12 border border-indigo-500/25"
          : "text-[var(--text-secondary)] hover:text-indigo-300 hover:bg-indigo-500/8"
      }`}
    >
      {label}
      {activeHref === href && (
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[calc(100%+1px)] w-4 h-0.5 rounded-full bg-gradient-to-r from-indigo-400 to-cyan-400" />
      )}
    </Link>
  );

  return (
    <nav className="sticky top-0 z-50 bg-[var(--bg-base)]/80 backdrop-blur-xl border-b border-[var(--border-base)]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
          <LogoMark size={44} />
          <div>
            <div className="font-bold text-[var(--text-primary)] text-lg leading-none">LisansPro</div>
            <div className="text-[11px] text-indigo-300 mt-1 tracking-wider uppercase">{subtitle}</div>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-[var(--text-secondary)]">
          {navLink("/dashboard", "Modüller")}
          {navLink("/sinav", "Hızlı Pratik")}

          {/* Sınavlar Dropdown */}
          <div
            ref={sinavMenuRef}
            className="relative"
            onMouseEnter={() => setSinavMenuAcik(true)}
            onMouseLeave={() => setSinavMenuAcik(false)}
          >
            <button
              onClick={() => setSinavMenuAcik((v) => !v)}
              className={`flex items-center gap-1.5 font-semibold transition ${
                sinavMenuAcik ? "text-indigo-400" : "text-[var(--text-secondary)] hover:text-indigo-400"
              }`}
            >
              Sınavlar
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-200 ${sinavMenuAcik ? "rotate-180 text-indigo-400" : ""}`}
                fill="none" viewBox="0 0 24 24" stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[520px] transition-all duration-200 origin-top ${
              sinavMenuAcik ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"
            }`}>
              {/* Caret arrow */}
              <div className="absolute -top-[7px] left-1/2 -translate-x-1/2 w-3.5 h-3.5 bg-[var(--bg-base)] border-l border-t border-[var(--border-base)] rotate-45 z-10" />
              <div className="bg-[var(--bg-base)] border border-[var(--border-base)] rounded-2xl overflow-hidden" style={{ boxShadow: "0 24px 64px -8px rgba(0,0,0,0.4), 0 0 0 1px rgba(99,102,241,0.06)" }}>
                <div className="px-5 py-3.5 border-b border-[var(--border-base)] flex items-center gap-2">
                  <span className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider">Sermaye Piyasası Lisanslama Sınavları</span>
                  <span className="ml-auto px-2 py-0.5 text-[10px] font-bold bg-indigo-500/15 text-indigo-400 rounded-full border border-indigo-500/25">8 Sınav Türü</span>
                </div>
                <div className="grid grid-cols-2 gap-px bg-[var(--bg-surface-2)]/40 p-1">
                  {SINAV_MENUSU.map((sinav) => (
                    <Link
                      key={sinav.href}
                      href={sinav.href}
                      onClick={() => setSinavMenuAcik(false)}
                      className={`group flex items-start gap-3 px-4 py-3.5 rounded-xl transition-all duration-150 ${
                        activeHref === sinav.href
                          ? "bg-indigo-500/15 border border-indigo-500/30"
                          : "bg-[var(--bg-base)] hover:bg-indigo-500/10 hover:border hover:border-indigo-500/15"
                      }`}
                    >
                      <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/50 mt-1.5 flex-shrink-0" />
                      <div className="min-w-0">
                        <div className="text-sm font-semibold text-[var(--text-primary)] group-hover:text-indigo-300 transition leading-tight">
                          {sinav.ad}
                        </div>
                        <div className="text-xs text-[var(--text-muted)] mt-0.5">{sinav.aciklama}</div>
                      </div>
                      <svg className="w-4 h-4 text-indigo-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all ml-auto flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  ))}
                </div>
                <div className="px-5 py-3 border-t border-[var(--border-base)] flex items-center justify-between">
                  <span className="text-xs text-[var(--text-faint)]">Tüm sınav türlerine tek platformdan erişin</span>
                  <Link href="/sinav" onClick={() => setSinavMenuAcik(false)} className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition">
                    Hızlı Pratik →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {navLink("/favoriler", "Favoriler")}
          {navLink("/istatistikler", "İstatistikler")}

          <ThemeToggle />

          <Link
            href="/dashboard"
            className="bg-gradient-to-br from-indigo-500 to-indigo-700 hover:from-indigo-600 hover:to-indigo-800 text-white px-5 py-2.5 rounded-lg font-semibold shadow-lg shadow-indigo-500/40 transition-all hover:scale-105"
          >
            Çalışmaya Başla
          </Link>
        </div>

        {/* Mobil: extra action + theme toggle + hamburger + CTA */}
        <div className="md:hidden flex items-center gap-2">
          {extraMobileAction}
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuAcik((v) => !v)}
            className="w-9 h-9 flex flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-[var(--bg-surface-2)] transition"
            aria-label="Menüyü aç"
          >
            <span className={`w-5 h-0.5 bg-[var(--text-secondary)] rounded transition-all duration-200 ${mobileMenuAcik ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`w-5 h-0.5 bg-[var(--text-secondary)] rounded transition-all duration-200 ${mobileMenuAcik ? "opacity-0" : ""}`} />
            <span className={`w-5 h-0.5 bg-[var(--text-secondary)] rounded transition-all duration-200 ${mobileMenuAcik ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
          <Link href="/dashboard" className="bg-gradient-to-br from-indigo-500 to-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-semibold">
            Başla
          </Link>
        </div>
      </div>

      {/* Mobil menü */}
      {mobileMenuAcik && (
        <div className="md:hidden border-t border-[var(--border-base)] bg-[var(--bg-base)]/98 backdrop-blur-xl">
          <div className="px-5 py-4 space-y-1">
            {[
              { href: "/dashboard", label: "Modüller" },
              { href: "/sinav", label: "Hızlı Pratik" },
              { href: "/favoriler", label: "Favoriler" },
              { href: "/istatistikler", label: "İstatistikler" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMobileMenuAcik(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition text-sm font-medium ${
                  activeHref === href
                    ? "bg-indigo-500/15 border border-indigo-500/25 text-indigo-300"
                    : "hover:bg-[var(--bg-surface-2)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                }`}
              >
                {activeHref === href && <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0" />}
                {label}
              </Link>
            ))}
            <div className="pt-3 mt-2 border-t border-[var(--border-base)]">
              <div className="text-[10px] font-bold text-[var(--text-faint)] uppercase tracking-widest px-3 mb-2">Sınavlar</div>
              {SINAV_MENUSU.map((sinav) => (
                <Link
                  key={sinav.href}
                  href={sinav.href}
                  onClick={() => setMobileMenuAcik(false)}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-indigo-500/8 border border-indigo-500/20 mb-1 hover:bg-indigo-500/15 transition"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                  <span className="text-sm font-semibold text-indigo-300">{sinav.ad}</span>
                  <span className="ml-auto text-xs text-[var(--text-muted)]">{sinav.aciklama}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
