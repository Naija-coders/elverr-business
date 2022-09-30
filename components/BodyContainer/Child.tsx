import React from "react";
import LeftSide from "./LeftSide/LeftSide";
import RightSide from "./RightSide/RightSide";
import { StyledBox1, StyleContainer } from "../NotLoggedIn/style";
import ListingCategories from "../Navbar/ListingCategories";

import dynamic from "next/dynamic";
const BannerSlider = dynamic(() => import("../Slider/BannerSlider"), {
  ssr: false,
});
import { StyledDiv } from "./RightSide/styles";
type Props = {
  children?: any;
};
const Child: React.FC<Props> = ({ children }) => (
  <div style={{ marginTop: "-31px", height: "100%", width: "100%" }}>
    <StyledBox1>
      <StyleContainer>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <RightSide />
          <StyledDiv>
            <ListingCategories />
            <BannerSlider />
          </StyledDiv>

          <LeftSide />
        </div>
      </StyleContainer>
    </StyledBox1>
  </div>
);

export default Child;
