import * as React from "react";
import CreateProject from "../Banner/CreateProject";
import DiscoverBanner from "../Banner/DiscoverBanner";
import Navbar from "../Navbar";
import FooterLoggedIn from "../LoggedIn/FooterLoggedIn";
import RelatedCategories from "../Featured/RelatedCategories";
import ExploreFeature from "../Featured/ExploreFeature";
import FeaturedAgencies from "../Featured/FeaturedAgencies";
import Proposal from "../Banner/Proposal";
import BasedonLikes from "../Featured/BasedonLikes";

interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <div>
      <Navbar nosubbar={true} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "50px",
        }}
      >
        <DiscoverBanner />
        <CreateProject />
        <ExploreFeature /> <FeaturedAgencies />
        <Proposal />
        <BasedonLikes />
        <RelatedCategories />
        <FooterLoggedIn />
      </div>
    </div>
  );
};

export default App;
