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

const PacketTracerDialog = ({ handleClose, open }) => {
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
        <DialogTitle>Gestion d&apos;incidents dans un réseau - Cisco Packet Tracer</DialogTitle>
        <DialogContent dividers>
          <Container
            maxWidth="md"
            style={{ marginTop: "2rem", marginBottom: "2rem" }}
          >
            <Image
              loader={myLoader}
              src="/imgs/PacketTracer.png"
              width="838px"
              height="485px"
              alt="Réseau dans Cisco Packet Tracer"
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
                href="/downloads/PacketTracerRapports.zip"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="outlined"
                  style={theme.contrastButton}
                  startIcon={<DownloadForOfflineIcon />}
                >
                  Rapports d&apos;incidents (zip)
                </Button>
              </a>
              <a
                href="/downloads/PacketTracerSchemas.zip"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="outlined"
                  style={theme.contrastButton}
                  startIcon={<DownloadForOfflineIcon />}
                >
                  Projets Cisco Packet Tracer (zip)
                </Button>
              </a>
            </Grid>
          </Grid>
          <Container maxWidth="md">
            <Typography variant="h6" style={{ margin: "2rem 0" }}>
              28 décembre 2020
            </Typography>
            <Typography
              variant="body1"
              align="justify"
              style={{ margin: "1rem 0" }}
            >
              Pendant cette séance nous avons pris en compte des tickets d&apos;incidents concernant des différentes pannes d&apos;un parc informatique (ordinateurs et imprimantes). Après avoir vérifié si les pannes relèvent de notre mission comme spécifié dans le SLA (Service Level Agreement), nous avons procédé avec le diagnostique et la correction des différents problèmes signalés.
            </Typography>
            <Typography
              variant="body1"
              align="justify"
              style={{ margin: "1rem 0" }}
            >
              Le réseau était représenté par une simulation dans Cisco Packet Tracer.
            </Typography>
            <Typography
              variant="body1"
              align="justify"
              style={{ margin: "1rem 0" }}
            >
              Nous avons traité des problèmes de connexion (correction port de switch, configuration IP, cablage, ...) et fait l&apos;escalade des problèmes pour lesquels nous n&apos;étions pas habilités.
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

PacketTracerDialog.propTypes = {
  handleClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};
export default PacketTracerDialog;
