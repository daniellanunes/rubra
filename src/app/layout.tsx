import type { Metadata } from "next";
import { Roboto, Tektur } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const tektur = Tektur({
  variable: "--font-tektur",
  subsets: ["latin"],
  weight: ["500", "700", "900"],
});

export const metadata: Metadata = {
  title: "TomCash Tattoo | Salvador Tattoo Studio — Barra, Salvador - BA",
  description:
    "Tatuagens autorais com técnica, sensibilidade e significado. Tom é co-proprietário do Salvador Tattoo Studio no Barra Center, com vista para o mar e Farol da Barra.",
  icons: {
    icon: "/Iluminart_Vetor_PB_Principal.svg",
    shortcut: "/Iluminart_Vetor_PB_Principal.svg",
    apple: "/assets/logo1-DkOgUzll.webp",
  },
  openGraph: {
    title: "TomCash Tattoo | Salvador Tattoo Studio",
    description:
      "Tatuagens autorais, únicas e exclusivas em Salvador - BA. Blackwork, Fine line, Anime, Realismo, Colorido e o projeto autoral Os Selos.",
    url: "https://tomcashtattoo.com.br",
    siteName: "TomCash Tattoo",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${roboto.variable} ${tektur.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
