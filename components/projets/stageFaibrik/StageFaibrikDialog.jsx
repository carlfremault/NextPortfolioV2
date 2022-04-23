import PropTypes from "prop-types";
import {
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
import CheckIcon from "@material-ui/icons/Check";
import Image from "next/image";
import StageFaibrikGallery from "./StageFaibrikGallery";

const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

const StageFaibrikDialog = ({ handleClose, open }) => {
  const theme = useTheme();

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: theme.dialog,
        }}
        fullWidth={true}
        maxWidth="lg"
      >
        <DialogTitle>Développement d&apos;un bot Microsoft Teams - Node.js</DialogTitle>
        <DialogContent dividers data-testid="dialogContent">
          <Container
            maxWidth="md"
            style={{ marginTop: "2rem", marginBottom: "2rem" }}
          >
            <StageFaibrikGallery />
          </Container>
          <Grid
            container
            direction="column"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item style={{ textAlign: "center" }}>
              <a
                href="../../pdf/faibrikRapportDeStage.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="outlined"
                  style={theme.contrastButton}
                  startIcon={<PictureAsPdfIcon />}
                >
                  Rapport de Stage (PDF)
                </Button>
              </a>
            </Grid>
          </Grid>
          <Container
            maxWidth="sm"
            style={{ marginTop: "2rem", marginBottom: "2rem" }}
          >
            <Grid
              container
              direction="column"
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item>
                <Typography variant="h6" gutterBottom>
                  Technologies
                </Typography>
              </Grid>
              <Grid
                item
                container
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
              >
                <Grid item>
                  <a
                    href="https://nodejs.org/"
                    target="_blank"
                    alt="Node.js official website"
                    rel="noreferrer"
                  >
                    <Image
                      loader={myLoader}
                      src="/imgs/LogoNode.png"
                      width="90px"
                      height="50px"
                      alt="NextJs Logo"
                    />
                  </a>
                </Grid>
                <Grid item>
                  <a
                    href="https://docs.microsoft.com/en-us/microsoftteams/platform/"
                    target="_blank"
                    alt="MS Teams developper documentation"
                    rel="noreferrer"
                  >
                    <Image
                      loader={myLoader}
                      src="/imgs/LogoTeams.png"
                      width="150px"
                      height="90px"
                      alt="React Logo"
                    />
                  </a>
                </Grid>
              </Grid>
            </Grid>
          </Container>
          <Container maxWidth="md">
            <Typography variant="h6" style={{ margin: "2rem 0" }}>
              31 décembre 2021
            </Typography>
            <Typography
              variant="body1"
              align="justify"
              style={{ margin: "1rem 0" }}
            >
              Pour mon stage de deuxième année j&apos;ai intégré l&apos;équipe de fAIbrik, start-up basée à Annecy (74), du 15 novembre au 31 décembre
              2021. La mission pour ce stage était de créer une application Microsoft Teams qui permet d&apos;envoyer des alertes aux utilisateurs de la plateforme fAIbrik lorsqu&apos;un événement s&apos;y produit.
            </Typography>
            <Typography
              variant="body1"
              align="justify"
              style={{ margin: "1rem 0" }}
            >
              Le projet de stage était très complet, et passait par une première phase d&apos;étude et d&apos;analyse des possiblités d&apos;applications que propose Microsoft Teams. Après avoir cerné les besoins, il a été décidé de créer un bot.
            </Typography>
            <Typography
              variant="body1"
              align="justify"
              style={{ margin: "1rem 0" }}
            >
              Ensuite j&apos;ai entamé le développement en version &apos;standalone&apos; de l&apos;application. J&apos;ai pu me familiariser avec le développement en Node.js ainsi que le processus d&apos;enregistrement d&apos;une application dans Microsoft Azure. Pendant cette phase la communication du bot avec Teams passait par intermédiaire d&apos;un tunnel Ngrok. Une partie du temps était consacrée à la création des dialogues (avec la technologie &apos;Adaptive Cards&apos; de Microsoft), qui permettent l&apos;intéraction avec l&apos;utilisateur. Ensuite j&apos;ai géré l&apos;authentification avec Auth0, basé sur l&apos;exemple SSO fourni dans les docs Microsoft Teams.
            </Typography>
            <Typography
              variant="body1"
              align="justify"
              style={{ margin: "1rem 0" }}
            >
              Quand le bot était fonctionnel en local sur ma machine, j&apos;ai procédé avec l&apos;intégration avec le plateforme fAIbrik. Il fallait gérer l&apos;abonnement (et désabonnement) des utilisateurs aux alertes (dans une base de données MongoDB) en les envoyant dans une &apos;queue&apos; RabbitMQ, ainsi que l&apos;écoute des événements envoyés sur une autre &apos;queue&apos;, afin d&apos;afficher des alertes.
            </Typography>
            <Typography
              variant="body1"
              align="justify"
              style={{ margin: "1rem 0 0 0" }}
            >
              Expériences :
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <CheckIcon color="secondary" />
                </ListItemIcon>
                <ListItemText primary="Node.js" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckIcon color="secondary" />
                </ListItemIcon>
                <ListItemText primary="Microsoft Azure" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckIcon color="secondary" />
                </ListItemIcon>
                <ListItemText primary="Microsoft Bot Framework SDK, Microsoft Azure Bot Service" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckIcon color="secondary" />
                </ListItemIcon>
                <ListItemText primary="Microsoft Adaptive Cards" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckIcon color="secondary" />
                </ListItemIcon>
                <ListItemText primary="MongoDB" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckIcon color="secondary" />
                </ListItemIcon>
                <ListItemText primary="Méthode Agile, Daily Scrum Meetings, Trello, Gitlab" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckIcon color="secondary" />
                </ListItemIcon>
                <ListItemText primary="Ngrok, Postman, Auth0, RabbitMQ" />
              </ListItem>
            </List>
          </Container>
          <Container maxWidth="md">
            <Typography
              variant="body1"
              align="justify"
              style={{ margin: "4rem 0 1rem" }}
            >
              Les compétences officielles couvertes pendant ce stage sont les suivantes :
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon style={{ transform: "translate(10px)" }}>
                  <CheckIcon color="secondary" />
                </ListItemIcon>
                <ListItemText>Répondre aux incidents et aux demandes d&apos;assistance et d&apos;évolution</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText inset>- Collecter, suivre et orienter des demandes</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText inset>- Traiter des demandes concernant les applications</ListItemText>
              </ListItem>
            </List>
            <List>
              <ListItem>
                <ListItemIcon style={{ transform: "translate(10px)" }}>
                  <CheckIcon color="secondary" />
                </ListItemIcon>
                <ListItemText>Développer la présence en ligne de l&apos;organisation</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText inset>- Participer à la valorisation de l&apos;image de l&apos;organisation sur les médias numériques en tenant compte du cadre juridique et des enjeux économiques</ListItemText>
              </ListItem>
            </List>
            <List>
              <ListItem>
                <ListItemIcon style={{ transform: "translate(10px)" }}>
                  <CheckIcon color="secondary" />
                </ListItemIcon>
                <ListItemText>Travailler en mode projet</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText inset>- Analyser les objectifs et les modalités d&apos;organisation d&apos;un projet</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText inset>- Planifier les activités</ListItemText>
              </ListItem>
            </List>
            <List>
              <ListItem>
                <ListItemIcon style={{ transform: "translate(10px)" }}>
                  <CheckIcon color="secondary" />
                </ListItemIcon>
                <ListItemText>Mettre à disposition des utilisateurs un service informatique</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText inset>- Réaliser les tests d&apos;intégration et d&apos;acceptation d&apos;un service</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText inset>- Déployer un service</ListItemText>
              </ListItem>
            </List>
          </Container>
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            onClick={handleClose}
            style={theme.contrastColor}
            data-testid="projectCardCloseDialog"
          >
            Fermer
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

StageFaibrikDialog.propTypes = {
  handleClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};
export default StageFaibrikDialog;
