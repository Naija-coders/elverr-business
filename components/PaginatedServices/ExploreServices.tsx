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
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Clientapi from "../../pages/api/client";
import { AxiosError } from "axios";
import ServiceGridCard from "../CustomCard/ServiceGridCard";
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
        <MainHeaderText sx={{ fontSize: "1.7rem" }}>Explore</MainHeaderText>
        <BasicTextbody>
          Find the best agency on Elverr to suit your project needs.
        </BasicTextbody>
        <ServiceGridCard data={servicedata} />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Pagination
            count={10}
            renderItem={(item) => (
              <PaginationItem
                components={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                {...item}
              />
            )}
          />
        </div>
      </StyleContainer>
    </StyledBox>
  );
}
