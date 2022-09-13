import React from "react";
import { CustomImage } from "./styles";

type Props = {};

export default function Banner({}: Props) {
  return (
    <CustomImage
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(95, 84, 84, 0) -42.37%, #000000 100%),url("banner.jpeg")`,
        backgroundSize: "100% 137%",
        backgroundRepeat: "no-repeat",

        backgroundPosition: "center",
      }}
    >
      <div> </div>
    </CustomImage>
  );
}
