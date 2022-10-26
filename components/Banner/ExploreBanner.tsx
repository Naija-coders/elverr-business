import React from "react";

type Props = {};
import {} from "./styles";
import { StyledBox, StyleContainer } from "../NotLoggedIn/style";
import { Text, MainDiv1, MainDivRight } from "./styles";
import BannerFilter from "./BannerFilter";
import { CustomTypography1, CustomTypography2 } from "./styles";
import { Button } from "@mui/material";
export default function DiscoverBanner({}: Props) {
  return (
    <StyledBox>
      <StyleContainer>
        <div
          style={{
            height: "404px",

            position: "relative",

            borderRadius: " 0px 0px 20px 20px",
            marginTop: "30px",
          }}
        >
          <div
            style={{
              width: "150.53px",
              position: "absolute",
              left: "10px",
            }}
          >
            <CustomTypography1
              sx={{ color: "black", fontWeight: 900, fontFamily: "DM Sans" }}
            >
              Build
            </CustomTypography1>
            <div style={{ display: "flex", gap: "5px", marginTop: "-15px" }}>
              <CustomTypography1
                sx={{ color: "black", fontWeight: 900, fontFamily: "DM Sans" }}
              >
                And
              </CustomTypography1>
              <CustomTypography1
                sx={{ color: "black", fontWeight: 900, fontFamily: "DM Sans" }}
              >
                Grow
              </CustomTypography1>
            </div>
            <div style={{ display: "flex", gap: "5px", marginTop: "-15px" }}>
              <CustomTypography1
                sx={{ color: "black", fontWeight: 900, fontFamily: "DM Sans" }}
              >
                With
              </CustomTypography1>
              <CustomTypography1
                sx={{
                  color: "#34A422;",
                  fontWeight: 900,
                  fontFamily: "DM Sans",
                }}
              >
                Elverr
              </CustomTypography1>
            </div>
            <CustomTypography1
              sx={{
                color: "#34A422;",
                fontWeight: 900,
                fontFamily: "DM Sans",
                marginTop: "-15px",
              }}
            >
              Business.
            </CustomTypography1>
            <CustomTypography2
              sx={{
                color: " #4E4D4D",
                width: "280px",
                fontSize: "0.85rem",
                fontFamily: "DM Sans",
                marginTop: "0.5rem",
                fontWeight: 300,
              }}
            >
              We believe that outsourcing is a lifeline for businesses that are
              looking to take advantage of the flexibility that comes with
              working with an outside team.
            </CustomTypography2>
            <Button
              variant="contained"
              disableElevation
              sx={{
                "textTransform": "none",
                "background": "#34A422",
                "marginTop": "1.2rem",
                "fontSize": "0.8rem",
                "fontFamily": "DM Sans",
                "&:hover": { background: "#34A422" },
              }}
            >
              Get Better Rate
            </Button>
          </div>
          <div
            style={{
              background: "rgba(52, 164, 34, 0.1)",
              filter: " blur(36.4456px)",
              position: "absolute",
              left: "40px",
              width: "280px",
              height: "200px",
              marginTop: "100px",
              borderRadius: "10px",
            }}
          ></div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img src="https://res.cloudinary.com/dxsmdvaqq/image/upload/v1666771765/worldmap.png" />
          </div>
        </div>
      </StyleContainer>
    </StyledBox>
  );
}
