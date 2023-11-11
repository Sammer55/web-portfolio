import Description from "src/components/page/description";
import List from "src/components/page/list";
import Mobile from "src/components/page/mobile";
import Picture from "src/components/page/picture";
import Subtitle from "src/components/page/subtitle";
import Title from "src/components/page/title";
import Web from "src/components/page/web";

const technologies = [
  "React-hook-form: formulários dinâmicos e componentizado com Controller.",
  "Axios: requisições HTTP.",
  "Offline: uso do async-storage pra salvar coletas que não foram enviadas por falta de internet, fazendo depois a sincronização e enviando os dados quando a conexão retornar e o app estiver aberto.",
];

export default function CaptData() {
  return (
    <div className="py-[16px]">
      <Title>Capt Data</Title>
      <Picture project="capt-data" />
      <Description className="mb-[16px]">
        Aplicativo de coleta de dados em campo com funcionamento offline e
        online, possibilitando a coleta das informações em qualquer lugar mesmo
        que sem conexão à internet.
      </Description>
      <div className="flex flex-col md:flex-row gap-0 md:gap-8 justify-center">
        <Mobile
          objectPosition="top"
          src="/capt-data/mockup1.png"
          alt="Capt data"
        />
      </div>
      <Subtitle>Tecnologias utilizadas</Subtitle>
      <List options={technologies} />
    </div>
  );
}
