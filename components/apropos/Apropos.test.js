import { cleanup } from "@testing-library/react";
import RenderWithTheme from "../../utils/RenderWithTheme";
import Apropos from "./Apropos";

afterEach(cleanup);

describe("<Apropos />", () => {
  it("Render without crashing", () => {
    const { getByTestId } = RenderWithTheme(<Apropos />);
    const apropos = getByTestId("apropos");

    expect(apropos).toBeInTheDocument;
  });
});
