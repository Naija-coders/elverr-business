import { TextField } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment } from "@mui/material";
import { StyledTextField } from "./styles";

type Props = { placeholders: string };

export default function SearchTextField({ placeholders }: Props) {
  return (
    <StyledTextField
      size="small"
      autoFocus={true}
      placeholder={placeholders}
      InputProps={{
        endAdornment: (
          <InputAdornment position="start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18px"
              height="18px"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle
                cx="11.7666"
                cy="11.7666"
                r="8.98856"
                stroke="#334155"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18.0183 18.4851L21.5423 22"
                stroke="#334155"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </InputAdornment>
        ),
      }}
    ></StyledTextField>
  );
}
