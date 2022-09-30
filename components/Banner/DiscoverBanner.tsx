import React from "react";

type Props = {};
import {} from "./styles";
import { StyledBox, StyleContainer } from "../NotLoggedIn/style";

export default function DiscoverBanner({}: Props) {
  return (
    <div
      style={{
        padding: "0rem 2rem",
        display: "flex",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "160px",
          borderRadius: "20px",
          background: "#001847",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div style={{ padding: "2rem" }}>
          Take on your projects from start to Finish
        </div>
        <img
          src="content.png"
          style={{
            height: "190px",
            objectFit: "contain",
            zIndex: 10000,
            marginTop: "-32px",
          }}
        />
      </div>
    </div>
  );
}
