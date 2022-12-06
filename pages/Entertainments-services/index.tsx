import * as React from "react";
import EntertainmentServices from "../../components/Featured/EntertainmentServices";

interface IAppProps {}

const Itservices: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <>
      <div>
        <EntertainmentServices />
      </div>
    </>
  );
};

export default Itservices;
