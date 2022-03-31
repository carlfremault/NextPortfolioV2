import ProjectCard from "../ProjectCard";
import GestionReseauDialog from "./GestionReseauDialog";

const GestionReseauCard = () => {
  return (
    <ProjectCard
      title="Gestion d'un réseau Active Directory"
      subtitle="Réalisation en cours de formation - 30/11/2020"
      image="/imgs/GestionAD.png"
      imageTitle="Schéma du réseau du lycée"
      cardText="Machines virtuelles Windows, Windows Server et Linux, paramétrage Active Directory, lecteurs réseau, dossiers partagés. Cisco Packet Tracer, clonage de VM."
      dialog={GestionReseauDialog}
    />
  );
};

export default GestionReseauCard;
