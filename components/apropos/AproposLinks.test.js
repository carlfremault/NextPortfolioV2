import { cleanup } from "@testing-library/react";
import RenderWithTheme from "../../utils/RenderWithTheme";
import AproposLinks from "./AproposLinks";

afterEach(cleanup);

it("Render without crashing", () => {
  const { getByTestId } = RenderWithTheme(<AproposLinks />);
  const aproposLinkedInButton = getByTestId("aproposLinkedInButton");
  const aproposGitHubButton = getByTestId("aproposGitHubButton");
  const aproposCVButton = getByTestId("aproposCVButton");

  expect(aproposLinkedInButton).toBeInTheDocument;
  expect(aproposGitHubButton).toBeInTheDocument;
  expect(aproposCVButton).toBeInTheDocument;
});
