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

const PCAChocDialog = ({ handleClose, open }) => {
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
        <DialogTitle>Audit PCA d&apos;une application web hébergée dans le cloud</DialogTitle>
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
                href="/downloads/PCAChoc.zip"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="outlined"
                  style={theme.contrastButton}
                  startIcon={<DownloadForOfflineIcon />}
                >
                  Contrat, PCA et rapports (zip)
                </Button>
              </a>
            </Grid>
          </Grid>
          <Container maxWidth="md">
            <Typography variant="h6" style={{ margin: "2rem 0" }}>
              26 septembre 2021
            </Typography>
            <Typography
              variant="body1"
              align="justify"
              style={{ margin: "1rem 0" }}
            >
              Dans le cadre d&apos;un audit interne nous avons examiné la phase "maintien en codition opérationnelle" des briques applicatives d'un service web. À l&apos;aide du contrat d&apos;hébergement ainsi que des scénarios présentés dans le Plan de Continuité d&apos;Activité (PCA) nous avons vérifié les prestations et rédigé un rapport d&apos;audit. Après nous avons effectué des tests de performance avec Apache Bench.
            </Typography>
            <Typography
              variant="body1"
              align="justify"
              style={{ margin: "1rem 0" }}
            >
              Les résultats étant insatisfaisants, nous avons procédé à examiner l&apos;offre cloud Azure de type PaaS afin de proposer une autre solution d&apos;hébergement, avec des meilleures performances.
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
                  <ListItemText inset>- Exploiter des référentiels, normes et standards adoptés par le prestataire informatique</ListItemText>
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

PCAChocDialog.propTypes = {
  handleClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};
export default PCAChocDialog;
