import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
let imageurls =
  "https://res.cloudinary.com/dxsmdvaqq/image/upload/v1664560272/";
export default class SimpleSlider extends Component {
  render() {
    const settings = {
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 3,
    };
    return (
      <StyledBox className="">
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

        <StyleContainer>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div style={{ maxWidth: "530px", width: "100%" }}>
              <div
                style={{
                  display: "inline-flex",
                  width: "100%",
                  justifyContent: "space-around",
                }}
              >
                {" "}
                <MainHeaderText align="center" style={{ color: "#34A422" }}>
                  Explore
                </MainHeaderText>
                <MainHeaderText align="center">
                  trending categories on Elverr
                </MainHeaderText>
              </div>
              <BasicTextbody align="center">
                Check out our popular services on Elverr and meet your project
                goals in less than no time.
              </BasicTextbody>
            </div>
          </div>
          <div
            style={{
              marginTop: "50px",
            }}
          >
            <Slider {...settings}>
              <div>
                <BasicPaper elevation={0}>
                  <BasicImage src="https://res.cloudinary.com/dxsmdvaqq/image/upload/v1664558639/mainitservice_cboygo.jpg" />
                  <BasicDiv>
                    <BasicServiceTitle> IT Services</BasicServiceTitle>
                    <BasicTextbody align="center">
                      {" "}
                      We’ll get you directly seated and inside for you to enjoy
                      the show.
                    </BasicTextbody>
                  </BasicDiv>
                </BasicPaper>
              </div>
              <div>
                <BasicPaper elevation={0}>
                  <BasicImage src="https://res.cloudinary.com/dxsmdvaqq/image/upload/v1664560272/servicesit_noaztv.jpg" />
                  <BasicDiv>
                    <BasicServiceTitle> Event Services</BasicServiceTitle>
                    <BasicTextbody align="center">
                      {" "}
                      We’ll get you directly seated and inside for you to enjoy
                      the show.
                    </BasicTextbody>
                  </BasicDiv>
                </BasicPaper>
              </div>{" "}
              <div>
                <BasicPaper elevation={0}>
                  <BasicImage src="https://res.cloudinary.com/dxsmdvaqq/image/upload/v1664560272/servicelogistics_pulxcr.jpg" />
                  <BasicDiv>
                    <BasicServiceTitle> Logistics Services</BasicServiceTitle>
                    <BasicTextbody align="center">
                      {" "}
                      We’ll get you directly seated and inside for you to enjoy
                      the show.
                    </BasicTextbody>
                  </BasicDiv>
                </BasicPaper>
              </div>{" "}
              <div>
                <BasicPaper elevation={0}>
                  <BasicImage
                    src={imageurls + "serviceautomative_tanxmr.jpg"}
                  />
                  <BasicDiv>
                    <BasicServiceTitle> Automative Services</BasicServiceTitle>
                    <BasicTextbody align="center">
                      {" "}
                      We’ll get you directly seated and inside for you to enjoy
                      the show.
                    </BasicTextbody>
                  </BasicDiv>
                </BasicPaper>
              </div>{" "}
              <div>
                <BasicPaper elevation={0}>
                  <BasicImage src={imageurls + "serviceimage_wf07h3.jpg"} />
                  <BasicDiv>
                    <BasicServiceTitle> Cleaning Services</BasicServiceTitle>
                    <BasicTextbody align="center">
                      {" "}
                      We’ll get you directly seated and inside for you to enjoy
                      the show.
                    </BasicTextbody>
                  </BasicDiv>
                </BasicPaper>
              </div>{" "}
              <div>
                <BasicPaper elevation={0}>
                  <BasicImage src="servicesit.jpeg" />
                  <BasicDiv>
                    <BasicServiceTitle> Repair Services</BasicServiceTitle>
                    <BasicTextbody align="center">
                      {" "}
                      We’ll get you directly seated and inside for you to enjoy
                      the show.
                    </BasicTextbody>
                  </BasicDiv>
                </BasicPaper>
              </div>{" "}
              <div>
                <BasicPaper elevation={0}>
                  <BasicImage src="servicesit.jpeg" />
                  <BasicDiv>
                    <BasicServiceTitle> Fitness Services</BasicServiceTitle>
                    <BasicTextbody align="center">
                      {" "}
                      We’ll get you directly seated and inside for you to enjoy
                      the show.
                    </BasicTextbody>
                  </BasicDiv>
                </BasicPaper>
              </div>{" "}
            </Slider>
          </div>
        </StyleContainer>
      </StyledBox>
    );
  }
}
