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
  HeaderButton,
  BasicHeader,
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
import { LoginModal } from "../LoginModal/LoginModal";

type Props = {};

export default function Banner({}: Props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };
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
              alignItems: "center",
            }}
          >
            <img src="logo.png" style={{ height: "67px" }} />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "1rem",
                alignItems: "center",
              }}
            >
              {" "}
              <BasicHeader onClick={handleOpen}>Login</BasicHeader>
              <HeaderButton>Become a seller</HeaderButton>
            </div>
          </div>
          <div></div>
          <CustomDiv1>
            <CustomTypography>
              All your business need in one place
            </CustomTypography>
            <br></br>
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

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "1rem",
              marginTop: "30px",
            }}
          >
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
        <LoginModal OpenModalForm={open} CloseModalForm={handleClose} />
      </StyledBox>
    </CustomImage>
  );
}
