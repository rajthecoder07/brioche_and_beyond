import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Brioche & Beyond | Handcrafted Treats in Dehradun",
  description:
    "Freshly baked brioche, wraps, pasta, desserts and summer coolers at Flavors Lane, Dehradun. Handcrafted with local charm and a modern soul.",
  keywords: [
    "Brioche and Beyond",
    "cafe Dehradun",
    "bakery Dehradun",
    "Bombay sandwich Dehradun",
    "Flavors Lane",
    "best cafe Dehradun",
    "pasta Dehradun",
    "artisan bakery",
  ],
  openGraph: {
    title: "Brioche & Beyond | Handcrafted Treats in Dehradun",
    description:
      "Freshly baked brioche, wraps, pasta, desserts and summer coolers. Handcrafted with local charm and a modern soul.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
