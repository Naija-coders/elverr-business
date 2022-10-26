import React from "react";
import CreateAdvert from "../components/CreateAdvert";
import Navbar from "../components/Navbar/Navbar";

type Props = {};

export default function PostAd({}: Props) {
  return (
    <div>
      <Navbar
        nosubbar={true}
        filter="drop-shadow(0px 6px 12px rgba(0, 0, 0, 0.1))"
      />
      <CreateAdvert />
    </div>
  );
}
