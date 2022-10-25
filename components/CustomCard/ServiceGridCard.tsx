import React from "react";
import { CustomDiv, CustomContainer } from "./styles";
type Props = {
  data: any;
};

export default function ServiceGridCard({ data }: Props) {
  return (
    <div>
      <CustomDiv>
        {data?.map((item: any) => (
          <CustomContainer>
            <img
              src={item.image_url}
              style={{ height: "173.px", width: "100%" }}
            />
          </CustomContainer>
        ))}
      </CustomDiv>
    </div>
  );
}
