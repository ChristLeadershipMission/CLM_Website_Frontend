import { useState } from "react";
import SignIn from "../signIn/responsiveSignIn";
import SignUp from "../signUp/responsiveSignUp";


const FormPage = () => {
  const [navigateForms, setNavigateForms] = useState(true);

  const navigateFormsPages = (value)=>{
    setNavigateForms(value)
  };

  return (
    <>
      <div className="bg-gray-200 h-screen w-screen overflow-hidden">
        {navigateForms ? <SignUp viewSignIn = {navigateFormsPages} /> : <SignIn viewSignUp = {navigateFormsPages} />}
      </div>
    </>
  );
};


export default FormPage;
