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
  "Maps: mapa pra ver o estado atual e trajeto da viagem através dos marcadores.",
  "Google Directions: api do google que forma um trajeto de uma coordenada à outra usando o Google Maps.",
  "Google places autocomplete: api do google pra trazer os lugares de acordo com o texto digitado.",
  "React native sound: modulo pra dar play em áudio na parte de motoristas quando aparece um pedido novo.",
  "Cadastro multistep: cadastro de motorista com aprovação/recusa de informações e documentos.",
  "Push notifications: notificações por push usando Expo e Firebase.",
];

export default function Cami() {
  return (
    <div className="py-[16px]">
      <Title>Cami</Title>
      <Picture project="cami" />
      <Description className="mb-[16px]">
        Carretos e mudanças, sem demora, quando e onde quiser.
      </Description>
      <Description>
        Aplicação de mobilidade urbana focada em caminhões de todos os portes,
        clientes de todo o Brasil e motoristas confiáveis.
      </Description>
      <div className="flex flex-col md:flex-row gap-0 md:gap-8 justify-center">
        <Mobile objectPosition="top" src="/cami/mockup2.png" alt="Cami" />
        <Mobile objectPosition="top" src="/cami/mockup3.png" alt="Cami" />
      </div>
      <Subtitle>Tecnologias utilizadas</Subtitle>
      <List options={technologies} />
      <Web url="https://camionline.com.br" src="/cami/mockup1.png" alt="Cami" />
    </div>
  );
}
