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
import Itservices from "../Banner/ITservices";
import { useRouter } from "next/router";
import { ArrowForwardIos } from "@mui/icons-material";
import OtherServicesBanner from "../Banner/OtherServicesBanner";

type Props = {};

export default function Other({}: Props) {
  const route = useRouter();
  return (
    <div>
      <Navbar nosubbar={false} filter="none" ispagecategoriesactive={true} />
      <StyledBox>
        <StyleContainer>
          <OtherServicesBanner />
          <br></br> <br></br>
          <CustomTypographyHeader>Trending services</CustomTypographyHeader>
          <CustomDivServices>
            <CustomContainerItServices>
              <CustomButtonDiv
                onClick={() => {
                  route.push("/Other-services/Alarm & CCTV Installation");
                }}
              >
                <RelatedServicetypo>
                  Alarm & CCTV Installation
                </RelatedServicetypo>
                <CustomArrowForwardIos sx={{ fontSize: "0.9rem" }} />
              </CustomButtonDiv>
            </CustomContainerItServices>
            <CustomContainerItServices>
              <CustomButtonDiv
                onClick={() => {
                  route.push("/Other-services/Machine Service");
                }}
              >
                <RelatedServicetypo>Machine Service</RelatedServicetypo>
                <CustomArrowForwardIos sx={{ fontSize: "0.9rem" }} />
              </CustomButtonDiv>
            </CustomContainerItServices>
            <CustomContainerItServices>
              <CustomButtonDiv
                onClick={() => {
                  route.push("/Other-services/Heavy Equipment Operator");
                }}
              >
                <RelatedServicetypo>
                  Heavy Equipment Operator
                </RelatedServicetypo>
                <CustomArrowForwardIos sx={{ fontSize: "0.9rem" }} />
              </CustomButtonDiv>
            </CustomContainerItServices>
            <CustomContainerItServices>
              <CustomButtonDiv
                onClick={() => {
                  route.push("/Other-services/Home Repairs");
                }}
              >
                <RelatedServicetypo>Home Repairs</RelatedServicetypo>
                <CustomArrowForwardIos sx={{ fontSize: "0.9rem" }} />
              </CustomButtonDiv>
            </CustomContainerItServices>
          </CustomDivServices>
          <br></br>
          <br></br>
          <CustomTypographyHeader>
            Explore Other Services{" "}
          </CustomTypographyHeader>
          <CustomDivServices>
            <CustomContainerItServices>
              <img
                src={
                  "https://res.cloudinary.com/dxsmdvaqq/image/upload/v1668765672/Rectangle_4333_vrmfio.png"
                }
                alt="building and trading"
                style={{
                  height: "173px",
                  borderRadius: "16.7039px 16.7039px 0px 0px",
                  width: "100%",
                }}
              />
              <CustomFlex>
                <CustomTypographyHeader>
                  Building & Trading
                </CustomTypographyHeader>
                <CustomTypography
                  onClick={() => {
                    route.push(
                      "/Other-services/Electrical Installation & Testing"
                    );
                  }}
                >
                  Electrical Installation & Testing
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/Other-services/Carpentry & Joinery");
                  }}
                >
                  Carpentry & Joinery
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/Other-services/Oil & Gas Industry");
                  }}
                >
                  Oil & Gas Industry
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/Other-services/Electrician");
                  }}
                >
                  Electrician
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/Other-services/Heavy Equipment Operator");
                  }}
                >
                  Heavy Equipment Operator
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/Other-services/Alarm & CCTV Installation");
                  }}
                >
                  Alarm & CCTV Installation
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/Other-services/Drainage Services");
                  }}
                >
                  Drainage Services
                </CustomTypography>
              </CustomFlex>
            </CustomContainerItServices>
            <CustomContainerItServices>
              <img
                src={
                  "https://res.cloudinary.com/dxsmdvaqq/image/upload/v1668765675/Rectangle_4334_jzgzme.png"
                }
                style={{
                  height: "173px",
                  borderRadius: "16.7039px 16.7039px 0px 0px",
                  width: "100%",
                }}
              />
              <CustomFlex>
                <CustomTypographyHeader>
                  Health & Beauty Service
                </CustomTypographyHeader>
                <CustomTypography
                  onClick={() => {
                    route.push("/Other-services/Make-up");
                  }}
                >
                  Make-up
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/Other-services/Hair Dresser & Barber");
                  }}
                >
                  Hair Dresser & Barber
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/Other-services/Skin Care");
                  }}
                >
                  Skin Care
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/Other-services/Pedicure");
                  }}
                >
                  Pedicure
                </CustomTypography>
              </CustomFlex>
            </CustomContainerItServices>

            <CustomContainerItServices>
              <img
                src={
                  "https://res.cloudinary.com/dxsmdvaqq/image/upload/v1668765683/Rectangle_4335_e0losr.png"
                }
                alt="landscaping & Garden"
                style={{
                  height: "173px",
                  borderRadius: "16.7039px 16.7039px 0px 0px",
                  width: "100%",
                }}
              />
              <CustomFlex>
                <CustomTypographyHeader>
                  Landscaping & Garden
                </CustomTypographyHeader>
                <CustomTypography
                  onClick={() => {
                    route.push("/Other-services/Prunning");
                  }}
                >
                  Prunning
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/Other-services/Garden Design");
                  }}
                >
                  Garden Design
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/Other-services/Soil Enrichment");
                  }}
                >
                  Soil Enrichment
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/Other-services/Landscape & Garden Cleanup");
                  }}
                >
                  Landscape & Garden Cleanup
                </CustomTypography>
              </CustomFlex>
            </CustomContainerItServices>

            <CustomContainerItServices>
              <img
                src={
                  "https://res.cloudinary.com/dxsmdvaqq/image/upload/v1668765700/Rectangle_4336_dx6plb.png"
                }
                alt="printing services"
                style={{
                  height: "173px",
                  borderRadius: "16.7039px 16.7039px 0px 0px",
                  width: "100%",
                }}
              />
              <CustomFlex>
                <CustomTypographyHeader>
                  Printing Services
                </CustomTypographyHeader>
                <CustomTypography
                  onClick={() => {
                    route.push("/Other-services/Gravure Printing");
                  }}
                >
                  Gravure Printing
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/Other-services/Engraving");
                  }}
                >
                  Engraving
                </CustomTypography>

                <CustomTypography
                  onClick={() => {
                    route.push("/Other-services/Flexographic Printing");
                  }}
                >
                  Flexographic Printing
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/Other-services/Thermographic Printing");
                  }}
                >
                  Thermographic Printing
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/Other-services/Screen Printing");
                  }}
                >
                  Screen Printing
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/Other-services/Digital Printing");
                  }}
                >
                  Digital Printing
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/Other-services/Rotary Screen");
                  }}
                >
                  Rotary Screen
                </CustomTypography>
              </CustomFlex>
            </CustomContainerItServices>
            <CustomContainerItServices>
              <img
                src={
                  "https://res.cloudinary.com/dxsmdvaqq/image/upload/v1668767000/Rectangle_4333_sefp63.png"
                }
                style={{
                  height: "173px",
                  borderRadius: "16.7039px 16.7039px 0px 0px",
                  width: "100%",
                }}
              />
              <CustomFlex>
                <CustomTypographyHeader>Repair Services</CustomTypographyHeader>
                <CustomTypography
                  onClick={() => {
                    route.push("/Other-services/Dry Docking & Repairs");
                  }}
                >
                  Dry Docking & Repairs
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/Other-services/Machine Service");
                  }}
                >
                  Machine Service
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/Other-services/Emergency Repairs");
                  }}
                >
                  Emergency Repairs
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/Other-services/Home Repairs");
                  }}
                >
                  Home Repairs
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/Other-services/Remixing & Mashups");
                  }}
                >
                  Remixing & Mashups
                </CustomTypography>
              </CustomFlex>
            </CustomContainerItServices>

            <CustomContainerItServices>
              <img
                src={
                  "https://res.cloudinary.com/dxsmdvaqq/image/upload/v1668767017/Group_39212_fayjuj.png"
                }
                style={{
                  height: "173px",
                  borderRadius: "16.7039px 16.7039px 0px 0px",
                  width: "100%",
                }}
              />
              <CustomFlex>
                <CustomTypographyHeader>
                  Logistics Services
                </CustomTypographyHeader>
                <CustomTypography
                  onClick={() => {
                    route.push("/Other-services/Warehousing");
                  }}
                >
                  Warehousing
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/Other-services/Customs Clearance");
                  }}
                >
                  Customs Clearance
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/Other-services/Freight Forwarding");
                  }}
                >
                  Freight Forwarding
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/Other-services/Supply Chain Management");
                  }}
                >
                  Supply Chain Management
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/Other-services/Industrial Distribution");
                  }}
                >
                  Industrial Distribution
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/Other-services/Data Processing");
                  }}
                >
                  Data Processing
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/Other-services/Blockchain & Cryptocurrency");
                  }}
                >
                  Blockchain & Cryptocurrency
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/Other-services/Coding Lessons");
                  }}
                >
                  Coding Lessons
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push(
                      "/Other-services/Cyber Security & Data Protection"
                    );
                  }}
                >
                  Cyber Security & Data Protection
                </CustomTypography>
              </CustomFlex>
            </CustomContainerItServices>
            <CustomContainerItServices>
              <img
                src={
                  "https://res.cloudinary.com/dxsmdvaqq/image/upload/v1668767009/Group_39213_hbo4bi.png"
                }
                style={{
                  height: "173px",
                  borderRadius: "16.7039px 16.7039px 0px 0px",
                  width: "100%",
                }}
              />
              <CustomFlex>
                <CustomTypographyHeader>
                  Travel & Tour Services
                </CustomTypographyHeader>
                <CustomTypography
                  onClick={() => {
                    route.push("/Other-services/Travel Management");
                  }}
                >
                  Travel Management
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/Other-services/Travel Agent");
                  }}
                >
                  Travel Agent
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/Other-services/Tour Operators");
                  }}
                >
                  Tour Operators
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/Other-services/Online Travel Agencies");
                  }}
                >
                  Online Travel Agencies
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
