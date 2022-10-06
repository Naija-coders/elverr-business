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
            src={
              "https://res.cloudinary.com/dxsmdvaqq/image/upload/v1665066646/slack_hsvmte.png"
            }
          />
          <img
            style={{ width: "220px", height: "75.33px" }}
            src={
              "https://res.cloudinary.com/dxsmdvaqq/image/upload/v1665066616/prudential_fr31ec.png"
            }
          />
          <img
            style={{ width: "230px", height: "75.33px" }}
            src={
              "https://res.cloudinary.com/dxsmdvaqq/image/upload/v1665066545/microsoft.png"
            }
          />
          <img
            style={{ width: "203px", height: "60.33px" }}
            src={
              "https://res.cloudinary.com/dxsmdvaqq/image/upload/v1665066586/zoover_ocar6l.png"
            }
          />
        </StyledDiv>
      </div>
    </StyledBox>
  );
}
