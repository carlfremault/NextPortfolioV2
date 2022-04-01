import ProjectCard from "../ProjectCard";
import GLPIDeploiementDialog from "./GLPIDeploiementDialog";

const GLPIDeploiementCard = () => {
  return (
    <ProjectCard
      title="Déploiement d'application web dans un environnement de préproduction"
      subtitle="Réalisation en cours de formation - 15/04/2021"
      image="/imgs/GLPI.png"
      imageTitle="Capture d'écran GLPI"
      cardText="Utilisation de l'environnement de préproduction web créé auparavant pour déployer la solution GLPI."
      dialog={GLPIDeploiementDialog}
    />
  );
};

export default GLPIDeploiementCard;
