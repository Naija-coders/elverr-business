import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { StyledListItem, StyledListItemText } from "./styles";
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
          width: "170px",
          position: "sticky",
          top: 0,

          background: "#FFFFFF",
          borderLeft: "1px solid #EBEBEB",
        }}
      ></div>
    </div>
  );
}
