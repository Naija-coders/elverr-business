import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import ExploreBanner from "../../components/Banner/ExploreBanner";
import Filter from "../../components/Filters/ExploreFilter";
import ExploreServices from "../../components/PaginatedServices/ExploreServices";
import FooterLoggedIn from "../../components/LoggedIn/FooterLoggedIn";
import Clientapi from "../api/client";

type Props = {
  query: any;
  servicedata: any;
};

export default function Index({ query, servicedata }: Props) {
  console.log("the service data is", servicedata);
  console.log("the query is", query);
  return (
    <div>
      <Navbar nosubbar={false} filter="none" />
      <ExploreBanner />

      <ExploreServices
        servicedata={servicedata}
        query={parseInt(query?.page, 10)}
      />
      <FooterLoggedIn />
    </div>
  );
}
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
