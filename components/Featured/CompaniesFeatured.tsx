import { Paper, Typography } from "@mui/material";
import React from "react";
import { StyledBox } from "../NotLoggedIn/style";
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

type Props = {};

export default function CompaniesFeatured({}: Props) {
  return (
    <StyledBox>
      <div
        style={{
          justifyContent: "space-around",
          maxWidth: "1500px",
          width: "100%",
        }}
      >
        <StyledDiv>
          <img
            style={{ width: "203px", height: "75.33px" }}
            src={"slack.png"}
          />
          <img
            style={{ width: "220px", height: "75.33px" }}
            src={"prudential.png"}
          />
          <img
            style={{ width: "230px", height: "75.33px" }}
            src={"microsoft.png"}
          />
          <img
            style={{ width: "203px", height: "60.33px" }}
            src={"zoover.png"}
          />
        </StyledDiv>
        <br></br>
      </div>
    </StyledBox>
  );
}
