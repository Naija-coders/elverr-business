import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import DiscoverBanner from "../../components/Banner/DiscoverBanner";
import Filter from "../../components/Filters/ExploreFilter";
import ExploreServices from "../../components/PaginatedServices/ExploreServices";
import FooterLoggedIn from "../../components/LoggedIn/FooterLoggedIn";

type Props = {};

export default function index({}: Props) {
  return (
    <div>
      <Navbar nosubbar={false} />
      <DiscoverBanner />

      <ExploreServices />
      <FooterLoggedIn />
    </div>
  );
}
