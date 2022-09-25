import React from "react";
import { StyledBox, StyleContainer } from "../../NotLoggedIn/style";
import { StyledPaper, Div1, Div2, Div3, TextTypography } from "./styles";
import { Button, Divider } from "@mui/material";
import { LoginModal } from "./LoginModal";
import { useRouter } from "next/router";
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
  const route = useRouter();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <StyledBox>
      <StyleContainer>
        <div
          onClick={() => {
            route.push("/");
          }}
        >
          <img
            src="businesslogo.png"
            style={{
              width: "250px",
              height: "60px",
              objectFit: "contain",
              marginTop: "-30px",
              cursor: "pointer",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "50px",
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
              <StyledPaper
                onClick={() => {
                  route.push("business-register");
                }}
              >
                <TextTypography align="center">
                  Are you a business?
                </TextTypography>{" "}
                <img
                  src="agentimage.png"
                  style={{ height: "100px", objectFit: "contain" }}
                />
              </StyledPaper>
            </Div1>
            <Div1 onClick={handleOpen}>
              <StyledPaper
                sx={{
                  border: " 1px solid #34A422",
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
              <StyledPaper
                onClick={() => {
                  route.push("company-register");
                }}
              >
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
        <LoginModal OpenModalForm={open} CloseModalForm={handleClose} />
      </StyleContainer>
    </StyledBox>
  );
}
