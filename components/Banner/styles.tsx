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
export const CustomImage = styled("div")(
  sx({
    height: {
      xs: "400px",
      sm: "400px",
      md: "500px",
      lg: "580px",
      xl: "806px",
    },

    background:
      "linear-gradient(180deg, rgba(95, 84, 84, 0) -42.37%, #000000 100%)",
  })
);
