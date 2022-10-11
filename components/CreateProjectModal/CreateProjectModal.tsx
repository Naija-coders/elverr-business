import React from "react";
import {
  Box,
  Fade,
  Modal,
  IconButton,
  Paper,
  Typography,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import {
  CustomDiv,
  CustomLabel,
  CustomHeader,
  CustomLabelText,
  StyledTextField,
} from "./styles";
import CloseIcon from "@mui/icons-material/Close";
import dynamic from "next/dynamic";
import { EditorProps } from "react-draft-wysiwyg";

// install @types/draft-js @types/react-draft-wysiwyg and @types/draft-js @types/react-draft-wysiwyg for types

const Editor = dynamic<EditorProps>(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import { EditorState } from "draft-js";
type Props = {
  OpenModalForm: any;
  CloseModalForm: any;
};
export const CreateProjectModal: React.FC<Props> = ({
  CloseModalForm,
  OpenModalForm,
}) => {
  const [editors, setEditors] = React.useState<any>(EditorState.createEmpty());

  const onEditorStateChange = (editorState: EditorState) => {
    setEditors(editorState);
  };

  return (
    <Modal
      open={OpenModalForm}
      onClose={CloseModalForm}
      aria-labelledby="modal-create-project"
      aria-describedby="create project for elverr business"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: 305, md: 670 },
          height: "700px",

          overflowY: "scroll",

          outline: 0,
        }}
      >
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
            <CustomHeader>Create a new project</CustomHeader>
            <CustomLabel>
              <CustomLabelText>Project title</CustomLabelText>
              <StyledTextField size="small" />
            </CustomLabel>
            <CustomLabel>
              {" "}
              <CustomLabelText>Describe your project brief</CustomLabelText>
              <Editor
                editorState={editors}
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName"
                onEditorStateChange={onEditorStateChange}
              />
            </CustomLabel>
            <CustomLabel>
              <CustomLabelText>
                What type of skills are you looking for?
              </CustomLabelText>
              <div style={{ display: "flex" }}>
                <FormControlLabel
                  value="start"
                  control={
                    <Checkbox
                      sx={{
                        "color": "#747582",
                        "&.Mui-checked": {
                          color: "green",
                        },
                      }}
                    />
                  }
                  label="Remote"
                  labelPlacement="end"
                />{" "}
                <FormControlLabel
                  value="start"
                  control={
                    <Checkbox
                      sx={{
                        "color": "#747582",
                        "&.Mui-checked": {
                          color: "green",
                        },
                      }}
                    />
                  }
                  label="On-site"
                  labelPlacement="end"
                />
              </div>
            </CustomLabel>
            <CustomLabel>
              <CustomLabelText>Category</CustomLabelText>
              <TextField sx={{ width: "50%" }} select size="small" />
            </CustomLabel>
            <CustomLabel>
              <CustomLabelText>Whats your budget</CustomLabelText>
              <TextField sx={{ width: "50%" }} size="small" />
            </CustomLabel>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "end",
              }}
            >
              <Button
                variant="contained"
                disableElevation
                sx={{
                  textTransform: "none",
                  background: "#34A422",
                  fontFamily: "Inter",
                  fontSize: "0.9rem",
                  width: "30%",
                  borderRadius: "8px",
                }}
              >
                {" "}
                Submit
              </Button>
            </div>
          </CustomDiv>
          <br></br>
        </Paper>
      </Box>
    </Modal>
  );
};
