import { Button, Typography } from "@mui/material";
import React from "react";

type Props = {};

export default function ITservices({}: Props) {
  return (
    <div
      style={{
        background: " linear-gradient(90deg, #134E5E 0%, #71B280 100%)",
        height: "200px",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        borderRadius: "10px",
        justifyItems: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          padding: "2rem",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <Typography
          sx={{
            fontSize: "1.3rem",
            color: "#FFFFFF",
            width: "60%",
            fontWeight: 700,

            fontFamily: "DM Sans",
          }}
        >
          Browse our collection of 50+ IT Service on Elverr
        </Typography>
        <Button
          disableElevation
          variant="contained"
          sx={{
            "background": "#FFFFFF",
            "color": "#14505F",
            "borderRadius": "34px",
            "width": "40%",
            "fontWeight": 600,
            "textTransform": "none",
            "fontSize": "0.9rem",

            "fontFamily": "DM Sans",
            "&:hover": {
              background: "#FFFFFF",
              color: "#14505F",
            },
          }}
        >
          Read more
        </Button>
      </div>
      <img
        style={{ height: "240px" }}
        src="https://res.cloudinary.com/dxsmdvaqq/image/upload/v1667375421/bannerit_xwhmqx.png"
      />
    </div>
  );
}
