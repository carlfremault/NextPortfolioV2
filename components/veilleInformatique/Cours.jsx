import { Container, Grid, Typography } from "@material-ui/core";
import SubTitle from "../tools/SubTitle";
import Image from "next/image";

const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

const Cours = () => {
  return (
    <div data-testid="forums">
      <SubTitle title="Cours & exercices" />
      <Container>
        <Container maxWidth="md">
          <Typography variant="body1" align="justify" gutterBottom>
            Pour compléter mon parcours de formation au CNED, et afin de me préparer aux stages, j&apos;ai entâmé quelques cours en ligne, notamment sur la plateforme Udemy. Les cours sont volumineux, je progresse petit à petit dès que j&apos;ai un peu de temps.
          </Typography>
          <Typography variant="body1" align="justify" gutterBottom>
            Quelques cours &quot;en cours&quot; :
          </Typography>
          <Container style={{ margin: "2rem 0" }}>
            <Image
              loader={myLoader}
              width="991px"
              height="281px"
              src="/imgs/CoursUdemy.png"
              alt="Udemy cours en cours"

            />
          </Container>
          <Typography variant="body1" align="justify" gutterBottom>
            Finalement, j&apos;aime bien m&apos;entraîner, aussi bien au niveau de maîtrise des langages qu&apos;en algorithmique et structures de données, avec les exercices proposées sur des différents sites. C&apos;est une façon ludique de progresser et de voir des différentes façons de résoudre un problème.
          </Typography>
          <Grid
            container
            direction="row"
            justifyContent="space-around"
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
                href="https://www.codewars.com/"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  loader={myLoader}
                  width="140px"
                  height="40px"
                  src="/imgs/LogoCodewars.png"
                  alt="Codewars"
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
                href="https://exercism.org/"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  loader={myLoader}
                  width="140px"
                  height="40px"
                  src="/imgs/LogoExercism.png"
                  alt="Exercism"
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
                href="https://leetcode.com/"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  loader={myLoader}
                  width="140px"
                  height="40px"
                  src="/imgs/LogoLeetCode.png"
                  alt="LeetCode"
                />
              </a>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </div>
  );
};

export default Cours;
