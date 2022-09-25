import React from "react";
import { useState, useEffect, useContext } from "react";
/* import Clientapi from "../../pages/api/client";
import StateContext from "../../context/StateContext";
import DispatchContext from "../../context/DispatchContext"; */
import { Box, Fade, Modal, IconButton, Paper, Typography } from "@mui/material";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
/* import { addArticle } from "../../store/actions/actionCreators";
import { Dispatch } from "redux"; */

import Signin from "./SignUp";

import CloseIcon from "@mui/icons-material/Close";
// make login reusable

type Props = {
  OpenModalForm: any;
  CloseModalForm: any;
  isSignup?: boolean;
};

export const LoginModal: React.FC<Props> = ({
  CloseModalForm,
  OpenModalForm,
  isSignup,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <Modal
      open={OpenModalForm}
      onClose={CloseModalForm}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: 305, md: 370 },

          borderRadius: "25px",
          outline: 0,
        }}
      >
        <Paper style={{ borderRadius: "25px" }}>
          <IconButton
            onClick={CloseModalForm}
            sx={{ position: "absolute", right: "5%" }}
          >
            <CloseIcon />
          </IconButton>

          <Signin />
        </Paper>
      </Box>
    </Modal>
  );
};
