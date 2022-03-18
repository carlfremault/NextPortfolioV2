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
import AssignmentIcon from '@mui/icons-material/Assignment';
import BuildIcon from "@material-ui/icons/Build";
import CheckIcon from "@material-ui/icons/Check";
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import GitHubIcon from "@material-ui/icons/GitHub";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
import Image from "next/image";
import AP3MediatekFormGallery from "./AP3MediatekFormGallery";
import ReactPlayer from "react-player/lazy";

const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

const AP1MediatekFormDialog = ({ handleClose, open }) => {
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
        <DialogTitle>Application de bureau Mediatek86  - C#, MySQL</DialogTitle>
        <DialogContent dividers>
          <Container
            maxWidth="md"
            style={{ marginTop: "2rem", marginBottom: "2rem" }}
          >
            <AP3MediatekFormGallery />
          </Container>
          <Grid
            container
            direction="column"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item style={{ textAlign: "center" }}>
              <a
                href="https://github.com/carlfremault/Mediatek86"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="outlined"
                  style={theme.contrastButton}
                  startIcon={<GitHubIcon />}
                >
                  GitHub repo
                </Button>
              </a>    
              <a
                href="https://trello.com/invite/b/kDeTnxl7/c958591cb5c23a7725c91ba072fdd8dc/mediatek86"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="outlined"
                  style={theme.contrastButton}
                  startIcon={<AssignmentIcon />}
                >
                  Suivi de projet Trello
                </Button>
              </a>             
              <a
                href="/docs/downloads/Mediatek86.zip"
                rel="noreferrer"
                download
              >
                <Button
                  variant="outlined"
                  style={theme.contrastButton}
                  startIcon={<DownloadForOfflineIcon />}
                >
                   Télécharger l&apos;application
                </Button>
              </a>
              </Grid>
              <Grid item style={{ textAlign: "center" }}>
              <a
                href="/docs/AP3MediaTek/index.html"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="outlined"
                  style={theme.contrastButton}
                  startIcon={<BuildIcon />}
                >
                  Documentation technique
                </Button>
              </a>
              <a
                href="/pdf/APMediatek86Contexte.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="outlined"
                  style={theme.contrastButton}
                  startIcon={<PictureAsPdfIcon />}
                >
                  Contexte
                </Button>
              </a>
              <a  
                href="/pdf/AP3MediaGestDossier.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="outlined"
                  style={theme.contrastButton}
                  startIcon={<PictureAsPdfIcon />}
                >
                  Expression des besoins
                </Button>
              </a>
              <a
                href="/pdf/A3CompteRendu.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="outlined"
                  style={theme.contrastButton}
                  startIcon={<PictureAsPdfIcon />}
                >
                  Compte Rendu
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
                    href="https://docs.microsoft.com/en-us/dotnet/csharp/"
                    target="_blank"
                    alt="C# documentation official website"
                    rel="noreferrer"
                  >
                    <Image
                      loader={myLoader}
                      src="/imgs/LogoCSharp.png"
                      width="90px"
                      height="90px"
                      alt="C# Logo"
                    />
                  </a>
                </Grid>
                <Grid item>
                  <a
                    href="https://www.mysql.com/"
                    target="_blank"
                    alt="MySQL official website"
                    rel="noreferrer"
                  >
                    <Image
                      loader={myLoader}
                      src="/imgs/LogoMySql.png"
                      width="120px"
                      height="62px"
                      alt="MySQL Logo"
                    />
                  </a>
                </Grid>
              </Grid>
            </Grid>
          </Container>
          <Container maxWidth="md">
            <Typography variant="h6" style={{ margin: "2rem 0" }}>
              17 mars 2022
            </Typography>
            <Typography
              variant="body1"
              align="justify"
              style={{ margin: "1rem 0" }}
            >
              La mission donnée pour cet Atelier Professionnel était de faire évoluer l&apos;application de bureau permettant de gérer le catalogue d&apos;une médiathèque. Il fallait implémenter la possibilité d&apos;ajouter, modifier et supprimer des documents, commandes de documents, et abonnements aux revues.
            </Typography>
            <Typography
              variant="body1"
              align="justify"
              style={{ margin: "1rem 0" }}
            >
              L&apos;application est liée à une base de données MySQL hébergé dans le cloud Azure. Les mésures nécessaires à la préservation de l&apos;intégrité de la base de données ont été prises : utilisation de transactions, triggers et procédures stockées.
            </Typography>
            <Typography
              variant="body1"
              align="justify"
              style={{ margin: "1rem 0" }}
            >
              Des systèmes d&apos;authentification et de journalisation ont été mises en place, et des tests unitaires et fonctionnels ont été créés. J&apos;ai également généré la documentation technique. 
            </Typography>
            <Typography
              variant="body1"
              align="justify"
              style={{ margin: "1rem 0" }}
            >
              À la base cet Atelier est conçu pour être effectué par plusieurs développeurs. En raison des particularités de la formation à distance CNED cependant j&apos;ai choisi de le faire seul. Dans ce cas il était permis d&apos;omettre deux des missions qui étaient optionnelles. J&apos;ai toutefois préféré réaliser une de ces deux missions. 
            </Typography>
            <Typography
              variant="body1"
              align="justify"
              style={{ margin: "2rem 0 1rem" }}
            >
              Les compétences officielles couvertes par cet atelier sont les suivantes : 
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
              <ListItem>
                <ListItemText inset>- Accompagner les utilisateurs dans la mise en place d&apos;un service</ListItemText>
              </ListItem>
          </List>
            <Typography
              variant="body1"
              align="justify"
              style={{ margin: "2rem 0" }}
            >
              Voici une vidéo qui présente l&apos;utilisation de l&apos;application : 
            </Typography>
          </Container>
          <Grid
            container
            direction="row"
            justifyContent="space-around"
            alignItems="center"
            style={{ margin: "2rem 0" }}
          >
            <ReactPlayer
              url="../../video/Atelier3.mkv"
              controls
              config={{
                file: {
                  attributes: {
                    controlsList: "nodownload",
                  },
                },
              }}
            />
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} style={theme.contrastColor}>
            Fermer
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

AP1MediatekFormDialog.propTypes = {
  handleClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};
export default AP1MediatekFormDialog;
