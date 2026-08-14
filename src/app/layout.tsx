import type { Metadata } from "next";
import { Fira_Sans } from "next/font/google";
import "./globals.css";

const firaSans = Fira_Sans({
  variable: "--font-fira",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Azimute Educatur | Expedições pedagógicas",
  description: "Expedições pedagógicas que conectam currículo, território e experiência.",
  applicationName: "Azimute Educatur",
  icons: { icon: "/azimute/brand-mark.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${firaSans.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
