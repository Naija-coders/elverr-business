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

        <StyledTextTypo
          onClick={() => {
            route.push("/Entertainments-services/Athletic Director");
          }}
        >
          Athletic Director
        </StyledTextTypo>
        <StyledTextTypo
          onClick={() => {
            route.push("/Entertainments-services/Coach");
          }}
        >
          Coach
        </StyledTextTypo>
        <StyledTextTypo
          onClick={() => {
            route.push("/Entertainments-services/Event Coordinator");
          }}
        >
          Event Coordinator
        </StyledTextTypo>
        <StyledTextTypo
          onClick={() => {
            route.push("/Entertainments-services/Facility Operations Manager");
          }}
        >
          Facilities Operations Manager
        </StyledTextTypo>
        <StyledTextTypo
          onClick={() => {
            route.push("/Entertainments-services/Personal Trainer");
          }}
        >
          Personal Trainer
        </StyledTextTypo>
        <StyledTextTypo
          onClick={() => {
            route.push("/Entertainments-services/Sports Massage Therapist");
          }}
        >
          Sports Message Therapist
        </StyledTextTypo>
        <StyledTextTypo
          onClick={() => {
            route.push("/Entertainments-services/Sports Physician");
          }}
        >
          Sports Physician
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
          Dancer
        </StyledTextTypo>
        <StyledTextTypo
          onClick={() => {
            route.push("/Entertainments-services/Ballet Dancers");
          }}
        >
          Ballet Dancers
        </StyledTextTypo>
        <StyledTextTypo
          onClick={() => {
            route.push("/Entertainments-services/LED Dancers");
          }}
        >
          LED Dancers
        </StyledTextTypo>
        <StyledTextTypo
          onClick={() => {
            route.push("/Entertainments-services/Ballroom Dancers");
          }}
        >
          Ballroom Dancers
        </StyledTextTypo>
        <StyledTextTypo
          onClick={() => {
            route.push("/Entertainments-services/Pole Dancers");
          }}
        >
          Pole Dancers
        </StyledTextTypo>
        <StyledTextTypo
          onClick={() => {
            route.push("/Entertainments-services/Street Dancers");
          }}
        >
          Street Dancers
        </StyledTextTypo>
        <StyledTextTypo
          onClick={() => {
            route.push("/Entertainments-services/Cherr Leaders");
          }}
        >
          Cherr Leaders
        </StyledTextTypo>
        <StyledTextTypo
          onClick={() => {
            route.push("/Entertainments-services/Martial Arts Performances");
          }}
        >
          Martial Arts Performances
        </StyledTextTypo>
        <StyledTextTypo
          onClick={() => {
            route.push("/Entertainments-services/Roller Skating Acts");
          }}
        >
          Roller Skating Acts
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
          Artists
        </StyledTextTypo>
        <StyledTextTypo
          onClick={() => {
            route.push("/Entertainments-services/Painters");
          }}
        >
          Painters
        </StyledTextTypo>
        <StyledTextTypo
          onClick={() => {
            route.push("/Entertainments-services/Illustrators");
          }}
        >
          Illustrators
        </StyledTextTypo>
        <StyledTextTypo
          onClick={() => {
            route.push("/Entertainments-services/Texttile Artists");
          }}
        >
          Texttile Artists
        </StyledTextTypo>
        <StyledTextTypo
          onClick={() => {
            route.push("/Entertainments-services/Cinematography");
          }}
        >
          Cinematography
        </StyledTextTypo>
        <StyledTextTypo
          onClick={() => {
            route.push("/Entertainments-services/Sculptors");
          }}
        >
          Sculptors
        </StyledTextTypo>
        <StyledTextTypo
          onClick={() => {
            route.push("/Entertainments-services/Tattoo Arts");
          }}
        >
          Tattoo Arts
        </StyledTextTypo>
        <StyledTextTypo
          onClick={() => {
            route.push("/Entertainments-services/Craft Making");
          }}
        >
          Craft Making
        </StyledTextTypo>
        <StyledTextTypo
          onClick={() => {
            route.push("/Entertainments-services/Face & Body Painting");
          }}
        >
          Face & Body Painting
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
          {"Live Music  & Dj's"}
        </StyledTextTypo>
        <StyledTextTypo
          onClick={() => {
            route.push("/Entertainments-services/Function Dj's & VS");
          }}
        >
          {"Function Dj's & VS"}
        </StyledTextTypo>
        <StyledTextTypo
          onClick={() => {
            route.push("/Entertainments-services/Drummers");
          }}
        >
          Drummers{" "}
        </StyledTextTypo>
        <StyledTextTypo
          onClick={() => {
            route.push("/Entertainments-services/Pianist");
          }}
        >
          Pianist
        </StyledTextTypo>
        <StyledTextTypo
          onClick={() => {
            route.push("/Entertainments-services/Saxophonist");
          }}
        >
          Saxophonist{" "}
        </StyledTextTypo>
        <StyledTextTypo
          onClick={() => {
            route.push("/Entertainments-services/Bands");
          }}
        >
          Bands
        </StyledTextTypo>
        <StyledTextTypo
          onClick={() => {
            route.push("/Entertainments-services/Singers & Vocalist");
          }}
        >
          {"Singer & Vocalist"}{" "}
        </StyledTextTypo>
        <StyledTextTypo
          onClick={() => {
            route.push("/Entertainments-services/Violinist");
          }}
        >
          Violinist
        </StyledTextTypo>
        <StyledTextTypo
          onClick={() => {
            route.push("/Entertainments-services/Guitarists");
          }}
        >
          Guitarists{" "}
        </StyledTextTypo>

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
