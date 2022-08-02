import { Container } from "@material-ui/core";
import { useContext } from "react";
import { LanguageContext } from "../../pages/_app";
import {
  bioTextFR,
  bioTextGB,
  dialogListBioFR,
  dialogListBioGB,
} from "./BioText";
import DialogList from "../tools/DialogList";
import DialogParagraph from "../tools/DialogParagraph";

const Bio = () => {
  const { langFR } = useContext(LanguageContext);

  return (
    <Container data-testid="bio" maxWidth="md">
      {langFR ?
        <Container>
          {bioTextFR.map((el, index) => <DialogParagraph key={index} paragraphText={el} />)}
          <DialogList listItems={dialogListBioFR} style={{marginTop: "4rem"}}/>
        </Container>
        :
        <Container>
          {bioTextGB.map((el, index) => <DialogParagraph key={index} paragraphText={el} />)}
          <DialogList listItems={dialogListBioGB} style={{marginTop: "4rem"}}/>
        </Container>
      }
    </Container>
  );
};

export default Bio;
