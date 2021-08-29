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
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import GitHubIcon from "@material-ui/icons/GitHub";

const CardStageSDI = () => {
  const theme = useTheme();

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
        title="Application de bureau - C#, MySQL"
        subheader={
          <Typography color="primary">
            Projet Personnalisé Encadré - BTS SIO
          </Typography>
        }
      />
      <CardMedia
        image="/imgs/Personnel.png"
        title="Application de bureau MediaTek86"
        style={{ height: 190 }}
      />
      <CardContent>
        <Typography variant="body1" color="textPrimary" align="justify">
          Pour ce deuxième Atelier Professionnel nous avons créé une application
          permettant la gestion des membres du personnel d&apos;une médiathèque,
          ainsi que de leurs absences.
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
              href="https://github.com/carlfremault/CNED_Atelier2_MediaTek86"
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
            <a href="#" target="_blank" rel="noreferrer">
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
    </div>
  );
};

export default CardStageSDI;
