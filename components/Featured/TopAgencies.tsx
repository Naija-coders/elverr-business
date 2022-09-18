import * as React from "react";
import {
  BasicTextbody,
  MainHeaderText,
  BasicImage,
  BasicPaper,
  BasicText,
  BasicTextHeader,
  CustomPaper,
  BasicTextTitle,
  BasicServiceTitle,
  BasicDiv,
  BasicServiceButton,
  BasicServiceDiv,
  BasicServiceGrid,
  Divs2,
  Divs3,
} from "../Featured/styles";
import { StyledBox, StyleContainer } from "../NotLoggedIn/style";
import { Avatar } from "@mui/material";

type Props = {};

export default function TopAgencies({}: Props) {
  return (
    <StyledBox>
      <StyleContainer>
        {" "}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div style={{ maxWidth: "565px", width: "100%" }}>
            <MainHeaderText align="center">Top Agencies</MainHeaderText>
            <BasicTextbody align="center">
              Check out our popular services on Elverr and meet your project
              goals in less than no time.
            </BasicTextbody>
          </div>
        </div>
      </StyleContainer>
    </StyledBox>
  );
}
