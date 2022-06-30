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
} from "./APIRestText";
import DialogParagraph from "../../tools/DialogParagraph";

const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

const APIRestDialog = ({ handleClose, open }) => {
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
              src="/imgs/APIRest.png"
              width="838px"
              height="485px"
              alt="Capture d'écran Postman"
            />
          </Container>
          {!langFR &&
            <Container maxWidth="md">
              <Typography
                variant="subtitle1"
                align="center"
                style={{ margin: "1rem 0" }}
              >
                As this project was a part of my (French) training program, all documents are in French.
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
                href="https://github.com/carlfremault/APIRest"
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
              dialogTextFR.map((el, index) => <DialogParagraph key={index} paragraphText={el} />)
              :
              dialogTextGB.map((el, index) => <DialogParagraph key={index} paragraphText={el} />)
            }
          </Container>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} style={theme.contrastColor}>
            {langFR ? 'Fermer' : 'Close'}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

APIRestDialog.propTypes = {
  handleClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};
export default APIRestDialog;
