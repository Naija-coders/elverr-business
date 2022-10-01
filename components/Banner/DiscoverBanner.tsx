import React from "react";

type Props = {};
import {} from "./styles";
import { StyledBox, StyleContainer } from "../NotLoggedIn/style";
import { Text } from "./styles";
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
          height: "170px",
          borderRadius: "20px",
          background: "#001847",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          cursor: "pointer",
        }}
      >
        <div
          style={{
            padding: "2rem",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <Text align="left" style={{ color: "#FFFFFF", fontSize: "1.2rem" }}>
            Take on your projects from start to Finish
          </Text>
          <Text
            align="left"
            style={{
              color: "#FFFFFF",
              fontSize: "0.7rem",
              fontWeight: "normal",
              width: "80%",
            }}
          >
            Check out our popular services on Elverr and meet your project goals
            in less than no time.
          </Text>
        </div>
        <img
          src="content.png"
          style={{
            height: "180px",
            width: "300px",
            objectFit: "contain",
            zIndex: 10000,
          }}
        />
      </div>
    </div>
  );
}
