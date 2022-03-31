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
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import Image from "next/image";

const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

const PortfolioDialog = ({ handleClose, open }) => {
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
        <DialogTitle>Création de site web portfolio - Next.js</DialogTitle>
        <DialogContent dividers>
          <Container
            maxWidth="md"
            style={{ marginTop: "2rem", marginBottom: "2rem" }}
          >
            <Image
              loader={myLoader}
              src="/imgs/Portfolio.png"
              width="1896px"
              height="923px"
              alt="Image of portfolio website frontpage"
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
                href="https://github.com/carlfremault/nextjsPortfolio"
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
                    href="https://nextjs.org/"
                    target="_blank"
                    alt="Next.js official website"
                    rel="noreferrer"
                  >
                    <Image
                      loader={myLoader}
                      src="/imgs/LogoNextJs.svg"
                      width="90px"
                      height="50px"
                      alt="NextJs Logo"
                    />
                  </a>
                </Grid>
                <Grid item>
                  <a
                    href="https://reactjs.org/"
                    target="_blank"
                    alt="React official website"
                    rel="noreferrer"
                  >
                    <Image
                      loader={myLoader}
                      src="/imgs/LogoReact.png"
                      width="150px"
                      height="50px"
                      alt="React Logo"
                    />
                  </a>
                </Grid>
                <Grid item>
                  <a
                    href="https://material-ui.com/"
                    target="_blank"
                    alt="Material-UI official website"
                    rel="noreferrer"
                  >
                    <Image
                      loader={myLoader}
                      src="/imgs/LogoMui.png"
                      width="82px"
                      height="82px"
                      alt="Material-UI Logo"
                    />
                  </a>
                </Grid>
              </Grid>
            </Grid>
          </Container>
          <Container maxWidth="md">
            <Typography variant="h6" style={{ margin: "2rem 0" }}>
              16 septembre 2021
            </Typography>
            <Typography
              variant="body1"
              align="justify"
              style={{ margin: "1rem 0" }}
            >
              Après mes 6 semaines de stage chez Sport Data Intelligence, où
              j&apos;ai créé leur nouveau site vitrine en utilisant Next.js,
              React et Material-UI, j&apos;ai décidé de refaire mon portfolio
              Wordpress avec ces mêmes technologies.
            </Typography>
            <Typography
              variant="body1"
              align="justify"
              style={{ margin: "1rem 0" }}
            >
              Pour ce projet je me suis concentré sur quelques points :
            </Typography>
            <Typography
              variant="h6"
              align="justify"
              style={{ margin: "1rem 0" }}
            >
              Style
            </Typography>
            <Typography
              variant="body1"
              align="justify"
              style={{ margin: "1rem 0" }}
            >
              Material-UI propose de différentes façons pour customiser le style
              des éléments. Pour ce projet j&apos;ai choisi de tout centraliser
              au maximum dans un &quot;custom theme&quot;, facilitant ainsi
              toute modification ultérieure.
            </Typography>
            <Typography
              variant="h6"
              align="justify"
              style={{ margin: "1rem 0" }}
            >
              Context
            </Typography>
            <Typography
              variant="body1"
              align="justify"
              style={{ margin: "1rem 0" }}
            >
              J&apos;avais déjà utilisé React Context dans quelques petites
              exercices, puis c&apos;était une bonne occasion d&apos;utiliser
              cette technologie dans un &quot;vrai&quot; projet (même s&apos;il
              s&apos;agit d&apos;un site statique). Ainsi j&apos;ai créé deux
              thèmes différents qui sont insérés dans l&apos;application en
              utilisant une implémentation (simple) du hook useContext.
            </Typography>
            <Typography
              variant="body1"
              align="justify"
              style={{ margin: "1rem 0" }}
            >
              Du coup l&apos;application est entouré de deux
              &quot;providers&quot;:
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <ArrowRightIcon color="secondary" />
                </ListItemIcon>
                <ListItemText>
                  La première couche (intérieure) utilise le
                  &quot;ThemeProvider&quot; de Material-UI et reçoit un des deux
                  thèmes en fonction du Context.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <ArrowRightIcon color="secondary" />
                </ListItemIcon>
                <ListItemText>
                  La deuxième couche (extérieure) utilise le
                  &quot;ContextProvider&quot;.
                </ListItemText>
              </ListItem>
            </List>
            <Typography
              variant="h6"
              align="justify"
              style={{ margin: "1rem 0" }}
            >
              Paquets npm
            </Typography>
            <Typography
              variant="body1"
              align="justify"
              style={{ margin: "1rem 0" }}
            >
              Je voulais m&apos;entrainer à utiliser des paquets npm. Les
              paquets que j&apos;ai utilisé pour ce projet :
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <ArrowRightIcon color="secondary" />
                </ListItemIcon>
                <ListItemText>
                  <a
                    href="https://www.npmjs.com/package/react-scroll"
                    target="_blank"
                    rel="noreferrer"
                    style={theme.heroLink}
                  >
                    react-scroll
                  </a>{" "}
                  pour les transitions entre les différentes sections de la page
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <ArrowRightIcon color="secondary" />
                </ListItemIcon>
                <ListItemText>
                  <a
                    href="https://www.npmjs.com/package/react-player"
                    target="_blank"
                    rel="noreferrer"
                    style={theme.heroLink}
                  >
                    react-player
                  </a>{" "}
                  pour insérer la vidéo de démonstration d&apos;un projet pour
                  le CNED
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <ArrowRightIcon color="secondary" />
                </ListItemIcon>
                <ListItemText>
                  <a
                    href="https://www.npmjs.com/package/react-image-gallery"
                    target="_blank"
                    rel="noreferrer"
                    style={theme.heroLink}
                  >
                    react-image-gallery
                  </a>{" "}
                  pour les galleries d&apos;images pour certains projets
                </ListItemText>
              </ListItem>
            </List>
            <Typography
              variant="h6"
              align="justify"
              style={{ margin: "1rem 0" }}
            >
              Tests
            </Typography>
            <Typography
              variant="body1"
              align="justify"
              style={{ margin: "1rem 0" }}
            >
              Finalement je voulais m&apos;entrainer à l&apos;utilisation de
              react-testing-library et Jest. Les tests unitaires que j&apos;ai
              fait sont assez simples (comme il s&apos;agit d&apos;un site
              statique) mais ainsi j&apos;ai pu me familiariser avec le
              fonctionnement.
            </Typography>
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

PortfolioDialog.propTypes = {
  handleClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};
export default PortfolioDialog;
