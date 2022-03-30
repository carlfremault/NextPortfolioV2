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
import GitHubIcon from "@material-ui/icons/GitHub";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
import CheckIcon from "@material-ui/icons/Check";
import Image from "next/image";

const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

const CalculsDialog = ({ handleClose, open }) => {
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
        <DialogTitle>Application console C# - Calculs</DialogTitle>
        <DialogContent dividers>
          <Container
            maxWidth="md"
            style={{ marginTop: "2rem", marginBottom: "2rem" }}
          >
            <Image
              loader={myLoader}
              src="/imgs/Calculs.png"
              width="838px"
              height="485px"
              alt="Application Console Educative Calculs"
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
                href="https://github.com/carlfremault/Calculs"
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
                href="/pdf/CalculsRapportIncidents.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="outlined"
                  style={theme.contrastButton}
                  startIcon={<PictureAsPdfIcon />}
                >
                  Rapport d&apos;incidents
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
                    href="https://docs.microsoft.com/en-us/dotnet/csharp/"
                    target="_blank"
                    alt="C# documentation official website"
                    rel="noreferrer"
                  >
                    <Image
                      loader={myLoader}
                      src="/imgs/LogoCSharp.png"
                      width="90px"
                      height="90px"
                      alt="C# Logo"
                    />
                  </a>
                </Grid>
              </Grid>
            </Grid>
          </Container>
          <Container maxWidth="md">
            <Typography variant="h6" style={{ margin: "2rem 0" }}>
              12 octobre 2020
            </Typography>
            <Typography
              variant="body1"
              align="justify"
              style={{ margin: "1rem 0" }}
            >
              Pour cet exercice j'ai corrigé une application console éducative C# qui permet de s'entraîner en calculs. Comme point de départ une application contenant des erreurs a été fournie, ainsi qu'un ticket et rapport d'incidents.
            </Typography>
            <Container style={{ margin: "3rem 0" }}>
              <Image
                loader={myLoader}
                width="1586px"
                height="927px"
                src="/imgs/CalculsTicketIncident.png"
                alt="Udemy cours en cours"

              />
            </Container>
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
                  <ListItemText>Répondre aux incidents et aux demandes d&apos;assistance et d&apos;évolution</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText inset>- Collecter, suivre et orienter des demandes</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText inset>- Traiter des demandes concernant les applications</ListItemText>
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

CalculsDialog.propTypes = {
  handleClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};
export default CalculsDialog;
