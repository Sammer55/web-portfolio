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
  description:
    "Desenvolvedor Front-end com 3 anos de experiência. Especialista em HTML, CSS, JavaScript, TypeScript, ReactJs, e NextJs.",
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
    <html lang="pt-BR">
      <link rel="icon" href="/logo.svg" sizes="any" />
      <body className={`${inter.className} m-auto max-w-[1180px] p-[8px]`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
