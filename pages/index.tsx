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
interface Props {
  query: any;
  ourService: any;
}

const Home: NextPage = () => {
  const [categories, setCategories] = useState([]);

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

      <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
        <Banner />
        <CompaniesFeatured />
        <Swiper />
        <SmartChoice />
        <PopularServices />
        <TopAgencies />
        <FAQ />
        <Joinus />
        <FooterNotLoggedIn />
      </div>
    </div>
  );
};

export default Home;
