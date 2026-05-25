"use client";

import Image from "next/image";
import { useState } from "react";

/**
 * LisansPro logo işareti.
 * public/logo.png varsa onu kullanır, yoksa SVG versiyonuna döner.
 */
export default function LogoMark({ size = 44 }: { size?: number }) {
  const [imgError, setImgError] = useState(false);

  if (!imgError) {
    return (
      <div
        style={{ width: size, height: size }}
        className="flex-shrink-0 rounded-xl overflow-hidden shadow-lg shadow-indigo-500/40"
      >
        <Image
          src="/logo.png"
          alt="LisansPro"
          width={size}
          height={size}
          className="object-cover w-full h-full"
          onError={() => setImgError(true)}
          priority
        />
      </div>
    );
  }

  // Fallback SVG — public/logo.png yokken gösterilir
  return (
    <div
      style={{ width: size, height: size }}
      className="flex-shrink-0 rounded-xl overflow-hidden shadow-lg shadow-indigo-500/40"
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 380 380"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="380" height="380" fill="#000000" />
        <defs>
          <linearGradient id="lp-nav" x1="60" y1="340" x2="320" y2="40" gradientUnits="userSpaceOnUse">
            <stop offset="0%"   stopColor="#1e3a8a" />
            <stop offset="40%"  stopColor="#3b5bdb" />
            <stop offset="75%"  stopColor="#0ea5e9" />
            <stop offset="100%" stopColor="#22d3ee" />
          </linearGradient>
        </defs>
        {/* L — dikey */}
        <rect x="60"  y="55"  width="62"  height="270" rx="6" fill="url(#lp-nav)" />
        {/* L — yatay alt */}
        <rect x="60"  y="263" width="165" height="62"  rx="6" fill="url(#lp-nav)" />
        {/* P — dikey */}
        <rect x="175" y="55"  width="58"  height="270" rx="6" fill="url(#lp-nav)" />
        {/* P — üst yatay */}
        <rect x="175" y="55"  width="105" height="58"  rx="6" fill="url(#lp-nav)" />
        {/* P — orta yatay */}
        <rect x="175" y="161" width="105" height="54"  rx="6" fill="url(#lp-nav)" />
        {/* P — sağ yarım daire */}
        <rect x="263" y="55"  width="58"  height="160" rx="29" fill="url(#lp-nav)" />
      </svg>
    </div>
  );
}
