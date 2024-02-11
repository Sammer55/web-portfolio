import Description from "src/components/page/description";
import List from "src/components/page/list";
import Mobile from "src/components/page/mobile";
import Picture from "src/components/page/picture";
import Subtitle from "src/components/page/subtitle";
import Title from "src/components/page/title";
import Web from "src/components/page/web";

const technologies = [
  "React query: cacheamento de dados.",
  "Axios: requisições HTTP.",
  "React Native Chart Kit: biblioteca de gráficos usados nos demonstradores financeiros.",
  "Expo local authentication: login local usando biometrica ou faceid.",
];

export default function Arj() {
  return (
    <div className="py-[16px]">
      <Title>ARJ</Title>
      <Picture project="arj" />
      <Description className="mb-[16px]">
        O aplicativo permite que os usuários fiquem atualizados sobre todos os
        passos do processo de Recuperação Judicial e também obtenham informações
        atualizadas sobre a saúde financeira da empresa em recuperação.
      </Description>
      <div className="flex flex-col md:flex-row gap-0 md:gap-8 justify-center">
        <Mobile objectPosition="top" src="/arj/mockup1.png" alt="Arj" />
        <Mobile objectPosition="top" src="/arj/mockup2.png" alt="Arj" />
      </div>
      <Subtitle>Tecnologias utilizadas</Subtitle>
      <List options={technologies} />
    </div>
  );
}
