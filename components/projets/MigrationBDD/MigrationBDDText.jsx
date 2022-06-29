const cardTitleFR = "Migration d'une base de données MariaDB vers PostgreSQL dans le cloud Azure, gestion de sauvegardes";
const cardTitleGB = "Migration of a MariaDB database to a Azure PostgreSQL database, backup management";
const cardSubTitleFR = "Réalisation en cours de formation - 30/01/2022";
const cardSubTitleGB = "School project - 30/01/2022";
const cardImageTitleFR = "Capture d'écran Azure";
const cardImageTitleGB = "MS Azure screenshot";
const cardTextFR = "Mise en place de serveur PostgreSQL, migration depuis MariaDB. Sauvegarde et restauration Azure, gestion de replica.";
const cardTextGB = "Installation of a PostgreSQL server, migration from MariaDB. Azure backup and restoration. Azure replication.";
const dialogDateFR = "30 janvier 2022";
const dialogDateGB = "30 January 2022";
const dialogTextFR = ["Cette activité nous a permis d'un serveur PostgreSQL sur une machine virtuelle Debian, de configurer une connexion SSL puis de migrer une base de données MariaDB vers une base de données PostgreSQL.", "Ensuite nous avons installé un serveur PostgreSQL sur Azure puis nous avons fait une sauvegarde de la base de données installée en local et nous l'avons restauré sur le nouveau serveur Azure.", "Nous avons modifié le groupe tarifaire du serveur Azure pour permettre l'activation de la haute disponibilité, puis nous avons activé cette option et nous avons fait et testé un réplica de secours.", "Enfin, nous avons appris à générer un script pour automatiser la démarche entière."];
const dialogTextGB = ["For this activity we installed a PostgreSQL server on a Debian VM, we configured a SSL connection and migrated a MariaDB database to a PostgreSQL database.", "Then we installed an Azure PostgreSQL server, we made a backup of the local PostgreSQL database and restored in on the new Azure server.", "We modified the pricing tier to have access to zone redundant high availability, then we activated this option and we made and tested a standby replica.", "Finally, we learned to automate the entire process with a bash script."];

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