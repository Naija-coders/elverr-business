import React from "react";

type Props = {};
import {} from "./styles";
import { StyledBox, StyleContainer } from "../NotLoggedIn/style";
import { Text, MainDiv1, MainDivRight } from "./styles";
import BannerFilter from "./BannerFilter";
export default function DiscoverBanner({}: Props) {
  return (
    <StyledBox>
      <StyleContainer>
        <div
          style={{
            height: "404px",
            marginTop: "-32px",
            position: "relative",
            background:
              "linear-gradient(90deg, rgba(54, 157, 41, 0.79) 0%, #369D29 100%)",
            borderRadius: " 0px 0px 20px 20px",
          }}
        >
          <div className="div1"></div>
          <div className="div2"></div>
          <div className="div3"></div>
          <div className="div4"></div>
          <div className="div5"></div>
          <div className="div6"></div>
          <MainDivRight></MainDivRight>
          <div
            style={{
              position: "absolute",
              right: "390px",
              top: "180px",
            }}
          >
            <img
              style={{ width: "200px" }}
              src="https://res.cloudinary.com/dxsmdvaqq/image/upload/v1664967376/arrowvector.png"
            />
          </div>
          <MainDiv1>
            <div>mano</div>{" "}
            <div style={{ marginRight: "90px" }}>
              <img
                style={{
                  height: "300px",
                  zIndex: 100,

                  transform: "matrix(-1, 0, 0, 1, 0, 0)",
                }}
                src={
                  "https://res.cloudinary.com/dxsmdvaqq/image/upload/v1664952648/studentsimage.png"
                }
              />
            </div>
          </MainDiv1>
        </div>
        <div
          style={{
            marginTop: "-40px",

            display: "flex",
            justifyContent: "center",
            zIndex: 1000,
          }}
        ></div>
      </StyleContainer>
    </StyledBox>
  );
}
