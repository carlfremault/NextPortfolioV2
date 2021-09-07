import { render } from "@testing-library/react";
import { ThemeProvider } from "@material-ui/styles";
import darkTheme from "../theme/darkTheme";

const RenderWithTheme = (children) => {
  return render(<ThemeProvider theme={darkTheme}>{children}</ThemeProvider>);
};

export default RenderWithTheme;
