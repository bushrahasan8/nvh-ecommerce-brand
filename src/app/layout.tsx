import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { AppProvider } from "@/context/AppContext";
import "./globals.css";

const inter = Inter({
  variable: "--inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "NVH® • Luxury Skincare Ecommerce",
  description:
    "Experience luxury skincare with NVH® – a beautifully designed Ecommerce store offering premium skincare products with a seamless shopping experience.",
  keywords:
    "Luxury Skincare, Premium Beauty, High-end Skincare, Anti-Aging, Hydrating Serums, Next.js Ecommerce",
  authors: [{ name: "nzar.dev" }],
  metadataBase: new URL("https://nvh.nzar.dev"),
  openGraph: {
    title: "NVH® • Luxury Skincare Ecommerce",
    description:
      "Discover NVH® – a high-end skincare brand with a modern, elegant, and seamless shopping experience.",
    url: "https://nvh.nzar.dev",
    siteName: "NVH® – Nzar Velvet Hour",
    images: [
      {
        url: "https://nvh.nzar.dev/cover.jpg",
        width: 1200,
        height: 630,
        alt: "NVH® Luxury Skincare Products",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NVH® • Luxury Skincare Ecommerce",
    description:
      "Shop premium skincare products with NVH® – a luxury Ecommerce brand designed for elegance and performance.",
    images: ["https://nvh.nzar.dev/cover.jpg"],
  },
  alternates: {
    canonical: "https://nvh.nzar.dev",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={`${inter.className} antialiased`}>
        <AppProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </AppProvider>
      </body>
    </html>
  );
}