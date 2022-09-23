import React from "react";
import SignUpQuestion from "../components/Authentication/SignUp/SignUpQuestion";
import FooterNotLoggedIn from "../components/NotLoggedIn/FooterNotLoggedIn";

type Props = {};

export default function register({}: Props) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "60px" }}>
      <SignUpQuestion />
    </div>
  );
}
