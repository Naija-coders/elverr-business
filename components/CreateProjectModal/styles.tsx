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
export const CustomHeader = styled(Typography)(
  sx({
    color: "#000000",
    fontFamily: "Inter",
    fontSize: "1.4rem",
    fontWeight: "bolder",
    marginTop: "20px",
  })
);
export const CustomDiv = styled("div")(
  sx({
    display: "flex",
    flexDirection: "column",
    height: "100%",

    gap: "1rem",
  })
);

export const CustomLabel = styled("div")(
  sx({
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  })
);
export const CustomLabelText = styled(Typography)(
  sx({
    color: "#000000",
    fontFamily: "Inter",
    fontSize: "1rem",
    fontWeight: 700,
  })
);
export const StyledTextField = styled(TextField)(
  sx({
    "height": "30px",

    "display": { xs: "none", md: "flex" },
    "width": { md: "100%" },

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
