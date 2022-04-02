import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original: "../../imgs/MSProject.png",
    originalHeight: "451px",
    originalWidth: "845px",
    originalAlt: "Vue d'ensemble diagramme de Gantt",
  },
  {
    original: "../../imgs/MSProjectRessources.png",
    originalHeight: "451px",
    originalWidth: "845px",
    originalAlt: "Ressources du projet",
  },
  {
    original: "../../imgs/MSProjectAffectationRess.png",
    originalHeight: "451px",
    originalWidth: "845px",
    originalAlt: "Affectation des ressources",
  },
  {
    original: "../../imgs/MSProjectNetworkDiagram.png",
    originalHeight: "451px",
    originalWidth: "845px",
    originalAlt: "Diagramme de réseau",
  },
  {
    original: "../../imgs/MSProjectStatistiques.png",
    originalHeight: "451px",
    originalWidth: "845px",
    originalAlt: "Statistiques du projet",
  },
  {
    original: "../../imgs/MSProjectReport.png",
    originalHeight: "451px",
    originalWidth: "845px",
    originalAlt: "Rapport vue d'ensemble des coûts",
  },
];

const MSProjectGallery = () => {
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

export default MSProjectGallery;
