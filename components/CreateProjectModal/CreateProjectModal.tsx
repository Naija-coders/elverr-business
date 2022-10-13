import React, { useContext, useState } from "react";
import {
  Modal,
  IconButton,
  Paper,
  Button,
  FormControlLabel,
  MenuItem,
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
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { RootState } from "../../state/reducers";
import Clientapi from "../../pages/api/client";

import { actionCreators } from "../../state";
import { Dispatch } from "redux";
// install @types/draft-js @types/react-draft-wysiwyg and @types/draft-js @types/react-draft-wysiwyg for types
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import ReactHtmlParser from "react-html-parser";
const Editor = dynamic<EditorProps>(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import { EditorState, convertToRaw } from "draft-js";
const currency = [
  {
    id: 0,
    currency: "NGN",
  },
  {
    id: 1,
    currency: "EUR",
  },
  {
    id: 2,
    currency: "USD",
  },
  {
    id: 3,
    currency: "GBP",
  },
  { id: 4, currency: "INR" },
];
const NGN = [
  {
    id: 0,
    currency: "Between ₦1,000 and ₦5,000",
  },
  {
    id: 1,
    currency: "Between ₦5,000 and ₦20,000",
  },
  {
    id: 2,
    currency: "Between ₦20,000 and ₦50,000",
  },
  {
    id: 3,
    currency: "Customize ",
  },
];
const EUR = [
  {
    id: 0,
    currency: "Between €10 and €50 ",
  },
  {
    id: 1,
    currency: " Between €50 and €200 ",
  },
  {
    id: 2,
    currency: "Between €200 and €500 ",
  },
  {
    id: 3,
    currency: "Customize ",
  },
];
const USD = [
  {
    id: 0,
    currency: " Between $10 and $50",
  },
  {
    id: 1,
    currency: " Between $50 and $200",
  },
  {
    id: 2,
    currency: " Between $200 and $500",
  },
  {
    id: 3,
    currency: "Customize ",
  },
];
const GBP = [
  {
    id: 0,
    currency: " Between £10 and £50",
  },
  {
    id: 1,
    currency: "Between £50 and £200",
  },
  {
    id: 2,
    currency: "Between £200 and £500",
  },
  {
    id: 3,
    currency: "Customize",
  },
];
const INR = [
  {
    id: 0,
    currency: "Between ₹10 and ₹50 ",
  },
  {
    id: 1,
    currency: "Between ₹50 and ₹200 ",
  },
  {
    id: 2,
    currency: "Between ₹200 and ₹500",
  },
  {
    id: 3,
    currency: "Customize ",
  },
];
import TagsInput from "./TagsInput";
type Props = {
  OpenModalForm: any;
  CloseModalForm: any;
};
export const CreateProjectModal: React.FC<Props> = ({
  CloseModalForm,
  OpenModalForm,
}) => {
  const [editorState, setEditorState] = React.useState<any>(
    EditorState.createEmpty()
  );
  const state = useSelector((state: RootState) => state.appstate);
  const [category, setcategory] = useState<any>(state.categories);
  const [custombudget, setCustombudget] = useState(false);

  const dispatch: Dispatch<any> = useDispatch();
  const { storecategory } = bindActionCreators(actionCreators, dispatch);
  let servicedata;
  React.useEffect(() => {
    servicedata = Clientapi.get("api/Categories").then((response: any) => {
      console.log("checking userservice response", response);
      storecategory(response.data);
      setcategory(response.data);
      console.log("confirmation of the state ", state);

      console.log("checking the category state", state.categories);
    });
  }, [servicedata]);

  const onEditorStateChange = (editorState: EditorState) => {
    setEditorState(editorState);

    console.log(
      "editorState changes",
      draftToHtml(convertToRaw(editorState.getCurrentContent()))
    );
  };
  const [checked, setChecked] = React.useState([true, false]);
  const [onsite, setOnsite] = React.useState(false);

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
  const [naira, setNaira] = useState<any>("");
  const [dollars, setDollars] = useState<any>("");
  const [euros, setEuros] = useState<any>("");
  const [pounds, setPounds] = useState<any>("");
  const [india, setIndia] = useState<any>("");
  const [mycurrency, setMycurrency] = React.useState("USD");
  const handleCurrencyChanges = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setMycurrency(event.target.value);
    console.log("watching currency", event.target.value);
  };
  React.useEffect(() => {
    if (mycurrency.toString() == "NGN") {
      setNaira("this is naira");
      console.log(naira);
      setBudget(NGN);
    } else if (mycurrency.toString() === "GBP") {
      setPounds("this is pounds");
      setBudget(GBP);
      console.log(pounds);
    } else if (mycurrency.toString() === "EUR") {
      setEuros("this is euros");
      console.log(euros);
      setBudget(EUR);
    } else if (mycurrency.toString() === "USD") {
      setDollars("this is usd");
      console.log(dollars);
      setBudget(USD);
    } else if (mycurrency.toString() === "INR") {
      setIndia("this is india");
      console.log(india);
      setBudget(INR);
    }
  });

  const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([!event.target.checked, event.target.checked]);
    console.log("this is on-site");
    setOnsite(true);
  };
  const [budget, setBudget] = useState(USD);
  const [budgetval, setBudgetval] = useState("");
  const handleBudgetChanges = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("the event is", event.target.value);
    setBudgetval(event.target.value);
  };

  //displaying the editor state in dom form
  const DisplayEditorState = () => {
    const userdraft = draftToHtml(
      convertToRaw(editorState.getCurrentContent())
    );

    return <>{ReactHtmlParser(userdraft)}</>;
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
                {" "}
                <CustomLabelText>Describe your project brief</CustomLabelText>
                <Editor
                  editorState={editorState}
                  toolbarClassName="toolbarClassName"
                  wrapperClassName="wrapperClassName"
                  editorClassName="editorClassName"
                  onEditorStateChange={onEditorStateChange}
                  placeholder={
                    "e.g. A business platform needs a Customer Success Manager to help them scale their checkout product and focus mainly on onboarding new customers and resolving complaints."
                  }
                />
              </CustomLabel>
              <CustomLabel sx={{ marginTop: "10px" }}>
                <CustomLabelText>Whats your budget</CustomLabelText>
                <div style={{ display: "flex", gap: "1%" }}>
                  {" "}
                  <FormTextField
                    select
                    size="small"
                    value={mycurrency}
                    onChange={handleCurrencyChanges}
                    sx={{ width: "30%" }}
                    SelectProps={{
                      MenuProps: {
                        PaperProps: {
                          sx: {
                            background: "green",
                            maxHeight: "70px",
                            color: "white",
                          },
                        },
                      },
                    }}
                  >
                    {currency.map((data: any) => (
                      <MenuItem key={data?.id} value={data?.currency}>
                        {data?.currency}
                      </MenuItem>
                    ))}
                  </FormTextField>
                  <FormTextField
                    value={budgetval}
                    onChange={handleBudgetChanges}
                    select
                    sx={{ width: "39%" }}
                    SelectProps={{
                      MenuProps: {
                        PaperProps: {
                          sx: {
                            background: "green",
                            maxHeight: "70px",
                            color: "white",
                          },
                        },
                      },
                    }}
                    size="small"
                  >
                    {budget.map((data: any) => (
                      <MenuItem key={data?.id} value={data?.currency}>
                        {data?.currency}
                      </MenuItem>
                    ))}
                  </FormTextField>
                </div>
              </CustomLabel>
              {custombudget && (
                <CustomLabel>
                  <CustomLabelText>Minimum Bugdet</CustomLabelText>
                  <FormTextField size="small" />
                  <CustomLabelText>Maximum Bugdet</CustomLabelText>
                  <FormTextField size="small" />
                </CustomLabel>
              )}
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "end",
                  marginTop: "5px",
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
          {/* <DisplayEditorState /> */}
        </Paper>
      </CustomBox>
    </Modal>
  );
};
