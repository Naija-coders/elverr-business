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

    width: "94%",
    marginLeft: "-15px",
    gridTemplateColumns: {
      md: "25% 25% 25%",
      lg: "150px 150px 150px 150px",
    },
    justifyContent: "space-between",
  })
);
export const CustomContainer = styled("div")(
  sx({ width: "250.34px", height: "294.82px" })
);
