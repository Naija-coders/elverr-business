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
          Residential Cleaning
        </StyledTextTypo>
        <StyledTextTypo
          onClick={() => {
            route.push("/Cleaning-services/Floor Mopping");
          }}
        >
          Floor Mopping
        </StyledTextTypo>
        <StyledTextTypo
          onClick={() => {
            route.push("/Cleaning-services/Disinfect your home");
          }}
        >
          Disinfect your home
        </StyledTextTypo>
        <StyledTextTypo
          onClick={() => {
            route.push("/Cleaning-services/Dust & Shine");
          }}
        >
          Dust & Shine
        </StyledTextTypo>
        <StyledTextTypo
          onClick={() => {
            route.push("/Cleaning-services/Laundry & Dry Cleaning");
          }}
        >
          Laundry & Dry Cleaning
        </StyledTextTypo>
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
        <StyledTextTypo
          onClick={() => {
            route.push("/Cleaning-services/Janitorial Services");
          }}
        >
          Janitorial Services
        </StyledTextTypo>
        <StyledTextTypo
          onClick={() => {
            route.push("/Cleaning-services/Disinfection Cleaning");
          }}
        >
          Disinfection Cleaning
        </StyledTextTypo>
        <StyledTextTypo
          onClick={() => {
            route.push("/Cleaning-services/Project Based Cleaning");
          }}
        >
          Project Based Cleaning{" "}
        </StyledTextTypo>
        <StyledTextTypo
          onClick={() => {
            route.push("/Cleaning-services/Pressure Washing");
          }}
        >
          Pressure Washing
        </StyledTextTypo>
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
        <StyledTextTypo
          onClick={() => {
            route.push("/Cleaning-services/Air Vent Cleaning");
          }}
        >
          Air Vent Cleaning
        </StyledTextTypo>
        <StyledTextTypo
          onClick={() => {
            route.push("/Cleaning-services/Windows & Frames Cleaning");
          }}
        >
          Windows & Frames Cleaning
        </StyledTextTypo>
        <StyledTextTypo
          onClick={() => {
            route.push("/Cleaning-services/Wiping of switches & outlets");
          }}
        >
          Wiping of switches & outlets
        </StyledTextTypo>
        <StyledTextTypo
          onClick={() => {
            route.push("/Cleaning-services/Packaging and removal of debris");
          }}
        >
          Packaging and removal of debris
        </StyledTextTypo>
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
        <StyledTextTypo
          onClick={() => {
            route.push("/Cleaning-services/Steam Cleaning");
          }}
        >
          {" "}
          Steam Cleaning
        </StyledTextTypo>
        <StyledTextTypo
          onClick={() => {
            route.push("/Cleaning-services/Sofa Cleaning");
          }}
        >
          Sofa Cleaning{" "}
        </StyledTextTypo>
        <StyledTextTypo
          onClick={() => {
            route.push("/Cleaning-services/Leather Cleaning");
          }}
        >
          Leather Cleaning
        </StyledTextTypo>

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
