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
import CheckIcon from "@material-ui/icons/Check";
import Image from "next/image";

const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

const CalculatriceDialog = ({ handleClose, open }) => {
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
        <DialogTitle>Calculatrice Simple - Java</DialogTitle>
        <DialogContent dividers>
          <Container
            maxWidth="md"
            style={{ marginTop: "2rem", marginBottom: "2rem" }}
          >
            <Image
              loader={myLoader}
              src="/imgs/Calculatrice.png"
              width="838px"
              height="485px"
              alt="Calculatrice"
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
                href="https://github.com/carlfremault/Calculatrice"
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
                    href="https://www.java.com/"
                    target="_blank"
                    alt="Java official website"
                    rel="noreferrer"
                  >
                    <Image
                      loader={myLoader}
                      src="/imgs/LogoJava.png"
                      width="128px"
                      height="128px"
                      alt="Java Logo"
                    />
                  </a>
                </Grid>
              </Grid>
            </Grid>
          </Container>
          <Container maxWidth="md">
            <Typography variant="h6" style={{ margin: "2rem 0" }}>
              9 f??vrier 2021
            </Typography>
            <Typography
              variant="body1"
              align="justify"
              style={{ margin: "1rem 0" }}
            >
              Pour ce projet POO j&apos;ai cr???? une calculatrice en Java, avec une
              (simple) architecture MVC. Au fin de compte ce n&apos;??tait pas si
              simple que ??a !
            </Typography>
            <Typography
              variant="body1"
              align="justify"
              style={{ margin: "1rem 0 0 0" }}
            >
              Quelques d??fis rencontr??s et r??solus en route:
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <CheckIcon color="secondary" />
                </ListItemIcon>
                <ListItemText primary="Gestion des d??cimales (utilisation de la classe BigDecimal)" />
              </ListItem>
              <Typography
                variant="body1"
                align="justify"
                style={{ margin: "1rem 0 0 0" }}
              >
                Passage obligatoire pour tous les apprentis d??veloppeurs? En
                tout cas j&apos;??tais bien surpris quand &quot;ma nouvelle
                calculatrice&quot; affichait &quot;0.1 + 0.2 = 0.4&quot; ! La
                probl??matique ??tant bien document??e sur le web, la solution ??tait
                facile ?? trouver et j&apos;ai modifi?? tous mes types pour des
                BigDecimal au lieu des Doubles.
              </Typography>
              <ListItem>
                <ListItemIcon>
                  <CheckIcon color="secondary" />
                </ListItemIcon>
                <ListItemText primary="Gestion d???encha??nement de calculs sans appuyer sur la touche ?????gale???" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckIcon color="secondary" />
                </ListItemIcon>
                <ListItemText primary="Gestion de r??p??tition de calcul en appuyant la touche ?????gale??? successivement" />
              </ListItem>
              <Typography
                variant="body1"
                align="justify"
                style={{ margin: "1rem 0 0 0" }}
              >
                Ces deux points ??taient ??troitement li??s. Ma solution est
                d&apos;utiliser deux variables pour stocker les op??rateurs :
                lors d&apos;un appui sur un bouton &quot;op??rateur&quot;, avant
                de le stocker dans la variable d&apos;op??rateur actuel, la
                valeur stock??e dans cette variable est transmise dans une autre
                variable &quot;op??rateur pr??c??dent&quot;.
              </Typography>
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

CalculatriceDialog.propTypes = {
  handleClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};
export default CalculatriceDialog;
