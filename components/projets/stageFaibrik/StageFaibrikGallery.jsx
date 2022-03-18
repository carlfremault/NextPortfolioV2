import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original: "../../imgs/faibrikAbout.png",
    originalHeight: "451px",
    originalWidth: "845px",
    originalAlt: "Ecran de présentation de l'application Teams",
  },
  {
    original: "../../imgs/faibrikBienvenue.png",
    originalHeight: "451px",
    originalWidth: "845px",
    originalAlt: "Message d'accueil du bot",
  },
  {
    original: "../../imgs/faibrikMenu.png",
    originalHeight: "451px",
    originalWidth: "845px",
    originalAlt:
      "Menu des différentes possibilités du bot",
  },
  {
    original: "../../imgs/faibrikAlerte.png",
    originalHeight: "451px",
    originalWidth: "845px",
    originalAlt: "Exemple d'alerte MS Teams Bot, priorité normale",
  },
  {
    original: "../../imgs/faibrikAlerteFatale.png",
    originalHeight: "451px",
    originalWidth: "845px",
    originalAlt: "Exemple d'alerte MS Teams Bot, priorité élévée",
  },
  {
    original: "../../imgs/faibrikNouveauClient.png",
    originalHeight: "451px",
    originalWidth: "845px",
    originalAlt: "Invitation pour visiter le site si l'utilisateur n'est pas client",
  },
  {
    original: "../../imgs/faibrikDesabonnement.png",
    originalHeight: "451px",
    originalWidth: "845px",
    originalAlt: "Gestion de demande de désabonnement",
  },
];

const StageFaibrikGallery = () => {
  return (
    <ImageGallery
      items={images}
      showBullets={true}
      showIndex={true}
      showThumbnails={false}
      lazyLoad={true}
      showPlayButton={false}
      showFullscreenButton={false}
    />
  );
};

export default StageFaibrikGallery;
