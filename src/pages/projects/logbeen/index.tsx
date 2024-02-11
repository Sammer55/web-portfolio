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
  "Maps: mapa pra ver as publicações e lembranças dos usuários.",
  "Google places autocomplete: api do google pra trazer os lugaresde acordo com o texto digitado.",
  "Push notifications: notificações por push usando Expo e Firebase.",
];

export default function Logbeen() {
  return (
    <div className="py-[16px]">
      <Title>LogBeen</Title>
      <Picture project="logbeen" />
      <Description className="mb-[16px]">
        Agora você pode reencontrar as pessoas que fizeram parte da sua
        história! No LogBeen você vai registrar importantes lugares da sua vida!
        Fazendo os Logs: onde já morou, estudou, trabalhou, ou até mesmo fatos
        em lugares que você lembra. Com essas marcações você vai finalmente
        matar saudade da sua história. E se porventura as pessoas esperadas
        ainda não estão logadas, compartilhe essa idéia ao máximo e faça o
        LogBeen chegar até elas.
      </Description>
      <div className="flex flex-col md:flex-row gap-0 md:gap-8 justify-center">
        <Mobile
          objectPosition="bottom"
          src="/logbeen/mockup1.png"
          alt="Logbeen"
        />
        <Mobile
          objectPosition="bottom"
          src="/logbeen/mockup2.png"
          alt="Logbeen"
        />
      </div>
      <Subtitle>Tecnologias utilizadas</Subtitle>
      <List options={technologies} />
      <Web
        url="https://logbeen.com.br/inicio"
        src="/logbeen/mockup3.png"
        alt="Logbeen"
      />
    </div>
  );
}
