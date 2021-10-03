import Lightbox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css";

const sdi = () => {
  const images = [
    {
      url: "/imgs/SDIFrontpage.png",
      title: "SDI Page d'accueil",
    },
    {
      url: "/imgs/SDISolutions.png",
      title: "SDI page Solutions",
    },
    {
      url: "/imgs/SDIMarches.png",
      title: "SDI page Marchés",
    },
    {
      url: "/imgs/SDIApropos.png",
      title: "SDI page A propos",
    },
    {
      url: "/imgs/SDIContact.png",
      title: "SDI page Contact",
    },
    {
      url: "/imgs/SDIConnect.png",
      title: "SDI page Connexion",
    },
  ];
  return <Lightbox images={images} />;
};

export default sdi;
