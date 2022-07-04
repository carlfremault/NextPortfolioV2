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
import MSProjectGallery from "./MSProjectGallery";
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import {
  cardTitleFR,
  cardTitleGB,
  dialogDateFR,
  dialogDateGB,
  dialogTextFR,
  dialogTextGB,
} from "./MSProjectText";
import DialogParagraph from "../../tools/DialogParagraph";

const MSProjectDialog = ({ handleClose, open }) => {
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
            <MSProjectGallery />
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
                href="/downloads/Projet1.mpp"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="outlined"
                  style={theme.contrastButton}
                  startIcon={<DownloadForOfflineIcon />}
                >
                  {langFR ? "Télécharger le projet" : "Download the project"}
                </Button>
              </a>
            </Grid>
          </Grid>
          <Container maxWidth="md">
            <Typography variant="h6" style={{ margin: "2rem 0" }}>              {langFR ? dialogDateFR : dialogDateGB}
            </Typography>
            <Typography
              variant="body1"
              align="justify"
              style={{ margin: "1rem 0" }}
            >
              {langFR ?
                dialogTextFR.map((el, index) => <DialogParagraph key={index} paragraphText={el} />)
                :
                dialogTextGB.map((el, index) => <DialogParagraph key={index} paragraphText={el} />)
              }
            </Typography>
          </Container>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} style={theme.contrastColor}>
            {langFR ? "Fermer" : "Close"}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

MSProjectDialog.propTypes = {
  handleClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};
export default MSProjectDialog;
