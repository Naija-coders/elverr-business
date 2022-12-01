import * as React from "react";
import Eventservices from "../../components/Featured/Eventservices";

interface IAppProps {}

const Itservices: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <>
      <div>
        <Eventservices />
      </div>
    </>
  );
};

export default Itservices;
