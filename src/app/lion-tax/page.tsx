import { Metadata } from "next";
import LionTax from "src/pages/projects/lion-tax";

export const metadata: Metadata = {
  title: "Lion Tax",
  description:
    "Lion Tax é um projeto inovador desenvolvido para facilitar e otimizar a gestão de impostos de Pessoa Física, proporcionando eficiência, segurança e tranquilidade aos contabilistas e contribuintes. Com a missão de simplificar a vida dos usuários, a Lion Tax oferece soluções inteligentes que revolucionam a forma como lidamos com obrigações fiscais.",
  metadataBase: new URL("https://sammer.website/lion-tax"),
  openGraph: {
    siteName: "Lion Tax | Sammer",
    title: "Lion Tax",
    description:
      "Lion Tax é um projeto inovador desenvolvido para facilitar e otimizar a gestão de impostos de Pessoa Física, proporcionando eficiência, segurança e tranquilidade aos contabilistas e contribuintes. Com a missão de simplificar a vida dos usuários, a Lion Tax oferece soluções inteligentes que revolucionam a forma como lidamos com obrigações fiscais.",
    images: ["/logo.svg"],
  },
};

export default function LionTaxPage() {
  return <LionTax />;
}
