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

export default function Cleaningmenu({}: Props) {
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

        <StyledTextTypo>Athletic Director</StyledTextTypo>
        <StyledTextTypo>Coach</StyledTextTypo>
        <StyledTextTypo>Event Coordinator</StyledTextTypo>
        <StyledTextTypo>Facilities Operations Manager</StyledTextTypo>
        <StyledTextTypo>Personal Trainer</StyledTextTypo>
        <StyledTextTypo>Sports Message Therapist</StyledTextTypo>
        <StyledTextTypo>Sports Physician</StyledTextTypo>
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
          Dancer
        </StyledTextTypo>
        <StyledTextTypo>Ballet Dancers</StyledTextTypo>
        <StyledTextTypo>LED Dancers</StyledTextTypo>
        <StyledTextTypo>Ballroom Dancers</StyledTextTypo>
        <StyledTextTypo>Pole Dancers</StyledTextTypo>
        <StyledTextTypo>Street Dancers</StyledTextTypo>
        <StyledTextTypo>Cherr Leaders</StyledTextTypo>
        <StyledTextTypo>Martial Arts Performances</StyledTextTypo>
        <StyledTextTypo>Roller Skating Acts</StyledTextTypo>
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
          Artists
        </StyledTextTypo>
        <StyledTextTypo>Painters</StyledTextTypo>
        <StyledTextTypo>Illustrators</StyledTextTypo>
        <StyledTextTypo>Texttile Artists</StyledTextTypo>
        <StyledTextTypo>Cinematography</StyledTextTypo>
        <StyledTextTypo>Sculptors</StyledTextTypo>
        <StyledTextTypo>Tattoo Arts</StyledTextTypo>
        <StyledTextTypo>Craft Making</StyledTextTypo>
        <StyledTextTypo>Face & Body Painting</StyledTextTypo>
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
          {"Live Music  & Dj's"}
        </StyledTextTypo>
        <StyledTextTypo>{"Function Dj's & VS"}</StyledTextTypo>
        <StyledTextTypo>Drummers </StyledTextTypo>
        <StyledTextTypo>Pianist</StyledTextTypo>
        <StyledTextTypo>Saxophonist </StyledTextTypo>
        <StyledTextTypo>Bands</StyledTextTypo>
        <StyledTextTypo>{"Singer & Vocalist"} </StyledTextTypo>
        <StyledTextTypo>Violinist</StyledTextTypo>
        <StyledTextTypo>Guitarists </StyledTextTypo>

        <div style={{ marginTop: "100px" }}></div>
        <StyledTextTypo
          sx={{ marginLeft: "50px" }}
          onClick={() => {
            route.push("/Entertainments-services");
          }}
        >
          {"See All >>"}
        </StyledTextTypo>
      </NavbarDiv>
    </div>
  );
}
