import React from "react";
import SignUpDesktop from "./SignUpDesktop";
import SignUpMobile from "./SignUpMobile";

const SignUp = ({viewSignIn}) => {
  return (
    <>
      <div>
        <SignUpDesktop viewSignIn={viewSignIn}/>
        <SignUpMobile viewSignIn={viewSignIn}/>
      </div>
    </>
  );
};

export default SignUp;
