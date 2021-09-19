import { Container, Grid } from "@material-ui/core";
import CompetenceCard from "./CompetenceCard";
import SubTitle from "../tools/SubTitle";

const javascriptArray = ["React", "Next.js", "Material-UI", "Jest"];
const cSharpArray = ["Architecture MVC", "SonarLint", "NUnit", "SpecFlow"];
const bddArray = ["SQL", "MongoDB"];
const diversArray = ["Git, GitHub", "Méthode Agile", "WordPress", "UML"];

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
          <CompetenceCard title="C#" items={cSharpArray} />
          <CompetenceCard title="BDD" items={bddArray} />
          <CompetenceCard title="Divers" items={diversArray} />
        </Grid>
      </Container>
    </div>
  );
};

export default Competences;
