import { Metadata } from "next";
import Cenbrap from "src/pages/projects/cenbrap";

export const metadata: Metadata = {
  title: "Cenbrap",
  description:
    "Este aplicativo dará acesso ao Portal do Aluno da Faculdade CENBRAP, instituição de ensino superior credenciada no MEC pela Portaria MEC/GM n. 918/2018.",
  metadataBase: new URL("https://sammer.website/cenbrap"),
  openGraph: {
    siteName: "Cenbrap | Sammer",
    title: "Cenbrap",
    description:
      "Este aplicativo dará acesso ao Portal do Aluno da Faculdade CENBRAP, instituição de ensino superior credenciada no MEC pela Portaria MEC/GM n. 918/2018.",
    images: ["/cenbrap/logo.svg"],
  },
};

export default function CenbrapPage() {
  return <Cenbrap />;
}
