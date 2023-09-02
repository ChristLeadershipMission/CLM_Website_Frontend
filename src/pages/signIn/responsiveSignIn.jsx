import React from 'react';
import SignInDesktop from './SignInDesktop';
import SignInMobile from './SignInMobile';

const SignIn = ({viewSignUp}) => {
  return (
    <>
      <SignInDesktop viewSignUp={viewSignUp}/>
      <SignInMobile viewSignUp={viewSignUp}/>
    </>
  )
}

export default SignIn