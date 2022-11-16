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
import {
  residentialCleaning,
  commercialCleaning,
  constructionCleaning,
  upholsteryCleaning,
} from "./json";
import RelatedSubCat from "./RelatedSubCat";
import CleaningServices from "../Banner/CleaningServices";
type Props = {};

const CleaningserviceSubcategory = (props: Props) => {
  const route = useRouter();
  console.log("route query", route.query?.subcat);

  let service: any = route.query.subcat?.toString();

  const [type, settype] = React.useState<any>();
  const [relatedinfo, setRelatedinfo] = React.useState<any>();

  console.log("the result for the type is", type);

  const result =
    residentialCleaning.find(({ name }) => name === service) ||
    commercialCleaning.find(({ name }) => name === service) ||
    constructionCleaning.find(({ name }) => name === service) ||
    upholsteryCleaning.find(({ name }) => name === service);

  React.useEffect(() => {
    var array;
    console.log("the result is really true", result?.type);
    if (result) {
      settype(result?.type);

      if (type?.toString() === "Residential Cleaning") {
        array = residentialCleaning.filter(
          (item) => item.name !== result?.name
        );
        console.group("the result for graphic design", array);
        setRelatedinfo(array);
      }
      if (type?.toString() === "Commercial Cleaning") {
        array = commercialCleaning.filter((item) => item.name !== result?.name);
        console.group("the result for Digital Marketing", array);
        setRelatedinfo(array);
      }
      if (type?.toString() === "Construction Cleaning") {
        array = constructionCleaning.filter(
          (item) => item.name !== result?.name
        );
        console.group("the result for Writing & Translation", array);
        setRelatedinfo(array);
      }
      if (type?.toString() === "Upholstery Cleaning") {
        array = upholsteryCleaning.filter((item) => item.name !== result?.name);
        console.group("the result for Video & Animation", array);
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
                    route.push("/Automotive-services");
                  }}
                >
                  Cleaning Services
                </StyledTypography>
                <span style={{ color: "#747582" }}>&gt;</span>
                <StyledTypography sx={{ color: "#34A422" }}>
                  {service?.toUpperCase()}
                </StyledTypography>
              </div>
              <ExploreFilter />
            </ContainerWrapperDiv>
            <CleaningServices />
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

export default CleaningserviceSubcategory;
