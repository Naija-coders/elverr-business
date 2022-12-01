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
import EventServicesBanner from "../Banner/Eventservices";
import { useRouter } from "next/router";
import { ArrowForwardIos } from "@mui/icons-material";
import Automotiveservices from "../Banner/AutomotiveService";
type Props = {};

export default function Automotive({}: Props) {
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
          <EventServicesBanner />
          <br></br> <br></br>
          <CustomTypographyHeader>Trending services</CustomTypographyHeader>
          <CustomDivServices>
            <CustomContainerItServices>
              <CustomButtonDiv
                onClick={() => {
                  route.push("/Automotive-services/Tire Replacement");
                }}
              >
                <RelatedServicetypo>Tire Replacement</RelatedServicetypo>
                <CustomArrowForwardIos sx={{ fontSize: "0.9rem" }} />
              </CustomButtonDiv>
            </CustomContainerItServices>
            <CustomContainerItServices>
              <CustomButtonDiv
                onClick={() => {
                  route.push("/Automotive-services/Towing Services");
                }}
              >
                <RelatedServicetypo>Towing Services</RelatedServicetypo>
                <CustomArrowForwardIos sx={{ fontSize: "0.9rem" }} />
              </CustomButtonDiv>
            </CustomContainerItServices>
            <CustomContainerItServices>
              <CustomButtonDiv
                onClick={() => {
                  route.push("/Automotive-services/Safety & Security");
                }}
              >
                <RelatedServicetypo>Safety & Security</RelatedServicetypo>
                <CustomArrowForwardIos sx={{ fontSize: "0.9rem" }} />
              </CustomButtonDiv>
            </CustomContainerItServices>
            <CustomContainerItServices>
              <CustomButtonDiv
                onClick={() => {
                  route.push("/Automotive-services/Fabrication");
                }}
              >
                <RelatedServicetypo>Fabrication</RelatedServicetypo>
                <CustomArrowForwardIos sx={{ fontSize: "0.9rem" }} />
              </CustomButtonDiv>
            </CustomContainerItServices>
          </CustomDivServices>
          <br></br>
          <br></br>
          <CustomTypographyHeader>
            Explore Automotive Services{" "}
          </CustomTypographyHeader>
          <CustomDivServices>
            <CustomContainerItServices>
              <img
                src={
                  "https://res.cloudinary.com/dxsmdvaqq/image/upload/v1668029498/Rectangle_4333_p6pzpx.png"
                }
                style={{
                  height: "173px",
                  borderRadius: "16.7039px 16.7039px 0px 0px",
                  width: "100%",
                }}
              />
              <CustomFlex>
                <CustomTypographyHeader>
                  Automative Industry
                </CustomTypographyHeader>
                <CustomTypography
                  onClick={() => {
                    route.push("/Automotive-services/Wholesaling Parts");
                  }}
                >
                  Wholesaling Parts
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/Automotive-services/Retailing Parts");
                  }}
                >
                  Retailing Parts
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push(
                      "/Automotive-services/Motor Vehicle Maintenance"
                    );
                  }}
                >
                  Motor Vehicle Maintenance
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/Automotive-services/Part Fabrication");
                  }}
                >
                  Part Fabrication
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/Automotive-services/Safety & Security");
                  }}
                >
                  Safety & Security
                </CustomTypography>
              </CustomFlex>
            </CustomContainerItServices>
            <CustomContainerItServices>
              <img
                src={
                  "https://res.cloudinary.com/dxsmdvaqq/image/upload/v1668029499/Rectangle_4334_bkhp4w.png"
                }
                style={{
                  height: "173px",
                  borderRadius: "16.7039px 16.7039px 0px 0px",
                  width: "100%",
                }}
              />
              <CustomFlex>
                <CustomTypographyHeader>
                  Automobile Services
                </CustomTypographyHeader>
                <CustomTypography
                  onClick={() => {
                    route.push("/Automotive-services/Lubrication System");
                  }}
                >
                  Lubrication System
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/Automotive-services/Electrical System");
                  }}
                >
                  Electical System
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/Automotive-services/Cooling System");
                  }}
                >
                  Cooling System
                </CustomTypography>
              </CustomFlex>
            </CustomContainerItServices>

            <CustomContainerItServices>
              <img
                src={
                  "https://res.cloudinary.com/dxsmdvaqq/image/upload/v1668029498/Rectangle_4335_cctui7.png"
                }
                style={{
                  height: "173px",
                  borderRadius: "16.7039px 16.7039px 0px 0px",
                  width: "100%",
                }}
              />
              <CustomFlex>
                <CustomTypographyHeader>Vehicle Repairs</CustomTypographyHeader>
                <CustomTypography
                  onClick={() => {
                    route.push("/Automotive-services/Transmission Repairs");
                  }}
                >
                  Transmission Repairs
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/Automotive-services/Wiper Blade Replacement");
                  }}
                >
                  Wiper Blade Replacement
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/Automotive-services/Tire Replacement");
                  }}
                >
                  Tire Replacement
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/Automotive-services/Fuel Filter");
                  }}
                >
                  Fuel Filter
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/Automotive-services/Scheduled Maintenance");
                  }}
                >
                  Scheduled Maintenance
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/Automotive-services/Oil Replacement");
                  }}
                >
                  Oil Replacement
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/Automotive-services/Air Filter Replacement");
                  }}
                >
                  Air Filter Replacement
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/Automotive-services/Towing Services");
                  }}
                >
                  Towing Services
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/Automotive-services/Body Repair & Painting");
                  }}
                >
                  Body Repair & Painting
                </CustomTypography>
              </CustomFlex>
            </CustomContainerItServices>

            <CustomContainerItServices>
              <img
                src={
                  "https://res.cloudinary.com/dxsmdvaqq/image/upload/v1668029496/Rectangle_4336_a5yaco.png"
                }
                style={{
                  height: "173px",
                  borderRadius: "16.7039px 16.7039px 0px 0px",
                  width: "100%",
                }}
              />
              <CustomFlex>
                <CustomTypographyHeader>
                  Full Car Services
                </CustomTypographyHeader>
                <CustomTypography
                  onClick={() => {
                    route.push("/Automotive-services/Air Filter Change");
                  }}
                >
                  Air Filter Change
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push(
                      "/Automotive-services/Extensive Break Inspection"
                    );
                  }}
                >
                  Extensive Break Inspection
                </CustomTypography>

                <CustomTypography
                  onClick={() => {
                    route.push("/Automotive-services/Air Condition Inspection");
                  }}
                >
                  Air Condition Inspection
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push(
                      "/Automotive-services/Shock Absorber Inspection"
                    );
                  }}
                >
                  Shock Absorber Inspection
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/Automotive-services/Electrical Test");
                  }}
                >
                  Electrical Test
                </CustomTypography>
              </CustomFlex>
            </CustomContainerItServices>
          </CustomDivServices>
        </StyleContainer>
      </StyledBox>

      <RelatedCategories automativeservices={true} />

      <FAQ />
      <Footer />
    </div>
  );
}
