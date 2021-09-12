import { cleanup } from "@testing-library/react";
import RenderWithTheme from "../../utils/RenderWithTheme";
import Newsletters from "./Newsletters";

afterEach(cleanup);

it("Render without crashing", () => {
  const { getByTestId } = RenderWithTheme(<Newsletters />);
  const newsletters = getByTestId("newsletters");
  expect(newsletters).toBeInTheDocument;
});
