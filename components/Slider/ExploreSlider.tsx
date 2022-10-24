import React, { Component, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { StyledBox, StyleContainer } from "../NotLoggedIn/style";
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
import { Avatar, Button, IconButton, Typography } from "@mui/material";
import { AxiosError } from "axios";

type Props = {};

export default function ExploreSlider({}: Props) {
  const settings = {
    speed: 500,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 3,
  };
  const [servicedata, setServicedata] = React.useState<any>();

  React.useEffect(() => {
    Clientapi.get("api/company/services")
      .then((response) => {
        setServicedata(response.data);
      })
      .catch((err: AxiosError) => {
        console.log("couldn't find company services");
      });
  }, [servicedata]);
  console.log("watching the service data", servicedata);
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
      <Slider {...settings}>
        {servicedata?.slice(0, 8).map((item: any) => (
          <div
            style={{
              width: "300px",
              position: "relative",
            }}
          >
            <img
              style={{
                width: "280px",
                height: "150px",
                borderRadius: "18.7065px 18.7065px 0px 0px",
              }}
              src={item?.image_url}
            />
            <div
              style={{
                marginTop: "-50px",
                display: "flex",
                justifyContent: "end",
                marginRight: "20px",
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
                <FavoriteBorderIcon
                  sx={{ fontSize: "20px", color: "#34A422" }}
                />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                paddingLeft: "0.75rem",
                justifyContent: "space-between",
                marginTop: "20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "1rem",
                  alignItems: "center",
                }}
              >
                <Avatar src={item?.profile_photo_path} />
                <div>
                  <Typography
                    sx={{
                      fontWeight: 500,
                      fontSize: "0.8rem",
                      color: "#303030",
                      fontFamily: "DM Sans",
                    }}
                  >
                    {item?.name}
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 300,
                      fontSize: "0.9rem",
                      color: "#303030",
                      fontFamily: "DM Sans",
                    }}
                  >
                    {item?.type}
                  </Typography>
                </div>
                <Typography
                  sx={{
                    fontWeight: 700,
                    fontSize: "0.9rem",
                    color: "#34A422",
                    fontFamily: "DM Sans",
                  }}
                >
                  {item?.price}
                </Typography>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
