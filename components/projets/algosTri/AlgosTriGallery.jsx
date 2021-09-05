import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original: "../../imgs/Menu.png",
    originalWidth: "839px",
    originalHeight: "506px",
  },
  {
    original: "../../imgs/Saisie.png",
    originalWidth: "839px",
    originalHeight: "506px",
  },
  {
    original: "../../imgs/Selection.png",
    originalWidth: "839px",
    originalHeight: "506px",
  },
  {
    original: "../../imgs/Insertion.png",
    originalWidth: "839px",
    originalHeight: "506px",
  },
  {
    original: "../../imgs/Bulles.png",
    originalWidth: "839px",
    originalHeight: "506px",
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
