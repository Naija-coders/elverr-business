import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import ExploreBanner from "../../components/Banner/ExploreBanner";
import Filter from "../../components/Filters/ExploreFilter";
import ExploreServices from "../../components/PaginatedServices/ExploreServices";
import FooterLoggedIn from "../../components/LoggedIn/FooterLoggedIn";
import Clientapi from "../api/client";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    secondary: {
      light: "#34a4221a",
      main: "#34a4221a",
      dark: "#34a4221a",
      contrastText: "#000000",
    },
  },
});
type Props = {
  query: any;
  servicedata: any;
};

export default function Index({ query, servicedata }: Props) {
  console.log("the service data is", servicedata);
  console.log("the query is", query);
  const route = useRouter();
  const [servicedataList, setServicedataList] = React.useState(servicedata);
  const [querydata, setQuerydata] = React.useState<ParsedUrlQuery>();

  const querys = route.query?.page;
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Navbar
          nosubbar={true}
          filter="drop-shadow(0px 6px 12px rgba(0, 0, 0, 0.1))"
          isexploreactive={true}
        />
        <ExploreBanner />

        <ExploreServices />
        <FooterLoggedIn />
      </div>
    </ThemeProvider>
  );
}
/* Index.getInitialProps = async (ctx: any) => {
  const query = ctx.query;
  let datas;
  const { res, req } = ctx;
  if (!req) {
    const servicedata = [];
    console.log("is request defined");
    return {
      servicedata: [],
    };
  }

  const mydata = Clientapi.get(
    `api/company/exploreservices?page=${query?.page}`
  )
    .then((response: any) => {
      datas = response.data;
      console.log("checking our the query", query);
      console.log("does the query data comes here?", datas);
    })
    .catch((error) => {});
  await mydata;
  const servicedata = datas;
  if (query === "" || query?.page === undefined) {
    console.log("is query defined");
    return {
      query: 1,
      servicedata,
    };
  }
  return {
    query,
    servicedata,
  };
}; */
/* 
export async function getServerSideProps(context: any) {
  const query = context.query;
  let datas;
  const { res, req } = context;
  if (!req) {
    const servicedata = [];
    console.log("is request defined");
    return {
      props: { servicedata: [] },
    };
  }

  const mydata = Clientapi.get(
    `api/company/exploreservices?page=${query?.page}`
  )
    .then((response: any) => {
      datas = response.data;
      console.log("checking our the query", query);
      console.log("does the query data comes here?", datas);
    })
    .catch((error) => {});
  await mydata;
  const servicedata = datas;
  if (query === "" || query?.page === undefined) {
    console.log("is query defined");
    return {
      props: { query: 1, servicedata },
    };
  }
  return {
    props: { query, servicedata },
  };
}
 */
