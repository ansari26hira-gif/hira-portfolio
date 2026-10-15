import "./globals.css";
import { Bricolage_Grotesque, Figtree } from "next/font/google";
import Providers from "@/components/Providers";

const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display" });
const body = Figtree({ subsets: ["latin"], variable: "--font-body" });

export const metadata = {
  title: "Hira Ansari — Web Developer in Hyderabad, Pakistan",
  description: "Portfolio of Hira Ansari: fast, SEO-ready websites built with HTML, CSS, JavaScript, WordPress, Elementor and Gutenberg.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${display.variable} ${body.variable}`}>
      <body><Providers>{children}</Providers></body>
    </html>
  );
}
