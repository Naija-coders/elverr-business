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
export const StyledDiv = styled("div")(
  sx({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: "-50px",
  })
);

export const StyledText = styled(Typography)(
  sx({
    fontFamily: "DM Sans",
    fontWeight: "bold",
    fontSize: "0.8rem",
  })
);
export const StyledTextField = styled(TextField)(
  sx({
    "minWidth": {
      xs: "84%",
      sm: "100%",
      md: "90%",
      lg: "90%",
      xl: "90%",
    },
    "border": "1px solid #334155",
    "borderStyle": "none",
    "display": { xs: "flex", md: "flex", lg: "flex", xl: "flex" },

    "background": "#ffff",
    "borderRadius": "10px",

    "outline": 0,
    "& fieldset": {
      borderRadius: "10px",
    },
    "& .MuiInputBase-root": {},
    "& input::placeholder": {
      paddingLeft: "1rem",
      fontFamily: "DM Sans",
    },
  })
);
