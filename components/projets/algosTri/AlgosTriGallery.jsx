import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original: "../../imgs/Menu.png",
    originalWidth: "839px",
    originalHeight: "506px",
    originalAlt: "Menu permettant de choisir un des algorithmes",
  },
  {
    original: "../../imgs/Saisie.png",
    originalWidth: "839px",
    originalHeight: "506px",
    originalAlt: "Ecran illustrant la saisie des entiers",
  },
  {
    original: "../../imgs/Selection.png",
    originalWidth: "839px",
    originalHeight: "506px",
    originalAlt: "Ecran montrant le Tri par Sélection",
  },
  {
    original: "../../imgs/Insertion.png",
    originalWidth: "839px",
    originalHeight: "506px",
    originalAlt: "Ecran montrant le Tri par Insertion",
  },
  {
    original: "../../imgs/Bulles.png",
    originalWidth: "839px",
    originalHeight: "506px",
    originalAlt: "Ecran montrant le Tri à Bulles",
  },
];

const AlgosTriGallery = () => {
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

export default AlgosTriGallery;
