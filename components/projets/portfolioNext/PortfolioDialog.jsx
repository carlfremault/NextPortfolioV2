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
import GitHubIcon from "@material-ui/icons/GitHub";
import Image from "next/image";
import {
  cardTitleFR,
  cardTitleGB,
  dialogDateFR,
  dialogDateGB,
  dialogTextFR,
  dialogTextGB,
  dialogTextStyleFR,
  dialogTextStyleGB,
  dialogTextContextFR,
  dialogTextContextGB,
  dialogListContextFR,
  dialogListContextGB,
  dialogTextPackageFR,
  dialogTextPackageGB,
  dialogListPackageFR,
  dialogListPackageGB,
  dialogTextTestFR,
  dialogTextTestGB,
} from "./PortfolioText";
import DialogParagraph from "../../tools/DialogParagraph";
import DialogList from "../../tools/DialogList";

const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

const PortfolioDialog = ({ handleClose, open }) => {
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
                href="https://github.com/carlfremault/NextPortfolioV2"
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
              {langFR ? dialogDateFR : dialogDateGB}
            </Typography>
            {langFR ?
              dialogTextFR.map(el => <DialogParagraph paragraphText={el} />)
              :
              dialogTextGB.map(el => <DialogParagraph paragraphText={el} />)
            }
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
              {langFR ? dialogTextStyleFR : dialogTextStyleGB}
            </Typography>
            <Typography
              variant="h6"
              align="justify"
              style={{ margin: "1rem 0" }}
            >
              Context
            </Typography>
            {langFR ?
              dialogTextContextFR.map(el => <DialogParagraph paragraphText={el} />)
              :
              dialogTextContextGB.map(el => <DialogParagraph paragraphText={el} />)
            }
            {langFR ?
              <DialogList listItems={dialogListContextFR} />
              :
              <DialogList listItems={dialogListContextGB} />
            }
            <Typography
              variant="h6"
              align="justify"
              style={{ margin: "1rem 0" }}
            >
              npm packages
            </Typography>
            {langFR ?
              dialogTextPackageFR.map(el => <DialogParagraph paragraphText={el} />)
              :
              dialogTextPackageGB.map(el => <DialogParagraph paragraphText={el} />)
            }
            {langFR ?
              <DialogList listItems={dialogListPackageFR} theme={theme} />
              :
              <DialogList listItems={dialogListPackageGB} theme={theme} />
            }
            <Typography
              variant="h6"
              align="justify"
              style={{ margin: "1rem 0" }}
            >
              Tests
            </Typography>
            {langFR ?
              dialogTextTestFR.map(el => <DialogParagraph paragraphText={el} />)
              :
              dialogTextTestGB.map(el => <DialogParagraph paragraphText={el} />)
            }
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
