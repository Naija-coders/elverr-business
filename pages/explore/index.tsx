import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import ExploreBanner from "../../components/Banner/ExploreBanner";
import Filter from "../../components/Filters/ExploreFilter";
import ExploreServices from "../../components/PaginatedServices/ExploreServices";
import FooterLoggedIn from "../../components/LoggedIn/FooterLoggedIn";
import Clientapi from "../api/client";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
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

  React.useEffect(() => {
    console.log("checkin gthe state of service data", servicedata);

    if (servicedata.length == 0) {
      Clientapi.get(`api/company/exploreservices?page=${route.query?.page}`)
        .then((response: any) => {
          setServicedataList(response.data);
          setQuerydata(route.query);
          console.log("checking our the query", query);
          console.log("does the query data comes here?", servicedata);
        })
        .catch((error) => {});
    }
  }, [servicedata]);

  return (
    <div>
      <Navbar nosubbar={false} filter="none" isexploreactive={true} />
      <ExploreBanner />

      <ExploreServices
        servicedata={servicedataList}
        query={parseInt(query?.page, 10)}
      />
      <FooterLoggedIn />
    </div>
  );
}
Index.getInitialProps = async (ctx: any) => {
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
};
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
