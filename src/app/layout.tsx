import type { Metadata } from "next";
import { Cinzel, Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["700"],
});

export const metadata: Metadata = {
  title: "Global | Renovação de CNH para brasileiros na Europa",
  description:
    "A Global cuida de todo o processo de renovação da sua CNH no Brasil enquanto você continua na Europa. Atendimento personalizado pelo WhatsApp.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${montserrat.variable} ${cinzel.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
