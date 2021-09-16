import { cleanup, fireEvent } from "@testing-library/react";
import RenderWithTheme from "../../utils/RenderWithTheme";
import CGU from "./CGU";

afterEach(cleanup);

describe("<CGU/>", () => {
  it("Render without crashing", () => {
    const { getByTestId } = RenderWithTheme(<CGU />);
    const cgu = getByTestId("cgu");
    expect(cgu).toBeInTheDocument;
  });
  it("Open dialog window", () => {
    const { getByTestId } = RenderWithTheme(<CGU />);
    const cguLink = getByTestId("cguLink");
    fireEvent.click(cguLink);
    const cguDialogTitle = getByTestId("cguDialogTitle");
    expect(cguDialogTitle).toBeInTheDocument;
  });
});
