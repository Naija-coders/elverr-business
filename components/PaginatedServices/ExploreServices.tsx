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
import { useRouter } from "next/router";
import { bindActionCreators, Dispatch } from "redux";
import { actionCreators } from "../../state";

import StateContext from "../../context/StateContext";
import DispatchContext from "../../context/DispatchContext";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../state/reducers";
import ExploreFilter from "../Filters/ExploreFilter";
type Props = {};

export default function ExploreServices({}: Props) {
  /*   const [servicedata, setServicedata] = React.useState<any>(); */

  const route = useRouter();
  const querys = route.query?.page;
  const [first, setFirst] = React.useState(
    parseInt(querys?.toString() || "1", 10)
  );

  const [servicedataList, setServicedataList] = React.useState<any>([]);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    /* route.reload().then(() => push(`explore?page=${value}`)); */
    route.push(`explore?page=${value}`, undefined, { shallow: true });

    setServicedataList([]);

    setFirst(value);
  };

  const dispatch: Dispatch<any> = useDispatch();
  const { pagenumber } = bindActionCreators(actionCreators, dispatch);
  const state = useSelector((state: RootState) => state.appstate);
  console.log(Pagination, "pagination function");
  React.useEffect(() => {
    if (servicedataList.length == 0) {
      Clientapi.get(`api/company/exploreservices?page=${route.query?.page}`)
        .then((response: any) => {
          setServicedataList(response.data);
          pagenumber(response?.data.last_page);
          console.log(
            "the response for last page after fetch",
            response?.data.last_page
          );
        })
        .catch((error) => {});
    }
  }, [route.query.page]);

  console.log("the page number is", pagenumber);
  console.log("the state of the page numner is", state);
  const pagevalue = parseInt(state?.pagenumber, 10);
  return (
    <StyledBox>
      <StyleContainer>
        <ExploreFilter />
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
          <ServiceGridCard data={servicedataList?.data} />
          <div style={{ marginTop: "50px" }}></div>
          <Divider />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Pagination
              count={pagevalue}
              page={first}
              onChange={handleChange}
              shape="rounded"
              color="secondary"
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
