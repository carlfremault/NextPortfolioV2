import { Container, Grid, Typography } from "@material-ui/core";
import Image from "next/image";
import JavaScriptWeekly from "../../public/imgs/JavaScriptWeekly.png";
import ReactStatus from "../../public/imgs/ReactStatus.png";
import FrontendFocus from "../../public/imgs/FrontendFocus.png";
import NodeWeekly from "../../public/imgs/NodeWeekly.png";

const Newsletters = () => {
  return (
    <>
      <Container
        style={{
          marginTop: "4rem",
          marginBottom: "2rem",
        }}
      >
        <Typography variant="h3" color="primary" align="center">
          Newsletters
        </Typography>
      </Container>
      <Container
        style={{
          marginTop: "2rem",
          marginBottom: "4rem",
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="body1"
            align="justify"
            style={{ marginBottom: "1rem" }}
          >
            Comme axe principale de ma veille informatique j&apos;ai choisi les
            newsletters, qui pour moi trouvent une équilibre parfaite entre un
            apport régulier d&apos;informations, sans toutefois se trouver
            inondé commme on pourrait l&apos;être avec des feed RSS par exemple.
          </Typography>
          <Typography
            variant="body1"
            align="justify"
            style={{ marginBottom: "1rem" }}
          >
            Les quatres newsletter auxquels je me suis abonné :
          </Typography>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid
              item
              xs={12}
              sm={6}
              md={2}
              style={{ margin: "0.5rem 0.2rem", textAlign: "center" }}
            >
              <a
                href="https://javascriptweekly.com/"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  width="180px"
                  height="40px"
                  src={JavaScriptWeekly}
                  alt="JavaScript Weekly"
                />
              </a>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={2}
              style={{ margin: "0.5rem 0.2rem", textAlign: "center" }}
            >
              <a
                href="https://react.statuscode.com/"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  width="180px"
                  height="40px"
                  src={ReactStatus}
                  alt="React Status"
                />
              </a>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={2}
              style={{ margin: "0.5rem 0.2rem", textAlign: "center" }}
            >
              <a
                href="https://frontendfoc.us/"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  width="180px"
                  height="40px"
                  src={FrontendFocus}
                  alt="Frontend Focus"
                />
              </a>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={2}
              style={{ margin: "0.5rem 0.2rem", textAlign: "center" }}
            >
              <a
                href="https://nodeweekly.com/"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  width="180px"
                  height="40px"
                  src={NodeWeekly}
                  alt="Node Weekly"
                />
              </a>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </>
  );
};

export default Newsletters;
