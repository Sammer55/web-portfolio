import { Metadata } from "next";
import AirsoftCommander from "src/pages/projects/airsoft-commander";

export const metadata: Metadata = {
  title: "Airsoft Commander",
  description:
    "O Airsoft Commander é um aplicativo projetado com a intenção de unir praticantes de Airsoft de todo o mundo em uma comunidade global.",
  metadataBase: new URL("https://sammer.website/airsoft-commander"),
  openGraph: {
    siteName: "Airsoft Commander | Sammer",
    title: "Airsoft Commander",
    description:
      "O Airsoft Commander é um aplicativo projetado com a intenção de unir praticantes de Airsoft de todo o mundo em uma comunidade global.",
    images: ["/airsoft-commander/logo.svg"],
  },
};

export default function AirsoftCommanderPage() {
  return <AirsoftCommander />;
}
