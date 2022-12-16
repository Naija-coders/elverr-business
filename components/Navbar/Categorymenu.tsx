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

        <StyledTextTypo>Logo Design & Brand Identity</StyledTextTypo>
        <StyledTextTypo>Web & Mobile Design</StyledTextTypo>
        <StyledTextTypo>Visual Design</StyledTextTypo>
        <StyledTextTypo>Art, Illustration & Cover Art Design</StyledTextTypo>
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
        <StyledTextTypo>WordPress</StyledTextTypo>
        <StyledTextTypo>WebBuilders & CMS</StyledTextTypo>
        <StyledTextTypo>Database</StyledTextTypo>
        <StyledTextTypo>Mobile Apps</StyledTextTypo>
        <StyledTextTypo>Chatbox</StyledTextTypo>
        <StyledTextTypo>Data Processing</StyledTextTypo>
        <StyledTextTypo>BlockChain & Cryptocurrency</StyledTextTypo>
        <StyledTextTypo>Coding Lessons</StyledTextTypo>
        <StyledTextTypo>Cyber Security & Data Protection</StyledTextTypo>
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
        <StyledTextTypo>Articles & Blog Posts</StyledTextTypo>
        <StyledTextTypo>Website Content</StyledTextTypo>
        <StyledTextTypo>Translation</StyledTextTypo>
        <StyledTextTypo>Resume & Cover Letters</StyledTextTypo>
        <StyledTextTypo>Case Studies</StyledTextTypo>
        <StyledTextTypo>Book & E-book Writing</StyledTextTypo>
        <StyledTextTypo>Ceative Writing</StyledTextTypo>
        <StyledTextTypo>Speech Writing</StyledTextTypo>
        <StyledTextTypo>Ux Writing</StyledTextTypo>
        <StyledTextTypo>Script Writing</StyledTextTypo>
        <StyledTextTypo>Research & Summaries</StyledTextTypo>
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
        <StyledTextTypo>Video & Animation</StyledTextTypo>
        <StyledTextTypo>Video Editing</StyledTextTypo>
        <StyledTextTypo>Trailers</StyledTextTypo>
        <StyledTextTypo>Visual effects</StyledTextTypo>
        <StyledTextTypo>Crowd Funding Videos</StyledTextTypo>
        <StyledTextTypo>3D Product Animation</StyledTextTypo>
        <StyledTextTypo>Animation</StyledTextTypo>
        <StyledTextTypo>Full Video Production</StyledTextTypo>
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
