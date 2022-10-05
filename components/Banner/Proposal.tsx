import React from "react";
import { StyledBox, StyleContainer } from "../NotLoggedIn/style";

type Props = {};

export default function Proposal({}: Props) {
  return (
    <StyledBox>
      <StyleContainer>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div style={{}}>
            <img
              style={{ width: "100%", height: "268px" }}
              src="https://res.cloudinary.com/dxsmdvaqq/image/upload/v1664978326/proposal.png"
            />
          </div>
          <div>Send your proposal with direct messages</div>
        </div>
      </StyleContainer>
    </StyledBox>
  );
}
