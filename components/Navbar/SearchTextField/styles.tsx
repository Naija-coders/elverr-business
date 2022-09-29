import {
  Paper,
  Button,
  Typography,
  Box,
  Avatar,
  AppBar,
  TextField,
  Card,
  Link,
  Divider,
} from "@mui/material";
import {
  styled,
  createTheme,
  ThemeProvider,
  experimental_sx as sx,
} from "@mui/system";
import { BorderStyle } from "@mui/icons-material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

export const StyledTextField = styled(TextField)(
  sx({
    "height": "30px",

    "display": { xs: "none", md: "flex" },
    "width": { md: "45%" },

    "background": "#F5F5F5",
    "borderRadius": " 8.4585px",

    "outline": 0,
    "& .MuiInputBase-root": {
      height: { xs: "30px", md: "30px" },
      borderRadius: " 8.4585px",
      background: "#F5F5F5",

      border: "none",
    },
    "& fieldset": { border: "none" },
    "&:focus": {
      border: "none",
    },
    "& input::placeholder": {
      fontSize: { xs: "30px", sm: "0.8rem" },
      paddingLeft: "1rem",
    },
  })
);
