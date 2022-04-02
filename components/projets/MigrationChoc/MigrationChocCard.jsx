import ProjectCard from "../ProjectCard";
import MigrationChocDialog from "./MigrationChocDialog";

const MigrationChocCard = () => {
  return (
    <ProjectCard
      title="Migration dans le cloud Azure d'une application web"
      subtitle="Réalisation en cours de formation - 21/10/2021"
      image="/imgs/PCAChoc.png"
      imageTitle="Capture d'écran site Chocolatein"
      cardText="Création d'un App Service, Resource Group et base de données à l'aide du CLI Azure, paramétrage du pare-feu Azure. Étude de mise à l'échelle."
      dialog={MigrationChocDialog}
    />
  );
};

export default MigrationChocCard;
