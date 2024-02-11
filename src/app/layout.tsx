import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "src/components/header";
import Footer from "src/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home | Sammer",
  description: "Bla bla bla bla",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/logo.svg" sizes="any" />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
      />
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
