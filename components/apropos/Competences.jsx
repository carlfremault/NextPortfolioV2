import { Container, Grid } from "@material-ui/core";
import CompetenceCard from "./CompetenceCard";
import SubTitle from "../tools/SubTitle";

const javascriptArray = ["React", "Next.js", "Node.js", "Material-UI", "Jest"];
const pooArray = ["C#", "Java", "Architecture MVC", "Tests unitaires & fonctionnels"];
const webArray = ["PHP", "Symfony", "HTML, CSS", "Bootstrap", "WordPress"];
const bddArray = ["MySQL", "PostgreSQL", "MongoDB", "Neo4j"];
const diversArray = ["Git, GitHub", "Méthode Agile, Kanban, Trello", "UML, Merise/2", "MS Azure"];
const codeQualityArray = ["SonarLint", "SonarQube", "Jenkins"]

/**
 * For each CompetenceCard a title and items-array needs to be specified
 */
const Competences = () => {
  return (
    <div data-testid="competences">
      <SubTitle title="Compétences" />
      <Container>
        <Grid container justifyContent="center" alignItems="stretch">
          <CompetenceCard title="JavaScript" items={javascriptArray} />
          <CompetenceCard title="Web dev" items={webArray}/>
          <CompetenceCard title="POO" items={pooArray} />
          <CompetenceCard title="BDD" items={bddArray} />
          <CompetenceCard title="Code Quality" items={codeQualityArray}/>
          <CompetenceCard title="Divers" items={diversArray} />
        </Grid>
      </Container>
    </div>
  );
};

export default Competences;
