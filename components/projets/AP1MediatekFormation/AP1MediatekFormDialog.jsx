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
import BuildIcon from "@material-ui/icons/Build";
import CheckIcon from "@material-ui/icons/Check";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkIcon from "@material-ui/icons/Link";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
import Image from "next/image";
import AP1MediatekFormGallery from "./AP1MediatekFormGallery";
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
        <DialogTitle>
          Application web Mediatek Formations - PHP, Symfony, MySQL
        </DialogTitle>
        <DialogContent dividers>
          <Container
            maxWidth="md"
            style={{ marginTop: "2rem", marginBottom: "2rem" }}
          >
            <AP1MediatekFormGallery />
          </Container>
          <Grid
            container
            direction="column"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item style={{ textAlign: "center" }}>
              <a
                href="https://github.com/carlfremault/mediatekformation"
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
                href="https://mediatek86-formation.go.yj.fr/public/" 
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="outlined"
                  style={theme.contrastButton}
                  startIcon={<LinkIcon />}
                >
                  Visiter le site
                </Button>
              </a>
              <a
                href="#"
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
                href="/pdf/AP1MediaFormDossier.pdf"
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
                href="/pdf/A1CompteRendu.pdf"
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
                    href="https://www.php.net/"
                    target="_blank"
                    alt="PHP documentation official website"
                    rel="noreferrer"
                  >
                    <Image
                      loader={myLoader}
                      src="/imgs/LogoPhp.png"
                      width="110px"
                      height="60px"
                      alt="PHP Logo"
                    />
                  </a>
                </Grid>
                <Grid item>
                  <a
                    href="https://symfony.com/"
                    target="_blank"
                    alt="Symfony framework official website"
                    rel="noreferrer"
                  >
                    <Image
                      loader={myLoader}
                      src="/imgs/LogoSymfony.png"
                      width="80px"
                      height="90px"
                      alt="Symfony Logo"
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
              30 mars 2022
            </Typography>
            <Typography
              variant="body1"
              align="justify"
              style={{ margin: "1rem 0" }}
            >
              Pour cet Atelier Professionnel j&apos;ai fait les évolutions demdandées pour l&apos;application web Mediatek Formations. Comme point de départ j&apos;ai récupéré le site MediaTek86 Formations, qui présente les différentes formations disponibles aux utilisateurs. Une page d&apos;accueil présente les deux formations les plus récentes, puis une page &apos;formations&apos; affiche une liste de toutes les formations, où on peut trier sur le titre et la date de parution, et filtrer sur le titre.
            </Typography>
            <Typography
              variant="body1"
              align="justify"
              style={{ margin: "1rem 0" }}
            >
              La première mission était de rajouter des niveaux pour les formations, avec affichage dans la liste, sur la page des détails d&apos;une formation, et la possiblité de filtrer la liste sur un niveau donné.
            </Typography>
            <Typography
              variant="body1"
              align="justify"
              style={{ margin: "1rem 0" }}
            >
              Pour la deuxième mission, j&apos;ai dû créer une partie backoffice pour le site, permettant de gérer les formations et les niveaux. Ajout, modification et suppression d&apos;une formation, et ajout et suppression d&apos;un niveau. La partie backoffice est uniquement accessible après authentification. Il a été demandé de sécuriser le site, de créer un test unitaire et de générer la documentation technique.
            </Typography>
            <Typography
              variant="body1"
              align="justify"
              style={{ margin: "2rem 0 1rem" }}
            >
              Voici une vidéo qui présente l&apos;utilisation du site :
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
              url="../../video/Atelier1.mkv"
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
            <Container maxWidth="md">
            <Typography
              variant="body1"
              align="justify"
              style={{ margin: "3rem 0 1rem" }}
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
                <ListItemText>Développer la présence en ligne de l&apos;organisation</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText inset>- Participer à l&apos;évolution d&apos;un site Web exploitant les données de l&apos;organisation</ListItemText>
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
          </Container>
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
