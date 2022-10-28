import React from "react";
import MainPage from "../components/MainPage";
import Clientapi from "./api/client";

type Props = { servicedata: any };

export default function mainpage({ servicedata }: Props) {
  return (
    <>
      <MainPage exploredata={servicedata} />
    </>
  );
}

export async function getStaticProps(context: any) {
  let datas;
  const mydata = Clientapi.get("api/company/services")
    .then((response: any) => {
      datas = response.data;
      console.log("hey checking the static prop to see if theres any changes");
    })
    .catch((error: any) => {
      console.log("it didnt work");
    });
  await mydata;
  const servicedata = datas;
  return {
    props: { servicedata },
  };
}
