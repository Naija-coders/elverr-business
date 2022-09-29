import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { StyledListItem, StyledListItemText } from "./styles";
type Props = {};

export default function RightSide({}: Props) {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
  };
  return (
    <div>
      <div
        style={{
          height: "100%",
          width: "170px",
          position: "fixed",

          background: "#FFFFFF",
          borderRight: "1px solid #EBEBEB",
          marginLeft: "-30px",
        }}
      >
        <List style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <StyledListItem disablePadding>
            <ListItemButton
              selected={selectedIndex === 0}
              onClick={(event) => handleListItemClick(event, 0)}
            >
              <div style={{ padding: "0rem 1rem" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18px"
                  height="18px"
                  viewBox="0 0 24 24"
                  fill="#34A422"
                >
                  <path d="M9.15722 20.7714V17.7047C9.1572 16.9246 9.79312 16.2908 10.581 16.2856H13.4671C14.2587 16.2856 14.9005 16.9209 14.9005 17.7047V17.7047V20.7809C14.9003 21.4432 15.4343 21.9845 16.103 22H18.0271C19.9451 22 21.5 20.4607 21.5 18.5618V18.5618V9.83784C21.4898 9.09083 21.1355 8.38935 20.538 7.93303L13.9577 2.6853C12.8049 1.77157 11.1662 1.77157 10.0134 2.6853L3.46203 7.94256C2.86226 8.39702 2.50739 9.09967 2.5 9.84736V18.5618C2.5 20.4607 4.05488 22 5.97291 22H7.89696C8.58235 22 9.13797 21.4499 9.13797 20.7714V20.7714" />
                </svg>
              </div>

              <StyledListItemText>Home</StyledListItemText>
            </ListItemButton>
          </StyledListItem>

          <StyledListItem disablePadding>
            <ListItemButton>
              <div style={{ padding: "0rem 1rem" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18px"
                  height="18px"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    cx="11.5789"
                    cy="7.27803"
                    r="4.77803"
                    fill="#200E32"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.00002 18.7014C3.99873 18.3655 4.07385 18.0337 4.2197 17.7311C4.67736 16.8158 5.96798 16.3307 7.03892 16.111C7.81128 15.9462 8.59431 15.836 9.38217 15.7815C10.8408 15.6533 12.3079 15.6533 13.7666 15.7815C14.5544 15.8367 15.3374 15.9468 16.1099 16.111C17.1808 16.3307 18.4714 16.77 18.9291 17.7311C19.2224 18.3479 19.2224 19.064 18.9291 19.6808C18.4714 20.6419 17.1808 21.0812 16.1099 21.2918C15.3384 21.4634 14.5551 21.5766 13.7666 21.6304C12.5794 21.7311 11.3866 21.7494 10.1968 21.6854C9.92221 21.6854 9.65677 21.6854 9.38217 21.6304C8.59663 21.5773 7.81632 21.4641 7.04807 21.2918C5.96798 21.0812 4.68652 20.6419 4.2197 19.6808C4.0746 19.3747 3.99955 19.0401 4.00002 18.7014Z"
                    fill="#200E32"
                  />
                </svg>
              </div>

              <StyledListItemText>Profile</StyledListItemText>
            </ListItemButton>
          </StyledListItem>

          <StyledListItem disablePadding>
            <ListItemButton>
              <div style={{ padding: "0rem 1rem" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18px"
                  height="18px"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.9394 3C18.2804 3 19.5704 3.53 20.5194 4.481C21.4694 5.43 22.0004 6.71 22.0004 8.05V15.95C22.0004 18.74 19.7304 21 16.9394 21H7.0604C4.2694 21 2.0004 18.74 2.0004 15.95V8.05C2.0004 5.26 4.2594 3 7.0604 3H16.9394ZM18.5304 9.54L18.6104 9.46C18.8494 9.17 18.8494 8.75 18.5994 8.46C18.4604 8.311 18.2694 8.22 18.0704 8.2C17.8604 8.189 17.6604 8.26 17.5094 8.4L13.0004 12C12.4204 12.481 11.5894 12.481 11.0004 12L6.5004 8.4C6.1894 8.17 5.7594 8.2 5.5004 8.47C5.2304 8.74 5.2004 9.17 5.4294 9.47L5.5604 9.6L10.1104 13.15C10.6704 13.59 11.3494 13.83 12.0604 13.83C12.7694 13.83 13.4604 13.59 14.0194 13.15L18.5304 9.54Z"
                    fill="#200E32"
                  />
                </svg>
              </div>
              <StyledListItemText>Message</StyledListItemText>
            </ListItemButton>
          </StyledListItem>

          <StyledListItem disablePadding>
            <ListItemButton>
              <div style={{ padding: "0rem 1rem" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18px"
                  height="18px"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.4499 4.8802H16.5199C20.2099 4.8802 22.0099 6.8502 21.9999 10.8902V15.7602C21.9999 19.6202 19.6199 22.0002 15.7499 22.0002H8.2399C4.3899 22.0002 1.9999 19.6202 1.9999 15.7502V8.2402C1.9999 4.1002 3.8399 2.0002 7.4699 2.0002H9.0499C9.9809 1.9902 10.8499 2.4202 11.4199 3.1502L12.2999 4.3202C12.5799 4.6702 12.9999 4.8802 13.4499 4.8802ZM7.3699 15.2902H16.6299C17.0399 15.2902 17.3699 14.9502 17.3699 14.5402C17.3699 14.1202 17.0399 13.7902 16.6299 13.7902H7.3699C6.9499 13.7902 6.6199 14.1202 6.6199 14.5402C6.6199 14.9502 6.9499 15.2902 7.3699 15.2902Z"
                    fill="#200E32"
                  />
                </svg>
              </div>

              <StyledListItemText>Project</StyledListItemText>
            </ListItemButton>
          </StyledListItem>

          <StyledListItem disablePadding>
            <ListItemButton>
              <div style={{ padding: "0rem 1rem" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18px"
                  height="18px"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.761 12.001C19.761 12.8145 20.429 13.4764 21.25 13.4764C21.664 13.4764 22 13.8093 22 14.2195V16.8958C22 19.159 20.142 21 17.858 21H6.143C3.859 21 2 19.159 2 16.8958V14.2195C2 13.8093 2.336 13.4764 2.75 13.4764C3.572 13.4764 4.24 12.8145 4.24 12.001C4.24 11.2083 3.599 10.6118 2.75 10.6118C2.551 10.6118 2.361 10.5335 2.22 10.3938C2.079 10.2541 2 10.0648 2 9.86866L2.002 7.10514C2.002 4.84201 3.86 3 6.144 3H17.856C20.14 3 21.999 4.84201 21.999 7.10514L22 9.78245C22 9.97864 21.921 10.1689 21.781 10.3076C21.64 10.4473 21.45 10.5256 21.25 10.5256C20.429 10.5256 19.761 11.1875 19.761 12.001ZM14.252 12.648L15.431 11.5105C15.636 11.3143 15.707 11.025 15.618 10.7575C15.53 10.4899 15.3 10.2997 15.022 10.261L13.393 10.0252L12.664 8.5627C12.539 8.31102 12.285 8.15446 12.002 8.15347H12C11.718 8.15347 11.464 8.31003 11.337 8.56171L10.608 10.0252L8.982 10.26C8.701 10.2997 8.471 10.4899 8.382 10.7575C8.294 11.025 8.365 11.3143 8.569 11.5105L9.748 12.648L9.47 14.2562C9.422 14.5336 9.535 14.8091 9.765 14.9746C9.895 15.0667 10.046 15.1143 10.199 15.1143C10.316 15.1143 10.434 15.0855 10.542 15.0291L12 14.2701L13.455 15.0271C13.707 15.1608 14.006 15.14 14.235 14.9736C14.466 14.8091 14.579 14.5336 14.531 14.2562L14.252 12.648Z"
                    fill="#200E32"
                  />
                </svg>
              </div>

              <StyledListItemText>Orders</StyledListItemText>
            </ListItemButton>
          </StyledListItem>
        </List>
      </div>
    </div>
  );
}
