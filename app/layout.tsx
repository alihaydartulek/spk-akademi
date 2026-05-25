import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SPK Akademi — Sermaye Piyasası Lisanslama Hazırlık Platformu",
  description:
    "Türkiye'nin en kapsamlı SPK Sermaye Piyasası Lisanslama hazırlık platformu. 8 sınav türü, yüzlerce soru, gerçek sınav formatında simülasyon.",
  metadataBase: new URL("https://spk-akademi.vercel.app"),
  openGraph: {
    title: "SPK Akademi — Lisanslama Hazırlık Platformu",
    description:
      "Düzey 1-3, Türev Araçlar, Kurumsal Yönetim ve daha fazlası. Gerçek sınav formatında pratik yap.",
    url: "https://spk-akademi.vercel.app",
    siteName: "SPK Akademi",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SPK Akademi — Lisanslama Hazırlık Platformu",
    description:
      "Türkiye'nin en kapsamlı SPK hazırlık platformu. 8 sınav türü, gerçek format, ücretsiz.",
  },
  keywords: [
    "SPK sınavı",
    "sermaye piyasası lisanslama",
    "SPL sınavı",
    "Düzey 1",
    "Düzey 2",
    "Düzey 3",
    "türev araçlar sınavı",
    "SPK hazırlık",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={inter.variable}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}