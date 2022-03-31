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

const GLPIDialog = ({ handleClose, open }) => {
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
        <DialogTitle>Gestion d&apos;habilitations - GLPI</DialogTitle>
        <DialogContent dividers>
          <Container
            maxWidth="md"
            style={{ marginTop: "2rem", marginBottom: "2rem" }}
          >
            <Image
              loader={myLoader}
              src="/imgs/GLPI.png"
              width="838px"
              height="485px"
              alt="Capture d'écran GLPI"
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
                href="/pdf/PropositionHabilitationGLPI.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="outlined"
                  style={theme.contrastButton}
                  startIcon={<PictureAsPdfIcon />}
                >
                  Proposition d&apos;évolution
                </Button>
              </a>
            </Grid>
          </Grid>
          <Container maxWidth="md">
            <Typography variant="h6" style={{ margin: "2rem 0" }}>
              25 février 2021
            </Typography>
            <Typography
              variant="body1"
              align="justify"
              style={{ margin: "1rem 0" }}
            >
              En utilisant une machine virtuelle qui tourne un serveur GLPI (Gestion Libre de Parc Informatique) nous avons créé des entités et des lieux pour y placer des ordinateurs. Ensuite nous avons défini des groupes d&apos;utilisateurs et nous avons configuré les habilitations à accorder aux utilisateurs en fonction des accès dont ils ont besoin. Finalement nous avons simulé la création d&apos;un ticket par un utilisateur puis la prise en charge, qualification  et résolution du ticket par un technicien.
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
                <ListItemText inset>- Exploiter des référentiels, normes et standards adoptés par le prestataire informatique</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText inset>- Mettre en place et vérifier les niveaux d&apos;habilitation associés à un service</ListItemText>
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

GLPIDialog.propTypes = {
  handleClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};
export default GLPIDialog;
