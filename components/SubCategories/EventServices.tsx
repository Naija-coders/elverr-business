import React from "react";
import Navbar from "../Navbar/Navbar";
import {
  CustomDivServices,
  CustomContainerItServices,
  CustomFlex,
  CustomTypography,
  CustomTypographyHeader,
  CustomButtonDiv,
} from "../CustomCard/styles";
import { StyledBox, StyleContainer } from "../NotLoggedIn/style";
import { useRouter } from "next/router";

import { StyledTypography, ContainerWrapperDiv } from "./styles";
import ExploreFilter from "../Filters/ExploreFilter";
import BasedonLikes from "../Featured/BasedonLikes";
import ITserviceBanner from "../Banner/ITSubcategorybanner";
import Footer from "../LoggedIn/FooterLoggedIn";
import FAQ from "../Featured/FAQ";
import ReuseablePaginatedService from "../PaginatedServices/ReuseablePaginatedService";
import ITSubCategoriesslider from "../Slider/ITSubCategoriesslider";
import EventservicesBanner from "../Banner/Eventservices";
import {
  graphicDesign,
  digitalMarketing,
  writingTranslation,
  videoAnimation,
  musicAudio,
  programming,
  business,
  trending,
} from "./json";
import RelatedSubCat from "./RelatedSubCat";
type Props = {};

const ITservices = (props: Props) => {
  const route = useRouter();
  console.log("route query", route.query?.subcat);

  let service: any = route.query.subcat?.toString();

  const [type, settype] = React.useState<any>();
  const [relatedinfo, setRelatedinfo] = React.useState<any>();

  console.log("the result for the type is", type);

  const result =
    graphicDesign.find(({ name }) => name === service) ||
    digitalMarketing.find(({ name }) => name === service) ||
    writingTranslation.find(({ name }) => name === service) ||
    musicAudio.find(({ name }) => name === service) ||
    programming.find(({ name }) => name === service) ||
    business.find(({ name }) => name === service) ||
    videoAnimation.find(({ name }) => name === service) ||
    trending.find(({ name }) => name === service);
  React.useEffect(() => {
    var array;
    console.log("the result is really true", result?.type);
    if (result) {
      settype(result?.type);

      if (type?.toString() === "Graphic Design") {
        array = graphicDesign.filter((item) => item.name !== result?.name);
        console.group("the result for graphic design", array);
        setRelatedinfo(array);
      }
      if (type?.toString() === "Digital Marketing") {
        array = digitalMarketing.filter((item) => item.name !== result?.name);
        console.group("the result for Digital Marketing", array);
        setRelatedinfo(array);
      }
      if (type?.toString() === "Writing & Translation") {
        array = writingTranslation.filter((item) => item.name !== result?.name);
        console.group("the result for Writing & Translation", array);
        setRelatedinfo(array);
      }
      if (type?.toString() === "Video & Animation") {
        array = videoAnimation.filter((item) => item.name !== result?.name);
        console.group("the result for Video & Animation", array);
        setRelatedinfo(array);
      }
      if (type?.toString() === "Music & Audio") {
        array = musicAudio.filter((item) => item.name !== result?.name);
        console.group("the result for Music & Audio", array);
        setRelatedinfo(array);
      }
      if (type?.toString() === "Programming & Tech") {
        array = programming.filter((item) => item.name !== result?.name);
        console.group("the result for Programming & Tech", array);
        setRelatedinfo(array);
      }
      if (type?.toString() === "Business") {
        array = business.filter((item) => item.name !== result?.name);
        console.group("the result for Business", array);
        setRelatedinfo(array);
      }
      if (type?.toString() === "Trending") {
        array = trending.filter((item) => item.name !== result?.name);
        console.group("the result for Business", array);
        setRelatedinfo(array);
      }
    } else {
    }
  }, [type, route.query?.subcat]);

  return (
    <div>
      {" "}
      <Navbar nosubbar={false} filter="none" ispagecategoriesactive={true} />
      <StyledBox>
        <StyleContainer>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "40px" }}
          >
            <ContainerWrapperDiv>
              <div style={{ display: "flex", gap: "0.8rem" }}>
                <StyledTypography
                  sx={{
                    "&:hover": {
                      textDecoration: "underline",
                      cursor: "pointer",
                    },
                  }}
                  onClick={() => {
                    route.push("/It-services");
                  }}
                >
                  IT SERVICES
                </StyledTypography>
                <span style={{ color: "#747582" }}>&gt;</span>
                <StyledTypography sx={{ color: "#34A422" }}>
                  {service?.toUpperCase()}
                </StyledTypography>
              </div>
              <ExploreFilter />
            </ContainerWrapperDiv>
            <EventservicesBanner />
            <ContainerWrapperDiv>
              <CustomTypographyHeader> {service}</CustomTypographyHeader>
              <CustomTypography>
                Find the best agency on Elverr to suit your project needs
              </CustomTypography>
              <ReuseablePaginatedService query={route.query?.subcat} />
            </ContainerWrapperDiv>
            <RelatedSubCat title={result?.type} related={relatedinfo} />
          </div>
        </StyleContainer>
      </StyledBox>
      <FAQ />
      <Footer />
    </div>
  );
};

export default ITservices;
