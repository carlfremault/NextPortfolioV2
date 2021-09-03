import {
  Button,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import { useState } from "react";
import LinkIcon from "@material-ui/icons/Link";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import StageSDIDialog from "./StageSDIDialog";

/**
 * Hardcoded Project Card
 * CardHeader with title and subtitle
 * CardMedia with image
 * CardContent with text
 * CardActions with buttons in grid
 *  - one button to github or website
 *  - one button for dialog window 'more info'
 * Custom Dialog component needs open={open} and handleClose={handleClose} props
 */
const StageSDICard = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleOpen = (e) => {
    e.preventDefault();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        height: "95%",
      }}
    >
      <CardHeader
        title="Création de site web vitrine - Next.js"
        subheader={
          <Typography color="primary">Stage en milieu professionnel</Typography>
        }
      />
      <CardMedia
        image="/imgs/SDI.png"
        title="Site web Sport Data Intelligence"
        style={{ height: 200 }}
      />
      <CardContent>
        <Typography variant="body1" color="textPrimary" align="justify">
          Pour mon stage de première année j’ai été accueilli par Sport Data
          Intelligence, une start-up basée à Annecy (74), du 24 mai au 2 juillet
          2021.
        </Typography>
      </CardContent>
      <CardActions>
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="space-around"
        >
          <Grid item>
            <a
              href="https://sport-data-intelligence.com"
              target="_blank"
              rel="noreferrer"
            >
              <Button
                variant="outlined"
                style={theme.primaryButton}
                startIcon={<LinkIcon />}
              >
                Visitez le site
              </Button>
            </a>
          </Grid>
          <Grid item>
            <a href="#" onClick={handleOpen}>
              <Button
                variant="outlined"
                style={theme.primaryButton}
                startIcon={<AddCircleOutlineIcon />}
              >
                Plus d&apos;infos
              </Button>
            </a>
          </Grid>
        </Grid>
      </CardActions>
      <StageSDIDialog open={open} handleClose={handleClose} />
    </div>
  );
};

export default StageSDICard;
