const cardTitleFR = "Mise en place de solution de sauvegarde d'une application web Azure";
const cardTitleGB = "Implementation of a backup solution for an Azure web application";
const cardSubTitleFR = "Réalisation en cours de formation - 21/10/2021";
const cardSubTitleGB = "School project - 21/10/2021";
const cardImageTitleFR = "Capture d'écran site Chocolatein";
const cardImageTitleGB = "Chocolatein website screenshot";
const cardTextFR = "Simulation de perte de données et restauration depuis la sauvegarde Azure.";
const cardTextGB = "Data loss simulation and restoration from an Azure backup";
const dialogDateFR = "21 octobre 2021";
const dialogDateGB = "21 October 2021";
const dialogTextFR = ["Pendant cette activité nous avons commencé par simuler une perte de données dans la base. Ensuite nous avons effectué une restauration de données depuis la sauvegarde Azure. Ceci génère un nouveau serveur, où il faut vérifier les paramètres du pare-feu, puis il faut mettre à jour les informations de connexion dans l'application, pour pointer vers ce nouveau serveur.", "La prochaine étape était de créer un serveur replica dans Azure, puis de réitérer la démarche (simulation de panne, bascule sur le replica)."];
const dialogTextGB = ["To start this activity we simulated a data loss from the database. Then we restored the data from an Azure backup. As this effectively creates a new server, it is necessary to verify the firewall configuration, and to update any connection data in the application, to refer to the new server.", "For the next step, we created a server replica in Azure and we repeated the process (data loss, switch to the replica server)."];

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