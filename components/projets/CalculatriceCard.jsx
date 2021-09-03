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
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import GitHubIcon from "@material-ui/icons/GitHub";
import CalculatriceDialog from "./CalculatriceDialog";

const CalculatriceCard = () => {
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
        title="Calculatrice Simple - Java"
        subheader={<Typography color="primary">Projet Personnel</Typography>}
      />
      <CardMedia
        image="/imgs/Calculatrice.png"
        title="Calculatrice"
        style={{ height: 200 }}
      />
      <CardContent>
        <Typography variant="body1" color="textPrimary" align="justify">
          Pour ce projet POO j&apos;ai créé une calculatrice en Java, avec une
          (simple) architecture MVC.
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
              href="https://github.com/carlfremault/Calculatrice"
              target="_blank"
              rel="noreferrer"
            >
              <Button
                variant="outlined"
                style={theme.primaryButton}
                startIcon={<GitHubIcon />}
              >
                GitHub repo
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
      <CalculatriceDialog open={open} handleClose={handleClose} />
    </div>
  );
};

export default CalculatriceCard;
