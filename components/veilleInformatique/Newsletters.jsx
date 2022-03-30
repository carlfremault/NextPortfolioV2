import { Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from "@material-ui/core";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import SubTitle from "../tools/SubTitle";
import Image from "next/image";

const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

const Newsletters = () => {
  return (
    <div data-testid="newsletters">
      <SubTitle title="Newsletters" />
      <Container>
        <Container maxWidth="md">
          <Typography variant="body1" align="justify" gutterBottom>
            Comme axe principale de ma veille informatique, et selon la méthode
            &quot;push&quot;, j&apos;ai choisi les newsletters, qui pour moi
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
                  loader={myLoader}
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
                  loader={myLoader}
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
                  loader={myLoader}
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
                  loader={myLoader}
                  width="180px"
                  height="40px"
                  src="/imgs/NodeWeekly.png"
                  alt="Node Weekly"
                />
              </a>
            </Grid>
          </Grid>
          <Typography variant="body1" align="justify" gutterBottom>
            On y trouve des articles, des informations sur les releases, et des tutoriels. Voici une sélection parmi les articles que j'ai trouvé intéressants :
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon style={{ transform: "translate(10px)" }}>
                <ArrowRightIcon color="secondary" />
              </ListItemIcon>
              <ListItemText>
                <a
                  href="https://blog.logrocket.com/zero-downtime-deploys-with-digitalocean-github-and-docker/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Zero downtime deploys with Digital Ocean, GitHub and Docker (Thomas Hunter II LogRocket Blog)
                </a>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon style={{ transform: "translate(10px)" }}>
                <ArrowRightIcon color="secondary" />
              </ListItemIcon>
              <ListItemText>
                <a
                  href="https://kentcdodds.com/blog/listify-a-java-script-array"
                  target="_blank"
                  rel="noreferrer"
                >
                  Listify a JavaScript Array (Kent C. Dodds Blog)
                </a>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon style={{ transform: "translate(10px)" }}>
                <ArrowRightIcon color="secondary" />
              </ListItemIcon>
              <ListItemText>
                <a
                  href="https://www.sitepoint.com/beyond-console-log-level-up-your-debugging-skills/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Beyond Console.log() - Level up your debugging skills (Christian Heilmann, SitePoint)
                </a>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon style={{ transform: "translate(10px)" }}>
                <ArrowRightIcon color="secondary" />
              </ListItemIcon>
              <ListItemText>
                <a
                  href="https://simonplend.com/are-you-using-promises-and-async-await-safely-in-node-js/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Are you using promises and async/await safely in Node.js ? (Simon Plenderleith blog)
                </a>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon style={{ transform: "translate(10px)" }}>
                <ArrowRightIcon color="secondary" />
              </ListItemIcon>
              <ListItemText>
                <a
                  href="https://dmitripavlutin.com/value-vs-reference-javascript/"
                  target="_blank"
                  rel="noreferrer"
                >
                  The difference between values and references in JavaScript (Dmitri Pavlutin blog)
                </a>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon style={{ transform: "translate(10px)" }}>
                <ArrowRightIcon color="secondary" />
              </ListItemIcon>
              <ListItemText>
                <a
                  href="https://medium.com/the-node-js-collection/node-js-16-available-now-7f5099a97e70"
                  target="_blank"
                  rel="noreferrer"
                >
                  Node.js 16 available now (Bethany Griggs, Medium.com)
                </a>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon style={{ transform: "translate(10px)" }}>
                <ArrowRightIcon color="secondary" />
              </ListItemIcon>
              <ListItemText>
                <a
                  href="https://reactjs.org/blog/2021/06/08/the-plan-for-react-18.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  The plan for React 18 (React.js blog)
                </a>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon style={{ transform: "translate(10px)" }}>
                <ArrowRightIcon color="secondary" />
              </ListItemIcon>
              <ListItemText>
                <a
                  href="https://www.robinwieruch.de/react-usecontext-hook/"
                  target="_blank"
                  rel="noreferrer"
                >
                  How to useContext in React (Robin Wieruch blog)
                </a>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon style={{ transform: "translate(10px)" }}>
                <ArrowRightIcon color="secondary" />
              </ListItemIcon>
              <ListItemText>
                <a
                  href="https://code.visualstudio.com/updates/v1_60"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visual Studio Code August 2021 released (Microsoft)
                </a>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon style={{ transform: "translate(10px)" }}>
                <ArrowRightIcon color="secondary" />
              </ListItemIcon>
              <ListItemText>
                <a
                  href="https://github.com/airbnb/javascript"
                  target="_blank"
                  rel="noreferrer"
                >
                  Airbnb JavaScript Style Guide (Airbnb GitHub)
                </a>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon style={{ transform: "translate(10px)" }}>
                <ArrowRightIcon color="secondary" />
              </ListItemIcon>
              <ListItemText>
                <a
                  href="https://remix.run/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Remix : A major new (sort of) full stack React-based framework for web apps (Remix)
                </a>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon style={{ transform: "translate(10px)" }}>
                <ArrowRightIcon color="secondary" />
              </ListItemIcon>
              <ListItemText>
                <a
                  href="https://snyk.io/blog/peacenotwar-malicious-npm-node-ipc-package-vulnerability/"
                  target="_blank"
                  rel="noreferrer"
                >
                  How Npm packages were used in a protest against the war in Ukraine (Snyk blog)
                </a>
              </ListItemText>
            </ListItem>
          </List>
          <Typography variant="body1" align="justify" gutterBottom style={{margin: "2rem 0 0"}}>
            Pendant la formation au sein du CNED nous avons régulièrement été confronté à des nouvelles technologies. Lors de l&apos;installation, souvent les éditeurs proposent l&apos;inscription à leur newsletter. Ainsi je me suis inscrit également aux newsletters de Neo4j et MongoDB, technologies qui ont particulièrement retenus mon attention.
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
                href="https://neo4j.com/"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  loader={myLoader}
                  width="140px"
                  height="40px"
                  src="/imgs/LogoNeo4j.png"
                  alt="Neo4j"
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
                href="https://www.mongodb.com/"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  loader={myLoader}
                  width="140px"
                  height="40px"
                  src="/imgs/LogoMongoDB.png"
                  alt="MongoDB"
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
