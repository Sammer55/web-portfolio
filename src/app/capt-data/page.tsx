import { Metadata } from "next";
import CaptData from "src/pages/projects/capt-data";

export const metadata: Metadata = {
  title: "Capt Data",
  description:
    "Aplicativo de coleta de dados em campo com funcionamento offline e online, possibilitando a coleta das informações em qualquer lugar mesmo que sem conexão à internet.",
  metadataBase: new URL("https://sammer.website/capt-data"),
  openGraph: {
    siteName: "Capt Data | Sammer",
    title: "Capt Data",
    description:
      "Aplicativo de coleta de dados em campo com funcionamento offline e online, possibilitando a coleta das informações em qualquer lugar mesmo que sem conexão à internet.",
    images: ["/capt-data/logo.svg"],
  },
};

export default function CaptDataPage() {
  return <CaptData />;
}
