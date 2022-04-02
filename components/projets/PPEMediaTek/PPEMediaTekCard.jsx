import ProjectCard from "../ProjectCard";
import PPEMediaTekDialog from "./PPEMediaTekDialog";

const PPEMediaTekCard = () => {
  return (
    <ProjectCard
      title="Application de bureau - C#, MySQL"
      subtitle="Projet Personnalisé Encadré BTS SIO - 04/04/2021"
      image="/imgs/Personnel.png"
      imageTitle="Application de bureau MediaTek86"
      cardText="Pour cet Atelier Professionnel nous avons créé une application
          C# liée à une base de données MySQL, permettant la gestion des membres du personnel d'une médiathèque, ainsi que de leurs absences."
      repoLink="https://github.com/carlfremault/CNED_Atelier2_MediaTek86"
      dialog={PPEMediaTekDialog}
    />
  );
};

export default PPEMediaTekCard;
