import { cleanup } from "@testing-library/react";
import RenderWithTheme from "../../utils/RenderWithTheme";
import Bio from "./Bio";

afterEach(cleanup);

it("Render without crashing", () => {
  const { getByTestId } = RenderWithTheme(<Bio />);
  const bio = getByTestId("bio");
  expect(bio).toBeInTheDocument;
});
