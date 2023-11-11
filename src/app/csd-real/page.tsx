import { Metadata } from "next";
import CsdReal from "src/pages/projects/csd-real";

export const metadata: Metadata = {
  title: "CSD Real",
  description:
    "O CSD Real é um novo aplicativo de relacionamentos que conecta babys com daddys/mommys de todo o mundo. O objetivo é criar um ambiente seguro e confortável para que os usuários possam encontrar o par perfeito e vivenciar o amor.",
  metadataBase: new URL("https://sammer.website/csd-real"),
  openGraph: {
    siteName: "CSD Real | Sammer",
    title: "CSD Real",
    description:
      "O CSD Real é um novo aplicativo de relacionamentos que conecta babys com daddys/mommys de todo o mundo. O objetivo é criar um ambiente seguro e confortável para que os usuários possam encontrar o par perfeito e vivenciar o amor.",
    images: ["/logo.png"],
  },
};

export default function CsdRealPage() {
  return <CsdReal />;
}
