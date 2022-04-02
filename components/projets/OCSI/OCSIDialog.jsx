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
import CheckIcon from "@material-ui/icons/Check";
import Image from "next/image";

const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

const OCSIDialog = ({ handleClose, open }) => {
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
        <DialogTitle>Gestion d&apos;inventaire de parc informatique - OCS Inventory</DialogTitle>
        <DialogContent dividers>
          <Container
            maxWidth="md"
            style={{ marginTop: "2rem", marginBottom: "2rem" }}
          >
            <Image
              loader={myLoader}
              src="/imgs/OCSI.png"
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
                href="/downloads/OCSI.zip"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="outlined"
                  style={theme.contrastButton}
                  startIcon={<DownloadForOfflineIcon />}
                >
                  Fichiers .odt et .csv (zip)
                </Button>
              </a>
            </Grid>
          </Grid>
          <Container maxWidth="md">
            <Typography variant="h6" style={{ margin: "2rem 0" }}>
              11 septembre 2020
            </Typography>
            <Typography
              variant="body1"
              align="justify"
              style={{ margin: "1rem 0" }}
            >
              Lors de cette exercice nous avons fait connaissance avec l&apos;application de gestion d&apos;inventaire de parc informatique OCS Inventory. Nous avons fait des recherches parmi les caractéristiques des machines et crée des groupes statiques et dynamiques. Enfin nous avons fait des exports selon les configurations, sous format Excel ainsi que CSV.
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

OCSIDialog.propTypes = {
  handleClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};
export default OCSIDialog;
