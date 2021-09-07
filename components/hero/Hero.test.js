import { cleanup, screen } from "@testing-library/react";
import RenderWithTheme from "../../utils/RenderWithTheme";
import Hero from "./Hero";

afterEach(cleanup);

describe("<Hero />", () => {
  it("Render without crashing", () => {
    RenderWithTheme(<Hero />);
  });

  it("Shows hero content in DOM", () => {
    RenderWithTheme(<Hero />);
    expect(screen.getByText(/carl fremault/i)).toBeInTheDocument;
    expect(screen.getByText(/étudiant développeur/i)).toBeInTheDocument;
    expect(screen.getByText(/découvrez mes projets/i)).toBeInTheDocument;
  });
});
