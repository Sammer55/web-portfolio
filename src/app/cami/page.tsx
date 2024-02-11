import { Metadata } from "next";
import Cami from "src/pages/projects/cami";

export const metadata: Metadata = {
  title: "Cami",
  description: "Carretos e mudanças, sem demora, quando e onde quiser.",
  metadataBase: new URL("https://sammer.website/cami"),
  openGraph: {
    siteName: "Cami | Sammer",
    title: "Cami",
    description: "Carretos e mudanças, sem demora, quando e onde quiser.",
    images: ["/cami/logo.svg"],
  },
};

export default function CamiPage() {
  return <Cami />;
}
