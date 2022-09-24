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
          <img src="" alt="logo" />
          <StyleContainer>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                height: "304px",
                alignItems: "center",
                justifyContent: "center",
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
        <div
          style={{ position: "absolute", left: 0, bottom: 10, width: "100%" }}
        >
          <div
            style={{ position: "relative", marginLeft: "10%", width: "80%" }}
          >
            <Divider />
          </div>
          <br></br>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              gap: "2rem",
            }}
          >
            <TextTypography sx={{ fontSize: "0.9rem", color: "grey" }}>
              © Copyright 2022, All Rights Reserved by Elverr
            </TextTypography>
            <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
              <TextTypography
                sx={{
                  "fontSize": "0.9rem",
                  "&:hover": { textDecoration: "underline" },
                  "cursor": "pointer",
                }}
              >
                Privacy Policy
              </TextTypography>
              <Divider orientation="vertical" flexItem />
              <TextTypography sx={{ fontSize: "0.9rem" }}>
                <TextTypography
                  sx={{
                    "fontSize": "0.9rem",
                    "&:hover": { textDecoration: "underline" },
                    "cursor": "pointer",
                  }}
                >
                  Terms of Service
                </TextTypography>
              </TextTypography>
            </div>
          </div>
        </div>
      </StyledBox>
    </div>
  );
}
