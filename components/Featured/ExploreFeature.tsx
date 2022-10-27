import * as React from "react";
import { StyledBox, StyleContainer } from "../NotLoggedIn/style";
import { MainBodyTypo, DescriptionText } from "../Banner/styles";
import ExploreSlider from "../Slider/ExploreSlider";
import { Link } from "@mui/material";
interface IAppProps {
  servicedata: any;
}

const ExploreFeature: React.FunctionComponent<IAppProps> = (props) => {
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
            <Link href={"explore"} sx={{ textDecoration: "none" }}>
              <MainBodyTypo>Explore</MainBodyTypo>
            </Link>
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

export default ExploreFeature;
