import ProjectCard from "../ProjectCard";
import DenombrementsDialog from "./DenombrementsDialog";

const DenombrementsCard = () => {
  return (
    <ProjectCard
      title="Application console Dénombrements - C#"
      subtitle="Projet en cours de formation"
      image="/imgs/Denombrements.png"
      imageTitle="Capture d'écran application Denombrements"
      cardText="Revue de code d'une application console qui permet de calculer des dénombrements."
      repoLink="https://github.com/carlfremault/Denombrements"
      dialog={DenombrementsDialog}
    />
  );
};

export default DenombrementsCard;