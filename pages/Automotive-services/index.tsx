import * as React from "react";
import AutomotiveService from "../../components/Featured/AutomotiveServices";

interface IAppProps {}

const Automotiveservices: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <>
      <div>
        <AutomotiveService />
      </div>
    </>
  );
};

export default Automotiveservices;
