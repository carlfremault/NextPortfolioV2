import ProjectCard from "../ProjectCard";
import CalculsDialog from "./CalculsDialog";

const CalculsCard = () => {
  return (
    <ProjectCard
      title="Prise en charge d'incidents sur une application console Calculs - C#"
      subtitle="Réalisation en cours de formation - 12/10/2020"
      image="/imgs/Calculs.png"
      imageTitle="Capture d'écran application Calculs"
      cardText="Correction d'une application console éducative qui permet d'évaluer ses compétences en calculs suite à la soumission d&apos;un incident utilisateur."
      repoLink="https://github.com/carlfremault/Calculs"
      dialog={CalculsDialog}
    />
  );
};

export default CalculsCard;
