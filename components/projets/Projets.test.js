import { cleanup } from "@testing-library/react";
import RenderWithTheme from "../../utils/RenderWithTheme";
import Projets from "./Projets";

afterEach(cleanup);

it("Render without crashing", () => {
  const { getByTestId } = RenderWithTheme(<Projets />);
  const projets = getByTestId("projets");
  expect(projets).toBeInTheDocument;
});
