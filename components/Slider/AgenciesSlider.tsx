import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { StyledBox, StyleContainer } from "../NotLoggedIn/style";
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
import { Button, IconButton } from "@mui/material";
export default class AgenciesSlider extends Component {
  render() {
    const settings = {
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
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

        <div
          style={{
            marginTop: "50px",
            display: "flex",
            justifyContent: "center",
            gap: "2rem",
            width: "100%",
          }}
        >
          <div style={{ width: "30%" }}>
            <BasicPaper
              sx={{
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                gap: "10px",

                boxShadow: "0px 0px 57.19px rgba(0, 0, 0, 0.05)",
              }}
              elevation={0}
            >
              <img
                src="afrisplash.png"
                alt="afrisplash"
                style={{ height: "26px", width: "30px", objectFit: "contain" }}
              />

              <BasicTextbody style={{ color: "#191D23", fontSize: "1rem" }}>
                Afrisplash Remotely
              </BasicTextbody>
              <BasicTextbody style={{ color: "#64748B", fontSize: "0.8rem" }}>
                $15 - $20/hr
              </BasicTextbody>
              <BasicTextbody style={{ color: "#047857", fontSize: "1rem" }}>
                remote
              </BasicTextbody>
              <BasicTextbody style={{ color: "#191D23", fontSize: "1rem" }}>
                Lorem ipsum dolor sit amet, consectetur...{" "}
              </BasicTextbody>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <img
                  src="employees.png"
                  style={{ width: "40%", objectFit: "contain" }}
                />
                <BasicTextbody style={{ color: "#64748B", fontSize: "0.8rem" }}>
                  867+ Employees
                </BasicTextbody>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "2rem",
                }}
              >
                <IconButton>
                  <FavoriteBorderIcon sx={{ color: "#34A422" }} />
                </IconButton>
                <Button
                  variant="contained"
                  sx={{
                    "background": "#34A422",
                    "color": "white",
                    "fontFamily": "DM Sans",
                    "textTransform": "none",
                    "width": "60%",

                    "&:hover": { background: "#34A422", fontFamily: "DM Sans" },
                  }}
                >
                  View profile
                </Button>
              </div>
            </BasicPaper>
          </div>
          <div style={{ width: "30%" }}>
            <BasicPaper
              sx={{
                border: "1px solid #34A422",
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                boxShadow: "0px 6px 16px rgba(52, 164, 34, 0.19)",
                borderRadius: "22.2652px 22.2652px 22.27px 22.27px",
              }}
              elevation={0}
            >
              <img
                src="afrisplash.png"
                alt="afrisplash"
                style={{ height: "26px", width: "30px", objectFit: "contain" }}
              />

              <BasicTextbody style={{ color: "#191D23", fontSize: "1rem" }}>
                Bitechpod
              </BasicTextbody>
              <BasicTextbody style={{ color: "#64748B", fontSize: "0.8rem" }}>
                $15 - $20/hr
              </BasicTextbody>
              <BasicTextbody style={{ color: "#047857", fontSize: "1rem" }}>
                remote
              </BasicTextbody>
              <BasicTextbody style={{ color: "#191D23", fontSize: "1rem" }}>
                Lorem ipsum dolor sit amet, consectetur...{" "}
              </BasicTextbody>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <img
                  src="employees.png"
                  style={{ width: "40%", objectFit: "contain" }}
                />
                <BasicTextbody style={{ color: "#64748B", fontSize: "0.8rem" }}>
                  867+ Employees
                </BasicTextbody>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "2rem",
                }}
              >
                <IconButton>
                  <FavoriteBorderIcon sx={{ color: "#34A422" }} />
                </IconButton>
                <Button
                  variant="contained"
                  sx={{
                    "background": "#34A422",
                    "color": "white",
                    "fontFamily": "DM Sans",
                    "textTransform": "none",
                    "width": "60%",

                    "&:hover": { background: "#34A422", fontFamily: "DM Sans" },
                  }}
                >
                  View profile
                </Button>
              </div>
            </BasicPaper>
          </div>
          <div style={{ width: "30%" }}>
            <BasicPaper
              sx={{
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
              elevation={0}
            >
              <img
                src="afrisplash.png"
                alt="afrisplash"
                style={{ height: "26px", width: "30px", objectFit: "contain" }}
              />

              <BasicTextbody style={{ color: "#191D23", fontSize: "1rem" }}>
                A-star Graphix
              </BasicTextbody>
              <BasicTextbody style={{ color: "#64748B", fontSize: "0.8rem" }}>
                $15 - $20/hr
              </BasicTextbody>
              <BasicTextbody style={{ color: "#047857", fontSize: "1rem" }}>
                remote
              </BasicTextbody>
              <BasicTextbody style={{ color: "#191D23", fontSize: "1rem" }}>
                Lorem ipsum dolor sit amet, consectetur...{" "}
              </BasicTextbody>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <img
                  src="employees.png"
                  style={{ width: "40%", objectFit: "contain" }}
                />
                <BasicTextbody style={{ color: "#64748B", fontSize: "0.8rem" }}>
                  867+ Employees
                </BasicTextbody>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "2rem",
                }}
              >
                <IconButton>
                  <FavoriteBorderIcon sx={{ color: "#34A422" }} />
                </IconButton>
                <Button
                  variant="contained"
                  sx={{
                    "background": "#34A422",
                    "color": "white",
                    "fontFamily": "DM Sans",
                    "textTransform": "none",
                    "width": "60%",

                    "&:hover": { background: "#34A422", fontFamily: "DM Sans" },
                  }}
                >
                  View profile
                </Button>
              </div>
            </BasicPaper>
          </div>
        </div>
      </div>
    );
  }
}
