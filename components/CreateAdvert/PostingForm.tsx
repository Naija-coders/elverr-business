import React, { useContext, useState, useEffect } from "react";
import { CustomDiv } from "./styles";
import { MainBodyTypo, DescriptionText } from "../Banner/styles";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import axios, { AxiosError } from "axios";
import Clientapi from "../../pages/api/client";
import { useForm } from "react-hook-form";
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
import TagsInput from "../CreateProjectModal/TagsInput";
import {
  Modal,
  IconButton,
  Paper,
  Button,
  FormControlLabel,
  MenuItem,
  FormHelperText,
} from "@mui/material";
import { currency, NGN, EUR, USD, GBP, INR, Delivery_time } from "./jsonfile";

import { actionCreators } from "../../state";
import { Dispatch } from "redux";
import draftToHtml from "draftjs-to-html";
import ReactHtmlParser from "react-html-parser";

const imageMimeType = /image\/(png|jpg|jpeg)/i;
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
  const [deliverytime, setDeliverytime] = useState(Delivery_time);

  const [naira, setNaira] = useState<any>("");
  const [dollars, setDollars] = useState<any>("");
  const [euros, setEuros] = useState<any>("");
  const [pounds, setPounds] = useState<any>("");
  const [india, setIndia] = useState<any>("");
  const [mycurrency, setMycurrency] = React.useState("USD");
  const [checked, setChecked] = React.useState([true, false]);
  const [onsite, setOnsite] = React.useState(false);
  const [budget, setBudget] = useState(Delivery_time);
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
  const [file, setFile] = useState(null);
  const [fileDataURL, setFileDataURL] = useState();
  const [time, setTime] = useState("");

  const changeHandler = (e: any) => {
    const file = e.target.files[0];
    if (!file.type.match(imageMimeType)) {
      alert("Image mime type is not valid");
      return;
    }
    setFile(file);
  };
  useEffect(() => {
    let fileReader: any,
      isCancel = false;
    if (file) {
      fileReader = new FileReader();
      fileReader.onload = (e: any) => {
        const { result } = e.target;
        if (result && !isCancel) {
          setFileDataURL(result);
        }
      };
      fileReader.readAsDataURL(file);
    }
    return () => {
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    };
  }, [file]);
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
    /* if (mycurrency.toString() == "NGN") {
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
    } */
  });
  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, !event.target.checked]);
    console.log("this is remote");
    setOnsite(false);
    setLocationproject("remote");
  };
  const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([!event.target.checked, event.target.checked]);
    console.log("this is on-site");
    setOnsite(true);
    setLocationproject("on-site");
  };

  const handleBudgetChanges = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("the event is", event.target.value);
    setBudgetval(event.target.value);
  };
  const handleDeliverytimeChanges = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    console.log("the event is", event.target.value);
    setTime(event.target.value);
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
  }, [budgetval, locationproject]);

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
    const datas = {
      ...data,
      overview: draftToHtml(convertToRaw(editorState.getCurrentContent())),
      type: categoriesval,
      currency: mycurrency.toString(),
      location_type: locationproject.toString(),
      location: ip.toString(),
      tag_name: tagsinp.toString(),
      image_url: fileDataURL,
      delivery_time: time.toString(),
    };
    setLoading(true);
    await Clientapi.post("api/serviceupdate", datas)
      .then((response) => {
        console.log("response for this data is", response);
        setLoading(false);
      })
      .catch((err: AxiosError) => {
        console.log("invalid data entered");
        setLoading(false);
      });

    console.log("checking the data inserted", datas);
  };
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
          <CustomLabelText>Category*</CustomLabelText>
          <FormTextField
            select
            size="small"
            onChange={handleCategoriesChanges}
            required
            sx={{ width: "75%" }}
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
          <CustomLabelText>What skills are you interested in?</CustomLabelText>
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
              sx={{ width: "37%" }}
              size="small"
              placeholder="200"
              type="number"
              {...register("price", {})}
            />
          </div>
          {budgeterror && (
            <FormHelperText error>Please enter your budget</FormHelperText>
          )}
        </CustomLabel>
        <CustomLabel>
          <CustomLabelText>Standard delivery time*</CustomLabelText>
          <FormTextField
            select
            sx={{ width: "75%" }}
            onChange={handleDeliverytimeChanges}
          >
            {deliverytime.map((data: any) => (
              <MenuItem key={data?.id} value={data?.time}>
                {data?.time}
              </MenuItem>
            ))}
          </FormTextField>
        </CustomLabel>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            padding: "2rem",
            boxSizing: "border-box",

            border: "1px solid #D0D5DD",
            borderRadius: " 8px",
          }}
        >
          <CustomLabelText>Additional Information</CustomLabelText>{" "}
          <CustomLabel>
            <CustomLabelText>Pitch</CustomLabelText>
            <StyledTextField
              type="text"
              {...register("pitch", {})}
              placeholder={
                "eg. I will build a responsive website for your business from start to finish. "
              }
            />
          </CustomLabel>
          <CustomLabel>
            <CustomLabelText>Upload image</CustomLabelText>
            <input
              style={{ fontSize: "1rem" }}
              type="file"
              onChange={changeHandler}
            />
            {fileDataURL && <img src={fileDataURL} alt="preview" />}
          </CustomLabel>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "end",
            marginTop: "5px",
            gap: "1rem",
          }}
        >
          <Button
            variant="contained"
            disableElevation
            type="submit"
            sx={{
              "textTransform": "none",
              "background": "#FFFFFF",
              "fontFamily": "Inter",
              "fontSize": "0.9rem",
              "color": "black",
              "width": "20%",
              "borderRadius": "8px",
              "border": "1px #D0D5DD solid",
              "marginTop": "10px",
              "&:hover": {
                background: "#FFFFFF",
              },
            }}
          >
            {" "}
            Cancel
          </Button>

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
              onClick={handleSubmit(onSubmit)}
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
      </div>
    </CustomDiv>
  );
};

export default PostingForm;
