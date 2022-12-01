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
export const StyledTypography = styled(Typography)(
  sx({
    fontFamily: "DM Sans",
    fontSize: "0.9rem",
    color: "#747582",
    fontWeight: 500,
  })
);
export const CustomDiv = styled("div")(
  sx({
    fontFamily: "DM Sans",
    fontSize: "0.9rem",
    color: "#747582",
    fontWeight: 500,
  })
);
export const ContainerWrapperDiv = styled("div")(
  sx({
    display: "flex",
    flexDirection: "column",
    gap: "30px",
  })
);
