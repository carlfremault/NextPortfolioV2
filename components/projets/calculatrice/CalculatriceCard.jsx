import ProjectCard from "../ProjectCard";
import CalculatriceDialog from "./CalculatriceDialog";

const CalculatriceCard = () => {
  return (
    <ProjectCard
      title="Calculatrice Simple - Java"
      subtitle="Projet Personnel - 09/02/2021"
      image="/imgs/Calculatrice.png"
      imageTitle="Capture d'écran Calculatrice"
      cardText="Pour ce projet POO j'ai créé une calculatrice en Java, avec une
          (simple) architecture MVC."
      repoLink="https://github.com/carlfremault/Calculatrice"
      dialog={CalculatriceDialog}
    />
  );
};

export default CalculatriceCard;
