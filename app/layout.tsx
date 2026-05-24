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
    "Türkiye'nin en kapsamlı SPK Sermaye Piyasası Lisanslama hazırlık platformu. 23 modül, 111 ders, 555 soru.",
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