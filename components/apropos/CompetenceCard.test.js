import { cleanup, within } from "@testing-library/react";
import RenderWithTheme from "../../utils/RenderWithTheme";
import CompetenceCard from "./CompetenceCard";

const title = "Random title";
const items = ["Random item 1", "Random item 2"];

afterEach(cleanup);

describe("<CompetenceCard/>", () => {
  it("Render without crashing", () => {
    const { getByTestId } = RenderWithTheme(
      <CompetenceCard title={title} items={items} />
    );
    const competenceCard = getByTestId("competenceCard");
    expect(competenceCard).toBeInTheDocument;
  });
  it("Display title and items", () => {
    const { getByTestId } = RenderWithTheme(
      <CompetenceCard title={title} items={items} />
    );
    const { getByText } = within(getByTestId("competenceCard"));
    expect(getByText("Random title")).toBeInTheDocument;
    expect(getByText("Random item 1")).toBeInTheDocument;
  });
});
