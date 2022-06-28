const cardTitleFR = "Développement d'un bot Microsoft Teams - Node.js"
const cardTitleGB = "Development of a Microsoft Teams bot - Node.js"
const cardSubTitleFR = "Stage en milieu professionnel - 15/11 au 31/12/2021"
const cardSubTitleGB = "Internship - 15/11 until 31/12/2021"
const cardImageTitleFR = "Microsoft Teams bot alerte"
const cardImageTitleGB = "Microsoft Teams alerting bot"
const cardTextFR = "Pour mon stage de deuxième année j’ai intégré l'équipe de fAIBRIK, start-up basée à Annecy (74), du 15 novembre au 31 décembre 2021.";
const cardTextGB = "For my seccond year internship I joined the developers team of fAIBRIK, a start-up based in Annecy, France, from 15 November until 31 December 2021.";
const dialogDateFR = "31 décembre 2021";
const dialogDateGB = "31 December 2021";
const dialogTextFR = ["Pour mon stage de deuxième année j'ai intégré l'équipe de fAIbrik, start-up basée à Annecy (74), du 15 novembre au 31 décembre 2021. La mission pour ce stage était de créer une application Microsoft Teams qui permet d'envoyer des alertes aux utilisateurs de la plateforme fAIbrik lorsqu'un événement s'y produit.", "Le projet de stage était très complet, et passait par une première phase d'étude et d'analyse des possiblités d'applications que propose Microsoft Teams. Après avoir cerné les besoins, il a été décidé de créer un bot.", "Ensuite j'ai entamé le développement en version 'standalone' de l'application. J'ai pu me familiariser avec le développement en Node.js ainsi que le processus d'enregistrement d'une application dans Microsoft Azure. Pendant cette phase la communication du bot avec Teams passait par intermédiaire d'un tunnel Ngrok. Une partie du temps était consacrée à la création des dialogues (avec la technologie 'Adaptive Cards' de Microsoft), qui permettent l'intéraction avec l'utilisateur. Ensuite j'ai géré l'authentification avec Auth0, basé sur l'exemple SSO fourni dans les docs Microsoft Teams.", "Quand le bot était fonctionnel en local sur ma machine, j'ai procédé avec l'intégration avec le plateforme fAIbrik. Il fallait gérer l'abonnement (et désabonnement) des utilisateurs aux alertes (dans une base de données MongoDB) en les envoyant dans une 'queue' RabbitMQ, ainsi que l'écoute des événements envoyés sur une autre 'queue', afin d'afficher des alertes."];
const dialogTextGB = ["For my second year internship I joined the developers team of fAIbrik, a start-up based in Annecy, France, from 15 november until 31 december 2021. My mission consisted in creating a Microsoft Teams application, allowing to send alerts to its users when an event happens on the fAIbrik web application.", "It was a very comprehensive project: first I've studied the different possibilities offered by the Teams Developer platform. After having pinpointed the exact needs, the decision was made to develop a bot.", "Then I've started developing a standalone bot, with which I communicated via an Ngrok tunnel. I've familiarized myself with the Node.js development process, as well as the registration of the application in Microsoft Azure. To allow interaction with the users I used the waterfall dialog system and Microsoft’s Adaptive Cards for the front end. Auth0 authentification was managed based upon an example for a SSO bot on the Microsoft Teams Github repo.", "When the bot was functioning on my local machine, I’ve proceeded with its integration into the fAIbrik platform. I took care of the alert subscriptions of the users in a MongoDB database by sending the necessary information in a JSON object on a RabbitMQ queue. An event listener took care of events sent on another queue, to display incoming messages to the users."];

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
};