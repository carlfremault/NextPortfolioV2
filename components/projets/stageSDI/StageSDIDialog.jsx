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
import LinkIcon from "@material-ui/icons/Link";
import CheckIcon from "@material-ui/icons/Check";
import Image from "next/image";

const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

const StageSDIDialog = ({ handleClose, open }) => {
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
        <DialogTitle>Création de site web vitrine - Next.js</DialogTitle>
        <DialogContent dividers data-testid="dialogContent">
          <Container
            maxWidth="md"
            style={{ marginTop: "2rem", marginBottom: "2rem" }}
          >
            <Image
              loader={myLoader}
              src="/imgs/SDI.png"
              width="1284px"
              height="742px"
              alt="Image of SDI website frontpage"
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
                href="https://sport-data-intelligence.com"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="outlined"
                  style={theme.contrastButton}
                  startIcon={<LinkIcon />}
                >
                  Visitez le site
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
              2 juillet 2021
            </Typography>
            <Typography
              variant="body1"
              align="justify"
              style={{ margin: "1rem 0" }}
            >
              Pour mon stage de première année j’ai été accueilli par Sport Data
              Intelligence, une start-up basée à Annecy (74), du 24 mai au 2
              juillet 2021. Pendant ce stage j’ai crée le nouveau site web
              vitrine de l’entreprise.
            </Typography>
            <Typography
              variant="body1"
              align="justify"
              style={{ margin: "1rem 0" }}
            >
              Cette première expériénce professionnelle en tant que développeur
              m’a permis de consolider mes acquis en JavaScript, React, Next.js
              et Material UI. J’ai également appris à développer dans un cadre
              professionnel: travailler en équipe, avec des contraintes, des
              responsabilités, des délais à respecter et des attentes à
              satisfaire.
            </Typography>
            <Typography
              variant="body1"
              align="justify"
              style={{ margin: "1rem 0 0 0" }}
            >
              Expériences :
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <CheckIcon color="secondary" />
                </ListItemIcon>
                <ListItemText primary="JavaScript, Next.js, React, Material UI" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckIcon color="secondary" />
                </ListItemIcon>
                <ListItemText primary="Initiation à l’utilisation de Redux" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckIcon color="secondary" />
                </ListItemIcon>
                <ListItemText primary="Méthode Agile, Daily Scrum Meetings, Storyboard, Kanban" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckIcon color="secondary" />
                </ListItemIcon>
                <ListItemText primary="Gitflow" />
              </ListItem>
            </List>
          </Container>
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            onClick={handleClose}
            style={theme.contrastColor}
            data-testid="projectCardCloseDialog"
          >
            Fermer
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

StageSDIDialog.propTypes = {
  handleClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};
export default StageSDIDialog;
