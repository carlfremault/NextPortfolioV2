import {
  Button,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles((theme) => ({
  subheader: {
    color: theme.palette.primary.main,
  },
  button: {
    borderColor: theme.palette.primary.main,
    color: theme.palette.primary.main,
    fontFamily: "Roboto",
    fontWeight: 400,
    textTransform: "none",
  },
}));

const CardStageSDI = () => {
  const classes = useStyles();

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
          <Typography className={classes.subheader}>
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
                className={classes.button}
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
                className={classes.button}
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
