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
import { eventmanager, eventplanner, budgeting, corporateevent } from "./json";
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
    eventmanager.find(({ name }) => name === service) ||
    eventplanner.find(({ name }) => name === service) ||
    budgeting.find(({ name }) => name === service) ||
    corporateevent.find(({ name }) => name === service);
  React.useEffect(() => {
    var array;
    console.log("the result is really true", result?.type);
    if (result) {
      settype(result?.type);

      if (type?.toString() === "Event Manager") {
        array = eventmanager.filter((item) => item.name !== result?.name);
        console.group("the result for graphic design", array);
        setRelatedinfo(array);
      }
      if (type?.toString() === "Event Planner") {
        array = eventplanner.filter((item) => item.name !== result?.name);
        console.group("the result for Digital Marketing", array);
        setRelatedinfo(array);
      }
      if (type?.toString() === "Budgeting") {
        array = budgeting.filter((item) => item.name !== result?.name);
        console.group("the result for Writing & Translation", array);
        setRelatedinfo(array);
      }
      if (type?.toString() === "Corporate Events") {
        array = corporateevent.filter((item) => item.name !== result?.name);
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
              <div
                style={{ display: "flex", gap: "0.8rem", marginTop: "20px" }}
              >
                <StyledTypography
                  sx={{
                    "&:hover": {
                      textDecoration: "underline",
                      cursor: "pointer",
                    },
                  }}
                  onClick={() => {
                    route.push("/Event-services");
                  }}
                >
                  EVENT SERVICES
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
      <FAQ
        firstheader={"What services does an event planning company offer?"}
        firsttitle={
          "Event planning companies typically offer a range of services including venue selection, decor and design, catering and food service, entertainment, and more. Some companies may also offer event management services, such as coordinating vendors and managing the flow of the event."
        }
        secondheader={
          "How much does it cost to hire an event planning company?"
        }
        secondtitle={
          "The cost of hiring an event planning company can vary depending on the type of event, the services required, and the location. Some companies may charge a flat fee, while others may charge an hourly rate. It is best to contact the company for a quote and discuss your specific needs."
        }
        thirdheader={
          "Can I hire an event planning company to plan a small party or event?"
        }
        thirdtitle={
          "Yes, event planning companies can typically plan events of any size, from large weddings or corporate events to small parties or gatherings. The services offered and the cost may vary depending on the size and scope of the event."
        }
        fourthheader={
          "Do I need to book an event planning company far in advance?"
        }
        fourthtitle={
          "It is generally recommended to book an event planning company as far in advance as possible to ensure that they are available on the date of your event and to give them enough time to plan and coordinate all of the details. However, some companies may be able to accommodate last-minute events if they have availability."
        }
      />
      <Footer />
    </div>
  );
};

export default ITservices;
