import React from "react";
import Navbar from "../Navbar/Navbar";
import FAQ from "./FAQ";
import {
  CustomDivServices,
  CustomContainerItServices,
  CustomFlex,
  CustomTypography,
  CustomTypographyHeader,
  CustomButtonDiv,
  RelatedServicetypo,
  CustomArrowForwardIos,
} from "../CustomCard/styles";
import RelatedCategories from "../Slider/RelatedCategories";
import { StyledBox, StyleContainer } from "../NotLoggedIn/style";
import Footer from "../LoggedIn/FooterLoggedIn";
import EntertainmentBanner from "../Banner/EntertainmentsBanner";
import { useRouter } from "next/router";
import { ArrowForwardIos } from "@mui/icons-material";

type Props = {};

export default function EntertainmentServices({}: Props) {
  const route = useRouter();
  return (
    <div>
      <Navbar
        nosubbar={true}
        filter="drop-shadow(0px 6px 12px rgba(0, 0, 0, 0.1))"
        ispagecategoriesactive={true}
      />
      <StyledBox>
        <StyleContainer>
          <EntertainmentBanner />
          <br></br> <br></br>
          <CustomTypographyHeader>Trending services</CustomTypographyHeader>
          <CustomDivServices>
            <CustomContainerItServices>
              <CustomButtonDiv
                onClick={() => {
                  route.push("/Entertainments-services/Illustrators");
                }}
              >
                <RelatedServicetypo>Illustrators</RelatedServicetypo>
                <CustomArrowForwardIos sx={{ fontSize: "0.9rem" }} />
              </CustomButtonDiv>
            </CustomContainerItServices>
            <CustomContainerItServices>
              <CustomButtonDiv
                onClick={() => {
                  route.push("/Entertainments-services/Function Dj's & VS");
                }}
              >
                <RelatedServicetypo>{"Function Dj's & VS"}</RelatedServicetypo>
                <CustomArrowForwardIos sx={{ fontSize: "0.9rem" }} />
              </CustomButtonDiv>
            </CustomContainerItServices>
            <CustomContainerItServices>
              <CustomButtonDiv
                onClick={() => {
                  route.push("/Entertainments-services/Tatoo Artists");
                }}
              >
                <RelatedServicetypo>Tatoo Artists</RelatedServicetypo>
                <CustomArrowForwardIos sx={{ fontSize: "0.9rem" }} />
              </CustomButtonDiv>
            </CustomContainerItServices>
            <CustomContainerItServices>
              <CustomButtonDiv
                onClick={() => {
                  route.push("/Entertainments-services/Personal Trainer");
                }}
              >
                <RelatedServicetypo>Personal Trainer</RelatedServicetypo>
                <CustomArrowForwardIos sx={{ fontSize: "0.9rem" }} />
              </CustomButtonDiv>
            </CustomContainerItServices>
          </CustomDivServices>
          <br></br>
          <br></br>
          <CustomTypographyHeader>
            Explore Entertainment Services{" "}
          </CustomTypographyHeader>
          <CustomDivServices>
            <CustomContainerItServices>
              <img
                src={
                  "https://res.cloudinary.com/dxsmdvaqq/image/upload/v1670338559/Rectangle_4333_os3ii2.png"
                }
                alt={"sport"}
                style={{
                  height: "173px",
                  borderRadius: "16.7039px 16.7039px 0px 0px",
                  width: "100%",
                }}
              />
              <CustomFlex>
                <CustomTypographyHeader>Sports</CustomTypographyHeader>
                <CustomTypography
                  onClick={() => {
                    route.push("/Entertainments-services/Athletic Director");
                  }}
                >
                  Athletic Director
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/Entertainments-services/Coach");
                  }}
                >
                  Coach
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/Entertainments-services/Event Coordinator");
                  }}
                >
                  Event Coordinator
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push(
                      "/Entertainments-services/Facility Operations Manager"
                    );
                  }}
                >
                  Facility Operations Manager
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/Entertainments-services/Personal Trainer");
                  }}
                >
                  Personal Trainer
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push(
                      "/Entertainments-services/Sports Massage Therapist"
                    );
                  }}
                >
                  Sports Massage Therapist
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/Entertainments-services/Sports Physician");
                  }}
                >
                  Sports Physician
                </CustomTypography>
              </CustomFlex>
            </CustomContainerItServices>
            <CustomContainerItServices>
              <img
                src={
                  "https://res.cloudinary.com/dxsmdvaqq/image/upload/v1670338566/Rectangle_4334_xwdsyo.png"
                }
                style={{
                  height: "173px",
                  borderRadius: "16.7039px 16.7039px 0px 0px",
                  width: "100%",
                }}
                alt={"dancing"}
              />
              <CustomFlex>
                <CustomTypographyHeader>Dancers</CustomTypographyHeader>
                <CustomTypography
                  onClick={() => {
                    route.push("/Entertainments-services/Ballet Dancers");
                  }}
                >
                  Ballet Dancers
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/Entertainments-services/LED Dancers");
                  }}
                >
                  LED Dancers
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/Entertainments-services/Ballroom Dancers");
                  }}
                >
                  Ballroom Dancers
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/Entertainments-services/Pole Dancers");
                  }}
                >
                  Pole Dancers
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/Entertainments-services/Street Dancers");
                  }}
                >
                  Street Dancers
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/Entertainments-services/Cherr Leaders");
                  }}
                >
                  Cherr Leaders
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push(
                      "/Entertainments-services/Martial Arts Performances"
                    );
                  }}
                >
                  Martial Arts Performances
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/Entertainments-services/Roller Skating Acts");
                  }}
                >
                  Roller Skating Acts
                </CustomTypography>
              </CustomFlex>
            </CustomContainerItServices>
            <CustomContainerItServices>
              <img
                src={
                  "https://res.cloudinary.com/dxsmdvaqq/image/upload/v1670338573/Rectangle_4337_a1pln9.png"
                }
                alt={"artist"}
                style={{
                  height: "173px",
                  borderRadius: "16.7039px 16.7039px 0px 0px",
                  width: "100%",
                }}
              />
              <CustomFlex>
                <CustomTypographyHeader>Artists</CustomTypographyHeader>
                <CustomTypography
                  onClick={() => {
                    route.push("/Entertainments-services/Painters");
                  }}
                >
                  Painters
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/Entertainments-services/Illustrators");
                  }}
                >
                  Illustrators
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/Entertainments-services/Texttile Artists");
                  }}
                >
                  Texttile Artists
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/Entertainments-services/Cinematography");
                  }}
                >
                  Cinematography
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/Entertainments-services/Sculptors");
                  }}
                >
                  Sculptors
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/Entertainments-services/Tattoo Arts");
                  }}
                >
                  Tattoo Arts
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/Entertainments-services/Craft Making");
                  }}
                >
                  Craft Making
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/Entertainments-services/Face & Body Painting");
                  }}
                >
                  Face & Body Painting
                </CustomTypography>
              </CustomFlex>
            </CustomContainerItServices>

            <CustomContainerItServices>
              <img
                src={
                  "https://res.cloudinary.com/dxsmdvaqq/image/upload/v1670338597/Rectangle_4336_c69dsd.png"
                }
                alt={"music"}
                style={{
                  height: "173px",
                  borderRadius: "16.7039px 16.7039px 0px 0px",
                  width: "100%",
                }}
              />
              <CustomFlex>
                <CustomTypographyHeader>
                  {"    Live Music & Dj's"}
                </CustomTypographyHeader>
                <CustomTypography
                  onClick={() => {
                    route.push("/Entertainments-services/Function Dj's & VS");
                  }}
                >
                  {"Function Dj's & VS"}
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/Entertainments-services/Drummers");
                  }}
                >
                  Drummers
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/Entertainments-services/Pianist");
                  }}
                >
                  Pianist
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/Entertainments-services/Saxophonist");
                  }}
                >
                  Saxophonist
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/Entertainments-services/Bands");
                  }}
                >
                  Bands
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/Entertainments-services/Singers & Vocalist");
                  }}
                >
                  Singers & Vocalist
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/Entertainments-services/Violinist");
                  }}
                >
                  Violinist
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/Entertainments-services/Guitarists");
                  }}
                >
                  Guitarists
                </CustomTypography>
              </CustomFlex>
            </CustomContainerItServices>
          </CustomDivServices>
        </StyleContainer>
      </StyledBox>

      <RelatedCategories cleaningservices={true} />

      <FAQ
        firstheader={"What types of entertainment do you offer?"}
        firsttitle={
          "We offer a wide range of entertainment options, including live music, DJ services, sports, and dance performances."
        }
        secondheader={"Can I request a specific type of entertainment?"}
        secondtitle={
          "Yes, you can request a specific type of entertainment for your event. Please contact us with your request and we will do our best to accommodate you."
        }
        thirdheader={"Do you have a list of available entertainers?"}
        thirdtitle={
          "Yes, we have a roster of talented entertainers available for hire. You can view their profiles and listen to their demos on our website.         "
        }
        fourthheader={"Do you provide sound and lighting equipment?"}
        fourthtitle={
          "Yes, we provide all necessary sound and lighting equipment for our entertainment services."
        }
      />
      <Footer />
    </div>
  );
}
