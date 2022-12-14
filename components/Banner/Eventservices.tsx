import { Button, Typography } from "@mui/material";
import React from "react";
import { OvieTypography, OviesmallTypography, Ovie } from "./styles";

type Props = {};

export default function Eventservices({}: Props) {
  return (
    <div
      style={{
        background: "linear-gradient(90deg, #000046 0%, #1CB5E0 100%)",

        height: "200px",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        borderRadius: "10px",
        justifyItems: "center",

        alignItems: "center",
        position: "relative",
      }}
    >
      <div
        style={{
          padding: "2rem",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          position: "absolute",
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
            {"Got a business need? We've got brilliant minds"}
          </Typography>
          <Typography
            sx={{
              fontSize: "0.9rem",
              color: "#FFFFFF",
              width: { md: "50%", lg: "100%" },
              fontWeight: 700,

              fontFamily: "DM Sans",
            }}
          >
            Browse our collection of skilled workers on Elverr.
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
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "20px",
          right: "100px",
          position: "absolute",
        }}
      >
        <Ovie>
          <OvieTypography>360</OvieTypography>
          <OviesmallTypography>Days</OviesmallTypography>
        </Ovie>
        <Ovie>
          <OvieTypography>24</OvieTypography>
          <OviesmallTypography>Hours</OviesmallTypography>
        </Ovie>
        <Ovie>
          <OvieTypography>60</OvieTypography>
          <OviesmallTypography>minutes</OviesmallTypography>
        </Ovie>
        <Ovie>
          <OvieTypography>30</OvieTypography>
          <OviesmallTypography>Seconds</OviesmallTypography>
        </Ovie>
        <div>
          {" "}
          <img
            style={{
              height: "240px",
              position: "absolute",
              right: "-80px",
              marginTop: "-95px",

              objectFit: "contain",
            }}
            src=" https://res.cloudinary.com/dxsmdvaqq/image/upload/v1669888695/eventbanner_h3lpdr.png"
          />
        </div>
      </div>
    </div>
  );
}
