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
import { useContext } from "react";
import { useTheme } from "@material-ui/styles";
import { LanguageContext } from "../../../pages/_app";
import BuildIcon from "@material-ui/icons/Build";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkIcon from "@material-ui/icons/Link";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
import Image from "next/image";
import AP1MediatekFormGallery from "./AP1MediatekFormGallery";
import ReactPlayer from "react-player/lazy";
import {
  cardTitleFR,
  cardTitleGB,
  dialogDateFR,
  dialogDateGB,
  dialogTextFR,
  dialogTextGB,
  dialogVideoTextFR,
  dialogVideoTextGB
} from "./AP1MediatekFormationText";
import DialogParagraph from "../../tools/DialogParagraph";

const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

const AP1MediatekFormDialog = ({ handleClose, open }) => {
  const theme = useTheme();
  const { langFR } = useContext(LanguageContext);

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
        <DialogTitle>
          {langFR ? cardTitleFR : cardTitleGB}
        </DialogTitle>
        <DialogContent dividers>
          <Container
            maxWidth="md"
            style={{ marginTop: "2rem", marginBottom: "2rem" }}
          >
            <AP1MediatekFormGallery />
          </Container>
          {!langFR &&
            <Container maxWidth="md">
              <Typography
                variant="subtitle1"
                align="center"
                style={{ margin: "1rem 0" }}
              >
                As this was a school project, the entire application as well as all documents are in French.
              </Typography>
            </Container>
          }
          <Grid
            container
            direction="column"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item style={{ textAlign: "center" }}>
              <a
                href="https://github.com/carlfremault/mediatekformation"
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
                href="https://mediatek86-formation.go.yj.fr/public/"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="outlined"
                  style={theme.contrastButton}
                  startIcon={<LinkIcon />}
                >
                  Website
                </Button>
              </a>
              <a
                href="/docs/AP1Mediatek/index.html"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="outlined"
                  style={theme.contrastButton}
                  startIcon={<BuildIcon />}
                >
                  {langFR ? "Documentation technique" : "Technical documentation"}
                </Button>
              </a>
              <a
                href="/pdf/APMediatek86Contexte.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="outlined"
                  style={theme.contrastButton}
                  startIcon={<PictureAsPdfIcon />}
                >
                  {langFR ? "Contexte" : "Context"}
                </Button>
              </a>
              <a
                href="/pdf/AP1MediaFormDossier.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="outlined"
                  style={theme.contrastButton}
                  startIcon={<PictureAsPdfIcon />}
                >
                  {langFR ? "Expression des besoins" : "Requirements"}
                </Button>
              </a>
              <a
                href="/pdf/A1CompteRendu.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="outlined"
                  style={theme.contrastButton}
                  startIcon={<PictureAsPdfIcon />}
                >
                  {langFR ? "Compte Rendu" : "Report"}
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
                    href="https://www.php.net/"
                    target="_blank"
                    alt="PHP documentation official website"
                    rel="noreferrer"
                  >
                    <Image
                      loader={myLoader}
                      src="/imgs/LogoPhp.png"
                      width="110px"
                      height="60px"
                      alt="PHP Logo"
                    />
                  </a>
                </Grid>
                <Grid item>
                  <a
                    href="https://symfony.com/"
                    target="_blank"
                    alt="Symfony framework official website"
                    rel="noreferrer"
                  >
                    <Image
                      loader={myLoader}
                      src="/imgs/LogoSymfony.png"
                      width="80px"
                      height="90px"
                      alt="Symfony Logo"
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
                      loader={myLoader}
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
              {langFR ? dialogDateFR : dialogDateGB}
            </Typography>
            {langFR ?
              dialogTextFR.map(el => <DialogParagraph paragraphText={el} />)
              :
              dialogTextGB.map(el => <DialogParagraph paragraphText={el} />)
            }
            <Typography
              variant="body1"
              align="justify"
              style={{ margin: "2rem 0 1rem" }}
            >
              {langFR ? dialogVideoTextFR : dialogVideoTextGB}
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
              url="../../video/Atelier1.mkv"
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

AP1MediatekFormDialog.propTypes = {
  handleClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default AP1MediatekFormDialog;
