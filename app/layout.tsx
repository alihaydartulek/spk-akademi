import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "LisansPro – Sermaye Piyasası Lisanslama Hazırlık Platformu",
  description:
    "Türkiye'nin en kapsamlı sermaye piyasası lisanslama hazırlık platformu. 8 sınav türü, yüzlerce soru, gerçek sınav formatında simülasyon.",
  metadataBase: new URL("https://lisanspro.com.tr"),
  openGraph: {
    title: "LisansPro – Lisanslama Hazırlık Platformu",
    description:
      "Düzey 1-3, Türev Araçlar, Kurumsal Yönetim ve daha fazlası. Gerçek sınav formatında pratik yap.",
    url: "https://lisanspro.com.tr",
    siteName: "LisansPro",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LisansPro – Lisanslama Hazırlık Platformu",
    description:
      "Türkiye'nin en kapsamlı sermaye piyasası lisanslama hazırlık platformu. 8 sınav türü, gerçek format.",
  },
  keywords: [
    "sermaye piyasası sınavı",
    "sermaye piyasası lisanslama",
    "SPL sınavı",
    "Düzey 1",
    "Düzey 2",
    "Düzey 3",
    "türev araçlar sınavı",
    "lisans hazırlık",
    "LisansPro",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={`dark ${spaceGrotesk.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{__html: `
          (function() {
            try {
              var t = localStorage.getItem('theme');
              if (t === 'light') document.documentElement.classList.remove('dark');
              else document.documentElement.classList.add('dark');
            } catch(e) {}
          })();
        `}} />
      </head>
      <body className={spaceGrotesk.className}>{children}</body>
      <GoogleAnalytics gaId="G-XXXXXXXXXX" />
    </html>
  );
}
