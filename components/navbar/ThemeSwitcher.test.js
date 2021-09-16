import { render, screen } from "@testing-library/react";
import { ColorContext } from "../../pages/_app";
import ThemeSwitcher from "./ThemeSwitcher";

const toggleDarkMode = jest.fn();
let darkMode = true;

it("Render without crashing", () => {
  render(
    <ColorContext.Provider value={{ darkMode, toggleDarkMode }}>
      <ThemeSwitcher />
    </ColorContext.Provider>
  );
  expect(screen.getByTestId("themeSwitcher")).toBeInTheDocument;
});
