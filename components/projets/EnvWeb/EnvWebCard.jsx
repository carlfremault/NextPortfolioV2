import ProjectCard from "../ProjectCard";
import EnvWebDialog from "./EnvWebDialog";

const EnvWebCard = () => {
  return (
    <ProjectCard
      title="Installation d'un service web"
      subtitle="Réalisation en cours de formation - 12/04/2021"
      image="/imgs/EnvWeb.png"
      imageTitle="Capture d'écran application web"
      cardText="Mise en place d'un service web dans un environnement technique de préproduction."
      dialog={EnvWebDialog}
    />
  );
};

export default EnvWebCard;
