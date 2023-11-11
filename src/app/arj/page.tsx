import { Metadata } from "next";
import Arj from "src/pages/projects/arj";

export const metadata: Metadata = {
  title: "ARJ",
  description:
    "O aplicativo permite que os usuários fiquem atualizados sobre todos os passos do processo de Recuperação Judicial e também obtenham informações atualizadas sobre a saúde financeira da empresa em recuperação.",
  metadataBase: new URL("https://sammer.website/arj"),
  openGraph: {
    siteName: "ARJ | Sammer",
    title: "ARJ",
    description:
      "O aplicativo permite que os usuários fiquem atualizados sobre todos os passos do processo de Recuperação Judicial e também obtenham informações atualizadas sobre a saúde financeira da empresa em recuperação.",
    images: ["/arj/logo.svg"],
  },
};

export default function ArjPage() {
  return <Arj />;
}
