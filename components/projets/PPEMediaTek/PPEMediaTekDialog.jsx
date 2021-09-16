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
import BuildIcon from "@material-ui/icons/Build";
import BrushIcon from "@material-ui/icons/Brush";
import GitHubIcon from "@material-ui/icons/GitHub";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
import Image from "next/image";
import PPEMediaTekGallery from "./PPEMediaTekGallery";
import ReactPlayer from "react-player/lazy";

const PPEMediaTekDialog = ({ handleClose, open }) => {
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
        <DialogTitle>Application de bureau - C#, MySQL</DialogTitle>
        <DialogContent dividers>
          <Container
            maxWidth="md"
            style={{ marginTop: "2rem", marginBottom: "2rem" }}
          >
            <PPEMediaTekGallery />
          </Container>
          <Grid
            container
            direction="column"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item style={{ textAlign: "center" }}>
              <a
                href="https://github.com/carlfremault/CNED_Atelier2_MediaTek86"
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
                href="../../docs/PPEMediaTek/TechnicalDocs/index.html"
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
              <a
                href="../../docs/PPEMediaTek/PencilPrototype/index.html"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="outlined"
                  style={theme.contrastButton}
                  startIcon={<BrushIcon />}
                >
                  Pencil prototype
                </Button>
              </a>
              <a
                href="../../docs/PPEMediaTek/CompteRendu.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="outlined"
                  style={theme.contrastButton}
                  startIcon={<PictureAsPdfIcon />}
                >
                  Compte Rendu
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
                <Grid item>
                  <a
                    href="https://www.mysql.com/"
                    target="_blank"
                    alt="MySQL official website"
                    rel="noreferrer"
                  >
                    <Image
                      src="/imgs/LogoMySql.png"
                      width="120px"
                      height="62px"
                      alt="MySQL Logo"
                    />
                  </a>
                </Grid>
              </Grid>
            </Grid>
          </Container>
          <Container maxWidth="md">
            <Typography variant="h6" style={{ margin: "2rem 0" }}>
              4 avril 2021
            </Typography>
            <Typography
              variant="body1"
              align="justify"
              style={{ margin: "1rem 0" }}
            >
              Notre mission pour ce deuxième Atelier Professionnel était de
              créer une application permettant la gestion des membres du
              personnel d&apos;une médiathèque, ainsi que de leurs absences.
            </Typography>
            <Typography
              variant="body1"
              align="justify"
              style={{ margin: "1rem 0" }}
            >
              L&apos;application est écrite en C# selon une architecture MVC et
              liée à une base de données MySQL. Elle permet de consulter la
              liste du personnel puis d&apos;ajouter, modifier ou supprimer des
              membres. Pour chaque membre on peut consulter un liste de ses
              absences, on peut en ajouter des nouvelles, ou encore modifier ou
              supprimer des absences enrégistrées.
            </Typography>
            <Typography
              variant="body1"
              align="justify"
              style={{ margin: "1rem 0" }}
            >
              En plus, je suis complètement sorti de ma zone de confort pour
              vous proposer cette vidéo de démonstration!
            </Typography>
          </Container>
          <Grid
            container
            direction="row"
            justifyContent="space-around"
            alignItems="center"
            style={{ margin: "2rem 0" }}
          >
            <ReactPlayer
              url="../../video/MediaTek86.mp4"
              controls
              config={{
                file: {
                  attributes: {
                    controlsList: "nodownload",
                  },
                },
              }}
            />
          </Grid>
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

PPEMediaTekDialog.propTypes = {
  handleClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};
export default PPEMediaTekDialog;
