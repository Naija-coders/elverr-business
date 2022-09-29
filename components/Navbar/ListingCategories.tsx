import { Button } from "@mui/material";
import React from "react";
import { CommonText, HeaderText } from "./styles";

type Props = {};

export default function ListingCategories({}: Props) {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: "2rem",
          overflow: "scroll",
          width: "100%",
          marginTop: "30px",
          alignItems: "center",
        }}
      >
        <CommonText
          sx={{
            background: "#F5F5F5",
            borderRadius: " 3px",
          }}
        >
          Trending
        </CommonText>
        <CommonText>Branding</CommonText>

        <CommonText>Web Design</CommonText>
        <CommonText>Writing</CommonText>
        <CommonText>Video Editing</CommonText>
        <CommonText>Entertainment</CommonText>
        <CommonText>OnSite</CommonText>
      </div>
      <div style={{ padding: "20px 2rem" }}>
        <HeaderText>Discover Talent</HeaderText>
      </div>
    </div>
  );
}
