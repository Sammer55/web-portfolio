import Description from "src/components/page/description";
import List from "src/components/page/list";
import Picture from "src/components/page/picture";
import Subtitle from "src/components/page/subtitle";
import Title from "src/components/page/title";
import Web from "src/components/page/web";

const technologies = [
  "React-query: requisições HTTP assíncronas e com cache.",
  "React-hook-form: formulários dinâmicos e componentizado com Controller.",
  "Axios: requisições HTTP.",
  "Framer Motion: animações.",
  "Material UI: componentes prontos pra agilizar o desenvolvimento.",
];

export default function LionTax() {
  return (
    <div className="py-[16px]">
      <Title>Lion Tax</Title>
      <Picture project="lion-tax" />
      <Description className="mb-[24px]">
        Lion Tax é um projeto inovador desenvolvido para facilitar e otimizar a
        gestão de impostos de Pessoa Física, proporcionando eficiência,
        segurança e tranquilidade aos contabilistas e contribuintes. Com a
        missão de simplificar a vida dos usuários, a Lion Tax oferece soluções
        inteligentes que revolucionam a forma como lidamos com obrigações
        fiscais.
      </Description>
      <Web
        src="/lion-tax/saida-definitiva.png"
        url="https://lion.tax"
        alt="Mockup de um navegador na página do Lion Tax na parte de saída definitiva do País"
      />
      <Subtitle>Tecnologias utilizadas</Subtitle>
      <List options={technologies} />
    </div>
  );
}
