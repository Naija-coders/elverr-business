import React from "react";

type Props = {};
import {} from "./styles";
import { StyledBox, StyleContainer } from "../NotLoggedIn/style";
import { Text, MainDiv1, MainDivRight } from "./styles";
import BannerFilter from "./BannerFilter";
import { CustomTypography1, CustomTypography2 } from "./styles";
export default function DiscoverBanner({}: Props) {
  return (
    <StyledBox>
      <StyleContainer>
        <div
          style={{
            height: "404px",
            marginTop: "-32px",
            position: "relative",
            background:
              "linear-gradient(90deg, rgba(54, 157, 41, 0.79) 0%, #369D29 100%)",
            borderRadius: " 0px 0px 20px 20px",
          }}
        ></div>
      </StyleContainer>
    </StyledBox>
  );
}
