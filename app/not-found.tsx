import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[var(--bg-base)] flex flex-col items-center justify-center px-6">
      {/* Arkaplan efektleri */}
      <div className="fixed top-1/4 right-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-1/4 left-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative text-center max-w-md w-full">
        {/* Logo */}
        <Link href="/" className="inline-flex items-center gap-3 mb-12 group">
          <div className="w-11 h-11 bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-indigo-500/30">
            SPK
          </div>
          <div className="text-left">
            <div className="font-bold text-[var(--text-primary)] text-lg leading-none group-hover:text-indigo-400 transition">SPK Akademi</div>
            <div className="text-[10px] text-indigo-400 tracking-wider uppercase mt-0.5">Lisanslama Platformu</div>
          </div>
        </Link>

        {/* 404 görseli */}
        <div className="relative mb-8">
          <div className="text-[120px] md:text-[160px] font-bold text-indigo-500/15 leading-none select-none">
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-6xl">🔍</div>
          </div>
        </div>

        <h1 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-3">
          Sayfa Bulunamadı
        </h1>
        <p className="text-[var(--text-muted)] mb-10 leading-relaxed">
          Aradığınız sayfa mevcut değil ya da taşınmış olabilir.
          <br />
          Ana sayfaya dönerek devam edebilirsiniz.
        </p>

        {/* Butonlar */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="bg-gradient-to-br from-indigo-500 to-indigo-700 hover:from-indigo-600 hover:to-indigo-800 text-white px-6 py-3 rounded-xl font-semibold shadow-lg shadow-indigo-500/40 transition hover:scale-105 flex items-center justify-center gap-2"
          >
            🏠 Ana Sayfaya Dön
          </Link>
          <Link
            href="/sinav"
            className="bg-[var(--bg-surface-2)] hover:bg-[var(--bg-surface-3)] text-[var(--text-primary)] px-6 py-3 rounded-xl font-semibold border border-[var(--border-base)] transition flex items-center justify-center gap-2"
          >
            🎓 Sınav Seç
          </Link>
          <Link
            href="/dashboard"
            className="bg-[var(--bg-surface-2)] hover:bg-[var(--bg-surface-3)] text-[var(--text-primary)] px-6 py-3 rounded-xl font-semibold border border-[var(--border-base)] transition flex items-center justify-center gap-2"
          >
            📚 Çalışma Paneli
          </Link>
        </div>
      </div>
    </div>
  );
}
