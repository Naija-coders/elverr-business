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
                  route.push("/Event-services/Decor Setup & Styling");
                }}
              >
                <RelatedServicetypo>Decor Setup & Styling</RelatedServicetypo>
                <CustomArrowForwardIos sx={{ fontSize: "0.9rem" }} />
              </CustomButtonDiv>
            </CustomContainerItServices>
            <CustomContainerItServices>
              <CustomButtonDiv
                onClick={() => {
                  route.push("/Event-services/Conferences");
                }}
              >
                <RelatedServicetypo>Conferences</RelatedServicetypo>
                <CustomArrowForwardIos sx={{ fontSize: "0.9rem" }} />
              </CustomButtonDiv>
            </CustomContainerItServices>
            <CustomContainerItServices>
              <CustomButtonDiv
                onClick={() => {
                  route.push("/Event-services/Location Scouting");
                }}
              >
                <RelatedServicetypo>Location Scouting</RelatedServicetypo>
                <CustomArrowForwardIos sx={{ fontSize: "0.9rem" }} />
              </CustomButtonDiv>
            </CustomContainerItServices>
            <CustomContainerItServices>
              <CustomButtonDiv
                onClick={() => {
                  route.push("/Event-services/Festivals");
                }}
              >
                <RelatedServicetypo>Festivals</RelatedServicetypo>
                <CustomArrowForwardIos sx={{ fontSize: "0.9rem" }} />
              </CustomButtonDiv>
            </CustomContainerItServices>
          </CustomDivServices>
          <br></br>
          <br></br>
          <CustomTypographyHeader>
            Explore Event Services{" "}
          </CustomTypographyHeader>
          <CustomDivServices>
            <CustomContainerItServices>
              <img
                src={
                  "https://res.cloudinary.com/dxsmdvaqq/image/upload/v1669898916/Rectangle_4333_n9kpvy.png"
                }
                style={{
                  height: "173px",
                  borderRadius: "16.7039px 16.7039px 0px 0px",
                  width: "100%",
                }}
              />
              <CustomFlex>
                <CustomTypographyHeader>Event Manager</CustomTypographyHeader>
                <CustomTypography
                  onClick={() => {
                    route.push("/Event-services/Conference");
                  }}
                >
                  Conference
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/Event-services/Concerts");
                  }}
                >
                  Concerts
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/Event-services/Festivals");
                  }}
                >
                  Festivals
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/Event-services/Part Fabrication");
                  }}
                >
                  Part Fabrication
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/Event-services/Ceremonies");
                  }}
                >
                  Ceremonies
                </CustomTypography>
              </CustomFlex>
            </CustomContainerItServices>
            <CustomContainerItServices>
              <img
                src={
                  "https://res.cloudinary.com/dxsmdvaqq/image/upload/v1669898931/Rectangle_4334_nz8pz9.png"
                }
                style={{
                  height: "173px",
                  borderRadius: "16.7039px 16.7039px 0px 0px",
                  width: "100%",
                }}
              />
              <CustomFlex>
                <CustomTypographyHeader>Event Planner</CustomTypographyHeader>
                <CustomTypography
                  onClick={() => {
                    route.push(
                      "/Event-services/Conception & Event Planning &Service"
                    );
                  }}
                >
                  Conception & Event Planning & Service
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/Event-services/Location Scouting");
                  }}
                >
                  Location Scouting
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push(
                      "/Event-services/Service Bid & Contract Management"
                    );
                  }}
                >
                  Service Bid & Contract Management
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/Event-services/Pressure Washing");
                  }}
                >
                  Pressure Washing
                </CustomTypography>
              </CustomFlex>
            </CustomContainerItServices>

            <CustomContainerItServices>
              <img
                src={
                  "https://res.cloudinary.com/dxsmdvaqq/image/upload/v1669898938/Rectangle_4335_cdexgd.png"
                }
                style={{
                  height: "173px",
                  borderRadius: "16.7039px 16.7039px 0px 0px",
                  width: "100%",
                }}
              />
              <CustomFlex>
                <CustomTypographyHeader>Budgeting</CustomTypographyHeader>
                <CustomTypography
                  onClick={() => {
                    route.push("/Event-services/Design Proposal");
                  }}
                >
                  Design Proposal
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/Event-services/Decor Setup & Styling");
                  }}
                >
                  Decor Setup & Styling
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/Event-services/Vendor Sourcing & Curating");
                  }}
                >
                  Vendor Sourcing & Curating
                </CustomTypography>
              </CustomFlex>
            </CustomContainerItServices>

            <CustomContainerItServices>
              <img
                src={
                  "https://res.cloudinary.com/dxsmdvaqq/image/upload/v1669898923/Rectangle_4336_gmkhle.png"
                }
                style={{
                  height: "173px",
                  borderRadius: "16.7039px 16.7039px 0px 0px",
                  width: "100%",
                }}
              />
              <CustomFlex>
                <CustomTypographyHeader>
                  Corporate Events
                </CustomTypographyHeader>
                <CustomTypography
                  onClick={() => {
                    route.push("/Event-services/Seminars");
                  }}
                >
                  Seminars
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/Event-services/Product Launch Events");
                  }}
                >
                  Product Launch Events
                </CustomTypography>

                <CustomTypography
                  onClick={() => {
                    route.push("/Event-services/Workshops");
                  }}
                >
                  Workshops
                </CustomTypography>
              </CustomFlex>
            </CustomContainerItServices>
          </CustomDivServices>
        </StyleContainer>
      </StyledBox>

      <RelatedCategories eventservices={true} />

      <FAQ />
      <Footer />
    </div>
  );
}
