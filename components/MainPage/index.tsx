import * as React from "react";
import CreateProject from "../Banner/CreateProject";
import DiscoverBanner from "../Banner/DiscoverBanner";
import Navbar from "../Navbar";
import FooterLoggedIn from "../LoggedIn/FooterLoggedIn";

interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <div>
      <Navbar />
      <DiscoverBanner />
      <CreateProject />

      <FooterLoggedIn />
    </div>
  );
};

export default App;
