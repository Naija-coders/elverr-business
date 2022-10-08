import * as React from "react";
import CreateProject from "../Banner/CreateProject";
import DiscoverBanner from "../Banner/DiscoverBanner";
import Navbar from "../Navbar";
import FooterLoggedIn from "../LoggedIn/FooterLoggedIn";
import RelatedCategories from "../Featured/RelatedCategories";

interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <div>
      <Navbar />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "50px",
        }}
      >
        <DiscoverBanner />
        <CreateProject />
        <RelatedCategories />
        <FooterLoggedIn />
      </div>
    </div>
  );
};

export default App;
