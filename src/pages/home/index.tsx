import Card from "src/components/card";
import User from "./user";

export default function Home() {
  return (
    <div className="pt-[60px] pb-[16px]">
      <User />

      <div className="mb-[16px]">
        <h2 className="text-lg font-semibold">Minhas contribuições</h2>
        <p className="text-sm font-light">
          Alguns dos projetos em que trabalhei
        </p>
      </div>

      <div className="space-y-[16px]">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card
            project="csd-real"
            title="CSD Real"
            description="Sugar Daddy: Faça dinheiro e aproveite o doce da vida!"
            techs={["android", "ios", "react", "javascript"]}
          />

          <Card
            project="lion-tax"
            title="Lion Tax"
            description="Um leão amigo do contribuinte e do contabilista."
            techs={["react", "next", "typescript"]}
          />

          <Card
            project="airsoft-commander"
            title="Airsoft Commander"
            description="Gerencie sua equipe e seus eventos de Airsoft."
            techs={["android", "javascript"]}
          />

          <Card
            project="begrato"
            title="Begrato"
            description="Rede social de turismo autêntico e real, sem fake."
            techs={["android", "ios", "react", "typescript"]}
          />

          <Card
            project="cami"
            title="Cami"
            description="Mudança feita fácil: Tipo Uber, mas pro sofá!"
            techs={["android", "ios", "typescript"]}
          />

          <Card
            project="arj"
            title="ARJ"
            description="Administração judicial para juízes, advogados e credores."
            techs={["android", "ios", "typescript"]}
          />

          <Card
            project="logbeen"
            title="LogBeen"
            description="Guarde suas memórias e reencontre antigos amigos."
            techs={["android", "react", "next", "typescript"]}
          />

          <Card
            project="capt-data"
            title="Capt Data"
            description="Registro de amostras de solo com facilidade."
            techs={["android", "firebase"]}
          />

          <Card
            project="advlink"
            title="AdvLink"
            description="Conectando a advocacia em todo o Brasil."
            techs={["android", "ios", "javascript"]}
          />

          <Card
            project="cenbrap"
            title="Cenbrap"
            description="Portal do Aluno da Faculdade CENBRAP"
            techs={["android", "ios", "javascript"]}
          />
        </div>
      </div>
    </div>
  );
}
