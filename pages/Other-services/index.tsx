import * as React from "react";
import OtherServices from "../../components/Featured/OtherServices";

interface IAppProps {}

const Others: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <>
      <div>
        <OtherServices />
      </div>
    </>
  );
};

export default Others;
