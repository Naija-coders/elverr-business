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
import { ContactlessOutlined } from "@mui/icons-material";
type Props = {};

export default function ExploreServices({}: Props) {
  /*   const [servicedata, setServicedata] = React.useState<any>(); */

  const route = useRouter();
  const querys = route.query?.page;
  const [first, setFirst] = React.useState(
    parseInt(querys?.toString() || "1", 10)
  );

  const [servicedataList, setServicedataList] = React.useState<any>([]);
  const [pageinfo, setPageinfo] = React.useState<any>(route.query);
  console.log("pageinfo", pageinfo?.subcat);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    /* route.reload().then(() => push(`explore?page=${value}`)); */

    route.push(`${pageinfo?.subcat?.toString()}?page=${value}`, undefined, {
      shallow: true,
    });
    setServicedataList([]);

    setFirst(value);
  };

  const dispatch: Dispatch<any> = useDispatch();
  const { pagenumber } = bindActionCreators(actionCreators, dispatch);
  const state = useSelector((state: RootState) => state.appstate);
  console.log(Pagination, "pagination function");
  React.useEffect(() => {
    const tags = { tags: route.query?.subcat };
    console.log("checking tags", tags);

    if (servicedataList.length == 0 || route.query?.subcat) {
      Clientapi.post(`api/subcategory?page=${first}`, tags)
        .then((response: any) => {
          setServicedataList(response.data);
          pagenumber(response?.data.last_page);
          console.log(
            "the response for last page after fetch",
            response?.data.last_page
          );
          console.log("is it succesfull?", response.data);
        })
        .catch((error) => {});
    }
  }, [route.query?.subcat, first, servicedataList.length, pageinfo]);

  console.log("the page number is", pagenumber);
  console.log("the state of the page numner is", state);
  const pagevalue = parseInt(state?.pagenumber, 10);
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "35px",
          marginTop: "5px",
        }}
      >
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
    </>
  );
}
