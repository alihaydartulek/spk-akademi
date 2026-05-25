import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-violet-950 to-slate-900 flex flex-col items-center justify-center px-6">
      {/* Arkaplan efektleri */}
      <div className="fixed top-1/4 right-0 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-1/4 left-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative text-center max-w-md w-full">
        {/* Logo */}
        <Link href="/" className="inline-flex items-center gap-3 mb-12 group">
          <div className="w-11 h-11 bg-gradient-to-br from-violet-500 to-violet-700 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-violet-500/30">
            SPK
          </div>
          <div className="text-left">
            <div className="font-bold text-white text-lg leading-none group-hover:text-violet-300 transition">SPK Akademi</div>
            <div className="text-[10px] text-violet-300 tracking-wider uppercase mt-0.5">Lisanslama Platformu</div>
          </div>
        </Link>

        {/* 404 gÃ¶rseli */}
        <div className="relative mb-8">
          <div className="text-[120px] md:text-[160px] font-bold text-violet-500/15 leading-none select-none">
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-6xl">ğŸ”</div>
          </div>
        </div>

        <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">
          Sayfa BulunamadÄ±
        </h1>
        <p className="text-slate-400 mb-10 leading-relaxed">
          AradÄ±ÄŸÄ±nÄ±z sayfa mevcut deÄŸil ya da taÅŸÄ±nmÄ±ÅŸ olabilir.
          <br />
          Ana sayfaya dÃ¶nerek devam edebilirsiniz.
        </p>

        {/* Butonlar */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="bg-gradient-to-br from-violet-500 to-violet-700 hover:from-violet-600 hover:to-violet-800 text-white px-6 py-3 rounded-xl font-semibold shadow-lg shadow-violet-500/40 transition hover:scale-105 flex items-center justify-center gap-2"
          >
            ğŸ  Ana Sayfaya DÃ¶n
          </Link>
          <Link
            href="/sinav"
            className="bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-xl font-semibold border border-slate-700 transition flex items-center justify-center gap-2"
          >
            ğŸ“ SÄ±nav SeÃ§
          </Link>
          <Link
            href="/dashboard"
            className="bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-xl font-semibold border border-slate-700 transition flex items-center justify-center gap-2"
          >
            ğŸ“š Ã‡alÄ±ÅŸma Paneli
          </Link>
        </div>
      </div>
    </div>
  );
}
