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

const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

const BackupChocDialog = ({ handleClose, open }) => {
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
        <DialogTitle>Mise en place de solution de sauvegarde d&apos;une application web Azure</DialogTitle>
        <DialogContent dividers>
          <Container
            maxWidth="md"
            style={{ marginTop: "2rem", marginBottom: "2rem" }}
          >
            <Image
              loader={myLoader}
              src="/imgs/PCAChoc.png"
              width="838px"
              height="485px"
              alt="OCS Inventory"
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
                href="/pdf/RestaurationAzureChocolatein.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="outlined"
                  style={theme.contrastButton}
                  startIcon={<PictureAsPdfIcon />}
                >
                  Compte rendu - Restauration des données
                </Button>
              </a>
              <a
                href="/pdf/ReplicaAzureChocolatein.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="outlined"
                  style={theme.contrastButton}
                  startIcon={<PictureAsPdfIcon />}
                >
                  Compte rendu - Configuration du réplica
                </Button>
              </a>
            </Grid>
          </Grid>
          <Container maxWidth="md">
            <Typography variant="h6" style={{ margin: "2rem 0" }}>
              21 octobre 2021
            </Typography>
            <Typography
              variant="body1"
              align="justify"
              style={{ margin: "1rem 0" }}
            >
              Pendant cette activité nous avons commencé par simuler une perte de données dans la base. Ensuite nous avons effectué une restauration de données depuis la sauvegarde Azure. Ceci génère un nouveau serveur, où il faut vérifier les paramètres du pare-feu, puis il faut mettre à jour les informations de connexion dans l&apos;application, pour pointer vers ce nouveau serveur.
            </Typography>
            <Typography
              variant="body1"
              align="justify"
              style={{ margin: "1rem 0" }}
            >
La prochaine étape était de créer un serveur replica dans Azure, puis de réitérer la démarche (simulation de panne, bascule sur le replica)
            </Typography>
            <Container maxWidth="md">
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
                  <ListItemText inset>- Vérifier les conditions de la continuité d&apos;un service informatique</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText inset>- Gérer des sauvegardes</ListItemText>
                </ListItem>
              </List>
            </Container>
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

BackupChocDialog.propTypes = {
  handleClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};
export default BackupChocDialog;
