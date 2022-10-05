import React from "react";

type Props = {};

export default function BannerFilter({}: Props) {
  return (
    <div
      style={{
        width: "80%",
        height: "70px",

        /* Shades/White */

        background: "#FFFFFF",
        boxShadow: "22px 4px 55px rgba(0, 0, 0, 0.25)",
        borderRadius: "4px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          height: "100%",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <div>Location</div>
        <div>Price</div>
        <div>Experience</div>
        <div>Search</div>
      </div>
    </div>
  );
}
