import React from "react";
import Navbar from "../components/Navbar/Navbar";

type Props = {};

export default function Custom404({}: Props) {
  return (
    <>
      <Navbar nosubbar={true} filter="none" />
      <h1 style={{ display: "flex", width: "100%", justifyContent: "center" }}>
        404 Ooops page not found!
      </h1>
    </>
  );
}
