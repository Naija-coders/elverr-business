import React from "react";
import FooterLoggedIn from "../LoggedIn/FooterLoggedIn";
import Navbar from "../Navbar/Navbar";
type Props = {};

export default function Dashboard({}: Props) {
  return (
    <div>
      <Navbar />
      <h1>this is the dashboard of the product</h1>
      <FooterLoggedIn />
    </div>
  );
}
