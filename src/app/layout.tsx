import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Tomás Roncoroni - Portfolio",
  description: "Portfolio profesional de Tomás Roncoroni - Desarrollador Full Stack especializado en React, Node.js y tecnologías modernas",
  keywords: ["Tomás Roncoroni", "Desarrollador", "Full Stack", "React", "Node.js", "Portfolio"],
  authors: [{ name: "Tomás Roncoroni" }],
  creator: "Tomás Roncoroni",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://tomasroncoroni.vercel.app",
    title: "Tomás Roncoroni - Portfolio",
    description: "Portfolio profesional de Tomás Roncoroni - Desarrollador Full Stack",
    siteName: "Tomás Roncoroni Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tomás Roncoroni - Portfolio",
    description: "Portfolio profesional de Tomás Roncoroni - Desarrollador Full Stack",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
