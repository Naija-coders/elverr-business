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
    background: " #FFFFFF",
    borderRadius: "10px",

    width: { lg: "106%", md: "112%" },
  })
);
