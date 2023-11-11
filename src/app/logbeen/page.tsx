import { Metadata } from "next";
import LogBeen from "src/pages/projects/logbeen";

export const metadata: Metadata = {
  title: "LogBeen",
  description:
    "Agora você pode reencontrar as pessoas que fizeram parte da sua história! No LogBeen você vai registrar importantes lugares da sua vida! Fazendo os Logs: onde já morou, estudou, trabalhou, ou até mesmo fatos em lugares que você lembra. Com essas marcações você vai finalmente matar saudade da sua história. E se porventura as pessoas esperadas ainda não estão logadas, compartilhe essa idéia ao máximo e faça o LogBeen chegar até elas.",
  metadataBase: new URL("https://sammer.website/logbeen"),
  openGraph: {
    siteName: "LogBeen | Sammer",
    title: "LogBeen",
    description:
      "Agora você pode reencontrar as pessoas que fizeram parte da sua história! No LogBeen você vai registrar importantes lugares da sua vida! Fazendo os Logs: onde já morou, estudou, trabalhou, ou até mesmo fatos em lugares que você lembra. Com essas marcações você vai finalmente matar saudade da sua história. E se porventura as pessoas esperadas ainda não estão logadas, compartilhe essa idéia ao máximo e faça o LogBeen chegar até elas.",
    images: ["/logo.svg"],
  },
};

export default function LogBeenPage() {
  return <LogBeen />;
}
