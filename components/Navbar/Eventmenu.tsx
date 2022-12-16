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

export default function EventMenu({
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

  const route = useRouter();
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

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
          Event Manager
        </StyledTextTypo>

        <StyledTextTypo>Conference</StyledTextTypo>
        <StyledTextTypo>Concerts</StyledTextTypo>
        <StyledTextTypo>Festivals</StyledTextTypo>
        <StyledTextTypo>Ceremonies</StyledTextTypo>
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
          Event Planner
        </StyledTextTypo>
        <StyledTextTypo>
          {"Conception & Event Planning  Service"}
        </StyledTextTypo>
        <StyledTextTypo>Location Scouting</StyledTextTypo>
        <StyledTextTypo>Service Bid & Contract Management</StyledTextTypo>
        <StyledTextTypo>Pressure Washing</StyledTextTypo>
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
          Budgeting
        </StyledTextTypo>
        <StyledTextTypo>Design Proposal</StyledTextTypo>
        <StyledTextTypo>Decor Setup & Styling</StyledTextTypo>
        <StyledTextTypo>Vendor Sourcing & Curating</StyledTextTypo>
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
          Corporate Events
        </StyledTextTypo>
        <StyledTextTypo>Seminars</StyledTextTypo>
        <StyledTextTypo>Product Launch Events </StyledTextTypo>
        <StyledTextTypo>Workshops</StyledTextTypo>

        <div style={{ marginTop: "100px" }}></div>
        <StyledTextTypo
          sx={{ marginLeft: "50px" }}
          onClick={() => {
            route.push("/Event-services");
          }}
        >
          {"See All >>"}
        </StyledTextTypo>
      </NavbarDiv>
    </div>
  );
}
