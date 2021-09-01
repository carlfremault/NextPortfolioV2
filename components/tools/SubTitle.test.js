import { cleanup, render, screen } from "@testing-library/react";
import SubTitle from "./SubTitle";

const title = "A random subtitle";

afterEach(cleanup);

describe("<SubTitle />", () => {
  it("Render without crashing", () => {
    render(<SubTitle title={title} />);
  });
  it("Shows subtitle in DOM", () => {
    render(<SubTitle title={title} />);
    expect(screen.getByText(/a random subtitle/i)).toBeInTheDocument;
  });
});
