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
import Automotiveservices from "../Banner/AutomotiveService";
type Props = {};

export default function Automotive({}: Props) {
  const route = useRouter();
  return (
    <div>
      <Navbar nosubbar={false} filter="none" ispagecategoriesactive={true} />
      <StyledBox>
        <StyleContainer>
          <Automotiveservices />
          <br></br> <br></br>
          <CustomTypographyHeader>Trending services</CustomTypographyHeader>
          <CustomDivServices>
            <CustomContainerItServices>
              <CustomButtonDiv
                onClick={() => {
                  route.push("/It-services/Visual Design");
                }}
              >
                <RelatedServicetypo>Tire Replacement</RelatedServicetypo>
                <CustomArrowForwardIos sx={{ fontSize: "0.9rem" }} />
              </CustomButtonDiv>
            </CustomContainerItServices>
            <CustomContainerItServices>
              <CustomButtonDiv
                onClick={() => {
                  route.push("/It-services/NFT Services");
                }}
              >
                <RelatedServicetypo>Towing Service</RelatedServicetypo>
                <CustomArrowForwardIos sx={{ fontSize: "0.9rem" }} />
              </CustomButtonDiv>
            </CustomContainerItServices>
            <CustomContainerItServices>
              <CustomButtonDiv
                onClick={() => {
                  route.push("/It-services/Dropshipping");
                }}
              >
                <RelatedServicetypo>Safety & Security</RelatedServicetypo>
                <CustomArrowForwardIos sx={{ fontSize: "0.9rem" }} />
              </CustomButtonDiv>
            </CustomContainerItServices>
            <CustomContainerItServices>
              <CustomButtonDiv
                onClick={() => {
                  route.push("/It-services/Translation");
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
                    route.push("/It-services/Logo Design & Brand Identity");
                  }}
                >
                  Logo Design & Brand Identity
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/It-services/Web & Mobile Design");
                  }}
                >
                  Web & Mobile Design
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/It-services/Visual Design");
                  }}
                >
                  Visual Design
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push(
                      "/It-services/Art,Illustration & Cover art design"
                    );
                  }}
                >
                  Art, Illustration & Cover art design
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
                    route.push("/It-services/Articles & Blog posts");
                  }}
                >
                  Articles & Blog posts
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/It-services/Website Content");
                  }}
                >
                  Website Content
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/It-services/Translation");
                  }}
                >
                  Translation
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/It-services/Resume & Cover letters");
                  }}
                >
                  Resume & Cover letters
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/It-services/Case Studies");
                  }}
                >
                  Case Studies
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/It-services/Book & Ebook Writing");
                  }}
                >
                  Book & Ebook Writing
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/It-services/Creative Writing");
                  }}
                >
                  Creative Writing
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/It-services/Speech Writing");
                  }}
                >
                  Speech Writing
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/It-services/UX Writing");
                  }}
                >
                  UX Writing
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/It-services/Script Writing");
                  }}
                >
                  Script Writing
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/It-services/Research & Summaries");
                  }}
                >
                  Research & Summaries
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
                    route.push("/It-services/Video Editing");
                  }}
                >
                  Video Editing
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/It-services/Trailers");
                  }}
                >
                  Trailers
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/It-services/Visuals Effects");
                  }}
                >
                  Visuals Effects
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/It-services/Crowdfunding Videos");
                  }}
                >
                  Crowdfunding Videos
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/It-services/3D Product Animation");
                  }}
                >
                  3D Product Animation
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/It-services/Animation");
                  }}
                >
                  Animation
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/It-services/Filmed Video Production");
                  }}
                >
                  Filmed Video Production
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
                  Full Car Service
                </CustomTypographyHeader>
                <CustomTypography
                  onClick={() => {
                    route.push("/It-services/Voice Over");
                  }}
                >
                  Voice Over
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/It-services/Podcasts");
                  }}
                >
                  Podcasts
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/It-services/Producers & Composers");
                  }}
                >
                  Producers & Composers
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/It-services/AudioBook Production");
                  }}
                >
                  AudioBook Production
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/It-services/Remixing & Mashups");
                  }}
                >
                  Remixing & Mashups
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
