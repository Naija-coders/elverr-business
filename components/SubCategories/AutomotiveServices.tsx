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
import AutomotiveserviceBanner from "../Banner/AutomotiveService";
import Footer from "../LoggedIn/FooterLoggedIn";
import FAQ from "../Featured/FAQ";
import ReuseablePaginatedService from "../PaginatedServices/ReuseablePaginatedService";
import ITSubCategoriesslider from "../Slider/ITSubCategoriesslider";
import {
  automotiveIndustry,
  automobileServices,
  vehicleRepairs,
  fullCarService,
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
    automotiveIndustry.find(({ name }) => name === service) ||
    automobileServices.find(({ name }) => name === service) ||
    vehicleRepairs.find(({ name }) => name === service) ||
    fullCarService.find(({ name }) => name === service);

  React.useEffect(() => {
    var array;
    console.log("the result is really true", result?.type);
    if (result) {
      settype(result?.type);

      if (type?.toString() === "Automative Industry") {
        array = automotiveIndustry.filter((item) => item.name !== result?.name);
        console.group("the result for graphic design", array);
        setRelatedinfo(array);
      }
      if (type?.toString() === "Automobile Services") {
        array = automobileServices.filter((item) => item.name !== result?.name);
        console.group("the result for Digital Marketing", array);
        setRelatedinfo(array);
      }
      if (type?.toString() === "Vehicle Repairs") {
        array = vehicleRepairs.filter((item) => item.name !== result?.name);
        console.group("the result for Writing & Translation", array);
        setRelatedinfo(array);
      }
      if (type?.toString() === "Full Car Services") {
        array = fullCarService.filter((item) => item.name !== result?.name);
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
                    route.push("/Automotive-services");
                  }}
                >
                  Automotive Services
                </StyledTypography>
                <span style={{ color: "#747582" }}>&gt;</span>
                <StyledTypography sx={{ color: "#34A422" }}>
                  {service?.toUpperCase()}
                </StyledTypography>
              </div>
              <ExploreFilter />
            </ContainerWrapperDiv>
            <AutomotiveserviceBanner />
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
        firstheader={"What services does an automotive service center offer?"}
        firsttitle={
          "Automotive service centers typically offer a range of services including oil changes, tire rotations, brake repairs, engine tune-ups, and more. Some centers may also offer specialized services such as transmission repairs or emissions testing."
        }
        secondheader={"How often should I have my car serviced?"}
        secondtitle={
          "It is generally recommended to have your car serviced every 3,000 to 5,000 miles or every three to six months, depending on the type of vehicle you have and how you use it. Consult your owner's manual for specific recommendations."
        }
        thirdheader={"How much does it cost to have my car serviced?"}
        thirdtitle={
          "The cost of car servicing can vary depending on the type of service needed and the make and model of your vehicle. Some basic services, such as an oil change, may cost around $50, while more complex repairs could cost several hundred dollars. It is best to check with the service center for specific pricing information."
        }
        fourthheader={"Can I schedule a pickup and delivery for my car?"}
        fourthtitle={
          "Some automotive service centers  offer pickup and delivery services for customers who are unable to bring their vehicle to the center for servicing. Availability of this service may vary, so it is best to check with the service center to see if it is offered."
        }
      />
      <Footer />
    </div>
  );
};

export default ITservices;
