import React from "react";
import ITservices from "../../components/SubCategories/ITservices";

type Props = {};
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    secondary: {
      light: "#34a4221a",
      main: "#34a4221a",
      dark: "#34a4221a",
      contrastText: "#000000",
    },
  },
});
export default function subcat({}: Props) {
  return (
    <ThemeProvider theme={theme}>
      <ITservices />
    </ThemeProvider>
  );
}
