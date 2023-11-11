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
  "Stripe: pagamento pelas demandas.",
  "Push notifications: notificações por push usando Expo e Firebase.",
  "Role: verificações por role sobre a tela onde o usuário estava pra exibir ou não componentes.",
];

export default function Advlink() {
  return (
    <div className="py-[16px]">
      <Title>Advlink</Title>
      <Picture project="advlink" />
      <Description className="mb-[16px]">
        Aplicação para advogados atender demandas de outros advogados. App que
        facilita a conexão entre advogados, correspondente jurídicos, bacharéis
        em direito e escritórios de advocacia, contribuindo para a modernização
        do mercado jurídico. Uma plataforma prática que recebe e disponibiliza
        demandas jurídicas.
      </Description>
      <div className="flex flex-col md:flex-row gap-0 md:gap-8 justify-center">
        <Mobile objectPosition="top" src="/advlink/mockup1.png" alt="Advlink" />
        <Mobile objectPosition="top" src="/advlink/mockup2.png" alt="Advlink" />
      </div>
      <Subtitle>Tecnologias utilizadas</Subtitle>
      <List options={technologies} />
      <Web
        url="https://advlink.adv.br"
        src="/advlink/mockup3.png"
        alt="Advlink"
      />
    </div>
  );
}
