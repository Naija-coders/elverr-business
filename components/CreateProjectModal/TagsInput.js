import React, { useEffect } from "react";
import PropTypes from "prop-types";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import Downshift from "downshift";
import ClearIcon from "@mui/icons-material/Clear";
import { TextField, Box, Chip, Typography } from "@mui/material";
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

export default function TagsInput({ ...props }) {
  const { selectedTags, placeholder, tags, ...other } = props;
  const [inputValue, setInputValue] = React.useState("");
  const [selectedItem, setSelectedItem] = React.useState([]);
  useEffect(() => {
    setSelectedItem(tags);
  }, [tags]);
  useEffect(() => {
    selectedTags(selectedItem);
  }, [selectedItem, selectedTags]);

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      const newSelectedItem = [...selectedItem];
      const duplicatedValues = newSelectedItem.indexOf(
        event.target.value.trim()
      );

      if (duplicatedValues !== -1) {
        setInputValue("");
        return;
      }
      if (!event.target.value.replace(/\s/g, "").length) return;

      newSelectedItem.push(event.target.value.trim());
      setSelectedItem(newSelectedItem);
      setInputValue("");
    }
    if (
      selectedItem.length &&
      !inputValue.length &&
      event.key === "Backspace"
    ) {
      setSelectedItem(selectedItem.slice(0, selectedItem.length - 1));
    }
  }
  function handleChange(item) {
    let newSelectedItem = [...selectedItem];
    if (newSelectedItem.indexOf(item) === -1) {
      newSelectedItem = [...newSelectedItem, item];
    }
    setInputValue("");
    setSelectedItem(newSelectedItem);
  }

  const handleDelete = (item) => () => {
    const newSelectedItem = [...selectedItem];
    newSelectedItem.splice(newSelectedItem.indexOf(item), 1);
    setSelectedItem(newSelectedItem);
  };

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }
  return (
    <React.Fragment>
      <Downshift
        id="downshift-multiple"
        inputValue={inputValue}
        onChange={handleChange}
        selectedItem={selectedItem}
      >
        {({ getInputProps }) => {
          const { onBlur, onChange, onFocus, ...inputProps } = getInputProps({
            onKeyDown: handleKeyDown,
            placeholder,
          });
          return (
            <div>
              <FormTextField
                variant="outlined"
                size={"small"}
                sx={{
                  "minWidth": "100%",
                  "height": "100%",
                  "& .MuiInputBase-root": {
                    height: "100%",
                    width: "100%",
                    borderRadius: " 8.4585px",

                    border: " 1px solid #D0D5DD",
                    /* Shadow / xs */
                    paddingLeft: "1rem",
                    boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
                  },
                }}
                InputProps={{
                  startAdornment: (
                    <Box
                      sx={{
                        minWidth: "1%",
                        display: "flex",

                        flexWrap: "wrap",
                        listStyle: "none",
                        p: 0.5,
                        gap: "10px",
                        m: 0,
                      }}
                    >
                      {" "}
                      {selectedItem.map((item) => (
                        <Chip
                          sx={{
                            gap: "4px",
                            background: "white",

                            border: " 1px solid #D0D5DD",
                          }}
                          key={item}
                          tabIndex={-1}
                          deleteIcon={<ClearIcon sx={{ fontSize: 4 }} />}
                          label={
                            <Typography sx={{ fontSize: "0.8rem" }}>
                              {item}
                            </Typography>
                          }
                          onDelete={handleDelete(item)}
                        />
                      ))}
                    </Box>
                  ),
                  onBlur,
                  onChange: (event) => {
                    handleInputChange(event);
                    onChange(event);
                  },
                  onFocus,
                }}
                {...other}
                {...inputProps}
              />
            </div>
          );
        }}
      </Downshift>
    </React.Fragment>
  );
}
TagsInput.defaultProps = {
  tags: [],
};
TagsInput.propTypes = {
  selectedTags: PropTypes.func.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
};
