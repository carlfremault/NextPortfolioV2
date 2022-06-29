const cardTitleFR = "Création de site portfolio - Next.js";
const cardTitleGB = "Creation of a portfolio website - Next.js";
const cardSubTitleFR = "Projet Personnel - 16/09/2021";
const cardSubTitleGB = "Personal project - 16/09/2021";
const cardImageTitleFR = "Capture d'écran portfolio Carl Fremault";
const cardImageTitleGB = "Screenshot portfolio Carl Fremault";
const cardTextFR = "A l'issue de mon stage, où j'ai pu mieux me familiariser avec Next.js / React et Material-UI, j'ai décidé de refaire mon portfolio fait auparavant en Wordpress.";
const cardTextGB = "After my first year internship, during which I learned to work with Next.js/React and Material-UI, I decided to remake my portfolio website, which was previously made with Wordpress.";
const dialogDateFR = "16 septembre 2021";
const dialogDateGB = "16 September 2021";
const dialogTextFR = ["Après mes 6 semaines de stage chez Sport Data Intelligence, où j'ai créé leur nouveau site vitrine en utilisant Next.js, React et Material-UI, j'ai décidé de refaire mon portfolio Wordpress avec ces mêmes technologies.", "Pour ce projet je me suis concentré sur quelques points :"];
const dialogTextGB = ["After my 6-week internship at Sport Data Intelligence, where I made their new showcase website using Next.js, React and Material-UI, I decided to remake my (formerly) Wordpress portfolio with these same technologies", "For this project I wanted to concentrate on a few key points:"];
const dialogTextStyleFR = "Material-UI propose de différentes façons pour customiser le style des éléments. Pour ce projet j'ai choisi de tout centraliser au maximum dans un 'custom theme', facilitant ainsi toute modification ultérieure.";
const dialogTextStyleGB = "Material-UI proposes different ways to customize the site's appearance. For this project I chose to centralize all style elements in a custom theme, thus facilitating any later modifications.";
const dialogTextContextFR = ["J'avais déjà utilisé React Context dans quelques petites exercices, puis c'était une bonne occasion d'utiliser cette technologie dans un 'vrai' projet (même s'il s'agit d'un site statique). Ainsi j'ai créé deux thèmes différents qui sont insérés dans l'application en utilisant une implémentation (simple) du hook useContext.", "Du coup l'application est entouré de deux 'providers':"];
const dialogTextContextGB = ["I'd already used React Context in a few small exercises, so it was a good opportunity to use this technology in a real project (even if it's only a static website). Therefore I created two different themes which are inserted in the application using a (simple) implementation of the useContext hook.", "Two providers surround the application:"]
const dialogListContextFR = [
    {
        text: "La première couche (intérieure) utilise le 'ThemeProvider' de Material-UI et reçoit un des deux thèmes en fonction du Context.", 
    },
    {
        text: "La deuxième couche (extérieure) utilise le 'ContextProvider'.",
    }
];
const dialogListContextGB = [
    {
        text: "The first (interior) layer uses Material-UI's ThemeProvider and injects one of two themes according to the Context.",
    },
    {
        text: "The second (exterior) layer uses a ContextProvider",
    }
];
const dialogTextPackageFR = ["Je voulais m'entrainer à utiliser des paquets npm. Les paquets que j'ai utilisé pour ce projet :"];
const dialogTextPackageGB = ["I wanted to try and use some npm packages. These are the packages I used:"];
const dialogListPackageFR = [
    {
        linkRef: "https://www.npmjs.com/package/react-scroll",
        linkText: "react-scroll",
        text: "pour les transitions entre les différentes sections de la page"
    },
    {
        linkRef: "https://www.npmjs.com/package/react-player",
        linkText: "react-player",
        text: "pour insérer la vidéo de démonstration de certains projets pour le CNED"
    },
    {
        linkRef: "https://www.npmjs.com/package/react-image-gallery",
        linkText: "react-image-gallery",
        text: "pour les galleries d'images pour certains projets"
    }
];
const dialogListPackageGB = [
    {
        linkRef: "https://www.npmjs.com/package/react-scroll",
        linkText: "react-scroll",
        text: "for the transitions between the different page sections"
    },
    {
        linkRef: "https://www.npmjs.com/package/react-player",
        linkText: "react-player",
        text: "to insert a tutorial video for certain school projects"
    },
    {
        linkRef: "https://www.npmjs.com/package/react-image-gallery",
        linkText: "react-image-gallery",
        text: "for the image galleries for certain projects"
    }
];
const dialogTextTestFR = ["Finalement je voulais m'entrainer à l'utilisation de react-testing-library et  Jest. Les tests unitaires que j'ai fait sont assez simples (comme il s'agit d'un site statique) mais ainsi j'ai pu me familiariser avec le fonctionnement."];
const dialogTextTestGB = ["Finally I wanted to get familiar with the usage of react-testing-library and Jest. I made some simple tests (as they're for a static website) but this way I got used to the  process."];

export { 
    cardTitleFR, 
    cardTitleGB, 
    cardSubTitleFR, 
    cardSubTitleGB,
    cardImageTitleFR,
    cardImageTitleGB,
    cardTextFR,
    cardTextGB,
    dialogDateFR,
    dialogDateGB,
    dialogTextFR,
    dialogTextGB,
    dialogTextStyleFR,
    dialogTextStyleGB,
    dialogTextContextFR,
    dialogTextContextGB,
    dialogListContextFR,
    dialogListContextGB,
    dialogTextPackageFR,
    dialogTextPackageGB,
    dialogListPackageFR,
    dialogListPackageGB,
    dialogTextTestFR,
    dialogTextTestGB,
};