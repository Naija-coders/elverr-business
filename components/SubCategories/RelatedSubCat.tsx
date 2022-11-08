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

import { StyledTypography, ContainerWrapperDiv } from "./styles";

type Props = { title: any };

export default function RelatedSubCat({ title }: Props) {
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
    </div>
  );
}
