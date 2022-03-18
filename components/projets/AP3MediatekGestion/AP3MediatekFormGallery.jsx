import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original: "../../imgs/A3Application.png",
    originalHeight: "451px",
    originalWidth: "845px",
    originalAlt: "Ecran principal de l'application",
  },
  {
    original: "../../imgs/A3AlerteAbonnements.png",
    originalHeight: "451px",
    originalWidth: "845px",
    originalAlt: "Ecran d'alerte d'expiration d'abonnements",
  },
  {
    original: "../../imgs/A3CommandeLivres.png",
    originalHeight: "451px",
    originalWidth: "845px",
    originalAlt:
      "Ecran montrant la commande de livres",
  },
  {
    original: "../../imgs/A3Suppression.png",
    originalHeight: "451px",
    originalWidth: "845px",
    originalAlt: "Ecran montrant la sécurisation de suppression",
  },
  {
    original: "../../imgs/A3Authentification.png",
    originalHeight: "451px",
    originalWidth: "845px",
    originalAlt: "Ecran d'authentification",
  },
];

const AP3MediatekFormGallery = () => {
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

export default AP3MediatekFormGallery;
