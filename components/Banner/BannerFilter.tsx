import { Button, Divider, Typography } from "@mui/material";
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
          <Typography
            sx={{
              fontFamily: "DM Sans",
              fontWeight: "bolder",
              fontSize: "1.1rem",
            }}
          >
            Location
          </Typography>
          <Typography>select</Typography>
        </div>
        <Divider orientation="vertical" sx={{ height: "80%" }} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Typography
            sx={{
              fontFamily: "DM Sans",
              fontWeight: "bolder",
              fontSize: "1.1rem",
            }}
          >
            Price
          </Typography>
          <Typography>select</Typography>
        </div>
        <Divider orientation="vertical" sx={{ height: "80%" }} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Typography
            sx={{
              fontFamily: "DM Sans",
              fontWeight: "bolder",
              fontSize: "1.1rem",
            }}
          >
            Experience
          </Typography>
          <Typography>select</Typography>
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
