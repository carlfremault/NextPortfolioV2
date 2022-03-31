import ProjectCard from "../ProjectCard";
import MSProjectDialog from "./MSProjectDialog";

const MSProjectCard = () => {
  return (
    <ProjectCard
      title="Gestion et suivi de projet - MS Project"
      subtitle="Réalisation en cours de formation - 11/04/2021"
      image="/imgs/MSProject.png"
      imageTitle="Capture d'écran MSProject"
      cardText="Pendant nos cours nous avons appris à faire la gestion et suivi d'un projet à l'aide de MS Project"
      dialog={MSProjectDialog}
    />
  );
};

export default MSProjectCard;
