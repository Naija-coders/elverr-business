import { Avatar, Divider } from "@mui/material";
import * as React from "react";
import {
  StyledBoxFooter,
  FooterTypo,
  FooterHeader,
  StyledTextField,
} from "./style";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useRouter } from "next/router";
type Props = {};

const FooterLoggedIn: React.FC<Props> = ({}) => {
  const route = useRouter();
  return (
    <StyledBoxFooter>
      <div
        style={{
          justifyContent: "space-around",
          maxWidth: "1500px",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "50px",
            justifyContent: "space-around",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              width: "350px",
            }}
          >
            <div>
              <img
                src={
                  "https://res.cloudinary.com/dxsmdvaqq/image/upload/v1664558625/businesselverr_yf57tg.png"
                }
                alt={"logo"}
                style={{
                  width: "148.49px",
                  height: " 50.59px",
                  objectFit: "contain",
                  userSelect: "none",
                  marginLeft: "-10px",
                }}
              />
            </div>
            <FooterTypo
              sx={{
                "&:hover": {
                  textDecoration: "none",
                  cursor: "text",
                  fontSize: "0.9rem",
                },
              }}
            >
              Elverr is a global self-service platform for live experiences that
              allows anyone to create and share projects, find skilled workers
              and agencies that help you take your ideas to a new level.
            </FooterTypo>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "30px",
                marginTop: "200px",
              }}
            >
              <Avatar sx={{ background: "#F5F5F5", width: 33, height: 33 }}>
                <FacebookOutlinedIcon
                  style={{ color: "#34A422", fontSize: "2rem" }}
                />
              </Avatar>{" "}
              <Avatar style={{ background: "#F5F5F5", width: 33, height: 33 }}>
                <TwitterIcon style={{ fontSize: "2rem", color: "#34A422" }} />
              </Avatar>{" "}
              <Avatar style={{ background: "#F5F5F5", width: 33, height: 33 }}>
                <LinkedInIcon style={{ fontSize: "2rem", color: "#34A422" }} />
              </Avatar>{" "}
            </div>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: " 150px 150px 300px",
              justifyContent: "space-between",
              width: "70%",
            }}
          >
            <FooterHeader>Categories</FooterHeader>{" "}
            <FooterHeader>Elverr</FooterHeader>
            <FooterHeader>Stay in the loop</FooterHeader>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                marginTop: "1rem",
              }}
            >
              <FooterTypo>IT Services</FooterTypo>
              <FooterTypo>Cleaning Services</FooterTypo>
              <FooterTypo>Event Services</FooterTypo>
              <FooterTypo>Automative Services</FooterTypo>
              <FooterTypo>Logistic Services</FooterTypo>
              <FooterTypo>Repair Services</FooterTypo>
              <FooterTypo>Fitness Services</FooterTypo>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                marginTop: "1rem",
              }}
            >
              <FooterTypo>About Us</FooterTypo>
              <FooterTypo>Contact Us</FooterTypo>
              <FooterTypo>Help Center</FooterTypo>
              <FooterTypo>How it Works</FooterTypo>
              <FooterTypo
                onClick={() => {
                  route.push("/privacy-policies");
                }}
              >
                Privacy{" "}
              </FooterTypo>
              <FooterTypo>Terms </FooterTypo>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                marginTop: "1rem",
              }}
            >
              <FooterTypo
                sx={{
                  "&:hover": {
                    textDecoration: "none",
                    cursor: "text",
                    fontSize: "0.9rem",
                  },
                }}
              >
                Join our mailing list to stay in the loop with our newest for
                Event and concert
              </FooterTypo>
              <br></br>
              <StyledTextField
                placeholder="Enter your email address"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <div
                        style={{
                          background: " #34A422",
                          width: "110px",
                          height: "40px",
                          marginLeft: "10px",
                          display: "flex",
                          alignItems: "center",
                          color: "white",
                          padding: "15.4516px 30.9033px",
                          justifyContent: "center",
                          position: "absolute",
                          right: "7px",
                          gap: "7.73px",
                          flexDirection: "row",
                          boxShadow:
                            "0px 10.1667px 50.8333px rgba(61, 55, 241, 0.25)",

                          borderRadius: "40px",
                        }}
                      >
                        <FooterTypo
                          style={{ fontSize: "0.6rem", color: "#FFFFFF" }}
                          align={"center"}
                        >
                          Subscribe Now
                        </FooterTypo>
                      </div>
                    </InputAdornment>
                  ),
                }}
              />
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <Divider style={{ border: "0.7px solid #4C4D8B" }}></Divider>
        <br></br>
        <FooterTypo align={"center"}>
          © Copyright 2022, All Rights Reserved by Elverr
        </FooterTypo>
      </div>
    </StyledBoxFooter>
  );
};

export default FooterLoggedIn;
