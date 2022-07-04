import { Container } from "@material-ui/core";
import { useContext } from "react";
import { LanguageContext } from "../../pages/_app";
import BioTextFR from "./BioTextFR";
import BioTextGB from "./BioTextGB";

/**
 * Hardcoded bio
 */
const Bio = () => {
  const { langFR } = useContext(LanguageContext);

  return (
    <Container data-testid="bio">
        {langFR ? <BioTextFR /> : <BioTextGB />}
    </Container>
  );
};

export default Bio;
