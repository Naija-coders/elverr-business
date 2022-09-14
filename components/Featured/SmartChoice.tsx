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
      </StyleContainer>
    </StyledBox>
  );
};

export default SmartChoice;
