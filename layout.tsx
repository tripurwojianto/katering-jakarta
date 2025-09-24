import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KateringJakarta - Layanan Katering Terbaik di Jakarta",
  description: "Katering profesional untuk semua acara Anda di Jakarta. Sajikan hidangan istimewa dengan cita rasa autentik Indonesia. Harga terjangkau, kualitas premium.",
  keywords: "katering jakarta, jasa katering, katering pernikahan, katering perusahaan, nasi box, prasmanan",
  authors: [{ name: "KateringJakarta" }],
  openGraph: {
    title: "KateringJakarta - Layanan Katering Terbaik di Jakarta",
    description: "Katering profesional untuk semua acara Anda di Jakarta. Sajikan hidangan istimewa dengan cita rasa autentik Indonesia.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}