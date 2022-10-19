import React, { useContext, useState } from "react";
import { CustomDiv } from "./styles";
import { MainBodyTypo, DescriptionText } from "../Banner/styles";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import axios from "axios";
import Clientapi from "../../pages/api/client";
import {
  CustomLabel,
  CustomHeader,
  CustomLabelText,
  StyledTextField,
  Checkboxlabel,
  FormTextField,
  CustomBox,
  StyleLoadingButton,
  CustomCheckbox,
} from "../CreateProjectModal/styles";
import { EditorState, convertToRaw } from "draft-js";
import dynamic from "next/dynamic";
import { EditorProps } from "react-draft-wysiwyg";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { RootState } from "../../state/reducers";
import {
  Modal,
  IconButton,
  Paper,
  Button,
  FormControlLabel,
  MenuItem,
  FormHelperText,
} from "@mui/material";
import { currency, NGN, EUR, USD, GBP, INR } from "./jsonfile";

import { actionCreators } from "../../state";
import { Dispatch } from "redux";
import draftToHtml from "draftjs-to-html";
import ReactHtmlParser from "react-html-parser";
const Editor = dynamic<EditorProps>(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);
interface IAppProps {}

const PostingForm: React.FunctionComponent<IAppProps> = (props) => {
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

  return (
    <CustomDiv>
      <div
        style={{
          marginTop: "170px",
          gap: "1.5rem",
          display: "flex",
          flexDirection: "column",
          padding: "2rem 3rem",
          width: "100%",
        }}
      >
        <CustomHeader>Describe your role</CustomHeader>
        <CustomLabel>
          <CustomLabelText>Job title*</CustomLabelText>
          <StyledTextField />
        </CustomLabel>
        <CustomLabel>
          <CustomLabelText>Job description*</CustomLabelText>
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
          {carriedouterror && (
            <FormHelperText error>
              {" "}
              Please select how you want your project to be carried
            </FormHelperText>
          )}
        </CustomLabel>
        <CustomLabel>
          <CustomLabelText>Category*</CustomLabelText>
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
            <FormHelperText error>Please enter your budget</FormHelperText>
          )}
        </CustomLabel>
        <CustomLabel>
          <CustomLabelText>Standard delivery time*</CustomLabelText>
          <FormTextField select />
        </CustomLabel>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            padding: "2rem",
          }}
        ></div>
      </div>
    </CustomDiv>
  );
};

export default PostingForm;
