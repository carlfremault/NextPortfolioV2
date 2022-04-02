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
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
import CheckIcon from "@material-ui/icons/Check";
import Image from "next/image";

const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

const GestionReseauDialog = ({ handleClose, open }) => {
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
        <DialogTitle>Gestion d&apos;un réseau Active Directory</DialogTitle>
        <DialogContent dividers>
          <Container
            maxWidth="md"
            style={{ marginTop: "2rem", marginBottom: "2rem" }}
          >
            <Image
              loader={myLoader}
              src="/imgs/GestionAD.png"
              width="838px"
              height="485px"
              alt="Schéma du réseau du lycée"
            />
          </Container>
          <Grid
            container
            direction="column"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item style={{ textAlign: "center" }}>
              <a
                href="/downloads/GestionReseau.zip"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="outlined"
                  style={theme.contrastButton}
                  startIcon={<DownloadForOfflineIcon />}
                >
                  Compte-rendus (zip)
                </Button>
              </a>
              <a
                href="/pdf/GestionReseauSchemaLycee.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="outlined"
                  style={theme.contrastButton}
                  startIcon={<PictureAsPdfIcon />}
                >
                  Schéma du réseau
                </Button>
              </a>
            </Grid>
          </Grid>
          <Container maxWidth="md">
            <Typography variant="h6" style={{ margin: "2rem 0" }}>
              30 novembre 2020
            </Typography>
            <Typography
              variant="body1"
              align="justify"
              style={{ margin: "1rem 0" }}
            >
              À partir d&apos;un schéma de l&apos;architecture du réseau et trois machines virtuelles (un serveur Active Directory, un routeur et une machine cliente) nous avons découvert le paramétrage d&apos;un réseau d&apos;un lycée : configuration IP, variables d&apos;environnement, dossiers partagés et domaine.
            </Typography>
            <Typography
              variant="body1"
              align="justify"
              style={{ margin: "1rem 0" }}
            >
              Par la suite nous avons introduit un nouvel ordinateur Windows, et une machine Linux dans le domaine. En passant nous avons également appris à cloner des machines virtuelles (Windows et Linux), et nous avons utilisé Cisco Packet Tracer pour apprendre à utiliser des VLAN et simuler des paramétrages d&apos;un réseau.
            </Typography>
            <Typography
              variant="body1"
              align="justify"
              style={{ margin: "1rem 0" }}
            >
              Finalement, nous avons utilisé les consoles d&apos;administration Windows Server &apos;Utilisateurs et ordinateurs Active Directory&apos; et &apos;Gestion des stratégies de groupe&apos; pour rechercher des informations, ajouter des utilisateurs et groupes, utiliser des stratégies de groupe pour gérer des lecteurs réseau, et gérer des dossiers partagés.
            </Typography>
            <Typography
              variant="body1"
              align="justify"
              style={{ margin: "4rem 0 1rem" }}
            >
              Les compétences officielles couvertes par cet exercice sont les suivantes :
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon style={{ transform: "translate(10px)" }}>
                  <CheckIcon color="secondary" />
                </ListItemIcon>
                <ListItemText>Gérer le patrimoine informatique</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText inset>- Recenser et identifier les ressources numériques</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText inset>- Mettre en place et vérifier les niveaux d&apos;habilitation associés à un service</ListItemText>
              </ListItem>
            </List>
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
                <ListItemText inset>- Traiter des demandes concernant les services réseau et système, applicatifs</ListItemText>
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

GestionReseauDialog.propTypes = {
  handleClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};
export default GestionReseauDialog;
