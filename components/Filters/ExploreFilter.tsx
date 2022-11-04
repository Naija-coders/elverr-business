import React from "react";
import { StyledTypography, StyledDiv } from "../PaginatedServices/style";
type Props = {};

export default function ExploreFilter({}: Props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",

        alignItems: "center",
        position: "relative",
      }}
    >
      <div style={{}}>sort by Popular</div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "1rem",
          width: "65%",
          overflowX: "scroll",
        }}
      >
        <div
          style={{
            width: "134px",
            padding: "8px 16px",
            background: "#F5F5F5",
            borderRadius: "3px",
            cursor: "pointer",
          }}
        >
          <StyledTypography>All Categories</StyledTypography>
        </div>{" "}
        <StyledDiv>
          <StyledTypography>Web design</StyledTypography>
        </StyledDiv>{" "}
        <StyledDiv>
          <StyledTypography>Writing</StyledTypography>
        </StyledDiv>{" "}
        <StyledDiv>
          <StyledTypography>Video Editing</StyledTypography>
        </StyledDiv>{" "}
        <StyledDiv>
          <StyledTypography>Illustrations</StyledTypography>
        </StyledDiv>{" "}
        <StyledDiv>
          <StyledTypography>Repairs</StyledTypography>
        </StyledDiv>{" "}
        <StyledDiv>
          <StyledTypography>Logistics</StyledTypography>
        </StyledDiv>{" "}
        <StyledDiv>
          <StyledTypography>web design</StyledTypography>
        </StyledDiv>{" "}
        <StyledDiv>
          <StyledTypography>web design</StyledTypography>
        </StyledDiv>{" "}
        <StyledDiv>
          <StyledTypography>web design</StyledTypography>
        </StyledDiv>{" "}
        <StyledDiv>
          <StyledTypography>web design</StyledTypography>
        </StyledDiv>{" "}
        <StyledDiv>
          <StyledTypography>web design</StyledTypography>
        </StyledDiv>{" "}
        <StyledDiv>
          <StyledTypography>web design</StyledTypography>
        </StyledDiv>
      </div>
      <div style={{ width: "15%" }}>sort by featured</div>
    </div>
  );
}
