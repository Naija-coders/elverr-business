import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import { Paper, Typography } from "@mui/material";

import { StyledBox, StyleContainer } from "../NotLoggedIn/style";
import AllInboxIcon from "@mui/icons-material/AllInbox";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import Avatar from "@mui/material/Avatar";
import PaidIcon from "@mui/icons-material/Paid";
import {
  BasicText,
  BasicTextHeader,
  BasicTextbody,
  CustomPaper,
  BasicTextTitle,
  StyledDiv,
  MainDivs,
  StyledImages,
} from "./styles";
import { fontFamily } from "@mui/system";

export default function NestedList() {
  const [open, setOpen] = React.useState(true);
  const [favorite, setFavorite] = React.useState(false);
  const [agency, setAgency] = React.useState(false);
  const [freelance, setFreelance] = React.useState(false);

  const handleFav = () => {
    setFavorite(!favorite);
  };
  const handleAgen = () => {
    setAgency(!agency);
  };
  const handleFreelance = () => {
    setFreelance(!freelance);
  };

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <StyledBox>
      <StyleContainer>
        <div
          style={{
            background: "#F8FFF7",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
            justifyContent: "center",
            padding: "2rem",
          }}
        >
          <List
            sx={{
              width: "100%",
              maxWidth: "70%",
              background: "#FFFFFF",
              border: " 2px solid #34A422",
              boxShadow: " 0px 6px 16px rgba(52, 164, 34, 0.19)",
              borderRadius: " 14px",
            }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            <ListItemButton
              onClick={handleClick}
              sx={{ padding: "1.5rem 2rem" }}
            >
              <ListItemText primary="What is Elverr business?" />
              {open ? (
                <ExpandLess
                  sx={{
                    background: "#34A422",
                    border: "2px solid #FFFFFF",
                    borderRadius: "50%",
                    fontSize: "30px",
                    transform: " rotate(180deg)",
                    color: "white",
                  }}
                />
              ) : (
                <ExpandMore
                  sx={{
                    background: "#34A422",
                    border: "2px solid #FFFFFF",
                    borderRadius: "50%",
                    fontSize: "30px",
                    transform: " rotate(270deg)",
                    color: "white",
                  }}
                />
              )}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText
                    primary="StaLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    sx={{ color: "#6F6C90", fontFamily: "DM Sans" }}
                  />
                </ListItemButton>
              </List>
            </Collapse>
          </List>
          <List
            sx={{
              width: "100%",
              maxWidth: "70%",
              background: "#FFFFFF",

              boxShadow: " 0px 5px 16px rgba(8, 15, 52, 0.06)",
              borderRadius: " 14px",
            }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            <ListItemButton onClick={handleFav} sx={{ padding: "1.5rem 2rem" }}>
              <ListItemText
                primary="What is your favorite feature from Elverr?"
                sx={{ fontFamily: "DM Sans" }}
              />
              {favorite ? (
                <ExpandLess
                  sx={{
                    background: "#FFFFFF",

                    borderRadius: "50%",
                    boxShadow: "0px 5px 16px rgba(8, 15, 52, 0.06)",
                    fontSize: "30px",
                    transform: " rotate(180deg)",
                    color: "#34A422",
                  }}
                />
              ) : (
                <ExpandMore
                  sx={{
                    background: "#FFFFFF",

                    borderRadius: "50%",
                    boxShadow: "0px 5px 16px rgba(8, 15, 52, 0.06)",
                    fontSize: "30px",
                    transform: " rotate(270deg)",
                    color: "#34A422",
                  }}
                />
              )}
            </ListItemButton>
            <Collapse in={favorite} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText
                      primary="StaLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                      sx={{ color: "#6F6C90", fontFamily: "DM Sans" }}
                    />
                  </ListItemButton>
                </List>
              </List>
            </Collapse>
          </List>
          <List
            sx={{
              width: "100%",
              maxWidth: "70%",
              background: "#FFFFFF",

              boxShadow: " 0px 5px 16px rgba(8, 15, 52, 0.06)",
              borderRadius: " 14px",
            }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            <ListItemButton
              onClick={handleAgen}
              sx={{ padding: "1.5rem 2rem" }}
            >
              <ListItemText primary="How do you hire an Agency from the Showcase?" />
              {agency ? (
                <ExpandLess
                  sx={{
                    background: "#FFFFFF",

                    borderRadius: "50%",
                    boxShadow: "0px 5px 16px rgba(8, 15, 52, 0.06)",
                    fontSize: "30px",
                    transform: " rotate(180deg)",
                    color: "#34A422",
                  }}
                />
              ) : (
                <ExpandMore
                  sx={{
                    background: "#FFFFFF",

                    borderRadius: "50%",
                    boxShadow: "0px 5px 16px rgba(8, 15, 52, 0.06)",
                    fontSize: "30px",
                    transform: " rotate(270deg)",
                    color: "#34A422",
                  }}
                />
              )}
            </ListItemButton>
            <Collapse in={agency} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText
                      primary="StaLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                      sx={{ color: "#6F6C90", fontFamily: "DM Sans" }}
                    />
                  </ListItemButton>
                </List>
              </List>
            </Collapse>
          </List>
          <List
            sx={{
              width: "100%",
              maxWidth: "70%",
              background: "#FFFFFF",

              boxShadow: " 0px 5px 16px rgba(8, 15, 52, 0.06)",
              borderRadius: " 14px",
            }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            <ListItemButton
              onClick={handleFreelance}
              sx={{ padding: "1.5rem 2rem" }}
            >
              <ListItemText primary="Why is Elverr business the best freelance agency out there?" />
              {freelance ? (
                <ExpandLess
                  sx={{
                    background: "#FFFFFF",

                    borderRadius: "50%",
                    boxShadow: "0px 5px 16px rgba(8, 15, 52, 0.06)",
                    fontSize: "30px",
                    transform: " rotate(180deg)",
                    color: "#34A422",
                  }}
                />
              ) : (
                <ExpandMore
                  sx={{
                    background: "#FFFFFF",

                    borderRadius: "50%",
                    boxShadow: "0px 5px 16px rgba(8, 15, 52, 0.06)",
                    fontSize: "30px",
                    transform: " rotate(180deg)",
                    color: "#34A422",
                  }}
                />
              )}
            </ListItemButton>
            <Collapse in={freelance} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText
                      primary="StaLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                      sx={{ color: "#6F6C90", fontFamily: "DM Sans" }}
                    />
                  </ListItemButton>
                </List>
              </List>
            </Collapse>
          </List>
        </div>
      </StyleContainer>
    </StyledBox>
  );
}
