import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Oogyy — The Way to Travel Today",
  description:
    "Find co-travelers, join trip communities, and plan adventures together. Oogyy connects travelers ready to explore. Download the app and start your journey.",
  openGraph: {
    title: "Oogyy — The Way to Travel Today",
    description:
      "Find co-travelers, join trip communities, and plan adventures together. Download the app.",
    url: "https://oogyy.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased grain">
        {children}
      </body>
    </html>
  );
}
