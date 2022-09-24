import React from "react";
import { Div1, TextTypography, BodyText } from "./styles";
import { StyledBox, StyleContainer } from "../../../NotLoggedIn/style";
import { Divider } from "@mui/material";
type Props = {};

export default function CompanyRegister({}: Props) {
  return (
    <div>
      <Div1
        style={{
          backgroundImage: `url("companyregisterlogo.jpeg")`,
          backgroundSize: "100% 210%",
          backgroundRepeat: "no-repeat",

          backgroundPosition: "center",
        }}
      >
        <StyledBox>
          <img
            src="logoforbusiness.png"
            alt="logo"
            style={{
              width: "180px",
              height: "45px",
              objectFit: "contain",
            }}
          />
          <StyleContainer>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                height: "304px",
                alignItems: "center",
                justifyContent: "center",
                marginLeft: "-100px",
              }}
            >
              <TextTypography>Get Started</TextTypography>
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
            style={{ display: "flex", flexDirection: "column", gap: "40px" }}
          >
            <div
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              <div>Company details</div>
              <div>We’d love to hear from you. Please fill out this form.</div>
            </div>{" "}
            <div>Company Name</div>
            <div>Company Name</div>
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "center",
              }}
            >
              Submit
            </div>
          </div>
        </StyleContainer>
      </StyledBox>
    </div>
  );
}
