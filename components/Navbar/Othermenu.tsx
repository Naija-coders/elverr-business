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

export default function Othermenu({
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
          {"Building & Trading"}
        </StyledTextTypo>

        <StyledTextTypo
          onClick={() => {
            route.push("/Other-services/Electrical Installation & Testing");
          }}
        >
          Electrical Installation & Testing
        </StyledTextTypo>
        <StyledTextTypo
          onClick={() => {
            route.push("/Other-services/Carpentry & Joinery");
          }}
        >
          Carpentry & Joinery
        </StyledTextTypo>
        <StyledTextTypo
          onClick={() => {
            route.push("/Other-services/Oil & Gas Industry");
          }}
        >
          Oils & Gas Industry
        </StyledTextTypo>
        <StyledTextTypo
          onClick={() => {
            route.push("/Other-services/Electrician");
          }}
        >
          Electrician
        </StyledTextTypo>
        <StyledTextTypo
          onClick={() => {
            route.push("/Other-services/Heavy Equipment Operator");
          }}
        >
          Heavy Equipment Operator
        </StyledTextTypo>
        <StyledTextTypo
          onClick={() => {
            route.push("/Other-services/Alarm & CCTV Installation");
          }}
        >
          Alarm & CCTV Installation
        </StyledTextTypo>
        <StyledTextTypo
          onClick={() => {
            route.push("/Other-services/Drainage Services");
          }}
        >
          Drainage Services
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
          Health & Beauty Service
        </StyledTextTypo>
        <StyledTextTypo
          onClick={() => {
            route.push("/Other-services/Make-up");
          }}
        >
          {"Make-up"}
        </StyledTextTypo>
        <StyledTextTypo
          onClick={() => {
            route.push("/Other-services/Hair Dresser & Barber");
          }}
        >
          Hair Dresser & Barber
        </StyledTextTypo>
        <StyledTextTypo
          onClick={() => {
            route.push("/Other-services/Skin Care");
          }}
        >
          Skin Care
        </StyledTextTypo>
        <StyledTextTypo
          onClick={() => {
            route.push("/Other-services/Pedicure");
          }}
        >
          Pedicure
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
          LandScaping & Garden
        </StyledTextTypo>
        <StyledTextTypo
          onClick={() => {
            route.push("/Other-services/Prunning");
          }}
        >
          {" "}
          Prunning
        </StyledTextTypo>
        <StyledTextTypo
          onClick={() => {
            route.push("/Other-services/Garden Design");
          }}
        >
          Garden Design
        </StyledTextTypo>
        <StyledTextTypo
          onClick={() => {
            route.push("/Other-services/Soil Enrichment");
          }}
        >
          Soil Enrichment
        </StyledTextTypo>
        <StyledTextTypo
          onClick={() => {
            route.push("/Other-services/Landscape & Garden Cleanup");
          }}
        >
          Landscape & Garden Cleanup
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
          Printing Services
        </StyledTextTypo>
        <StyledTextTypo
          onClick={() => {
            route.push("/Other-services/Gravure Printing");
          }}
        >
          {" "}
          Gravure Printing
        </StyledTextTypo>
        <StyledTextTypo
          onClick={() => {
            route.push("/Other-services/Engraving");
          }}
        >
          Engraving{" "}
        </StyledTextTypo>
        <StyledTextTypo
          onClick={() => {
            route.push("/Other-services/Flexographic Printing");
          }}
        >
          Flexographic Printing
        </StyledTextTypo>
        <StyledTextTypo
          onClick={() => {
            route.push("/Other-services/Thermographic Printing");
          }}
        >
          Thermographic Printing
        </StyledTextTypo>
        <StyledTextTypo
          onClick={() => {
            route.push("/Other-services/Screen Printing");
          }}
        >
          Screen Printing
        </StyledTextTypo>
        <StyledTextTypo
          onClick={() => {
            route.push("/Other-services/Digital Printing");
          }}
        >
          Digital Printing
        </StyledTextTypo>
        <StyledTextTypo
          onClick={() => {
            route.push("/Other-services/Rotary Screen");
          }}
        >
          Rotary Screen
        </StyledTextTypo>

        <div style={{ marginTop: "100px" }}></div>
        <StyledTextTypo
          sx={{ marginLeft: "50px" }}
          onClick={() => {
            route.push("/Other-services");
          }}
        >
          {"See All >>"}
        </StyledTextTypo>
      </NavbarDiv>
    </div>
  );
}
