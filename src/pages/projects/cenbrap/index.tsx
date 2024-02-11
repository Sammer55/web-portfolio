import Description from "src/components/page/description";
import List from "src/components/page/list";
import Mobile from "src/components/page/mobile";
import Picture from "src/components/page/picture";
import Subtitle from "src/components/page/subtitle";
import Title from "src/components/page/title";
import Web from "src/components/page/web";

const technologies = [
  "Web view: visualização por meio de webview do portal do aluno.",
];

export default function LionTax() {
  return (
    <div className="py-[16px]">
      <Title>Cenbrap</Title>
      <Picture project="cenbrap" />
      <Description className="mb-[24px]">
        Este aplicativo dará acesso ao Portal do Aluno da Faculdade CENBRAP,
        instituição de ensino superior credenciada no MEC pela Portaria MEC/GM
        n. 918/2018.
      </Description>
      <Mobile src="/cenbrap/mockup1.png" alt="Cenbrap" />
      <Subtitle>Tecnologias utilizadas</Subtitle>
      <List options={technologies} />
    </div>
  );
}
