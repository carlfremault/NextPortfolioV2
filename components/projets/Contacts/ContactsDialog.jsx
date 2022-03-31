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
import BuildIcon from "@material-ui/icons/Build";
import GitHubIcon from "@material-ui/icons/GitHub";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
import CheckIcon from "@material-ui/icons/Check";
import Image from "next/image";

const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

const ContactsDialog = ({ handleClose, open }) => {
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
        <DialogTitle>Application de bureau Contacts - C#</DialogTitle>
        <DialogContent dividers>
          <Container
            maxWidth="md"
            style={{ marginTop: "2rem", marginBottom: "2rem" }}
          >
            <Image
              loader={myLoader}
              src="/imgs/Contacts.png"
              width="838px"
              height="485px"
              alt="Capture d'écran application Contacts"
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
                href="https://github.com/carlfremault/Contacts"
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
                href="/pdf/ContactsCasUtilisation.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="outlined"
                  style={theme.contrastButton}
                  startIcon={<PictureAsPdfIcon />}
                >
                  Cas d&apos;utilisation
                </Button>
              </a>
              <a
                href="/docs/Contacts/index.html"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="outlined"
                  style={theme.contrastButton}
                  startIcon={<BuildIcon />}
                >
                  Documentation technique
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
              2 novembre 2020
            </Typography>
            <Typography
              variant="body1"
              align="justify"
              style={{ margin: "1rem 0" }}
            >
              Pendant cette exercice nous avons fait évoluer une petite application de bureau permettant d&apos;enregistrer, supprimer et rechercher des contacts. Le travail à faire était divisé en quatre sprints, puis à la fin nous avons généré la documentation technique de l&apos;application.
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
                <ListItemText>Travailler en mode projet</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText inset>- Analyser les objectifs et les modalités d&apos;organisation d&apos;un projet</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText inset>- Planifier les activités</ListItemText>
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

ContactsDialog.propTypes = {
  handleClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};
export default ContactsDialog;
