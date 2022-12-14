import * as React from "react";
import { StyledBox, StyleContainer } from "../NotLoggedIn/style";
import { MainBodyTypo, DescriptionText } from "../Banner/styles";
import ExploreSlider from "../Slider/ExploreSlider";
interface IAppProps {
  servicedata: any;
}

const FeaturedAgencies: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <StyledBox>
      <StyleContainer>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.8rem",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {" "}
            <MainBodyTypo>Featured Agencies</MainBodyTypo>
            <DescriptionText
              sx={{ color: "#34A422", textDecoration: "underline" }}
            >
              {" "}
              {"See all>>"}
            </DescriptionText>
          </div>
          <DescriptionText>
            Find the best talents on Elverr to suit your project needs.
          </DescriptionText>
        </div>
        <div>
          <ExploreSlider servicedata={props.servicedata} />
        </div>
      </StyleContainer>
    </StyledBox>
  );
};

export default FeaturedAgencies;
