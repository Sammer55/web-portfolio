import { Metadata } from "next";
import Advlink from "src/pages/projects/advlink";

export const metadata: Metadata = {
  title: "Advlink",
  description:
    "Aplicação para advogados atender demandas de outros advogados. App que facilita a conexão entre advogados, correspondente jurídicos, bacharéis em direito e escritórios de advocacia, contribuindo para a modernização do mercado jurídico. Uma plataforma prática que recebe e disponibiliza demandas jurídicas.",
  metadataBase: new URL("https://sammer.website/advlink"),
  openGraph: {
    siteName: "Advlink | Sammer",
    title: "Advlink",
    description:
      "Aplicação para advogados atender demandas de outros advogados. App que facilita a conexão entre advogados, correspondente jurídicos, bacharéis em direito e escritórios de advocacia, contribuindo para a modernização do mercado jurídico. Uma plataforma prática que recebe e disponibiliza demandas jurídicas.",
    images: ["/logo.svg"],
  },
};

export default function AdvlinkPage() {
  return <Advlink />;
}
