import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "src/components/header";
import Footer from "src/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Home | Sammer",
    template: "%s | Sammer",
  },
  description: "Sammer Portfolio",
  metadataBase: new URL("https://sammer.website"),
  openGraph: {
    images: ["/avatar.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/logo.svg" sizes="any" />
      <body
        className={`${inter.className} m-auto max-w-[1180px] p-[8px] tracking-wide`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
