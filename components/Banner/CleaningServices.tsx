import { Button, Typography } from "@mui/material";
import React from "react";

type Props = {};

export default function CleaningServices({}: Props) {
  return (
    <div
      style={{
        background: "linear-gradient(90deg, #52C234 0%, #061700 100%)",

        height: "200px",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        backgroundImage: `url("https://res.cloudinary.com/dxsmdvaqq/image/upload/v1668590709/Rectangle_4328_zd4gfo.png")`,
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
            Enjoy a healthier and better cleaning service
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
            Browse our collection of 50+ Cleaning Services on Elverr
          </Typography>
        </div>
        <Button
          disableElevation
          variant="contained"
          sx={{
            "background": "#FFFFFF",
            "color": "#14505F",
            "borderRadius": "34px",
            "width": "30%",
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
          width: "238px",
          right: "150px",
          marginTop: "20px",

          objectFit: "contain",
        }}
        src="https://res.cloudinary.com/dxsmdvaqq/image/upload/v1668590792/cleaninghand_rbcrml.png"
      />
      <img
        style={{
          height: "440px",
          position: "absolute",
          width: "408px",
          right: 20,
          marginTop: "-15px",

          objectFit: "contain",
        }}
        src="https://res.cloudinary.com/dxsmdvaqq/image/upload/v1668590849/vacuumcleaner_q2qdim.png"
      />
    </div>
  );
}
