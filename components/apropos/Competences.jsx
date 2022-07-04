import { Container, Grid } from "@material-ui/core";
import { useContext } from "react";
import {LanguageContext } from "../../pages/_app";
import CompetenceCard from "./CompetenceCard";
import SubTitle from "../tools/SubTitle";

const javascriptArray = ["React", "Next.js", "Node.js", "Material-UI", "Jest"];
const pooArrayFR = ["C#", "Java", "Architecture MVC", "Tests unitaires & fonctionnels"];
const pooArrayGB = ["C#", "Java", "MVC architecture", "Unit and functional testing"];
const webArray = ["PHP", "Symfony", "HTML, CSS", "Bootstrap", "WordPress"];
const bddArray = ["MySQL", "PostgreSQL", "MongoDB", "Neo4j"];
const diversArrayFR = ["Git, GitHub", "Méthode Agile, Kanban, Trello", "UML, Merise/2", "Microsoft Azure"];
const diversArrayGB = ["Git, GitHub", "Agile methodology, Kanban, Trello", "UML, Merise/2", "Microsoft Azure"];
const codeQualityArray = ["SonarLint", "SonarQube", "Jenkins"]

/**
 * For each CompetenceCard a title and items-array needs to be specified
 */
const Competences = () => {
  const { langFR } = useContext(LanguageContext);

  return (
    <div data-testid="competences">
      <SubTitle title={langFR ? "Compétences" : "Skills"} />
      <Container>
        <Grid container justifyContent="center" alignItems="stretch">
          <CompetenceCard title="JavaScript" items={javascriptArray} />
          <CompetenceCard title="Web dev" items={webArray}/>
          <CompetenceCard title={langFR ? "POO" : "OOP" } items={langFR ? pooArrayFR : pooArrayGB} />
          <CompetenceCard title="BDD" items={bddArray} />
          <CompetenceCard title="Code Quality" items={codeQualityArray}/>
          <CompetenceCard title={langFR ? "Divers" : "Various"} items={langFR ? diversArrayFR : diversArrayGB} />
        </Grid>
      </Container>
    </div>
  );
};

export default Competences;
