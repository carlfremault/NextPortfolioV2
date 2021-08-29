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
        title="Calculatrice Simple - Java"
        subheader={
          <Typography className={classes.subheader}>
            Projet Personnel
          </Typography>
        }
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
