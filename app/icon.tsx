import { ImageResponse } from "next/og";

export const size = { width: 512, height: 512 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#000000",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg
          width="380"
          height="380"
          viewBox="0 0 380 380"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="lp-grad" x1="60" y1="340" x2="320" y2="40" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#1e3a8a" />
              <stop offset="40%" stopColor="#3b5bdb" />
              <stop offset="75%" stopColor="#0ea5e9" />
              <stop offset="100%" stopColor="#22d3ee" />
            </linearGradient>
          </defs>

          {/* L harfi — sol sütun + alt çizgi */}
          <rect x="60" y="55" width="62" height="270" rx="6" fill="url(#lp-grad)" />
          <rect x="60" y="263" width="165" height="62" rx="6" fill="url(#lp-grad)" />

          {/* P harfi — dikey çizgi */}
          <rect x="175" y="55" width="58" height="270" rx="6" fill="url(#lp-grad)" />
          {/* P harfi — üst yatay */}
          <rect x="175" y="55" width="105" height="58" rx="6" fill="url(#lp-grad)" />
          {/* P harfi — alt yatay (orta) */}
          <rect x="175" y="161" width="105" height="54" rx="6" fill="url(#lp-grad)" />
          {/* P harfi — sağ dikey yarım daire etkisi */}
          <rect x="263" y="55" width="58" height="160" rx="29" fill="url(#lp-grad)" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
