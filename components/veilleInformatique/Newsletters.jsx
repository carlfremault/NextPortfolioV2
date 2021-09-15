import { Container, Grid, Typography } from "@material-ui/core";
import SubTitle from "../tools/SubTitle";
import Image from "next/image";

const Newsletters = () => {
  return (
    <div data-testid="newsletters">
      <SubTitle title="Newsletters" />
      <Container>
        <Container maxWidth="md">
          <Typography variant="body1" align="justify" gutterBottom>
            Comme axe principale de ma veille informatique et selon la méthode
            &quot;push&quot; j&apos;ai choisi les newsletters, qui pour moi
            trouvent un équilibre parfait entre un apport régulier
            d&apos;informations, sans toutefois se trouver inondé comme on
            pourrait l&apos;être avec des feed RSS par exemple.
          </Typography>
          <Typography variant="body1" align="justify" gutterBottom>
            Les quatres newsletters hebdomadaires auxquels je me suis abonné :
          </Typography>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            style={{ margin: "2rem 0 3rem" }}
          >
            <Grid
              item
              xs={12}
              md={3}
              style={{ margin: "1rem 0", textAlign: "center" }}
            >
              <a
                href="https://javascriptweekly.com/"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  width="180px"
                  height="40px"
                  src="/imgs/JavaScriptWeekly.png"
                  alt="JavaScript Weekly"
                />
              </a>
            </Grid>
            <Grid
              item
              xs={12}
              md={3}
              style={{ margin: "1rem 0", textAlign: "center" }}
            >
              <a
                href="https://react.statuscode.com/"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  width="180px"
                  height="40px"
                  src="/imgs/ReactStatus.png"
                  alt="React Status"
                />
              </a>
            </Grid>
            <Grid
              item
              xs={12}
              md={3}
              style={{ margin: "1rem 0", textAlign: "center" }}
            >
              <a
                href="https://frontendfoc.us/"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  width="180px"
                  height="40px"
                  src="/imgs/FrontendFocus.png"
                  alt="Frontend Focus"
                />
              </a>
            </Grid>
            <Grid
              item
              xs={12}
              md={3}
              style={{ margin: "1rem 0", textAlign: "center" }}
            >
              <a
                href="https://nodeweekly.com/"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  width="180px"
                  height="40px"
                  src="/imgs/NodeWeekly.png"
                  alt="Node Weekly"
                />
              </a>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </div>
  );
};

export default Newsletters;
