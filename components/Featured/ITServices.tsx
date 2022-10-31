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

type Props = {};

export default function ITServices({}: Props) {
  return (
    <div>
      <Navbar nosubbar={false} filter="none" ispagecategoriesactive={true} />
      <StyledBox>
        <StyleContainer>
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
                <CustomTypography>
                  Logo Design & Brand Identity
                </CustomTypography>
                <CustomTypography>Web & Mobile Design</CustomTypography>
                <CustomTypography>Visual Design</CustomTypography>
                <CustomTypography>
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
                <CustomTypographyHeader>
                  Digital Marketing
                </CustomTypographyHeader>
                <CustomTypography>Search Engine Optimization</CustomTypography>
                <CustomTypography>Public Relations</CustomTypography>
                <CustomTypography>Video Marketing</CustomTypography>
                <CustomTypography>Web Analytics</CustomTypography>
                <CustomTypography>Music Promotion</CustomTypography>
                <CustomTypography>Book & E-book Marketing</CustomTypography>
                <CustomTypography>Search Engine Marketing</CustomTypography>
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
                <CustomTypography>Articles & Blog posts</CustomTypography>
                <CustomTypography>Website Content</CustomTypography>
                <CustomTypography>Translation</CustomTypography>
                <CustomTypography>Resume & Cover letters</CustomTypography>
                <CustomTypography>Case Studies</CustomTypography>
                <CustomTypography>Book & Ebook Writing</CustomTypography>
                <CustomTypography>Creative Writing</CustomTypography>
                <CustomTypography>Speech Writing</CustomTypography>
                <CustomTypography>UX Writing</CustomTypography>
                <CustomTypography>Script Writing</CustomTypography>
                <CustomTypography>Research & Summaries</CustomTypography>
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
                <CustomTypography>Video Editing</CustomTypography>
                <CustomTypography>Trailers</CustomTypography>
                <CustomTypography>Visuals Effects</CustomTypography>
                <CustomTypography>Crowdfunding Videos</CustomTypography>
                <CustomTypography>3D Product Animation</CustomTypography>
                <CustomTypography>Animation</CustomTypography>
                <CustomTypography>Filmed Video Production</CustomTypography>
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
                <CustomTypography>Voice Over</CustomTypography>
                <CustomTypography>Podcasts</CustomTypography>
                <CustomTypography>Producers & Composers</CustomTypography>
                <CustomTypography>AudioBook Production</CustomTypography>
                <CustomTypography>Remixing & Mashups</CustomTypography>
              </CustomFlex>
            </CustomContainerItServices>
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
                <CustomTypographyHeader>
                  Programming & Tech
                </CustomTypographyHeader>
                <CustomTypography>WordPress</CustomTypography>
                <CustomTypography>Web builders & CMS</CustomTypography>
                <CustomTypography>Databse</CustomTypography>
                <CustomTypography>Mobile apps</CustomTypography>
                <CustomTypography>Chatbox</CustomTypography>
                <CustomTypography>Data Processing</CustomTypography>
                <CustomTypography>Blockchain & Cryptocurrency</CustomTypography>
                <CustomTypography> Coding lessons</CustomTypography>
                <CustomTypography>
                  Cyber security & Data protection
                </CustomTypography>
              </CustomFlex>
            </CustomContainerItServices>
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
                <CustomTypographyHeader>Business </CustomTypographyHeader>
                <CustomTypography>Sales</CustomTypography>
                <CustomTypography>Market Research</CustomTypography>
                <CustomTypography>Customer Care</CustomTypography>
                <CustomTypography>Foreign Exchange</CustomTypography>
                <CustomTypography>Data Analytics</CustomTypography>
                <CustomTypography>Data Visualization</CustomTypography>
                <CustomTypography>Creative Writing </CustomTypography>
                <CustomTypography> Career Counselling</CustomTypography>
              </CustomFlex>
            </CustomContainerItServices>
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
                <CustomTypographyHeader>Trending </CustomTypographyHeader>
                <CustomTypography>Dropshipping</CustomTypography>
                <CustomTypography>E-commerce Marketing</CustomTypography>
                <CustomTypography>Lead Generation</CustomTypography>
                <CustomTypography>Discord Services</CustomTypography>
                <CustomTypography>NFT Services</CustomTypography>
                <CustomTypography>
                  Architecture & Interior Design
                </CustomTypography>
                <CustomTypography>Resume Writing </CustomTypography>
                <CustomTypography> Search Engine Optimization</CustomTypography>
                <CustomTypography>Character Animation</CustomTypography>
                <CustomTypography>Image Editing</CustomTypography>
                <CustomTypography>Arts & Crafts</CustomTypography>
              </CustomFlex>
            </CustomContainerItServices>
          </CustomDivServices>
        </StyleContainer>
      </StyledBox>

      <RelatedCategories itservices={true} />

      <FAQ />
    </div>
  );
}
