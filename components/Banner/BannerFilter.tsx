import { Button, Divider } from "@mui/material";
import React from "react";

type Props = {};

export default function BannerFilter({}: Props) {
  return (
    <div
      style={{
        width: "80%",
        height: "70px",

        /* Shades/White */

        background: "#FFFFFF",
        boxShadow: "22px 4px 55px rgba(0, 0, 0, 0.25)",
        borderRadius: "4px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          height: "100%",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>Location</div>
          <div>select</div>
        </div>
        <Divider orientation="vertical" sx={{ height: "80%" }} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>Price</div>
          <div>select</div>
        </div>
        <Divider orientation="vertical" sx={{ height: "80%" }} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>Experience</div>
          <div>select</div>
        </div>

        <Button
          variant="contained"
          size="large"
          sx={{
            "background": "#34A422",
            "textTransform": "none",
            "&:hover": { background: "#34A422" },
          }}
        >
          Search
        </Button>
      </div>
    </div>
  );
}
