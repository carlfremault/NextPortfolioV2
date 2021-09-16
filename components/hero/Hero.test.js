import { cleanup, render, screen } from "@testing-library/react";
import { ColorContext } from "../../pages/_app";
import { ThemeProvider } from "@material-ui/styles";
import darkTheme from "../../theme/darkTheme";
import Hero from "./Hero";

afterEach(cleanup);

const toggleDarkMode = jest.fn();
let darkMode = true;

describe("<Hero />", () => {
  it("Render without crashing", () => {
    render(
      <ColorContext.Provider value={{ darkMode, toggleDarkMode }}>
        <ThemeProvider theme={darkTheme}>
          <Hero />
        </ThemeProvider>
      </ColorContext.Provider>
    );
  });

  it("Shows hero content in DOM", () => {
    render(
      <ColorContext.Provider value={{ darkMode, toggleDarkMode }}>
        <ThemeProvider theme={darkTheme}>
          <Hero />
        </ThemeProvider>
      </ColorContext.Provider>
    );
    expect(screen.getByText(/carl fremault/i)).toBeInTheDocument;
    expect(screen.getByText(/étudiant développeur/i)).toBeInTheDocument;
    expect(screen.getByText(/découvrez mes projets/i)).toBeInTheDocument;
  });
});
