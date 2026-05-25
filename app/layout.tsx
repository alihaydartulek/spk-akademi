import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SPK Akademi � Sermaye Piyasas� Lisanslama Haz�rl�k Platformu",
  description:
    "T�rkiye'nin en kapsaml� SPK Sermaye Piyasas� Lisanslama haz�rl�k platformu. 8 s�nav t�r�, y�zlerce soru, ger�ek s�nav format�nda sim�lasyon.",
  metadataBase: new URL("https://spk-akademi.vercel.app"),
  openGraph: {
    title: "SPK Akademi � Lisanslama Haz�rl�k Platformu",
    description:
      "D�zey 1-3, T�rev Ara�lar, Kurumsal Y�netim ve daha fazlas�. Ger�ek s�nav format�nda pratik yap.",
    url: "https://spk-akademi.vercel.app",
    siteName: "SPK Akademi",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SPK Akademi � Lisanslama Haz�rl�k Platformu",
    description:
      "T�rkiye'nin en kapsaml� SPK haz�rl�k platformu. 8 s�nav t�r�, ger�ek format, �cretsiz.",
  },
  keywords: [
    "SPK s�nav�",
    "sermaye piyasas� lisanslama",
    "SPL s�nav�",
    "D�zey 1",
    "D�zey 2",
    "D�zey 3",
    "t�rev ara�lar s�nav�",
    "SPK haz�rl�k",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={spaceGrotesk.variable}>
      <body className={spaceGrotesk.className}>{children}</body>
    </html>
  );
}