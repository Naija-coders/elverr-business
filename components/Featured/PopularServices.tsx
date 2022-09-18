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

export default function PopularServices({}: Props) {
  return (
    <StyledBox>
      <StyleContainer>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div style={{ maxWidth: "565px", width: "100%" }}>
            <MainHeaderText align="center">
              Popular services for you
            </MainHeaderText>
            <BasicTextbody align="center">
              Check out our popular services on Elverr and meet your project
              goals in less than no time.
            </BasicTextbody>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: "30px",
          }}
        >
          <Divs2>
            <Divs3>
              <img
                src="mobile.png"
                style={{ width: "30px", height: "30px", objectFit: "contain" }}
              />
            </Divs3>
            <div>Mobile App Development</div>
          </Divs2>
          <Divs2>
            <Divs3>
              <img
                src="computer.png"
                style={{ width: "30px", height: "30px", objectFit: "contain" }}
              />
            </Divs3>
            <div>Web Application</div>
          </Divs2>
          <Divs2>
            <Divs3>
              <img
                src="ps4.png"
                style={{ width: "30px", height: "30px", objectFit: "contain" }}
              />
            </Divs3>
            <div>PS4 Game Development</div>
          </Divs2>
          <Divs2>
            <Divs3>
              <img
                src="arv solution.png"
                style={{ width: "30px", height: "30px", objectFit: "contain" }}
              />
            </Divs3>
            <div>AR/VR Solutions</div>
          </Divs2>
        </div>
      </StyleContainer>
    </StyledBox>
  );
}
