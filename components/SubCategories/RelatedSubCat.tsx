import React from "react";
import Navbar from "../Navbar/Navbar";
import {
  CustomDivServices,
  CustomContainerItServices,
  CustomFlex,
  CustomTypography,
  CustomTypographyHeader,
  CustomButtonDiv,
} from "../CustomCard/styles";
import { StyledBox, StyleContainer } from "../NotLoggedIn/style";
import { useRouter } from "next/router";
import { ArrowForwardIos } from "@mui/icons-material";
import { StyledTypography, ContainerWrapperDiv } from "./styles";
import { Typography } from "@mui/material";
import { Link } from "@mui/material";
type Props = { title: any; related: any };

export default function RelatedSubCat({ title, related }: Props) {
  const route = useRouter();
  return (
    <div>
      <ContainerWrapperDiv>
        <div style={{ display: "flex", gap: "10px" }}>
          <CustomTypographyHeader> Related in </CustomTypographyHeader>
          <CustomTypographyHeader sx={{ color: "green" }}>
            {" "}
            {title}{" "}
          </CustomTypographyHeader>
        </div>
        <CustomTypography>
          Find the best agency on Elverr to suit your project needs
        </CustomTypography>
      </ContainerWrapperDiv>
      <CustomDivServices>
        {related?.map((data: any) => (
          <CustomContainerItServices key={Math.random()}>
            <CustomButtonDiv
              onClick={() => {
                route.push(data?.link);
              }}
            >
              <Typography>{data?.name}</Typography>
              <ArrowForwardIos sx={{ fontSize: "0.9rem" }} />
            </CustomButtonDiv>
          </CustomContainerItServices>
        ))}
        {/* <CustomContainerItServices>

          <CustomButtonDiv>
            <div>Graphic Design</div>
            <ArrowForwardIos sx={{ fontSize: "0.9rem" }} />
          </CustomButtonDiv>
        </CustomContainerItServices>
        <CustomContainerItServices>
          <CustomButtonDiv>
            Digital Marketing
            <ArrowForwardIos sx={{ fontSize: "0.9rem" }} />
          </CustomButtonDiv>
        </CustomContainerItServices>
        <CustomContainerItServices>
          <CustomButtonDiv>
            Writing & Translation
            <ArrowForwardIos sx={{ fontSize: "0.9rem" }} />
          </CustomButtonDiv>
        </CustomContainerItServices>
        <CustomContainerItServices>
          <CustomButtonDiv>
            Video & Animation
            <ArrowForwardIos sx={{ fontSize: "0.9rem" }} />
          </CustomButtonDiv>
        </CustomContainerItServices> */}
      </CustomDivServices>
    </div>
  );
}
