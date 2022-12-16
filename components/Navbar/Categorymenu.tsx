import { Avatar, Button, Divider, TextField } from "@mui/material";
import React, { useContext, useState } from "react";

import {
  StyledText,
  StyledTextTypo,
  StyledMainDiv,
  StyleContainerDiv,
  NavbarDiv,
} from "./styles";

import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { StyledBox, StyleContainer } from "../NotLoggedIn/style";
import {
  Link,
  Tooltip,
  Box,
  Menu,
  MenuItem,
  List,
  ListItem,
  ListItemButton,
  Collapse,
} from "@mui/material";
import {
  Document,
  Notification,
  User,
  InfoSquare,
  Category,
  Setting,
  Delete,
  ShieldDone,
} from "react-iconly";
import { useRouter } from "next/router";

type Props = {
  userstatename?: any;
  userstateemail?: any;
  userstateprofileurl?: any;
};

export default function Profilemenu({
  userstatename,
  userstateemail,
  userstateprofileurl,
}: Props) {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const [color1, setColor1] = useState("grey");
  const [color2, setColor2] = useState("grey");
  const [color3, setColor3] = useState("grey");
  const [color4, setColor4] = useState("grey");
  const [color5, setColor5] = useState("grey");

  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const route = useRouter();

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        paddingBottom: "40px",
      }}
    >
      <NavbarDiv>
        <StyledTextTypo
          sx={{
            "fontWeight": "bold",
            "color": "black",
            "&:hover": { color: "black" },
            "fontSize": "1rem",
          }}
        >
          Graphic Design
        </StyledTextTypo>

        <StyledTextTypo
          onClick={() => {
            route.push("/It-services/Logo Design & Brand Identity");
          }}
        >
          Logo Design & Brand Identity
        </StyledTextTypo>
        <StyledTextTypo
          onClick={() => {
            route.push("/It-services/Web & Mobile Design");
          }}
        >
          Web & Mobile Design
        </StyledTextTypo>
        <StyledTextTypo
          onClick={() => {
            route.push("/It-services/Visual Design");
          }}
        >
          Visual Design
        </StyledTextTypo>
        <StyledTextTypo
          onClick={() => {
            route.push("/It-services/Art,Illustration & Cover art design");
          }}
        >
          Art, Illustration & Cover Art Design
        </StyledTextTypo>
      </NavbarDiv>
      <NavbarDiv>
        <StyledTextTypo
          sx={{
            "fontWeight": "bold",
            "color": "black",
            "&:hover": { color: "black" },
            "fontSize": "1rem",
          }}
        >
          Programming & Tech
        </StyledTextTypo>
        <StyledTextTypo
          onClick={() => {
            route.push("/It-services/WordPress");
          }}
        >
          WordPress
        </StyledTextTypo>
        <StyledTextTypo
          onClick={() => {
            route.push("/It-services/Web builders & CMS");
          }}
        >
          WebBuilders & CMS
        </StyledTextTypo>
        <StyledTextTypo
          onClick={() => {
            route.push("/It-services/Database");
          }}
        >
          Database
        </StyledTextTypo>
        <StyledTextTypo
          onClick={() => {
            route.push("/It-services/Mobile apps");
          }}
        >
          Mobile Apps
        </StyledTextTypo>
        <StyledTextTypo
          onClick={() => {
            route.push("/It-services/Chatbox");
          }}
        >
          Chatbox
        </StyledTextTypo>
        <StyledTextTypo
          onClick={() => {
            route.push("/It-services/Data Processing");
          }}
        >
          Data Processing
        </StyledTextTypo>
        <StyledTextTypo
          onClick={() => {
            route.push("/It-services/Blockchain & Cryptocurrency");
          }}
        >
          BlockChain & Cryptocurrency
        </StyledTextTypo>
        <StyledTextTypo
          onClick={() => {
            route.push("/It-services/Coding lessons");
          }}
        >
          Coding Lessons
        </StyledTextTypo>
        <StyledTextTypo
          onClick={() => {
            route.push("/It-services/Cyber security & Data protection");
          }}
        >
          Cyber Security & Data Protection
        </StyledTextTypo>
      </NavbarDiv>
      <NavbarDiv>
        <StyledTextTypo
          sx={{
            "fontWeight": "bold",
            "color": "black",
            "&:hover": { color: "black" },
            "fontSize": "1rem",
          }}
        >
          Writing & Translation
        </StyledTextTypo>
        <StyledTextTypo
          onClick={() => {
            route.push("/It-services/Articles & Blog posts");
          }}
        >
          Articles & Blog Posts
        </StyledTextTypo>
        <StyledTextTypo
          onClick={() => {
            route.push("/It-services/Website Content");
          }}
        >
          Website Content
        </StyledTextTypo>
        <StyledTextTypo
          onClick={() => {
            route.push("/It-services/Translation");
          }}
        >
          Translation
        </StyledTextTypo>
        <StyledTextTypo
          onClick={() => {
            route.push("/It-services/Resume & Cover letters");
          }}
        >
          Resume & Cover Letters
        </StyledTextTypo>
        <StyledTextTypo
          onClick={() => {
            route.push("/It-services/Case Studies");
          }}
        >
          Case Studies
        </StyledTextTypo>
        <StyledTextTypo
          onClick={() => {
            route.push("/It-services/Book & Ebook Writing");
          }}
        >
          Book & E-book Writing
        </StyledTextTypo>
        <StyledTextTypo
          onClick={() => {
            route.push("/It-services/Creative Writing");
          }}
        >
          Ceative Writing
        </StyledTextTypo>
        <StyledTextTypo
          onClick={() => {
            route.push("/It-services/Speech Writing");
          }}
        >
          Speech Writing
        </StyledTextTypo>
        <StyledTextTypo
          onClick={() => {
            route.push("/It-services/UX Writing");
          }}
        >
          Ux Writing
        </StyledTextTypo>
        <StyledTextTypo
          onClick={() => {
            route.push("/It-services/Script Writing");
          }}
        >
          Script Writing
        </StyledTextTypo>
        <StyledTextTypo
          onClick={() => {
            route.push("/It-services/Research & Summaries");
          }}
        >
          Research & Summaries
        </StyledTextTypo>
      </NavbarDiv>
      <NavbarDiv>
        <StyledTextTypo
          sx={{
            "fontWeight": "bold",
            "color": "black",
            "&:hover": { color: "black" },
            "fontSize": "1rem",
          }}
        >
          Video & Animation
        </StyledTextTypo>
        <StyledTextTypo
          onClick={() => {
            route.push("/It-services/Video Editing");
          }}
        >
          Video & Animation
        </StyledTextTypo>

        <StyledTextTypo
          onClick={() => {
            route.push("/It-services/Trailers");
          }}
        >
          Trailers
        </StyledTextTypo>
        <StyledTextTypo
          onClick={() => {
            route.push("/It-services/Visuals Effects");
          }}
        >
          Visual effects
        </StyledTextTypo>
        <StyledTextTypo
          onClick={() => {
            route.push("/It-services/Crowdfunding Videos");
          }}
        >
          Crowd Funding Videos
        </StyledTextTypo>
        <StyledTextTypo
          onClick={() => {
            route.push("/It-services/3D Product Animation");
          }}
        >
          3D Product Animation
        </StyledTextTypo>
        <StyledTextTypo
          onClick={() => {
            route.push("/It-services/Animation");
          }}
        >
          Animation
        </StyledTextTypo>
        <StyledTextTypo
          onClick={() => {
            route.push("/It-services/Film Video Production");
          }}
        >
          Film Video Production
        </StyledTextTypo>
        <div style={{ marginTop: "100px" }}></div>
        <StyledTextTypo
          sx={{ marginLeft: "50px" }}
          onClick={() => {
            route.push("/It-services");
          }}
        >
          {"See All >>"}
        </StyledTextTypo>
      </NavbarDiv>
    </div>
  );
}
