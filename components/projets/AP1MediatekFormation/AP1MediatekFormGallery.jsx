import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original: "../../imgs/A1Bienvenue.png",
    originalHeight: "451px",
    originalWidth: "845px",
    originalAlt: "Ecran d'accueil de l'application",
  },
  {
    original: "../../imgs/A1Details.png",
    originalHeight: "451px",
    originalWidth: "845px",
    originalAlt: "Ecran affichant les détails d'une formation",
  },
  {
    original: "../../imgs/A1Formations.png",
    originalHeight: "451px",
    originalWidth: "845px",
    originalAlt:
      "Ecran présentant la liste des formations",
  },
  {
    original: "../../imgs/A1Modif.png",
    originalHeight: "451px",
    originalWidth: "845px",
    originalAlt: "Formulaire permettant de modifier ou d'ajouter une formation",
  },
  {
    original: "../../imgs/A1Niveaux.png",
    originalHeight: "451px",
    originalWidth: "845px",
    originalAlt: "Ecran de gestion des niveaux",
  },
  {
    original: "../../imgs/A1Auth.png",
    originalHeight: "451px",
    originalWidth: "845px",
    originalAlt: "Ecran d'authentification",
  },
];

const AP1MediatekFormGallery = () => {
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

export default AP1MediatekFormGallery;
