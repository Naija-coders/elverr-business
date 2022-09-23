import { makeStyles, withStyles } from "@mui/styles";
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

export const StyledPaper = styled(Paper)(
  sx({
    "height": { sm: "180px", md: "230px", lg: "230px" },
    "background": "#FFFFFF",
    "boxShadow": " 0px 6px 16px rgba(52, 164, 34, 0.19)",
    "borderRadius": "22.2652px 22.2652px 22.27px 22.27px",
    "width": { sm: "180px", md: "250px", lg: "300px" },
    "display": "flex",
    "gap": "1.5rem",
    "alignItems": "center",
    "flexDirection": "column",
    "justifyContent": "center",
    "&:hover": {
      cursor: "pointer",
      border: " 1px solid #34A422",
    },
  })
);
export const Div1 = styled("div")(
  sx({
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  })
);
export const Div2 = styled("div")(
  sx({
    display: "flex",
    flexDirection: { xs: "column", sm: "row" },

    gap: "2rem",
  })
);
export const Div3 = styled("div")(sx({}));

export const TextTypography = styled(Typography)(
  sx({
    fontWeight: "400",

    fontSize: "1.1rem",
    fontFamily: "DM Sans",
    lineHeight: "30px",
  })
);
