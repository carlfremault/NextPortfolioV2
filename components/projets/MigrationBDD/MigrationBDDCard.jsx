import ProjectCard from "../ProjectCard";
import MigrationBDDDialog from "./MigrationBDDDialog";

const MigrationBDDCard = () => {
  return (
    <ProjectCard
      title="Migration d'une base de données MariaDB vers PostgreSQL dans le cloud Azure, gestion de sauvegardes"
      subtitle="Réalisation en cours de formation - 30/01/2022"
      image="/imgs/MigrationBDD.png"
      imageTitle="Capture d'écran Azure"
      cardText="Mise en place de serveur PostgreSQL, migration depuis MariaDB. Sauvegarde et restauration Azure, gestion de replica."
      dialog={MigrationBDDDialog}
    />
  );
};

export default MigrationBDDCard;
