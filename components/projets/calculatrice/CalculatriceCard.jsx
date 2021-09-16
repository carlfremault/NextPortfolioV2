import ProjectCard from "../ProjectCard";
import CalculatriceDialog from "./CalculatriceDialog";

const CalculatriceCard = () => {
  return (
    <ProjectCard
      title="Calculatrice Simple - Java"
      subtitle="Projet Personnel"
      image="/imgs/Calculatrice.png"
      imageTitle="Capture d'écran Calculatrice"
      imageHeight={200}
      cardText="Pour ce projet POO j'ai créé une calculatrice en Java, avec une
          (simple) architecture MVC."
      repoLink="https://github.com/carlfremault/Calculatrice"
      dialog={CalculatriceDialog}
    />
  );
};

export default CalculatriceCard;
