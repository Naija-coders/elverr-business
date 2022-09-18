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
import { Avatar, Button } from "@mui/material";

type Props = {};

export default function JoinUs({}: Props) {
  return (
    <StyledBox>
      <StyleContainer>
        <div
          style={{
            borderRadius: "30px",
            background: "rgba(203, 255, 183, 0.5)",
            height: "260px",
            display: "flex",
            padding: "3rem",

            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: "565px",
              width: "100%",
              gap: "1rem",
              justifyContent: "left",
            }}
          >
            {" "}
            <MainHeaderText style={{ color: "#222222" }}>
              Join Elverr’s Creator Community
            </MainHeaderText>
            <BasicTextbody>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere
              placerat quis in at facilisis interdum consequat nullam
              scelerisque.
            </BasicTextbody>
            <div>
              <Button
                variant="contained"
                sx={{
                  "background": "#34A422",
                  "textTransform": "none",
                  "&:hover": {
                    background: "#34A422",
                  },
                }}
              >
                {" "}
                Join our creator community
              </Button>
            </div>
          </div>
          <img src="joinnow.png" alt="description" />
        </div>
      </StyleContainer>
    </StyledBox>
  );
}
