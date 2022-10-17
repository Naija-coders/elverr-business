import { Avatar, Button, Divider, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { StyledBox1, StyledBox, StyleContainer } from "../NotLoggedIn/style";
import {
  StyledText,
  StyledTextTypo,
  StyledMainDiv,
  StyleContainerDiv,
} from "./styles";
import StateContext from "../../context/StateContext";
import DispatchContext from "../../context/DispatchContext";
import Clientapi from "../../pages/api/client";
import SearchTextField from "./SearchTextField/SearchTextField";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

interface Props {}

const Navbar: React.FunctionComponent<Props> = ({}) => {
  console.log("this is it");
  const { AuthState } = useContext<any>(StateContext);
  const { AuthDispatcher } = useContext<any>(DispatchContext);
  const route = useRouter();

  React.useEffect(() => {
    if (AuthState.isLoggedIn) {
      Clientapi.get("api/getuserprofile").then((response: any) => {
        const user = response.data;
        AuthDispatcher({ type: "addUser", payload: user });
        console.log(AuthState.user);

        //checking dispatch for reducer
      });
    }
  }, []);

  return (
    <div
      style={{
        background: " #FFFFFF",
        borderBottom: "1px solid #EBEBEB",
        padding: "0rem 1rem",

        marginTop: "-20px",

        width: "100%",
        filter: "drop-shadow(0px 6px 12px rgba(0, 0, 0, 0.1))",
      }}
    >
      <StyledBox1>
        <StyleContainer
          sx={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
        >
          <StyleContainerDiv>
            <img
              src="https://res.cloudinary.com/dxsmdvaqq/image/upload/v1664558625/businesselverr_yf57tg.png"
              alt="businesslogo"
              style={{
                width: "160px",
                objectFit: "contain",
                cursor: "pointer",
              }}
              onClick={() => {
                route.push("/");
              }}
            />

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
                alignItems: "center",
              }}
            >
              <StyledMainDiv>
                <SearchTextField />
                <StyledText style={{ color: "#34A422" }}>Explore</StyledText>
                <StyledText>Categories</StyledText>

                <StyledText sx={{ display: { lg: "flex" } }}>
                  Project
                </StyledText>
              </StyledMainDiv>
              <div
                style={{
                  display: "flex",
                  gap: "2rem",
                  alignItems: "center",
                }}
              >
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18px"
                    height="18px"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M15.8554 8.12111L10.1916 13.8227L3.56064 9.74147C2.69176 9.20657 2.86787 7.88697 3.8467 7.60287L19.5022 3.04743C20.3925 2.78978 21.2156 3.62446 20.949 4.51889L16.304 20.1582C16.013 21.1369 14.7082 21.3064 14.1809 20.4325L10.1916 13.8227"
                      stroke="#7C7C8D"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18px"
                    height="18px"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3.50083 13.7871V13.5681C3.53295 12.9202 3.7406 12.2925 4.10236 11.7496C4.7045 11.0975 5.1167 10.2983 5.29571 9.43598C5.29571 8.7695 5.29571 8.0935 5.35393 7.42703C5.65469 4.21842 8.82728 2 11.9611 2H12.0387C15.1725 2 18.345 4.21842 18.6555 7.42703C18.7137 8.0935 18.6555 8.7695 18.704 9.43598C18.8854 10.3003 19.2972 11.1019 19.8974 11.7591C20.2618 12.2972 20.4698 12.9227 20.4989 13.5681V13.7776C20.5206 14.648 20.2208 15.4968 19.6548 16.1674C18.907 16.9515 17.8921 17.4393 16.8024 17.5384C13.607 17.8812 10.383 17.8812 7.18762 17.5384C6.09914 17.435 5.08576 16.9479 4.33521 16.1674C3.778 15.4963 3.48224 14.6526 3.50083 13.7871Z"
                      stroke="#7C7C8D"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      xmlns="http://www.w3.org/2000/svg"
                      d="M9.55493 20.8518C10.0542 21.4784 10.7874 21.884 11.5922 21.9787C12.3971 22.0734 13.2072 21.8495 13.8433 21.3564C14.0389 21.2106 14.2149 21.041 14.3672 20.8518"
                      stroke="#7C7C8D"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <Button
                  variant="contained"
                  size="large"
                  disableElevation
                  style={{
                    background: "#34A422",
                    textTransform: "none",
                    borderRadius: "10px",
                    fontFamily: "DM Sans",
                  }}
                  onClick={() => {
                    route.push("post-advert");
                  }}
                >
                  Post Ad
                </Button>
                <Avatar
                  src={AuthState.user?.profile_photo_url}
                  sx={{ height: "40px", width: "40px" }}
                />
              </div>
            </div>
          </StyleContainerDiv>
          <Divider />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
              height: "100%",
            }}
          >
            <StyledTextTypo>Trending</StyledTextTypo>
            <StyledTextTypo>Automative Services</StyledTextTypo>
            <StyledTextTypo>Video & Animation</StyledTextTypo>
            <StyledTextTypo>Entertainments Services</StyledTextTypo>
            <StyledTextTypo>IT Services</StyledTextTypo>
            <StyledTextTypo>Cleaning Services</StyledTextTypo>
          </div>
        </StyleContainer>
      </StyledBox1>
    </div>
  );
};

export default Navbar;
