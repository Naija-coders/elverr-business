import React, { Component, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { StyledBox, StyleContainer } from "../NotLoggedIn/style";
import { CustomDiv, CustomContainer } from "../CustomCard/styles";
import Clientapi from "../../pages/api/client";
import {
  BasicTextbody,
  MainHeaderText,
  BasicImage,
  BasicPaper,
  BasicText,
  BasicTextHeader,
  CustomPaper,
  BasicTextTitle,
  BasicServiceTitle,
  BasicDiv,
  BasicServiceButton,
  BasicServiceDiv,
  BasicServiceGrid,
} from "../Featured/styles";
import {
  Avatar,
  Button,
  IconButton,
  Typography,
  Skeleton,
  Checkbox,
} from "@mui/material";
import { AxiosError } from "axios";
import { Favorite, FavoriteBorder } from "@mui/icons-material";

type Props = { servicedata: any };
const label = { inputProps: { "aria-label": "Likes" } };
export default function ExploreSlider({ servicedata }: Props) {
  const settings = {
    speed: 500,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 3,
  };
  const [likes, setLikes] = React.useState(false);

  const handleLikesClicks = (event: React.MouseEvent<HTMLButtonElement>) => {
    setLikes(!likes);
  };
  return (
    <div className="">
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {servicedata === undefined ? (
        <CustomDiv>
          <CustomContainer>
            <Skeleton variant="rectangular" width={"100%"} height={"173px"} />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                paddingLeft: "10px",
                paddingRight: "1rem",
                paddingTop: "0.5rem",
                justifyContent: "space-between",
                marginTop: "10px",
                width: "100%",
              }}
            >
              {" "}
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "1rem",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <Skeleton variant="circular" width={40} height={40} />
                <Skeleton variant="text" width={"70%"} />
              </div>
            </div>
          </CustomContainer>
          <CustomContainer>
            <Skeleton variant="rectangular" width={"100%"} height={"173px"} />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                paddingLeft: "10px",
                paddingRight: "1rem",
                paddingTop: "0.5rem",
                justifyContent: "space-between",
                marginTop: "10px",
                width: "100%",
              }}
            >
              {" "}
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "1rem",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <Skeleton variant="circular" width={40} height={40} />
                <Skeleton variant="text" width={"70%"} />
              </div>
            </div>
          </CustomContainer>
          <CustomContainer>
            <Skeleton variant="rectangular" width={"100%"} height={"173px"} />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                paddingLeft: "10px",
                paddingRight: "1rem",
                paddingTop: "0.5rem",
                justifyContent: "space-between",
                marginTop: "10px",
                width: "100%",
              }}
            >
              {" "}
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "1rem",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <Skeleton variant="circular" width={40} height={40} />
                <Skeleton variant="text" width={"70%"} />
              </div>
            </div>
          </CustomContainer>
          <CustomContainer>
            <Skeleton variant="rectangular" width={"100%"} height={"173px"} />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                paddingLeft: "10px",
                paddingRight: "1rem",
                paddingTop: "0.5rem",
                justifyContent: "space-between",
                marginTop: "10px",
                width: "100%",
              }}
            >
              {" "}
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "1rem",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <Skeleton variant="circular" width={40} height={40} />
                <Skeleton variant="text" width={"70%"} />
              </div>
            </div>
          </CustomContainer>
        </CustomDiv>
      ) : (
        <Slider {...settings}>
          {servicedata?.slice(0, 8).map((item: any) => (
            <CustomContainer
              sx={{
                width: { lg: "230.34px", md: "260px" },
                height: "294.82px",
              }}
              key={Math.random()}
            >
              <img
                style={{
                  height: "68%",

                  borderRadius: "16.7039px 16.7039px 0px 0px",
                  width: "100%",
                }}
                src={item.image_url}
              />
              <div
                style={{
                  marginTop: "-45px",
                  display: "flex",
                  justifyContent: "end",
                  marginRight: "10px",
                }}
              >
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    background: "#F7F7F7",
                    borderRadius: "50px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Checkbox
                    {...label}
                    icon={
                      <FavoriteBorder
                        sx={{ fontSize: "20px", color: "#34A422" }}
                      />
                    }
                    checkedIcon={
                      <Favorite sx={{ fontSize: "20px", color: "red" }} />
                    }
                  />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  paddingLeft: "10px",
                  paddingRight: "1rem",
                  paddingTop: "0.5rem",
                  justifyContent: "space-between",

                  marginTop: "10px",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "1rem",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <img
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                    }}
                    src={item.image_url}
                  />

                  <div>
                    <Typography
                      sx={{
                        fontWeight: 600,
                        fontSize: "0.9rem",
                        fontFamily: "DM Sans",
                        color: "#303030",
                      }}
                    >
                      {item?.name}
                    </Typography>
                    <Typography
                      sx={{
                        fontWeight: 300,
                        fontSize: "0.rem",
                        color: " #747582",
                        fontFamily: "DM Sans",
                      }}
                    >
                      {item?.type}
                    </Typography>
                  </div>
                </div>
                <Typography
                  sx={{
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    color: "#34A422",
                    fontFamily: "DM Sans",
                  }}
                >
                  $ {item?.price}
                </Typography>
              </div>
            </CustomContainer>
          ))}
        </Slider>
      )}
    </div>
  );
}
