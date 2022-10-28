import React from "react";
import { CustomDiv, CustomContainer } from "./styles";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {
  Avatar,
  Button,
  IconButton,
  Typography,
  Checkbox,
} from "@mui/material";
import Skeleton from "@mui/material/Skeleton";
type Props = {
  data: any;
};
import { Favorite, FavoriteBorder } from "@mui/icons-material";
const label = { inputProps: { "aria-label": "Likes" } };
export default function ServiceGridCard({ data }: Props) {
  React.useEffect(() => {
    if (data === undefined) {
      console.log("data is undefined");
    }
  }, [data]);

  const [confirmed, setConfirmed] = React.useState(false);

  return (
    <div>
      {data?.length == 0 || data == undefined ? (
        <CustomDiv>
          <CustomContainer>
            <Skeleton variant="rectangular" width={"100%"} height={"173px"} />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                paddingLeft: "10px",
                paddingRight: "1rem",
                paddingTop: "0.5rem",
                justifyContent: "space-between",
                marginTop: "10px",
                width: "100%",
              }}
            >
              {" "}
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "1rem",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <Skeleton variant="circular" width={40} height={40} />
                <Skeleton variant="text" width={"70%"} />
              </div>
            </div>
          </CustomContainer>
          <CustomContainer>
            <Skeleton variant="rectangular" width={"100%"} height={"173px"} />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                paddingLeft: "10px",
                paddingRight: "1rem",
                paddingTop: "0.5rem",
                justifyContent: "space-between",
                marginTop: "10px",
                width: "100%",
              }}
            >
              {" "}
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "1rem",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <Skeleton variant="circular" width={40} height={40} />
                <Skeleton variant="text" width={"70%"} />
              </div>
            </div>
          </CustomContainer>
          <CustomContainer>
            <Skeleton variant="rectangular" width={"100%"} height={"173px"} />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                paddingLeft: "10px",
                paddingRight: "1rem",
                paddingTop: "0.5rem",
                justifyContent: "space-between",
                marginTop: "10px",
                width: "100%",
              }}
            >
              {" "}
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "1rem",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <Skeleton variant="circular" width={40} height={40} />
                <Skeleton variant="text" width={"70%"} />
              </div>
            </div>
          </CustomContainer>
          <CustomContainer>
            <Skeleton variant="rectangular" width={"100%"} height={"173px"} />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                paddingLeft: "10px",
                paddingRight: "1rem",
                paddingTop: "0.5rem",
                justifyContent: "space-between",
                marginTop: "10px",
                width: "100%",
              }}
            >
              {" "}
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "1rem",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <Skeleton variant="circular" width={40} height={40} />
                <Skeleton variant="text" width={"70%"} />
              </div>
            </div>
          </CustomContainer>{" "}
          <CustomContainer>
            <Skeleton variant="rectangular" width={"100%"} height={"173px"} />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                paddingLeft: "10px",
                paddingRight: "1rem",
                paddingTop: "0.5rem",
                justifyContent: "space-between",
                marginTop: "10px",
                width: "100%",
              }}
            >
              {" "}
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "1rem",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <Skeleton variant="circular" width={40} height={40} />
                <Skeleton variant="text" width={"70%"} />
              </div>
            </div>
          </CustomContainer>
          <CustomContainer>
            <Skeleton variant="rectangular" width={"100%"} height={"173px"} />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                paddingLeft: "10px",
                paddingRight: "1rem",
                paddingTop: "0.5rem",
                justifyContent: "space-between",
                marginTop: "10px",
                width: "100%",
              }}
            >
              {" "}
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "1rem",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <Skeleton variant="circular" width={40} height={40} />
                <Skeleton variant="text" width={"70%"} />
              </div>
            </div>
          </CustomContainer>
          <CustomContainer>
            <Skeleton variant="rectangular" width={"100%"} height={"173px"} />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                paddingLeft: "10px",
                paddingRight: "1rem",
                paddingTop: "0.5rem",
                justifyContent: "space-between",
                marginTop: "10px",
                width: "100%",
              }}
            >
              {" "}
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "1rem",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <Skeleton variant="circular" width={40} height={40} />
                <Skeleton variant="text" width={"70%"} />
              </div>
            </div>
          </CustomContainer>
          <CustomContainer>
            <Skeleton variant="rectangular" width={"100%"} height={"173px"} />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                paddingLeft: "10px",
                paddingRight: "1rem",
                paddingTop: "0.5rem",
                justifyContent: "space-between",
                marginTop: "10px",
                width: "100%",
              }}
            >
              {" "}
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "1rem",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <Skeleton variant="circular" width={40} height={40} />
                <Skeleton variant="text" width={"70%"} />
              </div>
            </div>
          </CustomContainer>{" "}
          <CustomContainer>
            <Skeleton variant="rectangular" width={"100%"} height={"173px"} />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                paddingLeft: "10px",
                paddingRight: "1rem",
                paddingTop: "0.5rem",
                justifyContent: "space-between",
                marginTop: "10px",
                width: "100%",
              }}
            >
              {" "}
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "1rem",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <Skeleton variant="circular" width={40} height={40} />
                <Skeleton variant="text" width={"70%"} />
              </div>
            </div>
          </CustomContainer>
          <CustomContainer>
            <Skeleton variant="rectangular" width={"100%"} height={"173px"} />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                paddingLeft: "10px",
                paddingRight: "1rem",
                paddingTop: "0.5rem",
                justifyContent: "space-between",
                marginTop: "10px",
                width: "100%",
              }}
            >
              {" "}
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "1rem",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <Skeleton variant="circular" width={40} height={40} />
                <Skeleton variant="text" width={"70%"} />
              </div>
            </div>
          </CustomContainer>
          <CustomContainer>
            <Skeleton variant="rectangular" width={"100%"} height={"173px"} />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                paddingLeft: "10px",
                paddingRight: "1rem",
                paddingTop: "0.5rem",
                justifyContent: "space-between",
                marginTop: "10px",
                width: "100%",
              }}
            >
              {" "}
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "1rem",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <Skeleton variant="circular" width={40} height={40} />
                <Skeleton variant="text" width={"70%"} />
              </div>
            </div>
          </CustomContainer>
          <CustomContainer>
            <Skeleton variant="rectangular" width={"100%"} height={"173px"} />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                paddingLeft: "10px",
                paddingRight: "1rem",
                paddingTop: "0.5rem",
                justifyContent: "space-between",
                marginTop: "10px",
                width: "100%",
              }}
            >
              {" "}
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "1rem",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <Skeleton variant="circular" width={40} height={40} />
                <Skeleton variant="text" width={"70%"} />
              </div>
            </div>
          </CustomContainer>
        </CustomDiv>
      ) : (
        <CustomDiv>
          {data?.map((item: any) => (
            <CustomContainer key={Math.random()}>
              <img
                src={item.image_url}
                style={{
                  height: "173px",
                  borderRadius: "16.7039px 16.7039px 0px 0px",
                  width: "100%",
                }}
              />
              <div
                style={{
                  marginTop: "-45px",
                  display: "flex",
                  justifyContent: "end",
                  marginRight: "10px",
                }}
              >
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    background: "#F7F7F7",
                    borderRadius: "50px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Checkbox
                    {...label}
                    onChange={() => {
                      console.log("you liked the resulte", item?.id);
                    }}
                    icon={
                      <FavoriteBorder
                        sx={{ fontSize: "20px", color: "#34A422" }}
                      />
                    }
                    checkedIcon={
                      <Favorite sx={{ fontSize: "20px", color: "red" }} />
                    }
                  />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  paddingLeft: "10px",
                  paddingRight: "1rem",
                  paddingTop: "0.5rem",
                  justifyContent: "space-between",
                  marginTop: "10px",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "1rem",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Avatar
                    /* src={item?.profile_photo_path} */ src={item.image_url}
                  />
                  <div>
                    <Typography
                      sx={{
                        fontWeight: 600,
                        fontSize: "1rem",
                        fontFamily: "DM Sans",
                        color: "#303030",
                      }}
                    >
                      {item?.name}
                    </Typography>
                    <Typography
                      sx={{
                        fontWeight: 300,
                        fontSize: "0.9rem",
                        color: " #747582",
                        fontFamily: "DM Sans",
                      }}
                    >
                      {item?.type}
                    </Typography>
                  </div>
                </div>
                <Typography
                  sx={{
                    fontWeight: 700,
                    fontSize: "1.2rem",
                    color: "#34A422",
                    fontFamily: "DM Sans",
                  }}
                >
                  $ {item?.price}
                </Typography>
              </div>
            </CustomContainer>
          ))}
        </CustomDiv>
      )}
    </div>
  );
}
