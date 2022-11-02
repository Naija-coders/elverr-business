import React from "react";
import Navbar from "../Navbar/Navbar";
import FAQ from "./FAQ";
import {
  CustomDivServices,
  CustomContainerItServices,
  CustomFlex,
  CustomTypography,
  CustomTypographyHeader,
} from "../CustomCard/styles";
import RelatedCategories from "../Slider/RelatedCategories";
import { StyledBox, StyleContainer } from "../NotLoggedIn/style";
import Footer from "../LoggedIn/FooterLoggedIn";
import Itservices from "../Banner/ITservices";
import { useRouter } from "next/router";
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
                    route.push(
                      "It-services/subcat?Logo Design & Brand Identity"
                    );
                  }}
                >
                  Logo Design & Brand Identity
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("It-services/subcat?Web & Mobile Design");
                  }}
                >
                  Web & Mobile Design
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("It-services/subcat?Visual Design");
                  }}
                >
                  Visual Design
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push(
                      "It-services/subcat?Art,Illustration & Cover art design"
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
                    route.push("It-services/subcat?Digital Marketing");
                  }}
                >
                  Digital Marketing
                </CustomTypographyHeader>
                <CustomTypography
                  onClick={() => {
                    route.push("It-services/subcat?Search Engine Optimization");
                  }}
                >
                  Search Engine Optimization
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("It-services/subcat?Public Relations");
                  }}
                >
                  Public Relations
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("It-services/subcat?Video Marketing");
                  }}
                >
                  Video Marketing
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("It-services/subcat?Web Analytics");
                  }}
                >
                  Web Analytics
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("It-services/subcat?Music Promotion");
                  }}
                >
                  Music Promotion
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("It-services/subcat?Book & E-book Marketing");
                  }}
                >
                  Book & E-book Marketing
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("It-services/subcat?Search Engine Marketing");
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
                    route.push("It-services/subcat?Articles & Blog posts");
                  }}
                >
                  Articles & Blog posts
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("It-services/subcat?Website Content");
                  }}
                >
                  Website Content
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("It-services/subcat?Translation");
                  }}
                >
                  Translation
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("It-services/subcat?Resume & Cover letters");
                  }}
                >
                  Resume & Cover letters
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("It-services/subcat?Case Studies");
                  }}
                >
                  Case Studies
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("It-services/subcat?Book & Ebook Writing");
                  }}
                >
                  Book & Ebook Writing
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("It-services/subcat?Creative Writing");
                  }}
                >
                  Creative Writing
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("It-services/subcat?Speech Writing");
                  }}
                >
                  Speech Writing
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("It-services/subcat?UX Writing");
                  }}
                >
                  UX Writing
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("It-services/subcat?Script Writing");
                  }}
                >
                  Script Writing
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("It-services/subcat?Research & Summaries");
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
                    route.push("It-services/subcat?Video Editing");
                  }}
                >
                  Video Editing
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("It-services/subcat?Trailers");
                  }}
                >
                  Trailers
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("It-services/subcat?Visuals Effects");
                  }}
                >
                  Visuals Effects
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("It-services/subcat?Crowdfunding Videos");
                  }}
                >
                  Crowdfunding Videos
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("It-services/subcat?3D Product Animation");
                  }}
                >
                  3D Product Animation
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("It-services/subcat?Animation");
                  }}
                >
                  Animation
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("It-services/subcat?Filmed Video Production");
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
                    route.push("It-services/subcat?Voice Over");
                  }}
                >
                  Voice Over
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("It-services/subcat?Podcasts");
                  }}
                >
                  Podcasts
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("It-services/subcat?Producers & Composers");
                  }}
                >
                  Producers & Composers
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("It-services/subcat?AudioBook Production");
                  }}
                >
                  AudioBook Production
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("It-services/subcat?Remixing & Mashups");
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
                    route.push("It-services/subcat?WordPress");
                  }}
                >
                  WordPress
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("It-services/subcat?Web builders & CMS");
                  }}
                >
                  Web builders & CMS
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("It-services/subcat?Database");
                  }}
                >
                  Database
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("It-services/subcat?Mobile apps");
                  }}
                >
                  Mobile apps
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("It-services/subcat?Chatbox");
                  }}
                >
                  Chatbox
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("It-services/subcat?Data Processing");
                  }}
                >
                  Data Processing
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("It-services/subcat?Blockchain");
                  }}
                >
                  Blockchain & Cryptocurrency
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("It-services/subcat?Coding lessons");
                  }}
                >
                  {" "}
                  Coding lessons
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push(
                      "It-services/subcat?Cyber security & Data protection"
                    );
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
                    route.push("It-services/subcat?Sale");
                  }}
                >
                  Sales
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("It-services/subcat?Market Research");
                  }}
                >
                  Market Research
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("It-services/subcat?Customer Care");
                  }}
                >
                  Customer Care
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("It-services/subcat?Foreign Exchange");
                  }}
                >
                  Foreign Exchange
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("It-services/subcat?Data Analytics");
                  }}
                >
                  Data Analytics
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("It-services/subcat?Data Visualization");
                  }}
                >
                  Data Visualization
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("It-services/subcat?Creative Writing");
                  }}
                >
                  Creative Writing{" "}
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("It-services/subcat?Career Counselling");
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
                    route.push("It-services/subcat?Dropshipping");
                  }}
                >
                  Dropshipping
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("It-services/subcat?E-commerce Marketing");
                  }}
                >
                  E-commerce Marketing
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("It-services/subcat?Lead Generation");
                  }}
                >
                  Lead Generation
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("It-services/subcat?Discord Services");
                  }}
                >
                  Discord Services
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("It-services/subcat?NFT Services");
                  }}
                >
                  NFT Services
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push(
                      "It-services/subcat?Architecture & Interior Design"
                    );
                  }}
                >
                  Architecture & Interior Design
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("It-services/subcat?Resume Writing");
                  }}
                >
                  Resume Writing{" "}
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("It-services/subcat?Search Engine Optimization");
                  }}
                >
                  {" "}
                  Search Engine Optimization
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("It-services/subcat?Character Animation");
                  }}
                >
                  Character Animation
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("It-services/subcat?Image Editing");
                  }}
                >
                  Image Editing
                </CustomTypography>
                <CustomTypography
                  onClick={() => {
                    route.push("It-services/subcat?Arts & Crafts");
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
