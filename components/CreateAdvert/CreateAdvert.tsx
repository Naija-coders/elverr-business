import * as React from "react";
import AdvertBanner from "../Banner/AdvertBanner";

interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <div>
      <AdvertBanner />
    </div>
  );
};

export default App;
