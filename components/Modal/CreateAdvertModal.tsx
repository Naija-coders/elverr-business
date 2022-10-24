import React, { useContext, useEffect, useState } from "react";
import {
  Modal,
  IconButton,
  Paper,
  Button,
  FormControlLabel,
  MenuItem,
  FormHelperText,
  Snackbar,
} from "@mui/material";
import axios, { AxiosError } from "axios";
import {
  CustomDiv,
  CustomLabel,
  CustomHeader,
  CustomLabelText,
  StyledTextField,
  Checkboxlabel,
  FormTextField,
  CustomBox,
  StyleLoadingButton,
  CustomCheckbox,
} from "./styles";
import CloseIcon from "@mui/icons-material/Close";
import PreviewCard from "../CustomCard/PreviewCard";
import Clientapi from "../../pages/api/client";
import { useSelector } from "react-redux";
import { RootState } from "../../state/reducers";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { useRouter } from "next/router";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
type IAppProps = {
  OpenModalForm: any;
  CloseModalForm: any;
};

const CreateAdvertModal: React.FunctionComponent<IAppProps> = ({
  CloseModalForm,
  OpenModalForm,
}) => {
  const state = useSelector((state: RootState) => state.appstate);
  const [previewstate, setPreviewstate] = React.useState<any>([
    state.previewedservices,
  ]);
  const [loading, setLoading] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const route = useRouter();
  const handlePostPreview = () => {
    setLoading(true);
    Clientapi.post("api/serviceupdate", state.previewedservices)
      .then((response) => {
        console.log("response for this data is", response);
        setOpen(true);
        route.push("/dashboard");
        setLoading(false);
      })
      .catch((err: AxiosError) => {
        console.log("invalid data entered");
        setLoading(false);
      });
  };

  return (
    <>
      <Modal
        open={OpenModalForm}
        onClose={CloseModalForm}
        aria-labelledby="modal-create-project"
        aria-describedby="create advert for elverr business"
      >
        <CustomBox>
          <Paper
            sx={{
              paddingLeft: "3rem",
              paddingRight: "3rem",
            }}
          >
            <IconButton
              onClick={CloseModalForm}
              sx={{ position: "absolute", right: "5%" }}
            >
              <CloseIcon />
            </IconButton>
            <CustomDiv>
              <CustomHeader>Preview</CustomHeader>
              <div
                style={{
                  height: "500px",
                  background: "#FAFAFA",
                  borderRadius: "10px",
                  display: "flex",

                  justifyContent: "center",
                  justifyItems: "center",
                  alignItems: "center",
                }}
              >
                <PreviewCard />
              </div>
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "end",
                }}
              >
                {loading ? (
                  <StyleLoadingButton
                    loading={loading}
                    loadingPosition="end"
                    variant="contained"
                  >
                    Preview
                  </StyleLoadingButton>
                ) : (
                  <Button
                    variant="contained"
                    disableElevation
                    type="submit"
                    onClick={handlePostPreview}
                    sx={{
                      "textTransform": "none",
                      "background": "#34A422",
                      "fontFamily": "Inter",
                      "fontSize": "0.9rem",
                      "width": "20%",
                      "borderRadius": "8px",
                      "marginTop": "10px",
                      "&:hover": {
                        background: "#34A422",
                      },
                    }}
                  >
                    {" "}
                    Preview
                  </Button>
                )}
              </div>
              <br></br>
            </CustomDiv>
          </Paper>
        </CustomBox>
      </Modal>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="success"
          sx={{ width: "100%", background: "green", color: "white" }}
        >
          Your Ad has been successfully created.
        </Alert>
      </Snackbar>
    </>
  );
};

export default CreateAdvertModal;
