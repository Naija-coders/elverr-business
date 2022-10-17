import React from "react";
import CreateAdvert from "../components/CreateAdvert";
import Navbar from "../components/Navbar/Navbar";

type Props = {};

export default function PostAd({}: Props) {
  return (
    <div>
      <Navbar />
      <CreateAdvert />
    </div>
  );
}
