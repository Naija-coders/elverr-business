import React from "react";
import {
  StyledCustomDivBanner,
  StyledImage,
  CustomImage,
  StyledDivBanner,
  StyledTextFieldSearch,
  GetStartedBtn,
  CustomTypography,
  CustomDiv1,
  Div1,
  Div2,
  GetStartedBtnTypo,
} from "./styles";
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
import { StyledBox, StyleContainer } from "../NotLoggedIn/style";

type Props = {};

export default function Banner({}: Props) {
  return (
    <CustomImage
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(95, 84, 84, 0) -42.37%, #000000 100%),url("banner.jpeg")`,
        backgroundSize: "100% 137%",
        backgroundRepeat: "no-repeat",

        backgroundPosition: "center",
      }}
    >
      <StyledBox>
        <StyleContainer>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <h1>logo</h1>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "1rem",
              }}
            >
              {" "}
              <h1>Become a seller</h1>
              <h1>Sign In</h1>
            </div>
          </div>
          <div></div>
          <CustomDiv1>
            <CustomTypography>
              All your business need in one place
            </CustomTypography>
            <BasicText>
              {
                "We’re different. Elverr is the only saas business platform that lets you run your business on one platform, seamlessly across all digital channels."
              }
            </BasicText>
          </CustomDiv1>
          <div
            style={{
              justifyContent: "space-around",
              maxWidth: "1500px",
              width: "100%",
            }}
          >
            <Div1>
              <Div2>
                {" "}
                <StyledTextFieldSearch
                  placeholder={"Search or type keywords.."}
                />
              </Div2>
              <GetStartedBtn size="small" variant="outlined">
                Get Started
              </GetStartedBtn>
            </Div1>
          </div>
          <br></br>
          <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
            {" "}
            <GetStartedBtnTypo size="small" variant="outlined">
              Design
            </GetStartedBtnTypo>{" "}
            <GetStartedBtnTypo size="small" variant="outlined">
              Translation
            </GetStartedBtnTypo>{" "}
            <GetStartedBtnTypo size="small" variant="outlined">
              Video Editing
            </GetStartedBtnTypo>
          </div>
        </StyleContainer>
      </StyledBox>
    </CustomImage>
  );
}
