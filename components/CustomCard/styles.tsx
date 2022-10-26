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

    width: "91%",

    gridTemplateColumns: {
      md: "150px 150px  150px ",
      lg: "150px 150px 150px 150px",
      xl: "150px 150px 150px 150px 150px",
    },
    columnGap: { lg: "9rem", md: "10rem" },
  })
);
export const CustomContainer = styled("div")(
  sx({
    width: { xl: "280px", lg: "270.34px", md: "260px" },
    height: "294.82px",
  })
);
