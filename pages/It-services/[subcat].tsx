import React from "react";
import ITservices from "../../components/SubCategories/ITservices";
import { useRouter } from "next/router";
type Props = {};

export default function subcat({}: Props) {
  const route = useRouter();

  console.log("querying the route", route.query.subcat);

  return (
    <>
      <ITservices />
    </>
  );
}
