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

export default function Automotivemenu({
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
          Automative Industry
        </StyledTextTypo>

        <StyledTextTypo
          onClick={() => {
            route.push("/Automotive-services/Wholesaling Parts");
          }}
        >
          Wholesaling Parts
        </StyledTextTypo>
        <StyledTextTypo
          onClick={() => {
            route.push("/Automotive-services/Retailing Parts");
          }}
        >
          Retailing Parts
        </StyledTextTypo>
        <StyledTextTypo
          onClick={() => {
            route.push("/Automotive-services/Motor Vehicle Maintenance");
          }}
        >
          Motor Vehicle Maintenance
        </StyledTextTypo>
        <StyledTextTypo
          onClick={() => {
            route.push("/Automotive-services/Part Fabrication");
          }}
        >
          Part Fabrication
        </StyledTextTypo>
        <StyledTextTypo
          onClick={() => {
            route.push("/Automotive-services/Safety & Security");
          }}
        >
          Safety & Security
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
          Automobile Services
        </StyledTextTypo>
        <StyledTextTypo
          onClick={() => {
            route.push("/Automotive-services/Lubrication System");
          }}
        >
          Lubrication System
        </StyledTextTypo>
        <StyledTextTypo
          onClick={() => {
            route.push("/Automotive-services/Electrical System");
          }}
        >
          Electrical System
        </StyledTextTypo>
        <StyledTextTypo
          onClick={() => {
            route.push("/Automotive-services/Cooling System");
          }}
        >
          Cooling
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
          Vehicle Repairs
        </StyledTextTypo>
        <StyledTextTypo
          onClick={() => {
            route.push("/Automotive-services/Transmission Repairs");
          }}
        >
          {" "}
          Transmission Repairs
        </StyledTextTypo>
        <StyledTextTypo
          onClick={() => {
            route.push("/Automotive-services/Wiper Blade Replacement");
          }}
        >
          Wiper Blade Replacement
        </StyledTextTypo>
        <StyledTextTypo
          onClick={() => {
            route.push("/Automotive-services/Tire Replacement");
          }}
        >
          Tire Replacement
        </StyledTextTypo>
        <StyledTextTypo
          onClick={() => {
            route.push("/Automotive-services/Fuel Filter");
          }}
        >
          Fuel Filter
        </StyledTextTypo>
        <StyledTextTypo
          onClick={() => {
            route.push("/Automotive-services/Scheduled Maintenance");
          }}
        >
          Scheduled Maintenance
        </StyledTextTypo>
        <StyledTextTypo
          onClick={() => {
            route.push("/Automotive-services/Oil Replacement");
          }}
        >
          Oil Replacement
        </StyledTextTypo>
        <StyledTextTypo
          onClick={() => {
            route.push("/Automotive-services/Air Filter Replacement");
          }}
        >
          Air Filter Replacement
        </StyledTextTypo>
        <StyledTextTypo
          onClick={() => {
            route.push("/Automotive-services/Towing Services");
          }}
        >
          Towing Services
        </StyledTextTypo>
        <StyledTextTypo
          onClick={() => {
            route.push("/Automotive-services/Body Repair & Painting");
          }}
        >
          Body Repair & Painting
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
          Full Car Services
        </StyledTextTypo>
        <StyledTextTypo
          onClick={() => {
            route.push("/Automotive-services/Air Filter Change");
          }}
        >
          Air Filter Change
        </StyledTextTypo>
        <StyledTextTypo
          onClick={() => {
            route.push("/Automotive-services/Extensive Break Inspection");
          }}
        >
          Extensive Break Inspection
        </StyledTextTypo>
        <StyledTextTypo
          onClick={() => {
            route.push("/Automotive-services/Air Condition Inspection");
          }}
        >
          Air Condition Inspection
        </StyledTextTypo>
        <StyledTextTypo
          onClick={() => {
            route.push("/Automotive-services/Shock Absorber Inspection");
          }}
        >
          Shock Absorber Inspection
        </StyledTextTypo>
        <StyledTextTypo
          onClick={() => {
            route.push("/Automotive-services/Electrical Test");
          }}
        >
          Electrical Test
        </StyledTextTypo>

        <div style={{ marginTop: "100px" }}></div>
        <StyledTextTypo
          sx={{ marginLeft: "50px" }}
          onClick={() => {
            route.push("/Automotive-services");
          }}
        >
          {"See All >>"}
        </StyledTextTypo>
      </NavbarDiv>
    </div>
  );
}
