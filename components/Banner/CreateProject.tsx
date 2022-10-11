import { Button } from "@mui/material";
import React from "react";
import { StyledBox, StyleContainer } from "../NotLoggedIn/style";
import { MainBodyTypo, DescriptionText } from "./styles";
import { CreateProjectModal } from "../CreateProjectModal/CreateProjectModal";
import { useRouter } from "next/router";

type Props = {};

export default function CreateProject({}: Props) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const route = useRouter();
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <StyledBox>
      <StyleContainer>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",

            width: "100%",
          }}
        >
          <div
            style={{
              width: "40%",
              display: "flex",
              flexDirection: "column",
              gap: "0.8rem",
            }}
          >
            <MainBodyTypo>Need a team for your project?</MainBodyTypo>
            <DescriptionText>
              Get access to our community of Independent skilled workers earning
              a living while executing and delivering your projects for you.
            </DescriptionText>
            <Button
              onClick={handleOpen}
              variant="contained"
              sx={{
                "background": "#34A422",
                "textTransform": "none",
                "fontFamily": "DM Sans",
                "maxWidth": { md: "50%", lg: "40%" },
                "width": "100%",
                "&:hover": {
                  background: "#34A422",
                },
              }}
            >
              {" "}
              + Create Project
            </Button>
          </div>
          <div style={{ width: "45%" }}>
            <img
              style={{ width: "100%" }}
              src="https://res.cloudinary.com/dxsmdvaqq/image/upload/v1665036398/podcast.png"
            />
          </div>
        </div>
      </StyleContainer>
      <CreateProjectModal OpenModalForm={open} CloseModalForm={handleClose} />
    </StyledBox>
  );
}
