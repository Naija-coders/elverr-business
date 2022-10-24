import React, { useContext, useState } from "react";
import {
  Modal,
  IconButton,
  Paper,
  Button,
  FormControlLabel,
  MenuItem,
  FormHelperText,
} from "@mui/material";
import axios from "axios";

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
import { AxiosError, AxiosResponse } from "axios";
import dynamic from "next/dynamic";
import { EditorProps } from "react-draft-wysiwyg";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { RootState } from "../../state/reducers";
import Clientapi from "../../pages/api/client";
import { useForm } from "react-hook-form";

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
import { currency, NGN, EUR, USD, GBP, INR } from "./jsonfile";
import TagsInput from "./TagsInput";
import { PriceChange } from "@mui/icons-material";
import { useRouter } from "next/router";
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
  const [naira, setNaira] = useState<any>("");
  const [dollars, setDollars] = useState<any>("");
  const [euros, setEuros] = useState<any>("");
  const [pounds, setPounds] = useState<any>("");
  const [india, setIndia] = useState<any>("");
  const [mycurrency, setMycurrency] = React.useState("USD");
  const [checked, setChecked] = React.useState([true, false]);
  const [onsite, setOnsite] = React.useState(false);
  const [budget, setBudget] = useState(USD);
  const [budgetval, setBudgetval] = useState("");
  const [categoriesval, setCategoriesval] = useState("");
  const [tagsinp, setTagsinp] = useState("");
  const [locationproject, setLocationproject] = useState("");
  const [checkingpricing, setCheckingpricing] = useState("");
  const [loading, setLoading] = React.useState(false);
  const dispatch: Dispatch<any> = useDispatch();
  const { storecategory } = bindActionCreators(actionCreators, dispatch);

  let servicedata;
  const route = useRouter();
  const [titleerror, setTitleerror] = React.useState(false);
  const [categoryerror, setCategoryerror] = React.useState(false);
  const [skillerror, setSkillerror] = React.useState(false);
  const [carriedouterror, setCarriedouterror] = React.useState(false);
  const [overviewerror, setOverviewerror] = React.useState(false);
  const [budgeterror, setBudgeterror] = React.useState(false);
  const [minimumuerror, setMinimumerror] = React.useState(false);
  const [maximumerror, setMaximumerror] = React.useState(false);
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

  function handleSelecetedTags(items: any) {
    console.log("checking selected tags", items);
    setTagsinp(items);
  }

  const handleCategoriesChanges = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    console.log("value is", event.target.value);
    setCategoriesval(event.target.value);
  };

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

  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, !event.target.checked]);
    console.log("this is remote");
    setOnsite(false);
    setLocationproject("on-site");
  };
  const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([!event.target.checked, event.target.checked]);
    console.log("this is on-site");
    setOnsite(true);
    setLocationproject("remote");
  };

  const handleBudgetChanges = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("the event is", event.target.value);
    setBudgetval(event.target.value);
  };
  const [ip, setIp] = React.useState("");
  const getData = async () => {
    const res = await axios.get("https://geolocation-db.com/json/");
    console.log(res.data);
    setIp(res.data.country_name);
  };
  React.useEffect(() => {
    console.log("budget value is", budgetval);
    if (budgetval.toString() === "Customize") {
      setCustombudget(true);
    } else {
      setCustombudget(false);
    }
    getData();
  }, [budgetval]);

  //displaying the editor state in dom form
  const DisplayEditorState = () => {
    const userdraft = draftToHtml(
      convertToRaw(editorState.getCurrentContent())
    );

    return <>{ReactHtmlParser(userdraft)}</>;
  };
  //watching text changes

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data: any) => {
    if (checkingpricing.toString() === "Customize") {
      const custompricing = data.maximum + "-" + data.minimum;
      console.log("checking out the pricing value", custompricing);
      setCheckingpricing(custompricing.toString());
      console.log("checking out pricing state", checkingpricing);
    } else {
      setCheckingpricing(budgetval.toString());
      console.log("checking if its undefined", checkingpricing);
    }
    const datatyles = data.title;
    console.log("checking the project title", datatyles);

    const datas = {
      ...data,
      overview: draftToHtml(convertToRaw(editorState.getCurrentContent())),
      type: categoriesval,
      currency: mycurrency.toString(),
      price: checkingpricing.toString(),
      location_type: locationproject.toString(),
      location: ip.toString(),
      tag_name: tagsinp.toString(),
    };

    if (data.title.toString() === "") {
      setTitleerror(true);
    } else {
      setTitleerror(false);
    }
    /*     if (data?.minimum.toString() === "") {
      setMinimumerror(true);
    } else {
      setMinimumerror(false);
    }
    if (data?.maximum.toString() === "") {
      setMaximumerror(true);
    } else {
      setMaximumerror(false);
    }
 */
    if (
      draftToHtml(convertToRaw(editorState.getCurrentContent())) === "<p></p>\n"
    ) {
      setOverviewerror(true);
    } else {
      setOverviewerror(false);
    }
    if (categoriesval.toString() === "") {
      setCategoryerror(true);
    } else {
      setCategoryerror(false);
    }
    if (tagsinp.toString() === "") {
      setSkillerror(true);
    } else {
      setSkillerror(false);
    }
    if (locationproject.toString() === "") {
      setCarriedouterror(true);
    } else {
      setCarriedouterror(false);
    }
    if (checkingpricing.toString() === "") {
      setBudgeterror(true);
    } else {
      setBudgeterror(false);
    }

    if (
      checkingpricing.toString() !== "" &&
      mycurrency.toString() !== "" &&
      categoriesval !== "" &&
      locationproject.toString() !== "" &&
      ip.toString() !== "" &&
      tagsinp.toString() !== "" &&
      draftToHtml(convertToRaw(editorState.getCurrentContent())) !== "<p></p>\n"
    ) {
      setLoading(true);
      await Clientapi.post("api/projectupdate", datas)
        .then((response) => {
          console.log("response for this data is", response);
          setLoading(false);
          route.push("/dashboard");
        })
        .catch((err: AxiosError) => {
          console.log("invalid data entered");
          setLoading(false);
        });
    }
    console.log("the entered data below", datas);
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
          <div>
            <CustomDiv>
              <CustomHeader>Create a new project</CustomHeader>
              <CustomLabel>
                <CustomLabelText>Project Title</CustomLabelText>
                <StyledTextField
                  {...register("title", {})}
                  size="small"
                  placeholder={"Web Developer"}
                />
                {titleerror && (
                  <FormHelperText error>Please enter title</FormHelperText>
                )}
              </CustomLabel>
              <CustomLabel>
                <CustomLabelText>Category</CustomLabelText>
                <FormTextField
                  select
                  size="small"
                  onChange={handleCategoriesChanges}
                  required
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
                    <MenuItem key={data?.id} value={data?.type}>
                      {data?.type}
                    </MenuItem>
                  ))}
                </FormTextField>
              </CustomLabel>{" "}
              {categoryerror && (
                <FormHelperText error>Please enter category</FormHelperText>
              )}
              <CustomLabel>
                <CustomLabelText>
                  What skills are you interested in?
                </CustomLabelText>
                <TagsInput
                  selectedTags={handleSelecetedTags}
                  fullWidth
                  variant="outlined"
                  id="tags"
                  name="tags"
                  placeholder="Enter skills here.."
                />
              </CustomLabel>
              {skillerror && (
                <FormHelperText error>
                  {" "}
                  Please enter skills and click enter
                </FormHelperText>
              )}
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
                {carriedouterror && (
                  <FormHelperText error>
                    {" "}
                    Please select how you want your project to be carried
                  </FormHelperText>
                )}
              </CustomLabel>
              <CustomLabel>
                {" "}
                <CustomLabelText>Describe your project brief</CustomLabelText>
                <Editor
                  editorState={editorState}
                  toolbarClassName="toolbarClassName"
                  wrapperClassName="wrapperClassName"
                  editorClassName="editorClassName"
                  onEditorStateChange={onEditorStateChange}
                  toolbar={{
                    options: ["list", "textAlign", "colorPicker", "history"],
                  }}
                  placeholder={
                    "e.g. A business platform needs a Customer Success Manager to help them scale their checkout product and focus mainly on onboarding new customers and resolving complaints."
                  }
                />
                {overviewerror && (
                  <FormHelperText error>
                    Please enter an overview of your project
                  </FormHelperText>
                )}
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
                    sx={{ width: "37%" }}
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
                    sx={{ width: "37%" }}
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
                {budgeterror && (
                  <FormHelperText error>
                    Please enter your budget
                  </FormHelperText>
                )}
              </CustomLabel>
              {custombudget && (
                <CustomLabel>
                  <div style={{ display: "flex", gap: "1%" }}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                      }}
                    >
                      <CustomLabelText>Minimum Bugdet</CustomLabelText>
                      <FormTextField
                        placeholder="Enter minimum budget"
                        sx={{ width: "100%" }}
                        size="small"
                        type="number"
                        required
                        {...register("minimum", {
                          required: true,
                        })}
                      />
                      {minimumuerror && (
                        <FormHelperText error>
                          Please enter minimum budget
                        </FormHelperText>
                      )}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                      }}
                    >
                      <CustomLabelText>Maximum Bugdet</CustomLabelText>
                      <FormTextField
                        placeholder="Enter minimum budget"
                        type="number"
                        sx={{ width: "100%" }}
                        required
                        size="small"
                        {...register("maximum", {
                          required: true,
                        })}
                      />
                      {maximumerror && (
                        <FormHelperText error>
                          Please enter maximum budget
                        </FormHelperText>
                      )}
                    </div>
                  </div>
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
                {loading ? (
                  <StyleLoadingButton
                    loading={loading}
                    loadingPosition="end"
                    variant="contained"
                  >
                    Confirm
                  </StyleLoadingButton>
                ) : (
                  <Button
                    variant="contained"
                    disableElevation
                    type="submit"
                    onClick={handleSubmit(onSubmit)}
                    sx={{
                      "textTransform": "none",
                      "background": "#34A422",
                      "fontFamily": "Inter",
                      "fontSize": "0.9rem",
                      "width": "30%",
                      "borderRadius": "8px",
                      "marginTop": "10px",
                      "&:hover": {
                        background: "#34A422",
                      },
                    }}
                  >
                    {" "}
                    Confirm
                  </Button>
                )}
              </div>
            </CustomDiv>
          </div>
          <br></br>
          {/* <DisplayEditorState /> */}
        </Paper>
      </CustomBox>
    </Modal>
  );
};
