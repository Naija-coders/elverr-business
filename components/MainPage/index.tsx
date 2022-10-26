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

interface IAppProps {
  exploredata?: any;
}

const App: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <div>
      <Navbar
        nosubbar={true}
        filter="drop-shadow(0px 6px 12px rgba(0, 0, 0, 0.1))"
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "50px",
        }}
      >
        <DiscoverBanner />
        <CreateProject />
        <ExploreFeature servicedata={props.exploredata} />{" "}
        <FeaturedAgencies servicedata={props.exploredata} />
        <Proposal />
        <BasedonLikes servicedata={props.exploredata} />
        <RelatedCategories />
        <FooterLoggedIn />
      </div>
    </div>
  );
};

export default App;
