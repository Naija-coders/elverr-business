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
  Tooltip,
  TooltipProps,
  tooltipClasses,
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
export const NavbarDiv = styled("div")(
  sx({
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    marginTop: "20px",
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
    "fontFamily": "DM Sans",
    "fontWeight": "bold",
    "fontSize": "0.9rem",
    "&:hover": {
      textDecoration: "underline",
      cursor: "pointer",
    },
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
export const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: "green",
    marginTop: "10px",
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#ffffff",
    minWidth: "99.5vw",
    paddingLeft: "4rem",
    paddingRight: "4rem",
    marginTop: "30px",
    boxShadow: "0px 24px 32px 4px rgba(167, 174, 186, 0.12);",
  },
}));
export const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "white",

    boxShadow: " 1px 1px #888888",
    fontSize: 11,
  },
}));
export const AllCategoryTooltip = styled(
  ({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
  )
)(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    minWidth: "99.5vw",
    boxShadow: " 1px 1px #888888",
    backgroundColor: "white",
    color: "black",
    fontSize: 11,
  },
}));
export const MyCustomTooltip = styled(
  ({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
  )
)(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "white",

    boxShadow: " 1px 1px #888888",
    fontSize: 11,
    position: "fixed",
    left: -8,
    minWidth: "74vw",
    minHeight: "100%",
  },
}));
export const StyledTypography = styled(Typography)(
  sx({
    color: "#222325",

    fontFamily: "GeoticaW01-FourOpen",
    fontSize: { xs: "1.3rem", md: "2rem" },
  })
);
export const Nondiv = styled("div")(
  sx({
    display: { md: "none" },
  })
);
export const Tooltipdiv = styled("div")(
  sx({
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    gap: "30px",
  })
);

export const ResponsiveDiv = styled("div")(
  sx({
    display: { xs: "none", sm: "none", md: "flex" },
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    background: "white",
    gap: "30px",
  })
);
export const StyledQuote = styled(Typography)(
  sx({
    fontSize: "40px",
    color: "#221133",
    fontFamily: "cursive",
  })
);
export const MainText = styled(Typography)(
  sx({
    color: "#221133",
    fontSize: "14px",
  })
);
export const TooltipButton = styled(Button)(
  sx({
    "background": "green",
    "&:hover": {
      background: "green",
    },
  })
);
export const TooltipText = styled(Typography)(
  sx({
    "color": "#fff",
    "fontSize": "0.7rem !important",
    "&:hover": {
      color: "green",
      textDecoration: "underline",
      cursor: "pointer",
    },
  })
);

export const StyledCaption = styled(Typography)(sx({}));
export const StyledAppBar = styled(AppBar)(
  sx({
    justifyContent: "center",

    display: { xs: "none", md: "flex" },
    background: "white",
    opacity: "100%",

    width: { xs: "none", sm: "100%", md: "100%" },
  })
);
export const MyAppBar = styled(AppBar)(
  sx({
    display: "flex",
    background: "white",
    width: "100%",
    flexDirection: "column",
    justifyContent: "flex-start",
    padding: "1rem 2rem",
  })
);
//BUTTON MAIN COLOR IS #F68B1E
export const StyledSearchSubmitButton = styled(Button)(
  sx({
    "color": "white",
    "textTransform": "none",
    "height": "40px",

    "background": "#F68B1E",
    "&:hover": {
      background: "#F68B1E",
    },
  })
);

export const StyledButton = styled(Button)(
  sx({
    display: { xs: "none", md: "flex" },
    color: "#222325",
    textTransform: "none",
  })
);

export const Styledpaper = styled(Paper)(
  sx({
    "height": 500,
    "width": 300,
    "position": "relative",

    "borderRadius": "10px",
    "&:hover": {
      elevation: "19%",
      height: 400,
      cursor: "pointer",
      boxShadow: 20,
    },
  })
);

export const Wrapper = styled("div")(
  sx({ width: "90%", marginLeft: "10%", marginTop: "4%" })
);
export const StyledProfile = styled("div")(
  sx({
    justifyContent: "spaced-evenly",
    alignItems: "self",

    display: "flex",
    left: "10%",
    position: "absolute",
    bottom: "40px",
  })
);
export const CustomDivider = styled(Divider)(
  sx({
    width: "100%",
  })
);
export const StyledTitle = styled("div")(
  sx({
    justifyContent: "spaced-evenly",
    alignItems: "center",

    display: "flex",
    left: "26%",
    position: "absolute",
    bottom: "40px",
  })
);

export const StyledMainButton = styled(Button)(
  sx({
    "display": { xs: "none", md: "flex" },

    "height": "40px",
    "borderStyle": "solid",
    "borderRadius": "20px",
    "fontFamily": "Avenir Light",
    "textTransform": "none",
    "background": "#222325",
    "color": "white",
    "fontSize": "13px",
    "&:hover": {
      background: "white",
      color: "#222325",
    },
  })
);
