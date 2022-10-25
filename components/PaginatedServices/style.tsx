import { makeStyles, withStyles } from "@mui/styles";
import {
  Paper,
  Button,
  Typography,
  Avatar,
  AppBar,
  TextField,
  Box,
} from "@mui/material";
import {
  styled,
  createTheme,
  ThemeProvider,
  experimental_sx as sx,
} from "@mui/system";
//for container use width 100%
//maxwidth 1500px
export const StyledTypography = styled(Typography)(
  sx({
    fontFamily: "DM Sans",
    fontStyle: "normal",
    fontWeight: "400",

    lineHeight: "21px",
    width: "100px",
    fontSize: "0.9rem",
    color: "#747582",
  })
);
export const StyledDiv = styled("div")(
  sx({
    "width": "100px",
    "padding": "8px 16px",
    "&:hover": { background: "#F5F5F5" },
    "cursor": "pointer",
    "borderRadius": "3px",
  })
);
