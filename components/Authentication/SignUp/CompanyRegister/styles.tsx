import {
  Paper,
  Button,
  Typography,
  Box,
  Avatar,
  AppBar,
  TextField,
  Divider,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

import {
  styled,
  createTheme,
  ThemeProvider,
  experimental_sx as sx,
} from "@mui/system";
export const Div1 = styled("div")(
  sx({
    height: {
      xs: "250px",
      sm: "250px",
      md: "304px",
      lg: "304px",
      xl: "304px",
    },

    background:
      "linear-gradient(180deg, rgba(95, 84, 84, 0) -42.37%, #000000 100%)",
  })
);

export const TextTypography = styled(Typography)(
  sx({
    fontFamily: "DM Sans",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "36px",
    lineHeight: "44px",
    /* identical to box height, or 122% */

    textAlign: "center",
    letterSpacing: "-0.02em",

    color: "#FFFFFF",
  })
);
export const TitleText = styled(Typography)(
  sx({
    fontFamily: "DM Sans",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "1.4rem",

    /* identical to box height, or 122% */

    color: "#170F49",
  })
);
export const StyledTextField = styled(TextField)(
  sx({
    "border": "1px solid #334155",
    "borderStyle": "none",
    "display": { xs: "flex", md: "flex", lg: "flex", xl: "flex" },

    "background": "#ffff",
    "borderRadius": "10px",

    "outline": 0,
    "& fieldset": {
      borderRadius: "10px",
    },
  })
);

export const BodyText = styled(Typography)(
  sx({
    fontFamily: "DM Sans",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "20px",
    lineHeight: "30px",
    /* identical to box height, or 122% */

    textAlign: "center",

    color: "#FFFFFF",
  })
);
