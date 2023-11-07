import Description from "src/components/page/description";
import List from "src/components/page/list";
import Mobile from "src/components/page/mobile";
import Picture from "src/components/page/picture";
import Subtitle from "src/components/page/subtitle";
import Title from "src/components/page/title";
import Web from "src/components/page/web";

const technologies = [
  "React-query: requisições HTTP assíncronas e com cache.",
  "React-hook-form: formulários dinâmicos e componentizado com Controller.",
  "Axios: requisições HTTP.",
  "Socket.io: eventos em realtime no Chat, Online/Offline e in-app-notifications.",
  "Manipulação de imagem: para criar e editar imagens.",
  "Listas paginadas: para exibir os dados sob demanda pra não pesar no back-end.",
  "Sistema de cadastro multistep: criação do perfil de forma gradual, salvando o step atual e retornando caso não tenha sido finalizado.",
  "Chat: com envio de mensagens de texto, imagens e áudio.",
  "Linguagem: com tradução pra inglês e espanhol utilizando i18next.",
];

export default function CsdReal() {
  return (
    <div className="py-[16px]">
      <Title>CSD Real</Title>
      <Picture project="csd-real" />
      <Description>
        O CSD Real é um novo aplicativo de relacionamentos que conecta babys com
        daddys/mommys de todo o mundo. O objetivo é criar um ambiente seguro e
        confortável para que os usuários possam encontrar o par perfeito e
        vivenciar o amor.
      </Description>
      <Mobile
        src="/csd-real/mockup1.png"
        alt="Mockup de um celular exibindo um Chat onde tem uma conversa entre uma Baby e um Daddy."
      />
      <Subtitle>Tecnologias utilizadas</Subtitle>
      <List options={technologies} />
      <Web
        src="/csd-real/webmockup1.png"
        url="https://csdreal.com.br"
        alt="Mockup de um navegador na página do CSD Real no perfil de um usuário chamado 'Pedro'."
      />
    </div>
  );
}
