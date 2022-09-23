import React from "react";
import { StyledBox, StyleContainer } from "../../NotLoggedIn/style";
import { StyledPaper, Div1, Div2, Div3, TextTypography } from "./styles";
import { Button } from "@mui/material";
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
} from "../../Featured/styles";

type Props = {};

export default function SignUp({}: Props) {
  return (
    <StyledBox>
      <StyleContainer>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            height: "100%",
            alignItems: "center",
          }}
        >
          <Div3>
            {" "}
            <TextTypography sx={{ fontSize: "1.4rem" }}>
              Help us know you more!
            </TextTypography>
            <TextTypography sx={{ fontSize: "0.9rem" }}>
              Which of the options below matches your description?
            </TextTypography>
          </Div3>
          <Div2>
            <Div1>
              <StyledPaper>
                <TextTypography align="center">
                  Are you a business?
                </TextTypography>{" "}
                <img
                  src="agentimage.png"
                  style={{ height: "100px", objectFit: "contain" }}
                />
              </StyledPaper>
            </Div1>
            <Div1>
              <StyledPaper
                sx={{
                  "border": " 1px solid #34A422",
                  "&:hover": { border: " 1px solid blue" },
                }}
              >
                <TextTypography align="center">
                  Are you a contractor?
                </TextTypography>{" "}
                <img
                  src="contractor.png"
                  style={{ height: "100px", objectFit: "contain" }}
                />
              </StyledPaper>
            </Div1>
            <Div1>
              <StyledPaper>
                <TextTypography align="center">
                  Are you a company?
                </TextTypography>
                <img
                  src="company.png"
                  style={{ height: "100px", objectFit: "contain" }}
                />
              </StyledPaper>
            </Div1>
          </Div2>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "50px",
            justifyContent: "center",
          }}
        >
          {" "}
        </div>
      </StyleContainer>
    </StyledBox>
  );
}
