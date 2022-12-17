import { Avatar, Button, Divider, TextField } from "@mui/material";
import React, { useContext, useState } from "react";

import {
  StyledText,
  StyledTextTypo,
  StyledMainDiv,
  StyleContainerDiv,
} from "./styles";

import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useRouter } from "next/router";
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

type Props = {
  userstatename?: any;
  userstateemail?: any;
  userstateprofileurl?: any;
};

export default function MenuCategories({
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
  const [color6, setColor6] = useState("grey");

  const [open, setOpen] = React.useState(true);
  const route = useRouter();
  const handleClick = () => {
    setOpen(!open);
  };

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
    <>
      <Tooltip title="Open Categories">
        <StyledText
          /*    style={{
                    color: ispagecategoriesactive ? "#34A422" : "black",
                  }} */
          onClick={handleOpenUserMenu}
        >
          Categories
        </StyledText>
      </Tooltip>
      <Menu
        sx={{
          "mt": "45px",
          "padding": "1rem",
          "&:Muipaper-root": {
            background: "green",
          },
        }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <div>
          <StyledTextTypo
            sx={{
              "marginLeft": "1rem",
              "marginTop": "1rem",
              "&:hover": { color: "grey" },
              "cursor": "text",
            }}
          >
            All Categories
          </StyledTextTypo>
          <MenuItem
            sx={{ padding: "1rem 2rem", marginTop: "1rem" }}
            onMouseEnter={() => {
              setColor1("green");
            }}
            onClick={() => {
              route.push("/It-services");
            }}
            onMouseLeave={() => {
              setColor1("grey");
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "0.5rem",
                alignItems: "center",
                justifyItems: "center",
              }}
            >
              <StyledTextTypo style={{ color: color1 }}>
                IT Services
              </StyledTextTypo>
            </div>
          </MenuItem>
          <MenuItem
            sx={{ padding: "1rem 2rem " }}
            onMouseEnter={() => {
              setColor2("green");
            }}
            onMouseLeave={() => {
              setColor2("grey");
            }}
            onClick={() => {
              route.push("/Automotive-services");
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "0.5rem",
                alignItems: "center",
                justifyItems: "center",
              }}
            >
              <StyledTextTypo style={{ color: color2 }}>
                Automotive Services
              </StyledTextTypo>
            </div>
          </MenuItem>

          <MenuItem
            sx={{
              padding: "1rem 2rem ",
              display: "flex",
              gap: "0.5rem",
              alignItems: "center",
              justifyItems: "center",
              flexDirection: "row",
            }}
            onMouseEnter={() => {
              setColor3("green");
            }}
            onMouseLeave={() => {
              setColor3("grey");
            }}
            onClick={() => {
              route.push("/Event-services");
            }}
          >
            <StyledTextTypo style={{ color: color3 }}>
              Event Services
            </StyledTextTypo>
          </MenuItem>

          <MenuItem
            sx={{
              padding: "1rem 2rem ",
            }}
            onMouseEnter={() => {
              setColor4("green");
            }}
            onMouseLeave={() => {
              setColor4("grey");
            }}
            onClick={() => {
              route.push("/Entertainments-services");
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "0.5rem",
                alignItems: "center",
                justifyItems: "center",
              }}
            >
              <StyledTextTypo style={{ color: color4 }}>
                Entertainment Services
              </StyledTextTypo>
            </div>
          </MenuItem>
          <MenuItem
            sx={{
              padding: "1rem 2rem ",
            }}
            onMouseEnter={() => {
              setColor5("green");
            }}
            onMouseLeave={() => {
              setColor5("grey");
            }}
            onClick={() => {
              route.push("/Cleaning-services");
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "0.5rem",
                alignItems: "center",
                justifyItems: "center",
              }}
            >
              <StyledTextTypo style={{ color: color5 }}>
                Cleaning Services
              </StyledTextTypo>
            </div>
          </MenuItem>
          <MenuItem
            sx={{
              padding: "1rem 2rem ",
            }}
            onMouseEnter={() => {
              setColor6("green");
            }}
            onMouseLeave={() => {
              setColor6("grey");
            }}
            onClick={() => {
              route.push("/Other-services");
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "0.5rem",
                alignItems: "center",
                justifyItems: "center",
              }}
            >
              <StyledTextTypo style={{ color: color6 }}>
                Other Services
              </StyledTextTypo>
            </div>
          </MenuItem>
        </div>
      </Menu>
    </>
  );
}
