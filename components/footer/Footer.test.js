import { cleanup } from "@testing-library/react";
import RenderWithTheme from "../../utils/RenderWithTheme";
import Footer from "./Footer";

afterEach(cleanup);

it("Render without crashing", () => {
  const { getByTestId } = RenderWithTheme(<Footer />);
  const footer = getByTestId("footer");
  expect(footer).toBeInTheDocument;
});
