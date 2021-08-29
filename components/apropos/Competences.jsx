import {
  Card,
  CardContent,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";

const useStyles = makeStyles(() => ({
  card: {
    backgroundColor: "#052026",
    boxShadow: "none",
    width: "250px",
  },
}));

const Competences = () => {
  const classes = useStyles();

  return (
    <Container
      style={{
        marginTop: "4rem",
        marginBottom: "4rem",
      }}
    >
      <Typography
        variant="h3"
        color="primary"
        align="center"
        style={{ marginBottom: "1rem" }}
      >
        Compétences
      </Typography>
      <Grid container justifyContent="center" alignItems="stretch">
        <Grid
          item
          component={Card}
          classes={{ root: classes.card }}
          raised={false}
        >
          <CardContent>
            <Typography variant="h5" color="secondary" align="center">
              JavaScript
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon style={{ transform: "translate(10px)" }}>
                  <CheckIcon color="secondary" />
                </ListItemIcon>
                <ListItemText>React</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon style={{ transform: "translate(10px)" }}>
                  <CheckIcon color="secondary" />
                </ListItemIcon>
                <ListItemText>Next.js</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon style={{ transform: "translate(10px)" }}>
                  <CheckIcon color="secondary" />
                </ListItemIcon>
                <ListItemText>Material-UI</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon style={{ transform: "translate(10px)" }}>
                  <CheckIcon color="secondary" />
                </ListItemIcon>
                <ListItemText>Jest</ListItemText>
              </ListItem>
            </List>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          classes={{ root: classes.card }}
          raised={false}
        >
          <CardContent>
            <Typography variant="h5" color="secondary" align="center">
              C#
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon style={{ transform: "translate(10px)" }}>
                  <CheckIcon color="secondary" />
                </ListItemIcon>
                <ListItemText>Architecture MVC</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon style={{ transform: "translate(10px)" }}>
                  <CheckIcon color="secondary" />
                </ListItemIcon>
                <ListItemText>SonarLint</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon style={{ transform: "translate(10px)" }}>
                  <CheckIcon color="secondary" />
                </ListItemIcon>
                <ListItemText>NUnit</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon style={{ transform: "translate(10px)" }}>
                  <CheckIcon color="secondary" />
                </ListItemIcon>
                <ListItemText>SpecFlow</ListItemText>
              </ListItem>
            </List>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          classes={{ root: classes.card }}
          raised={false}
        >
          <CardContent>
            <Typography variant="h5" color="secondary" align="center">
              BDD
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon style={{ transform: "translate(10px)" }}>
                  <CheckIcon color="secondary" />
                </ListItemIcon>
                <ListItemText>SQL</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon style={{ transform: "translate(10px)" }}>
                  <CheckIcon color="secondary" />
                </ListItemIcon>
                <ListItemText>MongoDB</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon style={{ transform: "translate(10px)" }}>
                  <CheckIcon color="secondary" />
                </ListItemIcon>
                <ListItemText>WinDesign</ListItemText>
              </ListItem>
            </List>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          classes={{ root: classes.card }}
          raised={false}
        >
          <CardContent>
            <Typography variant="h5" color="secondary" align="center">
              Divers
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon style={{ transform: "translate(10px)" }}>
                  <CheckIcon color="secondary" />
                </ListItemIcon>
                <ListItemText>Git</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon style={{ transform: "translate(10px)" }}>
                  <CheckIcon color="secondary" />
                </ListItemIcon>
                <ListItemText>Méthode Agile</ListItemText>
              </ListItem>
            </List>
          </CardContent>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Competences;
