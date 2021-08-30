import { Container, Grid, Typography } from "@material-ui/core";
import Image from "next/image";
import RedditJavaScript from "../../public/imgs/RedditJavaScript.png";
import RedditFrontend from "../../public/imgs/RedditFrontend.png";
import RedditReactJs from "../../public/imgs/RedditReactJs.png";
import RedditLearnReact from "../../public/imgs/RedditLearnReact.png";

const Forums = () => {
  return (
    <>
      <Container
        style={{
          marginTop: "4rem",
          marginBottom: "2rem",
        }}
      >
        <Typography variant="h3" color="primary" align="center">
          Forums
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
            Pour compléter l&apos;influx d&apos;informations reçus
            hebdomadairement je consulte régulièrement les sites Hackernews
            ainsi que Reddit. Sur un ton plus léger, ils me permettent non
            seulement de retrouver des nouveautés ou autres informations que
            j&apos;aurais ratés, mais aussi d&apos;avoir des opinions, méthodes,
            ... d&apos;autres personnes, dont pas mal de développeurs
            professionnels.
          </Typography>
          <Typography
            variant="body1"
            align="justify"
            style={{ marginBottom: "1rem" }}
          >
            Quelques &quot;subreddit&quot; que je consulte régulièrement:
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
                href="https://www.reddit.com/r/javascript/"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  width="180px"
                  height="40px"
                  src={RedditJavaScript}
                  alt="r/javascript"
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
                href="https://www.reddit.com/r/Frontend/"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  width="180px"
                  height="40px"
                  src={RedditFrontend}
                  alt="r/frontend"
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
                href="https://www.reddit.com/r/reactjs/"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  width="180px"
                  height="40px"
                  src={RedditReactJs}
                  alt="r/reactjs"
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
                href="https://www.reddit.com/r/learnreactjs/"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  width="180px"
                  height="40px"
                  src={RedditLearnReact}
                  alt="r/learnreact"
                />
              </a>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </>
  );
};

export default Forums;
