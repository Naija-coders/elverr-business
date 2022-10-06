import * as React from "react";
import CreateProject from "../Banner/CreateProject";
import DiscoverBanner from "../Banner/DiscoverBanner";
import Navbar from "../Navbar";
import FooterNotLoggedIn from "../NotLoggedIn/FooterNotLoggedIn";

interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <div>
      <Navbar />
      <DiscoverBanner />
      <CreateProject />

      <FooterNotLoggedIn />
    </div>
  );
};

export default App;
