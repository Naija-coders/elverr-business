import {
  Paper,
  Button,
  Typography,
  Avatar,
  AppBar,
  TextField,
} from "@mui/material";
import {
  styled,
  createTheme,
  ThemeProvider,
  experimental_sx as sx,
} from "@mui/system";
export const CustomDiv = styled("div")(
  sx({
    display: "grid",

    width: "100%",

    gridTemplateColumns: {
      md: "repeat(auto-fill, 30%)",
      lg: "repeat(auto-fill, 24%)",
      xl: "repeat(auto-fill,19%)",
    },
    /* columnGap: { lg: "9rem", md: "10rem" }, */
    columnGap: { md: "3%", lg: "1%" },
  })
);
export const CustomContainer = styled("div")(
  sx({
    width: { xl: "100%", lg: "100%", md: "100%" },
    height: "294.82px",
  })
);
