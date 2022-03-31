import ProjectCard from "../ProjectCard";
import BackupChocDialog from "./BackupChocDialog";

const BackupChocCard = () => {
  return (
    <ProjectCard
      title="Mise en place de solution de sauvegarde d&apos;une application web Azure"
      subtitle="Réalisation en cours de formation - 21/10/2021"
      image="/imgs/PCAChoc.png"
      imageTitle=""
      dialog={BackupChocDialog}
    />
  );
};

export default BackupChocCard;
