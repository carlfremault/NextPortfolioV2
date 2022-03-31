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

const MigrationChocDialog = ({ handleClose, open }) => {
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
        <DialogTitle>Migration dans le cloud Azure d&apos;une application web</DialogTitle>
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
                href="/pdf/MigrationChocCompteRendu.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="outlined"
                  style={theme.contrastButton}
                  startIcon={<PictureAsPdfIcon />}
                >
                  Compte rendu du déploiement
                </Button>
              </a>
              <a
                href="/pdf/MigrationChocMiseEchelle.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="outlined"
                  style={theme.contrastButton}
                  startIcon={<PictureAsPdfIcon />}
                >
                  Étude mise à l&apos;échelle
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
                Pendant cette exercice nous avons procédé à la migration de l&apos;application web Chocolete&apos;in dans le cloud Azure. Avec le Azure CLI (Command Line Interface) nous avons créé un App Service et un Ressource Group. Après avoir fait un push de l&apos; du dépôt local vers le nouveau App Service nous avons créé une base de données MariaDB pour ensuite paramétrer le pare-feu Azure. Finalement nous avons fait une étude pour implémenter un service de mise à l&apos;échelle.
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
                <ListItemText inset>- Recenser et identifier les ressources numériques</ListItemText>
              </ListItem>
                <ListItem>
                  <ListItemText inset>- Vérifier les conditions de la continuité d&apos;un service informatique</ListItemText>
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

MigrationChocDialog.propTypes = {
  handleClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};
export default MigrationChocDialog;
