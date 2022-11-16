import * as React from "react";
import CleaningServices from "../../components/Featured/CleaningServices";

interface IAppProps {}

const CleaningServicespage: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <>
      <div>
        <CleaningServices />
      </div>
    </>
  );
};

export default CleaningServicespage;
