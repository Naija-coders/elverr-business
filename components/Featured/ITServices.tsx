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
} from "../CustomCard/styles";
import RelatedCategories from "../Slider/RelatedCategories";
import { StyledBox, StyleContainer } from "../NotLoggedIn/style";
import Footer from "../LoggedIn/FooterLoggedIn";
import Itservices from "../Banner/ITservices";
import { useRouter } from "next/router";
import { ArrowForwardIos } from "@mui/icons-material";

type Props = {};

export default function ITServices({}: Props) {
  const route = useRouter();
  return (
    <div>
      <Navbar nosubbar={false} filter="none" ispagecategoriesactive={true} />
      <StyledBox>
        <StyleContainer>
          <Itservices />
          <br></br> <br></br>
          <CustomTypographyHeader>Trending services</CustomTypographyHeader>
          <CustomDivServices>
            <CustomContainerItServices>
              <CustomButtonDiv>
                <div>Graphic Design</div>
                <ArrowForwardIos sx={{ fontSize: "0.9rem" }} />
              </CustomButtonDiv>
            </CustomContainerItServices>
            <CustomContainerItServices>
              <CustomButtonDiv>
                Digital Marketing
                <ArrowForwardIos sx={{ fontSize: "0.9rem" }} />
              </CustomButtonDiv>
            </CustomContainerItServices>
            <CustomContainerItServices>
              <CustomButtonDiv>
                Writing & Translation
                <ArrowForwardIos sx={{ fontSize: "0.9rem" }} />
              </CustomButtonDiv>
            </CustomContainerItServices>
            <CustomContainerItServices>
              <CustomButtonDiv>
                Video & Animation
                <ArrowForwardIos sx={{ fontSize: "0.9rem" }} />
              </CustomButtonDiv>
            </CustomContainerItServices>
          </CustomDivServices>
          <br></br>
          <br></br>
          <CustomTypographyHeader>Explore IT Services </CustomTypographyHeader>
          <CustomDivServices>
            <CustomContainerItServices>
              <img
                src={
                  "https://res.cloudinary.com/dxsmdvaqq/image/upload/v1667203871/graphicdesign_aqcyk9.png"
                }
                style={{
                  height: "173px",
                  borderRadius: "16.7039px 16.7039px 0px 0px",
                  width: "100%",
                }}
              />
              <CustomFlex>
                <CustomTypographyHeader>Graphic Design</CustomTypographyHeader>
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
                      "It-services/Art,Illustration & Cover art design"
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
                  "https://res.cloudinary.com/dxsmdvaqq/image/upload/v1667207198/audience_y0yd4t.png"
                }
                style={{
                  height: "173px",
                  borderRadius: "16.7039px 16.7039px 0px 0px",
                  width: "100%",
                }}
              />
              <CustomFlex>
                <CustomTypographyHeader
                  onClick={() => {
                    route.push("/It-services/Digital Marketing");
                  }}
                >
                  Digital Marketing
                </CustomTypographyHeader>
                <CustomTypography
                  onClick={() => {
                    route.push("/It-services/Search Engine Optimization");
                  }}
                >
                  Search Engine Optimization
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/It-services/Public Relations");
                  }}
                >
                  Public Relations
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/It-services/Video Marketing");
                  }}
                >
                  Video Marketing
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/It-services/Web Analytics");
                  }}
                >
                  Web Analytics
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/It-services/Music Promotion");
                  }}
                >
                  Music Promotion
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/It-services/Book & E-book Marketing");
                  }}
                >
                  Book & E-book Marketing
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/It-services/Search Engine Marketing");
                  }}
                >
                  Search Engine Marketing
                </CustomTypography>
              </CustomFlex>
            </CustomContainerItServices>
            <CustomContainerItServices>
              <img
                src={
                  "https://res.cloudinary.com/dxsmdvaqq/image/upload/v1667207207/writing_translation_rajx1h.png"
                }
                style={{
                  height: "173px",
                  borderRadius: "16.7039px 16.7039px 0px 0px",
                  width: "100%",
                }}
              />
              <CustomFlex>
                <CustomTypographyHeader>
                  Writing & Translation
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
                  Video & Animation
                </CustomTypographyHeader>
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
                  "https://res.cloudinary.com/dxsmdvaqq/image/upload/v1667207221/music_pebeuk.png"
                }
                style={{
                  height: "173px",
                  borderRadius: "16.7039px 16.7039px 0px 0px",
                  width: "100%",
                }}
              />
              <CustomFlex>
                <CustomTypographyHeader>Music & Audio</CustomTypographyHeader>
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
            <CustomContainerItServices>
              <img
                src={
                  "https://res.cloudinary.com/dxsmdvaqq/image/upload/v1667376829/programming_tech_lpxnh6.png"
                }
                alt="programming & tech"
                style={{
                  height: "173px",
                  borderRadius: "16.7039px 16.7039px 0px 0px",
                  width: "100%",
                }}
              />
              <CustomFlex>
                <CustomTypographyHeader>
                  Programming & Tech
                </CustomTypographyHeader>
                <CustomTypography
                  onClick={() => {
                    route.push("/It-services/WordPress");
                  }}
                >
                  WordPress
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/It-services/Web builders & CMS");
                  }}
                >
                  Web builders & CMS
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/It-services/Database");
                  }}
                >
                  Database
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/It-services/Mobile apps");
                  }}
                >
                  Mobile apps
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/It-services/Chatbox");
                  }}
                >
                  Chatbox
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/It-services/Data Processing");
                  }}
                >
                  Data Processing
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/It-services/Blockchain & Cryptocurrency");
                  }}
                >
                  Blockchain & Cryptocurrency
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/It-services/Coding lessons");
                  }}
                >
                  {" "}
                  Coding lessons
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/It-services/Cyber security & Data protection");
                  }}
                >
                  Cyber security & Data protection
                </CustomTypography>
              </CustomFlex>
            </CustomContainerItServices>
            <CustomContainerItServices>
              <img
                src={
                  "https://res.cloudinary.com/dxsmdvaqq/image/upload/v1667376837/business_svkbch.png"
                }
                style={{
                  height: "173px",
                  borderRadius: "16.7039px 16.7039px 0px 0px",
                  width: "100%",
                }}
                alt="business"
              />
              <CustomFlex>
                <CustomTypographyHeader>Business </CustomTypographyHeader>
                <CustomTypography
                  onClick={() => {
                    route.push("/It-services/Sale");
                  }}
                >
                  Sales
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/It-services/Market Research");
                  }}
                >
                  Market Research
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/It-services/Customer Care");
                  }}
                >
                  Customer Care
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/It-services/Foreign Exchange");
                  }}
                >
                  Foreign Exchange
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/It-services/Data Analytics");
                  }}
                >
                  Data Analytics
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/It-services/Data Visualization");
                  }}
                >
                  Data Visualization
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/It-services/Creative Writing");
                  }}
                >
                  Creative Writing{" "}
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/It-services/Career Counselling");
                  }}
                >
                  {" "}
                  Career Counselling
                </CustomTypography>
              </CustomFlex>
            </CustomContainerItServices>
            <CustomContainerItServices>
              <img
                src={
                  "https://res.cloudinary.com/dxsmdvaqq/image/upload/v1667376833/trending_bs3o8c.png"
                }
                alt="trending"
                style={{
                  height: "173px",
                  borderRadius: "16.7039px 16.7039px 0px 0px",
                  width: "100%",
                }}
              />
              <CustomFlex>
                <CustomTypographyHeader>Trending </CustomTypographyHeader>
                <CustomTypography
                  onClick={() => {
                    route.push("/It-services/Dropshipping");
                  }}
                >
                  Dropshipping
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/It-services/E-commerce Marketing");
                  }}
                >
                  E-commerce Marketing
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/It-services/Lead Generation");
                  }}
                >
                  Lead Generation
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/It-services/Discord Services");
                  }}
                >
                  Discord Services
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/It-services/NFT Services");
                  }}
                >
                  NFT Services
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/It-services/Architecture & Interior Design");
                  }}
                >
                  Architecture & Interior Design
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/It-services/Resume Writing");
                  }}
                >
                  Resume Writing{" "}
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/It-services/Search Engine Optimization");
                  }}
                >
                  {" "}
                  Search Engine Optimization
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/It-services/Character Animation");
                  }}
                >
                  Character Animation
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/It-services/Image Editing");
                  }}
                >
                  Image Editing
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("/It-services/Arts & Crafts");
                  }}
                >
                  Arts & Crafts
                </CustomTypography>
              </CustomFlex>
            </CustomContainerItServices>
          </CustomDivServices>
        </StyleContainer>
      </StyledBox>

      <RelatedCategories itservices={true} />

      <FAQ />
      <Footer />
    </div>
  );
}
