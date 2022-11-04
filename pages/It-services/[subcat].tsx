import React from "react";
import ITservices from "../../components/SubCategories/ITservices";
import { useRouter } from "next/router";
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
  const route = useRouter();

  console.log("querying the route", route.query.subcat);

  return (
    <ThemeProvider theme={theme}>
      <ITservices />
    </ThemeProvider>
  );
}
