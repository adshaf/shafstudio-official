import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Noto_Sans } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  preload: true,
});

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  preload: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#3b82f6",
};

export const metadata: Metadata = {
  title: "Shafstudio - Hassle-free Web Design & Development Service",
  description:
    "We'll build your website so you can focus on what matters the most: growing your business.",
  metadataBase: new URL("https://shafstudio.dev"),
  openGraph: {
    title: "Shafstudio - Hassle-free Web Design & Development Service",
    description:
      "We'll build your website so you can focus on what matters the most: growing your business.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${notoSans.variable} antialiased font-display`}
      >
        {children}
      </body>
    </html>
  );
}
