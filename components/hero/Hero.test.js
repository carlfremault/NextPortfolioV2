import { cleanup, render, screen } from "@testing-library/react";
import { ThemeProvider } from "@material-ui/styles";
import Hero from "./Hero";
import theme from "../../theme/theme";

afterEach(cleanup);

describe("<Hero />", () => {
  it("Render without crashing", () => {
    render(
      <ThemeProvider theme={theme}>
        <Hero />
      </ThemeProvider>
    );
  });
  it("Shows hero content in DOM", () => {
    render(
      <ThemeProvider theme={theme}>
        <Hero />
      </ThemeProvider>
    );
    expect(screen.getByText(/carl fremault/i)).toBeInTheDocument;
    expect(screen.getByText(/étudiant développeur/i)).toBeInTheDocument;
    expect(screen.getByText(/découvrez mes projets/i)).toBeInTheDocument;
  });
});
