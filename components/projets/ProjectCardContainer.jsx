import { Grid } from "@material-ui/core";
import { useContext } from "react";
import { useTheme } from "@material-ui/styles";
import { LanguageContext } from "../../pages/_app";
import AP1MediatekFormCard from "./AP1MediatekFormation/AP1MediatekFormCard";
import AP3MediatekFormCard from "./AP3MediatekGestion/AP3MediatekFormCard";
import APIRestCard from "./APIRest/APIRestCard";
import BackupChocCard from "./BackupChoc/BackupChocCard";
import CalculsCard from "./Calculs/CalculsCard";
import ContactsCard from "./Contacts/ContactsCard";
import DenombrementsCard from "./Denombrements/DenombrementsCard";
import EnvWebCard from "./EnvWeb/EnvWebCard";
import GLPIDeploiementCard from "./GLPIDeploiement/GLPIDeploiementCard";
import MigrationBDDCard from "./MigrationBDD/MigrationBDDCard";
import MigrationChocCard from "./MigrationChoc/MigrationChocCard";
import MSProjectCard from "./MSProject/MSProjectCard";
import NolarkCard from "./Nolark/NolarkCard";
import PCAChocCard from "./PCAChoc/PCAChocCard";
import PortfolioCard from "./portfolioNext/PortfolioCard";
import PPEMediaTekCard from "./PPEMediaTek/PPEMediaTekCard";
import StageFaibrikCard from "./stageFaibrik/StageFaibrikCard";
import StageSDICard from "./stageSDI/StageSDICard";
import SubTitle from "../tools/SubTitle";

/**
 * Grid container for ProjectCards
 * When adding a new ProjectCard it needs to be inserted in a new Grid item
 */
const ProjectCardContainer = () => {
  const theme = useTheme();
  const { langFR } = useContext(LanguageContext);

  return (
    <Grid container direction="column" alignItems="center">
      <SubTitle title={langFR ? "Projets de stage" : "Internship projects"} />
      <Grid item style={theme.projectCard}>
        <StageFaibrikCard />
      </Grid>
      <Grid item style={theme.projectCard}>
        <StageSDICard />
      </Grid>
      <SubTitle title={langFR ? "Projets scolaires" : "Course projects"} />
      <Grid item style={theme.projectCard} id="AP1">
        <AP1MediatekFormCard />
      </Grid>
      <Grid item style={theme.projectCard} id="AP3">
        <AP3MediatekFormCard />
      </Grid>
      <SubTitle title={langFR ? "Travaux pratiques" : "Course exercises"} />
      <Grid item style={theme.projectCard}>
        <MigrationBDDCard />
      </Grid>
      <Grid item style={theme.projectCard}>
        <APIRestCard />
      </Grid>
      <Grid item style={theme.projectCard}>
        <BackupChocCard />
      </Grid>
      <Grid item style={theme.projectCard}>
        <MigrationChocCard />
      </Grid>
      <Grid item style={theme.projectCard}>
        <PCAChocCard />
      </Grid>
      <Grid item style={theme.projectCard}>
        <GLPIDeploiementCard />
      </Grid>
      <Grid item style={theme.projectCard}>
        <EnvWebCard />
      </Grid>
      <Grid item style={theme.projectCard}>
        <MSProjectCard />
      </Grid>
      <Grid item style={theme.projectCard}>
        <PPEMediaTekCard />
      </Grid>
      <Grid item style={theme.projectCard}>
        <NolarkCard />
      </Grid>
      <Grid item style={theme.projectCard}>
        <ContactsCard />
      </Grid>
      <Grid item style={theme.projectCard}>
        <DenombrementsCard />
      </Grid>
      <Grid item style={theme.projectCard}>
        <CalculsCard />
      </Grid>
      <SubTitle title={langFR ? "Projets personnels" : "Personal projects"} />
      <Grid item style={theme.projectCard}>
        <PortfolioCard />
      </Grid>
    </Grid>
  );
};

export default ProjectCardContainer;
