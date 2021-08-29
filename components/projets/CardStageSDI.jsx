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
import LinkIcon from "@material-ui/icons/Link";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

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
