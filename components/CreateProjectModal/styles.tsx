import {
  Paper,
  Button,
  Typography,
  Avatar,
  AppBar,
  TextField,
  Checkbox,
  Box,
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
export const CustomBox = styled(Box)(
  sx({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: { xs: 305, md: 670 },
    height: "95%",

    overflowY: "scroll",

    outline: 0,
  })
);

export const CustomCheckbox = styled(Checkbox)(
  sx({
    "color": "green",
    "&.Mui-checked": {
      color: "green",
    },
  })
);
export const CustomDiv = styled("div")(
  sx({
    display: "flex",
    flexDirection: "column",
    height: "100%",

    gap: "1.3rem",
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
export const Checkboxlabel = styled(Typography)(
  sx({
    color: "#000000",
    fontFamily: "Inter",
    fontSize: "0.8rem",
  })
);
export const StyledTextField = styled(TextField)(
  sx({
    "display": { xs: "none", md: "flex" },
    "width": { md: "100%" },

    "background": "#F5F5F5",
    "borderRadius": " 8.4585px",
    "fontFamily": "Inter",

    "outline": 0,
    "& .MuiInputBase-root": {
      height: { xs: "30px", md: "35px" },
      borderRadius: " 8.4585px",
      background: "#F5F5F5",
      paddingLeft: "1rem",

      border: "none",
    },
    "& fieldset": { border: "none" },
    "&:focus": {
      border: "none",
    },
    "& input::placeholder": {
      fontSize: { xs: "30px", sm: "0.8rem" },
      fontFamily: "Inter",
    },
  })
);
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
export const FormTextField = styled(TextField)(
  sx({
    "width": "100%",
    "& .MuiMenuItem-root": {
      height: "50px",
    },
    "& .MuiInputBase-root": {
      height: { xs: "30px", md: "35px" },
      borderRadius: " 8.4585px",

      border: " 1px solid #D0D5DD",
      /* Shadow / xs */
      paddingLeft: "1rem",
      boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
    },
    "& fieldset": { border: "none" },
    "&:focus": {
      border: "none",
    },
    "borderRadius": "8px",
    "height": "30px",
  })
);
