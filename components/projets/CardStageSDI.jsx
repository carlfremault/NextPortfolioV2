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
import LinkIcon from "@material-ui/icons/Link";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

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
    marginTop: "1rem",
  },
  buttonsGroup: {
    position: "absolute",
    bottom: 5,
    left: "auto",
    right: "auto",
    border: "1px solid red",
    width: "90%",
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
        title="Création de site web vitrine - Next.js"
        subheader={
          <Typography className={classes.subheader}>
            Stage en milieu professionnel
          </Typography>
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
                className={classes.button}
                startIcon={<LinkIcon />}
              >
                Visitez le site
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
