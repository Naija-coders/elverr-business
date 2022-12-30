import React from "react";
import { CustomDiv, CustomContainer } from "./styles";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {
  Avatar,
  Button,
  IconButton,
  Typography,
  Checkbox,
  Tooltip,
} from "@mui/material";
import { LightTools } from "../Navbar/styles";
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
    console.log("displaying the data for mano", data);
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
              <div>
                <img
                  src={item.image_url}
                  style={{
                    height: "173px",
                    borderRadius: "16.7039px 16.7039px 0px 0px",
                    border: "1px solid #d1d7dc",
                    backgroundColor: "#1c1d1f",
                    objectFit: "contain",
                    width: "100%",
                  }}
                />
              </div>
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
              <LightTools
                title={
                  <div
                    style={{
                      padding: "1rem",
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem",

                      width: "260px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "1rem",
                        alignItems: "center",
                      }}
                    >
                      <div>
                        {" "}
                        <Avatar src={item?.image_url} />
                      </div>{" "}
                      <div>
                        <Typography
                          style={{
                            fontWeight: 700,
                            fontSize: "1rem",
                            color: " #303030",
                            fontFamily: "DM Sans",
                          }}
                        >
                          {" "}
                          {item?.name}
                        </Typography>
                        <Typography
                          style={{
                            fontWeight: 300,
                            fontSize: "0.9rem",
                            color: " #747582",
                            fontFamily: "DM Sans",
                          }}
                        >
                          {item?.tag_name}
                        </Typography>
                      </div>
                    </div>
                    <div
                      style={{
                        background: "#F7F8F9",

                        borderRadius: "26px",
                        padding: "0.5rem",
                        width: "50%",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Typography
                        style={{
                          fontWeight: 300,
                          fontSize: "0.8rem",
                          color: " #747582",
                          fontFamily: "DM Sans",
                        }}
                      >
                        {item?.location_type}, {item?.location}
                      </Typography>
                    </div>
                    <Typography
                      style={{
                        fontWeight: 300,
                        fontSize: "0.9rem",
                        color: " #747582",
                        fontFamily: "DM Sans",
                      }}
                    >
                      {item?.pitch}
                    </Typography>

                    <Typography
                      style={{
                        fontWeight: 300,
                        fontSize: "0.9rem",
                        color: " #747582",
                        fontFamily: "DM Sans",
                      }}
                    >
                      Delivery Time: {item?.delivery_time}
                    </Typography>

                    <div
                      style={{ display: "flex", width: "100%", gap: "1rem" }}
                    >
                      <Button
                        variant={"contained"}
                        disableElevation
                        style={{
                          width: "70%",
                          borderRadius: "6px",
                          background: "#34A422",
                          textTransform: "none",
                        }}
                      >
                        {" "}
                        Read More
                      </Button>{" "}
                      <div>text</div>
                    </div>
                  </div>
                }
                placement="left-end"
              >
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
                    cursor: "pointer",
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
                    ${item?.price}
                  </Typography>
                </div>
              </LightTools>
            </CustomContainer>
          ))}
        </CustomDiv>
      )}
    </div>
  );
}
