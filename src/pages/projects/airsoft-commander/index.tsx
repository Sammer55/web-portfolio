import Description from "src/components/page/description";
import List from "src/components/page/list";
import Mobile from "src/components/page/mobile";
import Picture from "src/components/page/picture";
import Subtitle from "src/components/page/subtitle";
import Title from "src/components/page/title";

const technologies = [
  "React-query: requisições HTTP assíncronas e com cache.",
  "React-hook-form: formulários dinâmicos e componentizado com Controller.",
  "Axios: requisições HTTP.",
  "Date Fns: formatação de datas.",
  "Stripe: planos mensais de gerente de equipe ou organizador de eventos.",
  "HTML to PDF: converter html em pdf para listas de participantes dos eventos.",
  "Role: verificações por role sobre a tela onde o usuário estava pra exibir ou não componentes.",
  "Push notifications: notificações por push usando Expo e Firebase.",
];

export default function AirsoftCommander() {
  return (
    <div className="py-[16px]">
      <Title>Airsoft Commander</Title>
      <Picture project="airsoft-commander" />
      <Description className="mb-[16px]">
        O Airsoft Commander é um aplicativo projetado com a intenção de unir
        praticantes de Airsoft de todo o mundo em uma comunidade global.
      </Description>
      <Description>
        O app permite gerenciar equipes e eventos. Os usuários podem interagir
        com as equipes, solicitando permissão pra participar, tendo acesso à
        eventos exclusivos da equipe, entre outras funcionalidades. No evento,
        os usuários podem interagir marcando presença, visualizando a lista de
        confirmados, o valor da inscrição, a quantidade de visualizações e o
        endereço. O organizador do evento tem controle total sobre as presenças
        dos membros.
      </Description>
      <div className="flex flex-col md:flex-row gap-0 md:gap-8 justify-center">
        <Mobile
          objectPosition="top"
          src="/airsoft-commander/mockup1.png"
          alt="Airsoft"
        />
        <Mobile
          objectPosition="top"
          src="/airsoft-commander/mockup2.png"
          alt="Airsoft"
        />
      </div>
      <Subtitle>Tecnologias utilizadas</Subtitle>
      <List options={technologies} />
    </div>
  );
}
