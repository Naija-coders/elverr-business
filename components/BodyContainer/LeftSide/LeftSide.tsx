import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { StyledListItem, StyledText } from "./styles";
import SearchTextField from "./SearchTextField/SearchTextField";
import { TextField } from "@mui/material";
type Props = {};

export default function RightSide({}: Props) {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
  };
  return (
    <div>
      <div
        style={{
          height: "100%",
          width: "220px",
          position: "sticky",
          top: 0,

          background: "#FFFFFF",
          borderLeft: "1px solid #EBEBEB",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",

            alignItems: "center",
          }}
        >
          <div
            style={{
              marginTop: "50px",
              textAlign: "center",
              padding: "1rem",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <StyledText align="left">Search keyword</StyledText>

            <div>
              <SearchTextField placeholders="Type keywords.." />
            </div>
          </div>
          <div
            style={{
              padding: "1rem",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <StyledText align="left">Location</StyledText>

            <div>
              <SearchTextField placeholders="Enter location.." />
            </div>
          </div>
          <div
            style={{
              padding: "1rem",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <StyledText align="left">Experience Level</StyledText>

            <div style={{ display: "flex", gap: "1rem" }}>
              <div>1-2 Years</div>
              <div>3-5 Years</div>
            </div>
            <div style={{ display: "flex", gap: "1rem" }}>
              <div>6-8 Years</div>
              <div>9+ Years</div>
            </div>
          </div>
          <div
            style={{
              padding: "1rem",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <StyledText align="left">Interest</StyledText>

            <div>
              <SearchTextField placeholders="Select.." />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
