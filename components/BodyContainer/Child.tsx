import React from "react";
import LeftSide from "./LeftSide/LeftSide";
import RightSide from "./RightSide/RightSide";
import { StyledBox, StyleContainer } from "../NotLoggedIn/style";
type Props = {
  children: any;
};
const Child: React.FC<Props> = ({ children }) => (
  <div style={{ marginTop: "-31px", height: "100%", width: "100%" }}>
    <StyledBox>
      <StyleContainer>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <RightSide />
          {children}

          <LeftSide />
        </div>
      </StyleContainer>
    </StyledBox>
  </div>
);

export default Child;
