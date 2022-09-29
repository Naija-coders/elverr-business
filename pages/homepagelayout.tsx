import LeftSide from "../components/BodyContainer/LeftSide";
import RightSide from "../components/BodyContainer/RightSide/RightSide";
import React from "react";

type Props = {
  children: any;
};
const HomePageLayout: React.FC<Props> = ({ children }) => (
  <div style={{ display: "flex" }}>
    <LeftSide />
    {children}

    <RightSide />
  </div>
);

export default HomePageLayout;
