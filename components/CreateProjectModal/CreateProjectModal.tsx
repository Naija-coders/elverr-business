import React, { useContext, useState } from "react";
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
  MenuItem,
  Select,
} from "@mui/material";
import Tagsinput from "./TagsInput";
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
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { RootState } from "../../state/reducers";
import Clientapi from "../../pages/api/client";

import { actionCreators } from "../../state";
import { Dispatch } from "redux";
// install @types/draft-js @types/react-draft-wysiwyg and @types/draft-js @types/react-draft-wysiwyg for types

const Editor = dynamic<EditorProps>(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import { EditorState } from "draft-js";
import TagsInput from "./TagsInput";
type Props = {
  OpenModalForm: any;
  CloseModalForm: any;
};
export const CreateProjectModal: React.FC<Props> = ({
  CloseModalForm,
  OpenModalForm,
}) => {
  const [editors, setEditors] = React.useState<any>(EditorState.createEmpty());
  const state = useSelector((state: RootState) => state.appstate);
  const [category, setcategory] = useState<any>(state.categories);
  const dispatch: Dispatch<any> = useDispatch();
  const { storecategory } = bindActionCreators(actionCreators, dispatch);
  let servicedata;
  React.useEffect(() => {
    servicedata = Clientapi.get("api/Categories").then((response: any) => {
      console.log("checking userservice response", response);
      storecategory(response.data);
      console.log("confirmation of the state ", state);

      console.log("checking the category state", state.categories);
    });
  }, [servicedata]);

  const onEditorStateChange = (editorState: EditorState) => {
    setEditors(editorState);
  };
  const [checked, setChecked] = React.useState([true, false]);
  const [onsite, setOnsite] = React.useState(false);

  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, event.target.checked]);
  };
  function handleSelecetedTags(items: any) {
    console.log("checking selected tags", items);
  }
  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, !event.target.checked]);
    console.log("this is remote");
    setOnsite(false);
  };
  const handleCategoriesChanges = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    console.log("value is", event.target.value);
  };
  const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([!event.target.checked, event.target.checked]);
    console.log("this is on-site");
    setOnsite(true);
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
                  How do you want your project to be carried out?
                </CustomLabelText>
                <div style={{ display: "flex", marginTop: "-8px" }}>
                  <FormControlLabel
                    value="start"
                    control={
                      <CustomCheckbox
                        checked={checked[0]}
                        onChange={handleChange2}
                        size="small"
                      />
                    }
                    label={<Checkboxlabel>Remote</Checkboxlabel>}
                    labelPlacement="end"
                  />{" "}
                  <FormControlLabel
                    value="start"
                    control={
                      <CustomCheckbox
                        checked={checked[1]}
                        onChange={handleChange3}
                        size="small"
                      />
                    }
                    label={<Checkboxlabel>{"On-Site"}</Checkboxlabel>}
                    labelPlacement="end"
                  />
                </div>
              </CustomLabel>
              {onsite && (
                <CustomLabel>
                  <CustomLabelText>Location</CustomLabelText>
                  <FormTextField select size="small" />
                </CustomLabel>
              )}
              <CustomLabel>
                <CustomLabelText>Category</CustomLabelText>
                <FormTextField
                  select
                  size="small"
                  onChange={handleCategoriesChanges}
                  SelectProps={{
                    MenuProps: {
                      PaperProps: {
                        sx: {
                          background: "green",
                          maxHeight: "150px",
                          color: "white",
                        },
                      },
                    },
                  }}
                >
                  {category.map((data: any) => (
                    <MenuItem key={data?.id} value={data?.id}>
                      {data?.type}
                    </MenuItem>
                  ))}
                </FormTextField>
              </CustomLabel>{" "}
              <CustomLabel>
                <CustomLabelText>Sub Category</CustomLabelText>
                <TagsInput
                  selectedTags={handleSelecetedTags}
                  fullWidth
                  variant="outlined"
                  id="tags"
                  name="tags"
                  placeholder="Enter subcategories here.."
                />
              </CustomLabel>
              <CustomLabel sx={{ marginTop: "10px" }}>
                <CustomLabelText>Whats your budget</CustomLabelText>
                <div style={{ display: "flex", gap: "1%" }}>
                  {" "}
                  <FormTextField
                    sx={{ width: "10%" }}
                    select
                    size="small"
                  />{" "}
                  <FormTextField sx={{ width: "39%" }} size="small" />
                </div>
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
