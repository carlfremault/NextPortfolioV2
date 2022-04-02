import ProjectCard from "../ProjectCard";
import GLPIDialog from "./GLPIDialog";

const GLPICard = () => {
  return (
    <ProjectCard
      title="Gestion d'habilitations - GLPI"
      subtitle="Réalisation en cours de formation - 25/02/2021"
      image="/imgs/GLPI.png"
      imageTitle="Capture d'écran GLPI"
      cardText="Utilisation d'un serveur GLPI sur machine virtuelle pour gérer un parc informatique et les habilitations des intervenants."
      dialog={GLPIDialog}
    />
  );
};

export default GLPICard;
