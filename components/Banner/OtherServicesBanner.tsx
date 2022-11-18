import { Button, Typography } from "@mui/material";
import React from "react";

type Props = {};

export default function ITservices({}: Props) {
  return (
    <div
      style={{
        background: "linear-gradient(90deg, #1A2980 37.5%, #26D0CE 100%)",

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
        <div>
          <Typography
            sx={{
              fontSize: "1.3rem",
              color: "#FFFFFF",
              width: { md: "60%", lg: "100%" },
              fontWeight: 700,

              fontFamily: "DM Sans",
            }}
          >
            Got a business need? We've got brilliant minds
          </Typography>
          <Typography
            sx={{
              fontSize: "0.9rem",
              color: "#FFFFFF",
              width: { md: "60%", lg: "100%" },
              fontWeight: 700,

              fontFamily: "DM Sans",
            }}
          >
            Browse our collection of 50+ Automotive Services on Elverr
          </Typography>
        </div>
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
        style={{
          height: "240px",
          position: "absolute",
          right: 80,

          marginTop: "-20px",

          objectFit: "contain",
        }}
        src="https://res.cloudinary.com/dxsmdvaqq/image/upload/v1668767292/Group_39218_ltpwne.png"
      />
    </div>
  );
}
