import { Container, makeStyles, Typography } from "@material-ui/core";
import ProjectCards from "./ProjectCards";

const useStyles = makeStyles({
  projets: {
    backgroundColor: "#1E3C40",
    overflow: "hidden",
    paddingLeft: 0,
    paddingRight: 0,
  },
});

/**
 * 'Projets' section
 * Section title and container ProjectCards for project cards
 */
const Projets = () => {
  const classes = useStyles();

  return (
    <section id="projets">
      <Container maxWidth={false} className={classes.projets}>
        <Container
          style={{
            marginTop: "4rem",
            marginBottom: "2rem",
          }}
        >
          <Typography variant="h1" color="primary" align="center">
            Projets
          </Typography>
        </Container>
        <ProjectCards />
      </Container>
    </section>
  );
};

export default Projets;
