import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["400", "600", "700", "900"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Keefa Youra Pambudi | Keefa. Portfolio",
  description:
    "Full-Stack Developer · DevOps Enthusiast · Linux User based in Indonesia. Exploring the crisp aquatic Frutiger Aero aesthetic with high performance web tech.",
  keywords: [
    "Keefa Youra Pambudi",
    "Keefa.",
    "Full-Stack Developer",
    "DevOps",
    "Linux Enthusiast",
    "Frutiger Aero Portfolio",
    "Indonesia Developer",
  ],
  authors: [{ name: "Keefa Youra Pambudi" }],
  openGraph: {
    title: "Keefa Youra Pambudi | Keefa.",
    description:
      "Full-Stack Developer · DevOps Enthusiast · Linux User. Built with nostalgic Frutiger Aero aqua aesthetic.",
    url: "https://keefaos.dev",
    siteName: "Keefa. Portfolio",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${outfit.variable} ${inter.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var h=navigator.hardwareConcurrency,m=navigator.deviceMemory,c=navigator.connection;if((h&&h<=4)||(m&&m<=3)||(c&&c.saveData)){document.documentElement.classList.add('lite-mode');}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="min-h-screen bg-aero-gradient text-slate-900 antialiased selection:bg-cyan-200 selection:text-cyan-900">
        {children}
      </body>
    </html>
  );
}
