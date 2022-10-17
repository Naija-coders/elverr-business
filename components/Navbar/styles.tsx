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
export const StyledMainDiv = styled("div")(
  sx({
    display: "flex",
    justifyContent: { md: "space-evenly" },

    alignItems: "center",

    width: { md: "60%" },
  })
);
export const StyleContainerDiv = styled("div")(
  sx({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: { md: "0rem", lg: "5rem" },
    width: "100%",
  })
);
export const CommonText = styled(Button)(
  sx({
    "fontFamily": "DM Sans",
    "fontWeight": "400",
    "fontSize": "0.8rem !important",
    "textTransform": "none",
    "color": "#747582",

    "&:hover": {
      background: "#F5F5F5",
      borderRadius: " 3px",

      color: "#747582",
    },
  })
);
export const HeaderText = styled(Typography)(
  sx({
    fontFamily: "DM Sans",
    fontStyle: "normal",
    fontWeight: "bolder",
    fontSize: "2rem",
    lineHeight: "57px",
    /* identical to box height, or 119% */

    color: "#222222",
  })
);

export const StyledTextTypo = styled(Typography)(
  sx({
    "fontFamily": "DM Sans",

    "fontSize": "0.9rem",
    "marginTop": "3px",
    "lineHeight": "1rem",
    "fontWeight": 400,
    "color": "#7C7C8D",
    "cursor": "pointer",
    "&:hover": {
      color: "#34A422",
    },
  })
);
export const StyledText = styled(Typography)(
  sx({
    fontFamily: "DM Sans",
    fontWeight: "bold",
    fontSize: "0.9rem",
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
