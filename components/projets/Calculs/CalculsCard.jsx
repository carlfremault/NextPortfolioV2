import ProjectCard from "../ProjectCard";
import CalculsDialog from "./CalculsDialog";

const CalculsCard = () => {
  return (
    <ProjectCard
      title="Application console Calculs - C#"
      subtitle="Projet en cours de formation"
      image="/imgs/Calculs.png"
      imageTitle="Capture d'écran application Calculs"
      cardText="Correction d'une application console éducative qui permet d'évaluer ses compétences en calculs suite à la soumission d&apos;un incident utilisateur."
      repoLink="https://github.com/carlfremault/Calculs"
      dialog={CalculsDialog}
    />
  );
};

export default CalculsCard;
