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
import AlgosTriDialog from "./AlgosTriDialog";

const AlgosTriCard = () => {
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
        title="Algorithmes de Tri - C#"
        subheader={<Typography color="primary">Projet Personnel</Typography>}
      />
      <CardMedia
        image="/imgs/InsertionThumb.png"
        title="Calculatrice"
        style={{ height: 200 }}
      />
      <CardContent>
        <Typography variant="body1" color="textPrimary" align="justify">
          Une petite application console en C# qui permet de trier une liste
          d&apos;entiers avec des différents algorithmes: tri par insertion, tri
          par sélection, tri à bulles.
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
              href="https://github.com/carlfremault/AlgorithmesDeTri"
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
      <AlgosTriDialog open={open} handleClose={handleClose} />
    </div>
  );
};

export default AlgosTriCard;
