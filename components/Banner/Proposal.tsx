import React from "react";
import { StyledBox, StyleContainer } from "../NotLoggedIn/style";
import { MainBodyTypo, DescriptionText } from "./styles";
type Props = {};

export default function Proposal({}: Props) {
  return (
    <StyledBox sx={{ background: "#FAFAFA" }}>
      <StyleContainer>
        <div
          style={{
            display: "flex",
            gap: "1rem",
          }}
        >
          <div style={{ width: "50%" }}>
            <img
              style={{ width: "90%", height: "318px", objectFit: "contain" }}
              src="https://res.cloudinary.com/dxsmdvaqq/image/upload/v1666602876/PROPOSAL.png"
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              width: "40%",
            }}
          >
            <MainBodyTypo>Send your proposal with direct messages</MainBodyTypo>
            <DescriptionText sx={{ fontWeight: 900, color: " #18181B" }}>
              Proin faucibus nibh et sagittis a. Lacinia purus ac amet
              pellentesque aliquam enim.
            </DescriptionText>
            <DescriptionText>
              Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec,
              proin faucibus nibh et sagittis a. Lacinia purus ac amet
              pellentesque aliquam enim.
            </DescriptionText>
          </div>
        </div>
      </StyleContainer>
    </StyledBox>
  );
}
