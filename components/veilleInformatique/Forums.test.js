import { cleanup } from "@testing-library/react";
import RenderWithTheme from "../../utils/RenderWithTheme";
import Forums from "./Forums";

afterEach(cleanup);

it("Render without crashing", () => {
  const { getByTestId } = RenderWithTheme(<Forums />);
  const forums = getByTestId("forums");
  expect(forums).toBeInTheDocument;
});
