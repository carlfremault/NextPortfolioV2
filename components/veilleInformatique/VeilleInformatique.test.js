import { cleanup } from "@testing-library/react";
import RenderWithTheme from "../../utils/RenderWithTheme";
import VeilleInformatique from "./VeilleInformatique";

afterEach(cleanup);

it("Render without crashing", () => {
  const { getByTestId } = RenderWithTheme(<VeilleInformatique />);
  const veilleInformatique = getByTestId("veilleInformatique");
  expect(veilleInformatique).toBeInTheDocument;
});
