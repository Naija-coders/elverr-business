import React from "react";
import { StyledBox, StyleContainer } from "../NotLoggedIn/style";
import {
  BasicTextbody,
  MainHeaderText,
  BasicImage,
  BasicPaper,
  BasicText,
  BasicTextHeader,
  CustomPaper,
  BasicTextTitle,
  BasicServiceTitle,
  BasicDiv,
  BasicServiceButton,
  BasicServiceDiv,
  BasicServiceGrid,
} from "../Featured/styles";
import { StyledTypography, StyledDiv } from "./style";

import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Clientapi from "../../pages/api/client";
import { AxiosError } from "axios";
import ServiceGridCard from "../CustomCard/ServiceGridCard";
import { Divider } from "@mui/material";
type Props = {};

export default function ExploreServices({}: Props) {
  const [servicedata, setServicedata] = React.useState<any>();

  React.useEffect(() => {
    if (servicedata === "" || servicedata === undefined) {
      Clientapi.get("api/company/exploreservices?page=1")
        .then((response) => {
          console.log("the response data is ", response.data);
          setServicedata(response.data.data);
        })
        .catch((err: AxiosError) => {});
    }
  }, [servicedata]);

  return (
    <StyledBox>
      <StyleContainer>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ width: "15%" }}>sort by Popular</div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "1rem",
              width: "65%",
              overflowX: "scroll",
            }}
          >
            <div
              style={{
                width: "134px",
                padding: "8px 16px",
                background: "#F5F5F5",
                borderRadius: "3px",
                cursor: "pointer",
              }}
            >
              <StyledTypography>All Categories</StyledTypography>
            </div>{" "}
            <StyledDiv>
              <StyledTypography>Web design</StyledTypography>
            </StyledDiv>{" "}
            <StyledDiv>
              <StyledTypography>Writing</StyledTypography>
            </StyledDiv>{" "}
            <StyledDiv>
              <StyledTypography>Video Editing</StyledTypography>
            </StyledDiv>{" "}
            <StyledDiv>
              <StyledTypography>Illustrations</StyledTypography>
            </StyledDiv>{" "}
            <StyledDiv>
              <StyledTypography>Repairs</StyledTypography>
            </StyledDiv>{" "}
            <StyledDiv>
              <StyledTypography>Logistics</StyledTypography>
            </StyledDiv>{" "}
            <StyledDiv>
              <StyledTypography>web design</StyledTypography>
            </StyledDiv>{" "}
            <StyledDiv>
              <StyledTypography>web design</StyledTypography>
            </StyledDiv>{" "}
            <StyledDiv>
              <StyledTypography>web design</StyledTypography>
            </StyledDiv>{" "}
            <StyledDiv>
              <StyledTypography>web design</StyledTypography>
            </StyledDiv>{" "}
            <StyledDiv>
              <StyledTypography>web design</StyledTypography>
            </StyledDiv>{" "}
            <StyledDiv>
              <StyledTypography>web design</StyledTypography>
            </StyledDiv>
          </div>
          <div style={{ width: "15%" }}>sort by featured</div>
        </div>
        <MainHeaderText sx={{ fontSize: "1.7rem", marginTop: "50px" }}>
          Explore
        </MainHeaderText>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "35px",
            marginTop: "5px",
          }}
        >
          <BasicTextbody sx={{ fontSize: "1rem", color: "#515151" }}>
            Find the best agency on Elverr to suit your project needs.
          </BasicTextbody>
          <ServiceGridCard data={servicedata} />
          <div style={{ marginTop: "50px" }}></div>
          <Divider />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Pagination
              count={10}
              renderItem={(item) => (
                <PaginationItem
                  components={{
                    previous: ArrowBackIcon,
                    next: ArrowForwardIcon,
                  }}
                  {...item}
                />
              )}
            />
          </div>
        </div>
      </StyleContainer>
    </StyledBox>
  );
}
