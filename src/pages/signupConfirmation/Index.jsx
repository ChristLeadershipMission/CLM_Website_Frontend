import successfullMan from "./Images/successfullMan.svg";
import successfullIcon from "./Images/successfullIcon.svg";
import "./signupConfirmation.css";

const SignupConfirmation = () => {
  return (
    <>
      <div className="bg-[#0D0A25]  h-screen w-screen overflow-x-hidden  relative">
        <img
          src="src\assets\pictures\clmLogo.svg"
          alt=""
          className="absolute top-[9rem] w-[100%] h-[50%] -ml-1 rounded-lg opacity-[.04] 
          md:-ml-[0.1vw] lg:ml-[2vw] md:h-[80%] md:top-[5rem]"
        />
        <div className="flex justify-center items-center h-screen relative">
          <div className="ring ring-[#312686] p-4 h-[60vh] w-[60vw] md:w-[50vw] relative">
            <div className="flex justify-center relative md:top-[10vh] lg:top-0">
              <img
                src={successfullIcon}
                alt=""
                className="absolute lg:left-[14vw]"
              />
              <img
                src={successfullMan}
                alt="man"
                className="absolute lg:right-[14vw]"
              />
            </div>
            <div className="relative top-[32vh]  text-center text-white">
              <h1 className="text-xl md:text-2xl">
                Congratulations <br /> you have successfully Registered!
              </h1>
              <h1 className="text-sm py-5">
                check your mail box for verification. 😇 
              </h1>
             </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupConfirmation;
