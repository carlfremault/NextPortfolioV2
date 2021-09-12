import { cleanup, fireEvent } from "@testing-library/react";
import RenderWithTheme from "../../utils/RenderWithTheme";
import ProjectCard from "./ProjectCard";
import StageSDIDialog from "./stageSDI/StageSDIDialog";

afterEach(cleanup);

const title = "A random title";
const subtitle = "A random subtitle";
const image = "/imgs/SDI.png";
const imageTitle = "A random image title";
const imageHeight = 200;
const cardText = "A random card text";
const siteLink = "https://sport-data-intelligence.com";
const dialog = StageSDIDialog;

describe("<ProjectCard />", () => {
  it("Render without crashing", () => {
    const { getByTestId } = RenderWithTheme(
      <ProjectCard
        title={title}
        subtitle={subtitle}
        image={image}
        imageTitle={imageTitle}
        imageHeight={imageHeight}
        cardText={cardText}
        siteLink={siteLink}
        dialog={dialog}
      />
    );
    const projectCard = getByTestId("projectCard");
    expect(projectCard).toBeInTheDocument;
  });

  it("Displays content passed with props in DOM", () => {
    const { getByTestId } = RenderWithTheme(
      <ProjectCard
        title={title}
        subtitle={subtitle}
        image={image}
        imageTitle={imageTitle}
        imageHeight={imageHeight}
        cardText={cardText}
        siteLink={siteLink}
        dialog={dialog}
      />
    );
    const projectCardTitle = getByTestId("projectCardTitle");
    expect(projectCardTitle).toHaveTextContent("A random title");
    const projectCardSubTitle = getByTestId("projectCardSubTitle");
    expect(projectCardSubTitle).toHaveTextContent("A random subtitle");
    const projectCardImage = getByTestId("projectCardImage");
    expect(projectCardImage).toBeInTheDocument;
    expect(projectCardImage).toHaveAttribute("title", "A random image title");
    const projectCardText = getByTestId("projectCardText");
    expect(projectCardText).toHaveTextContent("A random card text");
    const projectCardSiteLink = getByTestId("projectCardSiteLink");
    expect(projectCardSiteLink).toBeInTheDocument;
  });

  it("Dialog functioning", () => {
    const { getByTestId } = RenderWithTheme(
      <ProjectCard
        title={title}
        subtitle={subtitle}
        image={image}
        imageTitle={imageTitle}
        imageHeight={imageHeight}
        cardText={cardText}
        siteLink={siteLink}
        dialog={dialog}
      />
    );
    const projectCardMoreInfo = getByTestId("projectCardMoreInfo");
    expect(projectCardMoreInfo).toBeInTheDocument;
    fireEvent.click(projectCardMoreInfo);
    const dialogContent = getByTestId("dialogContent");
    expect(dialogContent).toBeVisible;
  });
});
