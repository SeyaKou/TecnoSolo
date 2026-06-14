import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";

// Importar fontes do Google Fonts
const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400", "700"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["200", "300", "400", "600"],
});

const siteUrl = "https://tecnosolo.vercel.app";

export const metadata: Metadata = {
  charset: "UTF-8",
  title: "Tecnosolo BH | Economia Circular e Regeneração de Resíduos Urbanos",
  description:
    "O solo de Belo Horizonte clama por uma nova ciência. Recuperamos resíduos urbanos para regenerar a vida local e impulsionar a economia circular urbana.",
  keywords: [
    "Tecnosolo",
    "Belo Horizonte",
    "BH",
    "Economia Circular",
    "Resíduos Urbanos",
    "Sustentabilidade",
    "Regeneração de Solo",
  ],
  robots: "index, follow",
  authors: [{ name: "Tecnosolo BH" }],
  creator: "Tecnosolo BH",
  publisher: "Tecnosolo BH",
  formatDetection: {
    email: false,
    telephone: false,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  openGraph: {
    title: "Tecnosolo BH | Economia Circular e Regeneração de Resíduos Urbanos",
    description:
      "Recuperamos resíduos urbanos para regenerar a vida local em Belo Horizonte.",
    url: siteUrl,
    siteName: "Tecnosolo BH",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tecnosolo BH | Economia Circular",
    description:
      "Recuperamos resíduos urbanos para regenerar a vida local em Belo Horizonte.",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    languages: {
      "pt-BR": siteUrl,
    },
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
      className={`${playfair.variable} ${montserrat.variable}`}
    >
      <head>
        <meta name="theme-color" content="#1a472a" />
        {/* Structured Data - Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Tecnosolo BH",
              url: siteUrl,
              description:
                "Economia circular e regeneração de resíduos urbanos em Belo Horizonte",
              sameAs: [
                // Adicione suas redes sociais aqui
                // "https://www.instagram.com/tecnosolo",
                // "https://www.facebook.com/tecnosolo",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Customer Service",
                // Adicione seu telefone/email aqui
              },
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
