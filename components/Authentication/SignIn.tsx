import * as React from "react";
import { StyledBox } from "../NotLoggedIn/style";

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
} from "../Featured/styles";
import { Button, TextField } from "@mui/material";
type Props = {};

export const Signin: React.FC<Props> = ({}) => {
  return (
    <div
      style={{
        width: "100%",
        padding: "2rem",
      }}
    >
      <div
        style={{
          marginTop: "30px",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <TextField />
        <TextField />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div>Remember me</div>
          <div>Forgot password</div>
        </div>
        <Button variant="contained">Sign In</Button>
      </div>
    </div>
  );
};

export default Signin;
