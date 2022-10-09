import * as React from "react";
import { StyledBox, StyleContainer } from "../NotLoggedIn/style";
import { MainBodyTypo, DescriptionText } from "../Banner/styles";
interface IAppProps {}

const RelatedCategories: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <StyledBox>
      <StyleContainer>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.8rem",
            width: "100%",
          }}
        >
          <MainBodyTypo>Related Categories</MainBodyTypo>
          <DescriptionText>
            Find the best talents on Elverr to suit your project needs.
          </DescriptionText>

          <div
            style={{
              display: "flex",
              gap: "1rem",
              width: "100% !important",
              marginTop: "10px",
            }}
          >
            <div
              style={{
                display: "flex",
                width: "50%",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: " 170px",
                  borderRadius: "10px",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "100% 150%",
                  backgroundPosition: "center",
                  backgroundImage: `url("https://res.cloudinary.com/dxsmdvaqq/image/upload/v1665258131/guysingroup_z3frna.jpg")`,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    height: "36px",
                    alignItems: "center",

                    flexDirection: "row",
                    marginTop: "134px",
                    background: "rgba(255, 255, 255, 0.2)",
                    borderRadius: "0px 0px 10px 10px",
                    justifyContent: "center",
                    gap: "2px",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="Iconly_Curved_Tick_Square"
                    data-name="Iconly/Curved/Tick Square"
                    width="0.7rem"
                    height="0.7rem"
                    viewBox="0 0 24 24"
                  >
                    <g id="Tick_Square" transform="translate(2 2)">
                      <path
                        id="Stroke_1"
                        d="M0,2.373,2.374,4.746,7.12,0"
                        transform="translate(6.44 7.627)"
                        fill="none"
                        stroke="#ffffff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                        strokeWidth="1.5"
                      />
                      <path
                        id="Stroke_2"
                        data-name="Stroke 2"
                        d="M0,9.25c0,6.937,2.313,9.25,9.25,9.25s9.25-2.313,9.25-9.25S16.187,0,9.25,0,0,2.313,0,9.25Z"
                        transform="translate(0.75 0.75)"
                        fill="none"
                        stroke="#ffffff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                        strokeWidth="1.5"
                      />
                    </g>
                  </svg>
                  <DescriptionText
                    sx={{ fontSize: "0.7rem", color: "#FFFFFF" }}
                  >
                    Get unlimited access to skilled freelancers level up your
                    worklife
                  </DescriptionText>
                </div>
              </div>

              <div
                style={{
                  width: "100%",
                  height: " 170px",

                  backgroundRepeat: "no-repeat",
                  backgroundSize: "100% 150%",
                  backgroundImage: `url("https://res.cloudinary.com/dxsmdvaqq/image/upload/v1665258213/blacksmith_zwzr5p.jpg")`,
                  borderRadius: "10px",

                  backgroundPosition: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    height: "36px",
                    alignItems: "center",

                    flexDirection: "row",
                    marginTop: "134px",
                    background: "rgba(255, 255, 255, 0.2)",
                    borderRadius: "0px 0px 10px 10px",
                    justifyContent: "center",
                    gap: "2px",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="Iconly_Curved_Tick_Square"
                    data-name="Iconly/Curved/Tick Square"
                    width="0.7rem"
                    height="0.7rem"
                    viewBox="0 0 24 24"
                  >
                    <g id="Tick_Square" transform="translate(2 2)">
                      <path
                        id="Stroke_1"
                        d="M0,2.373,2.374,4.746,7.12,0"
                        transform="translate(6.44 7.627)"
                        fill="none"
                        stroke="#ffffff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                        strokeWidth="1.5"
                      />
                      <path
                        id="Stroke_2"
                        data-name="Stroke 2"
                        d="M0,9.25c0,6.937,2.313,9.25,9.25,9.25s9.25-2.313,9.25-9.25S16.187,0,9.25,0,0,2.313,0,9.25Z"
                        transform="translate(0.75 0.75)"
                        fill="none"
                        stroke="#ffffff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                        strokeWidth="1.5"
                      />
                    </g>
                  </svg>
                  <DescriptionText
                    sx={{ fontSize: "0.7rem", color: "#FFFFFF" }}
                  >
                    Get unlimited access to skilled freelancers level up your
                    worklife
                  </DescriptionText>
                </div>
              </div>
            </div>

            <div
              style={{ width: "50%", height: " 350px", position: "relative" }}
            >
              <div
                style={{
                  width: "100%",
                  height: " 100%",

                  backgroundRepeat: "no-repeat",
                  backgroundSize: "100% 100%",
                  backgroundImage: `url("https://res.cloudinary.com/dxsmdvaqq/image/upload/v1665258204/itguys_wgb9tp.jpg")`,
                  borderRadius: "10px",
                  backgroundPosition: "center",
                }}
              >
                <div
                  style={{
                    height: "34px",
                    position: "absolute",
                    bottom: "0",
                    marginTop: "10px",
                    width: "100%",
                    display: "flex",
                    gap: "2px",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    background: "rgba(255, 255, 255, 0.2)",
                    borderRadius: "0px 0px 10px 10px",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="Iconly_Curved_Tick_Square"
                    data-name="Iconly/Curved/Tick Square"
                    width="0.7rem"
                    height="0.7rem"
                    viewBox="0 0 24 24"
                  >
                    <g id="Tick_Square" transform="translate(2 2)">
                      <path
                        id="Stroke_1"
                        d="M0,2.373,2.374,4.746,7.12,0"
                        transform="translate(6.44 7.627)"
                        fill="none"
                        stroke="#ffffff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                        strokeWidth="1.5"
                      />
                      <path
                        id="Stroke_2"
                        data-name="Stroke 2"
                        d="M0,9.25c0,6.937,2.313,9.25,9.25,9.25s9.25-2.313,9.25-9.25S16.187,0,9.25,0,0,2.313,0,9.25Z"
                        transform="translate(0.75 0.75)"
                        fill="none"
                        stroke="#ffffff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                        strokeWidth="1.5"
                      />
                    </g>
                  </svg>
                  <DescriptionText
                    align="center"
                    sx={{
                      fontSize: "0.7rem",
                      align: "center",
                      color: "#FFFFFF",
                    }}
                  >
                    Get unlimited access to skilled freelancers level up your
                    worklife
                  </DescriptionText>
                </div>
              </div>
            </div>
          </div>
        </div>
      </StyleContainer>
    </StyledBox>
  );
};

export default RelatedCategories;
