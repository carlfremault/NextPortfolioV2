import { cleanup } from "@testing-library/react";
import RenderWithTheme from "../../utils/RenderWithTheme";
import Competences from "./Competences";

afterEach(cleanup);

describe("<Competences />", () => {
  it("Render without crashing", () => {
    const { getByTestId } = RenderWithTheme(<Competences />);
    const competences = getByTestId("competences");
    expect(competences).toBeInTheDocument;
  });
});
