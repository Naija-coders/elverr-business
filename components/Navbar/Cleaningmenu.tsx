import { Avatar, Button, Divider, TextField } from "@mui/material";
import React, { useContext, useState } from "react";

import {
  StyledText,
  StyledTextTypo,
  StyledMainDiv,
  StyleContainerDiv,
  NavbarDiv,
} from "./styles";
import { useRouter } from "next/router";

type Props = {};

export default function Entertainmentmenu({}: Props) {
  const route = useRouter();
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        paddingBottom: "40px",
      }}
    >
      <NavbarDiv>
        <StyledTextTypo
          sx={{
            "fontWeight": "bold",
            "color": "black",
            "&:hover": { color: "black" },
            "fontSize": "1rem",
          }}
        >
          Sports
        </StyledTextTypo>

        <StyledTextTypo>Residential Cleaning</StyledTextTypo>
        <StyledTextTypo>Floor Mopping</StyledTextTypo>
        <StyledTextTypo>Disinfect your home</StyledTextTypo>
        <StyledTextTypo>Dust & Shine</StyledTextTypo>
        <StyledTextTypo>Laundry & Dry Cleaning</StyledTextTypo>
      </NavbarDiv>
      <NavbarDiv>
        <StyledTextTypo
          sx={{
            "fontWeight": "bold",
            "color": "black",
            "&:hover": { color: "black" },
            "fontSize": "1rem",
          }}
        >
          Commercial Cleaning
        </StyledTextTypo>
        <StyledTextTypo>Janitorial Services</StyledTextTypo>
        <StyledTextTypo>Disinfection Cleaning</StyledTextTypo>
        <StyledTextTypo>Project Based Cleaning </StyledTextTypo>
        <StyledTextTypo>Pressure Washing</StyledTextTypo>
      </NavbarDiv>
      <NavbarDiv>
        <StyledTextTypo
          sx={{
            "fontWeight": "bold",
            "color": "black",
            "&:hover": { color: "black" },
            "fontSize": "1rem",
          }}
        >
          Construction Cleaning
        </StyledTextTypo>
        <StyledTextTypo>Air Vent Cleaning</StyledTextTypo>
        <StyledTextTypo>Windows & Frames Cleaning</StyledTextTypo>
        <StyledTextTypo>Wiping of switches & outlets</StyledTextTypo>
        <StyledTextTypo>Packaging and removal of debris</StyledTextTypo>
      </NavbarDiv>
      <NavbarDiv>
        <StyledTextTypo
          sx={{
            "fontWeight": "bold",
            "color": "black",
            "&:hover": { color: "black" },
            "fontSize": "1rem",
          }}
        >
          Upholstery Cleaning
        </StyledTextTypo>
        <StyledTextTypo>Steam Cleaning</StyledTextTypo>
        <StyledTextTypo>Sofa Cleaning </StyledTextTypo>
        <StyledTextTypo>Leather Cleaning</StyledTextTypo>

        <div style={{ marginTop: "100px" }}></div>
        <StyledTextTypo
          sx={{ marginLeft: "50px" }}
          onClick={() => {
            route.push("/Cleaning-services");
          }}
        >
          {"See All >>"}
        </StyledTextTypo>
      </NavbarDiv>
    </div>
  );
}
