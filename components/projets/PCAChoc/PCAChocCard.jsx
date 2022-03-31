import ProjectCard from "../ProjectCard";
import PCAChocDialog from "./PCAChocDialog";

const PCAChocCard = () => {
  return (
    <ProjectCard
      title="Audit PCA d'une application web hébergée dans le cloud"
      subtitle="Réalisation en cours de formation - 26/09/2021"
      image="/imgs/PCAChoc.png"
      imageTitle="Capture d'écran site Chocolatein"
      cardText="Audit interne de Plan de Continuité d'Activité d'une application web hébergé dans le cloud Azure"
      dialog={PCAChocDialog}
    />
  );
};

export default PCAChocCard;
