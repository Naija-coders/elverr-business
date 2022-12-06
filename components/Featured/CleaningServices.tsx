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
import CleaningServices from "../Banner/CleaningServices";
import { useRouter } from "next/router";
import { ArrowForwardIos } from "@mui/icons-material";

type Props = {};

export default function CleaningService({}: Props) {
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
          <CleaningServices />
          <br></br> <br></br>
          <CustomTypographyHeader>Trending services</CustomTypographyHeader>
          <CustomDivServices>
            <CustomContainerItServices>
              <CustomButtonDiv
                onClick={() => {
                  route.push("/Cleaning-services/Windows & Frames Cleaning");
                }}
              >
                <RelatedServicetypo>
                  Windows & Frames Cleaning
                </RelatedServicetypo>
                <CustomArrowForwardIos sx={{ fontSize: "0.9rem" }} />
              </CustomButtonDiv>
            </CustomContainerItServices>
            <CustomContainerItServices>
              <CustomButtonDiv
                onClick={() => {
                  route.push("/Cleaning-services/Pressure Washing");
                }}
              >
                <RelatedServicetypo>Pressure Washing</RelatedServicetypo>
                <CustomArrowForwardIos sx={{ fontSize: "0.9rem" }} />
              </CustomButtonDiv>
            </CustomContainerItServices>
            <CustomContainerItServices>
              <CustomButtonDiv
                onClick={() => {
                  route.push("/Cleaning-services/Laundery & Dry Cleaning");
                }}
              >
                <RelatedServicetypo>Laundery & Dry Cleaning</RelatedServicetypo>
                <CustomArrowForwardIos sx={{ fontSize: "0.9rem" }} />
              </CustomButtonDiv>
            </CustomContainerItServices>
            <CustomContainerItServices>
              <CustomButtonDiv
                onClick={() => {
                  route.push("/Cleaning-services/Air Vent Cleaning");
                }}
              >
                <RelatedServicetypo>Air Vent Cleaning</RelatedServicetypo>
                <CustomArrowForwardIos sx={{ fontSize: "0.9rem" }} />
              </CustomButtonDiv>
            </CustomContainerItServices>
          </CustomDivServices>
          <br></br>
          <br></br>
          <CustomTypographyHeader>
            Explore Cleaning Services{" "}
          </CustomTypographyHeader>
          <CustomDivServices>
            <CustomContainerItServices>
              <img
                src={
                  "https://res.cloudinary.com/dxsmdvaqq/image/upload/v1668594650/cleaningservice_gtjebr.jpg"
                }
                style={{
                  height: "173px",
                  borderRadius: "16.7039px 16.7039px 0px 0px",
                  width: "100%",
                }}
              />
              <CustomFlex>
                <CustomTypographyHeader>
                  Residential Cleaning
                </CustomTypographyHeader>
                <CustomTypography
                  onClick={() => {
                    route.push("/Cleaning-services/Floor Mopping");
                  }}
                >
                  Floor Mopping
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/Cleaning-services/Disinfect your home");
                  }}
                >
                  Disinfect your home
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/Cleaning-services/Dust & Shine");
                  }}
                >
                  Dust & Shine
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/Cleaning-services/Laundry & Dry Cleaning");
                  }}
                >
                  Laundry & Dry Cleaning
                </CustomTypography>
              </CustomFlex>
            </CustomContainerItServices>
            <CustomContainerItServices>
              <img
                src={
                  "https://res.cloudinary.com/dxsmdvaqq/image/upload/v1668594809/commercialcleaning_tkvy7w.jpg"
                }
                style={{
                  height: "173px",
                  borderRadius: "16.7039px 16.7039px 0px 0px",
                  width: "100%",
                }}
              />
              <CustomFlex>
                <CustomTypographyHeader>
                  Commercial Cleaning
                </CustomTypographyHeader>
                <CustomTypography
                  onClick={() => {
                    route.push("/Cleaning-services/Janitorial Services");
                  }}
                >
                  Janitorial Services
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/Cleaning-services/Disinfection Cleaning");
                  }}
                >
                  Disinfection Cleaning
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/Cleaning-services/Project Based Cleaning");
                  }}
                >
                  Project Based Cleaning
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/Cleaning-services/Pressure Washing");
                  }}
                >
                  Pressure Washing
                </CustomTypography>
              </CustomFlex>
            </CustomContainerItServices>
            <CustomContainerItServices>
              <img
                src={
                  "https://res.cloudinary.com/dxsmdvaqq/image/upload/v1668594851/constructioncleaning_cy8mur.jpg"
                }
                style={{
                  height: "173px",
                  borderRadius: "16.7039px 16.7039px 0px 0px",
                  width: "100%",
                }}
              />
              <CustomFlex>
                <CustomTypographyHeader>
                  Construction Cleaning
                </CustomTypographyHeader>
                <CustomTypography
                  onClick={() => {
                    route.push("/Cleaning-services/Air Vent Cleaning");
                  }}
                >
                  Air Vent Cleaning
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/Cleaning-services/Windows & Frames Cleaning");
                  }}
                >
                  Windows & Frames Cleaning
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push(
                      "/Cleaning-services/Wiping of switches & outlets"
                    );
                  }}
                >
                  Wiping of switches & outlets
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push(
                      "/Cleaning-services/Packaging and removal of debris"
                    );
                  }}
                >
                  Packaging and removal of debris
                </CustomTypography>
              </CustomFlex>
            </CustomContainerItServices>

            <CustomContainerItServices>
              <img
                src={
                  "https://res.cloudinary.com/dxsmdvaqq/image/upload/v1667207214/videoanimation_ys5ezl.png"
                }
                style={{
                  height: "173px",
                  borderRadius: "16.7039px 16.7039px 0px 0px",
                  width: "100%",
                }}
              />
              <CustomFlex>
                <CustomTypographyHeader>
                  Upholstery Cleaning
                </CustomTypographyHeader>
                <CustomTypography
                  onClick={() => {
                    route.push("/Cleaning-services/Steam Cleaning");
                  }}
                >
                  Steam Cleaning
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/Cleaning-services/Sofa Cleaning");
                  }}
                >
                  Sofa Cleaning
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/Cleaning-services/Leather Cleaning");
                  }}
                >
                  Leather Cleaning
                </CustomTypography>
              </CustomFlex>
            </CustomContainerItServices>
          </CustomDivServices>
        </StyleContainer>
      </StyledBox>

      <RelatedCategories cleaningservices={true} />

      <FAQ />
      <Footer />
    </div>
  );
}
