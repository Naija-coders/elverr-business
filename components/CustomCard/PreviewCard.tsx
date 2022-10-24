import * as React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../state/reducers";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Avatar, Button, IconButton, Typography } from "@mui/material";
interface IAppProps {}

const PreviewCard: React.FunctionComponent<IAppProps> = (props) => {
  const state = useSelector((state: RootState) => state.appstate);
  const [previewstate, setPreviewstate] = React.useState<any>([
    state.previewedservices,
  ]);

  return (
    <>
      {previewstate?.map((item: any) => (
        <div
          key={Math.random()}
          style={{
            width: "300px",
            position: "relative",
          }}
        >
          <img
            style={{
              width: "280px",
              height: "150px",
              borderRadius: "18.7065px 18.7065px 0px 0px",
            }}
            src={item?.image_url}
          />
          <div
            style={{
              marginTop: "-45px",
              display: "flex",
              justifyContent: "end",
              marginRight: "30px",
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
              <FavoriteBorderIcon sx={{ fontSize: "20px", color: "#34A422" }} />
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
              <Avatar src={item?.profile_photo_path} />
              <div>
                <Typography
                  sx={{
                    fontWeight: 500,
                    fontSize: "0.8rem",
                    color: "#303030",
                    fontFamily: "DM Sans",
                  }}
                >
                  {state.user?.name}
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 300,
                    fontSize: "0.9rem",
                    color: "#303030",
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
                fontSize: "0.95rem",
                color: "#34A422",
                fontFamily: "DM Sans",
                marginRight: "10px",
              }}
            >
              $ {item?.price}
            </Typography>
          </div>
        </div>
      ))}
    </>
  );
};

export default PreviewCard;
