import { cleanup, render, screen } from "@testing-library/react";
import SectionTitle from "./SectionTitle";

const title = "A random section title";

afterEach(cleanup);

describe("<SectionTitle />", () => {
  it("Render without crashing", () => {
    render(<SectionTitle title={title} />);
  });
  it("Shows title in DOM", () => {
    render(<SectionTitle title={title} />);
    expect(screen.getByText(/a random section title/i)).toBeInTheDocument;
  });
});
