import React from "react";
import {
  Div1,
  TextTypography,
  BodyText,
  StyledTextField,
  TitleText,
} from "./styles";
import { StyledBox, StyleContainer } from "../../../NotLoggedIn/style";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  Button,
  Divider,
  IconButton,
  TextField,
  InputAdornment,
} from "@mui/material";
import { useRouter } from "next/router";
import MenuItem from "@mui/material/MenuItem";
import axios from "axios";
type Props = {};

const companysize = [
  {
    value: "10-99",
    label: "small ( 10-99 employees ) ",
  },
  {
    value: "100-499",
    label: "medium ( 100-499 employees )",
  },
  {
    value: "500 - 100,000",
    label: "large ( 500 - 100,000 employees )",
  },
];

export default function AgencyRegister({}: Props) {
  const [size, setSize] = React.useState("10-99");

  const [showPassword, setShowPassword] = React.useState(false);
  const [ip, setIP] = React.useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSize(event.target.value);
  };
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  //getting user ip on site registration

  const getData = async () => {
    const res = await axios.get("https://geolocation-db.com/json/");
    console.log(res.data);
    setIP(res.data.IPv4);
  };

  React.useEffect(() => {
    //passing getData method to the lifecycle method
    getData();
  }, []);

  const route = useRouter();
  return (
    <div>
      <Div1
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(69, 68, 68, 0) 0%, #170F0F 98.65%),url("agencyclass.jpeg")`,
          backgroundSize: "100% 220%",
          backgroundRepeat: "no-repeat",

          backgroundPosition: "center",
        }}
      >
        <StyledBox>
          <StyleContainer>
            <img
              src="logoforbusiness.png"
              onClick={() => {
                route.push("/");
              }}
              alt="logo"
              style={{
                width: "180px",
                height: "45px",
                objectFit: "contain",
                marginTop: "-20px",
                cursor: "pointer",
              }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                height: "304px",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "-50px",
              }}
            >
              <TextTypography>Get Started </TextTypography>
              <BodyText>
                {"We’d love to hear from you. Please fill out this form."}
              </BodyText>
            </div>
          </StyleContainer>
        </StyledBox>
      </Div1>
      <StyledBox>
        <StyleContainer>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "30px" }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              <TitleText>Agency details</TitleText>
              <BodyText
                sx={{ color: "#6F6C90", textAlign: "left", fontSize: "1rem" }}
              >
                {"We’d love to hear from you. Please fill out this form."}
              </BodyText>
            </div>{" "}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                gap: "50px",
              }}
            >
              <div style={{ width: "40%" }}>
                <BodyText
                  sx={{
                    color: "#334155",
                    textAlign: "left",
                    fontSize: "0.8rem",
                  }}
                >
                  Agency Name
                </BodyText>

                <StyledTextField
                  size="small"
                  placeholder="Elverr..."
                  sx={{ width: "100%" }}
                />
              </div>

              <div style={{ width: "40%" }}>
                <BodyText
                  sx={{
                    color: "#334155",
                    textAlign: "left",
                    fontSize: "0.8rem",
                  }}
                >
                  Agency Size
                </BodyText>

                <StyledTextField
                  select
                  value={size}
                  onChange={handleChange}
                  size="small"
                  placeholder="Company Size"
                  sx={{ width: "100%" }}
                >
                  {companysize.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </StyledTextField>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                gap: "50px",
              }}
            >
              <div style={{ width: "40%" }}>
                <BodyText
                  sx={{
                    color: "#334155",
                    textAlign: "left",
                    fontSize: "0.8rem",
                  }}
                >
                  Email Address
                </BodyText>

                <StyledTextField
                  placeholder="davon@mail.com"
                  size="small"
                  sx={{ width: "100%" }}
                />
              </div>
              <div style={{ width: "40%" }}>
                <BodyText
                  sx={{
                    color: "#334155",
                    textAlign: "left",
                    fontSize: "0.8rem",
                  }}
                >
                  Password
                </BodyText>

                <StyledTextField
                  placeholder="*****"
                  type={showPassword ? "text" : "password"}
                  size="small"
                  sx={{ width: "100%" }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          /*     onClick={}
                          onMouseDown={handleMouseDownPassword} */
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "center",
                gap: "40px",
                alignItems: "center",
                marginLeft: "-40px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "44px",
                  height: "40.66px",
                  borderRadius: "50%",

                  /* Neutral/100 */

                  background: "#FFFFFF",
                  boxShadow: "0px 5px 16px rgba(52, 164, 34, 0.15)",
                }}
              >
                <ArrowBackIosIcon
                  onClick={() => {
                    route.push("/register");
                  }}
                  sx={{
                    "color": "#334155",
                    "textAlign": "center",
                    "marginLeft": "5px",
                    "&:hover": {
                      cursor: "pointer",
                    },
                  }}
                />
              </div>
              <Button
                variant="contained"
                size="large"
                sx={{
                  "fontFamily": "DM Sans",
                  "fontStyle": "normal",
                  "fontWeight": 700,
                  "width": "140px",
                  "height": "40.66px",

                  "background": "#34A422",
                  "&:hover": {
                    background: "#34A422",
                  },
                  "boxShadow": " 0px 3px 12px rgba(52, 164, 34, 0.16)",
                  "borderRadius": "50px",
                  "textTransform": "none",
                  "lineHeight": "24px",
                  /* identical to box height, or 120% */

                  "color": "#FFFFFF",

                  "textShadow": " 0px 3px 12px rgba(52, 164, 34, 0.16)",
                }}
              >
                Submit
              </Button>
            </div>
          </div>
        </StyleContainer>
      </StyledBox>
    </div>
  );
}
