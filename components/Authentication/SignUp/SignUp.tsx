import * as React from "react";
import { StyledBox } from "../../NotLoggedIn/style";
import { StyledTextField, StyledButton } from "../styles";
import GoogleOauth from "./GoogleAuth";

import {
  BasicText,
  BasicTextHeader,
  BasicTextbody,
  CustomPaper,
  BasicTextTitle,
  BasicPaper,
  BasicImage,
  BasicServiceTitle,
  BasicDiv,
  BasicServiceButton,
  BasicServiceDiv,
  BasicServiceGrid,
} from "../../Featured/styles";

import {
  Paper,
  Button,
  TextField,
  Checkbox,
  FormControlLabel,
  Avatar,
  IconButton,
  Typography,
  Divider,
} from "@mui/material";
type Props = {};

export const SignUp: React.FC<Props> = ({}) => {
  return (
    <div
      style={{
        width: "100%",
        padding: "2rem",
      }}
    >
      <form
        style={{
          marginTop: "30px",
          display: "flex",
          flexDirection: "column",
          gap: "1.2rem",
        }}
      >
        <GoogleOauth />
        <Divider orientation="horizontal">
          <Typography variant="body1"> Or</Typography>
        </Divider>

        <StyledTextField
          size="small"
          label="First Name"
          required
          type="text"
          /*  {...register("email", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })} */
        />

        <StyledTextField
          size="small"
          label="Email"
          required
          type="text"
          /*  {...register("email", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })} */
        />

        <StyledTextField
          type={"password"}
          label="Password"
          size="small"
          required
          /*  {...register("password", { required: true, maxLength: 100 })}
           */
        />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <FormControlLabel
            value="start"
            control={
              <Checkbox
                sx={{
                  "color": "#747582",
                  "&.Mui-checked": {
                    color: "green",
                  },
                }}
              />
            }
            label={
              <BasicTextbody sx={{ fontSize: "0.9rem", color: "#747582" }}>
                Remember me{" "}
              </BasicTextbody>
            }
            labelPlacement="end"
          />
          <BasicTextbody sx={{ fontSize: "0.9rem", color: "#747582" }}>
            Forgot password{" "}
          </BasicTextbody>
        </div>
        <StyledButton variant="contained">Sign In</StyledButton>
        <div style={{ display: "flex", gap: "10px" }}>
          <BasicTextbody sx={{ fontSize: "0.9rem" }}>
            {"Already have an account?"}
          </BasicTextbody>
          <BasicTextbody
            sx={{
              "fontSize": "0.9rem",
              "color": "#34A422",
              "&:hover": {
                textDecoration: "underline",
                cursor: "pointer",
              },
            }}
          >
            {"Sign In"}
          </BasicTextbody>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
