import React from "react";
import { CustomAddiv, CustomImg, CustomImgblur } from "./styles";
import { StyledBox, StyleContainer } from "../NotLoggedIn/style";
import { Text, MainDiv1, MainDivRight } from "./styles";
import BannerFilter from "./BannerFilter";
import { Avatar, Typography } from "@mui/material";
import { CustomTypography1, CustomTypography2 } from "./styles";

type Props = {};

export default function AdvertBanner({}: Props) {
  return (
    <StyledBox
      sx={{
        height: "350px",
        background:
          "linear-gradient(90deg, rgba(54, 157, 41, 0.79) 0%, #369D29 100%)",
      }}
    >
      <StyleContainer>
        <div style={{ position: "relative" }}>
          <CustomAddiv>
            <CustomTypography1 sx={{ fontSize: { md: "28px", lg: "2.3rem" } }}>
              Post an Ad on Elverr
            </CustomTypography1>
            <CustomTypography2 sx={{ width: "400px" }}>
              Elverr is a freelance community that allows you to post ads for
              your services, projects and gigs..
            </CustomTypography2>
          </CustomAddiv>
          <CustomImgblur></CustomImgblur>
          <img
            style={{
              width: "150px",
              position: "absolute",
              right: "420px",
              marginTop: "0px",
            }}
            src="https://res.cloudinary.com/dxsmdvaqq/image/upload/v1666004779/advertarrow.png"
          />
          <CustomImg
            src="https://res.cloudinary.com/dxsmdvaqq/image/upload/v1666003433/advertbanner.png"
            alt="advertimage"
          ></CustomImg>
          <div
            style={{
              background: "#FFFFFF",
              boxShadow: " 0px 17.475px 43.6876px rgba(119, 115, 170, 0.1)",
              borderRadius: "11.9148px",
              position: "absolute",
              right: "-10px",

              marginTop: "90px",

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
      </StyleContainer>
    </StyledBox>
  );
}
