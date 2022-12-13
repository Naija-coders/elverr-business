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
import Otherservicesbannner from "../Banner/OtherServicesBanner";
import Footer from "../LoggedIn/FooterLoggedIn";
import FAQ from "../Featured/FAQ";
import ReuseablePaginatedService from "../PaginatedServices/ReuseablePaginatedService";
import ITSubCategoriesslider from "../Slider/ITSubCategoriesslider";
import {
  buildingandtrading,
  healthandbeauty,
  landscapingandgarden,
  printingservice,
  repairservices,
  logisticservices,
  travelandtour,
} from "./json";
import RelatedSubCat from "./RelatedSubCat";
type Props = {};

const OtherServices = (props: Props) => {
  const route = useRouter();
  console.log("route query", route.query?.subcat);

  let service: any = route.query.subcat?.toString();

  const [type, settype] = React.useState<any>();
  const [relatedinfo, setRelatedinfo] = React.useState<any>();

  console.log("the result for the type is", type);

  const result =
    buildingandtrading.find(({ name }) => name === service) ||
    healthandbeauty.find(({ name }) => name === service) ||
    landscapingandgarden.find(({ name }) => name === service) ||
    printingservice.find(({ name }) => name === service) ||
    repairservices.find(({ name }) => name === service) ||
    logisticservices.find(({ name }) => name === service) ||
    travelandtour.find(({ name }) => name === service);

  React.useEffect(() => {
    var array;
    console.log("the result is really true", result?.type);
    if (result) {
      settype(result?.type);

      if (type?.toString() === "Building & Trading") {
        array = buildingandtrading.filter((item) => item.name !== result?.name);
        console.group("the result for graphic design", array);
        setRelatedinfo(array);
      }
      if (type?.toString() === "Health & Beauty Service") {
        array = healthandbeauty.filter((item) => item.name !== result?.name);
        console.group("the result for Digital Marketing", array);
        setRelatedinfo(array);
      }
      if (type?.toString() === "Landscaping & Garden") {
        array = landscapingandgarden.filter(
          (item) => item.name !== result?.name
        );
        console.group("the result for Writing & Translation", array);
        setRelatedinfo(array);
      }
      if (type?.toString() === "Printing Services") {
        array = printingservice.filter((item) => item.name !== result?.name);
        console.group("the result for Video & Animation", array);
        setRelatedinfo(array);
      }
      if (type?.toString() === "Repair Services") {
        array = repairservices.filter((item) => item.name !== result?.name);
        console.group("the result for Video & Animation", array);
        setRelatedinfo(array);
      }
      if (type?.toString() === "Logistics Services") {
        array = logisticservices.filter((item) => item.name !== result?.name);
        console.group("the result for Video & Animation", array);
        setRelatedinfo(array);
      }
      if (type?.toString() === "Travel & Tour Services") {
        array = travelandtour.filter((item) => item.name !== result?.name);
        console.group("the result for Video & Animation", array);
        setRelatedinfo(array);
      }
    } else {
    }
  }, [type, route.query?.subcat]);

  return (
    <div>
      {" "}
      <Navbar
        nosubbar={true}
        filter="drop-shadow(0px 6px 12px rgba(0, 0, 0, 0.1))"
        ispagecategoriesactive={true}
      />
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
                    route.push("/Other-services");
                  }}
                >
                  Other Services
                </StyledTypography>
                <span style={{ color: "#747582" }}>&gt;</span>
                <StyledTypography sx={{ color: "#34A422" }}>
                  {service?.toUpperCase()}
                </StyledTypography>
              </div>
              <ExploreFilter />
            </ContainerWrapperDiv>
            <Otherservicesbannner />
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
      <FAQ
        firstheader={"What are the services offered"}
        firsttitle={
          "We offer a wide range of services, including but not limited to cleaning, landscaping, plumbing, and electrical work."
        }
        secondheader={"Are Elverr services guaranteed?"}
        secondtitle={
          "Yes, all of our services are backed by a 100% satisfaction guarantee. If you are not satisfied with the quality of our work, we will come back and redo the job at no extra cost to you."
        }
        thirdheader={"Do Elverr offer any discounts or promotions?"}
        thirdtitle={
          "Yes, we frequently offer discounts and promotions on our services. You can find out more by signing up for our email newsletter or following us on social media."
        }
        fourthheader={"How do I pay for the services?"}
        fourthtitle={
          "We accept a variety of payment methods, including credit card, debit card, and cash. You can pay for the services at the time of booking or at the time of service, depending on the service being booked."
        }
      />
      <Footer />
    </div>
  );
};

export default OtherServices;
