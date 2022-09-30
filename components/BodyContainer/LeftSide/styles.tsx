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
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
export const StyledListItem = styled(ListItem)(
  sx({
    width: "150px",
  })
);
export const StyledText = styled(Typography)(
  sx({
    fontFamily: "DM Sans",
    fontWeight: "bolder",
    fontSize: "1rem !important",
  })
);

export const CommonText = styled(Typography)(
  sx({
    fontFamily: "DM Sans",
    fontWeight: 400,
    fontSize: "0.8rem !important",
  })
);
