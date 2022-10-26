import React from "react";

type Props = {};
import { LadyDiv } from "./styles";
import { StyledBox, StyleContainer } from "../NotLoggedIn/style";
import { Text, MainDiv1, MainDivRight } from "./styles";
import BannerFilter from "./BannerFilter";
import { CustomTypography1, CustomTypography2 } from "./styles";
import { Avatar, Button, Typography } from "@mui/material";
export default function DiscoverBanner({}: Props) {
  return (
    <StyledBox>
      <StyleContainer>
        <div
          style={{
            height: "404px",

            position: "relative",

            borderRadius: " 0px 0px 20px 20px",
          }}
        >
          <div
            style={{
              width: "150.53px",
              position: "absolute",
              left: "10px",
              marginTop: "50px",
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
              width: "250px",
              height: "200px",
              marginTop: "100px",
              borderRadius: "10px",
            }}
          ></div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              style={{ width: "62%" }}
              src="https://res.cloudinary.com/dxsmdvaqq/image/upload/v1666777525/worldmap_tz0yjz.png"
            />
          </div>

          <LadyDiv>
            <img
              style={{ height: "320px" }}
              src="https://res.cloudinary.com/dxsmdvaqq/image/upload/v1666777172/Screenshot_2022-10-26_at_12.38.29_PM-removebg-preview_ub9tbi.png"
            />
          </LadyDiv>
          <div
            style={{
              background: "rgba(52, 164, 34, 0.1)",
              filter: " blur(36.4456px)",
              position: "absolute",
              right: "50px",
              width: "210px",
              height: "100px",
              top: 0,
              marginTop: "200px",

              borderRadius: "10px",
            }}
          ></div>
          <div
            style={{
              background: "#FFFFFF",
              boxShadow: " 0px 17.475px 43.6876px rgba(119, 115, 170, 0.1)",
              borderRadius: "11.9148px",
              position: "absolute",
              right: "170px",
              top: 0,
              marginTop: "190px",

              height: " 60.49px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "1rem",
                height: "100%",
                padding: "1rem",
                justifyItems: "center",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{ display: "flex", flexDirection: "row", gap: "1rem" }}
              >
                <Avatar src="https://res.cloudinary.com/dxsmdvaqq/image/upload/v1666006880/makeupartist.jpg" />
                <div>
                  <Typography sx={{ fontSize: "0.8rem", color: "#303030" }}>
                    {" "}
                    Clarisse Meyer
                  </Typography>
                  <Typography sx={{ fontSize: "0.8rem", color: "#747582" }}>
                    Makeup Artist
                  </Typography>
                </div>
              </div>
              <Typography
                sx={{
                  color: "#34A422",
                  fontSize: "1rem",
                  fontWeight: "700",
                  marginLeft: "1rem",

                  opacity: "0.8",
                }}
              >
                $15.00
              </Typography>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <BannerFilter />
        </div>
      </StyleContainer>
    </StyledBox>
  );
}
