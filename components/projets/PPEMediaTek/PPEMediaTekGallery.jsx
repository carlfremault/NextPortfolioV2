import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original: "../../imgs/Personnel.png",
    originalHeight: "451px",
    originalWidth: "845px",
    originalAlt: "Ecran d'accueil montrant la liste des membres du personnel",
  },
  {
    original: "../../imgs/AjoutModifPersonnel.png",
    originalHeight: "451px",
    originalWidth: "845px",
    originalAlt: "Ecran permettant de modifier ou d'ajouter un membre",
  },
  {
    original: "../../imgs/Absences.png",
    originalHeight: "451px",
    originalWidth: "845px",
    originalAlt:
      "Ecran montrant les absences enregistrées pour un membre du personnel",
  },
  {
    original: "../../imgs/AjoutModifAbsence.png",
    originalHeight: "451px",
    originalWidth: "845px",
    originalAlt: "Ecran permettant de modifier ou d'ajouter une absence",
  },
  {
    original: "../../imgs/Authentification.png",
    originalHeight: "451px",
    originalWidth: "845px",
    originalAlt: "Ecran d'authentification",
  },
];

const PPEMediaTekGallery = () => {
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

export default PPEMediaTekGallery;
