import PropTypes from "prop-types";
import {
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Typography,
} from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import GitHubIcon from "@material-ui/icons/GitHub";
import Image from "next/image";
import AlgosTriGallery from "./AlgosTriGallery";

const AlgosTriDialog = ({ handleClose, open }) => {
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
        <DialogTitle>Algorithmes de Tri - C#</DialogTitle>
        <DialogContent dividers>
          <Container
            maxWidth="md"
            style={{ marginTop: "2rem", marginBottom: "2rem" }}
          >
            <AlgosTriGallery />
          </Container>
          <Grid
            container
            direction="column"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item style={{ textAlign: "center" }}>
              <a
                href="https://github.com/carlfremault/AlgorithmesDeTri"
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
                    href="https://docs.microsoft.com/en-us/dotnet/csharp/"
                    target="_blank"
                    alt="C# documentation official website"
                    rel="noreferrer"
                  >
                    <Image
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
              31 décembre 2020
            </Typography>
            <Typography
              variant="body1"
              align="justify"
              style={{ margin: "1rem 0" }}
            >
              Ceci est une petite application console en C# qui permet à
              l&apos;utilisateur de trier une liste d&apos;entiers avec des
              différents algorithmes de tri, à savoir le tri par insertion, le
              tri par sélection et le tri à bulles. Après avoir choisi
              l&apos;algorithme l&apos;utilisateur doit saisir une liste
              d&apos;entiers (avec liste de longueur variable et détection
              d’erreurs de saisie avec une boucle try/catch) puis la liste est
              triée en affichant les différentes étapes. Pour l&apos;affichage
              du menu j&apos;ai utilisé la classe StringBuilder
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

AlgosTriDialog.propTypes = {
  handleClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};
export default AlgosTriDialog;
