import { Container, Grid, Typography } from "@material-ui/core";
import SubTitle from "../tools/SubTitle";
import Image from "next/image";
import RedditJavaScript from "../../public/imgs/RedditJavaScript.png";
import RedditFrontend from "../../public/imgs/RedditFrontend.png";
import RedditReactJs from "../../public/imgs/RedditReactJs.png";
import RedditLearnReact from "../../public/imgs/RedditLearnReact.png";

const Forums = () => {
  return (
    <>
      <SubTitle title="Forums" />
      <Container>
        <Container maxWidth="md">
          <Typography variant="body1" align="justify" gutterBottom>
            Pour compléter l&apos;influx d&apos;informations reçus
            hebdomadairement je consulte régulièrement les sites Hackernews
            ainsi que Reddit. Sur un ton plus léger, ils me permettent non
            seulement de retrouver des nouveautés ou autres informations que
            j&apos;aurais ratés, mais aussi d&apos;avoir des opinions, méthodes,
            ... d&apos;autres personnes, dont pas mal de développeurs
            professionnels.
          </Typography>
          <Typography variant="body1" align="justify" gutterBottom>
            Quelques &quot;subreddit&quot; que je consulte régulièrement:
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
              md={3}
              style={{ margin: "1rem 0", textAlign: "center" }}
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
              md={3}
              style={{ margin: "1rem 0", textAlign: "center" }}
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
              md={3}
              style={{ margin: "1rem 0", textAlign: "center" }}
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
