import { Metadata } from "next";
import Begrato from "src/pages/projects/begrato";

export const metadata: Metadata = {
  title: "Begrato",
  description:
    "Rede inteligente de turismo onde o viajante tem uma experiência real de lugares e acontecimentos.",
  metadataBase: new URL("https://sammer.website/begrato"),
  openGraph: {
    siteName: "Begrato | Sammer",
    title: "Begrato",
    description:
      "Rede inteligente de turismo onde o viajante tem uma experiência real de lugares e acontecimentos.",
    images: ["/logo.svg"],
  },
};

export default function BegratoPage() {
  return <Begrato />;
}
