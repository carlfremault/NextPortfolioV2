import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original: "../../imgs/Personnel.png",
    originalHeight: "451px",
    originalWidth: "845px",
  },
  {
    original: "../../imgs/AjoutModifPersonnel.png",
    originalHeight: "451px",
    originalWidth: "845px",
  },
  {
    original: "../../imgs/Absences.png",
    originalHeight: "451px",
    originalWidth: "845px",
  },
  {
    original: "../../imgs/AjoutModifAbsence.png",
    originalHeight: "451px",
    originalWidth: "845px",
  },
  {
    original: "../../imgs/Authentification.png",
    originalHeight: "451px",
    originalWidth: "845px",
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
