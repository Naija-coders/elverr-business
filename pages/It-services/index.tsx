import * as React from "react";
import ITServices from "../../components/Featured/ITServices";

interface IAppProps {}

const Itservices: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <>
      <div>
        <ITServices />
      </div>
    </>
  );
};

export default Itservices;
