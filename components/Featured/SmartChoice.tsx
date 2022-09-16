import * as React from "react";
import {
  BasicTextbody,
  MainHeaderText,
  BasicImage,
  BasicPaper,
  BasicText,
  BasicTextHeader,
  CustomPaper,
  BasicTextTitle,
  BasicServiceTitle,
  BasicDiv,
  BasicServiceButton,
  BasicServiceDiv,
  BasicServiceGrid,
} from "../Featured/styles";
import { StyledBox, StyleContainer } from "../NotLoggedIn/style";
import { Avatar } from "@mui/material";
interface IAppProps {}

const SmartChoice: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <StyledBox className="">
      <StyleContainer>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div style={{ maxWidth: "565px", width: "100%" }}>
            <div
              style={{
                display: "inline-flex",
                width: "100%",
                justifyContent: "space-around",
              }}
            >
              {" "}
              <MainHeaderText align="center">
                The smartest choice for your
              </MainHeaderText>
              <MainHeaderText align="center" style={{ color: "#34A422" }}>
                business
              </MainHeaderText>
            </div>
            <BasicTextbody align="center">
              Check out our popular services on Elverr and meet your project
              goals in less than no time.
            </BasicTextbody>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              marginTop: "60px",
            }}
          >
            {" "}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <div
                style={{
                  width: "87px",
                  height: "70px",
                  display: "flex",
                  alignItems: "center",
                  background: "#22C55E",
                  justifyContent: "center",
                  borderRadius: "8.15625px",
                }}
              >
                <img
                  src={"groupicon.png"}
                  style={{
                    width: "50px",
                    height: "50px",
                    objectFit: "contain",
                  }}
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <MainHeaderText style={{ fontSize: "1.4rem" }}>
                  {" "}
                  Discover high quality talent
                </MainHeaderText>
                <div>
                  {" "}
                  <BasicTextbody>
                    Check out our popular services on Elverr and meet your
                    project goals in less than no time.
                  </BasicTextbody>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <div
                style={{
                  width: "87px",
                  height: "70px",
                  display: "flex",
                  alignItems: "center",
                  background: "#22C55E",
                  justifyContent: "center",
                  borderRadius: "8.15625px",
                }}
              >
                <img
                  src={"menuicon.png"}
                  style={{
                    width: "50px",
                    height: "50px",
                    objectFit: "contain",
                  }}
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <MainHeaderText style={{ fontSize: "1.4rem" }}>
                  {" "}
                  Ready-to- use assets
                </MainHeaderText>
                <div>
                  {" "}
                  <BasicTextbody>
                    Check out our popular services on Elverr and meet your
                    project goals in less than no time.
                  </BasicTextbody>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <div
                style={{
                  width: "87px",
                  height: "70px",
                  display: "flex",
                  alignItems: "center",
                  background: "#22C55E",
                  justifyContent: "center",
                  borderRadius: "8.15625px",
                }}
              >
                <img
                  src={"jobicon.png"}
                  style={{
                    width: "50px",
                    height: "50px",
                    objectFit: "contain",
                  }}
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <MainHeaderText style={{ fontSize: "1.4rem" }}>
                  {" "}
                  Access our top talents
                </MainHeaderText>
                <div>
                  {" "}
                  <BasicTextbody>
                    Check out our popular services on Elverr and meet your
                    project goals in less than no time.
                  </BasicTextbody>
                </div>
              </div>
            </div>
          </div>
          <img
            src="companyimage.png"
            style={{
              maxWidth: "530px",
              width: "100%",

              objectFit: "contain",
              height: "500px",
            }}
          />
        </div>
      </StyleContainer>
    </StyledBox>
  );
};

export default SmartChoice;
