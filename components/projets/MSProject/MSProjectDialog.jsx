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
import MSProjectGallery from "./MSProjectGallery";
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import CheckIcon from "@material-ui/icons/Check";

const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

const MSProjectDialog = ({ handleClose, open }) => {
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
        <DialogTitle>Gestion et suivi de projet - MS Project</DialogTitle>
        <DialogContent dividers>
          <Container
            maxWidth="md"
            style={{ marginTop: "2rem", marginBottom: "2rem" }}
          >
              <MSProjectGallery />
          </Container>
          <Grid
            container
            direction="column"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item style={{ textAlign: "center" }}>             
              <a
                href="/downloads/Projet1.mpp"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="outlined"
                  style={theme.contrastButton}
                  startIcon={<DownloadForOfflineIcon />}
                >
                  Télécharger le projet
                </Button>
              </a>
            </Grid>
          </Grid>
          <Container maxWidth="md">
            <Typography variant="h6" style={{ margin: "2rem 0" }}>
              11 avril 2021
            </Typography>
            <Typography
              variant="body1"
              align="justify"
              style={{ margin: "1rem 0" }}
            >
              Pendant nos cours nous avons appris à faire la gestion et le suivi d&apos;un projet à l&apos;aide de MS Project. Nous avons commencé par la création d&apos;un &quot;Work Breakdown Structure&quot; (WBS) en prenant en compte l&apos;ordonnancement des tâches ainsi que les dépendances. Par la suite nous avons géré les ressources et l&apos;attribution du personnel. Après avoir saisi les coûts des ressources nous avons pu consulter les statistiques du projet. En simulant des imprévus nous avons géré l&apos;avancement du projet en nous appuyant sur le réseau des tâches. Finalement, nous avons appris à générer les rapports nécessaires au suivi du projet. 
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
                  <ListItemText>Travailler en mode projet</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText inset>- Analyser les objectifs et les modalités d&apos;organisation d&apos;un projet</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText inset>- Planifier les activités</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText inset>- Évaluer les indicateurs de suivi d&apos;un projet et analyser les écarts</ListItemText>
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

MSProjectDialog.propTypes = {
  handleClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};
export default MSProjectDialog;
