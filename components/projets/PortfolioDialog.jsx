import PropTypes from "prop-types";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@material-ui/core";
import { useTheme } from "@material-ui/styles";

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
        maxWidth="md"
      >
        <DialogTitle>Création de site portfolio - Next.js</DialogTitle>
        <DialogContent dividers>
          <Typography variant="body1">Hello world</Typography>
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
