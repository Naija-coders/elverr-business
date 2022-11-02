import React from "react";
import Navbar from "../Navbar/Navbar";
type Props = {};

const ITservices = (props: Props) => {
  return (
    <div>
      {" "}
      <Navbar nosubbar={false} filter="none" ispagecategoriesactive={true} />
      <h1>Sub categories comming soon</h1>
    </div>
  );
};

export default ITservices;
