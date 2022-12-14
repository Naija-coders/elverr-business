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

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <>
      <Tooltip title="Open settings">
        <Avatar
          onClick={handleOpenUserMenu}
          src={userstateprofileurl}
          sx={{
            height: "40px",
            width: "40px",
          }}
        />
      </Tooltip>
      <Menu
        sx={{
          mt: "45px",
          padding: "1rem",
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
          <StyledTextTypo sx={{ marginLeft: "1rem", marginTop: "1rem" }}>
            Profile Information
          </StyledTextTypo>
          <MenuItem sx={{ padding: "1rem 2rem", marginTop: "1rem" }}>
            <div
              style={{
                display: "flex",
                gap: "0.5rem",
                alignItems: "center",
                justifyItems: "center",
              }}
            >
              <Category size={"medium"} />

              <StyledTextTypo>Dashboard</StyledTextTypo>
            </div>
          </MenuItem>
          <MenuItem sx={{ padding: "1rem 2rem " }}>
            <div
              style={{
                display: "flex",
                gap: "0.5rem",
                alignItems: "center",
                justifyItems: "center",
              }}
            >
              <Notification size={"medium"} />

              <StyledTextTypo>Notification</StyledTextTypo>
            </div>
          </MenuItem>

          <MenuItem
            sx={{
              paddingTop: "0.5rem",
              paddingLeft: "2rem",
              paddingRight: "3rem",
              display: "flex",
              gap: "0.5rem",
              alignItems: "center",
              justifyItems: "center",
              flexDirection: "row",
            }}
            onClick={handleClick}
          >
            <Setting size={"medium"} />

            <StyledTextTypo>Account Settings</StyledTextTypo>

            <div style={{ marginTop: "10px", marginLeft: "2rem" }}>
              {open ? <ExpandLess /> : <ExpandMore />}
            </div>
          </MenuItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <MenuItem
              sx={{
                paddingTop: "1rem",
                paddingLeft: "2rem",
                paddingRight: "1rem",
                paddingBottom: "1rem",
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
                <ShieldDone size={"medium"} />

                <StyledTextTypo>{"Security & Privacy"}</StyledTextTypo>
              </div>
            </MenuItem>
            <MenuItem
              sx={{
                paddingTop: "1rem",
                paddingLeft: "2rem",
                paddingRight: "1rem",
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
                <Delete size={"medium"} />

                <StyledTextTypo>Delete Account</StyledTextTypo>
              </div>
            </MenuItem>
          </Collapse>

          <Divider
            orientation="horizontal"
            sx={{
              width: "90%",
              display: "flex",
              marginLeft: "1rem",
              padding: "0.5rem",
            }}
          ></Divider>
          <StyledTextTypo sx={{ marginLeft: "1rem", marginTop: "1rem" }}>
            Profile
          </StyledTextTypo>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "1rem",
              alignItems: "center",
              padding: "1rem",
            }}
          >
            <Avatar src={userstateprofileurl} />
            <div>
              <StyledTextTypo
                sx={{
                  color: "black",
                  fontSize: "0.9rem",
                  fontWeight: "bold",
                }}
              >
                {userstatename}
              </StyledTextTypo>
              <StyledTextTypo>{userstateemail}</StyledTextTypo>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "1rem",
            }}
          >
            <Button
              disableElevation
              sx={{
                "textTransform": "none",
                "width": "100%",

                "borderRadius": "4px",
                "background": "#F5F5F5",
                "color": "#191D23",
                "&:hover": {
                  background: "#F5F5F5",
                },
              }}
              variant={"contained"}
            >
              Logout
            </Button>
          </div>
        </div>
      </Menu>
    </>
  );
}
