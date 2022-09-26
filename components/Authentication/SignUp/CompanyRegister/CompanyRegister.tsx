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
import Clientapi from "../../../../pages/api/client";
import { AxiosError, AxiosResponse } from "axios";
import { useForm } from "react-hook-form";
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
  const [ip, setIp] = React.useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleChanges = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSize(event.target.value);
  };
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  //getting user ip on site registration

  const onSubmit = async (data: any) => {
    const datas = { ...data, company_size: size, location: ip };
    console.log("the submited data", datas);
    await Clientapi.post("api/business/companyregister", datas)
      .then((response: any) => {
        console.log("it worked hahha", response);
        const user = response.data;
        console.log("your auth token is", response.data.auth_token);
      })

      .catch((err: AxiosError) => {
        console.log("invalid data entered");
      });
  };
  const getData = async () => {
    const res = await axios.get("https://geolocation-db.com/json/");
    console.log(res.data);
    setIp(res.data.country_name);
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
          backgroundImage: `url("companyregisterlogo.jpeg")`,
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
          <form
            style={{ display: "flex", flexDirection: "column", gap: "30px" }}
            onSubmit={handleSubmit(onSubmit)}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              <TitleText>Company details</TitleText>
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
                  Company Name
                </BodyText>

                <StyledTextField
                  size="small"
                  placeholder="Elverr..."
                  sx={{ width: "100%" }}
                  {...register("company_name", {
                    required: true,
                    maxLength: 100,
                  })}
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
                  Company Size
                </BodyText>

                <StyledTextField
                  select
                  value={size}
                  onChange={handleChanges}
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
                  type="text"
                  {...register("email", {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
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
                  {...register("password", {
                    required: true,
                    maxLength: 100,
                  })}
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
                type="submit"
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
          </form>
        </StyleContainer>
      </StyledBox>
    </div>
  );
}
