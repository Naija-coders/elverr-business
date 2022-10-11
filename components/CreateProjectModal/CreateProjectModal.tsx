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
  Checkboxlabel,
  FormTextField,
  CustomBox,
  CustomCheckbox,
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
          <form>
            <CustomDiv>
              <CustomHeader>Create a new project</CustomHeader>
              <CustomLabel>
                <CustomLabelText>Project title</CustomLabelText>
                <StyledTextField size="small" placeholder={"Web Developer"} />
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
                  placeholder={
                    "e.g. A business platform needs a Customer Success Manager to help them scale their checkout product and focus mainly on onboarding new customers and resolving complaints."
                  }
                />
              </CustomLabel>
              <CustomLabel>
                <CustomLabelText>
                  What type of skills are you looking for?
                </CustomLabelText>
                <div style={{ display: "flex", marginTop: "-8px" }}>
                  <FormControlLabel
                    value="start"
                    control={<CustomCheckbox size="small" />}
                    label={<Checkboxlabel>Remote</Checkboxlabel>}
                    labelPlacement="end"
                  />{" "}
                  <FormControlLabel
                    value="start"
                    control={<CustomCheckbox size="small" />}
                    label={<Checkboxlabel>{"On-Site"}</Checkboxlabel>}
                    labelPlacement="end"
                  />
                </div>
              </CustomLabel>
              <CustomLabel>
                <CustomLabelText>Category</CustomLabelText>
                <FormTextField select size="small" />
              </CustomLabel>
              <CustomLabel sx={{ marginTop: "10px" }}>
                <CustomLabelText>Whats your budget</CustomLabelText>
                <FormTextField size="small" />
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
                  Confirm
                </Button>
              </div>
            </CustomDiv>
          </form>
          <br></br>
        </Paper>
      </CustomBox>
    </Modal>
  );
};
