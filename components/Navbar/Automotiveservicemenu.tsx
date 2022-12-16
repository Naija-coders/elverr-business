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

        <StyledTextTypo>Wholesaling Parts</StyledTextTypo>
        <StyledTextTypo>Retailing Parts</StyledTextTypo>
        <StyledTextTypo>Motor Vehicle Maintenance</StyledTextTypo>
        <StyledTextTypo>Part Fabrication</StyledTextTypo>
        <StyledTextTypo>Safety & Security</StyledTextTypo>
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
        <StyledTextTypo>Lubrication System</StyledTextTypo>
        <StyledTextTypo>Electrical System</StyledTextTypo>
        <StyledTextTypo>Cooling</StyledTextTypo>
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
        <StyledTextTypo>Transmission Repairs</StyledTextTypo>
        <StyledTextTypo>Wiper Blade Replacement</StyledTextTypo>
        <StyledTextTypo>Tire Replacement</StyledTextTypo>
        <StyledTextTypo>Fuel Filter</StyledTextTypo>
        <StyledTextTypo>Scheduled Maintenance</StyledTextTypo>
        <StyledTextTypo>Oil Replacement</StyledTextTypo>
        <StyledTextTypo>Air Filter Replacement</StyledTextTypo>
        <StyledTextTypo>Towing Services</StyledTextTypo>
        <StyledTextTypo>Body Repair & Painting</StyledTextTypo>
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
        <StyledTextTypo>Air Filter Change</StyledTextTypo>
        <StyledTextTypo>Extensive Break Inspection</StyledTextTypo>
        <StyledTextTypo>Air Condition Inspection</StyledTextTypo>
        <StyledTextTypo>Shock Absorber Inspection</StyledTextTypo>
        <StyledTextTypo>Electrical Test</StyledTextTypo>

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
