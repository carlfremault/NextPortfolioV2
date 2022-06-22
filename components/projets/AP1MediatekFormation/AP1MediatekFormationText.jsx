const cardTitleFR = "Atelier 1 : Application web Mediatek Formations - PHP, Symfony, MySQL";
const cardTitleGB = "Workshop 1 : Mediatek Training web application - PHP, Symfony, MySQL";
const cardSubTitleFR = "Atelier de professionnalisation BTS SIO - 30/03/2022";
const cardSubTitleGB = "Professionalization workshop BTS SIO - 30/03/2022";
const cardImageTitleFR = "Application web MediaTek86 Formations";
const cardImageTitleGB = "Mediatek Training web application";
const cardTextFR = "Pour cet Atelier Professionnel j'ai fait les évolutions demdandées pour l'application web Mediatek Formations : gestion des niveaux des formations, implémentation d'un backoffice.";
const cardTextGB = "For this workshop I made the requested modifications to the Mediatek Training web application: implementation of training levels, development of a back office.";
const dialogDateFR = "30 mars 2022";
const dialogDateGB = "30 march 2022";
const dialogTextFR = ["Pour cet Atelier Professionnel j'ai fait les évolutions demdandées pour l'application web Mediatek Formations. Comme point de départ j'ai récupéré le site MediaTek86 Formations, qui présente les différentes formations disponibles aux utilisateurs. Une page d'accueil présente les deux formations les plus récentes, puis une page 'formations' affiche une liste de toutes les formations, où on peut trier sur le titre et la date de parution, et filtrer sur le titre.", "La première mission était de rajouter des niveaux pour les formations, avec affichage dans la liste, sur la page des détails d'une formation, et la possiblité de filtrer la liste sur un niveau donné.", "Pour la deuxième mission, j'ai dû créer une partie backoffice pour le site, permettant de gérer les formations et les niveaux. Ajout, modification et suppression d'une formation, et ajout et suppression d'un niveau. La partie backoffice est uniquement accessible après authentification : j'ai implémenté une solution SSO avec Keycloak (sur un serveur Azure). Il a été demandé de sécuriser le site, de créer un test unitaire et de générer la documentation technique." ];
const dialogTextGB = ["For this professionalization workshop I made the requested changes and additions to the Mediatek Training web application. As a starting point I received an existing application presenting the available training videos to its users. A welcome page shows the two most recent videos and a separate page lists all available videos with possibility to sort by title and release date, and filter on the title.", "For the first mission we were asked to add a training level to the videos, to be displayed in the list as well as on the page giving each video's details. Users should also be able to filter on a given level.", "The second assignment consisted of creating a back office for the application, allowing an admin to add, modify or delete videos and levels. The back office should only be accessible after authentification: I added a SSO solution with a Keycloak server running on Azure. The app had to be secured against various injections, and we were asked to create a unit test and to generate the technical documentation." ];
const dialogVideoTextFR = "Voici une vidéo qui présente l&apos;utilisation du site :";
const dialogVideoTextGB = "Here's a video explaining the application to its users:";


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
    dialogVideoTextFR,
    dialogVideoTextGB
};