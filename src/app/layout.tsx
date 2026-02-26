import type { Metadata } from "next";
import { Inter, Space_Grotesk, Inter_Tight } from "next/font/google";
import "./globals.css";

import Header from "../components/header";
import Footer from "../components/footer";
import SmoothScroll from "../components/smoothscroll";
import GlobalBackground from "../components/globalbackground"; 
import { LanguageProvider } from "../context/languagecontext"; // <--- IMPORTANTE: El proveedor de idiomas

// Configuración de fuentes
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-main",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ECONOS | Soluciones de IA Inmobiliaria",
  description: "Digitalizamos tu inmobiliaria con IA para que cierres más ventas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${spaceGrotesk.variable} ${interTight.variable}`}>
      <body>
        <LanguageProvider> {/* <--- ENVOLVEMOS TODO EL SITIO AQUÍ */}
          <GlobalBackground /> 
          
          <SmoothScroll>
            <Header />
            <main>{children}</main>
            <Footer />
          </SmoothScroll>
        </LanguageProvider>
      </body>
    </html>
  );
}