import { useEffect, useState, useCallback, useContext } from "react";
import { Typography } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import Banner from "../components/Banner";
import CompaniesFeatured from "../components/Featured/CompaniesFeatured";

interface Props {
  query: any;
  ourService: any;
}

const Home: NextPage = () => {
  const [categories, setCategories] = useState([]);

  return (
    <div>
      <Head>
        <title>Elverr - The Market Place</title>
        <meta
          name="google-site-verification"
          content="akR2jwmrZi2Uam2Y0H-VUckRGWE7VSQyxO676zfQg_Y"
        />

        <div style={{ display: "flex", flexDirection: "column", gap: "50px" }}>
          <Banner />
          <CompaniesFeatured />
        </div>
      </Head>
    </div>
  );
};

export default Home;
