import Description from "src/components/page/description";
import List from "src/components/page/list";
import Mobile from "src/components/page/mobile";
import Picture from "src/components/page/picture";
import Subtitle from "src/components/page/subtitle";
import Title from "src/components/page/title";
import Web from "src/components/page/web";

const technologies = [
  "React-query: requisições HTTP assíncronas e com cache além de pre-fetchs e infinity querys pra listas páginadas como o feed.",
  "React-hook-form: formulários dinâmicos e componentizado com Controller.",
  "Axios: requisições HTTP.",
  "Weather: api para pegar a temperatura atual de acordo com a latitude e longitude.",
  "Maps: mapa pra ver os marcadores de onde foram feitas publicações (através das coordenadas).",
  "Google places autocomplete: api do google pra trazer os lugares de acordo com o texto digitado.",
  "Linguagem: tradução para inglês, espanhol, português, russo, alemão e japonês.",
  "Tradução de texto: botão que traduz as descrições dos posts pra linguagem armazenada no seu storage.",
  "Cripto: integração com cripto pra saque de moedas obtidas através de avaliações nas publicações.",
  "Push notifications: notificações por push usando Expo e Firebase.",
];

export default function Begrato() {
  return (
    <div className="py-[16px]">
      <Title>Begrato</Title>
      <Picture project="begrato" />
      <Description className="mb-[16px]">
        Rede inteligente de turismo onde o viajante tem uma experiência real de
        lugares e acontecimentos.
      </Description>
      <Description>
        Descubra outras cidades navegando com o seu celular, em cada cidade você
        pode ver as maravilhas que existem, espalhar a palavra sobre o que você
        faz, o que você gosta e garante que os outros possam vê-lo.
      </Description>
      <div className="flex flex-col md:flex-row gap-0 md:gap-8 justify-center">
        <Mobile objectPosition="top" src="/begrato/mockup1.png" alt="Airsoft" />
        <Mobile objectPosition="top" src="/begrato/mockup2.png" alt="Airsoft" />
      </div>
      <Subtitle>Tecnologias utilizadas</Subtitle>
      <List options={technologies} />
      <Web url="https://begrato.com" src="/begrato/mockup3.png" alt="Begrato" />
    </div>
  );
}
