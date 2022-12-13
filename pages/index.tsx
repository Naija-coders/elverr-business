import { useEffect, useState, useCallback, useContext } from "react";
import { Typography } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import Banner from "../components/Banner";
import CompaniesFeatured from "../components/Featured/CompaniesFeatured";
import FooterNotLoggedIn from "../components/NotLoggedIn/FooterNotLoggedIn";
import Swiper from "../components/Slider/Swiper";
import SmartChoice from "../components/Featured/SmartChoice";
import PopularServices from "../components/Featured/PopularServices";
import TopAgencies from "../components/Featured/TopAgencies";
import Joinus from "../components/Featured/Joinus";
import FAQ from "../components/Featured/FAQ";
import StateContext from "../context/StateContext";
import Proposal from "../components/Banner/Proposal";
import CreateProject from "../components/Banner/CreateProject";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("../components/Navbar"), {
  ssr: false,
});

import DispatchContext from "../context/DispatchContext";
import HomePageLayout from "./homepagelayout";
import Child from "../components/BodyContainer/Child";
import ListingCategories from "../components/Navbar/ListingCategories";
import DiscoverBanner from "../components/Banner/DiscoverBanner";
import BannerSlider from "../components/Slider/BannerSlider";
interface Props {
  query: any;
  ourService: any;
}

const Home: NextPage = () => {
  const [categories, setCategories] = useState([]);
  const { AuthState } = useContext<any>(StateContext);
  const { AuthDispatcher } = useContext<any>(DispatchContext);

  return (
    <div>
      <Head>
        <title>
          Elverr - Run your business on one platform, seamlessly across all
          digital channels{" "}
        </title>
      </Head>
      <meta
        name="google-site-verification"
        content="akR2jwmrZi2Uam2Y0H-VUckRGWE7VSQyxO676zfQg_Y"
      />

      <div style={{ display: "flex", flexDirection: "column", gap: "50px" }}>
        <Banner />
        <CompaniesFeatured />
        <Swiper />
        <SmartChoice />
        <PopularServices />
        <TopAgencies />
        <FAQ
          firstheader={"What are the services offered"}
          firsttitle={
            "We offer a wide range of services, including but not limited to cleaning, landscaping, plumbing, and electrical work."
          }
          secondheader={"Are Elverr services guaranteed?"}
          secondtitle={
            "Yes, all of our services are backed by a 100% satisfaction guarantee. If you are not satisfied with the quality of our work, we will come back and redo the job at no extra cost to you."
          }
          thirdheader={"Do Elverr offer any discounts or promotions?"}
          thirdtitle={
            "Yes, we frequently offer discounts and promotions on our services. You can find out more by signing up for our email newsletter or following us on social media."
          }
          fourthheader={"How do I pay for the services?"}
          fourthtitle={
            "We accept a variety of payment methods, including credit card, debit card, and cash. You can pay for the services at the time of booking or at the time of service, depending on the service being booked."
          }
        />
        <Joinus />
        <FooterNotLoggedIn />
      </div>
    </div>
  );
};

export default Home;
