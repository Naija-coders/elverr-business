import React, { useContext, useState } from "react";
import { StyledBox } from "../../NotLoggedIn/style";
import { StyledTextField, StyledButton, StyleLoadingButton } from "../styles";
import GoogleOauth from "./GoogleAuth";
import Clientapi from "../../../pages/api/client";
import StateContext from "../../../context/StateContext";
import DispatchContext from "../../../context/DispatchContext";
import { AxiosError, AxiosResponse } from "axios";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
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
  Divider,
  Typography,
  FormControlLabel,
  Avatar,
  IconButton,
} from "@mui/material";
type Props = {
  onSuccess: () => void | any;
};

export const Signin: React.FC<Props> = ({ onSuccess }) => {
  const { AuthState } = useContext<any>(StateContext);
  const { AuthDispatcher } = useContext<any>(DispatchContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const route = useRouter();
  const [loading, setLoading] = React.useState(false);

  function handleClick() {
    setLoading(true);
  }
  const onSubmit = async (data: any) => {
    await handleClick();
    await Clientapi.post("api/login", data)
      .then((response) => {
        console.log("it worked hahha", response);
        const user = response.data;
        console.log("your auth token is", response.data.auth_token);

        onSuccess();

        setLoading(false);

        Cookies.set("auth_token", response.data.auth_token, { expires: 10 });
        AuthDispatcher({ type: "login" });
        AuthDispatcher({ type: "addUser", payload: response.data });

        route.push("/");
      })
      .catch((err: AxiosError) => {
        console.log("invalid data entered");

        setLoading(false);
      });
  };

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
        onSubmit={handleSubmit(onSubmit)}
      >
        <GoogleOauth
          isLogin={() => {
            console.log("you logged in with google");
            onSuccess();
          }}
        />
        <Divider orientation="horizontal">
          <Typography variant="body1"> Or</Typography>
        </Divider>
        <StyledTextField
          size="small"
          required
          label="Email"
          type="text"
          {...register("email", {
            required: true,
            pattern: /^\S+@\S+$/i,
          })}
        />

        <StyledTextField
          type={"password"}
          required
          label="Password"
          size="small"
          {...register("password", { required: true, maxLength: 100 })}
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
        {loading ? (
          <StyleLoadingButton
            loading={loading}
            loadingPosition="end"
            variant="contained"
          >
            Login
          </StyleLoadingButton>
        ) : (
          <StyledButton type="submit" variant="contained">
            {" "}
            Login
          </StyledButton>
        )}
        <div style={{ display: "flex", gap: "10px" }}>
          <BasicTextbody sx={{ fontSize: "0.9rem" }}>
            {"Don't have an account?"}
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
            {"Create free account"}
          </BasicTextbody>
        </div>
      </form>
    </div>
  );
};

export default Signin;
