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
        <DialogTitle>Migration d&apos;une base de données MariaDB vers PostgreSQL dans le cloud Azure, gestion de sauvegardes</DialogTitle>
        <DialogContent dividers>
          <Container
            maxWidth="md"
            style={{ marginTop: "2rem", marginBottom: "2rem" }}
          >
            <Image
              loader={myLoader}
              src="/imgs/MigrationBDD.png"
              width="838px"
              height="400px"
              alt="Capture d'écran Azure"
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
                href="/downloads/MigrationBDD.zip"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="outlined"
                  style={theme.contrastButton}
                  startIcon={<DownloadForOfflineIcon />}
                >
                  Compte-rendus de la migration (zip)
                </Button>
              </a>
            </Grid>
          </Grid>
          <Container maxWidth="md">
            <Typography variant="h6" style={{ margin: "2rem 0" }}>
              30 janvier 2022
            </Typography>
            <Typography
              variant="body1"
              align="justify"
              style={{ margin: "1rem 0" }}
            >
              Cette activité nous a permis d&apos;apprendre à faire la mise en place d&apos;un serveur PostgreSQL sur une machine virtuelle Debian, de configurer une connexion SSL puis de migrer une base de données MariaDB vers une base de données PostgreSQL.
            </Typography>
            <Typography
              variant="body1"
              align="justify"
              style={{ margin: "1rem 0" }}
            >
              Ensuite nous avons installé un serveur PostgreSQL sur Azure puis nous avons fait une sauvegarde de la base de données installée en local et nous l&apos;avons restauré sur le nouveau serveur Azure.
            </Typography>
            <Typography
              variant="body1"
              align="justify"
              style={{ margin: "1rem 0" }}
            >
              Nous avons modifié le groupe tarifaire du serveur Azure pour permettre l&apos;activation de la haute disponibilité, puis nous avons activé cette option et nous avons fait et testé un réplica de secours.
            </Typography>
            <Typography
              variant="body1"
              align="justify"
              style={{ margin: "1rem 0" }}
            >
              Enfin, nous avons appris à générer un script pour automatiser la démarche entière.
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
                <ListItemText inset>- Vérifier les conditions de la continuité d&apos;un service informatique</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText inset>- Gérer des sauvegardes</ListItemText>
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
