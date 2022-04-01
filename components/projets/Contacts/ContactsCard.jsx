import ProjectCard from "../ProjectCard";
import ContactsDialog from "./ContactsDialog";

const ContactsCard = () => {
  return (
    <ProjectCard
      title="Évolution d'application de bureau Contacts - C#"
      subtitle="Réalisation en cours de formation - 02/11/2020"
      image="/imgs/Contacts.png"
      imageTitle="Capture d'écran application Contacts"
      cardText="Evolution d'une application de bureau en quatre sprints. Génération de la documentation technique."
      repoLink="https://github.com/carlfremault/Contacts"
      dialog={ContactsDialog}
    />
  );
};

export default ContactsCard;
