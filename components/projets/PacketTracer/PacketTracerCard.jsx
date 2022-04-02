import ProjectCard from "../ProjectCard";
import PacketTracerDialog from "./PacketTracerDialog";

const PacketTracerCard = () => {
  return (
    <ProjectCard
      title="Gestion d'incidents dans un réseau - Cisco Packet Tracer"
      subtitle="Réalisation en cours de formation - 28/12/2020"
      image="/imgs/PacketTracer.png"
      imageTitle="Réseau dans Cisco Packet Tracer"
      cardText="Prise en charge de tickets d'incidents concernant des pannes matérielles et logicielles d'un réseau informatique. Diagnostique, puis  correction ou escalade."
      dialog={PacketTracerDialog}
    />
  );
};

export default PacketTracerCard;
