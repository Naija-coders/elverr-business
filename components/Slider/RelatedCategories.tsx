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
import { CustomTypographyHeader } from "../CustomCard/styles";
import { useRouter } from "next/router";
let imageurls =
  "https://res.cloudinary.com/dxsmdvaqq/image/upload/v1664560272/";

interface IAppProps {
  itservices?: boolean;
  eventservices?: boolean;
  logisticsservices?: boolean;
  cleaningservices?: boolean;
  automativeservices?: boolean;
  repairservices?: boolean;
  fitnessservices?: boolean;
}

const RelatedCategories: React.FunctionComponent<IAppProps> = (props) => {
  const settings = {
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  const route = useRouter();

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

      <StyleContainer sx={{}}>
        <div
          style={{
            marginTop: "50px",
          }}
        >
          <CustomTypographyHeader> Related Categories</CustomTypographyHeader>

          {props.itservices && (
            <Slider {...settings}>
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
                    <BasicServiceTitle> Automotive Services</BasicServiceTitle>
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
          )}
          {props.eventservices && (
            <Slider {...settings}>
              <div>
                <BasicPaper elevation={0}>
                  <BasicImage src="https://res.cloudinary.com/dxsmdvaqq/image/upload/v1664560272/servicesit_noaztv.jpg" />
                  <BasicDiv>
                    <BasicServiceTitle> IT Services</BasicServiceTitle>
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
                    <BasicServiceTitle> Automotive Services</BasicServiceTitle>
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
          )}
          {props.automativeservices && (
            <Slider {...settings}>
              <div>
                <BasicPaper elevation={0}>
                  <BasicImage src="https://res.cloudinary.com/dxsmdvaqq/image/upload/v1664560272/servicesit_noaztv.jpg" />
                  <BasicDiv>
                    <BasicServiceTitle> IT Services</BasicServiceTitle>
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
          )}
          {props.logisticsservices && (
            <Slider {...settings}>
              <div>
                <BasicPaper elevation={0}>
                  <BasicImage src="https://res.cloudinary.com/dxsmdvaqq/image/upload/v1664560272/servicesit_noaztv.jpg" />
                  <BasicDiv>
                    <BasicServiceTitle> IT Services</BasicServiceTitle>
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
                  <BasicImage src="https://res.cloudinary.com/dxsmdvaqq/image/upload/v1664560272/servicesit_noaztv.jpg" />
                  <BasicDiv>
                    <BasicServiceTitle> Automotive Services</BasicServiceTitle>
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
                    <BasicServiceTitle> IT Services</BasicServiceTitle>
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
          )}
          {props.fitnessservices && (
            <Slider {...settings}>
              <div>
                <BasicPaper elevation={0}>
                  <BasicImage src="https://res.cloudinary.com/dxsmdvaqq/image/upload/v1664560272/servicesit_noaztv.jpg" />
                  <BasicDiv>
                    <BasicServiceTitle> IT Services</BasicServiceTitle>
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
                  <BasicImage src="https://res.cloudinary.com/dxsmdvaqq/image/upload/v1664560272/servicesit_noaztv.jpg" />
                  <BasicDiv>
                    <BasicServiceTitle> Automotive Services</BasicServiceTitle>
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
            </Slider>
          )}
          {props.cleaningservices && (
            <Slider {...settings}>
              <div>
                <BasicPaper elevation={0}>
                  <BasicImage src="https://res.cloudinary.com/dxsmdvaqq/image/upload/v1664560272/servicesit_noaztv.jpg" />
                  <BasicDiv>
                    <BasicServiceTitle> IT Services</BasicServiceTitle>
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
                  <BasicImage src="https://res.cloudinary.com/dxsmdvaqq/image/upload/v1664560272/servicesit_noaztv.jpg" />
                  <BasicDiv>
                    <BasicServiceTitle> Automotive Services</BasicServiceTitle>
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
                  <BasicImage src={imageurls + "serviceimage_wf07h3.jpg"} />
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
          )}
          {props.repairservices && (
            <Slider {...settings}>
              <div>
                <BasicPaper elevation={0}>
                  <BasicImage src="https://res.cloudinary.com/dxsmdvaqq/image/upload/v1664560272/servicesit_noaztv.jpg" />
                  <BasicDiv>
                    <BasicServiceTitle> IT Services</BasicServiceTitle>
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
                  <BasicImage src="https://res.cloudinary.com/dxsmdvaqq/image/upload/v1664560272/servicesit_noaztv.jpg" />
                  <BasicDiv>
                    <BasicServiceTitle> Automotive Services</BasicServiceTitle>
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
          )}
        </div>
      </StyleContainer>
    </StyledBox>
  );
};

export default RelatedCategories;
