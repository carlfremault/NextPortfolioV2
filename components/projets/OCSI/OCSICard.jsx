import ProjectCard from "../ProjectCard";
import OCSIDialog from "./OCSIDialog";

const OCSICard = () => {
  return (
    <ProjectCard
      title="Gestion d'inventaire de parc informatique - OCS Inventory"
      subtitle="Réalisation en cours de formation - 11/09/2020"
      image="/imgs/OCSI.png"
      imageTitle="Capture d'écran OCS Inventory"
      cardText="Exploration du logiciel de gestion de parc informatique OCS Inventory."
      dialog={OCSIDialog}
    />
  );
};

export default OCSICard;
