import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tecnosolo BH | Economia Circular e Regeneração de Resíduos Urbanos",
  description: "O solo de Belo Horizonte clama por uma nova ciência. Recuperamos resíduos urbanos para regenerar a vida local e impulsionar a economia circular urbana.",
  keywords: ["Tecnosolo", "Belo Horizonte", "BH", "Economia Circular", "Resíduos Urbanos", "Sustentabilidade", "Regeneração de Solo"],
  openGraph: {
    title: "Tecnosolo BH | Economia Circular",
    description: "Recuperamos resíduos urbanos para regenerar a vida local em Belo Horizonte.",
    url: "https://tecnosolo.vercel.app/",
    siteName: "Tecnosolo BH",
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
    <html lang="pt-BR">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Google Fonts Editorial Luxury */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Montserrat:wght@200;300;400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
